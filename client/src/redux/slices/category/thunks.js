import { categoryApi } from "../../../api/categoryApi";
import { setCategories, starLoadingCategory } from "./categorySlice";

export const getCategories = () => {
    return async (dispatch, getState) => {
        dispatch(starLoadingCategory());

        const { data } = await categoryApi.get();

        dispatch(setCategories({ categories: data }));
    };
};
