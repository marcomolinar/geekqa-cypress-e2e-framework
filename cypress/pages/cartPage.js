class CartPage {
  validateProductInCart() {
    cy.contains('Samsung Galaxy S22 5G Dual SIM')
      .should('be.visible')
  }

  selectGiftWrappingNo() {
    cy.get('#gift-wrapping')
      .should('be.visible')
      .select('no')
      .trigger('change')
      .blur()
  }

  continueToCheckout() {
    cy.get("form#address_validate button[type='submit']")
      .invoke('removeClass', 'd-none')
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true })
  }

  checkoutWithoutGiftWrapping() {
    this.selectGiftWrappingNo()
    this.continueToCheckout()
  }
}

export default new CartPage()