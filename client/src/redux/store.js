import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./slices/user";
import { productSlice } from "./slices/product";
import { categorySlice } from "./slices/category";
import { subCategorySlice } from "./slices/subcategory";
import storage from "redux-persist/lib/storage";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['user', 'product', 'category', 'subcategory'],
};

const rootReducer = combineReducers({
  user: userSlice.reducer,
  product: productSlice.reducer,
  category: categorySlice.reducer,
  subcategory: subCategorySlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }
  }),
});

export default store;
