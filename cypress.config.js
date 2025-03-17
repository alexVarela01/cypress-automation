const { defineConfig } = require("cypress");
const dotenv = require('dotenv');
dotenv.config();

module.exports = defineConfig({
  projectId: 'st6x1v',
  e2e: {
    baseUrl: 'https://monetis-delta.vercel.app',
    env: {
      CYPRESS_PASSWORD: process.env.CYPRESS_PASSWORD
    },
    setupNodeEvents(on, config) {},
  },
});
