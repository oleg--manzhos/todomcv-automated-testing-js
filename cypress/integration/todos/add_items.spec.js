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
        todos.addItem().type(optionName).type('{enter}')
        todos.checkItemInList(optionName).should('have.text', optionName)
        todos.returnItemCounter().contains('1 item left')
    })

    it('Add item with spaces to the list - negative test - TODOS-002', ()=>{
        var optionName = '  Watch Netfilx ';
        todos.addItem().type(optionName).type('{enter}')
        todos.checkItemInList(optionName).should('have.text', optionName.trim())
    })
})