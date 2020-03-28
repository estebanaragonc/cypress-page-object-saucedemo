import { homePage } from '../support/HomePage';
import { dashboardPage } from '../support/DashboardPage';
import { cardPage } from '../support/CardPage';
import { checkoutPage } from '../support/CheckoutPage';

describe('Validations for the “Checkout your information” fields', () => {
    context('Navigating to url and validating soucedemo was loaded', () => {
      beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
          .get('#user-name').should('be.visible');        
      });

      it('Remove items from the card', () => {

        homePage.login('standard');

        dashboardPage.addToCardProductByText('Sauce Labs Bike Light');
        dashboardPage.clickShoppingCard();
        cardPage.clickCheckout();
        const checkoutElements = require('../pages/CheckoutElements');
        checkoutPage.isElementDisplayed(checkoutElements.txtName);
        checkoutPage.isElementDisplayed(checkoutElements.txtLastname);
        checkoutPage.isElementDisplayed(checkoutElements.txtZip);

        // logout
        dashboardPage.logout();
        
      });  
    });
  });
  