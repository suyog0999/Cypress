/// <reference types="cypress" />


describe('verify the functionality for GET user',function(){

    let data 
    let data2
    before(function(){
        cy.fixture('createUser').then((obj)=>{
            data = obj
        })
        cy.fixture('updateUser').then((obj)=>{
            data2= obj
        })

    })

    it.only('Verify the GET List of user API',function(){
        cy.request({
            method:"GET",
            url:"https://gorest.co.in/public/v2/users",
            headers:{
                Authorization:`Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9`
            }
        }).then(function(res){
            cy.log(res)
            //expect(res.status).to.eql(200)
        })

    })

    
    it.only('Verify the create user api',function(){
        cy.log(data)
        data.email = `tenali.ramskrishnaa${Math.random()*6}@15ce.com`
        cy.request({
            method:"POST",
            url:"https://gorest.co.in/public/v2/users",
            body:data,
            headers:{
                Authorization:`Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9`
            }
        }).then(function(res){
            //cy.log(res)
            expect(res.status).to.eql(201)
        })

    })


    it.only('Verify the update user api',function(){
        data2.email = `tenali.ramskrishnaa${Math.random()*6}@15ce.com`
        cy.request({
            method:"PUT",
            url:"https://gorest.co.in/public/v2/users/2769",
            body:data2,
            headers:{
                Authorization:`Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9`
            }
        }).then(function(res){
            //cy.log(res)
            expect(res.status).to.eql(200)
        })

    })

    it('Verify the Delete user api',function(){
        cy.request({
            method:"DELETE",
            url:"https://gorest.co.in/public/v2/users/2769",
            headers:{
                Authorization:`Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9`
            }
        }).then(function(res){
            //cy.log(res)
            expect(res.status).to.eql(204)
        })

    })






})