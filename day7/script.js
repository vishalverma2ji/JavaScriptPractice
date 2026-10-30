//declaration function

// function Dec(){
//     console.log("Decleration function")
// }
// Dec()


// function Dec(){
//     return("decleration function")
// }
// console.log(Dec())


// function sum(a,b){  //parameters
//     console.log(a+b)
// }
// sum(2,3)    //argument


// //function expressio
// let Exp = function(){
//     console.log("function expression")
// }
// Exp()


// //arrow function
// let sum = (a,b)=>{
//     console.log(a+b)
// }
// sum(3,5)


// IIFE
// (function(){
//     console.log("IIFE function")
// })();




function Hof(fun){
    console.log("hof")
    fun()

}

function call(){

    console.log("callback")
}
Hof(call)


//nested function

// function parent(){
//     console.log("parent function ")

//     let child1 = ()=>{
//         console.log("nested")
//     }
//     child1();

// }

// parent()


