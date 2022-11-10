///<reference types="cypress" />


describe('Traverse methods in cypress',()=>{

    //filter
    it('To get DOM elements that match a specific selector, use the .filter() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().filter('.disabled').should('have.text','Warning')
    })

    it('To get DOM elements that match a specific selector, use the .filter() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-buttons').children().filter('[role="button"]').should('have.text','Link')
    })


    it('To get DOM elements that match a specific selector, use the .filter() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.btn-group.btn-group-toggle').children().filter('.active').should('have.text','Button-1')
    })


    //find

    it('To get descendant DOM elements of the selector, use the .find() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01').find('th').first().should('have.text','Firstname')
        cy.get('#t01').find('th').eq(1).should('have.text','Lastname')
        cy.get('#t01').find('th').last().should('have.text','Age')
    })

    it('To get descendant DOM elements of the selector, use the .find() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.table.table-light.traversal-table').find('th').first().should('have.text','#')
        cy.get('.table.table-light.traversal-table').find('th').eq(1).should('have.text','First')
        cy.get('.table.table-light.traversal-table').find('th').eq(2).should('have.text','Last')
    })

    
    //not
    it('To remove DOM element(s) from the set of elements, use the .not() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
       cy.get('.btn-group.btn-group-toggle').children()//4
       .not('.active').should('have.length',3)
    })


    it.only('To remove DOM element(s) from the set of elements, use the .not() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length','3')
    })


    it('To remove DOM element(s) from the set of elements, use the .not() command.',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
       cy.get('.traversal-buttons').children().not('[role="button"]').should('have.length',4)
    })

})