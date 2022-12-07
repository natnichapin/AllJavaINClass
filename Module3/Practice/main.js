import name from './Name.json' assert { type: "json" };
let Count =0
const collection = []
let Div_contianer = document.getElementsByTagName('class')
let Div_name = document.getElementById('Name_class')
let Div_count = document.getElementById('CountAll')
let p_count = document.getElementById('Count')
let test2 = document.body.children[1]



let namelist = document.createElement('ul')
let lis = document.createElement('li')
let lis_test2 = document.createElement('li')
let btn_plus = document.createElement('button') 
btn_plus.setAttribute('class', 'btn')
btn_plus.textContent="ADD"
let ul_test2=document.createElement('ul')

let btn_delete = document.createElement('button')
btn_delete.setAttribute('class', 'btn')
btn_delete.textContent="DELETE" 
Allname();



Div_name.append(namelist)
Div_count.insertBefore(btn_delete,p_count)
Div_count.insertBefore(btn_plus,btn_delete)
p_count.textContent=Count
test2.append(ul_test2)

function Allname(){ 
    return Array.from(name).forEach(element => {
        
      lis.innerHTML+= "<li> " + element['F_name'] +' ' +  element['L_namr'] +"</li>" 
      namelist.append(lis)
        //<h1> + element['F_name'] +  element['L_name']+'  </h1>   )  
        
    });

}
btn_plus.addEventListener('click',()=>{ 
Count++
p_count.textContent= Count
})

btn_delete.addEventListener('click',()=>{ 
    Count--
    p_count.textContent= Count
    })
    
    function addSomthing(details){ 
        collection.push(details)
    }
    function allSomthing(){ 
        collection.forEach(element=>{ 
      lis.innerHTML=`<li> ${element}</li>`  
      ul_test2.append(lis)
        })
    }
  

