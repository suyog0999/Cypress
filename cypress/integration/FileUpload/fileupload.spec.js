describe('Verify the fileuplode functionality',()=>{

    it('TC01 Fileuplode',()=>{
        let file = 'fileUpload.jpeg'
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile(file)
        cy.get('#file-submit').click()
        cy.get('.example>h3').should('have.text','File Uploaded!')
        cy.get('#uploaded-files').should('contain',file)
    })

    it('TC02 Multiple file uplode',()=>{
        let filesToUpload = ['fileUpload.jpeg','fileUpload1.jpeg','fileUpload2.jpeg']
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(filesToUpload)
        cy.get('#fileList').children().should('have.length',filesToUpload.length)
    })

    it.only('TC02 Multiple file uplode',()=>{
        let filesToUpload = 'fileUpload.jpeg'
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile({filePath:filesToUpload,fileName:'MyFile'})
        cy.get('#fileList').children().first().should('contain','MyFile')
    })

})