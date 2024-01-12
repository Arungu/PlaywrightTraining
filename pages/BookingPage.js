class BookingPage{

    constructor(page){

        this.page=page;
        this.firstName=page.locator('//*[@id="first_name"]');
        this.lastName=page.locator('//*[@id="last_name"]');
        this.address=page.locator('//*[@id="address"]');
        this.cardNumber=page.locator('//*[@id="cc_num"]');
        this.cardType=page.locator('//*[@id="cc_type"]');
        this.expiryMonth=page.locator('//*[@id="cc_exp_month"]');
        this.expiryYear=page.locator('//*[@id="cc_exp_year"]');
        this.ccv=page.locator('//*[@id="cc_cvv"]');
        this.bookNowBtn=page.locator('//*[@id="book_now"]');
    }



}
module.exports={BookingPage}