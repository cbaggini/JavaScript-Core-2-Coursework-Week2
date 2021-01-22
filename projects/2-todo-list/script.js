function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  str = '';
  todos.forEach(el => {
	  str += `<li class="list-group-item d-flex justify-content-between align-items-center">${el.task}
                        <span class="badge bg-primary rounded-pill">
                            <i class="fa fa-check" aria-hidden="true" onclick="done(this)"></i>
                            <i class="fa fa-trash" aria-hidden="true" onclick="deleteItem(this)"></i>
                        </span>
                    </li>`
  });
  list.innerHTML += str;
}

function done (el) {
	if (el.parentElement.parentElement.style.textDecoration === "line-through") {
		el.parentElement.parentElement.style.textDecoration = "none";
	} else {
		el.parentElement.parentElement.style.textDecoration = "line-through";
	}
	
}

function deleteItem (el) {
	el.parentElement.parentElement.remove();
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
   let newTodo = event.target.parentElement.previousElementSibling.firstElementChild;
//   str = `<li class="list-group-item d-flex justify-content-between align-items-center">${newTodo.value}
//                         <span class="badge bg-primary rounded-pill">
//                             <i class="fa fa-check" aria-hidden="true" onclick="done(this)"></i>
//                             <i class="fa fa-trash" aria-hidden="true" onclick="deleteItem(this)"></i>
//                         </span>
// 					</li>`
	let newTodoList = [{task: newTodo.value, completed: false}];
	let list = document.getElementById("todo-list");
	//list.innerHTML += str;
	populateTodoList(newTodoList)
	//list.append(newTodoList);
	newTodo.value = '';
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  let items = document.querySelectorAll(".list-group-item");
  items.forEach(el => {
	  if (el.style.textDecoration === "line-through") {
		  el.remove();
	  }
  })
}
