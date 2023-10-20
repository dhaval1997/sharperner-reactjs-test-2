import React from "react";
import { useStore } from "../utils/storeContext";

const Header = () => {
  const { state, dispatch } = useStore();

  return (
    <div className="header">
      <h1>Medical Store</h1>
      <button onClick={() => dispatch({ type: "TOGGLE_CART" })}>
        Cart ({state.cartItems.length})
      </button>
    </div>
  );
};

export default Header;
