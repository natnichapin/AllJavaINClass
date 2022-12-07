import {
  addTodoHandler,
  beforeUnloadHandler,
  loadHandler
} from './eventHandler/eventController.js'
//วินโดว์โหลด จะทำงาน 
window.addEventListener('load', () => {
  loadHandler()
})
// ก่อนจะปิด 
window.addEventListener('beforeunload', (event) => {
  beforeUnloadHandler(event)
})
//click
const addButton = document.getElementById('addBtn')
addButton.addEventListener('click', () => addTodoHandler())

//Enter
const inputTodo = document.querySelector('input')
inputTodo.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') addTodoHandler()
})
