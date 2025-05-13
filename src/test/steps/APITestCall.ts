import { createBdd } from 'playwright-bdd';
import {expect,test} from '@playwright/test';
const { Given, When, Then } = createBdd();

let baseUrl='https://reqres.in/api';
let result:any;

Given('user is able to launch end point url', async ({request}) => {
    // Step: Given user is able to launch end point url

    result=await request.get(`${baseUrl}/users/2`);
    
       
  });
  
  When('user submits get call request', async ({request}) => {
    // Step: When user submits get call request
    await expect(result.status()).toBe(200);
  });
  
  Then('response status should display with status code {int}', async ({request}, arg: number) => {
    // Step: Then response status should display with status code 200
    
    const responseBody=JSON.parse(await result.text());
    console.log(responseBody);
    await expect(responseBody.data.id).toBe(2);
    await expect(responseBody.data.email).toBeTruthy();
  });
  