class CheckoutGuestPage {
  validateCheckoutGuestPage() {
    cy.contains('Checkout as Guest')
      .should('be.visible')
  }

  continueAsGuest() {
    cy.contains('Checkout as Guest')
      .click()
  }

  fillGuestInformation() {
    cy.contains('h3', 'Checkout as Guest')
      .parent()
      .within(() => {
        cy.get("input[name='phone_number']").type('5512345678')
        cy.get("input[name='first_name']").type('Marco')
        cy.get("input[name='last_name']").type('Molina')
        cy.contains("button[type='submit']", "Checkout as Guest")
          .click({ force: true })
      })
  }
}

export default new CheckoutGuestPage()