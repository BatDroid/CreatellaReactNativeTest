import { SortTypes } from "../redux/actions/products/types";


// note: on android replace localhost with your ip address
export const BASE_URL = "http://localhost:3000/api";

const PRODUCTS = "/products";
const ADS = "/ads";

export function getProductsUrl(page: number, sortBy?: SortTypes) {
    return `${PRODUCTS}?_limit=15&_page=${page}${sortBy? "&_sort=" + sortBy : ""}`;
}

export function getAdUrl(id: string) {
    return `${BASE_URL}${ADS}?r=${id}`
}