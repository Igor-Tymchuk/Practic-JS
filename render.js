import { getData } from "./api.js";
import { currentDate } from "./main.js";

export const renderUsers = async () => {
    const users = await getData("users");
    const render = users.data.map((user) => `<li class="reg-user">${user.name}</li>`).join("");
    document.querySelector(".users-div-list").innerHTML = render;
}
renderUsers();
export const renderPosts = async () => {
    const posts = await getData("posts");
    const render = posts.data.map((post) => `      <li class="message">
        <div class="head">
          <p>${post.sender}</p>
          <span>${post.time}</span>
        </div>
        <p class="text">${post.text}</p>
        <div class="control"><a href="" class="edit">EDIT</a><a href="" class="del">DELETE</a></div>
      </li>`).join("");
    document.querySelector(".chat").innerHTML = render;
}
renderPosts();