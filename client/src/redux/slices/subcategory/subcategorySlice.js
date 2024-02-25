import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    subcategories: [],
    isLoadingSubCategory: false,
}

export const subCategorySlice = createSlice({
    name: "subcategory",
    initialState,
    reducers: {
        starLoadingSubCategory: (state) => {
            state.isLoadingSubCategory = true;
        },
        setSubCategories: (state, action) => {
            state.isLoadingSubCategory = false
            state.subcategories = action.payload.subcategories;
        },
        addSubCategory: (state, action) => {
            state.subcategories.push(action.payload.subcategory);
        }
    }
})

export const { starLoadingSubCategory, setSubCategories, addSubCategory } = subCategorySlice.actions;