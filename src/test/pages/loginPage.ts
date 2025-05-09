import { expect } from '@playwright/test';
import { Page } from "@playwright/test";


// const jsondata=JSON.parse(JSON.stringify(require("../testdata/TestData.json")));




export class loginPageObj {

  protected page: Page;

  constructor(page: Page) {
    this.page = page;

  }


  async launchUrl(url:string) {
    await this.page.goto(url);

  }

  async enterUsername(username:string) {
    await this.page.pause();
    await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
    
  }

  async enterPassword(password:string) {
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);

  }

  async clickLoginBtn() {

    await this.page.getByRole('button', { name: 'Submit' }).click();

  }

  async validateSuccessMessage() {

    //Logged In Successfully | Practice Test Automation

    const title = await this.page.title();
    expect(title).toBe('Logged In Successfully | Practice Test Automation');
    expect(this.page.getByText('Congratulations student. You')).toContainText('Congratulations student. You');

  }

  async validateErrorMessage() {

    //Logged In Successfully | Practice Test Automation

    const title = await this.page.title();
    expect(title).toBe('Test Login | Practice Test Automation');
    expect(this.page.getByText('Your username is invalid!')).toContainText('Your username is invalid!');

  }


  async validateMessage () {

    
    const success=await this.page.getByText('Congratulations student. You').isVisible();
    const error=await this.page.locator('div#error.show').isVisible();

    if (success) {
    const title = await this.page.title();
    expect(title).toBe('Logged In Successfully | Practice Test Automation');
    expect(this.page.getByText('Congratulations student. You')).toContainText('Congratulations student. You');

    }else if (error) {
    const title = await this.page.title();
    expect(title).toBe('Test Login | Practice Test Automation');
    expect(this.page.locator('div#error.show')).toContainText('Your username is invalid!');

    }else{
      console.log('no message is displayed');
    }

  }






}
