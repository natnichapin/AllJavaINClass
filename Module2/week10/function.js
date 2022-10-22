//anonymous function with keyboard 'function' 
const getChar1 = function (msg,index){ 
    return msg[index]
} //ทำฟังก์ชันให้เป็นนิพจน์ 

console.log(getChar1('hello world',3));

//anonymous function with arrow function
const getChar2=(msg, index)=>{
    return msg[index]
}
console.log(getChar2('hello world', 3))


//function nested 
//กฎ 2 ข้อ มรดกตกทอด  , ใกล้ชิด
function outer(a){ 
let b = 2 
    function inner1(c){ 
        let b=20
        let d=4
        console.log(`inner1:b ${b}`)
        return d+c+b
    }
    const resultInner1=inner1(100)
    console.log(`outer:b ${resultInner1}`);
    console.log(`outer:b ${b}`);
    return a+b
}
console.log(outer(10));
//ไม่สามารถ เรียก inner ได้โดยตรง ซึ่งจะได้ค่า undefined

//test inner (อาจะเป็นข้อสอบ)

function outer(){      
    function inner(x){
        return 'inner here '+x
    }
    return inner
}
//1
console.log(outer()('someone'))
//2
const inFn=outer()
console.log(inFn('somewhere'))





// เขียนเล่นๆ
console.log("-------------------------------------")
const pp  = (x,y)=> x+=y*y 
console.log(pp(2,2))







/*const qq = {NickName:"PIN",
        firstName:"Natnicha",
        lastName:"Sirinipatkul",
        favitem:{Anime:"Madoka",eating:"Anything"}
    } 
        
    const {a,b,Anime} = qq  
    console.log(Anime); */