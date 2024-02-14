import React from "react";
import style from "./card.module.css";

const Card = ({ elements }) => {
    const {
        name,
        id,
        image,
        price,
        CategoryId,
        SubCategoryId,
    } = elements;

    const nameUpper = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <>
            <article className={style.background} >
                <header className={style.cardHeader} >
                    <h2> {nameUpper(name)} </h2>
                </header>
                <section className={style.cardBody} >
                    <div className={style.imgCont} >
                        <img
                            src={image[0]}
                            alt={name}
                            className={style.img}
                        />
                    </div>
                    <div className={style.cardCont} >
                        <b> ${price} </b>
                    </div>
                </section>
            </article>
        </>
    );
};

export default Card;
