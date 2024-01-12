const {test,expect} = require('@playwright/test');
const {LoginPage} = require('../pages/LoginPage');
const { SearchHotelPage } = require('../pages/SearchHotelPage');


test.beforeEach('Login Test', async({page})=>{
// const page = await context.newPage();
const uname="ArunGurusamy";
const pwd="30529S";

const lp = new LoginPage(page);
await lp.goTo();
await lp.login(uname,pwd);
await page.waitForTimeout(2000);


});

// test('Search Hotel Test', async({page})=>{

//     const loc = "London";
//     const nameHotel = "Hotel Sunshine";
//     const tRoom = "Deluxe";
//     const nosRoom = "2 - Two";
//     const dateCheck = "12/01/2024";


//     const shp = new SearchHotelPage(page);
//     await page.waitForTimeout(3000);
//     await shp.searchHotel(dateCheck,loc,nameHotel,tRoom,nosRoom);
    
    
    
//     })

