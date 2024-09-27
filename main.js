import { getData, addNewUser, deleteData, editData } from "./api.js";
import { renderPosts, renderUsers } from "./render.js";
import { iziInfo } from "./izi.js";
import { handleReg } from "./reg.js";

const menuBtn = document.querySelector(".menu");
const menuList = document.querySelector(".modal-overlay");
const openMenu = () => {
  menuList.classList.toggle("is-open");
  regLogWindow.classList.remove("is-open");
};

const regLogBtn = document.querySelector(".reg-log");
const regLogWindow = document.querySelector(".reg-log-overlay");
const openRegWindow = () => {
  if (document.querySelector(".reg-log").textContent === "Log Out") {
    localStorage.removeItem("user");
    document.querySelector(".welcome").textContent = `Hello, Anonymous!`;
    document.querySelector('.reg-log').textContent = "Login"
    document.querySelector(".send-btn").setAttribute("disabled", true);
    document.querySelector("#textarea").setAttribute("disabled", true);
    document.querySelector("#textarea").setAttribute("placeholder", "Need authorization to send messages...");
    iziInfo("Logged out!");
    renderPosts();
    return;
  }
  regLogWindow.classList.toggle("is-open");
  menuList.classList.remove("is-open");
};
document.addEventListener(
  "click",
  (event) => {
    if (
      regLogWindow.classList.contains("is-open") &&
      !regLogWindow.contains(event.target)
    ) {
      regLogWindow.classList.remove("is-open");
    }
    if (
      menuList.classList.contains("is-open") &&
      !menuList.contains(event.target)
    ) {
      menuList.classList.remove("is-open");
    }
  },
  true
);

regLogBtn.addEventListener("click", openRegWindow);

const swapBtn = document.querySelector(".swap-form");
const swapForm = () => {
  document.querySelector(".register").classList.toggle("none");
  document.querySelector(".login").classList.toggle("none");
  if (swapBtn.textContent != "or Login") swapBtn.textContent = "or Login";
  else swapBtn.textContent = "or Register";
};
swapBtn.addEventListener("click", swapForm);
menuBtn.addEventListener("click", openMenu);

export const currentDate = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const year = now.getFullYear();
  document.querySelector(".time").textContent = `Time: ${hours}:${minutes}`;
  return `${hours}:${minutes} (${day}.${month}.${year})`;
};
currentDate();

const sendBtn = document.querySelector(".send");
sendBtn.addEventListener("submit", sendPost);
let msgObj = {};
let msgId;

function sendPost(event) {
  event.preventDefault();
  if (document.querySelector(".send-btn").textContent === "Edit message") {
    msgObj.text = document.querySelector("#textarea").value;
    msgObj.time = `Edited: ${currentDate()}`;
    console.log("msgObj:", msgObj)
    editData('posts', msgId, msgObj)
      .then((response) => {
        renderPosts();
        document.querySelector(".send-btn").textContent = "Send message";
        document.querySelector("#textarea").value = "";
        iziInfo("Message edited!");
      })
      .catch((error) => console.log(error));
    return;
  }
  const textAria = event.currentTarget.elements.textarea.value.trim();
  const userData = JSON.parse(localStorage.getItem("user"));
  const object = {
    time: currentDate(),
    text: textAria,
    sender: userData.name,
  };
  addNewUser("posts", object)
    .then((response) => {
      renderPosts();
      sendBtn.reset();
    })
    .catch((error) => console.log(error));
}

const chatList = document.querySelector('.chat');

function deletePost(event) {
  const messageId = event.target.id;
  if (!event.target.classList.contains('del')) return;
  deleteData('posts', messageId)
    .then((response) => {
      renderPosts();
    })
    .catch((error) => console.log(error));
  renderPosts();
};
chatList.addEventListener('click', deletePost);

async function editPost(event) {
  if (!event.target.classList.contains('edit')) return;
  msgId = event.target.nextElementSibling.id;
  msgObj = { ...await getData(`posts/${msgId}`)}.data ;
  document.querySelector("#textarea").value = msgObj.text;
  document.querySelector(".send-btn").textContent = "Edit message";
};
chatList.addEventListener('click', editPost);