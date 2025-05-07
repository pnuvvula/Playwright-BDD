import { test as base } from 'playwright-bdd';
import { loginPageObj } from '../pages/loginPage';
import { editPageObj } from '../pages/editPage';


export const test = base.extend<{ loginPage1: loginPageObj, editPage: editPageObj}>({
  loginPage1: async ({ page }, use) => {
      console.log('Initializing singleton LoginPage...');
      const loginPage1 = new loginPageObj(page);
      await use(loginPage1);
  
    },
    editPage: async ({ page }, use) => {
      console.log('Initializing singleton editPage...');
      const editPage = new editPageObj(page);
      await use(editPage);
  
    }

  });
  
  



  