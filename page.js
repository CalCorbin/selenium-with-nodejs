const {navBarLocators, homepageLocators} = require("./locators.js");
const {webdriver, Builder,  By,  Key, until, actions, tabs} = require('selenium-webdriver');
const fs = require('fs');
const chrome = require('selenium-webdriver/chrome');
const {expect} = require('chai');

function checkDirectorySync(directory) {
  try {
    fs.statSync(directory);
  } catch(e) {
    fs.mkdirSync(directory);
  }
};

const chromeOptions = new chrome.Options();
chromeOptions.addArguments('--headless');
chromeOptions.addArguments('--window-size=2880x1800');

const testingSetUp = {
  lioncrestUrl: "https://www.thelioncrest.com/"
};

const lioncrestHomepage = {
  loadLioncrestHomepage: async driver => {
    await driver.wait(until.elementLocated(By.css(navBarLocators.navBarDivSELECTOR)), 30000);
    await driver.wait(until.elementLocated(By.css(homepageLocators.lioncrestLogoImageSELECTOR)), 30000);
  },
};

const topNavBar = {
  clickCodeOfConduct: async driver => {
    const codeOfConductLink = await driver.findElement(By.id(navBarLocators.codeOfConductLinkId));
    await codeOfConductLink.click();
    await driver.wait(until.titleIs("Lioncrest | Code of Conduct"), 10000);
  },
  clickInformationDropdown: async driver => {
    const informationDropdown = await driver.findElement(By.id(navBarLocators.informationDropdownId));
    await informationDropdown.click();
  },
  clickMeetTheOfficers: async driver => {
    const meetTheOfficersLink = await driver.findElement(By.id(navBarLocators.meetTheOfficersLinkId));
    await driver.sleep(1000);
    await meetTheOfficersLink.click();
    await driver.wait(until.titleIs("Lioncrest | Meet the Officers"), 10000);
  },
  clickLore: async driver => {
    const loreLink = await driver.findElement(By.css(navBarLocators.loreLinkSELECTOR));
    await driver.sleep(1000);
    await loreLink.click();
    await driver.wait(until.titleIs("Lioncrest | Lore"), 10000);
  },
  clickRequirements: async driver => {
    const requirementsLink = await driver.findElement(By.id(navBarLocators.requirementsLinkId));
    await requirementsLink.click();
    await driver.wait(until.titleIs("Lioncrest | Requirements"), 10000);
  },
  clickRulesDropdown: async driver => {
    const rulesDropdown = await driver.findElement(By.id(navBarLocators.rulesDropdownId));
    await rulesDropdown.click();
  },
  verifyCodeOfConductPageLoaded: async driver => {
    await driver.getTitle();
    await function(title){
      expect(title).equals("Lioncrest | Code of Conduct")};
  },
  verifyLorePageLoaded: async driver => {
    await driver.getTitle();
    await function(title){
      expect(title).equals("Lioncrest | Lore")};
  },
  verifyMeetTheOfficersPageLoaded: async driver => {
    await driver.getTitle();
    await function(title){
      expect(title).equals("Lioncrest | Meet the Officers")};
  },
  verifyRequirementsPageLoaded: async driver => {
    await driver.getTitle();
    await function(title){
      expect(title).equals("Lioncrest | Requirements")};
  },
};

module.exports = {testingSetUp, lioncrestHomepage, checkDirectorySync, topNavBar, chromeOptions};
