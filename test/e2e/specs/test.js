module.exports = {
  'default e2e tests': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('.App', 5000)
      .assert.urlEquals(`${devServer}/contacts`)
      .end();
  },
};
