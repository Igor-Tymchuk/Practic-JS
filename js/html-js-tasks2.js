// 1. Зміна тексту при натисканні
// Створи HTML-кнопку. Напиши скрипт, який змінюватиме текст кнопки на "Натиснуто!" після кліку на неї.
const btnTaskOne = document.querySelector("#changeTextBtn");
let counter = 0;
const pushFirstTask = (event) => {
    counter += 1
    event.target.textContent = "Натиснуто! " + counter;}
btnTaskOne.addEventListener("click", pushFirstTask);

// 2. Рахунок кліків
// Створи кнопку та елемент span, який показує кількість кліків на кнопку. Збільшуй рахунок кліків при кожному натисканні на кнопку.
const btnTaskTwo = document.querySelector("#clickCounterBtn");
const spanTaskTwo = document.querySelector("#clickCount");
let counterTwo = 0;
const pushTwoTask = (event) => {
    counterTwo += 1;
    spanTaskTwo.textContent = counterTwo;
}
btnTaskTwo.addEventListener("click", pushTwoTask);
