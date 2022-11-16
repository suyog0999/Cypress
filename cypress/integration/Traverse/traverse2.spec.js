


describe('Traverse methods in cypress',()=>{


it('To get the closest ancestor DOM element, use the .closest() command.',function(){
    cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    cy.get('#t01').closest('div').should('have.class','thumbnail')
})

it('To get the closest ancestor DOM element, use the .closest() command.',function(){
    cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    cy.get('#milk').closest('div[class="container"]').should('have.class','container')
})


// parent
it('To get parent DOM element of elements, use the .parent() command.',function(){
    cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    cy.get('#t01').parent().should('have.class','thumbnail')
})

// parents
it('To get parents DOM element of elements, use the .parents() command.',function(){
    cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    cy.get('#milk').parents('div').should('have.class','container')
})


// parentsUntil
it('To get parents DOM element of elements until other element, use the .parentsUntil() command.',function(){
    cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    cy.get('#milk').parentsUntil('div[class="container"]').should('have.length',3)
    
})


})