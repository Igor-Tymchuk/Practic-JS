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

// Завдання 5
// Напишіть функцію addBookYears, яка додає кількість років (від currentYear) до кожної книги та повертає новий масив об'єктів.

// javascript
// Копіювати код
// const books = [
//   { title: 'The Great Gatsby', year: 1925 },
//   { title: '1984', year: 1949 },
//   { title: 'To Kill a Mockingbird', year: 1960 }
// ];

// const currentYear = 2024;

// const addBookYears = arr => {
//     return arr.map(item => ({
//         ...item,
//         year: currentYear + ' - ' + item.year
//     }))
// }

// // Перевірка
// console.log(addBookYears(books)); // [{ title: 'The Great Gatsby', year: 2024 - 1925 }, { title: '1984', year: 2024 - 1949 }, { title: 'To Kill a Mockingbird', year: 2024 - 1960 }]

// Завдання 4
// Напишіть функцію logProductNames, яка виводить назви продуктів у консоль для кожного об'єкта в масиві об'єктів.

// javascript
// Копіювати код
// const products = [
//   { product: 'Apple', price: 1.2 },
//   { product: 'Banana', price: 0.5 },
//   { product: 'Cherry', price: 2.0 }
// ];

// const logProductNames = arr => arr.map(item => `'${item.product}'`).join(', ')
// // Перевірка
// console.log(logProductNames(products));// 'Apple', 'Banana', 'Cherry'

// Задача 1
// У вас есть массив объектов students, где каждый объект содержит имя студента, его возраст и массив оценок. Получите массив имен студентов старше 18 лет, у которых средняя оценка выше 80.

// javascript
// Копировать код
// const students = [
//   { name: "Alice", age: 19, grades: [85, 90, 88] },
//   { name: "Bob", age: 17, grades: [70, 75, 80] },
//   { name: "Charlie", age: 20, grades: [95, 92, 93] }
// ];

// const studentsNames = (arr) => arr
//   .filter((item) => item.age > 18 && item.grades
//     .reduce((total, item) => total += item, 0) / item.grades.length > 80)
//   .map((item) => item.name);

//   console.log(studentsNames(students));

// Пример консоль лога: ["Alice", "Charlie"]

// Задача 3
// Есть массив объектов employees, каждый объект содержит имя сотрудника, его отдел и зарплату. Верните общую сумму зарплат всех сотрудников из отдела "Sales".

// javascript
// Копировать код
// const employees = [
//   { name: "John", department: "Sales", salary: 3000 },
//   { name: "Jane", department: "Marketing", salary: 4000 },
//   { name: "Jack", department: "Sales", salary: 3500 }
// ];

// const employeesSalarySum = array => array.filter(person => person.department === 'Sales')
//     .reduce((total, person) => total + person.salary, 0)


// console.log(employeesSalarySum(employees));

// Пример консоль лога: 6500


// Задача 4
// Дан массив объектов movies, где каждый объект содержит название фильма, год выпуска и массив жанров. Найдите массив уникальных жанров фильмов, выпущенных после 2000 года.

// javascript
// Копировать код
// const movies = [
//   { title: "Inception", year: 2010, genres: ["Sci-Fi", "Action", 'Horror'] },
//   { title: "Titanic", year: 1997, genres: ["Drama", "Romance", "Comedy"] },
//   { title: "The Dark Knight", year: 2008, genres: ["Action", "Crime", 'Comedy'] }
// ];

// const moviesGenres = array => array.filter(movie => movie.year > 2000)
//     .flatMap(movie => movie.genres.map(genre => genre.toLowerCase()))
//     .reduce((newArray, genre) => {
//         if (!newArray.includes(genre)) {
//             newArray.push(genre)
//         }
//         return newArray
//     }, [])


// console.log(moviesGenres(movies));

// Пример консоль лога: ["Sci-Fi", "Action", "Crime"]

// Задача 5
// У вас есть массив объектов products, где каждый объект содержит название товара, его цену и категорию. Получите массив названий товаров из категории "Electronics", цена которых ниже 500.

// javascript
// Копировать код
// const products = [
//   { name: "Laptop", price: 1500, category: "Electronics" },
//   { name: "Mouse", price: 20, category: "Electronics" },
//   { name: "Phone", price: 800, category: "Electronics" },
//   { name: "Charger", price: 25, category: "Electronics" }
// ];

// const cheapPrice = array => array.filter(item => item.price <= 500)
// .map(item => item.name)

// console.log(cheapPrice(products));

// Пример консоль лога: ["Mouse", "Charger"]

// Задача 6
// Дан массив объектов books, где каждый объект содержит название книги, автора и количество страниц. Найдите имя автора, чьи книги в сумме содержат более 1000 страниц.

// javascript
// Копировать код
// const books = [
//   { title: "1984", author: "George Orwell", pages: 328 },
//   { title: "War and Peace", author: "Leo Tolstoy", pages: 1225 },
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180 }
// ];

// const searchBook = array => array.filter(item => item.pages >= 1000)
// .map(item => `${item.author}`).join('')


// console.log(searchBook(books));

// Пример консоль лога: "Leo Tolstoy"

// Задача 7
// Есть массив объектов users, где каждый объект содержит имя пользователя, его возраст и массив ролей. Верните массив уникальных ролей пользователей старше 21 года.

// javascript
// Копировать код
// const users = [
//   { name: "Alice", age: 22, roles: ["Admin", "Editor"] },
//   { name: "Bob", age: 20, roles: ["Viewer"] },
//   { name: "Charlie", age: 25, roles: ["Admin", "Viewer"] }
// ];

// const userRoles = array => array.filter(person => person.age >= 21)
//     .flatMap(person => person.roles.map(role => role.toLowerCase()))
//     .reduce((unique, role) => {
//         if (!unique.includes(role)) {
//             unique.push(role)
//         }
//         return unique
//     }, [])


// console.log(userRoles(users));

// Пример консоль лога: ["Admin", "Editor", "Viewer"]

// Задача 8
// У вас есть массив объектов transactions, где каждый объект содержит тип транзакции (приход или расход) и сумму. Найдите общий баланс, при условии, что учитываются только транзакции, превышающие 100.

// javascript
// Копировать код
// const transactions = [
//   { type: "income", amount: 150 },
//   { type: "expense", amount: 50 },
//   { type: "income", amount: 200 },
//   { type: "expense", amount: 150 }
// ];

// const totallyBalance = array => array.filter(bill => bill.amount >= 100)
//     .reduce((totalbill, bill) => {
//         if (bill.type === 'income') {
//         return totalbill += bill.amount
//         } else if (bill.type === 'expense') {
//         return totalbill -= bill.amount
//         }
//         return totalbill
// }, 0)

// console.log(totallyBalance(transactions));

// Пример консоль лога: 200

// Задача 9
// Дан массив объектов products, где каждый объект содержит название товара, цену и количество на складе. Верните список товаров, которых на складе меньше 10 штук, отсортированный по убыванию цены.

// javascript
// Копировать код
// const products = [
//   { name: "Laptop", price: 1500, stock: 5 },
//   { name: "Mouse", price: 20, stock: 50 },
//   { name: "Phone", price: 800, stock: 3 },
//   { name: "Charger", price: 25, stock: 8 }
// ];

// const newListSorted = array => array.filter(item => item.stock <= 10)
// .toSorted((a, b) => b.price - a.price)


// console.log(newListSorted(products));

// Пример консоль лога: [{name: "Laptop", price: 1500}, {name: "Phone", price: 800}, {name: "Charger", price: 25}]

// Задача 10
// Дан массив объектов students, где каждый объект содержит имя студента, его возраст и массив оценок. Найдите среднюю оценку всех студентов, которым меньше 20 лет.

// javascript
// Копировать код
// const students = [
//   { name: "Alice", age: 19, grades: [85, 90, 88] },
//   { name: "Bob", age: 21, grades: [70, 75, 80] },
//   { name: "Charlie", age: 18, grades: [95, 92, 93] }
// ];

// const averageOfAllStudents = array => Math.floor(array.filter(person => person.age <= 20)
//     .flatMap(person => person.grades)
//     .reduce((result, person, idx, array) => {
//         result += person / array.length
//         return result
//     }, 0))


// console.log(averageOfAllStudents(students));

// Пример консоль лога: 90

// 4. Створення класу з приватними властивостями (через #)
// Умова: Створіть клас BankAccount з приватною властивістю #balance та методами getBalance
// і deposit. Метод getBalance повинен повертати поточний баланс, а метод deposit приймати
// суму як аргумент і додавати її до балансу. Створіть об'єкт цього класу, додайте до балансу
// деяку суму і перевірте, що баланс оновився правильно.

// class BankAccount {
//     #balance
//     constructor(balance) {
//         this.#balance = balance
//     }
//     getBalance () {
//     return this.#balance
//     }
//     deposit(incomeBalance) {
//    this.#balance += incomeBalance
//     }
// }
// const artur = new BankAccount(1000);
// artur.deposit(500);
// artur.deposit(500);
// artur.deposit(10000)
// console.log(artur.getBalance());

// 5. Створення класу зі статичним методом
// Умова: Створіть клас MathOperations зі статичним методом add, який приймає два аргументи
// і повертає їх суму. Викличте цей метод без створення об'єкта класу і перевірте результат.

// class MathOperations {
//     static add(a, b) {
//         return a + b;
//     }
// }

// console.log(MathOperations.add(15, 40));
// // Очікуваний результат: 15

// 6. Наслідування класів
// Умова: Створіть клас Animal з властивістю name та методом speak, який повертатиме рядок:
// "[name] makes a noise." Створіть клас Dog, який наслідує Animal та перевизначає метод speak,
// щоб він повертав рядок: "[name] barks." Створіть об'єкт класу Dog та викличте метод speak.

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//       return `${this.name} makes a noise.`
//     }
//     #age = 15
// }

// class Dog extends Animal {
//     speak() {
//        return `${this.name} barks.`
//     }
//     #age = 20
// }

// class Cat extends Dog {
//     speak() {
//     }
//     #age = 30
// }

// const cat = new Cat("Rex");
// console.log(cat);
// Очікуваний результат: Rex barks.

// Задача 10:
// Умова: Реалізуйте клас Shape з методом area, що повертає площу. Реалізуйте клас Circle, 
// який наслідує від Shape, і перевизначає метод area, щоб повертати площу кола 
// (площа = π × радіус²). Переконайтеся, що метод area з базового класу також викликається 
// для розрахунку площі.




