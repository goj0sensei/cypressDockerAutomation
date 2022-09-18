/// <refernce types="cypress" />

//it.only => will run only this test
//it.skip => will skip this test
//you can define test inside or outside describe block

describe('Assertion Scenarios', function(){

    beforeEach('Access Demo Site', function(){        
        cy.visit('http://example.cypress.io')
    })

    it('Implicit Assertions test', ()=> {
        //visit command
        cy.contains('get').click()
    
        //implicit assertion using should contain, have, be
        cy.get('#query-btn')
            .should('contain', 'Button')
            .should('have.class', 'query-btn')
            .should('be.enabled')
            .and('not.be.hidden')
            .and('be.visible')
    
    })
    
    it('Explicit Assertions test', ()=> {
        //visit command
        cy.contains('get').click()
    
        //explcit assertion using expect and assert
        expect(true).to.be.true
        assert.equal(1, '1', 'standard equal assertion')
        assert.strictEqual(1, 1, 'strict equal assertion')
    
    })

    it.skip('Skip test', ()=> {
        //visit command       
        cy.visit('http://example.cypress.io')
        cy.contains('get').click()
    
        //explcit assertion using expect and assert
        expect(true).to.be.true
        assert.equal(1, '1', 'standard equal assertion')
        assert.strictEqual(1, 1, 'strict equal assertion')
    
    })
})



it('Outside describe block test', ()=> {
    //visit command     
    cy.visit('http://example.cypress.io')
    cy.contains('get').click()

    //explcit assertion using expect and assert
    expect(true).to.be.true
    assert.equal(1, '1', 'standard equal assertion')
    assert.strictEqual(1, 1, 'strict equal assertion')

})

