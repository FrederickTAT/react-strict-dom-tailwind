import { css } from "react-strict-dom";
import { StyleObject } from "../types";

export const customStyles: StyleObject = css.create({
    /* Layout */
    "flex-cc": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    "flex-ce": {
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
    },
    "flex-cb": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    "flex-sb": {
        display: "flex",
        alignItems: "start",
        justifyContent: "space-between",
    },
    "flex-cs": {
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
    },
    "flex-ca": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
    },
    "flex-ss": {
        display: "flex",
        alignItems: "start",
        justifyContent: "start",
    },
    "flex-sc": {
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
    },
    "flex-ee": {
        display: "flex",
        alignItems: "end",
        justifyContent: "end",
    },
    "absolute-center": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    "position-cc": {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    "position-x-c": {
        left: "50%",
        transform: "translateX(-50%)",
    },
    "position-y-c": {
        top: "50%",
        transform: "translateY(-50%)",
    },
})