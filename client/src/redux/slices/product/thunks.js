import { productApi } from '../../../api/productApi'
import { setProducts, starLoadingProducts } from './productSlice'

export const getProducts = () => {
    return async (dispatch, getState) => {
        dispatch( starLoadingProducts() )

        const {data} = await productApi.get()

        dispatch( setProducts({products: data}) )
    }
}