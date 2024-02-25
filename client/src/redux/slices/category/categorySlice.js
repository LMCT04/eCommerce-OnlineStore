import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: [],
    isLoadingCategory: false,
}

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        starLoadingCategory: (state) => {
            state.isLoadingCategory = true;
        },
        setCategories: (state, action) => {
            state.isLoadingCategory = false
            state.categories = action.payload.categories;
        },
        addCategory: (state, action) => {
            state.categories.push(action.payload.category);
        }
    }
})

export const { starLoadingCategory, setCategories, addCategory } = categorySlice.actions;