import { BasePage } from '../core/BasePageClass'
//import { homeElements } from '../pages/HomeElements';

export class CardPage extends BasePage  {
  constructor() {
    super();
    //this.mainElement = 'body > .banner';
  }


  clickCheckout()
  {
    const cardElements = require('../pages/CardElements');
    cy.xpath(cardElements.btnCheckout).click();
  }

  getDescriptionByProduct(product)
  {
      var global;
    const cardElements = require('../pages/CardElements');
    var algo = cy.xpath('//div[text()="' + product + '"]/parent::a/parent::div/parent::div/div[2]/div').invoke('text')
    .then(text => {
      const someText = text;
      global = someText;
      return global;      
    });    
    cy.log('global : ' + algo.toString);
  }
  
  productHasText(product)
  {
    const cardElements = require('../pages/CardElements');
    return cy.get(cardElements.labelInventoryItemName).should('contain', product);

  }

  productDescriptionHasText(description)
  {
    const cardElements = require('../pages/CardElements');
    return cy.get(cardElements.labelInventoryDescription).should('contain', description);
  }

  productPriceHasText(price){
    const cardElements = require('../pages/CardElements');
    return cy.get(cardElements.labelInventoryPrice).should('contain', price);
  }



  



};

export const cardPage = new CardPage();