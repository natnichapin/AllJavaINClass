class Point{
    constructor(x, y){
        this.x=x
        this.y=y
    }
    compare(anotherPoint){
        console.log(`this.x =${this.x}, this.y= ${this.y}, anotherPoint.x =${anotherPoint.x}, anotherPoint.y= ${anotherPoint.y}`)
    }


}
//const กับออบเจคคือ ไม่สามารถ reasign ค่าให้ properties ไม่ได้แล้ว แต่แก้ได้
const p1 = new Point(1,2)
let p2=new Point(4,5)
//p1=p2 //unable to reassign 
p1.x=100
p1.y=50 

p2=p1 //able to reassign //ชี้ที่เดียวกัน
console.log(p1.compare(p2))
console.log(p2.compare(p1))

const per3 = new Object() //สร้างออบเจคปกติ 
//สร้างผ่านคลาสก็อ้างชื่อคลาส
console.log(per3);

console.log(Object.prototype.isPrototypeOf(p1))
console.log(Point.prototype.isPrototypeOf(p1))
let subject={id:1,title:'int201'}
console.log(Object.prototype.isPrototypeOf(p1))
console.log(Point.prototype.isPrototypeOf(subject))