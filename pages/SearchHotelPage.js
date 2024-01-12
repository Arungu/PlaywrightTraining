class SearchHotelPage{

    constructor(page){
        this.page=page;
        this.checkInDate=page.locator('id=datepick_in');
        this.location=page.locator('//select[@id="location"]');
        this.hotelName=page.locator('//select[@id="hotels"]');
        this.roomType=page.locator('//select[@id="room_type"]');
        this.noRooms=page.locator('//select[@id="room_nos"]');
        this.submitBtn=page.locator('//*[@id="Submit"]');

    }

    async searchHotel(cDate,cityName,hotel,roType,roomNos){
        //await this.city.
        await this.checkInDate.type(cDate);
        await this.city.selectOption(cityName);
        await this.hotel.selectOption(hotel);
        await this.rType.selectOption(roType);
        await this.rNos.selectOption(roomNos);
        await this.submitBtn.click();
    }


}
module.exports={SearchHotelPage}