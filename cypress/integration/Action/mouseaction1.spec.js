//**  MouseActions **//
//Click
//RigthClick
//DoubleClick
//MouseOver
//MouseMove
//MouseUp
//MouseDown
//Scroll






describe('Test the Mouse Action',()=>{
    beforeEach(()=>{
        cy.visit('https://testpages.herokuapp.com/styled/drag-drop-javascript.html')
    })
    it.skip('To test the Scroll mouse action ',()=>{
        cy.get('[href="https://eviltester.com"]').scrollIntoView().click()

    })

    it('To Managing Multiple Tab by removing attribute Value',()=>{
        cy.get('[href="https://eviltester.com"]').invoke('removeAttr','target').click()
    })

    it('Verify mousedown,mouseup & mouseMove',()=>{
        cy.get('#draggable1').trigger('mousedown',{which:1})
        cy.get('#droppable1').trigger('mousemove').trigger('mouseup',{force: true})
        cy.get('#droppable1 > p').should('have.text','Dropped!')
    })
})