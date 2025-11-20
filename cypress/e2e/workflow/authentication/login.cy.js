describe('Login', () => {
  it('should be able to login through the public site', () => {
    cy.loginFromPublicSite(Cypress.env('CYPRESS_MASTER_USER'), Cypress.env('CYPRESS_MASTER_PASSWORD'))
    cy.url().should('include', `${Cypress.env('CYPRESS_BASE_URL')}/dashboard`)
  })

  it('should be able to login by being redirected to the login page', () => {
    cy.loginByRedirect(Cypress.env('CYPRESS_MASTER_USER'), Cypress.env('CYPRESS_MASTER_PASSWORD'))
    cy.url().should('include', `${Cypress.env('CYPRESS_BASE_URL')}`)
  })
})
