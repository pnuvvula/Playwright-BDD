import { createBdd } from 'playwright-bdd';
import {test} from '../fixtures/PageFixtures';
import { editPageObj } from '../pages/editPage';

const { Given, When, Then } = createBdd(test);

Given('I logged into application successfully', async ({editPage}) => {
    await editPage.loginToApp(process.env.URL!,process.env.EMAILID!,process.env.PASSWORD!);
  });

 // Step: And I click on edit account information link  
 Given('I click on edit account information link', async ({editPage}) => {
    await editPage.clickOnEditLink();
   });

  // Step: When I change firstname and lastname
  When('I change firstname and lastname', async ({editPage}) => {
   await editPage.editCustInfo(process.env.FIRSTNAME!,process.env.LASTNAME as string);
    
  });

   // Step: And I click on continue button
   When('I click on continue button', async ({editPage}) => {
    await editPage.clickOnContinue();
    
  });

  // Step: Then I should verify my account information is updated
    Then('I should verify my account information is updated', async ({editPage}) => {
      
      await editPage.validateSuccessMessage();
  
    });