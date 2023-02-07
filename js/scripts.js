// SELEÇÃO DE ELEMENTOS 
const todoForm =document.querySelector('#todo-form');
const todoInput =document.querySelector('#todo-input');
const todoList =document.querySelector('#todo-list');
const editForm =document.querySelector('#edit-form');
const editInput =document.querySelector('#edit-input');
const cancelEditBtn =document.querySelector('#edit-cancel-btn');
// FUNÇÕES 
const saveTodo = (text)

//EVENTOS
todoForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const inputValeu = todoInput.value 

    if(inputValeu){
       saveTodo(inputValeu)
    }
})