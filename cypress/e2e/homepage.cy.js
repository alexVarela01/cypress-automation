import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

describe("Homepage Navigation Tests", () => {
  const home = new HomePage();
  const login = new LoginPage();
  
  const menuItems = [
    { label: "About", expectedUrl: "/about" },
    { label: "Documentation", expectedUrl: "/documentation" },
    { label: "Terms", expectedUrl: "/terms" }
  ];

  beforeEach(() => {
    home.visit();
  });

  it("should navigate to login page", () => {
    home.getGetStartedButton().click();
    login.getUsernameField().should("be.visible");
    login.getPasswordField().should("be.visible");
  });

  menuItems.forEach(({ label, expectedUrl }) => {
    it(`should navigate to ${label} page`, () => {
      home.getNavOption(label).click();

      cy.url().should("include", expectedUrl);
      home.getNavOption(label).should("be.visible");
    });
  });
});
