//UTC เป็นวันที่เวลา กลาง
class person{ 
    constructor(firstname='N/A', lastname='N/A',Date){  
    this.Date= Date.now(); //The static Date.now() method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
    }
}
console.log(typeof person); //เบื้องหลังการเขียนคลาส ก็คือ functions เทียบเท่า function person {}

const p1={id:1,firstname: 'John',lastname: 'Jaidee'} 
console.log(typeof p1);
//Prototype base เก็บหมดเลยว่า ว่าคลาสนั้นมีไร ตัวแปร บลาๆ