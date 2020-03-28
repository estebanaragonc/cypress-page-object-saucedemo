import { homePage } from '../support/HomePage';
import { dashboardPage } from '../support/DashboardPage';
import { cardPage } from '../support/CardPage';
import { checkoutPage } from '../support/CheckoutPage';

describe('Add and remove an item from the cart', () => {
    context('Navigating to url and validating soucedemo was loaded', () => {
      beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
          .get('#user-name').should('be.visible');        
      });

      it('Add items to the card from dashboard', () => {
        homePage.login('standard');      
        // adding items
        dashboardPage.addToCardProductByText('Sauce Labs Bike Light');
        dashboardPage.addToCardProductByText('Sauce Labs Backpack');
        dashboardPage.addToCardProductByText('Sauce Labs Onesie');

        //validating the icon of the shopping card changed to 3
        dashboardPage.shoppingCountCardIs(3); 
        
        //logout
        dashboardPage.logout();
      });    
      
      
      it('Remove items from the card', () => {

        homePage.login('standard');  
        dashboardPage.validateCardDoesnotHaveItems();
        // adding items
        dashboardPage.addToCardProductByText('Sauce Labs Bike Light');
        dashboardPage.addToCardProductByText('Sauce Labs Backpack');
        dashboardPage.addToCardProductByText('Sauce Labs Onesie');

        //using same method to remove them
        dashboardPage.addToCardProductByText('Sauce Labs Bike Light');
        dashboardPage.addToCardProductByText('Sauce Labs Backpack');
        dashboardPage.addToCardProductByText('Sauce Labs Onesie');

        //validating the icon of the shopping card changed to 3
        dashboardPage.shoppingCountCardIs(0);      

        //logout
        dashboardPage.logout();
      });  
    });
  });
  