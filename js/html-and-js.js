// Секция 1

const buttonEl = document.querySelector("#text-button");
const textEl = document.querySelector("#text-paragraph");

buttonEl.addEventListener("click", editText);
let textCheck = false;
function editText() {
  if (textCheck) {
    textEl.textContent = "Этот текст можно изменить с помощью кнопки.";
  } else {
    textEl.textContent = "Текст был изменён!";
  }
  textCheck = !textCheck;
}

// Секция 3

const btnEl = document.querySelector('#toggle-button');
const hideTextEl = document.querySelector('#toggle-paragraph');
btnEl.addEventListener('click', () => {
  if (hideTextEl.style.display === 'none') {
    hideTextEl.style.display = 'block'
  } else {
    hideTextEl.style.display = 'none'
  }
});
/*

Секция 4: Изменение стилей
Задача 1: Изменить цвет блока при нажатии на кнопку.
Описание: Когда пользователь нажимает на кнопку, цвет фона блока должен измениться, например, на зеленый.
Подсказка: Используйте style.backgroundColor для изменения цвета фона.

Задача 2: Изменить цвет текста в блоке при двойном клике на нем.
Описание: Когда пользователь дважды щелкает на блок, цвет текста внутри блока должен измениться.
Подсказка: Используйте событие dblclick для отслеживания двойного щелчка.

*/

const boxEl = document.querySelector("#style-box");
const buttonElement = document.querySelector("#style-button");

buttonElement.addEventListener("click", changeColor);
function changeColor() {
  boxEl.style.backgroundColor = "red";
}

boxEl.addEventListener("dblclick", changeText);
function changeText() {
  boxEl.style.color = "violet";
}

