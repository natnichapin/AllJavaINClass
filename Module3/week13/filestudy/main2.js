//1.create a new Element node "p"
const pNewElementNode = document.createElement('p')



//reduce steps 2+4 to one step 
/*pNewElementNode.setAttribute("paraId",1)
pNewElementNode.style ='color:red'*/
//สร้างแบบไม่ create แต่ผูก คสพ ไปเลย (Build in) ถ้าไม่ได้ผูก ต้องสร้างก่อนนะ 


//reduce step 3+5 to one step
//pNewElementNode.innerHTML="<span style='color:green'>Hello</span>"

//2.create a new attribute named "paraId" 
const paraIdNode = document.createAttribute('paraId') //attribute name 
paraIdNode.value="1" //attribute value //paraId="1" 

//3.create a text node with its value "INT201" 
const newTextNode = document.createTextNode('INT201')//INT201

//4.assign a paraId to <p> element 
pNewElementNode.setAttributeNode(paraIdNode) //<p paraId='1'></p

//5.assign a textnode "INT201" to <p> element 
pNewElementNode.appendChild(newTextNode)//<p paraId='1'>INT201</p>*/

//6. assign <p> element to <div id="myapp">
const divMyAppNode=document.getElementById("myapp")
divMyAppNode.appendChild(pNewElementNode)
console.log(paraIdNode.ownerElement)