const getCardIframeBody = () => {
  return cy
    .get('iframe.sq-card-component')
    .should('be.visible')
    .its('0.contentDocument.body')
    .should('not.be.empty')
    .then(cy.wrap)
}

class PaymentPage {
  validatePaymentPage() {
    cy.contains('h2', 'Payments')
      .should('be.visible')
  }

  fillCardInformation() {
    getCardIframeBody().within(() => {
      cy.get('#cardNumber').type('4111111111111111')
      cy.get('#expirationDate').type('1228')
      cy.get('#cvv').type('123')
      cy.get('#postalCode').type('54320')
    })
  }

  submitPayment() {
    cy.get('#card-button')
      .should('be.visible')
      .click({ force: true })

    cy.get('#card-button')
      .should('be.disabled')
  }
}

export default new PaymentPage()