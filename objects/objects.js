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

/* MORE OBJECTS */

const books = [];

class Book {
  constructor(author, title, year, pages, type) {
    this.author = author;
    this.title = title;
    this.year = year;
    this.pages = pages;
    this.type = type;
  }
}

function addBook() {
  let author = document.getElementById("author").value;
  let title = document.getElementById("title").value;
  let year = document.getElementById("year").value;
  let pages = document.getElementById("pages").value;
  let type = document.getElementById("type").value;

  const book = new Book(author, title, year, pages, type);
  books.push(book);
  showBooks();
}

function showBooks() {
  const tableBody = document.getElementById("books");
  tableBody.innerHTML = "";

  books.forEach((book, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${book.author}</td>
                    <td>${book.title}</td>
                    <td>${book.year}</td>
                    <td>${book.pages}</td>
                    <td>${book.type}</td>
                `;
    tableBody.appendChild(row);
  });
}

/* MORE OBJECTS */

const bankAccount = {
  saldo: 0,
  saveMoney: function (sum) {
    this.saldo += sum;
    return this.saldo;
  },
  getMoney: function (amount) {
    if (this.saldo >= amount) {
      this.saldo -= amount;
      return this.saldo;
    } else {
      return -1;
    }
  },
};

function saveMoney() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (amount > 0) {
    const newBalance = bankAccount.saveMoney(amount);
    document.getElementById("balance").textContent = newBalance;
    document.getElementById("message").textContent = "Saved $" + amount;
  } else {
    document.getElementById("message").textContent = "Enter a valid amount";
  }
}

function getMoney() {
  const amount = parseFloat(document.getElementById("amount").value);
  if (amount > 0) {
    const newBalance = bankAccount.getMoney(amount);
    if (newBalance !== -1) {
      document.getElementById("balance").textContent = newBalance;
      document.getElementById("message").textContent = "Withdrew $" + amount;
    } else {
      document.getElementById("message").textContent = "Not enough money";
    }
  } else {
    document.getElementById("message").textContent = "Enter a valid amount";
  }
}
