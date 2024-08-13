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