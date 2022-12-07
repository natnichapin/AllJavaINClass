import { CookieUtil } from "./CookieUtil.js"
//เรียกใช้ cookies ผ่าน class ที่จารสร้าง ทำให้ไม่ต้องจัดการ cookie ทุกตัว
CookieUtil.set('member','Umaporn')
CookieUtil.set('color-tone','pastel',new Date('December 1 , 2022'))
console.log(CookieUtil.get('color-tone'));
console.log(CookieUtil.get('member'));

// Clear Cookie !!
//CookieUtil.unset('color-tone');














// document.cookie ='memberType=gold'
// document.cookie ='memberType=premium' //Retake 
// document.cookie ='color-tone=patel; max-age=60'

// document.cookie =`productId=101;expires=${
//     new Date ('December 17, 2021 00:00:00')
// }`
// //หมดอายุจะไม่มี ใน Apllplication

// //อ่าน cookie มาทั้งหมด , ต้องเขียนโค้ดตัดค่าเอาเอง
// alert(document.cookie)


// //encodeURIComponent มีเพื่อ encode ความหมายที่อาจจะชน สัญลักษณ์ อื่นๆ
// // สามารถใช้เพื่อ encode ให้เป็น text โดยยังคงความหมายเดิมได้

// const cookiesName =encodeURIComponent('url:scheme')
// const cookiesValue =encodeURIComponent('https://www.kmutt.ac.th')

// console.log(cookiesName);
// console.log(cookiesValue);

// console.log(decodeURIComponent(cookiesName));
// console.log(decodeURIComponent(cookiesValue));