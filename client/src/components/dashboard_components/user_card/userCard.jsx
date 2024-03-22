import React, { useState } from "react";
import style from "./userCard.module.css";
import { Dlg, Btn } from "../../compounds_components";

const UserCard = ({ elements }) => {
  const { name, userName, mail, password, image, lastname, role } = elements;

  const [open, setOpen] = useState(false);
  const [view, setView] = useState("password");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleView = () => {
    setView(view === "password" ? "text" : "password");
  };

  return (
    <>
      <article className={style.card}>
        <div className={style.imgCont}>
          <img src={image} alt="userImg" className={style.img} />
        </div>
        <section className={style.infoCont}>
          <h2 className={style.name}>{name}</h2>
          <Dlg
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
            title="Profile"
            btnTxt="More Info"
            typeButton="text"
          >
            <div className={style["modal__top"]}>
              <span className={style["modal__top-span"]}>
                <img src={image} className={style["modal__top-img"]} />
              </span>
              <h2
                className={style["modal__top-h2"]}
              >{`${name} ${lastname}`}</h2>
              <h3 className={style["modal__top-h3"]}>{role.toUpperCase()}</h3>
            </div>
            <div className={style["modal__mid"]}>
              <div className={style["modal__mid-div"]}>
                <label htmlFor="mail" className={style["modal__mid-lb"]}>
                  Email:
                </label>
                <input
                  name="mail"
                  type="text"
                  defaultValue={mail}
                  disabled
                  className={style["modal__mid-input"]}
                />
              </div>
              <div className={style["modal__mid-div"]}>
                <label htmlFor="username" className={style["modal__mid-lb"]}>
                  Username:
                </label>
                <input
                  name="username"
                  type="text"
                  defaultValue={userName}
                  disabled
                  className={style["modal__mid-input"]}
                />
              </div>
              <div className={style["modal__mid-div"]}>
                <label htmlFor="password" className={style["modal__mid-lb"]}>
                  Password:
                </label>
                <div className={style["modal__mid-inputDiv"]}>
                  <input
                    name="password"
                    type={view}
                    defaultValue={password}
                    disabled
                    className={style["modal__mid-input"]}
                  />
                  <Btn
                    styles={{
                      background: "transparent",
                      border: "0",
                      borderLeft: "1px solid rgb(142, 97, 248)",
                    }}
                    onClick={handleView}
                  >
                    {view === "password" ? (
                      <Btn.ViewOff
                        styles={{
                          fontSize: "1.2rem",
                          color: "rgb(142, 97, 248)",
                        }}
                      />
                    ) : (
                      <Btn.ViewOn
                        styles={{
                          fontSize: "1.2rem",
                          color: "rgb(142, 97, 248)",
                        }}
                      />
                    )}
                  </Btn>
                </div>
              </div>
            </div>
          </Dlg>
        </section>
      </article>
    </>
  );
};

export default UserCard;
