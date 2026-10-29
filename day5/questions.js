// for (let i = 0; i < 50; i++) {
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }



// let m = parseInt(prompt("Enter a number"));
// let m=5;
// for (let i = 1; i <=10; i++) {
//    console.log(m*i);
// }

// for (let i = 1; i <=100; i++) {
//     if(i % 2 != 0){
//         console.log(i);
//     }
// }


// let n =20;
// let sum =0;
// for(let i = 1; i < n; i++){
//     if(i % 2 == 0){ 
//     sum += i;
// }
// }
// console.log(sum);



// let sum =0;
// for(let i = 1; i <= 20; i++){
//     if(i % 2 != 0){ 
//     sum += i;
// }
// }
// console.log(sum);


// for (let i = 1; i <= 100; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log(i);
//     }
// }


// sum of digit
// let n = 3456;
// let sum = 0
// while(n>0){
//     d = n%10;
//     sum += d;
//     n = Math.floor(n/10);


// }
// console.log(sum)


// square
// let n = 34567;
// let sum = 0
// while(n>0){
//     d = n%10;
//     x = d*d;
//     sum += x;
//     n = Math.floor(n/10);


// }
// console.log(sum)


// largest number
//  let n = 45732;
//  let l =0;
//  while(n >= 0){
//     d = n%10;
//     if(d>l){
//         l=d;
//     }
//         n = Math.floor(n/10);
    
//         console.log(l);
// }


//  let n = 45732;
//  let c =0;
//  while(n > 0){
//     d = n%10;
//     c++;
        
    
//         n = Math.floor(n/10);
//  }
//         console.log(c);


// reverse
let n = 2356;
let rev=0;
while(n>0){
       d = n%10;
       rev = rev*10+d;
 
       n = Math.floor(n/10);
}
       console.log(rev);
