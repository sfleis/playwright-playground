import test, { expect } from '@playwright/test';
import { userRegistration } from '../POMs/testData';

test('Check header visibility', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await expect(page.locator('app-header')).toContainText(
    userRegistration.userName
  );
});
