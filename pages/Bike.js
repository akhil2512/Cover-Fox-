const fs = require('fs');
export class Bike{
    constructor(page){
        this.page = page;
    }
    async selectExpireStatus(){
        await this.page.locator(".bike_expired_dropdown__arrow").first().click();
        await this.page.locator(".bike_policy_details__item").filter({hasText:"Not expired"}).click();
    }

    async storeBikeInsurance(){
        var result = []
        const IDV = await this.page.locator("//div[@class='bpc-container']//div[@class='bike-plan-card--idv']/span[2]").allTextContents();
        const prices = await this.page.locator("//div[@class ='bpc-container']//div[@class='currency-wrapper']//span[2]").allTextContents();
        for (let i = 0; i < IDV.length; i++) {
            var obj = {"IDV" : IDV[i], "Price" : prices[i]}
            result.push(obj);
            fs.writeFileSync('Bike_result.json', JSON.stringify(result, null, 2));
        }

    }
}