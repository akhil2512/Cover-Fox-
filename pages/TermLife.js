const fs = require('fs')
export class TermLife{
    constructor(page){
        this.page = page;
    }

    async selectGender(){
        await this.page.locator("//div[@class='w--radio__option ']").first().click();

    }

    async selectAge(){
        await this.page.locator(".w--multi_select_arrow").click();
        await this.page.locator("//span[@class='w--multi_select_dd_element   ']").filter({hasText:"23 years"}).waitFor();
        await this.page.locator("//span[@class='w--multi_select_dd_element   ']").filter({hasText:"23 years"}).click();
    }

    async fillName(){
        await this.page.locator("input[type='text']").last().fill("Akhil");
    }

    async selectDetials(){
        await this.page.locator("//div[@class='cf-button-radio__option  ']").last().click();
        await this.page.locator("//div[@class='cf-radio__option  ']").first().click();
    }

    async selectSalary(){
        await this.page.locator(".drop-down.salary-dropdown").first().click();
        await this.page.locator(".drop-down.salary-dropdown .dd__inner.reveal .dd__options .dd__option").nth(4).click();
    }

    async selectEducation(){
        await this.page.locator(".drop-down").last().click();
        await this.page.locator(".drop-down").last().locator(".dd__inner.reveal .dd__options .dd__option").nth(2).click();
    }

    async selectButton(txt){
        await this.page.getByText(txt).last().click();
    }

    async storeTermLifeInsurance(){
        var result = []
        const price = await this.page.locator(".price strong").textContent();
        var obj = {"Price": price};
        result.push(obj);
        fs.writeFileSync("TermLife_result.json",JSON.stringify(result,null,2));
    }
}