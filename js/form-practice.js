// 10. Создание и использование счетчика посещений страницы
// Задача: Создайте счетчик, который сохраняется в localStorage и увеличивается при каждом посещении страницы. Отображайте количество посещений пользователю.
// Совет: Используйте localStorage.getItem() и localStorage.setItem() для отслеживания и обновления счетчика.


const formData = {
    confirm_password:"",
    email:"",
    firstname:"",
    gender:"",
    lastname:"",
    password:"",
    phone: "",
};
const lsCounter = localStorage.getItem("counter");
localStorage.setItem("counter", Number(lsCounter) + 1);

const form = document.querySelector(".registration-form");

if (localStorage.getItem("data")) {
    const reserved = JSON.parse(localStorage.data);
    for (const key in reserved) {
        formData[key] = reserved[key];
        form[key].value = reserved[key];
    }
}

const saveData = (event) => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    formData[name] = value;
    const convert = JSON.stringify(formData);
    localStorage.setItem("data", convert);
}
form.addEventListener("input", saveData);

