// import dependencies
import React from 'react';
// import styles and components
import style from './subcategoryCard.module.css'

const SubcategoryCard = ({ elements }) => {
    const { name, CategoryId, id } = elements;

    return (
        <>
            <article className={style["card__background"]} >
                {name}
            </article>
        </>
    );
}

export default SubcategoryCard;
