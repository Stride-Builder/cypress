describe('Site Footer', () => {
  const baseUrl = Cypress.env('CYPRESS_BASE_URL')

  beforeEach(() => {
    cy.visit(baseUrl)
  })

  it('should display the site footer links', () => {
    cy.getDataTest('footer-links-section').should('be.visible')
  })

  it('should display the site footer social links', () => {
    cy.getDataTest('footer-social-section').should('be.visible').within(() => {
      cy.getDataTest('footer-facebook-link').should('be.visible')
      cy.getDataTest('footer-instagram-link').should('be.visible')
      cy.getDataTest('footer-x-link').should('be.visible')
      cy.getDataTest('footer-bluesky-link').should('be.visible')
      cy.getDataTest('footer-threads-link').should('be.visible')
      cy.getDataTest('footer-discord-link').should('be.visible')
    })
  })

  it('should display the site policy and terms links', () => {
    cy.get('p[class="copyright"]').should('be.visible')
    cy.getDataTest('footer-privacy-link').should('be.visible')
    cy.getDataTest('footer-terms-link').should('be.visible')
  })
})
