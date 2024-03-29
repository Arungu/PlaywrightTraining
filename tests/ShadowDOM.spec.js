const {test,expect} = require('@playwright/test');


test('Shadow Dom', async({page})=>{

    await page.goto("http://autopract.com/selenium/shadowdom1/");
    console.log(await page.locator("//*[@class='target1 button']").textContent());
    //console.log(await page.locator("div.target1").textContent());
    console.log(await page.locator("div.target1").first().textContent());
    console.log(await page.locator("div.target1").nth(1).textContent());
    console.log(await page.locator("div.target1").last().textContent());
    console.log(await page.locator(":light(div.target1)").first().textContent());

})

