
//selectors (selecting HTML elements based on CSS classes)
const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");  
const filterOption=document.querySelector(".filter-todo");

//event listeners for user interactions
todoButton.addEventListener('click',addTodo);
todoList.addEventListener("click",checkDelete);
filterOption.addEventListener('click',filterTodo);

 

//functions
//adding new item on list
function addTodo (event){

    //preventing default behavior on HTML 
    event.preventDefault();

    //creating list inside div element
    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo=document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //creating complete button 
    const completedButton=document.createElement('button');
    completedButton.innerHTML= '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-button');
    todoDiv.appendChild(completedButton);

    //creating delete button
    const trashButton=document.createElement('button');
    trashButton.innerHTML= '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-button');
    todoDiv.appendChild(trashButton);
    
    todoList.appendChild(todoDiv);

    todoInput.value="";

}

//delete function
function checkDelete(e){
    const item=e.target;


    if(item.classList[0]==="trash-button"){
        const todo=item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
        
    }
    if (item.classList[0]==="complete-button"){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }
}

//function for filtering the options
function filterTodo(e){
    const todos= todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display="flex";
                break;

            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display="flex";
                }else{
                    todo.style.display="none";
                }
                break;

                case "uncompleted":
                    if(!todo.classList.contains("completed")){
                        todo.style.display="flex";
                    }else{
                        todo.style.display="none";
                    }
                    break;


            
        }
    });
}