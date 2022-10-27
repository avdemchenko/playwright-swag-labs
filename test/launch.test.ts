import {chromium} from "playwright";

describe('Launch browser', () => {
    test('Open SwagLabs', async () => {
        const browser = await chromium.launch({
            headless: false
        });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://www.saucedemo.com/');
        await browser.close();
    })
})
