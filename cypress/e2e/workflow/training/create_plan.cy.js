// import { deleteTrainingPlan } from '../../../support/api/trainingAPI'

describe.skip('Create Training Plan', () => {
  beforeEach(() => {
    cy.loginUserPass().then(() => {
      // deleteTrainingPlan(false)
    })
  })

  it('should create a training plan', () => {
    const startDate = new Date().toISOString().split('T')[0]
    const raceDate = new Date(new Date().setDate(new Date().getDate() + 14)).toISOString().split('T')[0]
    const endDate = new Date(new Date().setDate(new Date().getDate() + 30)).toISOString().split('T')[0]

    cy.intercept('POST', '**/api/plans').as('createTrainingPlan')
    cy.intercept('GET', '**/api/plans').as('getTrainingPlans')
    cy.visit('/training')
    cy.url().should('include', '/training/create')

    // Step 1
    cy.clickDataTest('goal-type-select')
    cy.clickAriaLabel('Finish a Race')
    cy.typeDataTest('race-name-input', 'Boston Marathon')
    cy.typeDataTest('race-date-input', raceDate)
    cy.clickDataTest('race-distance-select')
    cy.clickAriaLabel('Full Marathon')
    cy.typeDataTest('start-date-input', startDate)
    cy.typeDataTest('end-date-input', endDate)
    cy.clickDataTest('walkthrough-next-button')

    // Step 2
    cy.typeDataTest('days-per-week-input', '5')
    cy.clickDataTest('walkthrough-metric-type-select')
    cy.clickAriaLabel('Distance-based')
    cy.typeDataTest('current-weekly-mileage-input', '20')
    cy.clickDataTest('walkthrough-next-button')

    // Step 3
    cy.clickDataTest('walkthrough-create-button')

    cy.wait('@createTrainingPlan').then((interception) => {
      expect(interception.response.statusCode).to.eq(201)
    })
    cy.wait('@getTrainingPlans').then((interception) => {
      expect(interception.response.statusCode).to.eq(200)
    })
    cy.url().should('include', '/training')
    cy.getDataTest('training-plan-view').should('be.visible')
    cy.getDataTest('training-plan-card').should('be.visible').within(() => {
      cy.getDataTest('plan-status-tag').should('have.text', 'Active')
    })
    cy.getDataTest('training-calendar-card').should('be.visible')
  })
})
