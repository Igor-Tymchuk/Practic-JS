import { getData } from "./api.js";

export const renderUsers = async () => {
  const users = await getData("users");
  const render = users.data.map((user) => `<li class="reg-user">${user.name}</li>`).join("");
  document.querySelector(".users-div-list").innerHTML = render;
}
renderUsers();

export const renderPosts = async () => {
  const posts = await getData("posts");
  const render = posts.data.map((post) =>
    `<li class="message">
        <div class="head">
          <p>${post.sender}</p>
          <span>${post.time}</span>
        </div>
        <p class="text">${post.text}</p>
        <div class="control"><button type="button" class="edit">EDIT</button><button type="button" id="${post.id}" class="del">DELETE</button></div>
      </li>`).join("");
  document.querySelector(".chat").innerHTML = render;

  const allMsgs = document.querySelectorAll(".message");
  for (const msg of allMsgs) {
    const senderName = msg.querySelector("p").textContent;
    const userData = JSON.parse(localStorage.getItem('user'));
    if (senderName !== userData?.name || !userData) msg.querySelector(".control").classList.add("none");
  }
}
renderPosts();
const chatInterval = setInterval(() => {
  renderPosts();
}, 3000);