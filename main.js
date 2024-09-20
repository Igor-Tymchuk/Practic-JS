const menuBtn = document.querySelector(".menu");
const menuList = document.querySelector(".modal-overlay")
const openMenu = () => {
    menuList.classList.toggle("is-open");
    regLogWindow.classList.remove("is-open");
}


const regLogBtn = document.querySelector(".reg-log");
const regLogWindow = document.querySelector(".reg-log-overlay");
const openRegWindow = () => {
    regLogWindow.classList.toggle("is-open");
    menuList.classList.remove("is-open");
}
document.addEventListener('click', (event) => {
    if (regLogWindow.classList.contains("is-open") && !regLogWindow.contains(event.target)) {
        regLogWindow.classList.remove("is-open");
    }
    if (menuList.classList.contains("is-open") && !menuList.contains(event.target)) {
        menuList.classList.remove("is-open");
    }
}, true);


regLogBtn.addEventListener("click", openRegWindow);

const swapBtn = document.querySelector(".swap-form");
const swapForm = () => {
    document.querySelector(".register").classList.toggle("none");
    document.querySelector(".login").classList.toggle("none");
    if (swapBtn.textContent != "or Login") swapBtn.textContent = "or Login";
    else swapBtn.textContent = "or Register";
}
swapBtn.addEventListener("click", swapForm);
menuBtn.addEventListener("click", openMenu);

const currentDate = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    document.querySelector(".time").textContent = `Time: ${hours}:${minutes}`;
    return `${hours}:${minutes} (${day}:${month}:${year})`;
}
currentDate();



