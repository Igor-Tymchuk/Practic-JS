# Practice-JS
1. Фільтрація парних чисел
Напишіть функцію filterEvenNumbers, яка приймає масив чисел і повертає новий масив, що містить лише парні числа.

function filterEvenNumbers(arr) {
  // Ваша реалізація тут
}

// Перевірка
console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // [2, 4]
console.log(filterEvenNumbers([10, 21, 32, 43])); // [10, 32]
console.log(filterEvenNumbers([1, 3, 5, 7])); // []
console.log(filterEvenNumbers([2, 4, 6, 8])); // [2, 4, 6, 8]
console.log(filterEvenNumbers([0, 1, 2, 3, 4, 5])); // [0, 2, 4]

2. Сумування елементів масиву
Напишіть функцію sumElements, яка приймає масив чисел і повертає їхню суму. Використовуйте метод reduce.

function sumElements(arr) {
  // Ваша реалізація тут
}

// Перевірка
console.log(sumElements([1, 2, 3, 4, 5])); // 15
console.log(sumElements([10, 20, 30])); // 60
console.log(sumElements([-1, -2, -3, -4])); // -10
console.log(sumElements([100, 200, 300])); // 600
console.log(sumElements([0, 0, 0, 0])); // 0

3. Перетворення масиву
Напишіть функцію mapToSquares, яка приймає масив чисел і повертає новий масив, де кожне число піднесено до квадрату.

function mapToSquares(arr) {
  // Ваша реалізація тут
}

// Перевірка
console.log(mapToSquares([1, 2, 3])); // [1, 4, 9]
console.log(mapToSquares([4, 5, 6])); // [16, 25, 36]
console.log(mapToSquares([0, 1, 2])); // [0, 1, 4]
console.log(mapToSquares([7, 8, 9])); // [49, 64, 81]
console.log(mapToSquares([10, 20])); // [100, 400]

4. Перевірка анаграм
Напишіть функцію areAnagrams, яка приймає два рядки і повертає true, якщо це анаграми (містять однакові символи у різному порядку), і false в іншому випадку.

function areAnagrams(str1, str2) {
  // Ваша реалізація тут
}

// Перевірка
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world')); // false
console.log(areAnagrams('triangle', 'integral')); // true
console.log(areAnagrams('abc', 'acb')); // true
console.log(areAnagrams('abc', 'abcd')); // false

5. Кількість парних чисел в масиві
Напишіть функцію countEvenNumbers, яка приймає масив чисел і повертає кількість парних чисел у масиві.

function countEvenNumbers(arr) {
  // Ваша реалізація тут
}

// Перевірка
console.log(countEvenNumbers([1, 2, 3, 4, 5])); // 2
console.log(countEvenNumbers([10, 21, 32, 43])); // 2
console.log(countEvenNumbers([1, 3, 5, 7])); // 0
console.log(countEvenNumbers([2, 4, 6, 8])); // 4
console.log(countEvenNumbers([0, 1, 2, 3, 4, 5])); // 3

6. Сортування масиву
Напишіть функцію sortArrayAsc, яка приймає масив чисел і повертає новий масив, відсортований за зростанням.

function sortArrayAsc(arr) {
  // Ваша реалізація тут
}

// Перевірка
console.log(sortArrayAsc([3, 1, 4, 1, 5])); // [1, 1, 3, 4, 5]
console.log(sortArrayAsc([10, 2, 7, 3])); // [2, 3, 7, 10]
console.log(sortArrayAsc([5, 3, 8, 6])); // [3, 5, 6, 8]
console.log(sortArrayAsc([10, 20, 30])); // [10, 20, 30]
console.log(sortArrayAsc([50, 10, 20])); // [10, 20, 50]

7. Унікальні значення
Напишіть функцію uniqueValues, яка приймає масив і повертає новий масив, що містить лише унікальні значення з початкового масиву.

function uniqueValues(arr) {
  // Ваша реалізація тут
}

// Перевірка
console.log(uniqueValues([1, 2, 2, 3, 4])); // [1, 2, 3, 4]
console.log(uniqueValues([10, 20, 10, 30])); // [10, 20, 30]
console.log(uniqueValues([5, 5, 5, 5])); // [5]
console.log(uniqueValues([7, 8, 8, 9])); // [7, 8, 9]
console.log(uniqueValues([])); // []

8. Подвоєння чисел
Напишіть функцію doubleNumbers, яка приймає масив чисел і повертає новий масив, де кожне число подвоєно.

function doubleNumbers(arr) {
  // Ваша реалізація тут
}

// Перевірка
console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]
console.log(doubleNumbers([4, 5, 6])); // [8, 10, 12]
console.log(doubleNumbers([0, 1, 2])); // [0, 2, 4]
console.log(doubleNumbers([7, 8, 9])); // [14, 16, 18]
console.log(doubleNumbers([10, 20])); // [20, 40]

9. Знаходження мінімального значення
Напишіть функцію findMin, яка приймає масив чисел і повертає найменше число в масиві.

function findMin(arr) {
  // Ваша реалізація тут
}

// Перевірка
console.log(findMin([1, 2, 3, 4, 5])); // 1
console.log(findMin([10, 20, 30])); // 10
console.log(findMin([-1, -2, -3, -4])); // -4
console.log(findMin([100, 200, 300])); // 100
console.log(findMin([0, 0, 0, 0])); // 0

10. Перетворення в рядки
Напишіть функцію toStringArray, яка приймає масив чисел і повертає новий масив, де кожне число перетворено в рядок.

function toStringArray(arr) {
  // Ваша реалізація тут
}

// Перевірка
console.log(toStringArray([1, 2, 3])); // ['1', '2', '3']
console.log(toStringArray([4, 5, 6])); // ['4', '5', '6']
console.log(toStringArray([0, 1, 2])); // ['0', '1', '2']
console.log(toStringArray([7, 8, 9])); // ['7', '8', '9']
console.log(toStringArray([10, 20])); // ['10', '20']

11. Перевірка простого числа
Напишіть функцію isPrime, яка приймає число і повертає true, якщо число є простим, і false в іншому випадку.

function isPrime(num) {
  // Ваша реалізація тут
}

// Перевірка
console.log(isPrime(2)); // true
console.log(isPrime(4)); // false
console.log(isPrime(13)); // true
console.log(isPrime(20)); // false
console.log(isPrime(29)); // true

12. Класичний алгоритм пошуку (Binary Search)
Напишіть функцію binarySearch, яка приймає відсортований масив чисел і число, і повертає індекс числа в масиві або -1, якщо число не знайдено.

function binarySearch(arr, target) {
  // Ваша реалізація тут
}

// Перевірка
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([10, 20, 30], 25)); // -1
console.log(binarySearch([1, 2, 3, 4, 5], 1)); // 0
console.log(binarySearch([100, 200, 300], 300)); // 2
console.log(binarySearch([0, 0, 0, 0], 0)); // 0

13. Факторіал числа
Напишіть функцію factorial, яка приймає число і повертає його факторіал (n!).

function factorial(n) {
  // Ваша реалізація тут
}

// Перевірка
console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
console.log(factorial(3)); // 6
console.log(factorial(2)); // 2
console.log(factorial(1)); // 1

14. Фібоначчі
Напишіть функцію fibonacci, яка приймає число і повертає n-й елемент послідовності Фібоначчі.

function fibonacci(n) {
  // Ваша реалізація тут
}

// Перевірка
console.log(fibonacci(5)); // 5
console.log(fibonacci(7)); // 13
console.log(fibonacci(10)); // 55
console.log(fibonacci(2)); // 1
console.log(fibonacci(0)); // 0

15. Середнє значення масиву
Напишіть функцію average, яка приймає масив чисел і повертає середнє значення всіх чисел в масиві.

function average(arr) {
  // Ваша реалізація тут
}

// Перевірка
console.log(average([1, 2, 3, 4, 5])); // 3
console.log(average([10, 20, 30])); // 20
console.log(average([-1, -2, -3, -4])); // -2.5
console.log(average([100, 200, 300])); // 200
console.log(average([0, 0, 0, 0])); // 0

16. Реверс масиву
Напишіть функцію reverseArray, яка приймає масив і повертає новий масив, що є реверсованою версією початкового масиву.

function reverseArray(arr) {
  // Ваша реалізація тут
}

// Перевірка
console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
console.log(reverseArray([4, 5, 6])); // [6, 5, 4]
console.log(reverseArray([0, 1, 2])); // [2, 1, 0]
console.log(reverseArray([7, 8, 9])); // [9, 8, 7]
console.log(reverseArray([10, 20])); // [20, 10]

17. Перевірка високосного року
Напишіть функцію isLeapYear, яка приймає рік і повертає true, якщо рік є високосним, і false в іншому випадку.

function isLeapYear(year) {
  // Ваша реалізація тут
}

// Перевірка
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2023)); // false
console.log(isLeapYear(2016)); // true

18. Перевірка парності
Напишіть функцію isEven, яка приймає число і повертає true, якщо число парне, і false в іншому випадку.

function isEven(num) {
  // Ваша реалізація тут
}

// Перевірка
console.log(isEven(2)); // true
console.log(isEven(3)); // false
console.log(isEven(4)); // true
console.log(isEven(7)); // false
console.log(isEven(10)); // true

19. Пошук в масиві
Напишіть функцію findInArray, яка приймає масив і число, і повертає індекс першого входження числа в масиві. Якщо число не знайдено, поверніть -1.

function findInArray(arr, num) {
  // Ваша реалізація тут
}

// Перевірка
console.log(findInArray([1, 2, 3, 4, 5], 3)); // 2
console.log(findInArray([10, 20, 30], 25)); // -1
console.log(findInArray([-1, -2, -3, -4], -3)); // 2
console.log(findInArray([100, 200, 300], 400)); // -1
console.log(findInArray([0, 0, 0, 0], 0)); // 0

20. Класичний алгоритм сортування (Bubble Sort)
Напишіть функцію bubbleSort, яка приймає масив чисел і повертає новий масив, відсортований за зростанням за допомогою алгоритму сортування бульбашкою.

function bubbleSort(arr) {
  // Ваша реалізація тут
}

// Перевірка
console.log(bubbleSort([3, 1, 4, 1, 5])); // [1, 1, 3, 4, 5]
console.log(bubbleSort([10, 2, 7, 3])); // [2, 3, 7, 10]
console.log(bubbleSort([5, 3, 8, 6])); // [3, 5, 6, 8]
console.log(bubbleSort([10, 20, 30])); // [10, 20, 30]
console.log(bubbleSort([50, 10, 20])); // [10, 20, 50]
