/*Перевірка анаграм
Напишіть функцію areAnagrams, яка приймає два рядки і повертає true, якщо це анаграми (містять однакові символи у різному порядку), і false в іншому випадку.
*/
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
console.log(areAnagrams('abc', 'abcd')); // false
