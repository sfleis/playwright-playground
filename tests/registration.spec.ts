import { test } from '@playwright/test';
import { RegistrationPage } from '../POMs/registrationPage';
import { userRegistration } from '../POMs/testData';

test(' Successfully register user', async ({ page }) => {
  const registrationPage = new RegistrationPage(page);
  await page.goto('https://practicesoftwaretesting.com/auth/register');
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
});
