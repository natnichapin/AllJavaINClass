function todoListUI(){
    function showTodoItem(newId,newDescription){ 
        const divListtodo = document.getElementById("listTodo")
        const divItem = document.createElement('div')
        divItem.setAttribute("class","todoItem")
        divItem.setAttribute("id",newId)
        const Ptag = document.createElement('p')
        Ptag.textContent=newDescription
        const button1 = document.createElement('button')
        button1.textContent="Not done"
        const button2 = document.createElement('button')
        button2.textContent="remove"
        divItem.appendChild(Ptag)
        divItem.appendChild(button1)
        divItem.appendChild(button2)
        divListtodo.appendChild(divItem)

    }

    function showNumberOfDone(numberOfDone){ 
        const p1= document.getElementById("done")
        p1.textContent=`Number of Done:${numberOfDone}`
    }

    function showNumberOfNotDone(numberOfNotDone){ 
        const p2= document.getElementById("notDone")
        p2.textContent=`Number of Not Done:${numberOfNotDone}`
        }
        return {showTodoItem,showNumberOfDone,showNumberOfNotDone}
}
export {todoListUI}