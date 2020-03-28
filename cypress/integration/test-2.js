import { homePage } from '../support/HomePage';
import { dashboardPage } from '../support/DashboardPage';
import { cardPage } from '../support/CardPage';
import { checkoutPage } from '../support/CheckoutPage';

describe('E2E test to buy two products (The products need to be Sauce Labs Onesie and Sauce Labs BikeLight) with the performance_glitch_user', () => {
    context('Navigating to url and validating soucedemo was loaded', () => {
      beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
          .get('#user-name').should('be.visible');        
      });

      it('Buying 2 products.. ', () => {
        homePage.login('performance-glitch');
        dashboardPage.addToCardProductByText('Sauce Labs Bike Light');
        dashboardPage.addToCardProductByText('Sauce Labs Onesie');
        dashboardPage.clickShoppingCard();
        cardPage.clickCheckout();
        checkoutPage.fillInformation('Elvis', 'Aragon', '34747');
        checkoutPage.clickContinue();
        checkoutPage.clickFinish();
        //validation
        checkoutPage.isOrderDispatchedDisplayed()
        dashboardPage.logout();
      });                     
    });
  });
  