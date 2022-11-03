import { test, expect } from '@playwright/test';

test('Should open SwagLabs main page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await expect(page).toHaveTitle('Swag Labs');
});
