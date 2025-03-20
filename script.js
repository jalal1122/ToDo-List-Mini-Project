// get the input element
let input = document.querySelector(".input");

// get the add button
let addBtn = document.querySelector(".add");

// get the ul element
let ul = document.querySelector("ul");

// add event listener to the add button
function addTask(task) {
  // check if the input is not empty
  if (!task) return;

  // Create list item
  const li = document.createElement("li");

  // Add class to the list item
  li.classList.add("task");

  // Add the task to the list item
  li.innerHTML = `
    <div class="left">
      <label class="container">
        <input type="checkbox" />
        <div class="checkmark"></div>
      </label>
      <h4>${task}</h4>
    </div>
    <button class="Btn">
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
  `;

  // Append to the list
  ul.appendChild(li);

  // clear the input
  input.value = "";

  // save the list to local storage
  save();
}

// add the task to the list when the enter key is pressed
input.addEventListener("keydown", (e) => {
  // check if the key pressed is the enter key
  if (e.code === "Enter") {
    addTask(input.value);
  }
});

// Event delegation for delete and checkbox actions
ul.addEventListener("click", (e) => {
  if (e.target.closest(".Btn")) {
    e.target.closest("li").remove();
    save();
  } else if (e.target.type === "checkbox") {
    const taskText = e.target.closest(".left").querySelector("h4");
    taskText.style.textDecoration = e.target.checked ? "line-through" : "none";
    save();
  }
});

// Add task on button click
addBtn.addEventListener("click", () => addTask(input.value));

// save the list to local storage
function save() {
  localStorage.setItem("list", ul.innerHTML);
}

// load the list from local storage
function load() {
  const savedList = localStorage.getItem("list");
  if (savedList) {
    ul.innerHTML = savedList;
  }

  // Reinitialize Sortable after loading tasks
  initializeSortable();
}

// Initialize Sortable
function initializeSortable() {
  new Sortable(ul, {
    animation: 150,
    ghostClass: "ghost",
    onEnd: () => {
      save(); // Save the new order to local storage after sorting
    },
  });
}

// load the list from local storage when the page loads
load();
initializeSortable();
