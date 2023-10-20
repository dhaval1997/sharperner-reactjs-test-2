import React from "react";
import { useStore } from "../utils/storeContext";

const Cart = () => {
  const { state } = useStore();

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul className="cart-list">
        {state.cartItems.map((item) => (
          <li key={item.id}>
            Name: {item.name} ---- Description: {item.description} ---- Price:{" "}
            {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
