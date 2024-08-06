/*Перевірка анаграм
Напишіть функцію areAnagrams, яка приймає два рядки і повертає true, якщо це анаграми (містять однакові символи у різному порядку), і false в іншому випадку.
*//*
function areAnagrams(str1, str2) {
  const stringArray1 = str1.split("").sort();
  const stringArray2 = str2.split("").sort();
  if(stringArray1.length === stringArray2.length) { 
  for (let i = 0; i < stringArray1.length; i++) {
     if (stringArray1[i] === stringArray2[i]) {
    
     } else {
       return false;
     }
    return true;
  }
  } else { 
    return false;
  } 
}

// Перевірка
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world')); // false
console.log(areAnagrams('triangle', 'integral')); // true
console.log(areAnagrams('abc', 'acb')); // true
console.log(areAnagrams('abc', 'abcd')); // false*/
/*
Завдання 4
Напишіть функцію sortEmployeesBySalary, яка відсортовує масив об'єктів за полем salary у порядку зростання.

javascript
Копіювати код*/
/*
const employees1 = [
  { name: 'John', department: 'HR', salary: 5000 },
  { name: 'Jane', department: 'Finance', salary: 6000 },
  { name: 'Jack', department: 'IT', salary: 5500 }
];

const employees2 = [
  { name: 'Anna', department: 'Marketing', salary: 4500 },
  { name: 'Tom', department: 'Sales', salary: 4700 }
];

const sortEmployeesBySalary = (arr) => {
  return arr.toSorted((a, b) => a.salary - b.salary);
  
}
// Перевірка
console.log(sortEmployeesBySalary(employees1));
console.log(sortEmployeesBySalary(employees2));

javascript
Копіювати код*/
/*
Напишіть функцію totalPrice, яка обчислює загальну суму значень поля price для всіх об'єктів в масиві.

javascript
Копіювати код
*/
const products = [
  { product: 'Laptop', price: 1500 },
  { product: 'Phone', price: 600 },
  { product: 'Charger', price: 20 }
];

const totalPrice = (arr) => arr.reduce((total, item) =>
   total += item.price, 0)

// Перевірка
console.log(totalPrice(products)); // 2120