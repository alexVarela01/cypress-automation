class LoginPage {
  visit() {
    cy.visit('/login');
  }

  getUsernameField() {
    return cy.get("input[name=email]");
  }

  getPasswordField() {
    return cy.get("input[name=password]");
  }
 
  getSubmitButton() {
    return cy.get("button[type=submit]");
  }
}

export default LoginPage;