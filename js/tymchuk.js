// Кількість парних чисел в масиві
// Напишіть функцію countEvenNumbers, яка приймає масив чисел і повертає кількість парних чисел у масиві.

// function countEvenNumbers(arr) {
//     let counter = 0;
//     for (const number of arr) {
//         if (number % 2 === 0) {
//             counter += 1;
//         }
//     }
//     return counter;
// }

// Перевірка
// console.log(countEvenNumbers([10, 21, 32, 43])); // 2
// console.log(countEvenNumbers([1, 2, 3, 4, 5])); // 2
// console.log(countEvenNumbers([1, 3, 5, 7])); // 0
// console.log(countEvenNumbers([2, 4, 6, 8])); // 4
// console.log(countEvenNumbers([0, 1, 2, 3, 4, 5])); // 3

// Завдання 1: Пошук об'єкта за властивістю
// Напишіть функцію findObjectByProperty, яка приймає масив об'єктів та значення властивості, та повертає перший об'єкт, що містить це значення.

// let items = [
//     { id: 1, name: "Apple", category: "Fruit" },
//     { id: 2, name: "Carrot", category: "Vegetable" },
//     { id: 3, name: "Banana", category: "Fruit" }
// ];
// function findObjectByProperty(array, property, value) {
// for (let i = 0; i < array.length; i += 1) {
//     console.log("i:", i)
//     if (array[i][property] === value) {
//         return array[i];
//     }
// }
// return null;
// }
// function findObjectByProperty(array, property, value) {
//     for (const item of array) {
//         if (item[property] === value) {
//             return item;
//         }
//     }
//     return null;
// }

// console.log(findObjectByProperty(items, "category", "Vegetable"));

// Завдання 10
// Напишіть функцію getNamesByAge, яка повертає масив імен з масиву об'єктів, де значення поля age більше або дорівнює 30.

// const people = [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 25 },
//     { name: 'Charlie', age: 35 },
//     { name: 'David', age: 40 }
// ];

// function getNamesByAge(arr, age) {
//     const names = [];
//     for (const profile of arr) {
//         if (profile.age >= age) {
//             names.push(profile.name);
//         }
//     }
//     return names;
// }

// Перевірка
// console.log(getNamesByAge(people, 30)); // Очікуваний результат: ['Alice', 'Charlie', 'David']
// console.log(getNamesByAge(people, 10)); // Очікуваний результат: ['Alice', 'Charlie', 'David']
// console.log(getNamesByAge(people, 36)); // Очікуваний результат: ['Alice', 'Charlie', 'David']
// console.log(getNamesByAge(people, 80)); // Очікуваний результат: ['Alice', 'Charlie', 'David']

// Завдання 7: Перетворення об'єктів у вигляд ключ-значення
// Напишіть функцію convertToKeyValue, яка приймає масив об'єктів та назви двох властивостей, та повертає об'єкт, де ключі - значення однієї властивості, а значення - значення іншої властивості.

// let employees = [
//     { id: 1, name: "Emma", department: "HR" },
//     { id: 2, name: "Liam", department: "IT" },
//     { id: 3, name: "Olivia", department: "Finance" }
// ];

// function convertToKeyValue(array, keyProp, valueProp) {
//     const newObject = {};
//     for (const employer of array) {
//         newObject[employer[keyProp]] = employer[valueProp];
//     }
//     return newObject;
// }

// // console.log(convertToKeyValue(employees, "department", "name"));
// // console.log(convertToKeyValue(employees, "id", "name"));

// // Завдання 1
// // Напишіть функцію doubleAges, яка подвоює значення поля age для кожного об'єкта в масиві об'єктів.

// const peoples = [
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 25 },
//     { name: 'Charlie', age: 35 }
// ];

// function doubleAges(arr) {
// const double = arr.slice();
// double.forEach(elem => elem.age *2);
// return double;
// }

// Перевірка
// console.log(doubleAges(peoples)); // [{ name: 'Alice', age: 60 }, { name: 'Bob', age: 50 }, { name: 'Charlie', age: 70 }]
// Завдання 5
// Напишіть функцію addBookYears, яка додає кількість років (від currentYear) до кожної книги та повертає новий масив об'єктів.

// const books = [
//   { title: 'The Great Gatsby', year: 1925 },
//   { title: '1984', year: 1949 },
//   { title: 'To Kill a Mockingbird', year: 1960 }
// ];

// const currentYear = 2024;

// function addBookYears(arr) {
// const newArray = arr.slice();
// newArray.forEach(book => book.year = currentYear + " - " + book.year);
// return newArray;
// }

// // Перевірка
// console.log(addBookYears(books)); // [{ title: 'The Great Gatsby', year: 2024 - 1925 }, { title: '1984', year: 2024 - 1949 }, { title: 'To Kill a Mockingbird', year: 2024 - 1960 }]

// Завдання 5
// Напишіть функцію groupByCategory, яка групує об'єкти в масиві за певним полем і повертає об'єкт, де ключами є значення цього поля, а значеннями - масиви об'єктів, що мають ці значення.

// const items = [
//   { category: 'fruit', name: 'Apple' },
//   { category: 'vegetable', name: 'Carrot' },
//   { category: 'fruit', name: 'Banana' },
//   { category: 'fruit', name: 'Orange' },
//   { category: 'vegetable', name: 'Lettuce' }
// ];

// const groupByCategory = arr => {
//   return arr.reduce((acc, item) => {
//     const key = item.category;
//     if (!acc[key]) {
//         acc[key] = [];
//     }
//     acc[key].push(item);
//     return acc
//   }, {})


// }

// // Перевірка
// console.log(groupByCategory(items));
// // {
//   fruit: [{ category: 'fruit', name: 'Apple' }, { category: 'fruit', name: 'Banana' }, { category: 'fruit', name: 'Orange' }],
//   vegetable: [{ category: 'vegetable', name: 'Carrot' }, { category: 'vegetable', name: 'Lettuce' }]
// }

// Завдання 4
// Напишіть функцію countOccurrences, яка рахує кількість об'єктів в масиві, де значення певного поля дорівнює заданому значенню.

// const items = [
//   { type: 'fruit', name: 'Apple' },
//   { type: 'vegetable', name: 'Carrot' },
//   { type: 'fruit', name: 'Banana' },
//   { type: 'fruit', name: 'Orange' }
// ];

// const countOccurrences = (arr, type) => {
//   return arr.reduce((counter, item) => {
//     if (item.type === type) counter++;
//     return counter;
//   }, 0)
// }

// // Перевірка
// console.log(countOccurrences(items, 'fruit')); // 3
// console.log(countOccurrences(items, 'vegetable')); // 1

// Задача 2
// Дан массив объектов orders, где каждый объект содержит идентификатор заказа, массив товаров (название и количество) и статус заказа. Получите массив названий всех товаров из выполненных заказов, отсортированный по алфавиту.

// const orders = [
//     { id: 1, products: [{ name: "Laptop", quantity: 1 }, { name: "Mouse", quantity: 2 }], status: "completed" },
//     { id: 2, products: [{ name: "Phone", quantity: 1 }, { name: "Headphones", quantity: 1 }], status: "pending" },
//     { id: 3, products: [{ name: "Tablet", quantity: 2 }, { name: "Charger", quantity: 3 }], status: "completed" }
// ];

// const completedProducts = array => array.filter(item => item.status === "completed")
// .flatMap(item => item.products)
// .map(item => item.name)
// .toSorted((a, b) => a.localeCompare(b));

// console.log("completedProducts:", completedProducts(orders))


// Пример консоль лога: ["Charger", "Laptop", "Mouse", "Tablet"]

// Задача 10
// Дан массив объектов students, где каждый объект содержит имя студента, его возраст и массив оценок. Найдите среднюю оценку всех студентов, которым меньше 20 лет.

// const students = [
//     { name: "Alice", age: 19, grades: [85, 90, 88] },
//     { name: "Bob", age: 21, grades: [70, 75, 80] },
//     { name: "Charlie", age: 18, grades: [95, 92, 90] }
// ];

// const averageGrade = array => array.filter(student => student.age < 20)
//     .flatMap(student => student.grades)
//     .reduce((acc, grade, index, arr) => acc += grade / arr.length, 0)

// console.log("averageGrade:", averageGrade(students))// Пример консоль лога: 90

// // Задача 9
// // Дан массив объектов products, где каждый объект содержит название товара, цену и количество на складе. Верните список товаров, которых на складе меньше 10 штук, отсортированный по убыванию цены.

// const products = [
//     { name: "Laptop", price: 1500, stock: 5 },
//     { name: "Mouse", price: 20, stock: 50 },
//     { name: "Phone", price: 800, stock: 3 },
//     { name: "Charger", price: 25, stock: 8 }
// ];

// const less10 = array => array.filter(product => product.stock < 10)
// .toSorted((a, b) => b.price - a.price)

// console.log("less10:", less10(products))

// Пример консоль лога: [{name: "Laptop", price: 1500}, {name: "Phone", price: 800}, {name: "Charger", price: 25}]

// Задача 7
// Есть массив объектов users, где каждый объект содержит имя пользователя, его возраст и массив ролей. Верните массив уникальных ролей пользователей старше 21 года.

// const users = [
//     { name: "Alice", age: 22, roles: ["Admin", "Editor"] },
//     { name: "Bob", age: 20, roles: ["Viewer"] },
//     { name: "Charlie", age: 25, roles: ["Admin", "Viewer"] }
// ];

// const uniqueRole = array => array.filter(user => user.age > 21)
//     .flatMap(user => user.roles)
//     .reduce((acc, role,) => {
//         if (!acc.includes(role)) {
//             acc.push(role)
//         }
//         return acc;
//     }, [])


// console.log("uniqueRole:", uniqueRole(users))
// Пример консоль лога: ["Admin", "Editor", "Viewer"]

// 1.Знайти три найдорожчі товари у кожній категорії та відсортувати їх за зростанням ціни:

// У вас є масив об'єктів products, кожен з яких має властивості name, category та price.
// Знайдіть три найдорожчі товари у кожній категорії та відсортуйте їх за зростанням ціни.

// const products = [
//     { name: 'Laptop', category: 'Electronics', price: 1200 },
//     { name: 'Phone', category: 'Electronics', price: 800 },
//     { name: 'Tablet', category: 'Electronics', price: 600 },
//     { name: 'Camera', category: 'Electronics', price: 700 },
//     { name: 'Shirt', category: 'Clothing', price: 50 },
//     { name: 'Shoes', category: 'Clothing', price: 100 },
//     { name: 'Jeans', category: 'Clothing', price: 80 },
//     { name: 'Jacket', category: 'Clothing', price: 150 },
//     { name: 'Watch', category: 'Accessories', price: 200 },
//     { name: 'Sunglasses', category: 'Accessories', price: 150 },
//     { name: 'Hat', category: 'Accessories', price: 50 },
//     { name: 'Belt', category: 'Accessories', price: 100 }
// ];

// const getTopThreeProducts = (products) => {
//     // Групування продуктів за категоріями
//     const grouped = products.reduce((acc, product) => {
//         if (!acc[product.category]) {
//             acc[product.category] = [];
//         }
//         acc[product.category].push({ name: product.name, price: product.price });
//         return acc;
//     }, {});

//     // // Для кожної категорії знайти три найдорожчі продукти та відсортувати їх за зростанням ціни
//     return Object.entries(grouped).map(([category, items]) => {
//         const topThree = items
//             .sort((a, b) => b.price - a.price) // Сортуємо за спаданням ціни
//             .slice(0, 3) // Беремо три найдорожчі
//             .sort((a, b) => a.price - b.price); // Сортуємо за зростанням ціни

//         return {
//             category,
//             products: topThree
//         };
//     });
// };

// console.log(getTopThreeProducts(products));

// Очікуваний результат:
// [
//   { category: 'Electronics', products: [{ name: 'Tablet', price: 600 }, { name: 'Camera', price: 700 }, { name: 'Phone', price: 800 }] },
//   { category: 'Clothing', products: [{ name: 'Jeans', price: 80 }, { name: 'Shoes', price: 100 }, { name: 'Jacket', price: 150 }] },
//   { category: 'Accessories', products: [{ name: 'Belt', price: 100 }, { name: 'Sunglasses', price: 150 }, { name: 'Watch', price: 200 }] }
// ]

// const arr1 = [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 3, "y": 6}
// ];

// const arr2 = [
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ];

// const combined = [...arr1, ...arr2];
// const uniqueById = combined.reduce((acc, obj) => {
//     acc[obj.id] = obj;
//     return acc;
// }, {});
// const result = Object.values(uniqueById);

// Если выписать все натуральные числа меньше 10, кратные 3 или 5, то получим 3, 5, 6 и 9. Сумма этих чисел равна 23.
// Найдите сумму всех чисел меньше 1000, кратных 3 или 5.

// const sumAll3_5Numbers = number => {
//     let sum = 0;
//     for (let i = 0; i < number; i++) {
//         if (i % 3 === 0 || i % 5 === 0) sum += i;
//     }
//     return sum;
// }
// console.log("sumAll3_5Numbers:", sumAll3_5Numbers(1000)) //Сума всіх чисел, менших за 1000 і кратних 3 або 5, дорівнює 233168.

// // Каждый следующий элемент ряда Фибоначчи получается при сложении двух предыдущих. Начиная с 1 и 2, первые 10 элементов будут:
// // 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// // Найдите сумму всех четных элементов ряда Фибоначчи, которые не превышают четыре миллиона.

// const fibonacci = number => {
//     let oddSum = 0;
//     let prevNumber = 1;
//     let nextNumber = 2;

//     for (; prevNumber < number;) {
//         if (prevNumber % 2 === 0) oddSum += prevNumber;
//         let temp = prevNumber + nextNumber;
//         prevNumber = nextNumber;
//         nextNumber = temp;
//     }
//     return oddSum;
// }

// console.log("fibonacci:", fibonacci(4_000_000))
// Сума всіх парних елементів ряду Фібоначчі, які не перевищують чотири мільйони, дорівнює 4,613,732.

// 1. Створення класу та використання this
// Умова: Створіть клас Person, який приймає name та age як аргументи конструктора. 
// Додайте метод introduce, який повертатиме рядок з представленням особи у форматі: 
// "Hi, my name is [name] and I am [age] years old." 
// Створіть об'єкт цього класу та викличте метод introduce.

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     introduce() {
//         return `Hi, my name is ${this.name} and I am ${this.age} years old.`
//     }
// }

// const john = new Person("John", 30);
// // console.log("john:", john)
// // console.log(john.introduce());
// const igor = new Person("Igor", 31);
// console.log(igor.introduce());
// igor.lastName = "Tymchuk";
// console.log("igor:", igor)
// const artur = Object.create(igor);
// console.log("artur:", artur)
// console.log(artur.age);
// Очікуваний результат: Hi, my name is John and I am 30 years old.

// 2. Клас з методом, який змінює властивості об'єкта
// Умова: Створіть клас Car, який має властивості model та year. Додайте метод updateModel, 
// який приймає нову модель як аргумент і змінює відповідну властивість об'єкта. 
// Створіть об'єкт цього класу, викличте метод updateModel і перевірте, 
// що властивість model змінилася.

// class Car {
//     constructor(model, year) {
//         this.model = model;
//         this.year = year;
//     }
//     updateModel(newModel) {
//         this.model = newModel;
//     }
// }

// const myCar = new Car("Toyota", 2020);
// myCar.updateModel("Honda");
// console.log(myCar);
// Очікуваний результат: Honda

// Конструктор класу
// Задача 1:
// Умова: Створіть клас Person, який має конструктор для ініціалізації 
// імені та віку особи. Додайте метод greet, який виводить привітання 
// у форматі "Привіт, я [ім'я] і мені [вік] років."

// class Person {
//     constructor(params) {
//         this.name = params.name;
//         this.age = params.age;
//     }

//     greet() {
//         console.log(`Привіт, я ${this.name} і мені ${this.age} років.`)
//     }
// }
// // Приклад використання:
// const person = new Person({name:'Оля', age: 30});
// person.greet(); // "Привіт, я Оля і мені 30 років."

// Задача 2:
// Умова: Реалізуйте клас Rectangle, який має конструктор для ініціалізації 
// ширини та висоти. Клас повинен мати методи getArea, що повертає площу 
// прямокутника (ширина × висота), і getPerimeter, що повертає периметр 
// прямокутника (2 × (ширина + висота)).

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     getArea() {
//         return this.height * this.width;
//     }

//     getPerimeter() {
//         return (this.height + this.width) * 2;
//     }
// }

// // Приклад використання:
// const rect = new Rectangle();
// rect.width = 10;
// rect.height = 5;
// console.log(rect.getArea()); // 50
// console.log(rect.getPerimeter()); // 30


// 3. Множественные промисы
// Задача: Создайте три промиса, каждый из которых разрешается через разное количество времени. Используйте Promise.all, чтобы выполнить их параллельно и вывести результат, когда они все завершатся.
// Совет: Используйте Promise.all, если хотите дождаться выполнения всех промисов. Он полезен, когда нужно выполнять несколько задач одновременно и дождаться результата всех сразу.

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('fulfilled'), 4000)
// });
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject('rejected'), 2000)
// });
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('fulfilled'), 3000)
// });

// const allPromises = Promise.all([promise1,promise2,promise3])
// .then((promises) => {console.log(promises)}).catch((error) => {console.log(error);
// })
// console.log("allPromises:", allPromises);

// 6. Асинхронное получение данных
// Задача: Напишите функцию, которая возвращает промис, симулирующий получение данных с сервера через 2 секунды. Используйте setTimeout для задержки.
// Совет: Используйте промис для имитации работы с асинхронными запросами. В реальных приложениях асинхронные операции часто используются для работы с сетью.

// const number = Math.random() > 0.5;
// console.log("number:", number);

// const promiseFunction = (number) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (number) console.log("successful");
//             else console.log("failed");
//         }, 2000)
//     })
// }
// promiseFunction(number);
