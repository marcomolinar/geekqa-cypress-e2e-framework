import homePage from '../pages/homePage'
import cartPage from '../pages/cartPage'
import checkoutGuestPage from '../pages/checkoutGuestPage'
import billingAddressPage from '../pages/billingAddressPage'
import paymentPage from '../pages/paymentPage'

describe('GeekQA Store Checkout', () => {
  it('Completa flujo E2E de compra', () => {
    homePage.visit()
    homePage.openPhonesCategory()
    homePage.addSamsungProductToCart()
    homePage.goToCart()

    cartPage.validateProductInCart()
    cartPage.checkoutWithoutGiftWrapping()

    checkoutGuestPage.validateCheckoutGuestPage()
    checkoutGuestPage.continueAsGuest()
    checkoutGuestPage.fillGuestInformation()

    cartPage.validateProductInCart()
    cartPage.checkoutWithoutGiftWrapping()

    billingAddressPage.validateBillingAddressPage()
    billingAddressPage.addNewBillingAddress()
    billingAddressPage.selectSavedAddress()
    billingAddressPage.continueToPayment()

    paymentPage.validatePaymentPage()
    paymentPage.fillCardInformation()
    paymentPage.submitPayment()
  })
})