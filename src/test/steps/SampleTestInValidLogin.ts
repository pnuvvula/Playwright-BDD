import { createBdd } from 'playwright-bdd';
import {expect} from '@playwright/test';
const { Given, When, Then } = createBdd();

Given('user enter invalid username in the text box', async ({page}) => {
    // Step: Given user enter invalid username in the text box
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.getByRole('textbox', { name: 'Username' }).fill('student123');
  });
  
  Given('user enter invalid password in the text box', async ({page}) => {
    // Step: And user enter invalid password in the text box
    await page.getByRole('textbox', { name: 'Password' }).fill('Password');
    
    await page.getByRole('button', { name: 'Submit' }).click();
  });
  
  Then('user is able to display error message as {string}', async ({page}, arg: string) => {
    // Step: Then user is able to display error message as 'Your username is invalid!'
    await expect(page.locator('#error')).toContainText('Your username is invalid!');

  });