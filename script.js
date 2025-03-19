// get the input element
let input = document.querySelector(".input");

// get the add button
let addBtn = document.querySelector(".add");

// add event listener to the add button
addBtn.addEventListener("click", () => {
  // get the value of the input
  let task = input.value;

  // check if the input is not empty
  if (task) {
    // create a new list item
    let li = `<li class="task">
          <div class="left">
            <label class="container">
              <input type="checkbox" onchange="onChange()"/>
              <div class="checkmark"></div>
            </label>
            <h4>${task}</h4>
          </div>
          <button class="Btn" onclick="del()">
            <div class="sign">
              <svg
                viewBox="0 0 16 16"
                class="bi bi-trash3-fill"
                fill="currentColor"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"
                ></path>
              </svg>
            </div>

            <div class="text">Delete</div>
          </button>
        </li>`;

    // get the ul element
    let ul = document.querySelector("ul");

    // add the new list item to the ul
    ul.innerHTML += li;

    // clear the input
    input.value = "";
  }

  // save the list to local storage
  save();
});

// add the task to the list when the enter key is pressed
input.addEventListener("keydown", (e) => {
  // check if the key pressed is the enter key
  if (e.code === "Enter") {
    // get the value of the input
    let task = input.value;

    // check if the input is not empty
    if (task) {
      // create a new list item
      let li = `<li class="task">
          <div class="left">
            <label class="container">
              <input type="checkbox" onchange="onChange()"/>
              <div class="checkmark"></div>
            </label>
            <h4>${task}</h4>
          </div>
          <button class="Btn" onclick="del()">
            <div class="sign">
              <svg
                viewBox="0 0 16 16"
                class="bi bi-trash3-fill"
                fill="currentColor"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"
                ></path>
              </svg>
            </div>

            <div class="text">Delete</div>
          </button>
        </li>`;

      // get the ul element
      let ul = document.querySelector("ul");

      // add the new list item to the ul
      ul.innerHTML += li;

      // clear the input
      input.value = "";
    }
  }

  // save the list to local storage
  save();
});

// delete the task when the delete button is clicked
function del() {
  // get the ul element
  let ul = document.queySelector("ul");

  // add event listener to the ul
  ul.addEventListener("click", (e) => {
    // check if the delete button is clicked
    if (
      e.target.tagName === "SVG" ||
      e.target.className === "text" ||
      e.target.className === "Btn"
    ) {
      // remove the parent element of the delete button
      e.target.parentElement.parentElement.remove();
    }
  });

  // save the list to local storage
  save();
}

// mark the task as completed when the checkbox is checked
function onChange() {
  // get the ul element
  let ul = document.querySelector("ul");

  // add event listener to the ul
  ul.addEventListener("change", (e) => {
    // check if the click event is from the checkbox
    if (e.target.tagName === "INPUT") {
      // toggle the class of the next sibling of the parent element of the checkbox
      e.target.parentElement.nextElementSibling.classList.toggle("completed");
    }
  });

  // save the list to local storage
  save();
}

// save the list to local storage
function save() {
  // remove previous list from local storage
  localStorage.removeItem("list");

  // save the new list to local storage
  localStorage.setItem("list", document.querySelector("ul").innerHTML);
}

// load the list from local storage
function load() {
  // get the list from local storage
  document.querySelector("ul").innerHTML = localStorage.getItem("list");
}

// load the list from local storage when the page loads
window.onload = load()
