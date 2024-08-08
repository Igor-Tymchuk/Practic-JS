// 1. Задачи на метод map
// Задача 1
// У вас есть массив объектов products, где каждый объект содержит информацию о товаре (название, цена, категория). Преобразуйте этот массив так, чтобы получить новый массив, состоящий только из названий товаров.

// javascript
// Копировать код
const products = [
  { name: "Laptop", price: 1500, category: "Electronics" },
  { name: "Shoes", price: 100, category: "Clothing" },
  { name: "Coffee Machine", price: 200, category: "Home Appliances" }
];
const nameProducts = (products) => products.map(product => product.name)
// console.log(nameProducts(products));


// Пример консоль лога: ["Laptop", "Shoes", "Coffee Machine"]

// Задача 1
// Дан массив объектов orders, где каждый объект представляет собой заказ с массивом товаров. Верните единый массив, содержащий названия всех товаров.

// javascript
// Копировать код
const orders = [
  { orderId: 1, products: ["Laptop", "Mouse"] },
  { orderId: 2, products: ["Phone", "Headphones"] },
  { orderId: 3, products: ["Tablet", "Charger"] }
];

// Пример консоль лога: ["Laptop", "Mouse", "Phone", "Headphones", "Tablet", "Charger"]

const allProducts = (orders) => orders.flatMap(order => order.products)
// console.log(allProducts(orders));
