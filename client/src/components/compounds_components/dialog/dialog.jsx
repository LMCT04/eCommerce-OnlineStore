import React from "react";
import style from "./dialog.module.css";
import { Dialog, AppBar, DialogTitle, DialogContent } from "@mui/material";
import { Btn } from "../index.js";
import { ArrowBackIosNew } from "@mui/icons-material";

const Dlg = ({
    children,
    onClick,
    onClick1,
    open,
    onClose,
    title,
    btnTxt,
    ...props
}) => {
    return (
        <>
            <Btn onClick={onClick}>
                <Btn.Title text={btnTxt} />
            </Btn>
            <Dialog fullScreen open={open} onClose={onClose} {...props}>
                <AppBar
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        background: "#5A03D5",
                        color: "#D9D9D9",
                        alignItems: "center",
                        height: "8dvh",
                    }}
                >
                    <button onClick={onClick1} className={style.btnClose}>
                        <ArrowBackIosNew fontSize="large" />
                    </button>
                    <DialogTitle
                        sx={{ fontSize: "1.2rem", fontWeight: "550" }}
                        className={style.title}
                    >
                        {title}
                    </DialogTitle>
                </AppBar>
                <DialogContent
                    sx={{
                        background: "#d9d9d9",
                        marginTop: "8dvh",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    {children}
                </DialogContent>
            </Dialog>
        </>
    );
};

const ImgCont = ({ children, src, ...props }) => (
    <>
        <div className={style.imgCont}>
            <img src={src} alt="userImg" className={style.img} />
        </div>
    </>
);

const FullName = ({ children, text, ...props }) => (
    <>
        <h1 className={style.h1} >{text}</h1>
    </>
)

const TxtField = ({ children, lb, container, ...props }) => (
    <>
        <div className={style.userTxt}>
            <label className={style.label}>{lb}:</label>
            <p className={style.p}>{container}</p>
        </div>
    </>
);

Dlg.ImgCont = ImgCont;
Dlg.TxtField = TxtField;
Dlg.FullName = FullName;

export default Dlg;
