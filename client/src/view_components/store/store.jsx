import React from "react";
import style from "./store.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { getUsers } from "../../redux/slices/user";
import { getProducts } from "../../redux/slices/product";
import CardContainer from "../../components/other_components/card_container/cardContainer";

const Store = () => {
    // const dispatch = useDispatch()
    // const { isLoading, users = [] } = useSelector( state => state.user )
    // const { isLoading, products = [] } = useSelector( state => state.product )

    // useEffect(() => {
    //     dispatch( getUsers() )
    //     dispatch( getProducts() )
    // }, [])

    return (
        <>
            <div className={style.background}>
                <CardContainer />
            </div>
        </>
    );
};

export default Store;
