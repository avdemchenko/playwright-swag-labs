import { page } from "../../../hook";

const SHOPPING_CART_ICON_CSS = '.shopping_cart_link';
const LOCKED_OUT_ERROR_MESSAGE_CSS = '.error';

export const isShoppingCartDisplayed = async () => {
    return await page.locator(SHOPPING_CART_ICON_CSS).isVisible()
}

export const isLockedOutErrorMessageDisplayed = async () => {
    return await page.locator(LOCKED_OUT_ERROR_MESSAGE_CSS).isVisible()
}
