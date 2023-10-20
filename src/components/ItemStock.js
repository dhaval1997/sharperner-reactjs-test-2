import React from "react";
import { useStore } from "../utils/storeContext";

const ItemStock = () => {
  const { state } = useStore();

  return (
    <>
      <h2>Available Items</h2>
      <ul className="itemlist">
        {state.availableItems.map((item) => (
          <li key={item.id}>
            Name: {item.name} ---- Description: {item.description} ---- Price:{" "}
            {item.price} ---- Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ItemStock;
