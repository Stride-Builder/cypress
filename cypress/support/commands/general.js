const VERCEL_CYPRESS_PREVIEW_SECRET = Cypress.env('VERCEL_CYPRESS_PREVIEW_SECRET')

/**
 * Visit a page with the bypass secret for Vercel preview
 * @param {string} url - The URL to visit
 * @param {Object} options - The options to pass to the visit command
 */
Cypress.Commands.overwrite('visit', (originalFn, url, options = {}) => {
  return originalFn(url, {
    ...options,
    headers: {
      ...options?.headers,
      'x-vercel-protection-bypass': VERCEL_CYPRESS_PREVIEW_SECRET,
    },
  })
})

/**
 * Get a DOM element by its data-test attribute
 * @param {string} selector - The data-test attribute value
 * @returns {Cypress.Chainable<JQuery<HTMLElement>>} The DOM element
 */
Cypress.Commands.add('getDataTest', (selector) => {
  return cy.get(`[data-test="${selector}"]`)
})
