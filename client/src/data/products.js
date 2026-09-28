const products = [
  // Electronics
  { id: 1, name: "Wireless Headphones", description: "Noise-cancelling over-ear headphones with 30-hour battery life.", price: 2999, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop", rating: 4.5, stock: 12 },
  { id: 2, name: "Smart Watch", description: "Fitness tracker with heart rate monitor and GPS.", price: 4499, category: "Electronics", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop", rating: 4.7, stock: 8 },
  { id: 3, name: "Bluetooth Speaker", description: "Portable waterproof speaker with 12-hour playtime.", price: 1599, category: "Electronics", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop", rating: 4.3, stock: 20 },
  { id: 4, name: "Laptop Stand", description: "Adjustable aluminum laptop stand for better ergonomics.", price: 1199, category: "Electronics", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop", rating: 4.4, stock: 18 },

  // Footwear
  { id: 5, name: "Running Shoes", description: "Lightweight running shoes with breathable mesh upper.", price: 1899, category: "Footwear", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop", rating: 4.2, stock: 25 },
  { id: 6, name: "Canvas Sneakers", description: "Casual everyday sneakers with cushioned insole.", price: 1399, category: "Footwear", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop", rating: 4.1, stock: 22 },
  { id: 7, name: "Leather Boots", description: "Durable leather boots for all-weather wear.", price: 3299, category: "Footwear", image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400&h=400&fit=crop", rating: 4.6, stock: 10 },

  // Accessories
  { id: 8, name: "Backpack", description: "Water-resistant backpack with laptop compartment.", price: 1299, category: "Accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop", rating: 4.0, stock: 30 },
  { id: 9, name: "Sunglasses", description: "UV-protected polarized sunglasses.", price: 899, category: "Accessories", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop", rating: 4.3, stock: 35 },
  { id: 10, name: "Leather Wallet", description: "Slim bifold wallet with RFID protection.", price: 699, category: "Accessories", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop", rating: 4.5, stock: 40 },

  // Home
  { id: 11, name: "Coffee Maker", description: "12-cup programmable coffee maker with auto shut-off.", price: 2199, category: "Home", image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop", rating: 4.3, stock: 15 },
  { id: 12, name: "Table Lamp", description: "Minimalist LED desk lamp with adjustable brightness.", price: 999, category: "Home", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop", rating: 4.4, stock: 28 },
  { id: 13, name: "Ceramic Mug Set", description: "Set of 4 handcrafted ceramic mugs.", price: 599, category: "Home", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop", rating: 4.6, stock: 32 },

  // Fitness
  { id: 14, name: "Yoga Mat", description: "Non-slip yoga mat with carrying strap.", price: 799, category: "Fitness", image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop", rating: 4.6, stock: 40 },
  { id: 15, name: "Dumbbell Set", description: "Adjustable dumbbell set, 5-25kg per hand.", price: 5999, category: "Fitness", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop", rating: 4.8, stock: 6 },
  { id: 16, name: "Resistance Bands", description: "Set of 5 resistance bands for home workouts.", price: 499, category: "Fitness", image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop", rating: 4.2, stock: 45 },

  // Fashion
  { id: 17, name: "Denim Jacket", description: "Classic unisex denim jacket, machine washable.", price: 2499, category: "Fashion", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop", rating: 4.3, stock: 16 },
  { id: 18, name: "Cotton T-Shirt", description: "Soft, breathable everyday cotton t-shirt.", price: 499, category: "Fashion", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop", rating: 4.1, stock: 50 },
]

export default products