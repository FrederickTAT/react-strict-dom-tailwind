import { css } from "react-strict-dom";

interface StyleObject {
    [key: string]: any;
}

export const customStyles: StyleObject = css.create({
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

    minW: (minW: string | number) => ({
        minWidth: minW,
    }),

    minH: (minH: string | number) => ({
        minHeight: minH,
    }),

    maxW: (maxW: string | number) => ({
        maxWidth: maxW,
    }),

    maxH: (maxH: string | number) => ({
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

    borderX: (borderWidth: string | number) => ({
        borderLeftWidth: borderWidth,
        borderRightWidth: borderWidth,
    }),

    borderY: (borderWidth: string | number) => ({
        borderTopWidth: borderWidth,
        borderBottomWidth: borderWidth,
    }),

    borderTop: (borderWidth: string | number) => ({
        borderTopWidth: borderWidth,
    }),

    borderRight: (borderWidth: string | number) => ({
        borderRightWidth: borderWidth,
    }),

    borderBottom: (borderWidth: string | number) => ({
        borderBottomWidth: borderWidth,
    }),

    borderLeft: (borderWidth: string | number) => ({
        borderLeftWidth: borderWidth,
    }),

    borderStyle: (borderStyle: string) => ({
        borderStyle: borderStyle,
    }),
});
