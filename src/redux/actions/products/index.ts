import { Dispatch } from "redux";
import api from "../../../config/api";
import { getProductsUrl } from "../../../config/routes";
import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_SUCCESS } from "./types";

export function getProducts(requestedPage: number) {
    return (dispatch: Dispatch) => {
        dispatch({
            type: FETCH_PRODUCTS_REQUEST,
            currentPage: requestedPage,
        });
        api.get(getProductsUrl(requestedPage)).then((response) => {
            if(response.status === 200)
                dispatch({
                    type: FETCH_PRODUCTS_SUCCESS,
                    products: response.data,
                    currentPage: requestedPage,
                })
            else 
                dispatch({
                    type: FETCH_PRODUCTS_ERROR,
                    errorStatus: response.status
                })
        }).catch(() => {
            dispatch({
                type: FETCH_PRODUCTS_ERROR,
                errorStatus: 500,
            });
        })
    } 
}