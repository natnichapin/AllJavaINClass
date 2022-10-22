let subject={id:1,title:'int201'}
const lengthSubject = Object.create(subject) //สร้างใหม่โดยอิงจากอันเก่า ซึ่งชี้คนละตำแหน่งกัน 
console.log(lengthSubject);
console.log(lengthSubject.id);
console.log(lengthSubject.title);
lengthSubject.title ='int222'
console.log(lengthSubject.title)
console.log(subject.title)
//ทุกอย่างกำหนดผ่าน requirement 
//prototype base language ถุงเก็บ properties ที่อยู่ในคลาสนี้
//สร้าง object แบบไหน?
//ผ่าน object literral -> Code จะไม่แชร์ เหมาะกับ object ง่ายๆ  
//ผ่าน class (คลุม ให้มีคลาสนี้ที่เดียว แก้ที่จุดเดียว ไม่ต้องตามแก้ทุก โค้ด ทุก version )แชร์ object ->เริ่มเก็บตัวแปรเยอะๆ , เริ่มมีการเก็บฟังก์ชัน
//ผ่าน object creation ->สำหรับเวลาที่ต้องการสร้าง Object ซ้ำๆโดยไม่ต้อง สร้างใหม่เรื่อยๆ

//-----------------------------------------------------------
//literal 
let square1={ 
    side:5,
    
    //area:function(){  ชื่อฟังก์ชันคือชื่อ Property
        area (){
        return this.side*this.side
     } 
}
console.log(square1.side)
console.log(square1.area())


//class 
class square{ 
    constructor(side){ 
        this.side=side
    }
    area(){
        return this.side*this.side
    }
}
const a = new square(5)
const b = new square(3)

console.log(a.side)
console.log(b.side)
console.log(a.area())
console.log(b.area())

//-------------------------------------
//ถ้าต้องการเปรียบเทียบตัวแปร object ต้องเปรียบ key และ value  ไม่ใข้ === เพราะมันจะเปรียบค่า address

class Point{
    constructor(x, y){
        this.x=x
        this.y=y
    }
    compare(anotherPoint){
        return this.x===anotherPoint.x &&    
           this.y===anotherPoint.y
    }
}
const p1=new Point(1,2)
const p2=new Point(1,2) 
console.log(p1.compare(p2)) 
console.log(p1==p2) 
console.log(p1===p2) 

// สอน object.key() ,  object.value()