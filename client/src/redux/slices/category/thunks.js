import { categoryApi } from "../../../api/categoryApi";
import { setCategories, starLoadingCategory, addCategory } from "./categorySlice";

export const getCategories = () => {
    return async (dispatch, getState) => {
        dispatch(starLoadingCategory());

        const { data } = await categoryApi.get();

        dispatch(setCategories({ categories: data }));
    };
};

export const createCategory = (category) => {
    return async (dispatch, getState) => {
        dispatch(starLoadingCategory());
        try {
            const response = await categoryApi.post("/", category);
            const newCategory = response.data;
            dispatch(addCategory({ category: newCategory }));
        } catch (error) {
            console.log('Error create category', error);
        }
    }
}
