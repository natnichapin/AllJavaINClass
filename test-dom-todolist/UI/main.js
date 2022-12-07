import { todoManagement } from '../lib/todoManagement.js'
import { todoListUI } from'./todoListUI.js'

const { showTodoItem, showNumberOfDone, showNumberOfNotDone } = todoListUI()
const {addTodo,removeTodo,findTodo,getTodos,getNumberOfDone,getNumberOfNotDone} = todoManagement()
  const id1 = addTodo('Watch Movies')
    showTodoItem(id1, 'Watch Movies')
  const id2 = addTodo('Visit Grandmother')
  showTodoItem(id2, 'Visit Grandmother')
  const id3 = addTodo('Coding')
  showTodoItem(id3, 'Coding')
  const ListTodo = document.getElementById("listTodo")
  console.log(ListTodo.childNodes);
 /*showTodoItem(addTodo("Watch Movies"),"Watch Movies")
  showTodoItem(addTodo("Visit Grandmother"),"Visit Grandmother")
  showTodoItem(addTodo("Coding"),"Coding")*/
  showNumberOfDone(getNumberOfDone())
  showNumberOfNotDone(getNumberOfNotDone())
