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
console.log(countEvenNumbers([10, 21, 32, 43])); // 2
console.log(countEvenNumbers([1, 2, 3, 4, 5])); // 2
console.log(countEvenNumbers([1, 3, 5, 7])); // 0
console.log(countEvenNumbers([2, 4, 6, 8])); // 4
console.log(countEvenNumbers([0, 1, 2, 3, 4, 5])); // 3