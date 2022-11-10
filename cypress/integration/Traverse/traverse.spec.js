

//traverse

describe('verify the element with using traverse method',()=>{
    // children()--> it get the childern of parent class
    it('to get children of element and it length using children()',()=>{
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('.traversal-drinks-list').children().should('have.length',5)
    })

    //children().eq()--> it get the particular children respective to particular index
    it('to get particular children respective to particular index of element by using children().eq()',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().eq(3).should('have.text','Blackberries')
        })

    //children().first()--> it get the first children respective element
    it('it get the first children respective element by using children().first()',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.menu').children().first().should('have.text','Finance')
        })

    //children().last()--> it get the last children respective element
    it('it get the last children respective element by using children().last()',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().last().should('have.text','Lentils')
        })
})
