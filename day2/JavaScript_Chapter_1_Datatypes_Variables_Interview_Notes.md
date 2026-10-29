# JavaScript Chapter 1 — Datatypes & Variables
## Complete Notes + Examples + Dry Runs + Interview Preparation

> Goal: By the end of this chapter, you should be able to explain JavaScript datatypes and variables confidently in an interview and solve basic output-based questions.

---

# 1. What is a Datatype?

A datatype tells us what kind of value we are working with.

Example:

```js
let name = "Vishal";
let age = 20;
let isStudent = true;
```

Here:

- `name` stores text → String
- `age` stores a number → Number
- `isStudent` stores true/false → Boolean

Think:

```text
Variable = a named place/reference
Value = the actual data
Datatype = the kind/type of that data
```

---

# 2. JavaScript Datatypes

JavaScript datatypes can be broadly divided into:

## Primitive Datatypes

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol

## Non-Primitive / Reference Datatypes

1. Object
2. Array
3. Function

> Important: `NaN` is NOT a separate datatype. It is a special numeric value, and `typeof NaN` is `"number"`.

---

# 3. String

A String represents text.

## Three common ways to create strings

```js
let a = "Hello";
let b = 'Hello';
let c = `Hello`;
```

All three are strings.

```js
console.log(typeof a); // string
console.log(typeof b); // string
console.log(typeof c); // string
```

## Template Literal

Backticks are especially useful when inserting variables into a string.

```js
let name = "Vishal";
let age = 20;

console.log(`My name is ${name} and my age is ${age}`);
```

Output:

```text
My name is Vishal and my age is 20
```

### How it works

`${name}` → JavaScript inserts the value of `name`.

`${age}` → JavaScript inserts the value of `age`.

---

# 4. Number

JavaScript uses the `number` datatype for normal integers and decimal numbers.

```js
let age = 20;
let price = 99.99;

console.log(typeof age);    // number
console.log(typeof price);  // number
```

Both are `"number"`.

```js
let a = 10;
let b = 10.5;
```

```text
10    → number
10.5  → number
```

---

# 5. Boolean

Boolean has only two values:

```js
true
false
```

Example:

```js
let isLoggedIn = true;
let isAdmin = false;

console.log(typeof isLoggedIn); // boolean
```

Boolean is commonly used in conditions.

```js
let age = 20;

console.log(age >= 18);
```

Output:

```text
true
```

Because `20 >= 18` is true.

---

# 6. Undefined

`undefined` generally means a variable has been declared but no value has been assigned.

```js
let marks;

console.log(marks);
console.log(typeof marks);
```

Output:

```text
undefined
undefined
```

## Remember

```text
Declared + no value assigned → undefined
```

Example:

```js
let result;
```

At this point:

```text
result = undefined
```

---

# 7. Null

`null` represents an intentional absence of value.

Example:

```js
let selectedUser = null;

console.log(selectedUser);
```

Output:

```text
null
```

Meaning:

> We intentionally don't have a user/value right now.

## Important Interview Question

```js
let a = null;

console.log(typeof a);
```

Output:

```text
object
```

This is a historical/legacy behavior of JavaScript.

So:

```js
typeof null
```

returns:

```text
"object"
```

even though `null` is treated as a primitive value.

---

# 8. Null vs Undefined

This is one of the most important interview topics.

## Undefined

```js
let a;

console.log(a);
```

Meaning:

> The variable exists, but no value has been assigned.

## Null

```js
let b = null;

console.log(b);
```

Meaning:

> We intentionally set the value to "nothing".

### Easy memory trick

```text
undefined → value not assigned
null      → intentionally empty
```

---

# 9. BigInt

BigInt is used for very large integers.

Example:

```js
let bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);
console.log(typeof bigNumber);
```

Output:

```text
123456789012345678901234567890n
bigint
```

The `n` at the end makes it a BigInt.

Compare:

```js
let a = 100;
let b = 100n;

console.log(typeof a); // number
console.log(typeof b); // bigint
```

---

# 10. NaN

NaN means:

```text
Not a Number
```

But be careful:

> NaN is a special numeric value. It is not a separate datatype.

Example:

```js
let str = "invertis";
let num = 10;

let result = str / num;

console.log(result);
console.log(typeof result);
```

Output:

```text
NaN
number
```

## Why?

JavaScript tries to perform:

```text
"invertis" / 10
```

The string cannot be converted into a valid number for this division.

Therefore the result becomes:

```text
NaN
```

But:

```js
typeof NaN
```

is:

```text
"number"
```

## More examples

```js
console.log("hello" / 2); // NaN
console.log("abc" * 5);   // NaN
console.log(10 / "xyz");  // NaN
```

---

# 11. Non-Primitive / Reference Datatypes

The common non-primitive types are:

```text
Object
Array
Function
```

## Array

```js
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits);
```

An array stores multiple values.

## Object

```js
let student = {
    name: "Vishal",
    age: 20
};

console.log(student);
```

An object stores data in key-value form.

## Function

```js
function greet() {
    console.log("Hello");
}

greet();
```

A function stores reusable behavior/code.

---

# 12. Variables

A variable is a named reference used to store or refer to a value.

JavaScript has three variable declarations:

```js
var
let
const
```

---

# 13. var

Example:

```js
var age = 20;

console.log(age);
```

Output:

```text
20
```

## var is function scoped

Example:

```js
function test() {

    var x = 10;

    console.log(x);
}

test();
```

`x` is available inside the function.

---

# 14. var and Block Scope

Important:

`var` is NOT block scoped.

Example:

```js
if (true) {

    var x = 10;

}

console.log(x);
```

Output:

```text
10
```

Why?

Because `var` does not respect a normal `{ }` block as its scope.

---

# 15. let

Example:

```js
let age = 20;

console.log(age);
```

`let` is block scoped.


Example:

```js
if (true) {

    let x = 10;

    console.log(x);
}
```


Inside the block, `x` works.

But:

```js
if (true) {

    let x = 10;

}

console.log(x);
```

The last line gives an error because `x` exists only inside the block.

---

# 16. const

Example:

```js
const age = 20;

console.log(age);
```

`const` is also block scoped.

```js
if (true) {

    const x = 10;

    console.log(x);
}
```

Outside:

```js
console.log(x);
```

gives an error.

---

# 17. Declaration

Declaration means creating a variable without necessarily assigning a value.

## var

```js
var a;
```

Allowed.

## let

```js
let b;
```

Allowed.

## const

```js
const c;
```

Not allowed.

`const` must be initialized during declaration.

Correct:

```js
const c = 10;
```

---

# 18. Redeclaration

Redeclaration means declaring the same variable again in the same scope.

## var allows redeclaration

```js
var a = 10;
var a = 20;

console.log(a);
```

Output:

```text
20
```

## let does not allow redeclaration

```js
let a = 10;
let a = 20;
```

Error.

## const does not allow redeclaration

```js
const a = 10;
const a = 20;
```

Error.

### Interview table

| Keyword | Redeclaration |
|---|---|
| var | Allowed |
| let | Not allowed |
| const | Not allowed |

---

# 19. Reassignment

The better interview word is "reassignment".

Reassignment means changing the value of an already declared variable.

## var

```js
var a = 10;

a = 20;

console.log(a);
```

Output:

```text
20
```

Allowed.

## let

```js
let a = 10;

a = 20;

console.log(a);
```

Output:

```text
20
```

Allowed.

## const

```js
const a = 10;

a = 20;
```

Error.

A `const` variable cannot be reassigned.

---

# 20. var vs let vs const — Complete Table

| Feature | var | let | const |
|---|---|---|---|
| Declaration without value | Yes | Yes | No |
| Redeclaration | Yes | No | No |
| Reassignment | Yes | Yes | No |
| Scope | Function | Block | Block |
| Must initialize immediately | No | No | Yes |

### Easy memory

```text
var   → old style, function scope, redeclaration allowed
let   → block scope, value can change
const → block scope, reference cannot be reassigned
```

---

# 21. Important Scope Example

## Example 1 — var

```js
var a = 10;

{
    var a = 20;
}

console.log(a);
```

Output:

```text
20
```

### Why?

Both `var a` declarations belong to the same surrounding scope.

---

## Example 2 — let

```js
let a = 10;

{
    let a = 20;
}

console.log(a);
```

Output:

```text
10
```

### Why?

There are two different block-scoped variables.

Outer:

```text
a = 10
```

Inner:

```text
a = 20
```

The inner one exists only inside `{ }`.

---

# 22. const with Object — Very Important

Many beginners think:

```text
const = object cannot change
```

This is not completely correct.

Example:

```js
const student = {
    name: "Vishal"
};

student.name = "Rahul";

console.log(student);
```

Output:

```text
{ name: "Rahul" }
```

This is allowed.

But:

```js
student = {};
```

is not allowed.

## Why?

`const` prevents reassignment of the variable/reference.

It does not automatically make the object immutable.

This distinction becomes important when learning objects, arrays, and references.

---

# 23. typeof Operator

`typeof` tells us the type of a value.

Examples:

```js
console.log(typeof "Hello");     // string
console.log(typeof 10);          // number
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object
console.log(typeof 10n);         // bigint
console.log(typeof NaN);         // number
```

## Important typeof Table

| Value | typeof result |
|---|---|
| `"Hello"` | `"string"` |
| `10` | `"number"` |
| `true` | `"boolean"` |
| `undefined` | `"undefined"` |
| `null` | `"object"` |
| `10n` | `"bigint"` |
| `NaN` | `"number"` |

---

# 24. Interview Questions — Basic

## Q1. What is a datatype?

### Answer

A datatype defines the kind of value a variable contains or represents.

Example:

```js
let age = 20;
```

Here `20` is a Number.

---

## Q2. What are primitive datatypes in JavaScript?

### Answer

The primitive datatypes are:

```text
String
Number
Boolean
Undefined
Null
BigInt
Symbol
```

---

## Q3. Is NaN a datatype?

### Answer

No.

`NaN` is a special numeric value representing an invalid numeric result.

```js
typeof NaN
```

returns:

```text
"number"
```

---

## Q4. What is the difference between null and undefined?

### Answer

`undefined` generally means a variable has been declared but has not been assigned a value.

`null` represents an intentional absence of value.

Example:

```js
let a;
let b = null;
```

---

## Q5. What is the output?

```js
let a;
console.log(typeof a);
```

### Answer

```text
undefined
```

Because `a` is declared but not assigned a value.

---

## Q6. What is the output?

```js
let a = null;

console.log(typeof a);
```

### Answer

```text
object
```

This is JavaScript's historical behavior.

---

## Q7. What is the difference between var and let?

### Answer

`var` is function scoped, while `let` is block scoped.

Also:

```text
var  → redeclaration allowed
let  → redeclaration not allowed
```

Both can be reassigned.

---

## Q8. Can we declare a const variable without a value?

```js
const x;
```

### Answer

No.

It gives an error because `const` must be initialized during declaration.

Correct:

```js
const x = 10;
```

---

## Q9. Can we reassign a const variable?

```js
const x = 10;
x = 20;
```

### Answer

No.

`const` variables cannot be reassigned.

---

## Q10. Can we redeclare a let variable?

```js
let x = 10;
let x = 20;
```

### Answer

No.

It gives an error in the same scope.

---

# 25. Interview Questions — Output Based

## Question 1

```js
var x = 10;

if (true) {
    var x = 20;
}

console.log(x);
```

### Answer

```text
20
```

### Reason

`var` is not block scoped.

---

## Question 2

```js
let x = 10;

if (true) {
    let x = 20;
}

console.log(x);
```

### Answer

```text
10
```

### Reason

The inner `x` belongs to the block.

---

## Question 3

```js
let x;
console.log(x);
```

### Answer

```text
undefined
```

---

## Question 4

```js
let x = null;
console.log(typeof x);
```

### Answer

```text
object
```

---

## Question 5

```js
let x = "10";
let y = 2;

console.log(x / y);
```

### Answer

```text
5
```

JavaScript converts `"10"` into a number for the division operation.

---

## Question 6

```js
let x = "hello";
let y = 2;

console.log(x / y);
```

### Answer

```text
NaN
```

---

## Question 7

```js
console.log(typeof NaN);
```

### Answer

```text
number
```

---

## Question 8

```js
const student = {
    name: "Vishal"
};

student.name = "Rahul";

console.log(student.name);
```

### Answer

```text
Rahul
```

The object property can be changed.

But:

```js
student = {};
```

is not allowed.

---

# 26. Practical Real-Life Example

Imagine an online shopping website.

```js
let productName = "Laptop";
let price = 55000;
let isAvailable = true;
let discount = null;
let deliveryDate;

console.log(typeof productName); // string
console.log(typeof price);       // number
console.log(typeof isAvailable); // boolean
console.log(typeof discount);    // object
console.log(typeof deliveryDate);// undefined
```

Meaning:

```text
productName → text
price       → number
isAvailable → true/false
discount    → intentionally no value
deliveryDate → value not assigned yet
```

---

# 27. Practical Login Example

```js
let username = "vishal";
let password = "12345";
let isLoggedIn = true;
let profileImage = null;
```

Datatypes:

```text
username     → string
password     → string
isLoggedIn   → boolean
profileImage → null
```

---

# 28. Practical Student Example

```js
const college = "Invertis University";

let studentName = "Vishal";
let age = 20;
let cgpa = 8.2;
let isPlaced = false;
let company = null;
```

Here:

```text
college     → string
studentName → string
age         → number
cgpa        → number
isPlaced    → boolean
company     → null
```

---

# 29. Common Beginner Mistakes

## Mistake 1

Thinking NaN is a datatype.

Wrong:

```text
NaN → datatype
```

Correct:

```text
NaN → special numeric value
typeof NaN → "number"
```

---

## Mistake 2

Thinking null's typeof is null.

Wrong:

```js
typeof null // null
```

Correct:

```js
typeof null // "object"
```

---

## Mistake 3

Thinking const means the value/object can never change.

More accurate:

> A const variable cannot be reassigned.

Object properties can still be modified unless the object is explicitly made immutable.

---

## Mistake 4

Calling reassignment "redeclaration".

These are different.

```js
let x = 10;  // declaration + initialization

x = 20;      // reassignment
```

But:

```js
let x = 10;
let x = 20;  // redeclaration → error
```

---

# 30. Declaration vs Initialization vs Assignment

This distinction is very useful in interviews.

## Declaration

```js
let x;
```

You created the variable.

## Initialization

```js
let x = 10;
```

You gave the variable its first value.

## Assignment / Reassignment

```js
x = 20;
```

You changed the value after it already existed.

### Memory trick

```text
Declaration    → variable create
Initialization → first value
Reassignment   → value change
```

---

# 31. Mini Interview Round

Try answering these WITHOUT looking at the answers.

### Q1

What are the three ways to create a string?

### Q2

What is the difference between null and undefined?

### Q3

What is the output?

```js
console.log(typeof null);
```

### Q4

What is the output?

```js
console.log(typeof NaN);
```

### Q5

Can `let` be redeclared?

### Q6

Can `let` be reassigned?

### Q7

Can `const` be declared without initialization?

### Q8

What is the scope of `var`?

### Q9

What is the scope of `let` and `const`?

### Q10

What is BigInt?

### Q11

What is the difference between redeclaration and reassignment?

### Q12

Why does this work?

```js
const user = {
    name: "Vishal"
};

user.name = "Rahul";
```

---

# 32. One-Page Revision Sheet

## Datatypes

```text
Primitive:
String
Number
Boolean
Undefined
Null
BigInt
Symbol

Non-Primitive:
Object
Array
Function
```

## Special Fact

```text
NaN → special numeric value
typeof NaN → "number"

typeof null → "object"
```

## Variables

```text
var
let
const
```

## Scope

```text
var   → Function Scope
let   → Block Scope
const → Block Scope
```

## Redeclaration

```text
var   → Yes
let   → No
const → No
```

## Reassignment

```text
var   → Yes
let   → Yes
const → No
```

## Declaration without initialization

```text
var   → Yes
let   → Yes
const → No
```

---

# 33. Interview Answer Template

If interviewer asks:

### "Explain var, let and const."

A strong beginner-friendly answer:

> JavaScript provides three keywords for declaring variables: var, let and const. `var` is function scoped and allows redeclaration and reassignment. `let` is block scoped and allows reassignment but not redeclaration in the same scope. `const` is also block scoped, does not allow redeclaration or reassignment, and must be initialized when declared.

---

# 34. Final Mental Model

Remember this picture:

```text
                 JAVASCRIPT DATA
                       |
              -------------------
              |                 |
          Primitive        Non-Primitive
              |                 |
       String, Number       Object
       Boolean              Array
       Undefined            Function
       Null
       BigInt
       Symbol
```

And:

```text
              VARIABLES
                  |
        ---------------------
        |         |         |
       var       let       const
        |         |         |
    Function     Block     Block
      Scope      Scope     Scope
```

---

# 35. Final Interview Checklist

Before moving to Chapter 2, you should be able to explain these without notes:

- [ ] What is a datatype?
- [ ] Primitive vs non-primitive
- [ ] All primitive datatypes
- [ ] String and its three quote styles
- [ ] Number
- [ ] Boolean
- [ ] Undefined
- [ ] Null
- [ ] Null vs undefined
- [ ] BigInt
- [ ] NaN
- [ ] `typeof`
- [ ] `typeof null`
- [ ] `typeof NaN`
- [ ] Object
- [ ] Array
- [ ] Function
- [ ] What is a variable?
- [ ] var
- [ ] let
- [ ] const
- [ ] Function scope
- [ ] Block scope
- [ ] Declaration
- [ ] Initialization
- [ ] Reassignment
- [ ] Redeclaration
- [ ] var vs let vs const
- [ ] const with objects
- [ ] Output-based questions

---

# Chapter 1 Golden Rules

```text
1. NaN is a special numeric value, not a separate datatype.
2. typeof NaN → "number"
3. typeof null → "object"
4. undefined → generally declared but not assigned
5. null → intentionally empty
6. var → function scoped
7. let → block scoped
8. const → block scoped
9. var → redeclaration allowed
10. let/const → redeclaration not allowed
11. var/let → reassignment allowed
12. const → reassignment not allowed
13. const must be initialized
14. const object properties can still be modified
15. Declaration, initialization and reassignment are different concepts
```

## Practice Rule

Don't just read these notes. For every code example:

1. Predict the output.
2. Run the code.
3. Compare your answer.
4. Explain WHY the output came.

That is how you turn memorized JavaScript into interview understanding.
