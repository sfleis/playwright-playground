import { Page, Locator } from '@playwright/test';

export class RegistrationPage {
    readonly page: Page;
    readonly nameField: Locator;
    readonly lastNameField: Locator;
    readonly birthDate: Locator;
    readonly streetField: Locator;
    readonly postalCode: Locator;
    readonly cityName: Locator;
    readonly stateField: Locator;
    readonly countryField: Locator;
    readonly phoneNumber: Locator;
    readonly emailAddress: Locator;
    readonly passwordField: Locator;
    readonly registerButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameField = page.locator('#first_name');
        this.lastNameField = page.locator('#last_name');
        this.birthDate = page.locator('[data-test="dob"]');
        this.streetField = page.locator('#street');
        this.postalCode = page.locator('#postal_code');
        this.cityName = page.locator('#city');
        this.stateField = page.locator('#state');
        this.countryField = page.locator('#country');
        this.phoneNumber = page.locator('#phone');
        this.emailAddress = page.locator('#email');
        this.passwordField = page.locator('#password');
        this.registerButton = page.locator('[type="submit"]');
    }

    async register(
        name: string, 
        lastName: string, 
        birth: string, 
        street: string, 
        postalNumber: string, 
        city: string, 
        state: string, 
        number: string, 
        email: string, 
        password: string
    ) {
        await this.nameField.fill(name);
        await this.lastNameField.fill(lastName);
        await this.birthDate.fill(birth);  
        await this.streetField.fill(street);
        await this.postalCode.fill(postalNumber);
        await this.cityName.fill(city);
        await this.stateField.fill(state);
        await this.countryField.selectOption('AT')
        await this.phoneNumber.fill(number);
        await this.emailAddress.fill(email);
        await this.passwordField.fill(password);
        await this.registerButton.click();
    }
}

