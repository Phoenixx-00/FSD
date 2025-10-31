import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import CartCounter from "./components/CartCounter";
import products from "./data/products";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app">
      <header>
        <h1>🛍️ Product Gallery</h1>
        <p>Responsive React Application using Components, State, Props, and Events</p>
        <h3>Total Items in Cart: {cart.length}</h3>
      </header>

      <main className="gallery">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />
        ))}
      </main>

      <footer>
        <CartCounter />
        <p>© 2025 My E-Commerce Store | Built with React</p>
      </footer>
    </div>
  );
}
