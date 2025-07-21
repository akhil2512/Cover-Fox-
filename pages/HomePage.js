export class HomePage {
    constructor(page) {
        this.page = page;
    }

    async gotoWebsite() {
        await this.page.goto("https://www.coverfox.com/");
    }

    async selectCategory(type) {
        await this.page.locator(`.widget-nav.will-fade.fade-appear li`).filter({ hasText: type }).click();
    }

    async clickViewQuotes(order){
        const button = "View Quotes"
        if(order === 'first'){
        await this.page.getByTitle(button).click();
        }
        else{
            await this.page.getByTitle(button).last().click();

        }
    }
    async selectOption1(text){
        const option_locator = ".w--radio__option"
        await this.page.locator(option_locator).filter({ hasText: text}).first().waitFor();
        await this.page.locator(option_locator).filter({ hasText: text }).first().click();

    }

    async fillNumber(num){
        await this.page.locator("input[type='tel']").fill(num);

    }
    async fillVehicleNumber(number){
        await this.page.locator("input[type='text']").fill(number);

    }

}
