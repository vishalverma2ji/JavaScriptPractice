// let day = "monday";
// switch(day){

//     case "monday":
//         document.writeln("This is the monday");
//         break;

//     case "tuesday":
//         document.writeln("This is the tuesday");
//         break;


//         default:
//         document.writeln("This is not a valid day");
//         break;

// }





// browser input output

// let monthDay = prompt("Enter the month day:-");

// switch(monthDay){
//     case "january":
//         case "march":
//             document.writeln("This month has 31 days");
//             break;



// case "february":
//     document.writeln("This month has 28 days");
//     break;
//     default:
//     document.writeln("This is not a valid month");
//     break;

// }


// let a =10;
// let b = ++a; //pre increment pehle increment hoga fir assign hoga
// console.log(a);//   11
// console.log(b); /// 11
// console.log(a++); // 11

// let x = 10;
// let y = ++x + x++; // pehle x ko increment karega fir assign karega fir x ko increment karega fir assign karega
// console.log(x ,y ); // 12 22

// let p = 22;
// let q = ++p - p++ + ++p + p++ - --p;
// console.log(p ,q); // 25 25


// let c = 10;
// let d = c++;
// console.log(c); // 11
// console.log(d); // 10

// let a = 5;
// if(++a && (a++ + a++)){
//     console.log(a); // 8


// }
// if(++a || (a++ + a++)){
//     console.log(a); // 9
// }

// if(++a && (a++ + ++a)){
//     console.log(a); // 12

// }

// let b = 5;
// if((b++ + ++b )|| ++b){
//     console.log(b); // 7
// }

// let c = 5;
// if((c++ ||(c++ + ++c)) && ++c){
//     console.log(c); // 7
// }

let age = prompt("Enter the age:-");
if(age >= 18){
    console.log("You are eligible for voting");
}
else{
    console.log("You are not eligible for voting");
}