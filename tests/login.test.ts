import { test, expect } from '@playwright/test';

test('Should login with standard user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page.locator('.shopping_cart_link')).toBeVisible();

  const screenshot = await page.screenshot();
  await test.info().attach('screenshot', { body: screenshot, contentType: 'image/png' });
});