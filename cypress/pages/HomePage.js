class HomePage {
  visit() {
    cy.visit('/');
  }

  getGetStartedButton() {
    return cy.contains("Get Started");
  }
 
  getNavOption(label) {
    return cy.contains(".options span", label);
  }
}

export default HomePage;