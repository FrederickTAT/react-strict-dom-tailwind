import { TSESTree, TSESLint } from '@typescript-eslint/utils';

/**
 * Interface for class name position information
 */
export interface ClassNamePosition {
  className: string;
  start: number;
  end: number;
}

/**
 * Offset mapping interface for template string position mapping
 */
export interface OffsetMapping {
  start: number;
  end: number;
  originalStart: number;
  originalEnd: number;
}

/**
 * Rule options interface
 */
export interface RuleOptions {
  checkImports?: boolean;
  functionNames?: string[];
  excludeClasses?: string[];
}

/**
 * Template string reconstruction result interface
 */
export interface TemplateReconstructionResult {
  reconstructedText: string;
  offsetMap: OffsetMapping[];
}

/**
 * Calculate position information of class names in a string
 * @param text String containing class names
 * @returns Array of class name position information
 */
export function getClassNamePositions(text: string): ClassNamePosition[] {
  const positions: ClassNamePosition[] = [];
  const classNames = text.trim().split(/\s+/);
  let currentIndex = 0;

  for (const className of classNames) {
    if (className) {
      const startIndex = text.indexOf(className, currentIndex);
      if (startIndex !== -1) {
        positions.push({
          className,
          start: startIndex,
          end: startIndex + className.length
        });
        currentIndex = startIndex + className.length;
      }
    }
  }

  return positions;
}

/**
 * Parse configuration information from comments
 * @param context ESLint rule context
 * @param defaultFunctionNames Default function name list
 * @returns Configured function name list
 */
export function parseCommentConfig(
  context: TSESLint.RuleContext<any, any>,
  defaultFunctionNames: string[]
): string[] {
  const sourceCode = context.getSourceCode();
  const comments = sourceCode.getAllComments ? sourceCode.getAllComments() : [];

  for (const comment of comments) {
    const text = comment.value.trim();
    const configMatch = text.match(/eslint-plugin-react-strict-dom-tailwind\s+functions:\s*\[([^\]]+)\]/);
    if (configMatch) {
      const functionList = configMatch[1]
        .split(',')
        .map(name => name.trim().replace(/["']/g, ''))
        .filter(name => name.length > 0);
      return functionList;
    }
  }
  return defaultFunctionNames;
}

/**
 * Reconstruct template string, replacing expressions with placeholders
 * @param node Template string node
 * @param placeholder Placeholder string, defaults to 'VALUE'
 * @returns Reconstruction result
 */
export function reconstructTemplateLiteral(
  node: TSESTree.TemplateLiteral,
  placeholder: string = 'VALUE'
): { reconstructed: string; offsetMap: Array<{ originalStart: number; reconstructedStart: number; length: number }> } {
  let reconstructed = '';
  const offsetMap: Array<{ originalStart: number; reconstructedStart: number; length: number }> = [];

  for (let i = 0; i < node.quasis.length; i++) {
    const quasi = node.quasis[i];
    const quasiValue = quasi.value.cooked || quasi.value.raw;

    // Record the mapping between original and reconstructed positions
    offsetMap.push({
      originalStart: quasi.range![0] - node.range![0],
      reconstructedStart: reconstructed.length,
      length: quasiValue.length
    });

    reconstructed += quasiValue;

    // Add placeholder for expression (except for the last quasi)
    if (i < node.expressions.length) {
      const expr = node.expressions[i];
      // Check if this is a dynamic style pattern like h-[${height}]
      const beforeExpr = reconstructed;
      const afterExprQuasi = node.quasis[i + 1];
      const afterExpr = afterExprQuasi ? (afterExprQuasi.value.cooked || afterExprQuasi.value.raw) : '';

      // Look for patterns like "h-[" before and "]" after
      const isDynamicStyle = /[a-zA-Z]+-\[$/.test(beforeExpr) && /^\]/.test(afterExpr);

      if (isDynamicStyle) {
        // For dynamic styles, use a placeholder that represents a valid value
        reconstructed += placeholder;
      } else {
        // For other expressions, use a placeholder that will be treated as invalid
        reconstructed += 'EXPR';
      }
    }
  }

  return { reconstructed, offsetMap };
}

/**
 * Check if call expression is from react-strict-dom-tailwind import
 * @param node Call expression node
 * @param twImports Set of directly imported tw function names
 * @param twMemberImports Mapping of member imports (object name -> property name)
 * @returns Whether it's from react-strict-dom-tailwind
 */
export function isTwFromReactStrictDomTailwind(
  node: TSESTree.CallExpression,
  twImports: Set<string>,
  twMemberImports: Map<string, string>
): boolean {
  if (node.callee.type === 'Identifier') {
    return twImports.has(node.callee.name);
  } else if (
    node.callee.type === 'MemberExpression' &&
    node.callee.object.type === 'Identifier' &&
    node.callee.property.type === 'Identifier'
  ) {
    const objectName = node.callee.object.name;
    const propertyName = node.callee.property.name;
    return twMemberImports.get(objectName) === propertyName;
  }
  return false;
}

/**
 * Calculate actual position in source code (considering quotes, etc.)
 * @param node AST node
 * @param relativeStart Relative start position
 * @param relativeEnd Relative end position
 * @param quoteOffset Quote offset, defaults to 1
 * @returns Actual start and end positions
 */
export function calculateActualPosition(
  node: TSESTree.Node,
  relativeStart: number,
  relativeEnd: number,
  quoteOffset: number = 1
): { startPos: { line: number; column: number }; endPos: { line: number; column: number } } {
  return {
    startPos: {
      line: node.loc!.start.line,
      column: node.loc!.start.column + relativeStart + quoteOffset
    },
    endPos: {
      line: node.loc!.start.line,
      column: node.loc!.start.column + relativeEnd + quoteOffset
    }
  };
}

/**
 * Find original position of class name in offset mapping
 * @param reconstructedPos Position in reconstructed text
 * @param offsetMap Offset mapping array
 * @param node Template string node
 * @returns Original position information
 */
export function findOriginalPosition(
  reconstructedPos: number,
  offsetMap: Array<{ originalStart: number; reconstructedStart: number; length: number }>,
  node: TSESTree.TemplateLiteral
): { line: number; column: number } {
  for (const mapping of offsetMap) {
    if (reconstructedPos >= mapping.reconstructedStart && 
        reconstructedPos < mapping.reconstructedStart + mapping.length) {
      const offsetInQuasi = reconstructedPos - mapping.reconstructedStart;
      const originalOffset = mapping.originalStart + offsetInQuasi;
      
      // Calculate line and column based on node's start position
      return {
        line: node.loc!.start.line,
        column: node.loc!.start.column + originalOffset
      };
    }
  }
  
  // Fallback to node start if not found
  return {
    line: node.loc!.start.line,
    column: node.loc!.start.column
  };
}

/**
 * Create standard rule options schema
 * @param description Rule description
 * @returns Rule options schema
 */
export function createRuleOptionsSchema(description: string) {
  return [
    {
      type: 'object',
      properties: {
        checkImports: {
          type: 'boolean',
          description: 'Whether to check if tw() is imported from react-strict-dom-tailwind before validation',
          default: true
        },
        functionNames: {
          type: 'array',
          items: {
            type: 'string'
          },
          description: 'Function names to check when checkImports is false. Defaults to ["tw"]',
          default: ['tw']
        },
        excludeClasses: {
          type: 'array',
          items: {
            type: 'string'
          },
          description: 'Class names to exclude from validation (will not report errors for these classes)',
          default: []
        }
      },
      additionalProperties: false
    }
  ];
}

/**
 * Get rule options with default values
 * @param context ESLint rule context
 * @returns Processed rule options
 */
export function getRuleOptions(context: TSESLint.RuleContext<any, [RuleOptions]>): {
  checkImports: boolean;
  functionNames: string[];
  configuredFunctionNames: string[];
  excludeClasses: string[];
} {
  const options = (context.options && context.options[0]) || { checkImports: true, functionNames: ['tw'], excludeClasses: [] };
  const checkImports = options.checkImports !== false;
  const functionNames = options.functionNames || ['tw'];
  const excludeClasses = options.excludeClasses || [];
  const configuredFunctionNames = parseCommentConfig(context, functionNames);

  return {
    checkImports,
    functionNames,
    configuredFunctionNames,
    excludeClasses
  };
}

/**
 * Create import tracker
 * @returns Object containing import sets and tracking functions
 */
export function createImportTracker() {
  const twImports = new Set<string>();
  const twMemberImports = new Map<string, string>();

  return {
    twImports,
    twMemberImports,
    /**
     * Handle import declaration
     */
    handleImportDeclaration(node: TSESTree.ImportDeclaration) {
      if (node.source.value === 'react-strict-dom-tailwind') {
        for (const specifier of node.specifiers) {
          if (specifier.type === 'ImportSpecifier' && specifier.imported.name === 'tw') {
            twImports.add(specifier.local.name);
          } else if (specifier.type === 'ImportNamespaceSpecifier') {
            twMemberImports.set(specifier.local.name, 'tw');
          }
        }
      }
    },
    /**
     * Check if call is from react-strict-dom-tailwind
     */
    isTwFromReactStrictDomTailwind(node: TSESTree.CallExpression): boolean {
      return isTwFromReactStrictDomTailwind(node, twImports, twMemberImports);
    }
  };
}