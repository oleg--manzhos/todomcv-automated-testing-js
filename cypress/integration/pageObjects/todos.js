class todos{
 
    addItem(){
       return cy.get('h1+input')
    }

    returnItemCounter(){
        return cy.get('.todo-count')

    }

    checkItemInList(item){
        return cy.get('.view>label').contains(item)
    }

    checkItemNotExist(item){
        return cy.get('.view>label').contains(item)
    }

    checkNoListItems(){
        return cy.get('.main').should('not.exist')
    }

    completeItem(item){
        cy.get('.view>label').contains(item).siblings('.toggle').check()
    }

    checkItemCompleted(item){
        return cy.get('li>.view>label').contains(item).parent().parent().should('have.class', 'completed')
    }

    updateItem(oldItem, newItem){
       cy.get('.view>label').contains(oldItem).dblclick()
       return cy.get('li>input').clear().click().type(newItem)
    }

    deleteItem(item){
       return cy.get('.view>label').contains(item)
            .click().siblings('.destroy')
            .trigger('mouseover', {force:true}).click({force:true})
    }
}
export default todos