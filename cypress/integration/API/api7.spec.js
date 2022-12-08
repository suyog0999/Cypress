/// <reference types="cypress" />

describe('Retrive update delete users',()=>{
    it('Retrive update delete users',()=>{
        cy.request({
            method:'GET',
            url:"https://gorest.co.in/public/v2/users",
            headers:{
                Authorization:`Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9`
            }

        }).then((res)=>{
            //cy.log(res)
            return res.body[0].id
        }).then(function (id) {
            cy.request({
                url: `https://gorest.co.in/public/v2/users/${id}`,
                method: "PUT",
                body: {
                    name: "Allasani Peddana",
                    email: `${Math.random()}tenali.ramakrishnaa@15ce.com`,
                    status: "active"
                },
                headers: {
                    Authorization: "Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9"
                }
            })
            .then(function(res){
               return res.body.id
            })
            .then(function(id){
                cy.request({
                    method:"DELETE",
                    url:`https://gorest.co.in/public/v2/users/${id}`,
                    headers:{
                        Authorization:`Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9`
                    }
                }).then(function(res){
                    //cy.log(res)
                    expect(res.status).to.eql(204)
                })

            })
        })
    })
})