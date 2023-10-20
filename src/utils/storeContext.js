import React, { createContext, useContext, useReducer } from "react";
import { products } from "./mock-data";

const StoreContext = createContext();

const initialState = {
  availableItems: products,
  cartItems: [],
  cartIsShown: false,
};

function storeReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const selectedItem = action.payload;
      const updatedAvailableItems = state.availableItems.map((item) => {
        if (item.id === selectedItem.id) {
          const newQuantity = item.quantity - 1;
          if (newQuantity >= 0) {
            return {
              ...item,
              quantity: newQuantity,
            };
          }
        }
        return item;
      });

      if (selectedItem.quantity > 0) {
        return {
          ...state,
          availableItems: updatedAvailableItems,
          cartItems: [...state.cartItems, selectedItem],
        };
      }
      return state; // Return the original state if the item can't be added to the cart.
    case "TOGGLE_CART":
      return {
        ...state,
        cartIsShown: !state.cartIsShown,
      };
    default:
      return state;
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  return useContext(StoreContext);
};
