/**
 * Import tracking tests
 * Test that the rule only validates tw() calls from react-strict-dom-tailwind
 */

import { RuleTester } from 'eslint';
import { noInvalidClasses } from '../rules/no-invalid-classes';

const ruleTester = new RuleTester();

// Test basic import tracking functionality
ruleTester.run('import tracking basic', noInvalidClasses, {
  valid: [
    // Should not validate tw() calls without imports
    { code: 'tw("unknown-class");' },
    // Should validate only tw() from react-strict-dom-tailwind with valid classes
    { code: 'import { tw } from "react-strict-dom-tailwind"; tw("flex");' },
  ],
  invalid: [
    // Should validate tw() from react-strict-dom-tailwind with invalid classes
    {
      code: 'import { tw } from "react-strict-dom-tailwind"; tw("unknown-class");',
      errors: [{ messageId: 'invalidClass' }],
    },
  ],
});

// Test no import scenarios - should ignore all tw() calls
ruleTester.run('import tracking no imports', noInvalidClasses, {
  valid: [
    // Should ignore tw() calls without any imports
    { code: 'tw("completely-invalid-class");' },
    { code: 'tw("fake-class-123");' },
    { code: 'tw(`template-${variable}-class`);' },
    { code: 'tw("multiple", "invalid", "classes");' },
    // Should ignore other function calls that look similar
    { code: 'tailwind("invalid-class");' },
    { code: 'css("unknown-class");' },
    { code: 'className("fake-class");' },
    // Should ignore method calls
    { code: 'obj.tw("invalid-class");' },
    { code: 'this.tw("fake-class");' },
    // Should ignore when there are other unrelated imports
    { code: 'import React from "react"; tw("invalid-class");' },
    { code: 'import { useState } from "react"; tw("fake-class");' },
    { code: 'import styled from "styled-components"; tw("unknown-class");' },
  ],
  invalid: [
    // No invalid cases - all tw() calls should be ignored without proper imports
  ],
});

// Test aliased imports
ruleTester.run('import tracking aliases', noInvalidClasses, {
  valid: [
    // Should handle aliased imports with valid classes
    { code: 'import { tw as tailwind } from "react-strict-dom-tailwind"; tailwind("flex");' },
  ],
  invalid: [
    // Should validate aliased tw() from react-strict-dom-tailwind
    {
      code: 'import { tw as tailwind } from "react-strict-dom-tailwind"; tailwind("unknown-class");',
      errors: [{ messageId: 'invalidClass' }],
    },
  ],
});

// Test namespace imports
ruleTester.run('import tracking namespace', noInvalidClasses, {
  valid: [
    // Should handle namespace imports with valid classes
    { code: 'import * as rsd from "react-strict-dom-tailwind"; rsd.tw("flex");' },
  ],
  invalid: [
    // Should validate namespace tw() from react-strict-dom-tailwind
    {
      code: 'import * as rsd from "react-strict-dom-tailwind"; rsd.tw("unknown-class");',
      errors: [{ messageId: 'invalidClass' }],
    },
  ],
});

// Test non-react-strict-dom-tailwind imports
ruleTester.run('import tracking non-react-strict-dom-tailwind', noInvalidClasses, {
  valid: [
    // Should not validate tw() calls from other libraries
    { code: 'import { tw } from "other-library"; tw("unknown-class");' },
    { code: 'import { tw } from "@some/other-package"; tw("invalid-class");' },
    { code: 'import { tw as tailwind } from "different-lib"; tailwind("non-existent-class");' },
    { code: 'import * as other from "another-package"; other.tw("fake-class");' },
    // Mixed imports - only validate react-strict-dom-tailwind
    { code: 'import { tw } from "other-lib"; import { tw as rsdTw } from "react-strict-dom-tailwind"; tw("invalid"); rsdTw("flex");' },
  ],
  invalid: [
    // Should still validate react-strict-dom-tailwind imports in mixed scenarios
    {
      code: 'import { tw } from "other-lib"; import { tw as rsdTw } from "react-strict-dom-tailwind"; tw("invalid"); rsdTw("unknown-class");',
      errors: [{ messageId: 'invalidClass' }],
    },
  ],
});