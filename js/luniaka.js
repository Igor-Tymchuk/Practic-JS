// 1. Фільтрація парних чисел
// Напишіть функцію filterEvenNumbers, яка приймає масив чисел і повертає новий масив, що містить лише парні числа.

// function filterEvenNumbers(arr) {
//   // Ваша реалізація тут
// }

// Перевірка

const filterEvenNumbers = arrays => {
    let arrNumbers = [];
    for (let array of arrays) {
        if (array % 2 === 0) {
            arrNumbers.push(array)
        }
    }
    return arrNumbers
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // [2, 4]
console.log(filterEvenNumbers([10, 21, 32, 43])); // [10, 32]
console.log(filterEvenNumbers([1, 3, 5, 7])); // []
console.log(filterEvenNumbers([2, 4, 6, 8])); // [2, 4, 6, 8]
console.log(filterEvenNumbers([0, 1, 2, 3, 4, 5])); // [0, 2, 4]
