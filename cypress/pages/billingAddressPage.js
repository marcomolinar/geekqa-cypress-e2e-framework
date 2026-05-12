class BillingAddressPage {
  validateBillingAddressPage() {
    cy.contains('h2', 'Billing Address')
      .should('be.visible')
  }

  openNewAddressModal() {
    cy.contains('button', 'Add New Address')
      .should('be.visible')
      .click({ force: true })

    cy.get('#exampleModal')
      .should('be.visible')
  }

  fillBillingAddress() {
    const random = Date.now()

    cy.get('#fname')
      .clear()
      .type(`Marco${random}`)

    cy.get('#lname')
      .clear()
      .type(`Molina${random}`)

    cy.get('#email')
      .clear()
      .type(`qa${random}@test.com`)

    cy.get('#address')
      .clear()
      .type(`Street${random}`)
  }

  saveAddress() {
    cy.get('#address_save')
      .should('be.visible')
      .click({ force: true })

    cy.get('#exampleModal')
      .should('not.be.visible')
  }

  addNewBillingAddress() {
    this.openNewAddressModal()
    this.fillBillingAddress()
    this.saveAddress()
  }

  selectSavedAddress() {
    cy.get('.address-section')
      .first()
      .should('be.visible')
      .click({ force: true })
  }

  continueToPayment() {
    cy.contains('button', 'Continue')
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true })
  }
}

export default new BillingAddressPage()