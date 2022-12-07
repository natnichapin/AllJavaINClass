//1. creat <li> element 
//2. ass

// const li = document.createElement('li')
// li.setAttribute('class','developer') 
// li.append("INT202 Server Side I ")
// let a = ['1','2','3','4']
// for(const i of a ){ 
//     li.innerHTML ='<br>'
//     li.textContent=i 
// }
// const rootElement = document.body.children[1]
// const ul = rootElement.children[0]
//ul.appendChild(li)  
//getElementById
const instructors = document.getElementById('instructors')
console.log(instructors.nextElementSibling);

//getElementBytagName //วิธีการ queryNode
const liElementNodes = document.getElementsByTagName('li') //HTML collection (array-like)
console.log(liElementNodes)
console.log(liElementNodes.length) //4
console.log(liElementNodes[0]) // <li class="developer">INT201 Client Side I</li>

//transfrom array-like to array so that we can use use foreach 
Array.from(liElementNodes).forEach((element)=>console.log(element));

//3. getElementsByClassName
const developNodes = document.getElementsByClassName('developer')
console.log(developNodes)
//  <li class="developer">INT201 Client Side I</li>
// <p class="developer">Lect.Pichet Limvajiranan</p>

//NodeList
//1. getElementsByName
const subjectNodes = document.getElementsByName('subject')
console.log(subjectNodes)
// <button name="subject" type="submit" value="HTML">HTML</button>
// <button name="subject" type="submit" value="CSS">CSS</button>

const pNodes = document.querySelectorAll('p')
console.log(pNodes)
pNodes.forEach((element) => console.log(element))
//<p>Lect.Kriengkrai Porkaew</p>
//<p class="developer">Lect.Pichet Limvajiranan</p>
//<p>Lect. Umaporn Supasitthimethee</p>
const pFirstNode = document.querySelector('p')
console.log(pFirstNode)
//<p>Lect.Kriengkrai Porkaew</p>
// const liDevopsNodes = document.querySelectorAll('li.devops')
const liDevopsNodes = document.querySelectorAll('li[class="devops"]')
console.log(liDevopsNodes)
// const divCourseList = document.querySelectorAll('div#courseList')
const divCourseList = document.querySelectorAll('#courseList')
console.log(divCourseList[0])