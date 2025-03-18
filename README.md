# Test Automation Framework

This project is an end-to-end (E2E) test suite using [Cypress](https://www.cypress.io/) to automate UI testing. It is structured to support scalable and maintainable test automation for a web application.

## Project Structure

### /cypress
- **downloads** - Downloaded files during tests (if applicable)
- **e2e**
  - `auth.cy.js` - Cypress tests for auth
  - `homepage.cy.js` - Cypress tests for homepage
  - **(your tests should go here)**
- **fixtures**
  - `navigationOptions.json` - Navigation menu data
  - `testUser.json` - Sample user credentials
  - **(your data/mocks should go here)**
- **pages**
  - `DashboardPage.js` - Page Object for Dashboard
  - `HomePage.js` - Page Object for Homepage
  - `LoginPage.js` - Page Object for Login
  - **(your pages should go here)**
- **support** - Custom commands and configuration
  - `commands.js` - Reusable Cypress commands
  - `e2e.js` - Global setup for tests

### /
- **cypress.config.js** - Cypress configuration file
- **package.json** - Project dependencies and scripts
- **.env** - file with project secrets (check Setup Instructions)

## Features

- **Cypress Automation**: Uses Cypress for fast and reliable end-to-end testing.
- **Page Object Model (POM)**: Organizes UI elements and actions in separate classes for better maintainability.
- **Modular Utility Classes**: Includes reusable utilities for data management and custom commands.
- **Detailed Test Reporting**: Generates reports with test statuses and screenshots on failure.
- **Parallel Execution**: Tests can be run in parallel to improve efficiency.

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/alexVarela01/cypress-automation.git
   cd cypress-automation
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file on project root for storing sensitive data
    ```sh
    # password that will be used on the automated tests (login and so on)
    # choose any password (example)
    CYPRESS_PASSWORD=AutomaPassw0rd!
    ```


## Running Tests
**Run tests in headed mode:**
  ```sh
  # This opens the Cypress Test Runner, allowing interactive testing.
  npx cypress open
  ```
**Run tests in headless mode:**
  ```sh
  # This runs tests in the terminal (useful for CI/CD).
  npx cypress run
  ```
**Run specific tests:**
  ```sh
  # This will run only homepage tests
  npx cypress run --spec "cypress/e2e/homepage.cy.js"
  ```

**Run tests through github actions:**
  ```sh
  1. Access your repository
  2. Click on 'Actions'
  3. Select 'Cypress Tests'
  4. Run workflow
  5. Tests also run every push made to the repository
  6. Make sure to include CYPRESS_RECORD_KEY on your repo secrets (see Setup Cypress Cloud section)
  ```

## How to Add New Tests
1. Create a new test file inside `cypress/e2e/`.
2. Import necessary page objects if applicable.
3. Use Cypress commands to write the test cases.
4. Example test (`cypress/e2e/example.cy.js`):
   ```javascript
   import HomePage from '../pages/HomePage';
   
   describe("Example Test", () => {
     const home = new HomePage();
   
     beforeEach(() => {
       home.visit();
     });
   
     it("should display homepage elements", () => {
       home.getGetStartedButton().should("be.visible");
     });
   });
   ```

## Test Reports
- Cypress generates test reports automatically.
- Reports can be integrated with CI tools like GitHub Actions, Jenkins, or CircleCI.

## Setup Cypress Cloud
- Access https://cloud.cypress.io/
- Follow the steps to add a projectId and your RECORD_KEY
- This will show the reports from all builds when we choose to save them
