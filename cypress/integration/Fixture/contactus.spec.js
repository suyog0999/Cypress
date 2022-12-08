describe('Verify the contactUs form functionality Using Fixture', () => {
    let info
    before(() => {
        cy.fixture('contactus').then((obj) => {
            info = obj
        })
    })

   

    it('form functionality using fixture File', () => {
        console.log(info)
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.title().should('contain', 'WebDriver | Contact Us')
        cy.get('input[name="first_name"]').type(info.name)
        cy.get('input[name="last_name"]').type(info.LName)
        cy.get('input[name="email"]').type(info.email)
        cy.get('textarea[name="message"]').type(info.msg)
        cy.get('input[type="submit"]').click()
        cy.get('#contact_reply').should('contain', 'Thank You for your Message!')
        cy.url().should('contain', 'thank-you.html')
        cy.title().should('contain', 'Gianni Bruno - Designer')
    })

    it('form functionality using fixture File', () => {
        cy.fixture('contactus').then((obj) => {
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.title().should('contain', 'WebDriver | Contact Us')
            cy.get('input[name="first_name"]').type(info.name)
            cy.get('input[name="last_name"]').type(info.LName)
            cy.get('input[name="email"]').type(info.email)
            cy.get('textarea[name="message"]').type(info.msg)
            cy.get('input[type="submit"]').click()
            cy.get('#contact_reply').should('contain', 'Thank You for your Message!')
            cy.url().should('contain', 'thank-you.html')
            cy.title().should('contain', 'Gianni Bruno - Designer')
        })
    })
     
     // let a ={
    //     name:"Suyog",
    //     LName:"Rahane",
    //     email:"suyog.rahane2011@gmail.com",
    //     msg: "Hello I am learn Cypress"
    // }
    //dot notation
    //console.log(a.email)
    //bracket notation
    //console.log(a['email'])
    
    it('form functionality', () => {
        console.log(info)
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.title().should('contain', 'WebDriver | Contact Us')
        cy.get('input[name="first_name"]').type(a.name)
        cy.get('input[name="last_name"]').type(a.LName)
        cy.get('input[name="email"]').type(a.email)
        cy.get('textarea[name="message"]').type(a.msg)
        cy.get('input[type="submit"]').click()
        cy.get('#contact_reply').should('contain', 'Thank You for your Message!')
        cy.url().should('contain', 'thank-you.html')
        cy.title().should('contain', 'Gianni Bruno - Designer')
    })
})