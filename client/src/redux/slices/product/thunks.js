import { productApi } from "../../../api/productApi";
import { setProducts, starLoadingProducts, addProduct, updateStatus } from "./productSlice";

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
        try {
            const response = await productApi.post("/", product)
            const newProduct = response.data;
            dispatch(addProduct({ product: newProduct }))
        } catch (error) {
            console.log('Error: ', error);
        }
    }
}

export const putStatus = (id, status) => {
    return async (dispatch, getState) => {
        dispatch(starLoadingProducts())
        try {
            const response = await productApi.put("/", { id, status })
            const updateProduct = response.data;
            dispatch(updateStatus({product: updateProduct}))
        } catch (error) {
            console.log('Error: ', error);
        }
    }
}
