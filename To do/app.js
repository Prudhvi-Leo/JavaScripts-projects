//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


//event Listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
//functions
function addTodo(event){
event.preventDefault();
//created div
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");
//created li
const newTodo = document.createElement('li');
newTodo.innerText =todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);
//completed 
const completedButton = document.createElement('button');
completedButton.innerHTML  = '<i class="fas fa-check-circle"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);
//deleted

const trashButton = document.createElement('button');
trashButton.innerHTML  = '<i class="far fa-trash-alt"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);
//append to list
todoList.appendChild(todoDiv);
todoInput.value = "";
}


function deleteCheck(e){
   const item = e.target;
   if(item.classList[0]=='trash-btn'){
       const a = item.parentElement;
       a.remove();
   }
}