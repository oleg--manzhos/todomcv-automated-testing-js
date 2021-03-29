/// <reference types="cypress" />
import Todos from '../pageObjects/todos'
import Helper from '../helpers/helper'

describe('Add items to Todo list', ()=>{

    const todos = new Todos()
    const helper = new Helper()

    beforeEach(()=>{
        helper.open();
    })

    it('Add item to the list - positive test - TODOS-001', ()=>{
        var optionName = 'Water the flowers';
        //item is added
        todos.addItem().type(optionName).type('{enter}')
        //created item appears in the  todo list
        todos.checkItemInList(optionName).should('have.text', optionName)
        //counter is increased
        todos.returnItemCounter().contains('1 item left')
    })

    it('Add item with spaces to the list - negative test - TODOS-002', ()=>{
        //create item name, suurounded with spaces
        var optionName = '  Watch Netfilx ';
        //add item with spaces
        todos.addItem().type(optionName).type('{enter}')
        //check that spaces are trimmed once item appears in the todo list
        todos.checkItemInList(optionName).should('have.text', optionName.trim())
    })
})