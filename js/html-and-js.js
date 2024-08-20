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

// Секция 6: Вход с логином и паролем
// Задача 1: Проверить, что оба поля заполнены, перед попыткой входа.
// Описание: Если пользователь нажимает на кнопку «Войти», а одно из полей (логин или пароль) пустое, должно появиться сообщение: «Пожалуйста, заполните оба поля!».
// Подсказка: Проверьте значения value обоих полей и используйте if для отображения сообщения, если какое-либо поле пустое.

// Задача 2: Показать сообщение об успешном входе, если логин и пароль введены.
// Описание: Если оба поля заполнены, покажите сообщение: «Успешный вход!».
// Подсказка: После проверки, что оба поля заполнены, измените текст в параграфе #login-message на нужное сообщение.

const loginArea = document.querySelector("#login-field");
const passwordArea = document.querySelector("#password-field");
const buttonForm = document.querySelector("#login-button");
const messageText = document.querySelector("#login-message");

buttonForm.addEventListener("click", feedback);
function feedback() {
    if(!loginArea.value || !passwordArea.value) {
        alert("Пожалуйста, заполните оба поля!");
        return;
    }
    messageText.textContent = "Успешный вход!";
}
const html = [];
for (let i = 1; i <= 10; i++) {
    html.push(`<div style="width: 250px; height: 50px; margin-bottom: 10px; background-color: cyan">Element ${i}<br></div>`);
}
messageText.insertAdjacentHTML("afterend", html.join(""))
