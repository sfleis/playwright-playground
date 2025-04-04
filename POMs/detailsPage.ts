import { expect, Page, Locator } from '@playwright/test';

export class DetailsPage {
    readonly page: Page;
    readonly productLink: Locator;
    readonly addToCartButton: Locator;
    readonly successCartMessage: Locator;
    readonly addToFavoritesButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productLink = page.locator('.card'); 
        this.addToCartButton = page.locator('[data-test="add-to-cart"]');
        this.successCartMessage = page.locator('#toast-container');
        this.addToFavoritesButton = page.locator('[data-test="add-to-favorites"]');
    }

    async addToCart() {
        await this.productLink.nth(0).click(); 
        await this.addToCartButton.click();  
    }

    async assertProductAddedToCart() {
        await expect(this.successCartMessage).toBeVisible();
        await expect(this.successCartMessage).toHaveText('Product added to shopping cart.');
    }
    
    async addToFavorites() {
        await this.productLink.nth(0).click(); 
        await this.addToFavoritesButton.click(); 
    }

    async assertProductAddedToFavorites() {
        await expect(this.successCartMessage).toBeVisible();
        await expect(this.successCartMessage).toHaveText('Product added to your favorites list.');
    }
}
