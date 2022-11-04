import { Given, Then } from "@cucumber/cucumber";
import { openPage } from "../modules/common";
import { verifyPageTitle } from "../modules/assert";

Given('I open {string} page', async (pageName) => {
    await openPage(pageName);
});

Then('I should see {string} page title', async (pageTitle) => {
    await verifyPageTitle(pageTitle);
});
