/// <reference types="cypress" />

var url = 'https://todomvc.com/examples/angular2/';

describe('Complete items in Todo list', ()=>{
    
    beforeEach(()=>{
        cy.visit(url).contains('todos')
    })

})