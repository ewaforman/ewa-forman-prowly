# Bing and Google Search Automation Tests

This project contains test cases written in Gherkin and automated tests for searching keywords on Bing and Google with various category filters (e.g., Everything, Videos, News). The tests are written using Cypress and JavaScript, ensuring that the search functionality on both platforms works as expected under different scenarios. Scenarios assume that Polish version of site will open.

## Installation and running tests

1. Install dependencies:
```bash
npm install
```

2. Install Cypress:
```bash
npm install cypress --save-dev
```

3. To execute the Cypress tests, run the following command:
```bash
npx cypress open
```
This will launch the Cypress Test Runner. Select the desired test file (e.g., `bing_search.cy.js` or `google_search.cy.js`) to run.

