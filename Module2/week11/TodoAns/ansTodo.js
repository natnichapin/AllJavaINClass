const Todo = require('./Todo')
// const todo1=new Todo('online shopping')
// console.log(todo1.getTodo())
// const todo2=new Todo('watch movies')
// console.log(todo2.getTodo())
// const todo3=new Todo('exercises')
// console.log(todo3.getTodo())
// todo3.setDescription('visit mother')
// console.log(todo3.getTodo())

//---ฟังก์ชันจัดการ
function todoManagement(){
    let todos=[]
    function addTodo(desc){
      return todos.push( new Todo(desc))
    }
    function removeTodo(removeId){
       todos= todos.filter(todo=>todo.id!==removeId) //Solution นี้อาจจะไม่ดีเวลาต้องจัดการข้อมูลเยอะๆ
    }
    function findTodo(searchId){
       return todos.find(todo=>todo.id===searchId)
    }
    function getTodos(){return todos}
    return {addTodo, removeTodo, findTodo, getTodos}
}
//without object destructuring
// const  todoList=todoManagement()
// console.log(todoList.addTodo('online learning'))
// console.log(todoList.addTodo('reading books'))
// console.log(todoList.getTodos())
//with object destructuring
const  {addTodo, removeTodo, findTodo, getTodos}=todoManagement()
console.log(addTodo('online learning'))
console.log(addTodo('reading books'))
console.log(addTodo('watch movies'))
console.log(getTodos())
removeTodo(2)
console.log(getTodos())
console.log(findTodo(1))

export {todoManagement}