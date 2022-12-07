//สามารถเข้าไปยังเอกสารต่างๆ เพื่อจัดการ node ได้




// insertBefore(newNode, referenceNode)
//1. parent node (query)
// <ul>
const ulTagNames = document.getElementsByTagName('ul')
const ulParentNode = ulTagNames[0]
console.log(ulParentNode)
//2. new node (create)
//  <li class="developer">INT200 Data Structure and Algorithms</li>
const liElement = document.createElement('li')
liElement.setAttribute('class', 'developer')
liElement.textContent = 'INT200 Data Structure and Algorithms'
//3. refer node (query)
//<li class="database">INT205 Database I</li>
const liReferNode = ulParentNode.children[2]
console.log(liReferNode);
//4. insert before refer node
ulParentNode.insertBefore(liElement, liReferNode)




//replaceChild(newChild, oldChild)

//replace <p class="developer">Lect.Pichet Limvajiranan</p>
// with <p>Lect.Saichon Jaiyen</p>
//1. query parent node
const divParentNode = document.getElementById('instructors')
//2. create new node
const pNewNode=document.createElement('p')
pNewNode.textContent='Lect.Saichon Jaiyen'
//3. query old node
const oldnode = divParentNode.children[1]
//4. replce node
divParentNode.replaceChild(pNewNode, oldnode)



//removeChild(child)
//1.query parent node
//2.query delete node
const deleteNode = divParentNode.lastElementChild 
//3.remove node
divParentNode.removeChild(deleteNode)