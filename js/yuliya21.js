// Завдання 6: Обчислення суми властивостей
// Напишіть функцію sumProperty, яка приймає масив об'єктів та назву числової властивості, та повертає суму значень цієї властивості.

let orders = [
    { id: 1, product: "Laptop", quantity: 2, price: 1000 },
    { id: 2, product: "Phone", quantity: 5, price: 500 },
    { id: 3, product: "Tablet", quantity: 3, price: 300 }
];

function sumProperty(array, property) {
    // Ваш код тут
    let sum = 0;
    for (const item of array) {
        if (typeof item[property] === "number") { sum += item[property] }
        
        
    } 
    return sum;
}

// console.log(sumProperty(orders, "price"));
// console.log(sumProperty(orders, "product"));