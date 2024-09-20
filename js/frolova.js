/*Перевірка анаграм
Напишіть функцію areAnagrams, яка приймає два рядки і повертає true, якщо це анаграми (містять однакові символи у різному порядку), і false в іншому випадку.
*/ /*
function areAnagrams(str1, str2) {
  const stringArray1 = str1.split("").sort();
  const stringArray2 = str2.split("").sort();
  if(stringArray1.length === stringArray2.length) { 
  for (let i = 0; i < stringArray1.length; i++) {
     if (stringArray1[i] === stringArray2[i]) {
    
     } else {
       return false;
     }
    return true;
  }
  } else { 
    return false;
  } 
}

// Перевірка
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world')); // false
console.log(areAnagrams('triangle', 'integral')); // true
console.log(areAnagrams('abc', 'acb')); // true
console.log(areAnagrams('abc', 'abcd')); // false*/
/*
Завдання 4
Напишіть функцію sortEmployeesBySalary, яка відсортовує масив об'єктів за полем salary у порядку зростання.

javascript
Копіювати код*/
/*
const employees1 = [
  { name: 'John', department: 'HR', salary: 5000 },
  { name: 'Jane', department: 'Finance', salary: 6000 },
  { name: 'Jack', department: 'IT', salary: 5500 }
];

const employees2 = [
  { name: 'Anna', department: 'Marketing', salary: 4500 },
  { name: 'Tom', department: 'Sales', salary: 4700 }
];

const sortEmployeesBySalary = (arr) => {
  return arr.toSorted((a, b) => a.salary - b.salary);
  
}
// Перевірка
console.log(sortEmployeesBySalary(employees1));
console.log(sortEmployeesBySalary(employees2));

javascript
Копіювати код*/
/*
Напишіть функцію totalPrice, яка обчислює загальну суму значень поля price для всіх об'єктів в масиві.

javascript
Копіювати код

const products = [
  { product: 'Laptop', price: 1500 },
  { product: 'Phone', price: 600 },
  { product: 'Charger', price: 20 }
];

const totalPrice = (arr) => arr.reduce((total, item) =>
   total += item.price, 0)

// Перевірка
console.log(totalPrice(products)); // 2120

Задача 1
У вас есть массив объектов products,
где каждый объект содержит информацию о товаре (название, цена, категория).
Преобразуйте этот массив так, чтобы получить новый массив, состоящий только из названий товаров.
/*
const products = [
  { name: "Laptop", price: 1500, category: "Electronics" },
  { name: "Shoes", price: 100, category: "Clothing" },
  { name: "Coffee Machine", price: 200, category: "Home Appliances" }
];

const nameProducts = (arr) => arr.map((item) => item.name);
// ["Laptop", "Shoes", "Coffee Machine"]
/* */ /*
2
Дан массив объектов orders, где каждый объект содержит идентификатор
 заказа, массив товаров (название и количество) и статус заказа.
  Получите массив названий всех товаров из выполненных заказов, отсортированный по алфавиту.

const orders = [
  { id: 1, products: [{ name: "Laptop", quantity: 1 }, { name: "Mouse", quantity: 2 }], status: "completed" },
  { id: 2, products: [{ name: "Phone", quantity: 1 }, { name: "Headphones", quantity: 1 }], status: "pending" },
  { id: 3, products: [{ name: "Tablet", quantity: 2 }, { name: "Charger", quantity: 3 }], status: "completed" }
];

const nameProducts = (arr) => arr
  .filter(item => item.status === "completed")
  .flatMap(item => item.products)
  .map(item => item.name)
  .toSorted((a, b) => a.localeCompare(b));
  console.log(nameProducts(orders));
// ["Charger", "Laptop", "Mouse", "Tablet"]
/*
 4
Дан массив объектов movies, где каждый объект содержит название фильма,
 год выпуска и массив жанров. Найдите массив уникальных жанров фильмов, 
 выпущенных после 2000 года.


const movies = [
  { title: "Inception", year: 2010, genres: ["Sci-Fi", "Action"] },
  { title: "Titanic", year: 1997, genres: ["Drama", "Romance"] },
  { title: "The Dark Knight", year: 2008, genres: ["Action", "Crime"] }
];

const uniqueGenres = (arr) => arr
  .filter(item => item.year > 2000)
  .flatMap(item => item.genres)
  .filter((item, index, arr) => arr.indexOf(item) === index);
  console.log(uniqueGenres(movies));
  
// При
["Sci-Fi", "Action", "Crime"]

1
У вас есть массив объектов students, где каждый объект содержит имя студента, его возраст и массив оценок. Получите массив имен студентов старше 18 лет, у которых средняя оценка выше 80.

const students = [
  { name: "Alice", age: 19, grades: [85, 90, 88] },
  { name: "Bob", age: 17, grades: [70, 75, 80] },
  { name: "Charlie", age: 20, grades: [95, 92, 93] }
];

const studentsNames = (arr) => arr
  .filter((item) => item.age > 18 && item.grades
    .reduce((total, grade) => total += item.grades, 0) / item.grades.length > 80)
  .map((item) => item.name);
  console.log(studentsNames(students));
  
// Пример консоль лога: ["Alice", "Charlie"]*/
/*
Завдання 7: Перетворення об'єктів у вигляд ключ-значення
// Напишіть функцію convertToKeyValue,
яка приймає масив об'єктів та назви двох властивостей,
та повертає об'єкт, де ключі - значення однієї властивості, а значення - значення іншої властивості.
*/ /*
let employees = [
    { id: 1, name: "Emma", department: "HR" },
    { id: 2, name: "Liam", department: "IT" },
  { id: 3, name: "Olivia", department: "Finance" }
];

const groupArray = (employees, department) => employees.reduce((acc, employee) => {
  if (!acc[employee[department]]) {
    acc[employee[department]] = [];
  }
  acc[employee[department]].push(employee.name);
  return acc;
}, {}); 
////////////////////////////////////
  function convertToKeyValue(array, key, value) {
    return array.reduce((acc, item) => {
      acc[item[key]] = item[value];
      return acc;
    }, {});
  }

console.log(groupArray)
3. Асинхронне очікування декількох запитів
Створи функцію fetchMultipleUsers(), яка паралельно виконує GET-запити для 
отримання даних про трьох користувачів (ID 1, 2, 3) з https://jsonplaceholder.typicode.com/users. 
Використовуй Promise.all(), щоб обробити всі відповіді одночасно. Виведи імена всіх користувачів
у консоль після отримання відповідей.*/

function fetchMultipleUsers() {
  const urls = [
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/users/2",
    "https://jsonplaceholder.typicode.com/users/3",
  ];

  const newL = urls.map((url) =>
    fetch(url).then((response) => response.json())
  );
  console.log(newL);

  Promise.all(newL)
    .then((users) => {
      users.forEach((user) => console.log(user.name));
    })
    .catch((error) => {
      console.log("Error", error);
    });
}

fetchMultipleUsers();
