import { test, expect } from '@playwright/test';


test('Login', async ({ page }) => {
  await page.goto('https://testing-app-tan-two.vercel.app');
  await page.locator(`(//input[@id='email'])[1]`).fill('mihnea.varlan@omnisourcetech.com');
  await page.locator(`(//input[@id='password'])[1]`).fill('Test123#');
  await page.locator(':text-is("Sign in")').click()
});
