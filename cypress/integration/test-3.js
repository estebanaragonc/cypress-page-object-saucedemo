import { homePage } from '../support/HomePage';
import { dashboardPage } from '../support/DashboardPage';
import { cardPage } from '../support/CardPage';
import { checkoutPage } from '../support/CheckoutPage';

describe('Verify the labels in the “Your Cart” page', () => {
    context('Navigating to url and validating soucedemo was loaded', () => {
      beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
          .get('#user-name').should('be.visible');        
      });

      it('validating all elements in card page', () => {
        homePage.login('standard');      
        var product = 'Sauce Labs Bike Light';
        
        //adding product to card
        dashboardPage.addToCardProductByText(product);
        dashboardPage.clickShoppingCard();
        //validations
        cardPage.productHasText('Sauce Labs Bike Light');
        cardPage.productDescriptionHasText("A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.");
        cardPage.productPriceHasText('9.99');        
        //logout
        homePage.logout();
        
      });                     
    });
  });
  