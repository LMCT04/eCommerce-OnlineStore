import React, { useEffect } from "react";
import style from "./productCont.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../redux/slices/product";
import ProductCard from "../product_card/productCard.jsx";
import { ShoppingBag } from "@mui/icons-material";

const ProductCont = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const { products = [], isLoading } = useSelector((state) => state.product);

    return (
        <>
            <div className={style["container"]}>
                <div className={style["container__title"]}>
                    <span className={style["container__title-span"]}>
                        <ShoppingBag
                            className={style["container__title-icon"]}
                        />
                    </span>
                    <h1 className={style["container__title-h1"]}>Products</h1>
                </div>
                <div className={style["container__products"]}>
                    <section className={style["container__section"]}>
                        <div className={style["container__subtitle"]}>
                            <h3 className={style["container__subtitle-h3"]}>
                                All Products
                            </h3>
                        </div>
                        <div>
                            {products.length > 0 ? (
                                products.filter(p => p.isActive === true).map(p => (
                                    <ProductCard key={p.id} elements={p}/>
                                ))
                            ) : (
                                <>loading</>
                            )}
                            {products.length > 0 ? (
                                products.filter(p => p.isActive === false).map(p => (
                                    <ProductCard key={p.id} elements={p}/>
                                ))
                            ) : (
                                <>loading</>
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default ProductCont;
