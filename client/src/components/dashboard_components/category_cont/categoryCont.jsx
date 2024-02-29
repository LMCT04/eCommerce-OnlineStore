// import dependencies
import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
// import styles and components
import style from './categoryCont.module.css'
import CategoryCard from '../category_card/categoryCard'
// import functions
import { getCategories } from '../../../redux/slices/category'

/* Se declara la función CategoryCont la cual iterara todas las categorías dentro
del estado global desde una nueva variable categories */
const CategoryCont = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const categories = useSelector(
    (state) => state.category.categories
    )

    return (
        <>
            <div className={style["container__background"]}>
                { categories.length > 0 ? (
                    categories.map((category) => (
                        <CategoryCard key={category.id} elements={category} />
                    ))
                ) : (
                    <>
                        Loading
                    </>
                )}
            </div>
        </>
    )
}

export default CategoryCont;                                                                                                                    