export const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description of Product 1",
    quantity: 10,
    price: 500.5,
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description of Product 2",
    quantity: 20,
    price: 749.99,
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description of Product 3",
    quantity: 15,
    price: 199.95,
  },
];

const ItemStock = () => {
  return (
    <>
      <h2>Available Items</h2>
      <ul className="itemlist">
        {products.map((item) => (
          <li key={item.id}>
            Name: {item.name}----Description: {item.description}---- Price:{" "}
            {item.price}---- Quantity:{item.quantity}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ItemStock;
