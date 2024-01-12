const {test,expect} = require('@playwright/test');


test('Visual 1', async({browser})=>{

const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//await page.waitForTimeout(5000);
//await expect(await page.screenshot()).toMatchSnapshot('OrangePage.png');



})

test('Visual 2', async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.w3resource.com.cach3.com/c-programming-exercises.html");
    //await page.waitForTimeout(5000);
   // await expect(await page.screenshot()).toMatchSnapshot('OrangePage.png');
    
    
    
    })