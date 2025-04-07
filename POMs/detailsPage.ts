import { expect, Page, Locator } from '@playwright/test';

export class DetailsPage {
  readonly page: Page;
  readonly productLink: Locator;
  readonly addToCartButton: Locator;
  readonly successCartMessage: Locator;
  readonly addToFavoritesButton: Locator;
  readonly navigationMenu: Locator;
  readonly favoritesLink: Locator;
  readonly removeFavoritesButton: Locator;
  readonly noFavoritesAddedMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productLink = page.locator('.card');
    this.addToCartButton = page.locator('[data-test="add-to-cart"]');
    this.successCartMessage = page.locator('#toast-container');
    this.addToFavoritesButton = page.locator('[data-test="add-to-favorites"]');
    this.navigationMenu = page.locator('[data-test="nav-menu"]');
    this.favoritesLink = page.locator('[data-test="nav-my-favorites"]');
    this.removeFavoritesButton = page.locator('[data-test="delete"]');
    this.noFavoritesAddedMessage = page.getByText('There are no favorites yet');
  }

  async addToCart() {
    await this.productLink.nth(0).click();
    await this.addToCartButton.click();
  }

  async assertProductAddedToCart() {
    await expect(this.successCartMessage).toBeVisible();
    await expect(this.successCartMessage).toHaveText(
      'Product added to shopping cart.'
    );
  }

  async addToFavorites() {
    await this.productLink.nth(0).click();
    await this.addToFavoritesButton.click();
    await expect(this.successCartMessage).toBeVisible();
  }

  async assertProductAddedToFavorites() {
    await expect(this.successCartMessage).toBeVisible();
    await expect(this.successCartMessage).toHaveText(
      'Product added to your favorites list.'
    );
    await this.successCartMessage.waitFor({ state: 'hidden', timeout: 7000 });
  }

  async removeFromFavorites() {
    await expect(this.navigationMenu).toBeVisible();
    await this.navigationMenu.click();

    await expect(this.favoritesLink).toBeVisible();
    await this.favoritesLink.click();

    await expect(this.removeFavoritesButton).toBeVisible();
    await this.removeFavoritesButton.click();
  }

  async assertProductFavoritesRemoved() {
    await expect(this.noFavoritesAddedMessage).toBeVisible();
  }
}
