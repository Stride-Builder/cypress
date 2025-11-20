import {
  logoutAPI,
} from '../../../support/api/authAPI'

describe('Auth Logout API', () => {
  before(() => {
    cy.login()
  })

  context('POST /api/logout', () => {
    it('should logout the current authenticated athlete', () => {
      cy.logout()
    })
  })
})
