// import { addTodoHandler, notDoneButtonHandler,removeButtonHandler } from './eventHandler/eventController.js'




// const addButton = document.getElementById('addBtn')
//   addButton.addEventListener('click', addTodoHandler())
 
const addButton = document.getElementById('addBtn')
addButton.addEventListener('click', (event) => addTodoHandler(event))

const inputTodo = document.querySelector('input')
inputTodo.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') addTodoHandler(event)
})