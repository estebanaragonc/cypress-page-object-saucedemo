import { BasePage } from '../core/BasePageClass'
//import { homeElements } from '../pages/HomeElements';

export class HomePage extends BasePage  {
  constructor() {
    super();
    //this.mainElement = 'body > .banner';
  }



  login(user){
    const homeElements = require('../pages/HomeElements');
    const dashboardElements = require('../pages/DashboardElements');
   
    switch (user) {
      
      case 'standard':
        console.log ('User to log in is standard');
        cy.get(homeElements.txtUsername).click().type("standard_user");
        cy.get(homeElements.txtPassword).click().type("secret_sauce");
        cy.get(homeElements.btnLogin ).click();
        cy.get(dashboardElements.divInvetory).should('be.visible');
        break;

      case 'locked-out':
        console.log ('User to log in is locked out');
        cy.get(homeElements.txtUsername).click().type("locked_out_user");
        cy.get(homeElements.txtPassword).click().type("secret_sauce");
        cy.get(homeElements.btnLogin).click();
        cy.get(homeElements.btnError).should('be.visible');        
        break;  
    
      case 'problem':
        console.log ('User to log in is problem');
        cy.get(homeElements.txtUsername).click().type("problem_user");
        cy.get(homeElements.txtPassword).click().type("secret_sauce");
        cy.get(homeElements.btnLogin ).click();
        cy.get(dashboardElements.divInvetory).should('be.visible');
        break;
        
      case 'performance-glitch':
        console.log ('User to log in is performance glith');
        cy.get(homeElements.txtUsername).click().type("performance_glitch_user");
        cy.get(homeElements.txtPassword).click().type("secret_sauce");
        cy.get(homeElements.btnLogin).click();
        cy.get(dashboardElements.divInvetory).should('be.visible');
        break;  
      
    }
    cy.wait(3000);
  }

  logout(){
    const homeElements = require('../pages/HomeElements');
    const dashboardElements = require('../pages/DashboardElements');
    console.log ('Process of log out');    
    cy.get(dashboardElements.btnMenu).click();
    cy.get(dashboardElements.aLogout).click();
    cy.get(homeElements.divLoginBox).should('be.visible');
    
    //clear cookies
    cy.clearCookies();
  }
};

export const homePage = new HomePage();