import todo from "./data.js";

const todoContainer = document.querySelector(".todo-list");

const renderList = () => {
  const list = todo
    .map(({ topic, isLearn }) => {
      return `<article class="item">
            <form class="edit-form" method="post">
              <input type="checkbox" class="tick" ${isLearn && "checked"}/>
              <div type="text" class="edit-input">${topic}</div>
            </form>
            <div class="button-container">
              <button class="btn edit-btn"><i class="fas fa-edit"></i></button>
              <button class="btn delete-btn">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          </article>`;
    })
    .join("");
  todoContainer.innerHTML = list;
};

window.addEventListener("DOMContentLoaded", renderList);
