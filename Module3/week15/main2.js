import {students} from "./data/students.js"
import { lecturers } from "./data/lecturers.js"
const divButton = document.getElementById("buttonPanel")
const studentsButton = divButton.children[0]
const lecturersButton =divButton.children[1]

//ตอนสอบควรใช้ textContent กับข้อความล้วน
//create student handlers function 
//ปุ่มที่ถูกกด จะเก็บ ใน target
//กำหนดไอดี เวลากด.id จะเด้งขึ้น ทำให้เราแยกได้
//ระวัง ทุกค่าที่เป็น Properties จากใน dom เป็น type string
const dataListHandler =(event)=>{ 
    const items =event.target.id==='1'?students:lecturers;
    const ulParentElement=document.querySelector('ul')
    ulParentElement.textContent=''
    for(let i=0; i<items.length; i++){ 
        const liElement = document.createElement('li') //<li></li>
        //แก้เรื่อง properties ไม่จำเป็นต้องเหมือนกัน
        //Gerneric
            for(const key in items[i]){
            liElement.textContent+=`${key}:${items[i][key]}` 
            //มีแค่ = จะเอาแค่ตัวนั้นไม่ต่อกัน ตัวล่าสุด
            //<li>ID:xxx,Name:xxx</li>
            }
        ulParentElement.appendChild(liElement)
    }
}
studentsButton.addEventListener('click',dataListHandler)
lecturersButton.addEventListener('click',dataListHandler)

// const studentHandlers=()=>{ 
//     dataListHandler(students)
// }
// const lecturersHandlers=()=>{ 
//     dataListHandler(lecturers)
// }
// const lecturersHandlers =()=>{ 
//     const ulParentElement =document.querySelector('ul')
//     ulParentElement.textContent=''
//     for(let i=0;i<lecturers.length;i++){ 
//         const liElement =document.createElement('li') 
//         liElement.textContent=`ID:${lecturers[i].id},Name:${lecturers[i].name}`
//         ulParentElement.appendChild(liElement)
//     }
// }


