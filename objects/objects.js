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
