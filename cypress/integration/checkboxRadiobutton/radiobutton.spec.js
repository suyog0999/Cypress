
describe("Verify the RadioButton Functinalities",()=>{
    beforeEach(()=>{
        cy.visit("https://www.ironspider.ca/forms/checkradio.htm")
    })
    it("TC01 TC01 verify the functionality of radiobutton using check() method",()=>{
        cy.get('[type="radio"]').first().should('be.checked')
        cy.get('[type="radio"]').eq(1).check().should('be.checked')
        cy.get('[type="radio"]').last().should('not.be.checked')
    })
    it("TC02 verify the functionality of radiobutton using click() method",()=>{
        cy.get('[type="radio"]').first().should('be.checked')
        cy.get('[type="radio"]').eq(1).click().should('be.checked')
        cy.get('[type="radio"]').last().should('not.be.checked')
    })
    it.only("TC03 verify the all radiobutton functionality at a time",()=>{
        cy.get('[type="radio"]').each((el,i)=>{
            cy.wrap(el).click().should('be.checked')
        })
        
    })
})