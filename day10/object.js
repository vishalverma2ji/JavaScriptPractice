// let student={
//     name:"Ravi",
//     age:"24",
//     section:"d",
//     demo:function(){
//         console.log("hello inverties");
        
//     }
// }
// console.log(student); 
// console.log(student.name); // [property]
// console.log(student.demo());// function

// blue person 

// function person(name,age,salary){

//     this.name=name,
//     this.age=age,
//     this.salary=salary
// }

// let p1 =new person("Sohan",23,10000);

// let p2 = new personalbar("sohan", 24,20000);

// console.log(p1)
// console.log(p1.name)


// add, update, delete

let pen ={
    color: "red",
    brand: "cello"
}

//add

// pen.price=10;
// console.log(pen)
// console.log(pen["color"]);


// update

// pen.price =20;
// console.log(pen)



// delete

// delete pen.color;
// console.log(pen)




// access keys values and key value both

// console.log(Object.keys(pen)); // keys
// console.log(Object.values(pen)); // keys
// console.log(Object.entries(pen)); // keys


// nested object 

let student ={
    name: "vishal",
    age: "20",
    seection: ["a","b","c"],
    address:{
        state:"UP",
        city:"pilibhit"
    }
}

console.log(student.name)
console.log(student.address.city)
console.log(student.address)
