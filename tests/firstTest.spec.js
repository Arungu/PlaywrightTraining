const {test,expect, chromium} = require('@playwright/test');
const { timeStamp } = require('console');
//const exp = require('constants');

// test('Google tittle Assertion', async ({page})=>{

// await page.goto("https://www.google.com/");
// await expect(page).toHaveTitle('Google');


// });
// test('Hotal App tittle Assertion', async ({page})=>{

//     await page.goto("https://adactinhotelapp.com/index.php");
    
//     await expect(page).toHaveTitle('Adactin.com - Hotel Reservation System');

//     // await page.locator('id=username').fill("ArunGurusamy");
//     // await page.locator('id=password').fill("Gurukanth!20");
//     // await page.locator('#login').click();
//     // await page.waitForTimeout(2000);
    
    
//     });

    test.only('Google tittle Assertion', async ({page})=>{
    // const browser = await chromium.launch({headless:false});
    // const context = await browser.newContext({

    //     recordVideo:{

    //         dir:'videos/',
    //     }
    // });
    // const page = await context.newPage();
    

    await page.goto("https://adactinhotelapp.com/index.php");
   // await page.screenshot({path:'screenshots/screen'+timeStamp()+'.png',fullPage:true});
    await page.locator('id=username').fill("ArunGurusamy");
    //await page.locator('id=username').screenshot({path:'screenshots/screen1'+Date.now()+'.png',fullPage:true})
    await page.locator('id=password').fill("30529S");
    await page.locator('#login').click();
    await page.waitForTimeout(2000);
   // const user = await (await page.locator('id=username_show').textContent()).trim();
   const user = await page.locator("//input[@id='username_show']").getAttribute('value');
    console.log(user);


   await expect(user).toBe('Hello ArunGurusamy!');
  // await page.screenshot({path:'screenshots/screen'+timeStamp()+'.png',fullPage:true});

    // await page.locator('//*[@id="my_itinerary"]').click();
    // await page.locator('//*[@id="ids[]"]').click();
    // await expect(page.locator('//*[@name="ids[]"]')).toBeChecked();
    // await page.locator('//*[@name="cancelall"]').click();
    // await page.waitForTimeout(2000);


});

test('Sample Test', async({page})=>{
    await page.goto("https://www.w3resource.com.cach3.com/c-programming-exercises.html");
    console.log('This is Sample Test');


})

