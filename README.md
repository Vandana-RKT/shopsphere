# ShopSphere

Full-stack e-commerce web app.

**Live demo:** https://YOUR-APP.vercel.app
**API:** https://YOUR-API.onrender.com

## Features
- Product listing with category filter
- Cart with quantity controls, saved in localStorage
- Register and Login with JWT and bcrypt
- Checkout with mock payment and order history
- Protected API routes using middleware

## Tech Stack
React, React Router, Axios, Node.js, Express, MongoDB, Mongoose, JWT, bcrypt

## Run locally
1. `cd server`, `npm install`, create `.env` with `MONGO_URI` and `JWT_SECRET`, run `npm run dev`
2. `cd client`, `npm install`, create `.env` with `VITE_API_URL=http://localhost:5000`, run `npm run dev`
