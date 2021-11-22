"use strict";

function add() {
  let todo_text = document.getElementById("todo-txt");
  if (todo_text.value == "") {
    document.getElementById("er-msg-txt").innerHTML = "Please Enter Some Text!";
  } else {
    if (document.getElementById("my-todos").firstElementChild.tagName == "P") {
      document.getElementById("my-todos").firstElementChild.remove();
    }
    document.getElementById("my-todos").innerHTML += `<div>
    <div class="todos">
        <input type="checkbox" id="box" onchange="striker(this)">
        <p class="todos-txt">${todo_text.value}</p>
        <i id="del-icon" class="fa fa-trash fa-lg" onclick="remove_todos(this)"></i>
    </div>
    <hr>
</div>`;
  }
  todo_text.value = "";
}

function striker(element) {
  if (element.checked == true) {
    element.nextElementSibling.innerHTML =
      element.nextElementSibling.innerText.strike();
  } else {
    element.nextElementSibling.innerHTML = element.nextElementSibling.innerText;
  }
}

function remove_todos(element) {
  element.parentElement.parentElement.remove();
  if (document.getElementById("my-todos").childElementCount === 0) {
    document.getElementById(
      "my-todos"
    ).innerHTML = `<p id="no-todo-txt">Nothing Added yet!</p>`;
  }
}

function hide_error_msg() {
  let element = document.getElementById("error-msg").firstElementChild;
  element.innerHTML = "";
}

const el = document.getElementById("todo-txt");
el.addEventListener("focus", hide_error_msg);
