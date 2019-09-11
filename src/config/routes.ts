import { SortTypes } from "../redux/actions/products/types";

export const BASE_URL = "http://localhost:3000";

const PRODUCTS = "products";

export function getProductsUrl(page: number, sortBy?: SortTypes) {
    return `${PRODUCTS}?_limit=15&_page=${page}${sortBy? "&_sort=" + sortBy : ""}`;
}