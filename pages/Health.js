const fs = require('fs')
export class Health{
    constructor(page){
        this.page = page;
    }

    async selectRelatives(relation){
        await this.page.locator(".ms-title").filter({hasText:relation}).click();

    }

    async nextButton(){
        await this.page.locator(".next-btn").click();
    }

    async ageSelection(relation, age){
        await this.page.locator(`select[name=${relation}]`).selectOption(`${age}y`)
    }

    async pinCode(order,pincode){
        const locator = 'input[type="number"]'
        if(order === 'first'){
        await this.page.locator(locator).first().fill(pincode);
        }
        else if(order === 'second'){
            await this.page.locator(locator).nth(1).fill(pincode)
        }
        else{
            await this.page.locator(locator).last().fill(pincode)
        }
    }

    async storeHealthInsurance(){
        const name = await this.page.locator(".pcc-detail-sec.pcc-plan-name").allTextContents();
        const prices = await this.page.locator(".rupee-val").allTextContents();
        let idx = 0;
        var result = []
        for(let i = 0; i < name.length; i++){
            var obj = {"Provider Name" : name[i], "Sum Assured":prices[idx++], "Premium":prices[idx++]};
            result.push(obj);

            fs.writeFileSync("Health_result.json",JSON.stringify(result,null,2));
        }
    }

}