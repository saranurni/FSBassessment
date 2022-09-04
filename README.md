<h1>FSB Assessment</h1>

Scenario:

1. Go to google site
2. Search for the keyword 'Test Automation Learning'
3. Select the link with Udemy course
4. Verify if the Udemy site has opened
5. Search for BDD with Cucumber
6. Click on the course with highest rating from the list of search results

Task:
Automate the above scenario given using JS and any tool (WebdriverIO or Selenium). The Project should be shared as a GitHub project. Each automation step should have assertions.

<br>

<h2>Procedure</h2>

- Created pageobjects page for Google to abstract code away and make the pages file more declarative
- Created google end to end page for testing
- Attempted to create pageobjects page for Udemy, however wasn't able to make end to end test page and to incorporate UdemyPage into test. This is included in a separate branch called 'udemyPage'.
- Wrote tests to fulfill the scenario for the given task

<h3>Limitations</h3>

- After passing 3 tests, following tests failed as we run into captcha problems.

#### webdriverio-mocha-linting
