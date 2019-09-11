
export const BASE_URL = "http://localhost:3000";

const PRODUCTS = "products";

export function getProductsUrl(page: number) {
    return `${PRODUCTS}?_limit=15&_page=${page}`;
}