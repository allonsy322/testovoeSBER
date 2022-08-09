import { AppDispatch } from "../store";
import axios from "axios"
import { IProduct } from "../../models/IProducts";
import { productSlice } from "./ProductSlice";

export const fetchProducts = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.productFetching())
        const response = await axios.get<IProduct[]>('https://62eb69e2ad295463259d5d99.mockapi.io/api/v1/goods')
        dispatch(productSlice.actions.productFetchingSuccess(response.data))
    } catch (e) {
        dispatch(productSlice.actions.productFetchingError('ошибка подключения к серверу'))
    }
}