import { SortTypes } from "../redux/actions/products/types";

export const BASE_URL = "http://localhost:3000/api";

const PRODUCTS = "/products";
const ADS = "/ads";

export function getProductsUrl(page: number, sortBy?: SortTypes) {
    return `${PRODUCTS}?_limit=15&_page=${page}${sortBy? "&_sort=" + sortBy : ""}`;
}

export function getAdUrl(id: string) {
    return `http://localhost:3000/api/${ADS}?r=${id}`
}