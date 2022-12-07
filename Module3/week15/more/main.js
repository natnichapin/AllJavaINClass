const inputElement = document.getElementById('searchValue')
console.log(inputElement);

const pElement = document.getElementById('display')

inputElement.addEventListener('keypress',(event)=>{
     if(event.key==='Enter'){ //ดักแค่ตัว Enter
        pElement.textContent+=inputElement.value
     }
})
//dynamic dom
// inputElement.addEventListener('input',()=>{
//     pElement.textContent=inputElement.value //ค่าทั้งหมดในกล่อง
// })