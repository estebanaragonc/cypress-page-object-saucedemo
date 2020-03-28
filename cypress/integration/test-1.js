import { homePage } from '../support/HomePage';
import { dashboardPage } from '../support/DashboardPage';

describe('Login and logout (Basic and alternate courses) with all the users', () => {
    context('Navigating to url and validating soucedemo was loaded', () => {
      beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
          .get('#user-name').should('be.visible');        
      });

      it('Login with Standard User ', () => {
        homePage.login('standard');
        dashboardPage.logout();
      });
      
     it('Login with Locked out User ', () => {
        homePage.login('locked-out');        
      });

      it('Login with Problem User ', () => {
        homePage.login('problem');
        dashboardPage.logout();
      });

      it('Login with Performance glitch User ', () => {
        homePage.login('performance-glitch');
        dashboardPage.logout();
      });
          
    });
  });
  