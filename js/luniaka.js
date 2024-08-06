// Завдання 10: Пошук максимального значення властивості
// Напишіть функцію findMaxProperty, яка приймає масив об'єктів та назву числової властивості, та повертає об'єкт з максимальним значенням цієї властивості.

// let scores = [
//     { id: 1, name: "Team A", score: 100 },
//     { id: 2, name: "Team B", score: 200 },
//     { id: 3, name: "Team C", score: 150 }
// ];

// function findMaxProperty(array, property) {
//     let scoresMax = {};
//     let maxScore = -Infinity;
//     for (const item of array) {
//         if (item[property] > maxScore) {
//             maxScore = item[property]
//             scoresMax = item
//         }
//     }
//     return scoresMax
//     }


// console.log(findMaxProperty(scores, "score"));

// Завдання 9: Перевірка наявності властивості
// Напишіть функцію hasProperty, яка приймає масив об'єктів та назву властивості, та повертає true, якщо всі об'єкти містять цю властивість, інакше false.

// let records = [
//     { id: 1, name: "Alice", age: 25 },
//     { id: 2, name: "Bob", age: 30 },
//     { id: 3, name: "Charlie", age: 35 },
//     { id: 3, name: "Charlie", age: 35 }
// ];

// function hasProperty(array, property) {
//     for (const item of array) {
//         if (!item.hasOwnProperty(property)) {
//             return false
//         }
//     }
//     return true
// }

// console.log(hasProperty(records, "age"));
// console.log(hasProperty(records, "old"));

// Завдання 8: Оновлення значень властивостей об'єктів
// Напишіть функцію updatePropertyValues, яка приймає масив об'єктів, назву властивості та нове значення цієї властивості, та оновлює цю властивість для всіх об'єктів у масиві.

// let accounts = [
//     { id: 1, username: "user1", status: "active" },
//     { id: 2, username: "user2", status: "inactive" },
//     { id: 3, username: "user3", status: "active" }
// ];

// function updatePropertyValues(array, property, newValue) {
//     for (let item of array) {
//         item[property] = newValue
//     }
// }

// updatePropertyValues(accounts, "status", "online");
// console.log(accounts);

// Завдання 7: Перетворення об'єктів у вигляд ключ-значення
// Напишіть функцію convertToKeyValue, яка приймає масив об'єктів та назви двох властивостей, та повертає об'єкт, де ключі - значення однієї властивості, а значення - значення іншої властивості.

// let employees = [
//     { id: 1, name: "Emma", department: "HR" },
//     { id: 2, name: "Liam", department: "IT" },
//     { id: 3, name: "Olivia", department: "Finance" }
// ];

// function convertToKeyValue(array, keyProp, valueProp) {
//     let newKey;
//     let newValue;
//     let newObject;
//     for (let item of array) {
//         console.log(item[valueProp]);
//     }
// }

// console.log(convertToKeyValue(employees, "id", "name"));

// Завдання 1
// Напишіть функцію doubleAges, яка подвоює значення поля age для кожного об'єкта в масиві об'єктів.

// javascript
// Копіювати код

// const people = [
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 35 }
// ];

// const doubleAges = (people) => {
//   return people.map(person => ({
//     ...person,
//     age: person.age * 2
//   }))
// }
  

// // Перевірка
// console.log(doubleAges(people)); // [{ name: 'Alice', age: 60 }, { name: 'Bob', age: 50 }, { name: 'Charlie', age: 70 }]

// const doubleAge = [];
//   for (const arr of array) {
//     let exp = arr.age * 2
    
//   }
//   return doubleAge

// Завдання 2
// Напишіть функцію getNames, яка створює масив імен з масиву об'єктів.

// javascript
// Копіювати код
// const people = [
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 35 }
// ];

// const getNames = arr =>  arr.map(item => item.name)

// // Перевірка
// console.log(getNames(people)); // ['Alice', 'Bob', 'Charlie']

// Завдання 3
// Напишіть функцію increaseSalaries, яка збільшує зарплату на 10% для кожного об'єкта в масиві об'єктів.

// javascript
// Копіювати код

// const employees = [
//   { name: 'John', salary: 5000 },
//   { name: 'Jane', salary: 6000 },
//   { name: 'Jack', salary: 5500 }
// ];

// const increaseSalaries = (arr) => {
//   return arr.map(person => ({
//     ...person,
//     salary: parseInt(person.salary * 1.1)
//   }))
// }

// // Перевірка
// console.log(increaseSalaries(employees)); // [{ name: 'John', salary: 5500 }, { name: 'Jane', salary: 6600 }, { name: 'Jack', salary: 6050 }]