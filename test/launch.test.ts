import {chromium} from "playwright";

describe('Launch browser', () => {
    test('Open SwagLabs', async () => {
        // setup
        const browser = await chromium.launch({
            headless: false
        });
        const context = await browser.newContext();
        const page = await context.newPage();

        // action
        await page.goto('https://www.saucedemo.com/');

        // teardown
        await context.close();
        await browser.close();
    })
})
