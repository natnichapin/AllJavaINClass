//const Todo = require('./todo.js')
import { Todo } from'./todo.js'

function todoManagement() {
  let todos = []
  function addTodo(desc) {
   todos.push(new Todo(desc))
   return todos.map(x=>x.id)[todos.length-1]
    
  }
  function removeTodo(removeId) {
    todos = todos.filter((todo) => todo.id !== removeId)
  }
  function findTodo(searchId) {
    return todos.find((todo) => todo.id === searchId)
  }
  function getTodos() {
    return todos
  }
  function getNumberOfDone() {
    return todos.filter(x=>x.done === true).length
  }
  function getNumberOfNotDone() {
    return todos.filter(x=>x.done === false).length
  }

  return {
    addTodo,
    removeTodo,
    findTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone
  }

}
// const {addTodo, removeTodo, findTodo, getTodos, getNumberOfDone, getNumberOfNotDone} = todoManagement()
// console.log(addTodo('Homework'));
// console.log(addTodo('log'));
// console.log(addTodo('Homework3'));
// console.log(addTodo('Homework3'));



//module.exports = todoManagement 
export { todoManagement }
