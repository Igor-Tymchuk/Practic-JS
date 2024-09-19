// Завдання 3: Фільтрація об'єктів за властивістю
// Напишіть функцію filterByProperty, яка приймає масив об'єктів та значення властивості, та повертає новий масив,
// що містить об'єкти з цим значенням.

// let books = [
//     { id: 1, title: "The Hobbit", author: "Tolkien", genre: "Fantasy" },
//     { id: 2, title: "1984", author: "Orwell", genre: "Dystopian" },
//     { id: 3, title: "The Lord of the Rings", author: "Tolkien", genre: "Fantasy" }
// ];

// function filterByProperty(array, property, value) {
//     let newArray = [];

//     for (let item of array) {
//         if (item[property] === value) {
//             newArray.push(item)
//         }
//     }
//     return newArray;
// }

// //console.log(filterByProperty(books, "author", "Tolkien"));


// 7. Використання super для доступу до методів батьківського класу
// Умова: Створіть клас Parent з властивістю name та методом greet, який повертатиме рядок:
// "Hello from [name]." Створіть клас Child, який наслідує Parent та перевизначає метод greet,
// щоб він повертав рядок: "[результат greet з Parent], and hello from child."
// Створіть об'єкт класу Child та викличте метод greet.

// class Parent {
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         return `Hello from ${this.name}`;
//     }
// }
// class Child extends Parent {
//     greet() {
//         return `${super.greet()}, and hello from child`;
//     }
// }

// const child = new Child("ParentName");
// console.log(child.greet());
// // Очікуваний результат: Hello from ParentName, and hello from child.



// 8. Зміна контексту this з call, apply, bind
// Умова: Створіть функцію greet, яка повертає рядок: "Hello, [name]." Створіть об'єкт person з
// властивістю name. Використайте методи call, apply або bind для виклику функції greet з
// контекстом об'єкта person.

// function greet() {
//     return `Hello ${this.name}`;
// }
// const person = { name: "Bob" };
// console.log(greet.call(person));
// console.log(greet.apply(person));

// const greet1 = greet.bind(person);
// console.log(greet1());

// Очікуваний результат: Hello, Bob.



// Опис:
// Створи клас User, який представляє користувача в системі. Кожен користувач повинен мати наступні властивості та методи:
// Властивості:
// name (ім'я користувача, типу рядок)
// age (вік користувача, типу число)
// email (електронна пошта користувача, типу рядок)
// Методи:
// greet() - повертає привітання з іменем користувача, наприклад, "Привіт, я [name]!".
// isAdult() - повертає true, якщо користувачу 18 років або більше, і false в іншому випадку.
// Приклад використання:
// javascript
// Копіювати код
// // Створення нового користувача
// const user1 = new User('Оля', 22, 'olya@example.com');
// // Виклик методу greet
// console.log(user1.greet()); // "Привіт, я Оля!"
// // Перевірка, чи є користувач дорослим
// console.log(user1.isAdult()); // true
// Вимоги:
// Клас User повинен мати конструктор, який приймає параметри для властивостей name, age та email.
// Метод greet() повинен використовувати ім'я користувача для створення привітання.
// Метод isAdult() повинен правильно перевіряти вік користувача.
// Поради:
// Використовуй прості умови в методі isAdult() для перевірки віку.
// Метод greet() можна легко реалізувати за допомогою шаблонних рядків.
// class User {
//     constructor(name, age, email) {
//         this.name = name;
//         this.age = age;
//         this.email = email;
//     }

//     greet() {
//         return `Hi, I'm ${this.name}!`;
//     }
//     isAdult() {
//         if (this.age >= 18) return true;
//         else return false;
//     }
// }

// const user = new User('Nastya', 19, '123@gmail.com');

// console.log(user);
// console.log(user.greet());
// console.log(user.isAdult());




// 1. Таймер на промисах
// Задача: Напишите функцию, которая возвращает промис, разрешающийся через определённое количество миллисекунд.
// Подсказка: Используйте setTimeout внутри промиса для создания задержки.

const number = 1;
// function test(qqq) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (qqq === 1) resolve(alert('hello'));
//             else reject("ppc");
//         }, 3000)
//     });
// }
// console.log(test(2));


// 2. Цепочка промисов
// Задача: Создайте цепочку промисов, где каждый следующий промис разрешается через одну секунду, выводя сообщение в консоль.
// Подсказка: Используйте .then() для создания цепочек промисов. Здесь важно знать, что каждый .then() возвращает новый проми


// const test = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('after 1 move'),1000)
// })
// test.then((result) => { console.log(result); return 'after 2 move'})

// .then((result) => { console.log(result); return 'after 3 move' })

// .then((result) => { console.log(result); return 'after 4 move'})

// new Promise(resolve => setTimeout(resolve, 1000))
//     .then(() => { console.log("1 sec"); return new Promise(resolve => setTimeout(resolve, 1000)); })
//     .then(() => { console.log("2 sec"); return new Promise(resolve => setTimeout(resolve, 1000)); })
//     .then(() => { console.log("3 sec"); return new Promise(resolve => setTimeout(resolve, 1000)); })
//     .then(() => { console.log("4 sec"); return new Promise(resolve => setTimeout(resolve, 1000)); })
//     .then(() => { console.log("5 sec"); return new Promise(resolve => setTimeout(resolve, 1000)); })
//     .then(() => { console.log("6 sec"); return new Promise(resolve => setTimeout(resolve, 1000)); })




// function test(seconds) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Promise after 1 sec');
//         })
//     }}
// test()
//     .then(result => {
//         console.log();
//     })
//         .then(result => {
//         console.log();
//         })
//         .then(result => {
//         console.log();
//     })





//

// Завдання 4: Запит із параметрами
// Опис: Зроби GET-запит із параметрами для фільтрації даних. Наприклад, отримай користувача з ім'ям "Leanne Graham".
// Додай параметри до URL для фільтрації користувачів.
// Виведи результат у консоль.
// Підказка:
// Параметри можна додавати до URL через рядок запиту (наприклад, ?name=Leanne).
// Використовуй .then() для обробки відповіді та перетворення її у JSON.



// fetch('https://jsonplaceholder.typicode.com/users/?username=Bret')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log('error user ne naiden', error);
//     });

// Завдання 5: Послідовні запити
// Опис: Спочатку отримай список користувачів із сервера, а потім зроби запити для отримання постів кожного користувача.
// Зроби GET-запит для отримання списку користувачів (https://jsonplaceholder.typicode.com/users).
// Використовуючи .then(), для кожного користувача відправ окремий запит, щоб отримати його пости (наприклад, через https://jsonplaceholder.typicode.com/posts).
// Підказка:
// Після отримання списку користувачів із сервера, використовуй цикл для відправки додаткових запитів на отримання постів кожного користувача.
// Оброби кожну відповідь за допомогою .then().

// let usersData = [];
// const users = fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => {
//         usersData = data;
//             for (const user of usersData) {
//                 fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${user.id}`)
//                     .then(response => response.json())
//                     .then(data => {
//                         console.log(data);
//                     })
//             }
// })
//      .catch(error => {
//         console.log('error user ne naiden', error);
//      });


// function getUsers(data) {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response) => response.json())
//         .then((data) => {
//             for (let i = 0; i < data.length; i++) {
//                 fetch(`https://jsonplaceholder.typicode.com/posts?userId=${data[i].id}`)
//           .then((response) => response.json())
//                         .then((data) => console.log(data))
//                         .catch((error) => console.error(error));
//             }
//         })
//         .catch((error) => console.error(error));
// }
// getUsers();

















