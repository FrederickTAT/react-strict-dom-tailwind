import { css } from "react-strict-dom";

interface StyleObject {
    [key: string]: any;
}

// Dynamic style processing functions
export const dynamicStyles: StyleObject = css.create({
    // Width and Height
    w: (w: string | number) => ({
        width: w,
    }),
    h: (h: string | number) => ({
        height: h,
    }),
    size: (size: string | number) => ({
        width: size,
        height: size,
    }),
    'min-w': (minW: string | number) => ({
        minWidth: minW,
    }),
    'min-h': (minH: string | number) => ({
        minHeight: minH,
    }),
    'max-w': (maxW: string | number) => ({
        maxWidth: maxW,
    }),
    'max-h': (maxH: string | number) => ({
        maxHeight: maxH,
    }),

    // Margin
    m: (m: string | number) => ({
        margin: m,
    }),
    mx: (mx: string | number) => ({
        marginLeft: mx,
        marginRight: mx,
    }),
    my: (my: string | number) => ({
        marginTop: my,
        marginBottom: my,
    }),
    mt: (mt: string | number) => ({
        marginTop: mt,
    }),
    mr: (mr: string | number) => ({
        marginRight: mr,
    }),
    mb: (mb: string | number) => ({
        marginBottom: mb,
    }),
    ml: (ml: string | number) => ({
        marginLeft: ml,
    }),

    // Padding
    p: (p: string | number) => ({
        padding: p,
    }),
    px: (px: string | number) => ({
        paddingLeft: px,
        paddingRight: px,
    }),
    py: (py: string | number) => ({
        paddingTop: py,
        paddingBottom: py,
    }),
    pt: (pt: string | number) => ({
        paddingTop: pt,
    }),
    pr: (pr: string | number) => ({
        paddingRight: pr,
    }),
    pb: (pb: string | number) => ({
        paddingBottom: pb,
    }),
    pl: (pl: string | number) => ({
        paddingLeft: pl,
    }),

    // Typography
    text: (text: string | number) => ({
        fontSize: text,
    }),
    leading: (lineHeight: string | number) => ({
        lineHeight: lineHeight,
    }),
    tracking: (letterSpacing: string | number) => ({
        letterSpacing: letterSpacing,
    }),
    indent: (textIndent: string | number) => ({
        textIndent: textIndent,
    }),
    'line-clamp': (lineClamp: string | number) => ({
        WebkitLineClamp: lineClamp,
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
    }),

    // Colors
    color: (color: string) => ({
        color: color,
    }),
    bg: (bg: string) => ({
        backgroundColor: bg,
    }),
    'bg-opacity': (opacity: string | number) => ({
        '--tw-bg-opacity': opacity,
    }),
    'text-opacity': (opacity: string | number) => ({
        '--tw-text-opacity': opacity,
    }),

    // Borders
    border: (borderWidth: string | number) => ({
        borderWidth: borderWidth,
    }),
    'border-x': (borderWidth: string | number) => ({
        borderLeftWidth: borderWidth,
        borderRightWidth: borderWidth,
    }),
    'border-y': (borderWidth: string | number) => ({
        borderTopWidth: borderWidth,
        borderBottomWidth: borderWidth,
    }),
    'border-t': (borderWidth: string | number) => ({
        borderTopWidth: borderWidth,
    }),
    'border-r': (borderWidth: string | number) => ({
        borderRightWidth: borderWidth,
    }),
    'border-b': (borderWidth: string | number) => ({
        borderBottomWidth: borderWidth,
    }),
    'border-l': (borderWidth: string | number) => ({
        borderLeftWidth: borderWidth,
    }),
    'border-color': (color: string) => ({
        borderColor: color,
    }),
    'border-opacity': (opacity: string | number) => ({
        '--tw-border-opacity': opacity,
    }),

    // Border Radius
    'rounded': (borderRadius: string | number) => ({
        borderRadius: borderRadius,
    }),
    'rounded-s': (borderRadius: string | number) => ({
        borderStartStartRadius: borderRadius,
        borderEndStartRadius: borderRadius,
    }),
    'rounded-e': (borderRadius: string | number) => ({
        borderStartEndRadius: borderRadius,
        borderEndEndRadius: borderRadius,
    }),
    'rounded-t': (borderRadius: string | number) => ({
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
    }),
    'rounded-r': (borderRadius: string | number) => ({
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
    }),
    'rounded-b': (borderRadius: string | number) => ({
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
    }),
    'rounded-l': (borderRadius: string | number) => ({
        borderTopLeftRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
    }),
    'rounded-tl': (borderRadius: string | number) => ({
        borderTopLeftRadius: borderRadius,
    }),
    'rounded-tr': (borderRadius: string | number) => ({
        borderTopRightRadius: borderRadius,
    }),
    'rounded-br': (borderRadius: string | number) => ({
        borderBottomRightRadius: borderRadius,
    }),
    'rounded-bl': (borderRadius: string | number) => ({
        borderBottomLeftRadius: borderRadius,
    }),

    // Positioning
    top: (top: string | number) => ({
        top: top,
    }),
    right: (right: string | number) => ({
        right: right,
    }),
    bottom: (bottom: string | number) => ({
        bottom: bottom,
    }),
    left: (left: string | number) => ({
        left: left,
    }),
    inset: (inset: string | number) => ({
        top: inset,
        right: inset,
        bottom: inset,
        left: inset,
    }),
    'inset-x': (inset: string | number) => ({
        left: inset,
        right: inset,
    }),
    'inset-y': (inset: string | number) => ({
        top: inset,
        bottom: inset,
    }),
    z: (zIndex: string | number) => ({
        zIndex: zIndex,
    }),

    // Flexbox & Grid
    basis: (basis: string | number) => ({
        flexBasis: basis,
    }),
    flex: (flex: string | number) => ({
        flex: flex,
    }),
    grow: (grow: string | number) => ({
        flexGrow: grow,
    }),
    shrink: (shrink: string | number) => ({
        flexShrink: shrink,
    }),
    order: (order: string | number) => ({
        order: order,
    }),
    'grid-cols': (cols: string | number) => ({
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
    }),
    'grid-rows': (rows: string | number) => ({
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
    }),
    'col-span': (span: string | number) => ({
        gridColumn: `span ${span} / span ${span}`,
    }),
    'col-start': (start: string | number) => ({
        gridColumnStart: start,
    }),
    'col-end': (end: string | number) => ({
        gridColumnEnd: end,
    }),
    'row-span': (span: string | number) => ({
        gridRow: `span ${span} / span ${span}`,
    }),
    'row-start': (start: string | number) => ({
        gridRowStart: start,
    }),
    'row-end': (end: string | number) => ({
        gridRowEnd: end,
    }),
    gap: (gap: string | number) => ({
        gap: gap,
    }),
    'gap-x': (gapX: string | number) => ({
        columnGap: gapX,
    }),
    'gap-y': (gapY: string | number) => ({
        rowGap: gapY,
    }),

    // Spacing
    space: (space: string | number) => ({
        '--tw-space-x-reverse': '0',
        marginRight: `calc(${space} * var(--tw-space-x-reverse))`,
        marginLeft: `calc(${space} * calc(1 - var(--tw-space-x-reverse)))`,
    }),
    'space-x': (space: string | number) => ({
        '--tw-space-x-reverse': '0',
        marginRight: `calc(${space} * var(--tw-space-x-reverse))`,
        marginLeft: `calc(${space} * calc(1 - var(--tw-space-x-reverse)))`,
    }),
    'space-y': (space: string | number) => ({
        '--tw-space-y-reverse': '0',
        marginBottom: `calc(${space} * var(--tw-space-y-reverse))`,
        marginTop: `calc(${space} * calc(1 - var(--tw-space-y-reverse)))`,
    }),

    // Effects
    opacity: (opacity: string | number) => ({
        opacity: opacity,
    }),
    'shadow': (shadow: string) => ({
        boxShadow: shadow,
    }),
    'blur': (blur: string | number) => ({
        filter: `blur(${blur})`,
    }),
    'brightness': (brightness: string | number) => ({
        filter: `brightness(${brightness})`,
    }),
    'contrast': (contrast: string | number) => ({
        filter: `contrast(${contrast})`,
    }),
    'grayscale': (amount: string | number) => ({
        filter: `grayscale(${amount})`,
    }),
    'hue-rotate': (angle: string | number) => ({
        filter: `hue-rotate(${angle})`,
    }),
    'invert': (amount: string | number) => ({
        filter: `invert(${amount})`,
    }),
    'saturate': (amount: string | number) => ({
        filter: `saturate(${amount})`,
    }),
    'sepia': (amount: string | number) => ({
        filter: `sepia(${amount})`,
    }),

    // Transforms
    translate: (translate: string | number) => ({
        transform: `translate(${translate})`,
    }),
    'translate-x': (translateX: string | number) => ({
        transform: `translateX(${translateX})`,
    }),
    'translate-y': (translateY: string | number) => ({
        transform: `translateY(${translateY})`,
    }),
    rotate: (rotate: string | number) => ({
        transform: `rotate(${rotate})`,
    }),
    scale: (scale: string | number) => ({
        transform: `scale(${scale})`,
    }),
    'scale-x': (scaleX: string | number) => ({
        transform: `scaleX(${scaleX})`,
    }),
    'scale-y': (scaleY: string | number) => ({
        transform: `scaleY(${scaleY})`,
    }),
    skew: (skew: string | number) => ({
        transform: `skew(${skew})`,
    }),
    'skew-x': (skewX: string | number) => ({
        transform: `skewX(${skewX})`,
    }),
    'skew-y': (skewY: string | number) => ({
        transform: `skewY(${skewY})`,
    }),

    // Transitions and Animations
    'transition': (property: string) => ({
        transitionProperty: property,
    }),
    'duration': (duration: string | number) => ({
        transitionDuration: typeof duration === 'number' ? `${duration}ms` : duration,
    }),
    'ease': (easing: string) => ({
        transitionTimingFunction: easing,
    }),
    'delay': (delay: string | number) => ({
        transitionDelay: typeof delay === 'number' ? `${delay}ms` : delay,
    }),
    // Not support
    // 'animate': (animation: string) => ({
    //     animation: animation,
    // }),

    // Layout
    aspect: (ratio: string | number) => ({
        aspectRatio: ratio,
    }),
    columns: (columns: string | number) => ({
        columns: columns,
    }),
    'object-position': (position: string) => ({
        objectPosition: position,
    }),

    // Miscellaneous
    'content': (content: string) => ({
        content: content,
    }),
    'accent': (color: string) => ({
        accentColor: color,
    }),
    'caret': (color: string) => ({
        caretColor: color,
    }),
    'scroll-m': (margin: string | number) => ({
        scrollMargin: margin,
    }),
    'scroll-mx': (margin: string | number) => ({
        scrollMarginLeft: margin,
        scrollMarginRight: margin,
    }),
    'scroll-my': (margin: string | number) => ({
        scrollMarginTop: margin,
        scrollMarginBottom: margin,
    }),
    'scroll-mt': (margin: string | number) => ({
        scrollMarginTop: margin,
    }),
    'scroll-mr': (margin: string | number) => ({
        scrollMarginRight: margin,
    }),
    'scroll-mb': (margin: string | number) => ({
        scrollMarginBottom: margin,
    }),
    'scroll-ml': (margin: string | number) => ({
        scrollMarginLeft: margin,
    }),
    'scroll-p': (padding: string | number) => ({
        scrollPadding: padding,
    }),
    'scroll-px': (padding: string | number) => ({
        scrollPaddingLeft: padding,
        scrollPaddingRight: padding,
    }),
    'scroll-py': (padding: string | number) => ({
        scrollPaddingTop: padding,
        scrollPaddingBottom: padding,
    }),
    'scroll-pt': (padding: string | number) => ({
        scrollPaddingTop: padding,
    }),
    'scroll-pr': (padding: string | number) => ({
        scrollPaddingRight: padding,
    }),
    'scroll-pb': (padding: string | number) => ({
        scrollPaddingBottom: padding,
    }),
    'scroll-pl': (padding: string | number) => ({
        scrollPaddingLeft: padding,
    }),
    'stroke': (color: string) => ({
        stroke: color,
    }),
    'stroke-w': (width: string | number) => ({
        strokeWidth: width,
    }),
    'fill': (color: string) => ({
        fill: color,
    }),
})
