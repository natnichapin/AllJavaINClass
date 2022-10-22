//2. using new operator to create object
class Point{
    constructor(x,y){
        this.x=x       
         this.y=y    }
    compare(anotherPoint){
        console.log(`this.x =${this.x}, this.y= ${this.y}, anotherPoint.x =${anotherPoint.x}, anotherPoint.y= ${anotherPoint.y}`)
    }
}
const p1=new Point(1,2)
let p2=new Point(4,5)
// p1=p2 //unable to reassign// p1.x=100// p1.y=50// p2=p1 //able to reassignconsole.log(p1.compare(p2))
console.log(p2.compare(p1))