//  Завдання 2: Підрахунок елементів з певною властивістю
// Напишіть функцію countByProperty, яка приймає масив об'єктів та значення властивості, та повертає кількість об'єктів, що містять це значення.

// let users = [
//   { id: 1, name: "John", role: "admin" },
//   { id: 2, name: "Jane", role: "user" },
//   { id: 3, name: "Mike", role: "user" },
//   { id: 4, name: "Sara", role: "admin" },
//   { id: 5, name: "Mike", role: "user" },
//   { id: 6, name: "Sara", role: "admin" },
// ];

// function countByProperty(array, property, value) {
//   let counter = 0;
//   for (const item of array) {
//     if (item[property] === value) {
//       // console.log(item[property]);
//       counter += 1;
//     }
//   }
//   return counter;
// }

// console.log(countByProperty(users, "role", "user"));

// Задача 1
// Дан массив объектов items, где каждый объект содержит название товара и его количество. Посчитайте общее количество всех товаров.

// javascript
// Копировать код
const items = [
  { name: "Apples", quantity: 10 },
  { name: "Bananas", quantity: 5 },
  { name: "Oranges", quantity: 8 },
];

// Пример консоль лога: 23

const sumItems = (items) => items.reduce((acc, item) => acc + item.quantity, 0);
// console.log(sumItems(items));

// Задача 2
// У вас есть массив объектов transactions, где каждый объект содержит тип транзакции (приход или расход) и сумму. Подсчитайте общий баланс (сумма всех приходов минус сумма всех расходов).

// javascript
// Копировать код
const transactions = [
  { type: "income", amount: 1000 },
  { type: "expense", amount: 200 },
  { type: "bonus", amount: 3000 },
  { type: "income", amount: 500 },
  { type: "expense", amount: 150 },
];

// Пример консоль лога: 1150

const fulSum = (transactions) =>
  transactions.reduce((acc, transaction) => {
    if (transaction.type === "income") {
      return acc + transaction.amount;
    } else if (transaction.type === "expense") {
      return acc - transaction.amount;
    }
    return acc;
  }, 0);
// console.log(fulSum(transactions));

// Задача 3:
// Умова: Створіть конструктор функцію Car, яка приймає модель та рік
// випуску. Додайте метод getInfo до прототипу, який повертає рядок у
// форматі "Модель: [модель], Рік випуску: [рік]".

function Car(model, age) {
  this.model = model;
  this.age = age;
}

Car.prototype.getInfo = function () {
  return `Модель: ${this.model}, Рік випуску: ${this.age}`;
};

// Приклад використання:
const car = new Car("Toyota", 2022);
// console.log(car.getInfo()); // "Модель: Toyota, Рік випуску: 2022"
// console.log(Car);
// console.log(car);

// Задача 4:
// Умова: Створіть конструктор функцію Animal, що приймає ім'я тварини. Додайте
// метод makeSound до прототипу, який виводить звук, що видає тварина,
// наприклад, "Meow" або "Woof".

function Animal(nameAnimal) {
  this.nameAnimal = nameAnimal;
}

Animal.prototype.makeSound = function () {
  switch (this.nameAnimal) {
    case "Cat":
      console.log("Meow");
      break;
    case "Dog":
      console.log("Woof");
      break;
    default:
      console.log("Not an animals");
  }
};

// Приклад використання:
// const animal = new Animal("Cat");
// animal.makeSound(); // "Meow" (для кота)
// const animal2 = new Animal("Dog");
// animal2.makeSound();
// const animal3 = new Animal("Frog");
// animal3.makeSound();
