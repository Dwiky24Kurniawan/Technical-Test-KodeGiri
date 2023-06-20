const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://finance.onlydev.my.id',
    specPattern: "cypress/e2e",
    supportFile: false,
    chromeWebSecurity: false
  },
});