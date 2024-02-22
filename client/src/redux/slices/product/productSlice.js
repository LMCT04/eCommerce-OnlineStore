import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    isLoading: false,
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        starLoadingProducts: (state) => {
            state.isLoading = true;
        },
        setProducts: (state, action) => {
            state.isLoading = false
            state.products = action.payload.products;
        },
        addProduct: (state, action) => {
            state.products.push(action.payload.product);
        }
    }
})

export const { starLoadingProducts, setProducts, addProduct } = productSlice.actions;