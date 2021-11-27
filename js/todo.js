"use strict";

const addTodo = () => {
  const todo_text = document.getElementById("todo-txt");
  if (!todo_text.value) {
    document.getElementById("er-msg-txt").innerHTML = "Please Enter Some Text!";
  } else {
    if (document.getElementById("my-todos").firstElementChild.tagName == "P") {
      document.getElementById("my-todos").firstElementChild.remove();
    }
    document.getElementById("my-todos").innerHTML += `<div>
    <div class="todos">
        <input type="checkbox" id="box" onchange="striker(this)">
        <p class="todos-txt">${todo_text.value}</p>
        <i id="del-icon" class="fa fa-trash fa-lg" onclick="removeTodos(this)"></i>
    </div>
    <hr>
</div>`;
  }
  todo_text.value = "";
};

const striker = element => {
  if (element.checked) {
    element.setAttribute("checked", "checked");
    element.nextElementSibling.style.textDecoration = "line-through";
  } else {
    element.nextElementSibling.style.textDecoration = "none";
  }
}

const removeTodos = element => {
  element.parentElement.parentElement.remove();
  if (!document.getElementById("my-todos").childElementCount) {
    document.getElementById(
      "my-todos"
    ).innerHTML = `<p id="no-todo-txt">Nothing Added yet!</p>`;
  }
}

const hideErrorMsg = () => {
  document.getElementById("error-msg").firstElementChild.innerHTML = "";
}

document.getElementById("todo-txt").addEventListener("focus", hideErrorMsg);
document.getElementById("add-button").addEventListener("click", addTodo);
document.getElementById("todo-txt").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});