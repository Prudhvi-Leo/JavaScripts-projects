//selectors
const todoInput = document.querySelector(".todo-input");
const todobutton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");


//event Listeners
todobutton.addEventListener('click',addTodo);

//functions
function addTodo(event){
event.preventDefault();
}