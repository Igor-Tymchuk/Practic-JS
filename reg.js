import { iziError } from "./izi.js";
import { getData, addNewUser } from "./api.js";

if (localStorage.getItem("user")) {
    const userData = JSON.parse(localStorage.getItem('user'));
    document.querySelector(".welcome").textContent = `Hello, ${userData.name}!`;
    document.querySelector('.reg-log').textContent = "Log Out"
    document.querySelector(".send-btn").removeAttribute("disabled");
    document.querySelector("#textarea").removeAttribute("disabled");
    document.querySelector("#textarea").setAttribute("placeholder", "Input your message...");

}

const regForm = document.querySelector(".register");
export const handleReg = async (event) => {
    event.preventDefault();
    const nickname = event.currentTarget.elements.nickname.value.trim();
    const password = event.currentTarget.elements.password.value;
    const confirmPass = event.currentTarget.elements.confirmPass.value;

    const users = await getData("users");
    const user = users.data.find(user => user.name === nickname);

    if (user) {
        return iziError(`User  with that name "${nickname}" already exists!`);
    }

    if (nickname.length < 3) return iziError('Name must have min 3 symbols!');
    if (password !== confirmPass || password.length < 3) return iziError("Invalid confirm password!")
    const newUser = {
        name: nickname,
        password: password,
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

const logForm = document.querySelector(".login");
const handleLog = async (event) => {
    event.preventDefault();
    const nickname = event.currentTarget.elements.nickname.value.trim();
    const password = event.currentTarget.elements.password.value;
    const users = await getData("users");
    const user = users.data.find(user => user.name.toLowerCase() === nickname.toLowerCase());
    if (!user) return iziError(`User ${nickname} unregistered!`);
    if (user.password === password) {
        const logUser = {
            name: user.name,
            password: password,
        }
        localStorage.setItem('user', JSON.stringify(logUser));
        window.location.reload()
    }
    else return iziError("Wrong password!");
}
logForm.addEventListener("submit", handleLog);

const togglePassword = document.querySelector("#toggle-password");
const passwordInput = document.querySelector("#password-login");

togglePassword.addEventListener("click", function () {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    this.textContent = type === "password" ? "ShowPassword👁️" : "HidePassword🙈";
});