const {test,expect, chromium} = require('@playwright/test');
const exp = require('constants');
const { TIMEOUT } = require('dns');

test('New Tab', async({context})=>{


       const page = await context.newPage();
       await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html",TIMEOUT,9000);

       const [page1]= await Promise.all([

        context.waitForEvent('page'),
        await page.locator('id=newTabBtn').click()

       ]);
       
        const [page2]= await Promise.all([

            context.waitForEvent('page'),
            await page.locator('id=newTabsBtn').click()
    
           ]);
       // await page.locator('id=newTabsBtn').click()
       await page1.waitForLoadState();
        const topic = await page1.locator('//h1[@class="post-title entry-title"]').textContent();
        console.log(topic);

       await page2.waitForLoadState();
        const topic1 = await page2.locator('//h1[@class="post-title entry-title"]').textContent();
        console.log(topic1);
       // await expect(topic1).toContain(' Basic Controls');



});