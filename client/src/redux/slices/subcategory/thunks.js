import { subcategoryApi } from '../../../api/subcategoryApi'
import { setSubCategories, starLoadingSubCategory, addSubCategory } from './subcategorySlice'

export const getSubCategories = () => {
    return async (dispatch, getState) => {
        dispatch(starLoadingSubCategory());

        const { data } = await subcategoryApi.get();

        dispatch(setSubCategories({ subcategories: data }));
    }
}

export const createSubCategory = (subcategory) => {
    return async (dispatch, getState) => {
        dispatch(starLoadingSubCategory());
        try {
            const response = await subcategoryApi.post("/", subcategory)
            const newSubcategory = response.data;
            dispatch(addSubCategory({ subcategory: newSubcategory }));
        } catch (error) {
            console.log('Error create subcategory', error);
        }
    }
}