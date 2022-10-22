// higher order functions ฟังก์ชัน ที่รับฟังก์ชันเอามาทำงานได้เหมือนตัวแปร 
// funtion :  class citizen
//1 บรรทัด return อัตโนมัติ ถ้าใส่ {} ต้อง return สามารถเขียนได้หลายบรรทัด 
//parameters 2 ตัวขึ้นไปต้องใส่ ()
//Arrow functions เรียก this super method ไม่ได้
//Arrow functions ไม่มีชื่อ "anonymous"
const hello=()=>"HelloWorld"
console.log(hello());