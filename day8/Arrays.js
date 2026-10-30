// 1 //.> Array literal

// let arr = [1,2,"Pradeep", 4, "invertis"];
// console.log(arr) // [1,2,"Pradeep", 4, "invertis"]



// for(let i =0; i<arr.length;i++){
//     console.log(arr[i]); 
// }



// let arr2 = Array.of(10,20,40)
//     console.log(arr2); // [10, 20, 20]
 

//     let arr = [1,2,3];
//     let result = arr.push(10,20);
//     console.log(result);

//     let arr1 = [1,2,3];
//     let result1 = arr1.pop();
//     console.log(result1);
//     console.log(arr1)

//     let arr = [1,2,3];
//     arr.push(10,20);
//     console.log(arr)


//      let arr = [1,2,3];
//     arr.pop();
//     console.log(arr)

//      let arr3 = [10,20,30];
//     let result = arr3.shift();
//     console.log(result)//[10]
//     console.log(arr3) // [10,30]


    
//      let arr4 = [10,20,30];
//     let result1 = arr4.unshift(20);
//     console.log(result1) // 4 element
//     console.log(arr4) // [20,10,20,30]


//     let arr5 = [1,2,3,4];
//     arr5.includes(7);
//     console.log(arr5.includes(7))



//     let arr6 = ["hello", "hi", "vishal"];
//     console.log(arr6.includes())


// let arr7 = [10,20,30,40,60,50];
// // console.log(arr7.slice(2))// 30, 40, 60, 50
// console.log(arr7.sclice(2,4))



// let arr7 = [10,20,30,40];
// arr7.splice(1,2, 400, 500, 600)

//  console.log(arr7.splice(1,2, 400, 500, 600))
// console.log(arr7)

// let arr8 = [1,2,3,7,4,5,1,6];
// arr8.indexOf(1,2)
// console.log(arr8)
// console.log(arr8.indexOf(1,2))


// let arr9= [1,2,3,4,5]
// arr9.forEach((value, index, array)=> {
//     console.log(value);
//     console.log(index);
//     console.log(array);


// })

// let arr10 =[1,2,3,4];
// let result = arr10.map((num)=>{
//     return num*num;
// })
// console.log(result)



// let arr11 =[1,9,2,3,4];
// let res = arr11.filter((num)=>{
//     return (num>2);
// })
// console.log(res)


//  let arr12 =[1,9,2,3,4];
// let res1 = arr11.reduce((num, mull)=>{
//     num*mull;
// })
// console.log(res1)

// let arr13 = [1,2,3,4,5];
// let results = arr11.some((num)=>{ // koi ki bhi value h arr11 me to true
//     return num%2 == 0;
// })
// console.log(results)



// let arr14 = [1,2,3,4,5];
// let ress = arr11.every((num)=>{ // sari value match karega 
//     return num%2 == 0;
// })
// console.log(ress)


// find:- if the condition is true then it will give onl one result
// give undefined if condition is not met.

// let arr15 = [1,2,3,4,5];
// let res = arr15.find((num)=>{
//     return(num>2);
// })
// console.log(res);

// spread operator: it is used to merge nad copy array and string

// let arr16 =[1,2,3,4];
// let arr17 = [2,5,6,7];

// let ress =[...arr16,...arr17];
// console.log(ress)


// rest operator: it is used to collect multiples values ina single array.
// when user doesnot how many argument it will take then at that time we use rest operator.

// function showDetails(name, ...hobbies){
//     console.log(name);
//     console.log(hobbies)
// }
// showDetails("vishal",  "cricket","hocky");


//closure: inner function  rememeber the variable  value of the outer ffunction is known as closure.


// function outer(){
//     let message = "hello";

//     function inner(){
//         console.log(message)
//     }
//     inner()
// }
// outer() let arr16 = [1,2,3,4];
// // let arr17 = [6,7,8,9];

