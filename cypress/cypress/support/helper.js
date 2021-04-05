/// <reference types="cypress" />
class helper{

open(){
    cy.visit(Cypress.env('url'))
}

}

export default helper