//เราสามารถสร้าง object ได้ 3 วิธี 
//1. Object literal 
//2. Object from class
//3. Object Creation 

//Object Value is array
let profile = { id: 123, interests: ["music", "skiing"] };
console.log(profile);
profile.interests[profile.interests?.length - 1] = "reading"; // ถ้าจะอ้างต้องอ้างตั้งแต่ เริ่ม
console.log(profile); //ใช้ ? แค่กับค่าที่จะแสดง

let book = {
  isbn: 123456789,
  title: "JavaScript",
  author: { firstname: "Umaporn", lastname: "Sup" },
}
//Aggregated Object
console.log(book);
book.author.firstname = "Natnicha";
book.author.lastname = "Sirinipatkul"; //null error เพราะไม่มีค่ามารับ 
console.log(book?.author);

let x={book:{name:'PIN'}}
console.log(x?.book?.name);
//this will dynamic follow by Object calling
//ใช้แทน ออบเจคที่เรียนกมันทำงาน
class Polygon {
    constructor(name) {
      this.name = name;
    }
    
  }
  
  const poly1 = new Polygon('pin');
  const poly2 = new Polygon('pum');
  console.log(poly1.name);
  console.log(poly2.name);
  // expected output: "Polygon"