// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginPage from '../pages/LoginPage';
const login = new LoginPage();

Cypress.Commands.add('login', (email) => { 
  login.visit();
  login.getUsernameField().type(email);
  login.getPasswordField().type(Cypress.env('CYPRESS_PASSWORD'));
  login.getSubmitButton().click();
})

Cypress.Commands.add('logout', () => { 
  cy.contains(".options button", "Log out").click();
})