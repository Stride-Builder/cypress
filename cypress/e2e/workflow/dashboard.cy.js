describe('Dashboard', () => {
  beforeEach(() => {
    cy.loginUserPass()
  })

  it('should display the dashboard', () => {
    cy.visit('/dashboard')
    cy.get('h1').should('have.text', 'Dashboard')
    cy.get('p').first().should('have.text', `Welcome, ${Cypress.currentUserName}!`)
    cy.getDataTest('training-calendar').should('be.visible')
  })
})
