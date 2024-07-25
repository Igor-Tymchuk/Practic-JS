// // 2. Сумування елементів масиву
// // Напишіть функцію sumElements, яка приймає масив чисел і повертає їхню суму. Використовуйте метод reduce.

// function sumElements(arr) {
//     let sumOfArr = 0;

//     for (const number of arr) {
//         sumOfArr += number;
//     }
//     return sumOfArr;
// }

// // Перевірка
// console.log(sumElements([1, 2, 3, 4, 5])); // 15
// console.log(sumElements([10, 20, 30])); // 60
// console.log(sumElements([-1, -2, -3, -4])); // -10
// console.log(sumElements([100, 200, 300])); // 600
// console.log(sumElements([0, 0, 0, 0])); // 0

// 3. Перетворення масиву
// Напишіть функцію mapToSquares, яка приймає масив чисел і повертає новий масив, де кожне число піднесено до квадрату.

function mapToSquares(arr) {
    let squaresArr = [];

    for (const number of arr) {
        squaresArr.push(number * number);
    }
    return squaresArr;
}

// Перевірка
console.log(mapToSquares([1, 2, 3])); // [1, 4, 9]
console.log(mapToSquares([4, 5, 6])); // [16, 25, 36]
console.log(mapToSquares([0, 1, 2])); // [0, 1, 4]
console.log(mapToSquares([7, 8, 9])); // [49, 64, 81]
console.log(mapToSquares([10, 20])); // [100, 400]
