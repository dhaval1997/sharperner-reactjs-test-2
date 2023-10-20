import React from "react";
import { useStore } from "../utils/storeContext";

const Form = () => {
  const { state, dispatch } = useStore();

  const formHandler = (e) => {
    e.preventDefault();
    // Add the selected item to the cart
    const selectedItem = state.availableItems.find(
      (item) => item.name === e.target.name.value
    );
    if (selectedItem) {
      dispatch({ type: "ADD_TO_CART", payload: selectedItem });
    }
  };

  return (
    <form className="form" onSubmit={formHandler}>
      <div>
        <label htmlFor="name">Medicine Name</label>
        <select name="name">
          <option value="">Select an item</option>
          {state.availableItems.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <button>Add Product</button>
    </form>
  );
};

export default Form;
