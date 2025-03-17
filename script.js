let input = document.querySelector(".input");
let addBtn = document.querySelector(".add");
addBtn.addEventListener("click", () => {
  let task = input.value;
  console.log(task);

  if (task) {
    let li = `<li>
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
        </li>`;
    let ul = document.querySelector("ul");
    ul.innerHTML += li;
    input.value = "";
  }
});

let li = document.getElementsByTagName("li");
Array.from(li).forEach((element) => {
    let delBtn = element.querySelector(".Btn");
    
    delBtn.addEventListener("click", () => {
        console.log("delete");
        
        element.remove();
    })
    
})


