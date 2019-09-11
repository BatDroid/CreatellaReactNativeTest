import { combineReducers } from "redux";
import { ProductActions, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_SUCCESS, SortTypes, ProductItemType, ProductErrorType, ProdcutsPayloadType, ProductType } from "../actions/products/types";
import { fillAdsInList } from "../../utils/productUtils";



function productsReducer(state = [], action: ProductActions) {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS: 
            return getProducts(state, action);
        default:
            return state;
    }
}


function getProducts(state: ProductItemType[], action: ProductActions) {
    const productsList = action.currentPage === 1? action.products : [...state, ...action.products];
    return fillAdsInList(productsList);
}

// todo: move it to another file so it can be used in all reducers that needs this
function allFetchedReducer(state = false, action: ProductActions) {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS: 
            return action.products.length === 0;
        default:
            return state;
    }
}

// todo: move it to another file so it can be used in all reducers that needs this
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

// todo: move it to another file so it can be used in all reducers that needs this
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

// todo: move it to another file so it can be used in all reducers that needs this
function errorReducer(state: number | null = null, action: ProductActions) {
    switch (action.type) {
        case FETCH_PRODUCTS_ERROR: 
            return action.errorStatus;
        default:
            return state;
    }
}

// todo: move it to another file so it can be used in all reducers that needs this
function currentPageReducer(state: number = 1, action: ProductActions) {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS: 
            return action.currentPage;
        default:
            return state;
    }
}

function sortReducer(state: SortTypes | null = null, action: ProductActions) {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS: 
            return action.currentSort;
        default:
            return state;
    }
}


export interface ProductsState extends Omit<ProdcutsPayloadType, "products"> {
    products: ProductItemType[];
}

// @ts-ignore
export default combineReducers({
    products: productsReducer, 
    errorStatus: errorReducer, 
    isFetching: isFetchingReducer,
    currentPage: currentPageReducer,
    isFetchingMore: isFetchingMoreReducer,
    currentSort: sortReducer,
    allFetched: allFetchedReducer,
 });