import { Given, When, Then } from "@cucumber/cucumber";
import { provideUsername, providePassword, clickLoginButton } from "../pages/login.page";
import { isShoppingCartDisplayed } from "../pages/home.page";
import { getUser, getPassword } from "../modules/common";
import {expect} from "@playwright/test";

Given('I provide {string} username', async (userType) => {
    await provideUsername(
        await getUser(userType)
    );
});

When('I provide default password', async () => {
    await providePassword(
        await getPassword()
    );
});

When('I perform login', async () => {
    await clickLoginButton();
});

Then('I should see shopping cart icon', async () => {
    await expect(isShoppingCartDisplayed).toBeTruthy();
});


