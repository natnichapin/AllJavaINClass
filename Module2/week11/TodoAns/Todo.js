//class ของ todo ซึ่ง Generate id  ให้ไม่ซ้ำกันเองได้
class Todo{ 
    static runningId=1 //ตัวแปร static ตัวแปรระดับ class
    constructor(desc){
        this.id=Todo.runningId++
        this.description=desc 
    }
    getTodo(){ 
        return {id:this.id,description:this.description}
    }
    setDescription(newDese){ 
        this.description=newDese
    }
}
module.exports=Todo