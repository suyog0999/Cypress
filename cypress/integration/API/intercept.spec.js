/// <reference types="cypress" />

describe('verify the  get  post and update comment', function () {


    it('verify the get comment  UI', function () {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')

        // Get Comment ======> XHR ======> response ====> object ====> Html element
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment')
        cy.get('.network-comment').should('contain', 'laudantium')
    })

    it('verify the get comment  UI', function () {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')

        // Get Comment ======> XHR ======> response ====> object ====> Html element
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function({request,response}){
            
            /*response*/
            //cy.log(response)
            //expect(response.statusCode).to.equal(200)
            //cy.log(response.body)
            //let obj = response.body
            //expect(obj).to.keys(['postId','id','name',"email",'body'])
            
            /*request*/
            cy.log(request)
            expect(request['method']).to.eq('GET')
            expect(request.headers.host).to.eqls("jsonplaceholder.cypress.io")

        })
        cy.get('.network-comment').should('contain', 'laudantium')
    })





})