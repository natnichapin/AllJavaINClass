let arg = [3,12,15,20, 46]
let arg2 = ["natnicha","sirinipatkul","pin"]
let arg3 = [36 , 6 , 70 ,2 ,27] 

function morethan20 (x){ 
    return x%5==0
}

function  lenghtMorethan3 (x){ 
    return x.length > 3
}
//Array elements which do not pass the callbackFn test are skipped, and are not included in the new array.
 console.log(arg.filter(morethan20));
 console.log(arg2.filter(lenghtMorethan3));
 console.log(arg3.filter((x,y,z)=> x === Math.pow(z[y+1],2) ));


 //----------------------------------

let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];

const modifiedWords = words.filter((word, index, arr) => {
  arr[index + 1] += ' extra';
  return word.length < 6;
});

console.log(modifiedWords);


//---------------------------------------------------------------- 

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
//จำนวนเฉพาะคือ จำนวนที่หารไม่มีตัวหารลงตัวเลย นอกจากตัวมันเอง หรือ 1
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]