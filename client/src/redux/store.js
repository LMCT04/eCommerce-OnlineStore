import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/user";    
import { productSlice } from './slices/product'
import { categorySlice } from "./slices/category";
import { subCategorySlice } from './slices/subcategory'


const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        product: productSlice.reducer,
        category: categorySlice.reducer,
        subcategory: subCategorySlice.reducer,
    },
})

export default store