import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Form from "./components/Form";
import ItemStock from "./components/ItemStock";
import Cart from "./components/Cart";
import { products } from "./components/ItemStock";

const App = () => {
  const [stock, setStock] = React.useState(products);

  const updateStock = (productId, change) => {
    setStock((prevStock) => {
      return prevStock.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: product.quantity + change };
        }
        return product;
      });
    });
  };

  return (
    <div>
      <Header />
      <Form products={products} updateStock={updateStock} />
      <ItemStock products={stock} />
      <Cart products={stock} updateStock={updateStock} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
