import React from "react";
import style from "./userCard.module.css";
import { Dlg } from "../../compounds_components";

const UserCard = ({ elements }) => {
    const { name, userName, mail, password, image, lastname, role } = elements;

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                        onClick={handleOpen}
                        open={open}
                        onClose={handleClose}
                        onClick1={handleClose}
                        title='User Profile'
                        btnTxt='More Info'
                    >
                        <Dlg.ImgCont src={image} />
                        <Dlg.FullName text={name + ' ' + lastname} />
                        <Dlg.TxtField lb='Username' container={userName} />
                        <Dlg.TxtField lb='Mail' container={mail} />
                        <Dlg.TxtField lb='Password' container={password} />
                        <Dlg.TxtField lb='Role' container={role} />
                    </Dlg>
                </section>
            </article>
        </>
    );
};

export default UserCard;
