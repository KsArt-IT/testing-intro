const DISCOUNT_PROMO_10 = "SAVE10"
const DISCOUNT_PROMO_10_RATE = 0.1
const DISCOUNT_MIN = 20_000
const DELIVERY_COST = 30_000
const DELIVERY_FREE = 50_000

function notImplemented() {
    throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.")
}

function throwCountError() {
    throw new RangeError("Нельзя меньше 1.")
}

function throwStockError() {
    throw new RangeError("Нельзя добавить больше товара, чем есть на складе.")
}

function addToCart(cart, product, count) {
    if (!Number.isInteger(count) || count <= 0) throwCountError()

    const quantity = cart.find((i) => i.id === product.id)?.quantity ?? 0
    if (quantity + count > product.stock) throwStockError()

    return quantity > 0
        ? cart.map((i) => (i.id === product.id ? { ...i, quantity: i.quantity + count } : i))
        : [...cart, { id: product.id, name: product.name, price: product.price, stock: product.stock, quantity: count }]
}

function changeQuantity(cart, id, quantity) {
    if (!Number.isInteger(quantity) || quantity <= 0) throwCountError()

    const existingItem = cart.find((i) => i.id === id)
    if (!existingItem) return cart

    if (quantity > existingItem.stock) throwStockError()
    return cart.map((i) => (i.id === id ? { ...i, quantity: quantity } : i))
}

function removeFromCart(cart, id) {
    return cart.filter((i) => i.id !== id)
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
