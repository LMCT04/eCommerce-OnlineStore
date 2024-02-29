// import dependencies
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
// import styles and components
import style from './subcategoryCont.module.css'
import SubcategoryCard from '../subcategory_card/subcategoryCard'
// import functions
import { getSubCategories } from '../../../redux/slices/subcategory'

/* Se declara la función SubcategoryCont la cual iterara todas las subcategorias dentro 
del estado global desde una nueva variable subcategories */
const SubcategoryCont = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSubCategories())
    }, [dispatch])

    const subcategories = useSelector(
        (state) => state.subcategory.subcategories
    )

    return (
        <>
            <div className={style["container__background"]} >
                { subcategories.length > 0 ? (
                    subcategories.map((subcategory) => (
                            <SubcategoryCard key={subcategory.id} elements={subcategory}/>
                    ))
                ) : (
                    <>
                        Loading
                    </>
                )}
            </div>
        </>
    );
}

export default SubcategoryCont;
