import { test } from '@playwright/test';
import { DetailsPage } from '../POMs/detailsPage';


test('Add product to favorites and verify', async ({ page }) => {
    const detailsPage = new DetailsPage(page);  
    await page.goto('https://practicesoftwaretesting.com/');
    await detailsPage.addToFavorites();
   await detailsPage.assertProductAddedToFavorites();
});
