/// <refernce types="cypress" />

it('Cypress demo site', ()=> {
    //visit command
    cy.visit('http://example.cypress.io')
    cy.contains('get').click()

    //implicit assertion using should contain, have, be
    cy.get('#query-btn')
        .should('contain', 'Button')
        .should('have.class', 'query-btn')
        .should('be.enabled')
        .and('not.be.hidden')
        .and('be.visible')

    //explcit assertion using expect and assert
    expect(true).to.be.true
    assert.equal(1, '1', 'standard equal assertion')
    assert.strictEqual(1, 1, 'strict equal assertion')


})