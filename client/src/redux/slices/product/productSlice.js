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
        }
    }
})

export const { starLoadingProducts, setProducts } = productSlice.actions;