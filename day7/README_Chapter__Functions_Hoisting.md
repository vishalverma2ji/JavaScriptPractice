# JavaScript Chapter 2 — Functions & Hoisting

## Complete Notes + Examples + Dry Runs + Interview Preparation

> Goal: By the end of this chapter, you should be able to explain JavaScript functions, their types, parameters, return values, scope, hoisting, TDZ, callbacks, HOF, closures and function-based output questions confidently in an interview.

---

# 1. What is a Function?

A function is a reusable block of code designed to perform a specific task.

Instead of writing the same code multiple times, we write the code once inside a function and call it whenever required.

### Simple Definition

```text
Function = reusable block of code
```

Example:

```js
function greet() {
    console.log("Hello");
}

greet();
greet();
greet();
```

Output:

```text
Hello
Hello
Hello
```

The same function can be reused multiple times.

---

# 2. Why Do We Use Functions?

Functions provide:

- Code reusability
- Better organization
- Less repetition
- Easier debugging
- Better readability
- Modularity
- Easy maintenance

Without a function:

```js
console.log(10 + 20);
console.log(10 + 20);
console.log(10 + 20);
```

With a function:

```js
function add() {
    console.log(10 + 20);
}

add();
add();
add();
```

---

# 3. Types of Functions in JavaScript

There are several important function patterns in JavaScript.

1. Function Declaration
2. Function Expression
3. Arrow Function
4. IIFE (Immediately Invoked Function Expression)
5. Higher Order Function (HOF)
6. Callback Function
7. Nested Function
8. Anonymous Function
9. Constructor Function
10. Recursive Function
11. Async Function

The first seven are especially important for beginner-level interviews.

---

# 4. Function Declaration

A function declaration is created using the `function` keyword followed by a function name.

Syntax:

```js
function functionName() {
    // code
}
```

Example:

```js
function greet() {
    console.log("Hello Vishal");
}

greet();
```

Output:

```text
Hello Vishal
```

### Important Point

A function declaration has a function name.

```js
function add() {
    console.log("Add");
}
```

Here:

```text
function → keyword
add      → function name
()       → parameter list
{}       → function body
```

---

# 5. Function with Parameters

Parameters are variables written in the function definition.

Example:

```js
function add(a, b) {
    console.log(a + b);
}

add(2, 3);
```

Output:

```text
5
```

Here:

```text
a and b → parameters
2 and 3 → arguments
```

---

# 6. Parameters vs Arguments

This is an important interview question.

### Parameter

A parameter is the variable defined when creating a function.

```js
function add(a, b) {
    console.log(a + b);
}
```

Here `a` and `b` are parameters.

### Argument

An argument is the actual value passed when calling the function.

```js
add(10, 20);
```

Here `10` and `20` are arguments.

### Easy Memory Trick

```text
Parameter → function definition
Argument  → function call
```

---

# 7. Function with Return

The `return` statement sends a value back from a function.

Example:

```js
function add(a, b) {
    return a + b;
}

console.log(add(2, 3));
```

Output:

```text
5
```

The function returns:

```text
2 + 3 = 5
```

---

# 8. Return vs console.log

This is very important.

### console.log

```js
function add(a, b) {
    console.log(a + b);
}

add(2, 3);
```

This prints the result.

### return

```js
function add(a, b) {
    return a + b;
}

let result = add(2, 3);

console.log(result);
```

Here the result is returned and can be stored in another variable.

### Interview Difference

```text
console.log() → displays a value
return        → sends a value back from the function
```

---

# 9. Your Add Function Example

```js
function add(a, b) {
    return a + b;
}

console.log(add(2, 3));
```

Output:

```text
5
```

Dry Run:

```text
add(2, 3)
a = 2
b = 3

return a + b
return 2 + 3
return 5
```

Then:

```js
console.log(5);
```

Output:

```text
5
```

---

# 10. Even or Odd Function

Example:

```js
function evenOdd(a) {
    if (a % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

evenOdd(4);
```

Output:

```text
even
```

### Dry Run

```text
a = 4

4 % 2
= 0

0 == 0
= true
```

Therefore:

```text
even
```

---

# 11. Find Maximum Number

Your example:

```js
function max() {
    let a = 3;
    let b = 5;
    let c = 9;

    if (a > b && a > c) {
        console.log(a);
    }
    else if (b > a && b > c) {
        console.log(b);
    }
    else {
        console.log(c);
    }
}

max();
```

Output:

```text
9
```

### Better Reusable Version

Instead of hard-coding the values, we can use parameters:

```js
function max(a, b, c) {
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;
    }
    else {
        return c;
    }
}

console.log(max(3, 5, 9));
```

Output:

```text
9
```

---

# 12. Function Expression

A function expression means assigning a function to a variable.

Example:

```js
let z = function(a, b) {
    return a * b;
};

console.log(z(2, 3));
```

Output:

```text
6
```

Here:

```text
z → variable
function → anonymous function
```

The function does not have its own name.

---

# 13. Anonymous Function

A function without a name is called an anonymous function.

Example:

```js
let add = function(a, b) {
    return a + b;
};

console.log(add(2, 3));
```

The function:

```js
function(a, b) {
    return a + b;
}
```

is anonymous.

It is stored inside the variable `add`.

---

# 14. Function Declaration vs Function Expression

| Feature | Function Declaration | Function Expression |
|---|---|---|
| Name | Usually named | Can be anonymous |
| Syntax | `function add(){}` | `let add = function(){}` |
| Hoisting | Can be called before declaration | Variable behavior applies |
| Stored in variable | Not required | Yes |
| Common use | General reusable function | Functions passed/stored as values |

Example:

```js
function add() {
    console.log("Hello");
}
```

Function expression:

```js
let add = function() {
    console.log("Hello");
};
```

---

# 15. Arrow Function

Arrow functions were introduced in ES6.

They provide shorter syntax for writing functions.

Normal function:

```js
function add(a, b) {
    return a + b;
}
```

Arrow function:

```js
let add = (a, b) => {
    return a + b;
};
```

---

# 16. Short Arrow Function

If the function contains only one expression, we can make it shorter.

```js
let add = (a, b) => a + b;

console.log(add(2, 3));
```

Output:

```text
5
```

This is called an implicit return.

---

# 17. Arrow Function Syntax

### Multiple parameters

```js
let add = (a, b) => a + b;
```

### One parameter

Parentheses can be omitted:

```js
let square = n => n * n;
```

### No parameter

```js
let greet = () => console.log("Hello");
```

---

# 18. Arrow Function vs Normal Function

Important interview topic.

| Feature | Normal Function | Arrow Function |
|---|---|---|
| Syntax | Longer | Shorter |
| `this` | Has its own `this` | Does not create its own `this` |
| `arguments` | Available | No own `arguments` |
| Constructor | Can be used with `new` | Cannot be used as constructor |
| `prototype` | Has prototype | Does not have its own prototype |

For beginner interviews, remember especially:

```text
Arrow function → shorter syntax
Arrow function → lexical `this`
```

---

# 19. IIFE

IIFE stands for:

```text
Immediately Invoked Function Expression
```

It is a function that executes immediately after it is created.

Example:

```js
(function() {
    console.log("Hello");
})();
```

Output:

```text
Hello
```

### Another Syntax

```js
(() => {
    console.log("Hello");
})();
```

---

# 20. Why Use IIFE?

IIFE can be useful when code needs to execute once immediately and we want to avoid creating a normal reusable function name.

Example:

```js
(function() {
    let message = "Hello";
    console.log(message);
})();
```

The function executes immediately.

### Important

IIFE itself is generally not called again like a normal reusable function.

---

# 21. IIFE with Parameters

An IIFE can also receive arguments.

```js
(function(name) {
    console.log("Hello " + name);
})("Vishal");
```

Output:

```text
Hello Vishal
```

---

# 22. Higher Order Function (HOF)

A Higher Order Function is a function that does at least one of these:

1. Takes another function as an argument
2. Returns another function

Example:

```js
function calculate(a, b, operation) {
    return operation(a, b);
}
```

Here `calculate` is a Higher Order Function because it accepts another function.

---

# 23. HOF Example

```js
function add(a, b) {
    return a + b;
}

function calculate(a, b, operation) {
    return operation(a, b);
}

console.log(calculate(2, 3, add));
```

Output:

```text
5
```

Here:

```text
calculate → Higher Order Function
add       → Callback Function
```

---

# 24. Callback Function

A callback function is a function passed as an argument to another function and then invoked by that function.

Example:

```js
function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    callback("Vishal");
}

processUser(greet);
```

Output:

```text
Hello Vishal
```

Here:

```text
processUser → Higher Order Function
greet       → Callback Function
```

---

# 25. HOF vs Callback

This is a very common interview question.

```js
function calculate(a, b, operation) {
    return operation(a, b);
}
```

Because `calculate` accepts another function:

```text
calculate → HOF
```

When we pass:

```js
add
```

to `calculate`:

```text
add → callback
```

### Easy Memory Trick

```text
Function receiving/returning another function → HOF

Function passed to another function → Callback
```

The same function can sometimes be described differently depending on how it is being used.

---

# 26. Nested Function

A function defined inside another function is called a nested function.

Example:

```js
function outer() {

    function inner() {
        console.log("Inner function");
    }

    inner();
}

outer();
```

Output:

```text
Inner function
```

Here:

```text
outer → outer function
inner → nested/inner function
```

---

# 27. Nested Function and Scope

```js
function outer() {

    let message = "Hello";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();
```

Output:

```text
Hello
```

The inner function can access variables from its outer function.

This concept leads to an important topic:

```text
Closure
```

---

# 28. Closure

A closure happens when an inner function remembers and can access variables from its outer function even after the outer function has finished executing.

Example:

```js
function outer() {

    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

let counter = outer();

counter();
counter();
counter();
```

Output:

```text
1
2
3
```

### Why?

`inner` remembers the `count` variable from `outer`.

This is called a closure.

---

# 29. Closure Interview Definition

A good interview answer:

> A closure is created when a function retains access to variables from its lexical outer scope even after the outer function has finished executing.

---

# 30. Scope in Functions

Scope determines where a variable can be accessed.

Important scopes include:

```text
Global Scope
Function Scope
Block Scope
Lexical Scope
```

Example:

```js
let global = 10;

function test() {
    let local = 20;

    console.log(global);
    console.log(local);
}

test();
```

The function can access the global variable.

---

# 31. Function Scope

Variables declared with `var` inside a function are function scoped.

```js
function test() {
    var x = 10;
    console.log(x);
}

test();
```

But:

```js
console.log(x);
```

will give an error because `x` exists inside the function only.

---

# 32. Block Scope Inside Functions

`let` and `const` are block scoped.

```js
function test() {

    if (true) {
        let x = 10;
        const y = 20;

        console.log(x);
        console.log(y);
    }

}
```

Outside the `if` block, `x` and `y` cannot be accessed.

---

# 33. Lexical Scope

Lexical scope means a function can access variables based on where the function is written in the source code.

Example:

```js
let a = 10;

function outer() {

    let b = 20;

    function inner() {
        console.log(a);
        console.log(b);
    }

    inner();
}

outer();
```

`inner` can access:

```text
a → global scope
b → outer scope
```

This lexical relationship is also important for understanding closures.

---

# 34. Default Parameters

JavaScript allows default values for parameters.

```js
function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet();
```

Output:

```text
Hello Guest
```

If an argument is provided:

```js
greet("Vishal");
```

Output:

```text
Hello Vishal
```

---

# 35. Rest Parameters

Rest parameters collect multiple arguments into an array.

Syntax:

```js
function functionName(...args) {
}
```

Example:

```js
function sum(...numbers) {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log(sum(1, 2, 3, 4));
```

Output:

```text
10
```

Here:

```text
numbers → [1, 2, 3, 4]
```

---

# 36. `arguments` Object

Normal functions have access to the `arguments` object.

Example:

```js
function test(a, b) {
    console.log(arguments);
}

test(10, 20, 30);
```

The `arguments` object contains the arguments passed to the function.

Important:

```text
Normal function → own arguments object
Arrow function  → no own arguments object
```

For modern code, rest parameters are generally clearer:

```js
function test(...args) {
    console.log(args);
}
```

---

# 37. First-Class Functions

JavaScript treats functions as first-class values.

This means functions can be:

- Stored in variables
- Passed as arguments
- Returned from functions
- Stored in arrays/objects

Example:

```js
let greet = function() {
    console.log("Hello");
};

greet();
```

The function is stored in a variable.

---

# 38. Function Returning a Function

A function can return another function.

Example:

```js
function outer() {

    return function() {
        console.log("Hello");
    };

}

let result = outer();

result();
```

Output:

```text
Hello
```

This is also related to Higher Order Functions and Closures.

---

# 39. Recursion

When a function calls itself, it is called recursion.

Example:

```js
function count(n) {

    if (n === 0) {
        return;
    }

    console.log(n);

    count(n - 1);
}

count(5);
```

Output:

```text
5
4
3
2
1
```

A recursive function generally needs a stopping condition called a base case.

---

# 40. Recursive Factorial

```js
function factorial(n) {

    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5));
```

Output:

```text
120
```

Dry Run:

```text
5 * factorial(4)
5 * 4 * factorial(3)
5 * 4 * 3 * factorial(2)
5 * 4 * 3 * 2 * factorial(1)
5 * 4 * 3 * 2 * 1
= 120
```

---

# 41. Pure Function

A pure function:

1. Produces the same output for the same input.
2. Does not cause observable side effects.

Example:

```js
function add(a, b) {
    return a + b;
}
```

For the same inputs:

```js
add(2, 3)
```

always returns:

```text
5
```

---

# 42. Side Effect

A side effect means a function changes something outside its local calculation.

Example:

```js
let count = 0;

function increment() {
    count++;
}
```

The function changes the external variable `count`.

This is a side effect.

---

# 43. Hoisting

The correct term is:

```text
Hoisting
```

Hoisting is JavaScript's behavior where declarations are processed during the creation of an execution context before the code is executed.

Important:

> Hoisting does not mean that JavaScript literally moves your code to the top.

Different declarations behave differently.

---

# 44. Function Declaration Hoisting

Function declarations can be called before their declaration in the same scope.

Example:

```js
greet();

function greet() {
    console.log("Hello");
}
```

Output:

```text
Hello
```

This works because the function declaration is available before execution reaches its declaration.

---

# 45. `var` Hoisting

Example:

```js
console.log(a);

var a = 10;
```

Output:

```text
undefined
```

Conceptually, the declaration behaves like:

```js
var a;

console.log(a);

a = 10;
```

The declaration is available, but the assignment happens later.

---

# 46. `let` and `const` Hoisting

`let` and `const` declarations are also processed during environment creation, but they cannot be accessed before initialization.

Example:

```js
console.log(a);

let a = 10;
```

This gives:

```text
ReferenceError
```

Similarly:

```js
console.log(a);

const a = 10;
```

gives a `ReferenceError`.

This is connected to the:

```text
Temporal Dead Zone (TDZ)
```

---

# 47. Temporal Dead Zone (TDZ)

TDZ stands for:

```text
Temporal Dead Zone
```

It is the period from entering the scope until the `let` or `const` declaration is initialized during which accessing the variable causes a `ReferenceError`.

Example:

```js
console.log(x);

let x = 10;
```

The access occurs before initialization.

Therefore:

```text
ReferenceError
```

### Easy Memory

```text
var
declaration available → undefined

let/const
declaration exists → TDZ → initialization
```

---

# 48. TDZ Example

```js
{
    // TDZ starts

    console.log(x);

    let x = 10;

    // TDZ ends after initialization
}
```

The `console.log(x)` causes a `ReferenceError`.

---

# 49. Function Expression Hoisting

Consider:

```js
sayHello();

var sayHello = function() {
    console.log("Hello");
};
```

This results in:

```text
TypeError
```

Why?

The variable declared with `var` is initialized with `undefined` before the assignment executes.

Conceptually:

```js
var sayHello;

sayHello();

sayHello = function() {
    console.log("Hello");
};
```

Calling `undefined()` causes a `TypeError`.

---

# 50. `let` Function Expression and TDZ

```js
sayHello();

let sayHello = function() {
    console.log("Hello");
};
```

This gives:

```text
ReferenceError
```

because `sayHello` is in the TDZ before initialization.

---

# 51. Arrow Function and Hoisting

Arrow functions are usually stored in variables.

Example:

```js
add();

let add = (a, b) => a + b;
```

This gives:

```text
ReferenceError
```

because `add` is declared with `let` and is in the TDZ.

With `const`:

```js
add();

const add = (a, b) => a + b;
```

Again:

```text
ReferenceError
```

---

# 52. Hoisting Comparison Table

| Declaration | Hoisted | Before Declaration |
|---|---|---|
| Function Declaration | Yes | Can execute |
| `var` | Yes | `undefined` |
| `let` | Yes, but inaccessible before initialization | `ReferenceError` |
| `const` | Yes, but inaccessible before initialization | `ReferenceError` |
| Function Expression with `var` | Variable is hoisted | Calling before assignment → `TypeError` |
| Arrow Function with `let/const` | Variable is hoisted but in TDZ | `ReferenceError` |

---

# 53. Important Correction About Hoisting

Do not say:

> "Only var and function declarations are hoisted."

A more accurate beginner-friendly statement is:

> JavaScript processes declarations during environment creation, but different declarations have different initialization and accessibility behavior.

For interviews, understand the behavior rather than memorizing only the word "hoisted."

---

# 54. Function Declaration vs Function Expression — Hoisting

### Function Declaration

```js
add();

function add() {
    console.log("Hello");
}
```

Output:

```text
Hello
```

### Function Expression

```js
add();

var add = function() {
    console.log("Hello");
};
```

Output:

```text
TypeError
```

### Arrow Function

```js
add();

const add = () => {
    console.log("Hello");
};
```

Output:

```text
ReferenceError
```

---

# 55. `this` in Functions

`this` refers to a value determined by how a function is called.

Example:

```js
const user = {
    name: "Vishal",

    greet: function() {
        console.log(this.name);
    }
};

user.greet();
```

Output:

```text
Vishal
```

Here `this` refers to the object used to call the method.

Arrow functions behave differently because they do not create their own `this`.

---

# 56. Arrow Function and `this`

Example:

```js
const user = {
    name: "Vishal",

    greet: () => {
        console.log(this.name);
    }
};

user.greet();
```

Do not expect the arrow function's `this` to refer to `user`.

Important interview point:

```text
Normal function → own this based on call
Arrow function  → lexical this
```

---

# 57. Nested Function + Closure Example

```js
function counter() {

    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let c = counter();

console.log(c());
console.log(c());
console.log(c());
```

Output:

```text
1
2
3
```

This is a classic interview example of closure.

---

# 58. Callback Example with `setTimeout`

```js
setTimeout(function() {
    console.log("Hello");
}, 1000);
```

The function passed to `setTimeout` is a callback.

The callback is executed later.

---

# 59. Array Methods and Callbacks

Callbacks are heavily used with array methods.

Example:

```js
let numbers = [1, 2, 3, 4];

let result = numbers.map(function(num) {
    return num * 2;
});

console.log(result);
```

Output:

```text
[2, 4, 6, 8]
```

Here the function passed to `map` is a callback.

---

# 60. `map()` with Arrow Function

```js
let numbers = [1, 2, 3, 4];

let result = numbers.map(num => num * 2);

console.log(result);
```

Output:

```text
[2, 4, 6, 8]
```

This demonstrates:

```text
Array method + callback + arrow function
```

---

# 61. `filter()` Callback

```js
let numbers = [1, 2, 3, 4, 5, 6];

let even = numbers.filter(num => num % 2 === 0);

console.log(even);
```

Output:

```text
[2, 4, 6]
```

`filter()` receives a callback function.

---

# 62. `reduce()` Callback

```js
let numbers = [1, 2, 3, 4];

let sum = numbers.reduce((total, num) => {
    return total + num;
}, 0);

console.log(sum);
```

Output:

```text
10
```

The callback receives values during the reduction process.

---

# 63. Function as a Value

Because functions are first-class values:

```js
let greet = function() {
    console.log("Hello");
};
```

We can store them.

We can pass them:

```js
function execute(fn) {
    fn();
}

execute(greet);
```

We can return them:

```js
function createFunction() {
    return function() {
        console.log("Hello");
    };
}
```

---

# 64. Constructor Function

Before ES6 classes became common, constructor functions were widely used to create objects.

Example:

```js
function Student(name, age) {
    this.name = name;
    this.age = age;
}

let student1 = new Student("Vishal", 20);

console.log(student1.name);
```

Output:

```text
Vishal
```

The `new` keyword creates a new object and calls the constructor function with the new object as its `this`.

---

# 65. Async Function

An async function is declared using the `async` keyword.

Example:

```js
async function getData() {
    return "Data received";
}

getData().then(result => {
    console.log(result);
});
```

Output:

```text
Data received
```

Important:

```text
async function → always returns a Promise
```

This becomes important when learning asynchronous JavaScript.

---

# 66. Function Declaration — Complete Example

```js
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
```

Output:

```text
30
```

---

# 67. Function Expression — Complete Example

```js
let multiply = function(a, b) {
    return a * b;
};

console.log(multiply(5, 4));
```

Output:

```text
20
```

---

# 68. Arrow Function — Complete Example

```js
let square = n => n * n;

console.log(square(5));
```

Output:

```text
25
```

---

# 69. IIFE — Complete Example

```js
(function() {
    console.log("Executed immediately");
})();
```

Output:

```text
Executed immediately
```

---

# 70. HOF + Callback — Complete Example

```js
function calculate(a, b, callback) {
    return callback(a, b);
}

function multiply(a, b) {
    return a * b;
}

console.log(calculate(5, 4, multiply));
```

Output:

```text
20
```

---

# 71. Common Beginner Mistakes

## Mistake 1 — Confusing parameters and arguments

Wrong:

```text
2 and 3 are parameters
```

Correct:

```text
a and b → parameters
2 and 3 → arguments
```

---

## Mistake 2 — Thinking `console.log()` returns a value

```js
function add(a, b) {
    console.log(a + b);
}

let result = add(2, 3);

console.log(result);
```

Output:

```text
5
undefined
```

Why?

The function prints `5`, but it does not return anything.

---

## Mistake 3 — Confusing HOF and callback

```js
function execute(fn) {
    fn();
}
```

`execute` is the HOF.

The function passed into `execute` is the callback.

---

## Mistake 4 — Calling arrow functions before declaration

```js
add();

const add = () => 10;
```

This gives:

```text
ReferenceError
```

---

## Mistake 5 — Saying `let` and `const` are not hoisted

A better explanation is:

```text
They are processed during environment creation,
but cannot be accessed before initialization because of TDZ.
```

---

## Mistake 6 — Thinking `return` prints output

```js
function add() {
    return 10;
}
```

Nothing is printed automatically.

To display it:

```js
console.log(add());
```

---

# 72. Declaration vs Initialization vs Assignment

This concept is useful with functions and variables.

### Declaration

```js
let x;
```

### Initialization

```js
let x = 10;
```

### Reassignment

```js
x = 20;
```

For a function expression:

```js
let add = function() {};
```

The variable is declared and initialized with a function value.

---

# 73. Interview Questions — Basic

## Q1. What is a function?

### Answer

A function is a reusable block of code designed to perform a specific task.

---

## Q2. Why do we use functions?

### Answer

Functions provide code reusability, reduce repetition, improve organization and make code easier to maintain.

---

## Q3. What is a parameter?

### Answer

A parameter is a variable defined in the function declaration or definition.

```js
function add(a, b) {}
```

Here `a` and `b` are parameters.

---

## Q4. What is an argument?

### Answer

An argument is the actual value passed to a function when it is called.

```js
add(2, 3);
```

Here `2` and `3` are arguments.

---

## Q5. What is the difference between return and console.log?

### Answer

`console.log()` displays a value, while `return` sends a value back from the function.

---

## Q6. What is a function declaration?

### Answer

A function declaration defines a named function using the `function` keyword.

```js
function greet() {
    console.log("Hello");
}
```

---

## Q7. What is a function expression?

### Answer

A function expression stores a function inside a variable.

```js
let greet = function() {
    console.log("Hello");
};
```

---

## Q8. What is an arrow function?

### Answer

An arrow function is a shorter function syntax introduced in ES6.

```js
let add = (a, b) => a + b;
```

---

## Q9. What is IIFE?

### Answer

IIFE stands for Immediately Invoked Function Expression. It is a function expression that is executed immediately after it is created.

---

## Q10. What is HOF?

### Answer

A Higher Order Function is a function that accepts another function as an argument or returns another function.

---

## Q11. What is a callback function?

### Answer

A callback is a function passed as an argument to another function and invoked by that function.

---

## Q12. What is a nested function?

### Answer

A function defined inside another function is called a nested function.

---

# 74. Interview Questions — Hoisting

## Q13. What is hoisting?

### Answer

Hoisting refers to JavaScript's handling of declarations during execution-context creation before normal code execution.

Different declarations have different initialization behavior.

---

## Q14. Is function declaration hoisted?

### Answer

Yes. A function declaration can generally be called before its declaration in the same scope.

```js
greet();

function greet() {
    console.log("Hello");
}
```

---

## Q15. What happens with `var` before declaration?

```js
console.log(x);

var x = 10;
```

Answer:

```text
undefined
```

---

## Q16. What happens with `let` before declaration?

```js
console.log(x);

let x = 10;
```

Answer:

```text
ReferenceError
```

Because `x` is in the Temporal Dead Zone before initialization.

---

## Q17. What is TDZ?

### Answer

TDZ stands for Temporal Dead Zone. It is the period in which a `let` or `const` binding exists in its scope but cannot be accessed before its initialization.

---

## Q18. Is `let` hoisted?

### Interview Answer

`let` declarations are processed during environment creation, but they are not accessible before initialization because of the TDZ.

---

## Q19. Is `const` hoisted?

### Interview Answer

`const` declarations are also processed during environment creation, but they cannot be accessed before initialization because of the TDZ.

---

# 75. Interview Questions — HOF and Callback

## Q20. What is the difference between HOF and callback?

### Answer

A Higher Order Function is the function that accepts another function or returns a function.

A callback is the function passed to another function.

Example:

```js
function execute(callback) {
    callback();
}

function greet() {
    console.log("Hello");
}

execute(greet);
```

Here:

```text
execute → HOF
greet   → callback
```

---

## Q21. Give a real-world example of callback.

### Answer

Array methods such as `map`, `filter`, and `reduce` use callback functions.

```js
let numbers = [1, 2, 3];

let result = numbers.map(num => num * 2);
```

The arrow function is the callback.

---

# 76. Interview Questions — Arrow Function

## Q22. Why were arrow functions introduced?

### Answer

They provide shorter function syntax and have lexical `this` behavior.

---

## Q23. What is implicit return?

Example:

```js
let add = (a, b) => a + b;
```

The expression is automatically returned.

This is called implicit return.

---

## Q24. Can arrow functions be used as constructors?

### Answer

No. Arrow functions cannot be used with `new` as constructor functions.

---

# 77. Interview Questions — IIFE

## Q25. What is the purpose of an IIFE?

### Answer

An IIFE is useful when code should execute immediately and its local variables should remain scoped within the function.

Example:

```js
(function() {
    let x = 10;
    console.log(x);
})();
```

---

# 78. Interview Questions — Closure

## Q26. What is closure?

### Answer

A closure occurs when an inner function retains access to variables from its outer lexical scope even after the outer function has finished executing.

---

## Q27. Give a closure example.

```js
function counter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let c = counter();

console.log(c());
console.log(c());
```

Output:

```text
1
2
```

---

# 79. Output-Based Interview Questions

## Question 1

```js
function add(a, b) {
    return a + b;
}

console.log(add(2, 3));
```

Answer:

```text
5
```

---

## Question 2

```js
function add(a, b) {
    console.log(a + b);
}

let result = add(2, 3);

console.log(result);
```

Answer:

```text
5
undefined
```

---

## Question 3

```js
greet();

function greet() {
    console.log("Hello");
}
```

Answer:

```text
Hello
```

---

## Question 4

```js
console.log(x);

var x = 10;
```

Answer:

```text
undefined
```

---

## Question 5

```js
console.log(x);

let x = 10;
```

Answer:

```text
ReferenceError
```

---

## Question 6

```js
hello();

var hello = function() {
    console.log("Hello");
};
```

Answer:

```text
TypeError
```

---

## Question 7

```js
hello();

const hello = () => {
    console.log("Hello");
};
```

Answer:

```text
ReferenceError
```

---

## Question 8

```js
let x = 10;

function test() {
    let x = 20;
    console.log(x);
}

test();
console.log(x);
```

Answer:

```text
20
10
```

---

## Question 9

```js
function outer() {

    let x = 10;

    function inner() {
        console.log(x);
    }

    inner();
}

outer();
```

Answer:

```text
10
```

---

## Question 10

```js
function outer() {

    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

let counter = outer();

counter();
counter();
```

Answer:

```text
1
2
```

---

## Question 11

```js
let add = (a, b) => a + b;

console.log(add(5, 5));
```

Answer:

```text
10
```

---

## Question 12

```js
function calculate(a, b, fn) {
    return fn(a, b);
}

console.log(
    calculate(2, 3, (a, b) => a * b)
);
```

Answer:

```text
6
```

---

# 80. Practical Example — Shopping Cart

```js
function calculatePrice(price, quantity) {
    return price * quantity;
}

let total = calculatePrice(500, 3);

console.log(total);
```

Output:

```text
1500
```

This demonstrates:

```text
Function
Parameters
Arguments
Return
Function call
```

---

# 81. Practical Example — Login

```js
function login(username, password) {

    if (username === "admin" && password === "1234") {
        return true;
    }

    return false;
}

console.log(login("admin", "1234"));
```

Output:

```text
true
```

---

# 82. Practical Example — Student Result

```js
function calculatePercentage(marks, total) {
    return (marks / total) * 100;
}

console.log(calculatePercentage(450, 500));
```

Output:

```text
90
```

---

# 83. Function Mental Model

Remember:

```text
                 FUNCTION
                     |
        -----------------------------
        |             |             |
   Declaration    Expression      Arrow
        |
      HOF / Callback / IIFE / Nested
```

And:

```text
Function
   |
   +-- Parameters
   |
   +-- Arguments
   |
   +-- Body
   |
   +-- Return
   |
   +-- Call
```

---

# 84. Hoisting Mental Model

```text
                 HOISTING
                    |
        -------------------------
        |           |           |
      var       function      let/const
        |       declaration       |
    undefined     usable          TDZ
```

Remember:

```text
var before initialization → undefined

function declaration before declaration → works

let before initialization → ReferenceError

const before initialization → ReferenceError

function expression with var before assignment → TypeError
```

---

# 85. One-Page Revision Sheet

## Function

```text
Function → reusable block of code
```

## Function Types

```text
1. Function Declaration
2. Function Expression
3. Arrow Function
4. IIFE
5. HOF
6. Callback
7. Nested Function
8. Anonymous Function
9. Constructor Function
10. Recursive Function
11. Async Function
```

## Parameters vs Arguments

```text
Parameter → function definition

Argument → function call
```

## Return

```text
return → sends value back

console.log → displays value
```

## Arrow Function

```text
Shorter syntax
ES6
Lexical this
```

## IIFE

```text
Immediately Invoked Function Expression
```

## HOF

```text
Accepts function
OR
Returns function
```

## Callback

```text
Function passed to another function
```

## Nested Function

```text
Function inside another function
```

## Closure

```text
Inner function remembers outer variables
```

## Hoisting

```text
var → undefined before assignment

function declaration → callable before declaration

let → TDZ

const → TDZ
```

## TDZ

```text
Temporal Dead Zone
```

## Scope

```text
Global
Function
Block
Lexical
```

---

# 86. Mini Interview Round

Try answering these WITHOUT looking at the answers.

### Q1

What is a function?

### Q2

Why do we use functions?

### Q3

What is the difference between a parameter and an argument?

### Q4

What is the difference between `return` and `console.log()`?

### Q5

What is a function declaration?

### Q6

What is a function expression?

### Q7

What is an anonymous function?

### Q8

What is an arrow function?

### Q9

What is implicit return?

### Q10

What is an IIFE?

### Q11

What is a Higher Order Function?

### Q12

What is a callback function?

### Q13

What is a nested function?

### Q14

What is a closure?

### Q15

What is hoisting?

### Q16

What happens when `var` is accessed before assignment?

### Q17

What happens when `let` is accessed before initialization?

### Q18

What is TDZ?

### Q19

What is the difference between function declaration and function expression?

### Q20

Why does a function expression with `var` give `TypeError` when called before assignment?

### Q21

Why does an arrow function with `const` give `ReferenceError` before initialization?

### Q22

What is lexical scope?

### Q23

What is the difference between normal function `this` and arrow function `this`?

### Q24

What is recursion?

### Q25

What is a pure function?

---

# 87. Important Interview Answers — Short Version

### Function

> A function is a reusable block of code designed to perform a specific task.

### Function Declaration

> A named function declared using the `function` keyword.

### Function Expression

> A function stored inside a variable.

### Arrow Function

> A shorter function syntax introduced in ES6 that also has lexical `this` behavior.

### IIFE

> Immediately Invoked Function Expression; it executes immediately after creation.

### HOF

> A function that accepts another function or returns another function.

### Callback

> A function passed to another function and invoked by it.

### Closure

> A function retaining access to variables from its outer lexical scope.

### Hoisting

> JavaScript processes declarations during execution-context creation before normal execution, with different behaviors for different declaration types.

### TDZ

> Temporal Dead Zone is the period before a `let` or `const` binding is initialized where accessing it causes a `ReferenceError`.

---

# 88. Final Interview Checklist

Before moving to the next chapter, you should be able to explain:

- [ ] What is a function?
- [ ] Why are functions useful?
- [ ] Function declaration
- [ ] Function expression
- [ ] Anonymous function
- [ ] Arrow function
- [ ] IIFE
- [ ] HOF
- [ ] Callback function
- [ ] Nested function
- [ ] Parameters
- [ ] Arguments
- [ ] Return
- [ ] `return` vs `console.log`
- [ ] Default parameters
- [ ] Rest parameters
- [ ] `arguments`
- [ ] First-class functions
- [ ] Scope
- [ ] Function scope
- [ ] Block scope
- [ ] Lexical scope
- [ ] Closure
- [ ] Recursion
- [ ] Pure function
- [ ] Side effects
- [ ] Constructor function
- [ ] Async function basics
- [ ] Hoisting
- [ ] Function declaration hoisting
- [ ] `var` hoisting
- [ ] `let` behavior
- [ ] `const` behavior
- [ ] TDZ
- [ ] Function expression hoisting
- [ ] Arrow function hoisting
- [ ] `this` basics
- [ ] Arrow function `this`
- [ ] Output-based questions

---

# 89. Chapter 2 Golden Rules

```text
1. Function = reusable block of code.

2. Parameter = variable in function definition.

3. Argument = actual value passed during function call.

4. return sends a value back from a function.

5. console.log displays a value.

6. Function declaration is named.

7. Function expression stores a function in a variable.

8. Arrow functions provide shorter syntax.

9. Arrow functions have lexical this.

10. IIFE executes immediately.

11. HOF accepts a function or returns a function.

12. Callback is a function passed to another function.

13. Nested function is a function inside another function.

14. Closure allows an inner function to retain access to outer variables.

15. var before assignment gives undefined.

16. Function declarations can be called before their declaration.

17. let and const cannot be accessed before initialization.

18. Accessing let/const before initialization causes ReferenceError.

19. The period before let/const initialization is called TDZ.

20. Function expression with var called before assignment causes TypeError.

21. Arrow function stored in let/const cannot be accessed before initialization.

22. Functions are first-class values in JavaScript.

23. A recursive function calls itself.

24. A pure function produces the same output for the same input without observable side effects.

25. Understand behavior instead of memorizing only the word "hoisting".
```

---

# 90. Practice Rule

Don't just read these notes.

For every code example:

```text
1. Predict the output.

2. Run the code.

3. Compare your answer.

4. Explain WHY the output came.

5. Modify the input.

6. Predict the new output.

7. Explain the concept without looking at the notes.
```

This is especially important for:

```text
Functions
Return
Parameters
Callbacks
HOF
Closures
Hoisting
TDZ
Scope
Arrow Functions
```

That is how you turn memorized JavaScript into actual interview understanding.
