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
      <Dialog 
        fullScreen open={open}
        onClose={handleClose}
        {...props}
      >
        <div className={style["modal__bar"]}>
          <Btn onClick={handleClose} theme='button-bar'>
            <Btn.ArrowBackIcon styles={{fontSize: '2.5rem'}} />
          </Btn>
          <DialogTitle className={style["modal__title"]}>
            {title}
          </DialogTitle>
        </div>
        <DialogContent className={style["modal__content"]}>
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
