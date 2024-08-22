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

//task 3 3. Зміна кольору фону при наведенні
// Створи елемент div, і напиши код, який змінюватиме колір фону div при наведенні на нього миші. Після того, як миша залишає елемент, фон має повертатися до початкового стану.

const divThree = document.querySelector('#colorBox');


const callback = (event) => {
    divThree.style.backgroundColor = "orange";
    
}

const changeColor = (event) => {
    event.target.style = `
    background-color:#e75b1e;
    border-radius: 25px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 2.1);
    transition: background-color 3000ms ease `
}

const callbackTwo = (event) => {
    divThree.style.backgroundColor = "lightblue";

}
divThree.addEventListener("mouseover", changeColor);
// divThree.addEventListener("mouseover", callback);
divThree.addEventListener("mouseout", callbackTwo);

// 4. Валідація форми
// Створи просту HTML-форму з полями для введення імені та електронної пошти. Напиши скрипт, який перевірятиме, чи поля не порожні після натискання кнопки "Відправити". Якщо поле порожнє — показуй повідомлення про помилку.

const formTwo = document.querySelector("#myForm");
const error = document.querySelector('#formError');



// const send = document.querySelector("[button type="submit"]");

const handleValid = (event) => {
    event.preventDefault();
    const form = event.target;
    const inputValue = form.elements.nameInput.value;
    const inputValue2 = form.elements.emailInput.value;
    if (!inputValue || !inputValue2 ) {
        error.textContent = "Fill the gaps!"
        error.style.color = "red";

    } else {
        error.style.color = "green";
        error.textContent = "You are welcome!";

    }
}
formTwo.addEventListener('submit', handleValid);

/*5. Динамічне додавання елементів
Створи список (ul). Додай кнопку, при натисканні на яку до списку буде додаватися новий елемент li з текстом "Новий елемент".

6. Приховування та відображення елементів
Створи текстовий елемент div та кнопку. Напиши скрипт, який приховуватиме div при натисканні на кнопку. Якщо div приховано, кнопка повинна змінювати текст на "Показати" і навпаки.
*/

const itemList = document.querySelector('#itemList');
const btnPush = document.querySelector('#addItemBtn');

function addNewElement() {
    /*
    const item = document.createElement('li');
    item.textContent = 'New Element';
    itemList.append(item);*/

    itemList.insertAdjacentHTML("beforeend",
        "<li>New Element</li>"
    )
}


btnPush.addEventListener('click', addNewElement);