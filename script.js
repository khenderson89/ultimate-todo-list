"use strict";

const todobutton = document.querySelector(".todo");
const input = document.querySelector(".task");

todobutton.addEventListener("click", function () {
  let text = input.value;
  let li = document.createElement("li");
  li.textContent = text;
  document.getElementById("list").appendChild(li);
});
