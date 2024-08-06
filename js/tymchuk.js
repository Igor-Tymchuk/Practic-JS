// Кількість парних чисел в масиві
// Напишіть функцію countEvenNumbers, яка приймає масив чисел і повертає кількість парних чисел у масиві.

function countEvenNumbers(arr) {
    let counter = 0;
    for (const number of arr) {
        if (number % 2 === 0) {
            counter += 1;
        }
    }
    return counter;
}

// Перевірка
// console.log(countEvenNumbers([10, 21, 32, 43])); // 2
// console.log(countEvenNumbers([1, 2, 3, 4, 5])); // 2
// console.log(countEvenNumbers([1, 3, 5, 7])); // 0
// console.log(countEvenNumbers([2, 4, 6, 8])); // 4
// console.log(countEvenNumbers([0, 1, 2, 3, 4, 5])); // 3

// Завдання 1: Пошук об'єкта за властивістю
// Напишіть функцію findObjectByProperty, яка приймає масив об'єктів та значення властивості, та повертає перший об'єкт, що містить це значення.

let items = [
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Carrot", category: "Vegetable" },
    { id: 3, name: "Banana", category: "Fruit" }
];
// function findObjectByProperty(array, property, value) {
// for (let i = 0; i < array.length; i += 1) {
//     console.log("i:", i)
//     if (array[i][property] === value) {
//         return array[i];
//     }
// }
// return null;
// }
function findObjectByProperty(array, property, value) {
    for (const item of array) {
        if (item[property] === value) {
            return item;
        }
    }
    return null;
}

// console.log(findObjectByProperty(items, "category", "Vegetable"));

// Завдання 10
// Напишіть функцію getNamesByAge, яка повертає масив імен з масиву об'єктів, де значення поля age більше або дорівнює 30.

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 }
];

function getNamesByAge(arr, age) {
    const names = [];
    for (const profile of arr) {
        if (profile.age >= age) {
            names.push(profile.name);
        }
    }
    return names;
}

// Перевірка
// console.log(getNamesByAge(people, 30)); // Очікуваний результат: ['Alice', 'Charlie', 'David']
// console.log(getNamesByAge(people, 10)); // Очікуваний результат: ['Alice', 'Charlie', 'David']
// console.log(getNamesByAge(people, 36)); // Очікуваний результат: ['Alice', 'Charlie', 'David']
// console.log(getNamesByAge(people, 80)); // Очікуваний результат: ['Alice', 'Charlie', 'David']

// Завдання 7: Перетворення об'єктів у вигляд ключ-значення
// Напишіть функцію convertToKeyValue, яка приймає масив об'єктів та назви двох властивостей, та повертає об'єкт, де ключі - значення однієї властивості, а значення - значення іншої властивості.

let employees = [
    { id: 1, name: "Emma", department: "HR" },
    { id: 2, name: "Liam", department: "IT" },
    { id: 3, name: "Olivia", department: "Finance" }
];

function convertToKeyValue(array, keyProp, valueProp) {
    const newObject = {};
    for (const employer of array) {
        newObject[employer[keyProp]] = employer[valueProp];
    }
    return newObject;
}

// console.log(convertToKeyValue(employees, "department", "name"));
// console.log(convertToKeyValue(employees, "id", "name"));

