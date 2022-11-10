//Actual vs Expected
//Actual ==> System/Application

//Expected ==> Requirements/Document


describe("verify the login functinality",()=>
{
    it("verify the login functinality with valid credentials",()=>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('.orangehrm-login-button').click()
        cy.get('img[alt="client brand banner"]').should('be.visible')
    })
    it("verify the login functinality with invalid credentials",()=>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin1234')
        cy.get('.orangehrm-login-button').click()
        cy.get('.oxd-alert-content-text').should ('be.visible')
        cy.get('.oxd-alert-content-text').should('have.text','Invalid credentials')
    })
})
