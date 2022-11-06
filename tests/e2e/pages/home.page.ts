import { page } from "../../../hook";

const SHOPPING_CART_ICON_CSS = '.shopping_cart_link';

export const isShoppingCartDisplayed = async () => {
    return await page.locator(SHOPPING_CART_ICON_CSS).isVisible()
}
