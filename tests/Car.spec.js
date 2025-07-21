import { test, expect } from '@playwright/test';
const fs = require('fs');
const { HomePage } = require('../pages/HomePage');
const { Car } = require('../pages/Car');

const inputdata = JSON.parse(JSON.stringify(require("../input.json")));

test.describe('Car Insurance', () => {
    let page;
    let homePage;
    let car;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage(); 
        homePage = new HomePage(page);
        car = new Car(page);
    });

    test("Go to the website", async () => {
        // Go to the https://www.coverfox.com/
        await homePage.gotoWebsite();
    });

    test("Select Car Category", async () => {
        // Select the Car category
        await homePage.selectCategory(inputdata.Car);
    });

    test("Fill Vehicle Number", async () => {
        // Enter the vehicle number
        await homePage.fillVehicleNumber(inputdata.CarNumber);
    });

    test("Click View Quotes (First)", async () => {
        // Click the View Quotes button (first)
        await homePage.clickViewQuotes("first");
    });

    test("Select Expire Status", async () => {
        // Select the expire status
        await homePage.selectOption1(inputdata.ExpireStatus);
    });

    test("Select Coverage Status", async () => {
        // Select the coverage status
        await homePage.selectOption1(inputdata.CoverageStatus);
    });

    test("Fill Phone Number", async () => {
        // Enter the phone number
        await homePage.fillNumber(inputdata.PhoneNumber);
    });

    test("Click View Quotes (Last)", async () => {
        // Click the View Quotes button (last)
        await homePage.clickViewQuotes("last");
    });

    test("Wait for Page to Load", async () => {
        // Wait for the selector
        await page.waitForSelector(".is__getquote__title");
    });

    test("Store Car Insurance", async () => {
        // Store the car insurance details
        await car.storeCarInsurance();
    });
});
