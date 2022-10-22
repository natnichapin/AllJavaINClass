class Todo{ 
    constructor(id,description='none'){
    this.id=id
    this.description=description
    }
    
    getTodo() {
        return  {id:this.id,description:this.description}
    }

    setDescription(newDescription){
        this.description=newDescription 
    }
}

function TodoListManagement(){
let todos = []
    function addTodo(desc){ 
          todos.push(desc) 
          return todos
    }

    function removeTodo(removeId){ 
        return todos=todos.filter(x=>x.id!==removeId)
    }

    function findTodo(searchId){ 
        return todos.find(x=>x.id===searchId) //อาจจะไม่ดี สำหรับข้อมูลขนาดใหญ่
    }

    function getTodos(){ 
        return todos
    }
    return { addTodo,removeTodo,findTodo,getTodos}
}

const obj1 = new Todo (1,'do homeworks')
const obj2 = new Todo (2,'play games')
const obj3 = new Todo (3,'Cleaning')
const obj4 = new Todo (4,'eating')
const {addTodo,removeTodo,findTodo,getTodos} =TodoListManagement()
addTodo(obj1)
addTodo(obj2)
addTodo(obj3)
console.log(getTodos());
console.log("-----------");
removeTodo(2)
console.log(getTodos());
console.log("-----------");
addTodo(obj4)
console.log(findTodo(4));
console.log(getTodos());
