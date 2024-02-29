import React from "react";
import style from "./button.module.css";
import { Add } from "@mui/icons-material";

const Btn = ({
    children,
    theme,
    onClick,
    ariaControls,
    ariaHaspopup,
    styles,
    ...props
}) => {
    // CSS Button
    let themeColor = style.btnPrimary;
    if (theme === "secondary") {
        themeColor = style.btnSecondary;
    }
    if (theme === "secondaryActive") {
        themeColor = style.btnSecondaryActive;
    }
    if (theme === "circle") {
        themeColor = style.btn__circle;
    }
    // ---

    return (
        <>
            <button
                style={styles}
                className={themeColor}
                onClick={onClick}
                aria-controls={ariaControls}
                aria-haspopup={ariaHaspopup}
                {...props}
            >
                {children}
            </button>
        </>
    );
};

const Title = ({ children, text, ...props }) => (
    <>
        <h2 className={style.h2} {...props}>
            {children || text}
        </h2>
    </>
);

const Icon = ({ children, size, ...props }) => (
    <>
        <Add fontSize={size} {...props}></Add>
    </>
);

Btn.Title = Title;
Btn.Icon = Icon;

export default Btn;
