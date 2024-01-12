const {test, expect} = require('@playwright/test');

test('Action', async({page})=>{

await page.goto("https://adactinhotelapp.com/index.php");
await page.locator('id=username').fill("ArunGurusamy");
await page.locator('id=username').press('Control+KeyA+Backspace');
await page.waitForTimeout(2000);
await page.locator('id=username').fill("Arun");
await page.waitForTimeout(2000);




})

test.only('Mouse Action', async({page})=>{

    await page.goto("https://www.amazon.in/");
    //await page.locator('id=username').fill("ArunGurusamy");
    await page.locator("//*[text()='Account & Lists']").hover();
    await page.waitForTimeout(2000);
   // await page.locator('id=username').fill("Arun");
    // await page.waitForTimeout(2000);
    // await page.goto("https://www.amazon.in/");
    // await page.locator("//*[text()='Account & Lists']").click({button:"right"});
    // await page.waitForTimeout(2000);
    // await page.goto("https://www.amazon.in/");
    // await page.locator("//*[text()='Account & Lists']").click({modifiers:['Shift']});
    // await page.goto("https://www.amazon.in/");
    // await page.locator("//*[text()='Account & Lists']").click({position:{x:20,y:17}});




})