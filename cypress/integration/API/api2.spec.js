

describe('Verify the API Commands',()=>{
    beforeEach(()=>{
        cy.visit('https://example.cypress.io/commands/network-requests')
    })
    it ('Verify the GET Comment Button Functinality',()=>{
        cy.get('.btn-primary').click()
        cy.get('.network-comment').should('contain','laudantium enim quasi est quidem ')
    })
    it ('Verify the POST Comment Button Functinality',()=>{
        cy.get('.network-post').click()
        cy.get('.network-post-comment').should('have.text','POST successful!')
    })
    it ('Verify the PUT/UPDATE Comment Button Functinality',()=>{
        cy.get('.network-put').click()
        cy.url().should('contain','https://example.cypress.io/commands/network-requests')
    })
})