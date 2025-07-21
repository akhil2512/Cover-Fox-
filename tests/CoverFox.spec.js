import {test, expect} from '@playwright/test'

test('Login', async({page})=>{
    await page.goto('https://www.coverfox.com/')

    await page.click('//li[@class="nav-item-dropdown"]//span[@class="link-icon"]')

    await expect(page).toHaveTitle('Coverfox Insurance, India - Get Cover, Get Going')

    await page.locator('//input[@id="otp_contact"]').fill('8179837379')

    await page.locator('//button[@type="submit"]').click()
  
    await page.waitForSelector('//a[@class="otp_logout"]')

    await page.click('//a[@class="logo"]')
})

test('Insurance Services', async({page}) =>{


    await page.goto('https://www.coverfox.com/')

    await page.locator('//ul[@class="nav-items-left hidden-xs header-ver2"]/li[1]').click()

    const texts = await page.locator('//li[@class="nav-sub-menu-item-dropdown"]/a').allInnerTexts()

    console.log('Types of Insurances Available in CoverFox website are : ')
    texts.forEach(obj => {
        console.log(obj)
    })

    console.log(' ')

    await page.hover('//a[@id="motor-to-product"]')

    const carText = await page.locator('//*[@id="top-bar"]/div/ul[1]/li[1]/ul/li[1]/ul/li/a').allInnerTexts()

    console.log('Categories available in Car Insurances are: ')
    carText.forEach(obj1 =>{
        console.log(obj1)
    })

    console.log(' ')

    await page.hover('//a[@id="two-wheeler-insurance"]')

    const bikeText = await page.locator('//*[@id="top-bar"]/div/ul[1]/li[1]/ul/li[2]/ul/li/a').allInnerTexts()

    console.log('Categories available in Bikes Insurances are: ')

    bikeText.forEach(obj2 =>{
        console.log(obj2)
    })

    console.log(' ')

    await page.hover('//a[@id="health-to-product"]')

    const healthInsurance = await page.locator('//*[@id="top-bar"]/div/ul[1]/li[1]/ul/li[3]/ul/li/a').allInnerTexts()

    console.log('Categories available in Health Insurances are: ')

    healthInsurance.forEach(obj3 =>{
        console.log(obj3)
    })

    console.log(' ')

    await page.hover('//a[@id="term-to-product"]')

    const termInsurance = await page.locator('//*[@id="top-bar"]/div/ul[1]/li[1]/ul/li[4]/ul/li/a').allInnerTexts()

    console.log('Categories available in Term Insurances are: ')
    termInsurance.forEach(obj4 =>{
        console.log(obj4)
    })

    await page.click('//div[@class="w--radio__options stay-left"]/div[1]');

    await page.click('.next-btn')
 
    await page.locator('#Age-You').selectOption({label:'18 years'});
 
    await page.click('.next-btn')
 
    await page.fill('//*[@id="app-wrapper"]/section/main/section/div/div[1]/div[4]/div/div[3]/input','500037');

    await page.fill('//*[@id="want-expert"]','8179837379')

    await page.click('.next-btn')

    await page.waitForTimeout(5000)


})

test('Car Insurance', async({page})=>{

    await page.goto('https://www.coverfox.com/')

    await page.click('//li[@data-hover="Car"]')

    await page.getByText('Enter Car Number (MH02BX0377 or 21BH1234A)').fill('AP29AB6111')

    await page.click('//button[@title="View Quotes"]')

    await page.waitForSelector('//div[@class="w--radio d-flex w--radio--fl-expiry w--radio--lg "]/div/div[1]')

    await page.click('//div[@class="w--radio d-flex w--radio--claim w--radio--lg"]/div/div[2]')

    await page.locator('//div[@class="w--text_input w--text_input-mobile  w--text_input-mobile--cr "]/input').fill('8179837379')

    await page.locator('//*[@id="content"]/div/div[2]/span/div/div/div[1]/div[2]/div/div/div[2]/div[2]/div/button').click()

    await page.waitForLoadState('domcontentloaded')

    await page.waitForTimeout(4000)

    const carPlans = await page.locator('//div[@class="edit-car-option reveal"]/div/div/span[1]').textContent()

    console.log(`No of Car plans available for my car is: ${carPlans}`)

    const expectedCarname = await page.locator('//div[@class="eco__left__title"]/span[1]').textContent()

    await expect(expectedCarname).toBe('Hyundai Verna')

})

test('Bike Insurance', async({page}) =>{
    await page.goto('https://www.coverfox.com/')

    await page.click('//li[@data-hover="Bike"]')

    await page.getByText('Enter your bike number (MH02BX0377)').fill('AP31EM7845')

    await page.click('//div[@class="bike_expired_dropdown__handle"]')

    await page.click('//div[@class="cf-modal  reveal cf-modal--popup  "]/div/div/div[2]')

    await page.click('//div[@class="form-row"]/div/button')

    await page.waitForLoadState('load')

    const bikePlans = await page.locator('//div[@class="bph__plans"]/span').textContent()

    console.log(`No of Bike Insurance plans available for my bike is: ${bikePlans}`)

    const bikeName = await page.locator('//div[@class="brs__left"]/div/span[2]').textContent()

    await expect(bikeName).toBe('Honda Activa')

    await page.waitForTimeout(5000)
})

test('Term Life', async({page}) =>{
    await page.goto('https://www.coverfox.com/')

    await page.click('//li[@data-hover="Term Life"]')

    await page.click('//div[@class="w--radio d-flex "]/div/div[1]')

    await page.click('//div[@class="w--multi_select_handle "]')

    await page.click('//div[@class="w--multi_select_options"]/span[5]')

    await page.getByText('Name').fill('Akhil')

    await page.locator('//div[@class="w--text_input w--text_input-mobile   "]/input').fill('8179837379')

    await page.click('//div[@class="form-row"]/button')

    await page.click('//div[@class="cf-button-radio"]/div[2]')
 
    await page.click('//div[@class="cf-radio"]/div[1]')

    await page.click('//div[@class="drop-down salary-dropdown"]')

    await page.locator('//*[@id="app"]/div/div[2]/div/div/div[2]/div[2]/div[1]/div[2]/div[2]/div[2]/div[2]/div[3]/div[3]').click()

    await page.click('//div[@class="refine-option-item"]//div[@class="rol-opt"]//div[@class="drop-down"]')

    await page.click('//*[@id="app"]/div/div[2]/div/div/div[2]/div[2]/div[1]/div[3]/div[2]/div/div[2]/div[3]/div[3]')

    await page.click('//div[@class="rol-opt"]/button')

    await page.click('//div[@class="cta-userinfo"]/div[2]')

    const termPlans = await page.locator('//div[@class="plans-found"]/div/strong').textContent()

    console.log(`No of Term Insurance Plans available are: ${termPlans}`)

    await page.waitForTimeout(4000)


})