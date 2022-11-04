import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "../../../world";
import { expect } from "@playwright/test";

Given('I am on main page', async () => {
    await expect(page).toHaveTitle('Swag Labs');
})