/**
 * Get a DOM element by its data-test attribute
 * @param {string} selector - The data-test attribute value
 * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The DOM element
 */
Cypress.Commands.add('getDataTest', selector => cy.get(`[data-test="${selector}"]`))

/**
 * Clear the value of a DOM element by its data-test attribute
 * @param {string} selector - The data-test attribute value
 * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The DOM element
 */
Cypress.Commands.add('clearDataTest', (selector) => {
  cy.getDataTest(selector).clear()
})

/**
 * Click a DOM element by its data-test attribute
 * @param {string} selector - The data-test attribute value
 * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The DOM element
 */
Cypress.Commands.add('clickDataTest', (selector) => {
  cy.clearDataTest(selector)
  cy.getDataTest(selector).click()
})

/**
 * Type text into a DOM element by its data-test attribute
 * @param {string} selector - The data-test attribute value
 * @param {string} text - The text to type
 * @param {Object} options - The options to pass to the type command
 * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The DOM element
 */
Cypress.Commands.add('typeDataTest', (selector, text, options = { force: false }) => {
  cy.getDataTest(selector).type(text, options)
})
