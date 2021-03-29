class todos{
 
    addItem(){
       return cy.get('h1+input')
    }

    returnItemCounter(){
        return cy.get('.todo-count')

    }

    checkItemInList(){
        return cy.get('.view>label')
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

}
export default todos