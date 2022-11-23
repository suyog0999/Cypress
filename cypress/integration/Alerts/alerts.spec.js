

describe(" verify the Alerts Functinality",()=>{
    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    })
    it('Handling JS alerts and click ok',()=>{
        cy.contains('Click for JS Alert').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.eq('I am a JS Alert')
            return true
        })
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })
    it('Handling JS Confirm and click ok',()=>{
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.eq('I am a JS Confirm')
            return true
        })
        cy.get('#result').should('have.text','You clicked: Ok')
    })
    it('Handling JS Confirm and click cancel',()=>{
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.eq('I am a JS Confirm')
            return false
        })
        cy.get('#result').should('have.text','You clicked: Cancel')
    })

    it ('Handling JS Prompt and click ok using stub()',()=>{
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('I Am Learning JS')
            cy.contains('Click for JS Prompt').click()

        })
        cy.get('#result').should('have.text','You entered: I Am Learning JS')
    })
})