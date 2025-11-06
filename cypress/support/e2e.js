import './commands/index.js'

// Configure Cypress behavior
Cypress.on('uncaught:exception', () => false)

// // Hide fetch/XHR requests from command log
// const app = window.top
// if (app && !app.document.head.querySelector('[data-hide-command-log-request]')) {
//   const style = app.document.createElement('style')
//   style.innerHTML = '.command-name-xhr { display: none }'
//   style.setAttribute('data-hide-command-log-request', '')
//   app.document.head.appendChild(style)
// }
