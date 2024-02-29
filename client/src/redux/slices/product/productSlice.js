import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    isLoading: false,
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        starLoadingProducts: (state) => {
            state.isLoading = true;
        },
        setProducts: (state, action) => {
            state.isLoading = false;
            state.products = action.payload.products;
        },
        addProduct: (state, action) => {
            state.products.push(action.payload.product);
        },
        updateStatus: (state, action) => {
            const updatedProduct = action.payload.product;
            state.products = state.products.map((product) => {
                if (product.id === updatedProduct.id) {
                    return updatedProduct;
                }
                return product;
            });
        },
    },
});

export const { starLoadingProducts, setProducts, addProduct, updateStatus } = productSlice.actions;
