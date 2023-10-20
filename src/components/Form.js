// import React from "react";

// const Form = () => {
//   return (
//     <form className="form">
//       <div>
//         <label htmlFor="name">Medicine Name</label>
//         <input name="name" type="text" />
//         <label htmlFor="description">Description</label>
//         <input name="description" type="text" />
//         <label htmlFor="price">Price</label>
//         <input name="price" type="number" min={1} />
//         <label htmlFor="qty">Available Quantity</label>
//         <input name="qty" type="text" />
//       </div>
//       <button>Add Product</button>
//     </form>
//   );
// };

// export default Form;

import React, { useState } from "react";

const Form = ({ products, updateStock }) => {
  const [selectedProductId, setSelectedProductId] = useState();

  const handleProductChange = (event) => {
    setSelectedProductId(event.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <label htmlFor="productSelect">Select a Product:</label>
        <select
          id="productSelect"
          onChange={handleProductChange}
          value={selectedProductId}
        >
          <option value="">Select a product</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
        <button>Add Product</button>
      </form>

      {selectedProductId && (
        <div>
          <h2>Selected Product Details</h2>
          <p>
            Name:
            {
              products.find(
                (product) => product.id === parseInt(selectedProductId)
              ).name
            }
          </p>
          <p>
            Description:
            {
              products.find(
                (product) => product.id === parseInt(selectedProductId)
              ).description
            }
          </p>
          <p>
            Quantity:
            {
              products.find(
                (product) => product.id === parseInt(selectedProductId)
              ).quantity
            }
          </p>
          <p>
            Price:
            {
              products.find(
                (product) => product.id === parseInt(selectedProductId)
              ).price
            }
            Rupees
          </p>
        </div>
      )}
    </div>
  );
};

export default Form;
