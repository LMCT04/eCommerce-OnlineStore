import React from "react";
import style from "./button.module.css";
import { Add, Save, ModeEdit, ArrowBackIosNew } from "@mui/icons-material";

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
    let themeColor = style["button-normal"];
    if (theme === "secondary") {
        themeColor = style.btnSecondary;
    }
    if (theme === "secondaryActive") {
        themeColor = style.btnSecondaryActive;
    }
    if (theme === "circle") {
        themeColor = style.btn__circle;
    }
    //

    return (
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
    );
};

const Title = ({ children, text, styles, ...props }) => (
    <>
        <h2 className={style.h2} style={styles} {...props}>
            {text}
        </h2>
    </>
);

const AddIcon = ({ children, size, ...props }) => (
        <Add fontSize={size} {...props}/>
);

const SaveIcon = ({ children, size, ...props }) => (
        <Save fontSize={size} {...props}/>
);

const EditIcon = ({ children, styles, ...props }) => (
        <ModeEdit style={styles} {...props}/>
);

const ArrowBackIcon = ({ children, size, ...props }) => (
        <ArrowBackIosNew fontSize={size} {...props}/>
);

Btn.Title = Title;
Btn.AddIcon = AddIcon;
Btn.SaveIcon = SaveIcon;
Btn.EditIcon = EditIcon;
Btn.ArrowBackIcon = ArrowBackIcon;

export default Btn;
