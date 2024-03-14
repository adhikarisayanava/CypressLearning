it('Google Search', () => {
    cy.visit('https://google.com')
    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('#APjFqb').type('Automation step by step')
    cy.contains('Google Zoeken').click()
    cy.wait(5000)
    cy.contains('Videos').click()
  })