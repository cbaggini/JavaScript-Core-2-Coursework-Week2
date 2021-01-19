function todoList(todos) {
  let content = document.getElementById('content');
  let lst = document.createElement('ul');
  todos.forEach(el => {
	  let item = document.createElement('li');
	  item.innerHTML = el.todo;
	  item.addEventListener('click', e => {
		  if (e.target.style.textDecoration === 'line-through') {
			  e.target.style.textDecoration = 'none';
		  } else {
			  e.target.style.textDecoration = 'line-through';
		  }
	  })
	  lst.append(item);
  });
  content.append(lst);
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);