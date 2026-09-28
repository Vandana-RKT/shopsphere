import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>₹{product.price}</strong></p>
      <p>⭐ {product.rating}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  )
}

export default ProductCard