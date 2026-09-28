import { Link } from 'react-router-dom'
import products from '../data/products'
import ProductCard from '../components/ProductCard'

function Home() {
  const featuredProducts = products.slice(0, 3)

  return (
    <div>
      <div className="hero">
        <h1>Welcome to ShopSphere</h1>
        <p>Your one-stop shop for everything.</p>
        <Link to="/products">
          <button className="hero-button">Shop Now</button>
        </Link>
      </div>

      <h2 className="section-title">Featured Products</h2>
      <div className="product-grid">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home