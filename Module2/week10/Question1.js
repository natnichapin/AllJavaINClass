// ออกแบบแบบไหนดีกว่า แยกกับซ้อน
//ถ้าจะออกแบบ nedted : เมื่ออยากควบคุม step ของ nested ตามลำดับ หรือ ไม่ตามแต่ได้ค่าที่ต้องการ
//หรืออาจจะอยากได้ closures
// แยก : บางอันมีความหมายในตัว ก็ไม่ต้องซ้อน
//nested function
function average(nums){
    function sum(){
        let total=0       
         for (const num of nums){
            total+=num        }
        return total    }
    return sum()/nums.length}
console.log(average([1,2,3,4,5]))
//independence functions
function sum2(nums){
    let total=0  
      for (const num of nums){
        total+=num    
    }
    return total}
function average2(nums){
    return sum2(nums)/nums.length
}
console.log(average2([1,2,3,4,5]))