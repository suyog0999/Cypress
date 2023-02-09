describe('Validate iframe functionality', () => {

    before(()=>{
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
    })

    it('Validate Iframe with Jquery method', () => {
        cy.get('#frame').then((ele) => {
            let body = ele.contents().find('body')
            cy.wrap(body).as('IframeBody')
            cy.get('@IframeBody').find('[href="products.html"]').should('have.text', 'Our Products')
        })
    })

    it('validate Iframe with JavaScript', () => {
        cy.get('#frame').then((ele) => {
            // cy.log(ele)
            let body = ele['0'].contentDocument.body
            cy.wrap(body).as('iframe')
            cy.get('@iframe').find('[href="../Contact-Us/contactus.html"]')
                .should('be.visible').and('have.text', 'Contact Us')
        })
    })


})