class HomePage {
  visit() {
    cy.visit('https://testing.geekqa.net/public_html/public/index.php')
  }

  openPhonesCategory() {
    cy.contains('Phones').click()
    cy.contains('Phones').should('be.visible')
  }

  addSamsungProductToCart() {
    cy.get("a[data-id='13'][onclick*='add_cart_btn']")
      .scrollIntoView()
      .click({ force: true })

    cy.get('#addtocart-submit')
      .should('be.visible')
      .click()

    cy.get('#addtocart-close')
      .should('be.visible')
      .click()
  }

  goToCart() {
    cy.get("a[href*='/cart']")
      .first()
      .click({ force: true })
  }
}

export default new HomePage()