describe('verif the table fucnctionality',function(){



    function verifyTable(id , expected){
        let sum = 0
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get(`#${id}`).find('tr').each(function(el,index){
            if(index != 0){
                let a=(el.children().last().text())
                cy.log(a)
                sum = sum + Number(a)   //or (el.children().last().text())
            }
        }).then(function(){
            expect(sum).to.equal(expected)
        })
        
    }





    it('verify the sum of age in table 1',function(){
        // let sum = 0
        // cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        // cy.get('#t01').find('tr').each(function(el,index){
        //     if(index != 0){
        //         cy.log(el.children().last().text())
        //         sum = sum + Number(el.children().last().text())
        //     }
        // }).then(function(){
        //     expect(sum).to.equal(159)
        // })
        //cy.log(sum)

        verifyTable('t01',159)

    })

    it('verify the sum of age in table 2',function(){
        // let sum = 0
        // cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        // cy.get('#t02').find('tr').each(function($el,index){
        //     if(index != 0){
        //         cy.log($el.children().last().text())
        //         sum = sum + Number($el.children().last().text())
        //     }
        // }).then(function(){
        //     expect(sum).to.equal(163)
        // })
        
        // //cy.log(sum)

        verifyTable('t02',163)
    })


})
