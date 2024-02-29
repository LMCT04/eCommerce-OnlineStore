import React, { useEffect } from 'react';
import style from './productCont.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../../redux/slices/product'
import ProductCard from '../product_card/productCard.jsx';

const ProductCont = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const {products = [], isLoading} = useSelector((state) => state.product)
    console.log(products);

    return (
        <>
            <div className={style.background}>
                {
                    products.length > 0 ? (
                        products.map((product) => 
                            <ProductCard key={product.id} elements={product} />
                        )
                    ) : (
                        <>
                            Loading
                        </>
                    )
                }
            </div>
        </>
    );
}

export default ProductCont;
