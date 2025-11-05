describe('Home Page', () => {
  const baseUrl = Cypress.env('CYPRESS_BASE_URL')

  beforeEach(() => {
    cy.visit(baseUrl)
  })

  it('should display the home hero section', () => {
    cy.get('div[class="hero-section"]').should('be.visible').within(() => {
      cy.getDataTest('home-getStarted-button').should('be.visible').should('be.enabled')
      cy.getDataTest('home-learnMore-button').should('be.visible').should('be.enabled')
    })
  })
  it('should display the home features section', () => {
    cy.get('div[class="features-section"]').should('be.visible').within(() => {
      cy.getDataTest('home-customizable-card').should('be.visible')
      cy.getDataTest('home-trackProgress-card').should('be.visible')
      cy.getDataTest('home-haveCoach-card').should('be.visible')
    })
  })
  it('should display the home cta section', () => {
    cy.get('div[class="cta-section"]').should('be.visible').within(() => {
      cy.getDataTest('home-cta-card').should('be.visible')
      cy.getDataTest('home-createPlan-button').should('be.visible').should('be.enabled')
    })
  })
})
