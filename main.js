const menuBtn = document.querySelector(".menu");
const menuList = document.querySelector(".modal-overlay")
const openMenu = () => {
    menuList.classList.toggle("is-open");
    regLogWindow.classList.remove("is-open");

}
menuBtn.addEventListener("click", openMenu);

const time = document.querySelector(".time");
time.textContent = `Time: ${new Date().getHours().toString().padStart(2, '0')}:
${new Date().getMinutes().toString().padStart(2, '0')}`;


const regLogBtn = document.querySelector(".reg-log");
const regLogWindow = document.querySelector(".reg-log-overlay");
const openRegWindow = () => {
    regLogWindow.classList.toggle("is-open");
    menuList.classList.remove("is-open");
}
regLogBtn.addEventListener("click", openRegWindow);

const swapBtn = document.querySelector(".swap-form");

const swapForm = () => {
    document.querySelector(".register").classList.toggle("none");
    document.querySelector(".login").classList.toggle("none");
    if(swapBtn.textContent = "or Register!") swapBtn.textContent = "or Login!";
    else swapBtn.textContent = "or Register!";
}
swapBtn.addEventListener("click", swapForm);