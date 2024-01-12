import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/?route=account/login');
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('guruarun1720@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Playwright!20');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#content')).toContainText('My Account');
});