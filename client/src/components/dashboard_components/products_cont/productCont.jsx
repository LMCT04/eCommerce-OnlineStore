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
                    {products.length > 0 ? (
                        products
                            .filter((product) => product.isActive === true)
                            .map((product) => (
                                <ProductCard
                                    key={product.id}
                                    elements={product}
                                />
                            ))
                    ) : (
                        <>Loading</>
                    )}
                    {products.length > 0 ? (
                        products
                            .filter((product) => product.isActive === false)
                            .map((product) => (
                                <ProductCard
                                    key={product.id}
                                    elements={product}
                                />
                            ))
                    ) : (
                        <>Loading</>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProductCont;
