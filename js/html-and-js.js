// задача 1.1

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
