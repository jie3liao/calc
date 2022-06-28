const { Given, When, Then } = require('@wdio/cucumber-framework');

const RetirementCalculatorPage = require('../pageobjects/retirement-calculator-page');

Given('I am on the {string} page of Securian', async (page) => {
    if (page == "retirement calculator") {
        await RetirementCalculatorPage.open();
    } else {
        throw new Error('Page name is not supported: ' + page);
    }
});

When('I type {int} in {string} field', async (value, fieldName) => {
    const field = await RetirementCalculatorPage.getInput(fieldName);
    await field.click();
    await field.addValue(value);
});

When('I select radio button {string} for {string}', async (value, groupName) => {
    const radioButton = await RetirementCalculatorPage.getRadioButton(value, groupName);
    await radioButton.click(); 
    await browser.execute("window.scrollBy(0, 250)");
});

When('I click {string} button', async (buttonName) => {
    await RetirementCalculatorPage.getButton(buttonName).click();
});

When('I click {string} link', async (linkName) => {
    await RetirementCalculatorPage.getLink(linkName).click();
});

Then('Verify that {string} button is present', async (buttonName) => {
    const button = await RetirementCalculatorPage.getButton(buttonName);
    await expect(button).not.toBeNull();
});