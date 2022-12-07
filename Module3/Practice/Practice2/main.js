let collection = ['test0','test1']
let count = 0

let div_all = document.getElementsByClassName('YourList')
// let btn_add = document.createElement('button')
// btn_add.textContent="ADD"

let li = document.createElement('li')
let div_list = document.createElement('div')
div_list.setAttribute("id","DivList")
let classdiv =div_all[0]
classdiv.append(div_list)
//let classdiv4 =classdiv.children[4]
;
//classdiv.append(btn_add)
function Clear(){ 
   collection=['Start']
   count=0
   let ul_list = document.getElementById('ulList')
   ul_list.remove()
}
function addSomthing(details){ 
    collection.push(details)
   allSomthing();
}
function allSomthing(){ 
    if(div_list.children.length!==0){
        
        count++
        let ul_list = document.getElementById('ulList')
        let li_list = document.createElement('li')
        
        let button_Done =document.createElement('button')
        button_Done.textContent="Not Done"
        let button_remove =document.createElement('button')
        button_remove.textContent="REMOVE"
        li_list.textContent=`List ${count} : ${} `
        console.log(ul_list.children[0]);
        li_list.append(button_Done,button_remove)
        ul_list.append(li_list)
       }
    else{ 
        let ul_test2=document.createElement('ul')
        ul_test2.setAttribute("id","ulList")
        
        
        collection.forEach((element)=>{ 
            count++
            let button_Done =document.createElement('button')
            button_Done.textContent="Not Done"
            let button_remove =document.createElement('button')
            button_remove.textContent="REMOVE"
           
            let lio =document.createElement('li')
            lio.innerHTML=`List ${count} : ${element} `
            lio.append(button_Done,button_remove)
        ul_test2.append(lio)
                    })
    div_list.append(ul_test2)
    classdiv.append(div_list)
    }
 }



