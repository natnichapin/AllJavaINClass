class Person { 
    constructor(firstname='N/A',lastname='N/A',dateOfBirth= new Date(Date.now()) ) {
    this.firstname = firstname; 
    this.lastname = lastname;
     this.dateOfBirth = new Date(dateOfBirth) 
    }
    getFullName(){ 
        return this.firstname + ' ' + this.lastname
    }
    getAge(){ 
         // '['+this.dateOfBirth.getDate() + '-' + this.dateOfBirth.getMonth() + '-' + this.dateOfBirth.getFullYear()+']';
                const diff_date =    new  Date(Date.now()-this.dateOfBirth.getTime()) //ถูกคำนวนในฐานของ 1970
                return diff_date.getUTCFullYear()- 1970 + ' ///// diff_date is ///// ' + diff_date.getUTCFullYear() //ลบ 1970 เพราะเป็นจุดเริ่มต้นนับ 1 ของ millisecond
    }


    isEqual(anotherPerson){
        //return this.getFullName()===anotherPerson.getFullName() //ห้ามเอาออบเจคมา === นอกนั้นทำได้
        return this.firstname?.toLowerCase()===anotherPerson?.firstname.toLowerCase()&&this.lastname?.toLowerCase()===anotherPerson?.lastname.toLowerCase()
    }
    /*toString(){
        return this.getFullName()+' '+this.getAge()
    }*/

}
const a0 = new Person("Natnicha","Sirinipatkul")
const a1 = new Person(undefined,"Sirinipatkul")
const a2 = new Person(undefined,undefined)
const a3 = new Person("Natnicha","Sirinipatkul","12-9-2003")
const a4 = new Person("Natnicha","Sirinipatkul","7-28-2002")
const a5 = new Person("Chaluntorn","Niyom","10-1-2002")
const a6 = new Person("Chaluntorn","Niyom","10-1-2002")
const a7 = new Person(undefined,undefined,undefined)

console.log(a4.isEqual(a3))
console.log(a0.isEqual(a5))
console.log(a5.isEqual(a6))
console.log(a5.getFullName())
console.log(a7) // z คือ บอกว่าเป็นเวลาสากล UTC 
Person.prototype.toString =  function() { 
    return this.getFullName()+' '+this.getAge()
}
console.log(a2.toString())
console.log(a5.getAge())
console.log(a3.toString())
console.log(a4.toString())