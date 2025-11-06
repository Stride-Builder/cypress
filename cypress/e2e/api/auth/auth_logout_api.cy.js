import { 
  logoutAPI,
} from '../../../support/api/authAPI'

describe('Auth Logout API', () => {
  before(() => {
    cy.login('stridebuilder+qa@gmail.com')
  })

  context('POST /api/auth/logout', () => {
    it('should logout the current authenticated athlete', () => {
      cy.logout()
    })
  })
})