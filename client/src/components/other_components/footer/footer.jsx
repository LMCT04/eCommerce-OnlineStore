import React from "react";
import style from "./footer.module.css";
import { X, Instagram, LinkedIn, GitHub } from "@mui/icons-material";

const Footer = () => {
    return (
        <>
            <footer className={style.background}>
                <section className={style.info}>
                    <ul className={style.list}>
                        <h2>Lista</h2>
                        <li className={style.item}> Items List </li>
                        <li className={style.item}> Items List </li>
                        <li className={style.item}> Items List </li>
                        <li className={style.item}> Items List </li>
                    </ul>
                    <ul className={style.list}>
                        <h2>Lista</h2>
                        <li className={style.item}> Items List </li>
                        <li className={style.item}> Items List </li>
                        <li className={style.item}> Items List </li>
                        <li className={style.item}> Items List </li>
                    </ul>
                    <ul className={style.list}>
                        <h2>Lista</h2>
                        <li className={style.item}> Items List </li>
                        <li className={style.item}> Items List </li>
                        <li className={style.item}> Items List </li>
                        <li className={style.item}> Items List </li>
                    </ul>
                </section>
                <section className={style.consultation}>
                    <fieldset>
                        <legend>
                            SEND US YOUR QUESTIONS
                        </legend>
                        <input type="text" />
                        <button>
                            SEND
                        </button>
                    </fieldset>
                </section>
                <section className={style.redesContent}>
                    <h3>Contact Us</h3>

                    <div className={style.icons}>
                        <X fontSize="large" />
                        <Instagram fontSize="large" />
                        <LinkedIn fontSize="large" />
                        <GitHub fontSize="large" />
                    </div>
                </section>
                <p className={style.p} >
                    Copyright 2024 Online Store. All rights reserved.
                </p>
            </footer>
        </>
    );
};

export default Footer;
