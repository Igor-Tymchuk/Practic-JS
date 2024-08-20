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



