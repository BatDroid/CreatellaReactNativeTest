
export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR";



  export interface AdItemType {
    id: string;
    adId: string;
  }

  export interface ProductType {
    id: string;
    size: number;
    price: number;
    date: string;
    face: string;
  }

  export type ProductItemType = AdItemType | ProductType;

  export interface ProductErrorType {
    errorStatus?: number;
  }

  export interface ProductFetchingType {
    isFetching: boolean;
  }

  export enum SortTypes {
    Id = "id",
    Price = "price",
    Size = "size",
  }

  export interface ProdcutsPayloadType {
    products: ProductType[];
    isFetching: boolean;
    isFetchingMore: boolean;
    errorStatus?: ProductErrorType;
    currentSort: null | SortTypes;
    currentPage: number;
    allFetched: boolean;
  }

  interface GetProductsAction extends ProdcutsPayloadType {
    type: typeof FETCH_PRODUCTS_REQUEST | typeof FETCH_PRODUCTS_SUCCESS | typeof FETCH_PRODUCTS_ERROR;
  }

  
  export type ProductActions = GetProductsAction;