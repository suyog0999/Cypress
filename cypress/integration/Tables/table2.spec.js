




describe('Verify the table functinality', () => {
    beforeEach(() => {
        cy.visit('https://testautomationpractice.blogspot.com/')
    })
    it('TC1 to verify the table functinality and sum of price', () => {
        let sum = 0
        cy.get('[name="BookTable"]').find('tr').each((el, index) => {
           
            if (index != 0) {
                let a = (el.children().last().text())
                cy.log(a)
                sum = sum +Number(a) 
            }
        }).then( ()=> {
            expect(sum).to.equal(7100)
        })
    })
    it.only('Verify the names of table', () => {
        let names = ['', 'Amit', 'Mukesh', 'Animesh', 'Mukesh', 'Amod', 'Amit']
        cy.get('[name="BookTable"]').find('tbody').children().each((el, index) => {
            if (index != 0) {
                cy.get(el).children().eq(1).should('have.text', names[index])
            }
            cy.log(names[index])
        })
    })
})