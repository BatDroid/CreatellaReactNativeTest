
export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR";



  export interface ProductType {
    id: string;
    size: number;
    price: number;
    date: string;
    face: string;
  }

  export interface ProductErrorType {
    errorStatus?: number;
  }

  export interface ProductFetchingType {
    isFetching: boolean;
  }

  export interface ProdcutsPayloadType {
    products: ProductType[];
    isFetching: boolean;
    isFetchingMore: boolean;
    errorStatus?: ProductErrorType;
    currentPage: number;
    allFetched: boolean;
  }

  interface GetProductsAction extends ProdcutsPayloadType {
    type: typeof FETCH_PRODUCTS_REQUEST | typeof FETCH_PRODUCTS_SUCCESS | typeof FETCH_PRODUCTS_ERROR;
  }

  
  export type ProductActions = GetProductsAction;