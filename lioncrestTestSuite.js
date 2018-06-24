const {navBarLocators} = require('./locators.js');
const {testingSetUp, lioncrestHomepage, checkDirectorySync, chromeOptions, topNavBar} = require("./page.js");
const {webdriver, Builder, By, Key, until, actions, tabs} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const fs = require('fs');

checkDirectorySync('./logs');
checkDirectorySync('./logs/screenshots');

describe("Lioncrest Guild Website Test Suite", function() {
  this.timeout(180000); //Required for not receiving timeout error when starting tests.
  it("Verify the navbar links work.", async function() {

    const driver = new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
    await driver.get(testingSetUp.lioncrestUrl);
    await driver.manage().window().maximize();

    await lioncrestHomepage.loadLioncrestHomepage(driver);
    await topNavBar.clickRulesDropdown(driver);
    await topNavBar.clickCodeOfConduct(driver);
    await topNavBar.verifyCodeOfConductPageLoaded(driver);
    await topNavBar.clickRulesDropdown(driver);
    await topNavBar.clickRequirements(driver);
    await topNavBar.verifyRequirementsPageLoaded(driver);
    await topNavBar.clickInformationDropdown(driver);
    await topNavBar.clickLore(driver);
    await topNavBar.verifyLorePageLoaded(driver);
    await topNavBar.clickInformationDropdown(driver);
    await topNavBar.clickMeetTheOfficers(driver);
    await topNavBar.verifyMeetTheOfficersPageLoaded(driver);

    await driver.quit();
  });
});
