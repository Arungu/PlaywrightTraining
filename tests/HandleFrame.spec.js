const {test,expect} = require('@playwright/test');


test('Frame', async({page})=>{

await page.goto("http://autopract.com/selenium/iframe1/");
//diff acces frame
//const newFrame1 = await page.frame("testframe");
//const newFrame2 = await page.frame({name:"testframe"});
const newFrame3 = await page.frame({url:"http://autopract.com/selenium/form1/"});
//const newFrame4 = await page.frame({url:"/form1/"});

await newFrame3.fill("(//input[@class='form-control'])[1]",'Arun');
await newFrame3.fill("(//input[@class='form-control'])[2]",'Arun@gmail.com');
//await newFrame2.fill("(//input[@class='form-control'])[3]",'Arun@123');
await newFrame3.locator("(//input[@class='form-control'])").nth(3).fill('Arun@123');

await page.waitForTimeout(5000);


})

test('Multiple Frame', async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/nested_frames");

    const topFrame = await page.frameLocator("//frame[@name='frame-top']");
    const bottomFrame = await page.frameLocator("//frame[@name='frame-bottom']").locator('body').textContent();
   //const topFrame = await page.frameLocator("frame-top");
    const leftFrame = await topFrame.frameLocator("frame[name='frame-left']").locator('body').textContent();
    console.log("Left Frame is " + leftFrame);
    const rightFrame = await topFrame.frameLocator("frame[name='frame-right']").locator('body').textContent();
    console.log("Left Frame is " + rightFrame);
    const middleFrame = await topFrame.frameLocator("frame[name='frame-middle']").locator('body').textContent();
    console.log("Left Frame is " + middleFrame);
    console.log("Bottom Frame is " + bottomFrame);
    await page.waitForTimeout(5000);
    
    
    })