//  import { Todo } from './todo.js'
const Todo = require('./todo.js')
function todoManagement() {
  let todos = []
  function addTodo(desc) {
    // return todos.push(new Todo(desc))
    const newTodo = new Todo(desc)
    todos.push(newTodo)
    return newTodo.id
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
    return todos.filter((todo) => todo.done === true).length
  }
  function getNumberOfNotDone() {
    return todos.filter((todo) => todo.done === false).length
  }
  function setItemToDone(doneId) {
    // console.log(getTodos().find((x) => x.id === Number(doneId)));
    // console.log((getTodos().find((x) => x.id === Number(doneId))).setDone());
    // console.log(todos.map((todo) =>todo.done));
     return(getTodos().find((x) => x.id === Number(doneId))).setDone()
  }
  return {
    addTodo,
    removeTodo,
    findTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone,
    setItemToDone
  }
}
//  export { todoManagement }
module.exports = todoManagement
