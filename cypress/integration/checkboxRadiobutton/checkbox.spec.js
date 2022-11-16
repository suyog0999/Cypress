describe("Verify the functionality of checkbox",()=>{
    beforeEach(()=>{
        cy.visit("https://www.ironspider.ca/forms/checkradio.htm")
    })
    it("TC01 verify the functionality of checkbox using check() method",()=>{
        cy.get('[value="red"]').check().should('be.checked')
        cy.get('[value="yellow"]').check().should('be.checked')
        cy.get('[value="blue"]').check().should('be.checked')
        cy.get('[value="orange"]').should('not.be.checked')
        cy.get('[value="green"]').should('not.be.checked')
        cy.get('[value="purple"]').should('not.be.checked')

    })
    it("TC02 verify the functionality of checkbox using click() method",()=>{
        cy.get('[value="red"]').click().should('be.checked')
        cy.get('[value="yellow"]').click().should('be.checked')
        cy.get('[value="blue"]').click().should('be.checked')
        cy.get('[value="orange"]').should('not.be.checked')
        cy.get('[value="green"]').should('not.be.checked')
        cy.get('[value="purple"]').should('not.be.checked')
        cy.wait(2000)
        cy.get('[value="yellow"]').click().should('not.be.checked')

    })
    it.only('TC03 check the multiple checkboxes at ones', () => {
        cy.get('[name="color"]').each((el, i) => {                          //jquery
            cy.wrap(el).click().should('be.checked')
        })
        cy.get('[value="orange"]').uncheck().should('not.be.checked')
    })
})