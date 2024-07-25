// Сортування масиву
// Напишіть функцію sortArrayAsc, яка приймає масив чисел і повертає новий масив, відсортований за зростанням.

function sortArrayAsc(arr) {
    
   return arr.slice().sort((a,b) => a - b);

    }




// Перевірка
console.log(sortArrayAsc([3, 1, 4, 1, 5])); // [1, 1, 3, 4, 5]
console.log(sortArrayAsc([10, 2, 7, 3])); // [2, 3, 7, 10]
console.log(sortArrayAsc([5, 3, 8, 6])); // [3, 5, 6, 8]
console.log(sortArrayAsc([10, 20, 30])); // [10, 20, 30]
console.log(sortArrayAsc([50, 10, 20])); // [10, 20, 50]
