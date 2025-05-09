import { createBdd } from 'playwright-bdd';
import {test} from '../fixtures/PageFixtures';
import {loginPageObj} from '../pages/loginPage';
import data1 from '../../../testdata/testdataset.json';



const { Given, When, Then } = createBdd(test);

Given('user launch test application in chrome', async ({loginPage1}) => {
    // Step: Given user launch test application in chrome
    await loginPage1.launchUrl('https://practicetestautomation.com/practice-test-login/');
  });


  When('user enter username in the text box', async ({loginPage1}) => {
    // Step: When user enter username in the text box
    
    await loginPage1.enterUsername(data1.username);
  });

  When('user enter password in the text box', async ({loginPage1}) => {
    // Step: And user enter password in the text box
    await loginPage1.enterPassword(data1.password);
  });

  When('user click on login button', async ({loginPage1}) => {
    // Step: And user click on login button
    await loginPage1.clickLoginBtn();
    
  });

  Then('user is able to display message as {string}', async ({loginPage1}, arg: string) => {
      // Step: Then user is able to display message as 'Congratulations student. You successfully logged in!'
      await loginPage1.validateSuccessMessage();
    });