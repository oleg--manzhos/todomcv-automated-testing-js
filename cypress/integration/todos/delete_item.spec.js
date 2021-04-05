/// <reference types="cypress" />
import Todos from '../pageObjects/todos'
import Helper from '../../cypress/support/helper'

describe('Delete item(s) from the Todo list', ()=>{

    const todos = new Todos()
    const helper = new Helper()
    
    beforeEach(()=>{
        helper.open();
    })

    it('Delete item from the list - positive test - TODOS-006', ()=>{
        var item = 'Hasta la vista, baby'
        //create an item in the list')
        todos.addItem().type(item).type('{enter}')
        //newItem is displayed
        todos.deleteItem(item)
        //old item is not displayed
        todos.checkNoListItems().should('not.exist')
    })

    it('Delete item by renaming it to the empty name - negative test - TODOS-007', ()=>{
        var item = 'I am invisible'
         //create an item in the list')
        todos.addItem().type(item).type('{enter}')
        //update item with an empty string
        todos.updateItem(item, ' ').type('{enter}')
        //check that list is empty
        todos.checkNoListItems().should('not.exist')
    })
})