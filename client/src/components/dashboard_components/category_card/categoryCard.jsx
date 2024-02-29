// import dependencies
import React from 'react';
// import styles and components
import style from './categoryCard.module.css'

const CategoryCard = ({ elements }) => {
    const { name, id } = elements

    return (
        <>
            <article className={style["card__background"]} >
                {name}
            </article>
        </>
    );
}

export default CategoryCard;
