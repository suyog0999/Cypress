

describe('Verify 3 APis', () => {
    it('GET Comment Duration', () => {
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).then((res)=>{
        cy.log(res)
        expect(res.status).to.eq(200)
        })
    })
    it('POST Comment Duration', () => {
        cy.request({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments",
            body:{
                "name":"Using POST in cy.intercept()",
                "email":"hello@cypress.io",
                "body":"You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
                }
        }).then((res)=>{
        cy.log(res)
        expect(res.status).to.eq(201)
        })
    })
    it('PUT Comment Duration', () => {
        cy.request({
            method: "PUT",
            url: "https://jsonplaceholder.cypress.io/comments/1",
            body:{
                "name":"Using POST in cy.intercept()",
                "email":"hello@cypress.io",
                "body":"You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
                }
        }).then(({status})=>{
        //cy.log(res)
        expect(status).to.eq(200)
        })
    })
})