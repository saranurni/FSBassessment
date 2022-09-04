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

    const searchInput = $("input");
    await searchInput.click();
    await browser.keys(searchPhrase);
    await browser.keys("Enter");

    await browser.pause(1000);

    const title = await browser.getTitle();
    await expect(title).toContain("Test Automation Learning");
  });

  //  3. Select the link with Udemy course
  it("selects the Udemy course link", async function () {
    const desiredResult = $("h3*=Udemy");

    await desiredResult.click();

    //  4. Verify if the Udemy site has opened
    const title = await browser.getTitle();
    await expect(title).toContain("Udemy");
  });

  //  5. Search for BDD with Cucumber

  it("searches Udemy search bar for BDD with cucumber", async function () {
    const searchInput = await $("input[name=q]");
    const udemySearch = "BDD with cucumber";
    await searchInput.click();

    await browser.keys(udemySearch);
    await browser.keys("Enter");

    const heading = await $("h1");

    await expect(heading).toContain("BDD with cucumber");
  });
  // 6.Click on the course with highest rating from the list of search results

  it("finds highest rated course and clicks on it", async function () {
    const dropDown = await $("select[name=sort]");
    await dropDown.click();
    await dropDown.selectByVisibleText("Highest Rated");

    const firstLink = await $("h3");
    await firstLink.click();

    const title = await browser.getTitle();
    await expect(title).toHaveTitle(
      "Learn to Create BDD Framework using Cucumber and Java"
    );
  });
});
