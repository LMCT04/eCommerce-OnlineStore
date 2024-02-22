import { productApi } from "../../../api/productApi";
import { setProducts, starLoadingProducts, addProduct } from "./productSlice";
import axios from 'axios'

export const getProducts = () => {
    return async (dispatch, getState) => {
        dispatch(starLoadingProducts());

        const { data } = await productApi.get();

        dispatch(setProducts({ products: data }));
    };
};

export const createProduct = (product) => {
    return async (dispatch, getState) => {
        dispatch(starLoadingProducts());
        console.log(product);
        try {
            const response = await productApi.post("/", product)
            console.log(response);
            const newProduct = response.data;
            dispatch(addProduct({ product: newProduct }))
        } catch (error) {
            console.log('Error: ', error);
        }
    }
}
