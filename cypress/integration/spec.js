// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

it('shows config', () => {
  cy.log(Cypress.config())
    .then(() => {
      // this environment variable come from "another-config.json" file
      cy.expect(Cypress.env('extendsWorking')).to.be.true
    })
})
