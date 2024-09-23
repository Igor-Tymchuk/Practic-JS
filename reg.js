import { iziError } from "./izi.js";
import { addNewUser } from "./api.js";

if (localStorage.getItem("user")) {
    const userData = JSON.parse(localStorage.getItem('user'));
    document.querySelector(".welcome").textContent = `Hello, ${userData.name}`;
    document.querySelector('.reg-log').textContent = "Log Out"
}

const regForm = document.querySelector(".register");
export const handleReg = (event) => {
    event.preventDefault();
    const nickname = event.currentTarget.elements.nickname.value.trim();
    const password = event.currentTarget.elements.password.value;
    const confirmPass = event.currentTarget.elements.confirmPass.value;

    if (nickname.length < 3) return iziError('Name must have min 3 symbols!');
    if (password !== confirmPass || password.length < 3) return iziError("Invalid confirm password!")
    const newUser = {
        name: nickname,
        password: password,
        posts: 0,
    }
    addNewUser("users/", newUser)
        .then((response) => {
            console.log("response:", response)
            localStorage.setItem('user', JSON.stringify(response));
            window.location.reload()
        })
        .catch((error) => console.log(error));
}
regForm.addEventListener("submit", handleReg);