import React from "react";
import style from "./dialog.module.css";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { Btn } from "../index.js";

const Dlg = ({
  children,
  open,
  handleOpen,
  handleClose,
  title,
  typeButton,
  btnTxt,
  btnStyle,
  btnIStyle,
  ...props
}) => {
  const renderButton = () => {
    switch (typeButton){
      case 'text':
        return(
          <Btn onClick={handleOpen} styles={btnStyle}>
            <Btn.Title text={btnTxt}/>
          </Btn>
        )
      case 'icon':
        return(
          <Btn onClick={handleOpen} styles={btnStyle}>
            <Btn.EditIcon styles={btnIStyle}/>
          </Btn>
        )
      case 'text-icon':
        return(
          <Btn onClick={handleOpen} styles={btnStyle}>
            <Btn.Title text={btnTxt}/>
            <Btn.EditIcon styles={btnIStyle}/>
          </Btn>
        )
    }
  }

  return (
    <>
      { renderButton() }
      <Dialog fullScreen open={open} onClose={handleClose} {...props}>
        <div>
          <Btn onClick={handleClose}>
            <Btn.ArrowBackIcon />
          </Btn>
          <DialogTitle
            sx={{ fontSize: "1.2rem", fontWeight: "550" }}
            className={style.title}
          >
            {title}
          </DialogTitle>
        </div>
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
    <h1 className={style.h1}>{text}</h1>
  </>
);

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
