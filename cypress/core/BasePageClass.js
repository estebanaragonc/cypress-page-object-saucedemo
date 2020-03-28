//import { navMenu } from '../support/NavigationMenuClass';

export class BasePage  {
  constructor() {
    this.mainElement = 'body';
  }

  verifyElements() {
    cy.get(this.mainElement).should('be.visible');
    //navMenu.verifyElements();
  }
};
