describe.skip('Training Plan Details', () => {
  beforeEach(() => {
    cy.loginUserPass()
  })

  it('should display the training plan details', () => {
    cy.visit('/training')
    cy.getDataTest('training-plan-card').should('be.visible').first().click()
    cy.url().should('include', '/training')
    cy.getDataTest('plan-details').should('be.visible')
  })
})
