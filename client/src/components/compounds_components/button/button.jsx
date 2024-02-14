import React from "react";
import style from "./button.module.css";

const Btn = ({ children, theme, onClick, ...props }) => {
    // CSS Button
    let themeColor = style.btnPrimary;
    if (theme === "secondary") {
        themeColor = style.btnSecondary;
    }
    if (theme === "secondaryActive") {
        themeColor = style.btnSecondaryActive;
    }
    // ---

    return (
        <>
            <button className={themeColor} onClick={onClick} {...props}>
                {children}
            </button>
        </>
    );
};

const Title = ({ children, text, ...props }) => (
    <h2 className={style.h2}  {...props}>{children || text}</h2>
);

Btn.Title = Title;

export default Btn;
