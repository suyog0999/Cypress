describe('Traverse methods in Cypress',()=>{
    //siblings
    //pre

    it('To get the previous sibling DOM element within elements, use the .prev() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').prev().should('have.text','Espresso')
        .and('have.id','espresso')
    })

    //next

    it('To get the next sibling DOM element within elements, use the .next() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#tea').next().should('have.text','Milk')
        .and('have.id','milk')
    })

    it('To get all sibling DOM elements of elements, use the .siblings() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').siblings().should('have.length',10)   
    })



    //nextall()
    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').nextAll().should('have.length',10)
    })



    // prevAll
    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prevAll().should('have.length',6)
    })


    
    // prevUntil
    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
       cy.get('#espresso').prevUntil('#coffee').should('have.length',2)
    })
    

    // nextUntil
    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
       cy.get('#fruits').nextUntil('#veggie').should('have.length',5)
    })


})