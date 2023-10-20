import React, { useState } from 'react';

const Cart = ({ products, updateStock }) => {
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    setItemCount(itemCount + 1);
    updateStock(product.id, -1); // Update available stock
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <p>Item Count: {itemCount}</p>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
