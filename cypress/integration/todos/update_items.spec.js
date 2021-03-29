/// <reference types="cypress" />
import Todos from '../pageObjects/todos'
import Helper from '../helpers/helper'

describe('Update items in Todo list', ()=>{

    const todos = new Todos()
    const helper = new Helper()
    
    beforeEach(()=>{
        helper.open();
    })

    it('Edit item in the list - positive test - TODOS-004', ()=>{
        var oldItem = 'I like DC!'
        var newItem = "I like Marvel instead"
        //Create an item in the list
        todos.addItem().type(oldItem).type('{enter}')
        //update oldItem value to newItem
        todos.updateItem(oldItem, newItem).type('{enter}')
        //newItem is displayed
        todos.checkItemInList(newItem).should('have.text', newItem)
        //old item is not displayed
        todos.checkItemInList(oldItem).should('to.not.have.text', oldItem)
    })

    // it('Edit item to be empty in the list - negative test - TODOS-005', ()=>{
    //     var itemName = 'This will be destroyed soon';
    //     //create an item in the list
    //     todos.addItem().type(itemName).type('{enter}')
    //     //update oldItem value to newItem
    //     todos.updateItem(itemName, ' ')
    //     //complete item form the list
    //     todos.addItem().focus()
    //     //check that one item only is completed
    //     todos.checkItemInList(newItem).should('have.text', '')
    // })

})