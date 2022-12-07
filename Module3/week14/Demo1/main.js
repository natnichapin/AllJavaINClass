//const Allul = document.getElementsByTagName('ul')
const ul = document.querySelector('ul')
console.log(ul);
const divGet = document.getElementsByTagName('li')
console.log(divGet[3]);
const insertValue = divGet[3]
const NewName = document.createElement('li')
NewName.textContent="Chananporn Pongsri"
ul.insertBefore(NewName,insertValue)