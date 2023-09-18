
//selectors
const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');  


//event listeners
todoButton.addEventListener('click',addTodo);

//functions
function addTodo (event){
    event.preventDefault();

    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo=document.createElement("li");
    newTodo.innerText='What';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completedButton=document.createElement('button');
    completedButton.innerHTML= <i class="fas fa-check"></i>;
    completedButton.classList.add('complete button');
    todoDiv.appendChild(completedButton);


}