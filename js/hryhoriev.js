// Завдання 3: Фільтрація об'єктів за властивістю
// Напишіть функцію filterByProperty, яка приймає масив об'єктів та значення властивості, та повертає новий масив, 
// що містить об'єкти з цим значенням.

let books = [
    { id: 1, title: "The Hobbit", author: "Tolkien", genre: "Fantasy" },
    { id: 2, title: "1984", author: "Orwell", genre: "Dystopian" },
    { id: 3, title: "The Lord of the Rings", author: "Tolkien", genre: "Fantasy" }
];

function filterByProperty(array, property, value) {
    let newArray = [];

    for (let item of array) {
        if (item[property] === value) { 
            newArray.push(item)
        }
    }
    return newArray;
}

//console.log(filterByProperty(books, "author", "Tolkien"));