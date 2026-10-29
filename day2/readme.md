>.datatypes:- Datatype tells us what kind of value a variable stores.
let name = "Vishal";     // String
let age = 20;            // Number
let isStudent = true;    // Boolean

>.Two types datatypes:
1. Primitive datatype
2. non-primitive / refrence datatype 

1. >primitive datatype:- predefine datatypes && Immutable

. string(three ways to define)
> let a = "Hello";
> let b = 'Hello';
> let c = `Hello`;

. number
. boolean
. null
. undefine
. bigint
. NaN 
. symbol

>.NaN datatypes :- non primitive datatypes are userdefined . & Mutable
. array
. function
. obejct

>. variable :
there are three types  of variables variable in js
1. var
2. let 
3. const

1. scoped based 
var is functional scope
let and const is block of scope

2. declaration
var and let is declare
const is not accept

3. redeclaration : Redeclaration means same scope mein same variable ko dobara declare karna.

>. var a = 10;
>. var a = 20;
>. console.log(a); // 20

reduction is possible only on var
let and const is not redeclarable


4. reinitilization/Reassignment

reinitilization is possible on let and var;

>. let a = 10;
>. a = 20;
>. console.log(a);// 20

>. var a = 10;
>. a = 20;
>. console.log(a); //20;

it is not possible on const



# null = intentionaly empty
# undifine =  initialize  hota