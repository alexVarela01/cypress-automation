import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

describe("Homepage Navigation Tests", () => {
  const home = new HomePage();
  const login = new LoginPage();

  beforeEach(() => {
    home.visit();
  });

  it("should navigate to login page", () => {
    home.getGetStartedButton().click();
    login.getUsernameField().should("be.visible");
    login.getPasswordField().should("be.visible");
  });

  it("should navigate to each menu item", () => {
    cy.fixture("navigationOptions").then((data) => {
      data.menuItems.forEach(({ label, expectedUrl }) => {
        home.getNavOption(label).click();
        cy.url().should("include", expectedUrl);
        home.getNavOption(label).should("be.visible");
      });
    });
  });
});
