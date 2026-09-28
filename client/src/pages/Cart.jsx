import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Cart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart()
  const navigate = useNavigate()

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Your Cart</h1>
        <p>Your cart is empty.</p>
        <Link to="/products">
          <button className="hero-button">Browse Products</button>
        </Link>
      </div>
    )
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 2000 ? 0 : 99
  const total = subtotal + shipping

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-row">
              <img src={item.image} alt={item.name} />

              <div className="cart-row-details">
                <h3>{item.name}</h3>
                <p className="cart-row-price">₹{item.price}</p>
              </div>

              <div className="cart-row-qty">
                <button onClick={() => decreaseQuantity(item.id)}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>

              <p className="cart-row-total">₹{item.price * item.quantity}</p>

              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
          </div>
          <div className="summary-row summary-total">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
          <button className="hero-button checkout-btn" onClick={() => navigate('/checkout')}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart