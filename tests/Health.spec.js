import { test, expect } from '@playwright/test';
const fs = require('fs');
const { HomePage } = require('../pages/HomePage');
const { Health } = require('../pages/Health');

const inputdata = JSON.parse(JSON.stringify(require("../input.json")));

test.describe('Health Insurance', () => {
    let page;
    let homePage;
    let health;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage(); 
        homePage = new HomePage(page);
        health = new Health(page);
    });

    test("Go to the website", async () => {
        // Go to the https://www.coverfox.com/
        await homePage.gotoWebsite();
    });

    test("Select Health Category", async () => {
        // Select the Health category
        await homePage.selectCategory(inputdata.Health);
    });

    test("Select Gender Option", async () => {
        // Select the gender option
        await homePage.selectOption1(inputdata.Gender);
    });

    test("Select Relatives", async () => {
        // Select the relations preferred
        await health.selectRelatives(inputdata.Relation2);
        await health.selectRelatives(inputdata.Relation1);
    });

    test("Click Next Button", async () => {
        // Click the next button
        await health.nextButton();
    });

    test("Select Age", async () => {
        // Select the age for user and relations mentioned 
        await health.ageSelection(inputdata.User, inputdata.UserAge);
        await health.ageSelection(inputdata.Relation2, inputdata.Relation2Age);
        await health.ageSelection(inputdata.Relation1, inputdata.Relation1Age);
    });

    test("Click Next Button Again", async () => {
        // Click the next button again
        await health.nextButton();
    });

    test("Enter Pin Code and Phone Number", async () => {
        // Enter the pin code and phone number
        await health.pinCode("first", inputdata.Pincode);
        await health.pinCode("second", inputdata.Pincode);
        await health.pinCode("third", inputdata.PhoneNumber);
        await health.nextButton();
    });

    test("Wait for Page to Load", async () => {
        // Wait for the selector that it is visible 
        await page.waitForSelector(".space_p_lr_24");
    });

    test("Store Health Insurance", async () => {
        // Store the health insurance details
        await health.storeHealthInsurance();
    });
});
