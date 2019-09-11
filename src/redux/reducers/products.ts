import { combineReducers } from "redux";
import { ProductType, ProductActions, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_SUCCESS } from "../actions/products/types";



function productsReducer(state = [], action: ProductActions) {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS: 
            return getProducts(state, action);
        default:
            return state;
    }
}


function getProducts(state: ProductType[], action: ProductActions) {
    return [...state, ...action.products];
}

function allFetchedReducer(state = false, action: ProductActions) {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS: 
            return action.products.length === 0;
        default:
            return state;
    }
}

function isFetchingReducer(state: boolean = false, action: ProductActions) {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST: 
            return action.currentPage === 1;
        case FETCH_PRODUCTS_SUCCESS: 
        case FETCH_PRODUCTS_ERROR: 
            return false;
        default:
            return state;
    }
}

function isFetchingMoreReducer(state: boolean = false, action: ProductActions) {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return action.currentPage > 1;
        case FETCH_PRODUCTS_SUCCESS: 
        case FETCH_PRODUCTS_ERROR: 
            return false;
        default:
            return state;
    }
}

function errorReducer(state: number | null = null, action: ProductActions) {
    switch (action.type) {
        case FETCH_PRODUCTS_ERROR: 
            return action.errorStatus;
        default:
            return state;
    }
}

function currentPageReducer(state: number = 1, action: ProductActions) {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS: 
            return action.currentPage;
        default:
            return state;
    }
}



// @ts-ignore
export default combineReducers({
    products: productsReducer, 
    errorStatus: errorReducer, 
    isFetching: isFetchingReducer,
    currentPage: currentPageReducer,
    isFetchingMore: isFetchingMoreReducer,
    allFetched: allFetchedReducer,
 });