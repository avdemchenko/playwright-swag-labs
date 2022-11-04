import {After, AfterStep, Before, setDefaultTimeout} from "@cucumber/cucumber";
import { Browser, chromium, Page } from "@playwright/test";

let page: Page;
let browser: Browser;

setDefaultTimeout(60000);

Before(async () => {
    try {
        browser = await chromium.launch({ headless: false });
        const context = await browser.newContext();
        page = await context.newPage();
        console.log('captured')
    } catch (error) {
        console.log('error');
        throw new Error('error');
    }
    return page;
});

After(async () => {
    await browser.close();
});

AfterStep(async function (Scenario) {
    await this.attach(
        await page.screenshot(
            { path: `./screenshots/${Scenario.pickle.name}.png`, fullPage: true }), "image/png"
    );
});

export { page, browser };