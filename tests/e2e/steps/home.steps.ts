import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "../../../hook";
import { expect } from "@playwright/test";
import { openPage } from "../modules/common";
import { verifyPageTitle } from "../modules/assert";

Given('I open {string} page', async (pageName) => {
    await openPage(pageName);
    await expect(page).toHaveTitle('Swag Labs');
});

Then('I should see {string} page title', async (pageTitle) => {
    await verifyPageTitle(pageTitle);
});
