import { test, expect } from '@playwright/test';

test('Should open SwagLabs main page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await expect(page).toHaveTitle('Swag Labs');
  await expect(page.locator('.login_wrapper-inner')).toBeVisible();

  const screenshot = await page.screenshot();
  await test.info().attach('screenshot', { body: screenshot, contentType: 'image/png' });
});
