const {test,expect} = require('@playwright/test');
const { TIMEOUT} = require('dns');


test('Browser Context', async({browser})=>{

  const context =  await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://adactinhotelapp.com/index.php", TIMEOUT,'2000');
//   await page.goto("https://adactinhotelapp.com/index.php", );



})