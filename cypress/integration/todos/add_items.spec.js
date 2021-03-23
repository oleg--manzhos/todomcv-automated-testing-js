/// <reference types="cypress" />
import Todos from '../pageObjects/todos'

var url = 'https://todomvc.com/examples/angular2/';

describe('Add items to Todo list', ()=>{

    const todos = new Todos()

    beforeEach(()=>{
        cy.visit(url).contains('todos')
    })

    it('Add item to the list - positive test', ()=>{
        todos.addItem().type('Water the flowers').type('{enter}')
    })


})