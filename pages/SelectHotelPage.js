class SelectHotelPage{

    constructor(page){

        this.page=page;
        this.hotelRadioBtn=page.locator('//*[@id="radiobutton_0"]');
        this.continue=page.locator('//*[@id="continue"]');
    }

    async selectHotel(){

        await this.hotelRadioBtn.click();
        await this.continue.click();
    }


}
module.exports={SelectHotelPage}