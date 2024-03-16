import React from "react";
import style from "./accordion.module.css";
import { Switch } from '@mui/material'

const Acn = ({ children, text, status, ...props }) => {
  const summaryStatus = status
    ? style["summary__status-active"]
    : style["summary__status-inactive"];

  return (
    <>
      <details className={style["details"]}>
        <summary className={style["summary"]}>
          <h4 className={style["summary__h4"]}>{text}</h4>
          <div className={summaryStatus} />
        </summary>
        {children}
      </details>
    </>
  );
};

const Content = ({ children, ...props }) => {
  return (
    <>
      <div className={style["content"]}>{children}</div>
    </>
  );
};

const Top = ({ children, productId, ...props }) => {
  return (
    <>
      <div className={style["content__top"]}>
        <h5>ProductId: {productId}</h5>
        {children}
      </div>
    </>
  );
};

const Central = ({ children, ...props }) => {
  return (
    <>
      <div className={style["content__central"]}>{children}</div>
    </>
  );
};

const Bottom = ({ children, ...props }) => {
  return(
    <>
      <div className={style["content__bottom"]}>{children}</div>
    </>
  )
};

const Img = ({ children, src, styles, ...props }) => {
  return (
      <div className={style["image-div"]} style={styles}>
        <img src={src} className={style["image-img"]} />
      </div>
  );
};

const Info = ({ children, text, styles, ...props }) => {
  return (
      <div className={style["info-div"]}>
        <p style={styles}>{text}</p>
      </div>
  )
}

const SwitchItem = ({ children, checked, onChange, ...props }) => {
  return (
    <>
      <Switch checked={checked} onChange={onChange} />
    </>
  )
}

Acn.Content = Content;
Content.Top = Top;
Content.Central = Central;
Central.Img = Img;
Central.Info = Info;
Content.Bottom = Bottom;
Bottom.SwitchItem = SwitchItem;

export default Acn;
