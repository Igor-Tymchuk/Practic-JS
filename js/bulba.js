//  Завдання 2: Підрахунок елементів з певною властивістю
// Напишіть функцію countByProperty, яка приймає масив об'єктів та значення властивості, та повертає кількість об'єктів, що містять це значення.

let users = [
  { id: 1, name: "John", role: "admin" },
  { id: 2, name: "Jane", role: "user" },
  { id: 3, name: "Mike", role: "user" },
  { id: 4, name: "Sara", role: "admin" },
  { id: 5, name: "Mike", role: "user" },
  { id: 6, name: "Sara", role: "admin" },
];

function countByProperty(array, property, value) {
  let counter = 0;
  for (const item of array) {
    if (item[property] === value) {
      // console.log(item[property]);
      counter += 1;
    }
  }
  return counter;
}

console.log(countByProperty(users, "role", "user"));
