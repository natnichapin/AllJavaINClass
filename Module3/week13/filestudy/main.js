//สำคัญ!! ต้องบอก currentNode มาก่อนนน 

//root Node or document node 
const rootNode = window.document
console.log(rootNode); 
console.log(rootNode.nodeType);
console.log(rootNode.nodeName);
console.log(rootNode.nodeValue);

//root Element or document element 
const rootElement = document.documentElement 
console.log(rootElement); 
console.log(rootElement.nodeType);
console.log(rootElement.nodeName);
console.log(rootElement.nodeValue);

//child Node of html node 
//1.all types of children 
const htmlChild = rootElement.childNodes 
console.log(htmlChild); 
//2.only elements type of children 
const htmlElementChildren = rootElement.children 
console.log(htmlElementChildren); 
console.log(htmlElementChildren.length);

//document.body , document.head 
//!! ระวัง children(ไม่เอา text เอาแค่ element,tag) กับ childnodes 
const bodyNode = document.body 
const divNode = bodyNode.children[1] 
console.log(divNode); 
console.log(divNode.getAttribute("id")); 

//query node by using getElementById() 
const divByIdNode = document.getElementById("myapp") //ต้องเป็น id มีตัวเดียว
console.log(divByIdNode);