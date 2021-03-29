/// <reference types="cypress" />
import Todos from '../pageObjects/todos'
import Helper from '../helpers/helper'

describe('Complete items in Todo list', ()=>{

    const todos = new Todos()
    const helper = new Helper()
    
    beforeEach(()=>{
        helper.open();
    })

    it('Complete item in the list - positive test - TODOS-003', ()=>{
        var itemName = 'Complete this item!';
        var itemName1 = 'Do not complete this item!';
        //Create an item in the list
        todos.addItem().type(itemName).type('{enter}')
        todos.addItem().type(itemName1).type('{enter}')
        todos.returnItemCounter().contains('2 items left')
        //complete item form the list
        todos.completeItem(itemName)
        todos.checkItemCompleted(itemName)
        todos.returnItemCounter().contains('1 item left')
    })

})