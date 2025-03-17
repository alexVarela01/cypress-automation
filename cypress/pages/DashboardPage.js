class Dashboard {
  visit() {
    cy.visit('/dashboard');
  }

  getWelcomeLabel(name) {
    return cy.contains("Welcome, " + name);
  }
}

export default Dashboard;