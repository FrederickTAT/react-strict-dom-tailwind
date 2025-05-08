import { css } from "react-strict-dom";

interface StyleObject {
    [key: string]: any;
}

// 动态样式处理函数
export const dynamicStyles: StyleObject = css.create({
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

    text: (text: string | number) => ({
        fontSize: text,
    }),

    color: (color: string) => ({
        color: color,
    }),

    bg: (bg: string) => ({
        backgroundColor: bg,
    }),

    border: (border: string) => ({
        borderColor: border,
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

    aspect: (ratio: string | number) => ({
        aspectRatio: ratio,
    }),

    columns: (columns: string | number) => ({
        columns: columns,
    }),

    object: (object: string) => ({
        objectPosition: object,
    }),

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

    z: (zIndex: string | number) => ({
        zIndex: zIndex,
    }),

    basis: (basis: string | number) => ({
        flexBasis: basis,
    }),

    flex: (flex: string | number) => ({
        flex: flex,
    }),

    order: (order: string | number) => ({
        order: order,
    }),
})
