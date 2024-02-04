import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/user";    
import { productSlice } from './slices/product'


const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        product: productSlice.reducer
    },
})

export default store