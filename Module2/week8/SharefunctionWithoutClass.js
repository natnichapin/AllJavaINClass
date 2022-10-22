function square (side){ 
   this.side=side
}
function getArea (side){ 
   return  this.side*this.side
}

const sq1=new square(3) // new function แต่จริงๆ สร้าง Class ไปเลยดีกว่า
console.log(sq1); 
sq1.area=getArea //เรียกฟังก์ชัน 2 ตัว ทำงานให้ เลยทำงานลักษณะคล้ายๆ class 
console.log(sq1.area());

const sq2=new square(5) // new function แต่จริงๆ สร้าง Class ไปเลยดีกว่า
console.log(sq2); 
sq2.area=getArea 
console.log(sq2.area());
