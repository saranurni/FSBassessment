class GooglePage {
  async clickResult(selectLink) {
    await $(`h3*=${selectLink}`).click();
  }

  open() {
    return browser.url("https://www.google.com/");
  }
}

export default new GooglePage();
