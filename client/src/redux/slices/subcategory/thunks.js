import { subcategoryApi } from '../../../api/subcategoryApi'
import { setSubCategories, starLoadingSubCategory } from './subcategorySlice'

export const getSubCategories = () => {
    return async (dispatch, getState) => {
        dispatch(starLoadingSubCategory());

        const { data } = await subcategoryApi.get();

        dispatch(setSubCategories({ subcategories: data }));
    }
}