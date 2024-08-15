// Сортування масиву
// Напишіть функцію sortArrayAsc, яка приймає масив чисел і повертає новий масив, відсортований за зростанням.

// function sortArrayAsc(arr) {
    
//    return arr.slice().sort((a,b) => a - b);

//     }




// Перевірка
// console.log(sortArrayAsc([3, 1, 4, 1, 5])); // [1, 1, 3, 4, 5]
// console.log(sortArrayAsc([10, 2, 7, 3])); // [2, 3, 7, 10]
// console.log(sortArrayAsc([5, 3, 8, 6])); // [3, 5, 6, 8]
// console.log(sortArrayAsc([10, 20, 30])); // [10, 20, 30]
// console.log(sortArrayAsc([50, 10, 20])); // [10, 20, 50]

// Задача 5:
// Умова: Створіть клас BankAccount з приватною властивістю для балансу. Реалізуйте 
// методи deposit та withdraw, які відповідно додають (баланс += сума) та знімають 
// (баланс -= сума) гроші з рахунку, а також метод getBalance, який повертає 
// поточний баланс.

// class BankAccount {
//   #balance;

//   constructor() {
//     this.#balance = 0;
//   }

//   deposit(amount) {
//    return  this.#balance  += amount  ;
//   }

//   withdraw(amount) {
//     if(this.#balance < amount ) {
//         console.log("No money") ;    
//         return;
//     } 
//    this.#balance -= amount;
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// // Приклад використання:
// const account = new BankAccount();
// account.deposit(100);
// console.log(account.getBalance()); // 100
// account.withdraw(50);
// console.log(account.getBalance()); // 50
// account.deposit(1000);
// console.log(account.getBalance()); // 100
// account.withdraw(2000);
// console.log(account.getBalance()); // 50


// Задача 6:
// Умова: Реалізуйте клас User, у якому є приватна властивість password. 
// Реалізуйте методи setPassword, який встановлює пароль, і checkPassword, 
// який перевіряє, чи правильний введений пароль.

class User {
  #password;

  constructor() {
    this.#password = "";
  }

  setPassword(password) {
    this.#password = password;
  }

  checkPassword(password) {
           if(this.#password === password) {
            return true;
           } 
  return false;
  }
}

// Приклад використання:
const user = new User();
user.setPassword('secret');
console.log(user.checkPassword('secret')); // true