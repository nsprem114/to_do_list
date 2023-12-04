/** @format */

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add Item
function addTask() {
  if (inputBox.value === "") {
    alert("This can't be empty");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
// Delete Items

listContainer.addEventListener(
  "click",
  (e) => {
    if (event.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);

// Save Data into Local Storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
