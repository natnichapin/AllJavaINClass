const products = [
    { id: 123, name: 'bag' },
    { id: 2, name: 'pen' },
    { id: 33, name: 'BAG' }
 ]
 let arr =[]
 let arr2 = []
 products.filter(product => arr.push(product.name))
 products.forEach(element => {
   arr2.push(element.name)    
 })
 
 ;(product => arr.push(product.name))
 console.log(arr);
 console.log(arr2);
 console.log(products.map(x=>x.name));