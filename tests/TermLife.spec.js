import { test, expect } from '@playwright/test';
const fs = require('fs');
const { HomePage } = require('../pages/HomePage');
const { TermLife } = require('../pages/TermLife');

const inputdata = JSON.parse(JSON.stringify(require("../input.json")));

test.describe('Term Life Insurance', () => {
    let page;
    let homePage;
    let termLife;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage(); 
        homePage = new HomePage(page);
        termLife = new TermLife(page);
    });

    test("Go to the website", async () => {
        // Go to the https://www.coverfox.com/
        await homePage.gotoWebsite();
    });

    test("Select Term Life Category", async () => {
        // Select the Term Life category
        await homePage.selectCategory(inputdata.TermLife);
    });

    test("Select Gender Option", async () => {
        // Select the gender option
        await homePage.selectOption1(inputdata.Gender);
    });

    test("Select Age", async () => {
        // Select the age
        await termLife.selectAge();
    });

    test("Fill Name", async () => {
        // Enter the name
        await termLife.fillName();
    });

    test("Fill Phone Number", async () => {
        // Enter the phone number
        await homePage.fillNumber(inputdata.PhoneNumber);
    });

    test("Click View Quotes (First)", async () => {
        // Click the View Quotes button (first)
        await homePage.clickViewQuotes("first");
    });

    test("Wait for Selector", async () => {
        // Wait for the selector
        await page.waitForSelector(".refine-popup");
    });

    test("Select Details", async () => {
        // Select the details
        await termLife.selectDetials();
    });

    test("Select Salary", async () => {
        // Select the salary
        await termLife.selectSalary();
    });

    test("Select Education", async () => {
        // Select the education
        await termLife.selectEducation();
    });

    test("Click See Quotes Button", async () => {
        // Click the See Quotes button
        await termLife.selectButton("See Quotes");
    });

    test("Click Confirm Button", async () => {
        // Click the Confirm button
        await termLife.selectButton("Confirm");
    });

    test("Wait for result page to Load", async () => {
        // Wait for the header title
        await page.waitForSelector(".header-title");
    });

    test("Store Term Life Insurance", async () => {
        // Store the term life insurance details
        await termLife.storeTermLifeInsurance();
    });
});
