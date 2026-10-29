// // implicit type conversion

// console.log(10 + "10"); // concatenation, output "1010"

// console.log(10 - "10"); // subtraction, output 0

// console.log(10 * "10"); // multiplication, output 100

// console.log(10 / "10"); // division, output 1

// console.log(10 % "10"); // modulus, output 0

// console.log(2+2+"100"); // concatenation, output "4100"

// console.log(2+"100"+2); // concatenation, output "21002"

// console.log(2+"100"+2-1); // concatenation and subtraction, output 21001

// console.log(2+"100"+2-1+"1"); // concatenation and subtraction, output "210011"
// console.log(20*2+100); // output 140

// // explicit type conversion
// console.log(Number("10")); // output 10
// console.log(String(10)); // output "10"
// console.log(Boolean("10")); // output true

// console.log(Boolean("")); // output false
// console.log(10+Number("10")); // output 20
// console.log(10+String(10)); // output "1010"

// console.log(10+Boolean("10")); // output 11


// truthy and falsy values


// if(""){
//     console.log("This is true");
// }
// else{
//     console.log("This is false"); // output "This is false"
// }


// if(" hi"){
//     console.log("This is true"); // output "This is true"
// }
// else{
//     console.log("This is false"); // output "This is false"
// }


// let value = null;
// if(value){
//     console.log("hello invertis");
// } else{
//     console.log("university"); 
// }

// let value = null;
// let result = (value) ? "hello invertis" : "university";
// console.log(result); // output "university"

// let a = 10;
// let b = "10";
// if(a==b){
//     console.log(true); // output true
// } else{
//     console.log(false); // output false
// }


// let a = 10;
// let b = "10";
// if(a===b){
//     console.log(true); // output true
// } else{
//     console.log(false); // output false
// }

let a = 10;
let b = 100;   
let c = 20;
if(a==b){
    console.log(true); // output true   
}
else if(a==c){
    console.log(true); // output true
}
else{
    console.log(false); // output false
}