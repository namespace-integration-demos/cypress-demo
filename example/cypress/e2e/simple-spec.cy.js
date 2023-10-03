/// <reference types="cypress" />
describe('Example config', () => {
  it('has baseUrl', () => {
    expect(Cypress.config('baseUrl')).to.match(
      '/\.namespaced\.app$/'
    )
  })

  const token = Cypress.env('token');
  const workspace = Cypress.env('workspace');
  cy.setCookie(`nsc-auth-token-tenant-${ workspace }`, token);

  it('loads the page', () => {
    cy.visit('/')
    cy.contains('Welcome to nginx!').should('be.visible')
  })

  it.skip('fails on purpose', () => {
    // to verify that the action exits correctly
    expect(false).to.be.true
  })
})
