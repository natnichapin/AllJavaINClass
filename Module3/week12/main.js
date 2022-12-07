//commonJs-> node.js รู้จัก รันที่ Node ได้ เช่นพวก require , module.exports 
//Es Modules -> use for web browsers
//เปลี่ยนนามสกุล js -> mjs ให้ ใช้ ES ได้ ใน node
//npm init -> เพิ่ม type module ให้รู้จัก module ได้ แต่ได้แค่รู้จัก ถ้าจะเรียกใช้ Dom เป็น component บน Browsers ต้องไป install package เพิ่มเอง


//node ไม่รู้จัก Export import 
import {BookMark} from './lib/bookMarkManagement.js' 
import {Todo} from './lib/Todo.js'
const myBookmark = new BookMark('1-2345-6789',250)
const Todo1 = new Todo("Natnicha")
console.log(Todo1);
console.log(myBookmark);
console.log("hello world");
