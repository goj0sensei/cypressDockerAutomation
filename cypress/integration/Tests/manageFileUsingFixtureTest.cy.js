

describe('Read and Write File scenarios', function(){

    it('Read files using Fixture', ()=> {

        cy.fixture('example.json').then((jsonData) => {
            cy.log(jsonData.name)
            cy.log(jsonData.email)
            cy.log(jsonData.body)
        })
    
    })
    
    it('Read files using readFile', ()=> {
    
        cy.readFile('./cypress/fixtures/example.json').then((jsonData) => {
            cy.log(jsonData.name)
            cy.log(jsonData.email)
            cy.log(jsonData.body)
        })
    
    })
    
    it('Write files using writeFile', ()=> {
    
        cy.writeFile('writeFile.txt', 'Created this file using writeFile command\n')
        cy.writeFile('writeFile.txt', 'To avoid replacing text use flag with a+', {flag: 'a+'})
    
    })

})

