import { BasePage } from '../core/BasePageClass'
//import { homeElements } from '../pages/HomeElements';

export class CheckoutPage extends BasePage  {
  constructor() {
    super();
    //this.mainElement = 'body > .banner';
  }


  fillInformation(name, lastname, zip)
  {
    const checkoutElements = require('../pages/CheckoutElements');
    cy.get(checkoutElements.txtName).type(name);
    cy.get(checkoutElements.txtLastname).type(lastname);
    cy.get(checkoutElements.txtZip).type(zip);
  }

  clickContinue()
  {
    const checkoutElements = require('../pages/CheckoutElements');
    cy.xpath(checkoutElements.btnCheckout).click();
  }

  clickFinish()
  {
    const checkoutElements = require('../pages/CheckoutElements');
    cy.xpath(checkoutElements.btnFinish).click();
  }

  isOrderDispatchedDisplayed()
  {
    const checkoutElements = require('../pages/CheckoutElements');
    return cy.get(checkoutElements.titleCompleteHeader).should('be.visible');
  }

  isElementDisplayed (element) {
    return cy.get(element).should('be.visible');
  }
  



};

export const checkoutPage = new CheckoutPage();

