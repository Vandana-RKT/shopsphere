import { useState, useEffect } from 'react'
import axios from 'axios'

function Orders() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('shopsphere-user')
    if (!storedUser) {
      setLoading(false)
      return
    }
    const user = JSON.parse(storedUser)

    axios
      .get(`${import.meta.env.VITE_API_URL}/api/orders/myorders`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => setOrders(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p style={{ padding: '20px' }}>Loading orders...</p>

  if (orders.length === 0) {
    return (
      <div style={{ padding: '40px' }}>
        <h1>No orders yet</h1>
      </div>
    )
  }

  return (
    <div style={{ padding: '20px 40px' }}>
      <h1>Your Orders</h1>
      {orders.map((order) => (
        <div
          key={order._id}
          className="cart-row"
          style={{ flexDirection: 'column', alignItems: 'flex-start' }}
        >
          <p><strong>Order ID:</strong> {order._id}</p>
          <p><strong>Status:</strong> {order.status}</p>
          <p><strong>Total:</strong> ₹{order.totalAmount}</p>
          <p><strong>Items:</strong> {order.items.map((i) => i.name).join(', ')}</p>
        </div>
      ))}
    </div>
  )
}

export default Orders