import { BasePage } from '../core/BasePageClass'
//import { homeElements } from '../pages/HomeElements';

export class DashboardPage extends BasePage  {
  constructor() {
    super();
    //this.mainElement = 'body > .banner';
  }

  addToCardProductByText(product){    
    cy.wait(1000)
    console.log ('Selecting product: ' + product);
    cy.xpath('//div[text()="' + product + '"]/parent::a/parent::div/parent::div/div[3]/button').click();    
  }
  
  clickShoppingCard() {
    const dashboardElements = require('../pages/DashboardElements');    
    console.log('clicking shopping cart icon');
    cy.xpath(dashboardElements.btnCard).click();
  }

  shoppingCountCardIs(counter)
  {
    cy.wait(500)
    const dashboardElements = require('../pages/DashboardElements');
    if (counter == 0) {
      try {
        cy.xpath(dashboardElements.spanShoppingCardBubble).should('not.exist');  
      } catch (error) {
        cy.log('Shopping cart is cero');
      }
    } else {
      cy.xpath(dashboardElements.spanShoppingCardBubble).should('contain', counter);  
    }    
    
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

  validateCardDoesnotHaveItems()
  {
    const dashboardElements = require('../pages/DashboardElements');
    const cardElements = require('../pages/CardElements');
    cy.xpath(dashboardElements.spanShoppingCardBubble).then($button => {
      if ($button.is(':visible')){
        cy.log('Cart is full, then delete all to continue');
        cy.xpath(dashboardElements.btnCard).click();
        var position = 3;
        //remove all elements
        cy.get('.cart_item')
        .each(($el, index, $list) => { 
          cy.log('Total of items in card: ' + $list.length);                     
          cy.log ('Deleting the item #: ' + index);
          cy.xpath('//*[@id="cart_contents_container"]/div/div[1]/div[' + (index + 3) +']/div[2]/div[2]/button').click();
        });     
        cy.go('back');
      }
    });
    
  }

};

export const dashboardPage = new DashboardPage();