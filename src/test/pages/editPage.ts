import { expect, Locator, Page } from "@playwright/test";


export class editPageObj {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;

    }

    async loginToApp(url:string,username: string, password: string) {

        await this.page.goto(url);
        await this.page.locator("(//span[normalize-space()='My account'])[2]").hover();
        await this.page.getByRole('link', { name: 'Login' }).click();
        await this.page.getByRole('textbox', { name: 'E-Mail Address' }).fill(username);
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
        await this.page.getByRole('button', { name: 'Login' }).click();

    }

    async clickOnEditLink() {

        await this.page.getByRole('link', { name: ' Edit your account' }).click();

    }

    async editCustInfo(firstname: string, lastname: string) {
        // await this.page.pause();
        await this.page.getByRole('textbox', { name: 'First Name *' }).clear();
        await this.page.getByRole('textbox', { name: 'First Name *' }).fill(firstname);
        await this.page.getByRole('textbox', { name: 'Last Name*' }).clear();
        await this.page.getByRole('textbox', { name: 'Last Name*' }).fill(lastname);

    }

    async clickOnContinue() {
        await this.page.getByRole('button', { name: 'Continue' }).click();

    }

    async validateSuccessMessage() {
        await expect(this.page.getByText('Success: Your account has')).toContainText('Success: Your account has');

    }

}


