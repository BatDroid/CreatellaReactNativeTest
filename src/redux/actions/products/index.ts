import { Dispatch } from "redux";
import api from "../../../config/api";
import { PRODUCTS } from "../../../config/routes";
import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_SUCCESS } from "./types";

export function getProducts() {
    return (dispatch: Dispatch) => {
        dispatch({
            type: FETCH_PRODUCTS_REQUEST,
        });
        api.get(PRODUCTS).then((response) => {
            if(response.status === 200)
                dispatch({
                    type: FETCH_PRODUCTS_SUCCESS,
                    products: response.data,
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