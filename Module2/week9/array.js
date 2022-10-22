const a = [1,2,3,4,5]
const b = [6,8,9]
console.log([...a,b]);
console.log(...a);
const [x,...y] = a
console.log(y); 
const name1 = 'jakarin 63130500'
console.log([...name1]);
const  [n, m,...k] = name1
console.log(k.join(''));
