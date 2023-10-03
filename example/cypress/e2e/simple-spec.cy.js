/// <reference types="cypress" />
beforeEach(() => {
  cy.intercept(`${Cypress.config('baseUrl')}**`, req => {
      req.headers['x-nsc-ingress-auth'] = Cypress.env('token')
  })
})

describe('Example config', () => {
  it('has baseUrl', () => {
    expect(Cypress.config('baseUrl'), 'URL is a Namespace preview').to.match(
      /\.namespaced\.app$/
    )
  })

  it('loads the page', () => {
    cy.visit('/')
    cy.contains('Welcome to nginx!').should('be.visible')
  })

  it.skip('fails on purpose', () => {
    // to verify that the action exits correctly
    expect(false).to.be.true
  })
})
