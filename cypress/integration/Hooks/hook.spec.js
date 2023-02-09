/// <reference types="cypress" />


describe('verify the contact us form ',function(){
    before(function(){
        cy.log('I am executed first')
    })
    after(function(){
        cy.log('I am executed last')
    })

    beforeEach(function(){
        cy.log('This is executed before each testcase')
    })


    afterEach(function(){
        cy.log('This is executed after each test case')
    })

    it('Test case one',function(){
        cy.log('Testcase one')
    })
    it('Test case two',function(){
        cy.log('Testcase two')
    })

})