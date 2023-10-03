# Cypress demo with Namespace

In this demo, we perform the following steps:

- create a Kubernetes cluster with Namespace
- deploy an application to it
- expose that application in an authenticated preview
- access that preview from Cypress using a bearer token

The main workflow can be found at [example.yml](.github/workflows/example.yml) and the test definition at [simple-spec.cy.js](example/cypress/e2e/simple-spec.cy.js).

Check out [cloud.namespace.so/docs](https://cloud.namespace.so/docs) for more background.
