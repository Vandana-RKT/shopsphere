import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Navbar() {
  const { cartItems } = useCart()
  const navigate = useNavigate()
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  const storedUser = localStorage.getItem('shopsphere-user')
  const user = storedUser ? JSON.parse(storedUser) : null

  function handleLogout() {
    localStorage.removeItem('shopsphere-user')
    navigate('/')
    window.location.reload()
  }

  return (
    <nav>
      <h2>ShopSphere</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart ({totalItems})</Link></li>
        {user ? (
          <>
            <li>Hi, {user.name}</li>
            <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar