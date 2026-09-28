import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useCart } from '../context/CartContext'

function Checkout() {
  const { cartItems, clearCart } = useCart()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
  })
  const [error, setError] = useState('')

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handlePlaceOrder(e) {
    e.preventDefault()
    setError('')

    const storedUser = localStorage.getItem('shopsphere-user')
    if (!storedUser) {
      navigate('/login')
      return
    }
    const user = JSON.parse(storedUser)

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/orders`,
        {
          items: cartItems.map((item) => ({
            productId: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image,
          })),
          totalAmount: total,
          shippingAddress: form,
        },
        { headers: { Authorization: `Bearer ${user.token}` } }
      )
      clearCart()
      navigate('/orders')
    } catch (err) {
      setError(err.response?.data?.message || 'Order failed')
    }
  }

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: '40px' }}>
        <h1>Nothing to checkout</h1>
      </div>
    )
  }

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handlePlaceOrder}>
        <h1>Checkout</h1>

        {error && <p className="auth-error">{error}</p>}

        <label>Full Name</label>
        <input name="fullName" value={form.fullName} onChange={handleChange} required />

        <label>Address</label>
        <input name="address" value={form.address} onChange={handleChange} required />

        <label>City</label>
        <input name="city" value={form.city} onChange={handleChange} required />

        <label>Postal Code</label>
        <input name="postalCode" value={form.postalCode} onChange={handleChange} required />

        <label>Phone</label>
        <input name="phone" value={form.phone} onChange={handleChange} required />

        <h2>Total: ₹{total}</h2>
        <button type="submit">Place Order (Mock Payment)</button>
      </form>
    </div>
  )
}

export default Checkout