import Dashboard from '../pages/DashboardPage';

describe("User Authentication", () => {
  let userData;
  const AUTH_PASSWORD = Cypress.env('CYPRESS_PASSWORD');
  const dashboard = new Dashboard();

  // Create account before all login tests
  before(() => {
    cy.fixture('testUser').then((data) => {
      userData = data;
      userData.password = userData.confirmPassword = AUTH_PASSWORD;

      cy.request({
        method: "POST",
        url: "/api/users/register",
        body: userData,
        failOnStatusCode: false
      });
    });
  });

  // Delete account after all login tests
  after(() => {
    cy.request({
      method: "DELETE",
      url: "/api/users/api/deleteAccount",
      headers: {
        "x-username": userData.email,
        "x-password": AUTH_PASSWORD
      }
    });
  });

  it("should navigate to login page", () => {
    cy.login(userData.email, AUTH_PASSWORD); 
    cy.url().should("include", "/dashboard");

    dashboard.getWelcomeLabel(userData.name).should("be.visible");
  });

  it("should logout", () => {
    cy.login(userData.email, AUTH_PASSWORD);
    cy.logout();
    cy.url().should("include", "/login");
  });
});
