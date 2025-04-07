import { expect, test as setup } from '@playwright/test';
import { RegistrationPage } from '../POMs/registrationPage';
import { userRegistration } from '../POMs/testData';  
import { LoginPage } from '../POMs/loginPage';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="register-link"]').click();
  
  const registrationPage = new RegistrationPage(page);  
  await registrationPage.register(
    userRegistration.userName,
    userRegistration.userLastName,
    userRegistration.userBirthDate,
    userRegistration.userStreet,
    userRegistration.userPostalCode,
    userRegistration.userCityName,
    userRegistration.userState,
    userRegistration.userPhoneNumber,
    userRegistration.userEmail,
    userRegistration.userPassword
  );

  await page.locator('[data-test="login-form"]').waitFor();

  const loginPage = new LoginPage(page);
  await loginPage.login(userRegistration.userEmail, userRegistration.userPassword);

  await expect(page.locator('app-header')).toContainText(userRegistration.userName);

  await page.context().storageState({ path: authFile });
});
