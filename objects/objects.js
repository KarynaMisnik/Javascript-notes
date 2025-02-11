/* OBJETS */

/* CREATING SIMPLE OBJECT */

let order = {
  id: 1,
  date: "2022-01-01",
  customer: "John Doe",
  products: ["Hamburger", "Pizza", "Hot-Dog"],
  drinks: ["Coca-Cola", "Fanta", "Sprite"],
};

console.log(
  "Order ID: " +
    order.id +
    "\n" +
    "Order Name: " +
    order.products[1] +
    "\n" +
    "Order Drink: " +
    order.drinks[1] +
    "\n" +
    "it was ordered on: " +
    order.date +
    "\n" +
    "by " +
    order.customer
);

/* OBJECT CLASS */

class Product {
  constructor(id, description, quantity, price) {
    this.id = id;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
  }
}

let product1 = new Product(3, "Pasta", 2, 15.0);

console.log(
  "Product ID: " +
    product1.id +
    "\n" +
    "Product Description: " +
    product1.description +
    "\n" +
    "Product Quantity: " +
    product1.quantity +
    "\n" +
    "Product Price: $" +
    product1.price
);
