import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Form from "./components/Form";
import ItemStock from "./components/ItemStock";
import Cart from "./components/Cart";
import { StoreProvider } from "./utils/storeContext";

const App = () => {
  return (
    <StoreProvider>
      <div>
        <Header />
        <Form />
        <ItemStock />
        <Cart />
      </div>
    </StoreProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
