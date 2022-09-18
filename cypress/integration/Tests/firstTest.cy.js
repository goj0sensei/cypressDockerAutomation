/// <refernce types="cypress" />

it('Amazon Homepage', ()=> {
    //visit command
    cy.visit('http://www.amazon.com')

    //custom timeout and press enter commands
    //timeout can be set globally in cypress.config.js and in test itself(global < command level)
    cy.get('#twotabsearchtextbox', {timeout: 100} ).type('laptop repair kit{enter}')
    
    //wait command
    cy.wait(2000)

    //get and click commands
    //cy.get('#nav-search-submit-button').click()
})