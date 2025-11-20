/**
 * Get a DOM element by its data-test attribute
 * @param {string} selector - The data-test attribute value
 * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The DOM element
 */
Cypress.Commands.add('getDataTest', selector => cy.get(`[data-test="${selector}"]`))

/**
 * Select an option from a DOM element by its data-test attribute
 * @param {string} selector - The data-test attribute value
 * @param {string} option - The option to select
 * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The DOM element
 */
Cypress.Commands.add('selectDataTest', (selector, option) => {
  cy.getDataTest(selector).select(option)
})

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

/**
 * Get a DOM element by its aria-label attribute
 * @param {string} label - The aria-label attribute value
 * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The DOM element
 */
Cypress.Commands.add('getAriaLabel', (label) => {
  cy.get(`[aria-label="${label}"]`)
})

/**
 * Click a DOM element by its aria-label attribute
 * @param {string} label - The aria-label attribute value
 * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The DOM element
 */
Cypress.Commands.add('clickAriaLabel', (label) => {
  cy.getAriaLabel(label).click()
})

/**
 * Type text into a DOM element by its aria-label attribute
 * @param {string} label - The aria-label attribute value
 * @param {string} text - The text to type
 * @param {Object} options - The options to pass to the type command
 * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The DOM element
 */
Cypress.Commands.add('typeAriaLabel', (label, text, options = { force: false }) => {
  cy.getAriaLabel(label).type(text, options)
})

/**
 * Get a DOM element by its id attribute
 * @param {string} id - The id attribute value
 * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The DOM element
 */
Cypress.Commands.add('getById', (id) => {
  cy.get(`[id="${id}"]`)
})

/**
 * Click a DOM element by its id attribute
 * @param {string} id - The id attribute value
 * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The DOM element
 */
Cypress.Commands.add('clickById', (id) => {
  cy.getById(id).click()
})

/**
 * Type text into a DOM element by its id attribute
 * @param {string} id - The id attribute value
 * @param {string} text - The text to type
 * @param {Object} options - The options to pass to the type command
 * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The DOM element
 */
Cypress.Commands.add('typeById', (id, text, options = { force: false }) => {
  cy.getById(id).type(text, options)
})
