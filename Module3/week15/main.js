//eventObject.js


let divButton = document.getElementById("buttonPanel");
//console.log(divButton);
const studentsButton = divButton.children[0];
//console.log(studentsButton);

//1.add event handlers by using annonymouse  functions
studentsButton.addEventListener(
  "click",
  (e) => {
    alert(
      `hello, student button!   
       event target: ${e.target},   
        event target id: ${e.target.id},    
        event type: ${e.type},   
        event current target: ${e.currentTarget}, 
           event phase: ${e.eventPhase}`
    );
  },
  true
);
divButton.addEventListener(
  "click",
  (event) => {
    alert(
      `hello, div parent!    
      event target: ${event.target},  
        event target id: ${event.target.id},  
          event type: ${event.type},   
           event current target: ${event.currentTarget},  
             event phase: ${event.eventPhase}`
    );
  },
  true
);

// divButton.addEventListener('click',AlertDiv,true)

// //กดที่ studentsButton แต่ สะเทือนถึง Div ด้วย
// function AlertDiv(){
//     alert('hello, div parent')
// }

// divButton.addEventListener('click', (events)=>
// {
//     alert(`hello, div parent
//     event target : ${events.target},
//     event target id : ${events.target.id}
//     event type : ${events.type},
//     event current target :${events.currentTarget},
//     event phase : ${events.eventPhase}`)

// },true)


//function declaration
// function studentsHandler(){
//     alert('Good bye')
// }

//function expression with arrow functions
const studentsHandler = () => {
  alert("Good bye");
};

//2.add event handlers by using function name
studentsButton.addEventListener("click", studentsHandler);

studentsButton.removeEventListener("click", studentsHandler);
