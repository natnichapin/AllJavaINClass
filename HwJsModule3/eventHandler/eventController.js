//  import { todoManagement } from '../lib/todoManagement.js'
//  import { todoUserInterface } from '../UI/todoList.js'
//  const { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } =todoUserInterface()

// const {
//   addTodo,
//   removeTodo,
//   findTodo,
//   getTodos,
//   getNumberOfDone,
//   getNumberOfNotDone,
//   setItemToDone,
//   loadTodos
// } = todoManagement()

const todoManagement = require('../lib/todoManagement.js')
const todoList = require('../UI/todoList.js')

const { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } =
  todoList()
const {
  addTodo,
  removeTodo,
  findTodo,
  getTodos,
  getNumberOfDone,
  getNumberOfNotDone,
  setItemToDone,
  loadTodos
} = todoManagement()

const addTodoHandler = (event) => {
    event.preventDefault()
    const inputAll = document.querySelector('input')
    const isValidInput = inputAll.value.trim().length !== 0 ?true : false
    if(isValidInput) {
      const todoId = addTodo(inputAll.value) 
      showTodoItem(todoId,inputAll.value)
      addButtonHandler(todoId)
      showNumberOfDone(getNumberOfDone())
      showNumberOfNotDone(getNumberOfNotDone())
   
    } 
    else{
      alert("Please enter value !!!")
 
     }
   
  //  if(isValidInput){
  //   console.log(inputAll.value);
  //      let id =addTodo(inputAll.value)
  //  addButtonHandler(id)
  // showNumberOfDone(getNumberOfDone())
  //   showNumberOfNotDone(getNumberOfNotDone())
  //  const listTodo = document.getElementById("listTodo")
  //  listTodo.textContent=''
  //     for(let i = 0; i <getTodos().length; i++) {
  //       let Todo = getTodos()[i]
  //       showTodoItem(Todo['id'],Todo['description'])
  //     } 
  //   }
    
  
}
const addButtonHandler =(todoId)=>{ //สร้าง Event ต่างหาก
  document.getElementById(todoId).children[1].addEventListener('click',notDoneButtonHandler)
  document.getElementById(todoId).children[2].addEventListener('click',removeButtonHandler)
  document.querySelector('input').value = ''
}

const notDoneButtonHandler = (event) => {
const doneButton = event.target
setItemToDone(doneButton.parentElement.id)
doneButton.style = 'color: white;background-color:green;'
doneButton.textContent ='Done'
showNumberOfDone(getNumberOfDone())
showNumberOfNotDone(getNumberOfNotDone())
    
    
  
}

const removeButtonHandler = (event) => {

  const removeButton = event.target
  removeTodo(Number(removeButton.parentElement.id))
  removeTodoItem(removeButton.parentElement.id)
  showNumberOfDone(getNumberOfDone())
showNumberOfNotDone(getNumberOfNotDone())
  }
  




// export {
//   addTodoHandler,
//   notDoneButtonHandler,
//   removeButtonHandler,
// }

module.exports = {
  addTodoHandler,
  notDoneButtonHandler,
  removeButtonHandler
}
