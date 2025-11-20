import { updateAthleteAPI } from '../../../support/api/athleteAPI'

describe('Profile', () => {
  beforeEach(() => {
    cy.loginUserPass()
    cy.fixture('qaUser.json').then((qaUser) => {
      updateAthleteAPI(qaUser)
    })
    cy.visit('/profile')
  })

  context('Profile Title', () => {
    it('should navigate to the profile page and navigate to the account settings page', () => {
      cy.validateProfilePage()
      cy.clickDataTest('account-go-to-profile')
      cy.url().should('include', '/account')
    })

    it('should be able to change the athlete\'s name', () => {
      cy.changeAthleteName('John Doe')
    })
  })

  context('Profile Settings', () => {
    it('should be able to change the athlete\'s privacy settings on and off', () => {
      cy.togglePrivacy({ validate: true, expectedValue: true })
      cy.togglePrivacy({ validate: true, expectedValue: false })
    })

    // TODO: Add coach status toggle once it is implemented
    it.skip('should be able to change the athlete\'s coach status on and off', () => {
      cy.toggleCoach({ validate: true, expectedValue: true })
      cy.toggleCoach({ validate: true, expectedValue: false })
    })
  })

  context('Training Preferences', () => {
    it('should be able to change the athlete\'s distance unit between miles and kilometers', () => {
      // User should start with miles, so validate switching to km first then back to miles
      cy.toggleDistanceUnit('km')
      cy.toggleDistanceUnit('mi')
    })
  })

  context('Technical Information', () => {
    it('should be able to view the athlete\'s technical information', () => {
      cy.fixture('qaUser.json').then((qaUser) => {
        cy.validateTechnicalInformation(qaUser)
      })
    })
  })
})
