class todos{
 
    addItem(){
       return cy.get('h1+input')
    }

    returnItemCounter(){
        return cy.get('.todo-count')

    }

    checkItemInList(item){
        if(item == null){
            return cy.get('.view>label')
        }
        return cy.get('.view>label').contains(item)
    }


    checkNoListItems(){
        return cy.get('.main')
    }

    completeItem(item){
        cy.get('.view>label').contains(item).siblings('.toggle').check()
    }

    checkItemCompleted(item){
        return cy.get('li>.view>label').contains(item).parent().parent()
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

    random(length) {
        var result           = '';
        var characters       = 'A BCDEFGHIJKL MNOPQRSTUVWX YZabcdefgh ijklmnopq rstuvwxyz';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
}
export default todos