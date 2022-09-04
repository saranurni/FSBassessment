class UdemyPage {
  open() {
    return browser.url("https://www.udemy.com/topic/automation-testing/");
  }
}

export default new UdemyPage();
