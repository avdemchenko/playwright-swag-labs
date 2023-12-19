import { page } from "../../../hook";
import { expect } from "@playwright/test";

const verifyPageTitle = async (pageTitle: string) => {
    await expect(page).toHaveTitle(pageTitle);
}

export { verifyPageTitle }
