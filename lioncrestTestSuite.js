const {webdriver, Builder, By, Key, until, actions, tabs} = require('selenium-webdriver');
const {expect} = require('chai');

describe("Lioncrest Guild Website Test Suite", function() {
  this.timeout(180000); //Required for not receiving timeout error when starting tests.
  it("Verify the website landing page loads.", async function() {
    //Loads the Browser instance.
    const driver = await new Builder().forBrowser("chrome").build();
    await driver.get('https://www.thelioncrest.com/');
    await driver.manage().window().maximize()
    await driver.wait(until.titleIs("Lioncrest"), 20000);

    const navBar = await driver.findElement(By.id("SITE_HEADERinlineContent"));
    await driver.wait(until.elementIsVisible(navBar), 30000);

    await driver.quit();
  });
  it("Verify the navbar links work.", async function() {
    //Loads the Browser instance.
    const driver = await new Builder().forBrowser("chrome").build();
    await driver.get('https://www.thelioncrest.com/');
    await driver.manage().window().maximize()
    await driver.wait(until.titleIs("Lioncrest"), 20000);

    const navBar = await driver.findElement(By.id("SITE_HEADERinlineContent"));
    const rulesDropdown = await driver.findElement(By.id("comp-jfsz4ct12label"));
    await rulesDropdown.click();
    const codeOfConductLink = await driver.findElement(By.id("comp-jfsz4ct1moreContainer0label"));
    const requirementsLink = await driver.findElement(By.id("comp-jfsz4ct1moreContainer1label"));
    await codeOfConductLink.click();
    await driver.wait(until.titleIs("Lioncrest | Code of Conduct"), 10000);
    await driver.getTitle();
    await function(title){
      expect(title).equals("Lioncrest | Code of Conduct")};
    await rulesDropdown.click();
    await requirementsLink.click();
    await driver.wait(until.titleIs("Lioncrest | Requirements"), 10000);
    await driver.getTitle();
    await function(title){
      expect(title).equals("Lioncrest | Requirements")};
    const informationDropdown = await driver.findElement(By.id("comp-jfsz4ct13label"));
    await informationDropdown.click();
    const loreLink = await driver.findElement(By.id("comp-jfsz4ct1moreContainer0label"));
    const meetTheOfficersLink = await driver.findElement(By.id("comp-jfsz4ct1moreContainer1label"));
    await loreLink.click()
    await driver.wait(until.titleIs("Lioncrest | Lore"), 10000);
    await function(title){
      expect(title).equals("Lioncrest | Lore")};
    await meetTheOfficersLink.click()
    await driver.wait(until.titleIs("Lioncrest | Meet the Officers"), 10000);
    await function(title){
      expect(title).equals("Lioncrest | Meet the Officers")};

    await driver.quit();
  });
});
