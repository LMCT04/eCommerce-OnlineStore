import React, { useEffect } from 'react';
import style from "./productCard.module.css";
import { Acn } from '../../compounds_components'
import { useSelector, useDispatch } from 'react-redux'
import { getCategories } from '../../../redux/slices/category'
import { getSubCategories } from '../../../redux/slices/subcategory'


const ProductCard = ({ elements }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
        dispatch(getSubCategories())
    }, [dispatch])

    const categories = useSelector(state => state.category.categories);
    const subcategories = useSelector(state => state.subcategory.subcategories);
    console.log(subcategories);
    
    const {
        name,
        image,
        description,
        price,
        CategoryId,
        SubCategoryId,
    } = elements;

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
                <Acn nameProduct={name}>
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
