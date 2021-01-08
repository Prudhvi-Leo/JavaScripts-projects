//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


//event Listeners
document.addEventListener('DOMContentLoaded',getTodos);
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
saveLocalTodos(todoInput.value);
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
       a.classList.add("fall");
       a.addEventListener("transitioned",function(){
            a.remove();
       });
       removeLocalTodos(a);

   }
   if(item.classList[0]=='complete-btn'){
       const a = item.parentElement;
            a.classList.toggle("completed")
   }
}

function saveLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos')===null)
    todos = [];
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));
}

function getTodos(){
    let todos;
    if(localStorage.getItem('todos')===null)
    todos = [];
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo) {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        //created li
        const newTodo = document.createElement('li');
        newTodo.innerText =todo;
        
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
    });
}


function  removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos')===null)
    todos = [];
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
        const index = todo.children[0].innerText;
        todos.splice(todos.indexOf(index),1);
        localStorage.setItem('todos',JSON.stringify(todos));
}