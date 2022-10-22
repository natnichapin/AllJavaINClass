//ใช้ได้กับทั้ง arr และ object
const student = {name: "Natnicha" ,Age :"15"}
console.log({...student});

const obj1 = { foo: 'bar', x: 42  }
const obj2 = { foo: 'baz', y: 13 }
const clonedObj= { ...obj1 }
// Object { foo: "bar", x: 42 }
const clonedWithReplace= { ...obj1, foo: 'abc' }
// Object { foo: "abc", x: 42 }
const mergedObj= { ...obj1, ...obj2 }
// Object { foo: "baz", x: 42, y: 13 }

//spead Operator
//merge
const buyer={
    id:1234,
    fullName:{
        firstName: 'Somchai',
        lastName: 'Deejai'
    },
    totalPoints:1000
}
const address={
    no:555,
    street: 'Pracha-U-thid',
    province: 'Bangkok'
}
//spread operator
//merge
const buyerProfile={...buyer, ...address}
console.log("-----------------")
console.log(buyerProfile)
console.log("-----------------")
//copy with replace
const newBuyer={...buyer, totalPoints:0}
console.log(newBuyer)
//กระจายออกมา ถ้าซ้ำก็เขียนทับ //ได้ตัวแปรออกมา อิสระจาก object ถ้าไม่เปลี่ยนชื่อจะได้ ชื่อเดียวกับ properties

const{fullName:{firstName,lastName}}=buyer  //บอกเส้นทาง 1 ชั้น ปีกกา 1 ชุด
console.log(firstName); //อ้างได้แค่ตัวจบ
console.log(lastName);

//rest 
const {id,...buyerDetails}=buyer 
console.log("-----------");
console.log(id);
console.log(buyerDetails) //สร้างตัวแปรมารวบสิ่งที่ไม่ต้องการแสดงในตอนนี้

const products=[
    {productId:1,productsName:"pen"},
    {productId:2,productsName:"Notebook"}
]
const [,{productId}]=products
console.log(productId);
