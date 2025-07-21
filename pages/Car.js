const fs = require('fs')

export class Car{
    constructor(page){
        this.page = page;
    }

    async storeCarInsurance(){
        const prices = await this.page.locator(".rupee_icon + span").allTextContents();
    var result = [];
    for(let i =0 ; i < prices.length; i+=2){
        var obj = {"IDV" : prices[i], "Price":prices[i+1]};
        result.push(obj);

        fs.writeFileSync("Car_result.json",JSON.stringify(result,null,2));
    }
    }
}