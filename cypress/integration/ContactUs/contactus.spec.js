/// <reference types="cypress" />


describe('verify the contactus form details',()=>{
    beforeEach(()=>{
        // arguments
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    })

    it('verify the valid details of contactus form',()=>{
        //actions
        cy.get('.feedback-input').first().type('Suyog')
        cy.get('.feedback-input').eq(1).type('Rahane')
        cy.get('.feedback-input').eq(2).type('suyograhane@gmail.com')
        cy.get('.feedback-input').last().type('Learning Cypress')
        cy.get('.contact_button').last().click()
        // assertions
        cy.get('h1').should('be.visible','Thank You for your Message!')
        cy.get('h1').should('have.text','Thank You for your Message!')

    })

    it('verify the Invalid details of contactus form',()=>{
        //actions
        cy.get('.feedback-input').first().type('Suyog')
        cy.get('.feedback-input').eq(1).type('Rahane')
        cy.get('.feedback-input').eq(2).type('suyograhane')
        cy.get('.feedback-input').last().type('Learning Cypress')
        cy.get('.contact_button').last().click()

        // assertion
        cy.get('body').should('be.visible','Error: Invalid email address')
        cy.get('body').should('contain','Error')

    })
    it('verify the reset functionality of contactus form',()=>{
        //actions
        cy.get('.feedback-input').first().type('Suyog')
        cy.get('.feedback-input').eq(1).type('Rahane')
        cy.get('.feedback-input').eq(2).type('suyograhane')
        cy.get('.feedback-input').last().type('Learning Cypress')
        cy.get('.contact_button').first().click()

        // assertion
        cy.get('.feedback-input').first().should('have.text','')
        cy.get('.feedback-input').eq(1).should('have.text','')
        cy.get('.feedback-input').eq(2).should('have.text','')
        cy.get('.feedback-input').last().should('have.text','')
    })

    it('verify the  heading for contactus page',()=>{
        //actions
        cy.get('.section_header').should('have.text','CONTACT US')
        cy.get('.section_header').should('be.visible','CONTACT US')
      

        
    })
})