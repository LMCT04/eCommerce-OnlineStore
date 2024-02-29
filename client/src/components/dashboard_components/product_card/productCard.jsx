import React, { useEffect, useState } from 'react';
import style from "./productCard.module.css";
import { Acn } from '../../compounds_components'
import { useSelector, useDispatch } from 'react-redux'
import { getCategories } from '../../../redux/slices/category'
import { getSubCategories } from '../../../redux/slices/subcategory'
import { putStatus } from '../../../redux/slices/product'


const ProductCard = ({ elements }) => {
    const {
        id,
        name,
        image,
        description,
        price,
        CategoryId,
        SubCategoryId,
        isActive
    } = elements;
    
    const dispatch = useDispatch()

    const [isChecked, setIsChecked] = useState(isActive);

    useEffect(() => {
        dispatch(getCategories())
        dispatch(getSubCategories())
    }, [dispatch])

    const categories = useSelector(state => state.category.categories);
    const subcategories = useSelector(state => state.subcategory.subcategories);

    const handleToggle = (event) => {
        event.stopPropagation()
        dispatch(putStatus(id, !isChecked))
        setIsChecked(!isChecked)
    }

    const getCategoryName = (id) => {
        const category = categories.find(cat => cat.id === id);
        return category ? category.name : 'unknown category';
    }

    const getSubCategoryName = (id) => {
        const subcategory = subcategories.find(subCat => subCat.id === id);
        return subcategory ? subcategory.name : 'unknown subcategory';
    }

    return (
        <>
            <article className={style.card}>
                <Acn nameProduct={name} checked={isChecked} onChange={handleToggle}>
                    <Acn.ImgBox src={image} />
                    <Acn.Description info={description} />
                    <Acn.Data data={price} />
                    <Acn.Data data={getCategoryName(CategoryId)} />
                    <Acn.Data data={getSubCategoryName(SubCategoryId)} />
                </Acn>
            </article>
        </>
    );
};

export default ProductCard;
