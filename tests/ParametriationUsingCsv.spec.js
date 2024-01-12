import {test, expect} from '@playwright/test';
import {parse} from 'csv-parse/sync';
 
import fs from 'fs';
import path from 'path'
 
const createntials=parse(fs.readFileSync(path.join(__dirname, '../data.csv')),{
 
    columns:true,
    skip_empty_lines:true,
 
});
 
for(const cred of createntials) {
 
    test(`testing with ${cred.login}`,async ({page})=>{
 
        await page.goto("https://adactinhotelapp.com/index.php");
        await page.locator('id=username').fill(cred.login);
        await page.locator('id=password').fill(cred.password);
        await page.locator('#login').click();
        await expect(page).toHaveTitle('Adactin.com - Search Hotel');
     
     
        })
}