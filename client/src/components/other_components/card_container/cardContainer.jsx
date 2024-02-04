import React from "react";
import style from "./cardContainer.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../redux/slices/product";
import Card from "../card/card.jsx";

const CardContainer = () => {
    const dispatch = useDispatch();
    const { isLoading, products = [] } = useSelector((state) => state.product);

    useEffect(() => {
        // dispatch( getUsers() )
        dispatch(getProducts());
    }, []);

    return (
        <>
            <div className={style.background}>
                <span> Loading: {isLoading ? "True" : "False"} </span>
                <div className={style.cardsBox}>
                    {
                        products.length > 0 ? (
                            products.map((product) => 
                                <Card key={product.id} elements={product} />
                            )
                        ) : (
                            <>
                                Loading
                            </>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default CardContainer;
