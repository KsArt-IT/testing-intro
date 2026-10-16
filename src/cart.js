const DISCOUNT_PROMO_10 = "SAVE10"
const DISCOUNT_PROMO_10_RATE = 0.1
const DISCOUNT_MIN = 20_000
const DELIVERY_COST = 30_000
const DELIVERY_FREE = 50_000

function notImplemented() {
    throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.")
}

function addToCart() {
    return notImplemented()
}
function changeQuantity() {
    return notImplemented()
}
function removeFromCart() {
    return notImplemented()
}
function calculateCartSubtotal() {
    return notImplemented()
}
function calculateOrderTotal() {
    return notImplemented()
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal }

if (typeof module !== "undefined") module.exports = cartApi
if (typeof window !== "undefined") window.cartApi = cartApi
