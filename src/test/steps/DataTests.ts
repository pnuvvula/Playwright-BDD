import { createBdd } from 'playwright-bdd';
import {test} from '../fixtures/PageFixtures';
import {loginPageObj} from '../pages/loginPage';


const { Given, When, Then } = createBdd(test);

Given('I launch login application', async ({loginPage1}) => {
    // Step: Given I launch login application
    await loginPage1.launchUrl('https://practicetestautomation.com/practice-test-login/');
  });
  
  When('I enter {string} and {string}', async ({loginPage1}, username: string, password: string) => {
    // Step: When I enter "student" and "Password123"
    await loginPage1.enterUsername(username);
    await loginPage1.enterPassword(password)
  });
  
  When('I click on login button', async ({loginPage1}) => {
    // Step: And I click on login button
    await loginPage1.clickLoginBtn();
  });
  
  Then('I want to validate message on login page', async ({loginPage1}) => {
    // Step: Then I want to validate message on login page
    await loginPage1.validateMessage();

    
  });