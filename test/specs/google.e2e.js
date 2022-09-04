// Scenario:
//  1. Go to google site
//  2. Search for the keyword 'Test Automation Learning'
//  3. Select the link with Udemy course
//  4. Verify if the Udemy site has opened
//  5. Search for BDD with Cucumber
//  6.Click on the course with highest rating from the list of search results
// Task: Automate the above scenario given using JS and any tool (WebdriverIO or Selenium). The Project should be shared as a GitHub project. Each automation step should have assertions''

import GooglePage from "../pageobjects/google.page";

describe("Assessment", function () {
  it("Opens Google", async function () {
    //  1. Go to google site and check it is Google

    await browser.url("http://www.google.com");

    const title = await browser.getTitle();

    await expect(title).toEqual("Google");

    // Dismiss cookies

    const cookieBtn = $("div=Reject all");
    await cookieBtn.click();
  });
  // 2. Search for the keyword 'Test Automation Learning'
  it("searches for 'Test Automation Learning' in search bar", async function () {
    const searchPhrase = "Test Automation Learning";

    await GooglePage.open();
    await GooglePage.search(searchPhrase);
    await GooglePage.searchInput.keys("Enter");

    const title = await browser.getTitle();
    await expect(title).toHaveTitleContaining("Test Automation Learning");
  });

  //  3. Select the link with Udemy course
  it("selects the Udemy course link", async function () {
    const desiredResult = "Udemy";

    await GooglePage.open();

    await GooglePage.clickResult(desiredResult);
    //  4. Verify if the Udemy site has opened
    const title = await browser.getTitle();
    await expect(title).toHaveTitleContaining("Udemy");
  });

  //  5. Search for BDD with Cucumber

  it("searches Udemy search bar for BDD with cucumber and clicks on highest rating course", async function () {
    await UdemyPage.open();
    await UdemyPage.searchInput.setValue("BDD with cucumber");
    await UdemyPage.searchInput.keys("Enter");

    await expect(browser).toHaveTitleContaining("BDD with cucumber");
    // 6.Click on the course with highest rating from the list of search results

    const dropDown = await $("");
    await dropDown.click();
    await dropDown.selectByVisibleText("Highest Rated");

    const firstLink = await "=bdd with cucumber";
    await firstLink.click();

    const title = await browser.getTitle();
    await expect(title).toHaveTitle(
      "Learn to Create BDD Framework using Cucumber and Java"
    );
  });
});
