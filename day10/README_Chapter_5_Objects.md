# JavaScript Objects — Complete Notes & Interview Guide

## 1. What is an Object?

An **Object** is a collection of properties and methods stored in `key: value` form.

```js
let student = {
    name: "Ravi",
    age: 24,
    section: "D"
};

console.log(student);
```

Output:

```text
{
  name: "Ravi",
  age: 24,
  section: "D"
}
```

Here:

```text
name     → key
"Ravi"   → value

age      → key
24       → value
```

A property can store almost any JavaScript value:

```js
let student = {
    name: "Ravi",
    age: 24,
    marks: [80, 90, 85],
    address: {
        city: "Meerut"
    }
};
```

---

# 2. Creating an Object

The most common way is an **object literal**.

```js
let student = {
    name: "Ravi",
    age: 24
};
```

You can also create an empty object:

```js
let student = {};

student.name = "Ravi";
student.age = 24;
```

---

# 3. Object Properties

Properties describe the data stored inside an object.

```js
let student = {
    name: "Ravi",
    age: 24,
    section: "D"
};
```

Here the properties are:

```text
name
age
section
```

Access them using the property name.

---

# 4. Accessing Object Properties

There are two common ways:

## Dot Notation

```js
let student = {
    name: "Ravi",
    age: 24
};

console.log(student.name);
// Ravi

console.log(student.age);
// 24
```

---

## Bracket Notation

```js
console.log(student["name"]);
// Ravi

console.log(student["age"]);
// 24
```

### Interview Difference

Dot notation:

```js
student.name
```

Bracket notation:

```js
student["name"]
```

Bracket notation is especially useful when the property name is stored in a variable.

```js
let key = "name";

console.log(student[key]);
// Ravi
```

Be careful:

```js
console.log(student.key);
// undefined
```

Because `student.key` looks for a property literally named `"key"`.

---

# 5. Object Method

When a function is stored as an object property, it is commonly called a **method**.

```js
let student = {
    name: "Ravi",

    demo: function() {
        console.log("Hello Invertis");
    }
};

student.demo();
```

Output:

```text
Hello Invertis
```

---

# 6. Important `return` Concept in Methods

Consider:

```js
let student = {
    demo: function() {
        console.log("Hello Invertis");
    }
};

console.log(student.demo());
```

Output:

```text
Hello Invertis
undefined
```

Why?

Because:

```js
demo()
```

prints the message but does not return anything.

If we use `return`:

```js
let student = {
    demo: function() {
        return "Hello Invertis";
    }
};

console.log(student.demo());
```

Output:

```text
Hello Invertis
```

### Interview Rule

```text
console.log() → prints a value
return        → sends a value back from a function
```

---

# 7. Adding a Property

Properties can be added after object creation.

```js
let pen = {
    color: "red",
    brand: "cello"
};

pen.price = 10;

console.log(pen);
```

Now the object contains:

```js
{
    color: "red",
    brand: "cello",
    price: 10
}
```

Bracket notation can also be used:

```js
pen["company"] = "Classmate";
```

---

# 8. Updating a Property

If the property already exists, assigning a new value updates it.

```js
let pen = {
    color: "red",
    brand: "cello",
    price: 10
};

pen.price = 20;

console.log(pen.price);
// 20
```

Bracket notation:

```js
pen["price"] = 30;
```

---

# 9. Deleting a Property

Use the `delete` operator.

```js
let pen = {
    color: "red",
    brand: "cello",
    price: 20
};

delete pen.color;

console.log(pen);
```

Result:

```js
{
    brand: "cello",
    price: 20
}
```

Check:

```js
console.log(pen.color);
// undefined
```

---

# 10. Object Keys

`Object.keys()` returns an array containing the object's own enumerable property names.

```js
let pen = {
    color: "red",
    brand: "cello",
    price: 20
};

console.log(Object.keys(pen));
```

Output:

```js
["color", "brand", "price"]
```

---

# 11. Object Values

`Object.values()` returns an array containing the object's own enumerable property values.

```js
console.log(Object.values(pen));
```

Output:

```js
["red", "cello", 20]
```

---

# 12. Object Entries

`Object.entries()` returns an array of `[key, value]` pairs.

```js
console.log(Object.entries(pen));
```

Output:

```js
[
    ["color", "red"],
    ["brand", "cello"],
    ["price", 20]
]
```

Remember:

```text
Object.keys()    → keys
Object.values()  → values
Object.entries() → key + value pairs
```

---

# 13. Iterating Over an Object

## `for...in`

`for...in` can be used to iterate over enumerable property keys.

```js
let student = {
    name: "Ravi",
    age: 24,
    section: "D"
};

for (let key in student) {
    console.log(key);
}
```

Output:

```text
name
age
section
```

To get values:

```js
for (let key in student) {
    console.log(student[key]);
}
```

Output:

```text
Ravi
24
D
```

To get both:

```js
for (let key in student) {
    console.log(key, student[key]);
}
```

---

# 14. Nested Object

An object can contain another object.

```js
let student = {
    name: "Vishal",
    age: 20,

    address: {
        state: "UP",
        city: "Pilibhit"
    }
};
```

Access outer property:

```js
console.log(student.name);
// Vishal
```

Access nested property:

```js
console.log(student.address.city);
// Pilibhit
```

Access complete nested object:

```js
console.log(student.address);
```

Output:

```js
{
    state: "UP",
    city: "Pilibhit"
}
```

---

# 15. Nested Arrays Inside Objects

An object can contain arrays.

```js
let student = {
    name: "Vishal",
    section: ["A", "B", "C"]
};

console.log(student.section);
```

Access an array element:

```js
console.log(student.section[0]);
// A
```

---

# 16. Object Containing Array and Object

Objects can contain different data structures.

```js
let student = {
    name: "Vishal",
    age: 20,

    section: ["A", "B", "C"],

    address: {
        state: "UP",
        city: "Pilibhit"
    }
};

console.log(student.name);
console.log(student.section[1]);
console.log(student.address.city);
```

Output:

```text
Vishal
B
Pilibhit
```

---

# 17. Object with Function

```js
let student = {
    name: "Ravi",

    greet: function() {
        console.log("Hello");
    }
};

student.greet();
```

Modern shorthand:

```js
let student = {
    name: "Ravi",

    greet() {
        console.log("Hello");
    }
};

student.greet();
```

---

# 18. `this` Keyword in Object

`this` commonly refers to the object from which a regular method is called.

```js
let student = {
    name: "Ravi",

    greet: function() {
        console.log(this.name);
    }
};

student.greet();
// Ravi
```

Here:

```js
this.name
```

refers to:

```js
student.name
```

---

# 19. `this` with Multiple Properties

```js
let student = {
    name: "Ravi",
    age: 24,

    intro() {
        console.log(`My name is ${this.name}`);
        console.log(`My age is ${this.age}`);
    }
};

student.intro();
```

Output:

```text
My name is Ravi
My age is 24
```

---

# 20. Constructor Function

Before ES6 classes, constructor functions were commonly used to create multiple similar objects.

```js
function Person(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}
```

Create objects using `new`:

```js
let p1 = new Person("Sohan", 23, 10000);
let p2 = new Person("Sohan", 24, 20000);

console.log(p1);
console.log(p2);
```

Important:

JavaScript is case-sensitive.

```js
new Person(...)
```

is not the same as:

```js
new personalbar(...)
```

---

# 21. What Does `new` Do?

When calling a constructor with `new`, JavaScript broadly:

1. Creates a new object.
2. Links that object to the constructor's prototype.
3. Calls the constructor with `this` referring to the new object.
4. Returns the new object (unless the constructor explicitly returns another object).

Example:

```js
function Person(name) {
    this.name = name;
}

let p1 = new Person("Sohan");

console.log(p1.name);
// Sohan
```

---

# 22. Constructor Function vs Normal Function

Constructor:

```js
function Person(name) {
    this.name = name;
}

let p = new Person("Ravi");
```

Normal function:

```js
function greet(name) {
    console.log(name);
}

greet("Ravi");
```

The `new` keyword is what makes the call a constructor-style object creation.

By convention, constructor functions are written with a capital first letter:

```text
Person
Student
Employee
Car
```

---

# 23. Object References

Objects are reference values.

```js
let obj1 = {
    name: "Ravi"
};

let obj2 = obj1;

obj2.name = "Sohan";

console.log(obj1.name);
// Sohan
```

Why?

Both variables refer to the same object.

```text
obj1 ──┐
       ├──> { name: "Sohan" }
obj2 ──┘
```

---

# 24. Copying an Object with Spread

The spread operator can create a **shallow copy**.

```js
let obj1 = {
    name: "Ravi",
    age: 24
};

let obj2 = {
    ...obj1
};

obj2.name = "Sohan";

console.log(obj1.name);
// Ravi

console.log(obj2.name);
// Sohan
```

For this simple object, changing a top-level property does not change the original.

---

# 25. Shallow Copy and Nested Objects

Spread only makes a shallow copy.

```js
let obj1 = {
    name: "Ravi",
    address: {
        city: "Meerut"
    }
};

let obj2 = {
    ...obj1
};

obj2.address.city = "Delhi";

console.log(obj1.address.city);
// Delhi
```

Why?

The nested `address` object is still shared.

This is an important interview concept.

---

# 26. `Object.assign()`

Another way to make a shallow copy:

```js
let obj1 = {
    name: "Ravi",
    age: 24
};

let obj2 = Object.assign({}, obj1);

console.log(obj2);
```

Both:

```js
{ ...obj1 }
```

and:

```js
Object.assign({}, obj1)
```

perform shallow copying.

---

# 27. Optional Chaining `?.`

Optional chaining helps safely access nested properties when an intermediate value may be `null` or `undefined`.

```js
let student = {
    name: "Ravi"
};

console.log(student.address?.city);
// undefined
```

Without optional chaining:

```js
console.log(student.address.city);
```

This would throw an error because `student.address` is `undefined`.

---

# 28. Nullish Coalescing `??`

Provides a fallback when a value is `null` or `undefined`.

```js
let student = {
    name: "Ravi"
};

console.log(student.age ?? 18);
// 18
```

Difference from `||`:

```js
let age = 0;

console.log(age || 18);
// 18

console.log(age ?? 18);
// 0
```

`??` only falls back for:

```text
null
undefined
```

---

# 29. Property Existence

## `in` Operator

Checks whether a property exists in an object or its prototype chain.

```js
let student = {
    name: "Ravi",
    age: 24
};

console.log("name" in student);
// true

console.log("salary" in student);
// false
```

---

# 30. `hasOwnProperty()`

Checks whether the property belongs directly to the object.

```js
let student = {
    name: "Ravi"
};

console.log(student.hasOwnProperty("name"));
// true

console.log(student.hasOwnProperty("age"));
// false
```

Interview distinction:

```text
in              → own + inherited properties
hasOwnProperty  → own properties
```

---

# 31. Object Destructuring

Destructuring extracts properties into variables.

```js
let student = {
    name: "Ravi",
    age: 24
};

let { name, age } = student;

console.log(name);
// Ravi

console.log(age);
// 24
```

---

# 32. Renaming During Destructuring

```js
let student = {
    name: "Ravi",
    age: 24
};

let { name: studentName } = student;

console.log(studentName);
// Ravi
```

---

# 33. Default Value in Destructuring

```js
let student = {
    name: "Ravi"
};

let { name, age = 18 } = student;

console.log(name);
// Ravi

console.log(age);
// 18
```

---

# 34. Object Shorthand

If property name and variable name are the same:

```js
let name = "Ravi";
let age = 24;

let student = {
    name,
    age
};

console.log(student);
```

Equivalent to:

```js
let student = {
    name: name,
    age: age
};
```

---

# 35. Computed Property Names

Property names can be created dynamically.

```js
let key = "name";

let student = {
    [key]: "Ravi"
};

console.log(student.name);
// Ravi
```

Another example:

```js
let property = "age";

let student = {
    [property]: 24
};

console.log(student.age);
// 24
```

---

# 36. Object.freeze()

`Object.freeze()` prevents changes to an object at the top level.

```js
let student = {
    name: "Ravi",
    age: 24
};

Object.freeze(student);

student.age = 30;

console.log(student.age);
// 24
```

In strict mode, attempted modifications can throw errors.

Important:

`freeze()` is shallow.

---

# 37. Object.seal()

`Object.seal()` prevents adding or deleting properties, but existing properties can still be changed.

```js
let student = {
    name: "Ravi",
    age: 24
};

Object.seal(student);

student.age = 30;       // allowed
student.city = "Meerut"; // not added
delete student.name;    // not deleted
```

Difference:

```text
freeze()
→ cannot add
→ cannot delete
→ cannot update

seal()
→ cannot add
→ cannot delete
→ can update existing properties
```

---

# 38. `Object.create()`

Creates a new object with a specified prototype.

```js
let person = {
    greet() {
        console.log("Hello");
    }
};

let student = Object.create(person);

student.name = "Ravi";

console.log(student.name);
student.greet();
```

This is related to JavaScript's prototype system.

---

# 39. Object Equality

Two separate objects with the same properties are not equal by reference.

```js
let a = {
    name: "Ravi"
};

let b = {
    name: "Ravi"
};

console.log(a === b);
// false
```

Because `a` and `b` refer to different objects.

But:

```js
let a = {
    name: "Ravi"
};

let b = a;

console.log(a === b);
// true
```

Both variables refer to the same object.

---

# 40. Object Keys and Numeric Keys

Object property keys are generally strings or symbols.

```js
let obj = {
    1: "one"
};

console.log(obj[1]);
// one

console.log(obj["1"]);
// one
```

The numeric-looking key is treated as a string property key.

---

# 41. Object with Dynamic Keys

```js
let key = "salary";

let employee = {};

employee[key] = 50000;

console.log(employee);
```

Output:

```js
{
    salary: 50000
}
```

This is one reason bracket notation is important.

---

# 42. Converting Object Data

## Object → Entries

```js
let student = {
    name: "Ravi",
    age: 24
};

let entries = Object.entries(student);

console.log(entries);
```

Output:

```js
[
    ["name", "Ravi"],
    ["age", 24]
]
```

## Entries → Object

```js
let entries = [
    ["name", "Ravi"],
    ["age", 24]
];

let student = Object.fromEntries(entries);

console.log(student);
```

---

# 43. JSON and Objects

JSON is a text format commonly used for data exchange.

Object:

```js
let student = {
    name: "Ravi",
    age: 24
};
```

Object → JSON string:

```js
let json = JSON.stringify(student);

console.log(json);
```

JSON string → Object:

```js
let obj = JSON.parse(json);

console.log(obj.name);
```

Remember:

```text
JSON.stringify() → Object → String
JSON.parse()     → JSON String → Object
```

---

# 44. Common Object Methods — Quick Table

| Method / Operator | Purpose |
|---|---|
| `Object.keys()` | Returns keys |
| `Object.values()` | Returns values |
| `Object.entries()` | Returns key-value pairs |
| `Object.fromEntries()` | Entries → object |
| `Object.assign()` | Copies/merges objects |
| `Object.freeze()` | Prevents top-level modifications |
| `Object.seal()` | Prevents add/delete |
| `Object.create()` | Creates object with specified prototype |
| `delete` | Deletes a property |
| `in` | Checks property in object/prototype chain |
| `hasOwnProperty()` | Checks own property |
| `?.` | Optional property access |
| `??` | Nullish fallback |

---

# 45. Important Interview Questions

## Q1. What is an object?

An object is a collection of properties represented using key-value pairs. It can also contain functions as methods.

---

## Q2. What are the two common ways to access object properties?

```js
student.name;
student["name"];
```

---

## Q3. When should bracket notation be used?

It is useful when the property name is dynamic or cannot be conveniently accessed with dot notation.

```js
let key = "name";

console.log(student[key]);
```

---

## Q4. How do you add a property?

```js
student.city = "Meerut";
```

---

## Q5. How do you update a property?

```js
student.age = 25;
```

---

## Q6. How do you delete a property?

```js
delete student.age;
```

---

## Q7. Difference between `Object.keys()`, `Object.values()` and `Object.entries()`?

```text
keys()
    → keys

values()
    → values

entries()
    → [key, value] pairs
```

---

## Q8. What is a nested object?

An object inside another object.

```js
let student = {
    address: {
        city: "Meerut"
    }
};
```

Access:

```js
student.address.city;
```

---

## Q9. What happens when two variables point to the same object?

They reference the same object.

```js
let a = { name: "Ravi" };
let b = a;

b.name = "Sohan";

console.log(a.name);
// Sohan
```

---

## Q10. What is a shallow copy?

A shallow copy creates a new outer object, but nested objects/arrays can still be shared.

```js
let b = { ...a };
```

---

## Q11. Difference between `Object.freeze()` and `Object.seal()`?

```text
freeze()
→ no add
→ no delete
→ no update

seal()
→ no add
→ no delete
→ update allowed
```

---

## Q12. What does `this` refer to inside a regular object method?

When called as `object.method()`, `this` normally refers to the object before the dot.

```js
let user = {
    name: "Ravi",

    greet() {
        console.log(this.name);
    }
};

user.greet();
// Ravi
```

---

# 46. Output-Based Interview Questions

## Question 1

```js
let student = {
    name: "Ravi",
    age: 24
};

console.log(student.name);
```

Answer:

```text
Ravi
```

---

## Question 2

```js
let student = {
    name: "Ravi",
    age: 24
};

student.age = 30;

console.log(student.age);
```

Answer:

```text
30
```

---

## Question 3

```js
let student = {
    name: "Ravi",
    age: 24
};

delete student.age;

console.log(student.age);
```

Answer:

```text
undefined
```

---

## Question 4

```js
let student = {
    name: "Ravi",
    address: {
        city: "Meerut"
    }
};

console.log(student.address.city);
```

Answer:

```text
Meerut
```

---

## Question 5

```js
let a = {
    name: "Ravi"
};

let b = a;

b.name = "Sohan";

console.log(a.name);
```

Answer:

```text
Sohan
```

---

## Question 6

```js
let a = {
    name: "Ravi"
};

let b = {
    name: "Ravi"
};

console.log(a === b);
```

Answer:

```text
false
```

---

## Question 7

```js
let student = {
    name: "Ravi",
    age: 24
};

console.log(Object.keys(student));
```

Answer:

```js
["name", "age"]
```

---

## Question 8

```js
let student = {
    name: "Ravi",
    age: 24
};

console.log(Object.values(student));
```

Answer:

```js
["Ravi", 24]
```

---

## Question 9

```js
let student = {
    name: "Ravi"
};

let key = "name";

console.log(student[key]);
```

Answer:

```text
Ravi
```

---

## Question 10

```js
let student = {
    name: "Ravi",

    demo() {
        console.log("Hello");
    }
};

console.log(student.demo());
```

Answer:

```text
Hello
undefined
```

Because `demo()` does not return a value.

---

# 47. Coding Interview Practice

## Problem 1 — Find Object Keys

Given:

```js
let student = {
    name: "Ravi",
    age: 24,
    city: "Meerut"
};
```

Print all keys.

Expected:

```text
name
age
city
```

---

## Problem 2 — Find Object Values

Print all values using:

```js
Object.values()
```

---

## Problem 3 — Count Object Properties

Given:

```js
let student = {
    name: "Ravi",
    age: 24,
    city: "Meerut"
};
```

Expected:

```text
3
```

Hint:

```js
Object.keys(student).length
```

---

## Problem 4 — Check Property

Check whether `"age"` exists in the object.

Use:

```js
"age" in student
```

---

## Problem 5 — Find Maximum Salary

Given:

```js
let employees = [
    { name: "A", salary: 20000 },
    { name: "B", salary: 50000 },
    { name: "C", salary: 30000 }
];
```

Find the employee with the highest salary.

---

## Problem 6 — Nested Object Access

Given:

```js
let company = {
    name: "ABC",
    address: {
        city: "Meerut",
        state: "UP"
    }
};
```

Print:

```text
Meerut
UP
```

---

# 48. Common Mistakes

### Mistake 1 — Using wrong property access

Wrong:

```js
let key = "name";

console.log(student.key);
```

Correct:

```js
console.log(student[key]);
```

---

### Mistake 2 — Confusing update and add

```js
student.age = 25;
```

If `age` already exists → update.

If it doesn't exist → add.

---

### Mistake 3 — Thinking object assignment creates a copy

```js
let b = a;
```

This does not create an independent copy.

Both reference the same object.

---

### Mistake 4 — Forgetting `delete`

```js
delete student.age;
```

Use `delete` to remove a property.

---

### Mistake 5 — Confusing `console.log()` and `return`

```js
demo() {
    console.log("Hello");
}
```

This prints `"Hello"` but returns `undefined`.

---

# 49. Important Interview Traps

## Trap 1 — Reference

```js
let a = { x: 10 };
let b = a;

b.x = 20;

console.log(a.x);
```

Answer:

```text
20
```

---

## Trap 2 — Different Objects

```js
let a = { x: 10 };
let b = { x: 10 };

console.log(a === b);
```

Answer:

```text
false
```

---

## Trap 3 — Dynamic Key

```js
let key = "name";

let user = {
    name: "Ravi"
};

console.log(user[key]);
```

Answer:

```text
Ravi
```

---

## Trap 4 — `delete`

```js
let user = {
    name: "Ravi",
    age: 24
};

delete user.age;

console.log(user);
```

`age` is removed.

---

## Trap 5 — Nested Object Reference

```js
let a = {
    address: {
        city: "Meerut"
    }
};

let b = { ...a };

b.address.city = "Delhi";

console.log(a.address.city);
```

Answer:

```text
Delhi
```

Because spread makes a shallow copy.

---

# 50. Object vs Array

| Object | Array |
|---|---|
| Key-value structure | Ordered collection |
| Usually accessed by property/key | Usually accessed by index |
| `{}` | `[]` |
| `obj.name` | `arr[0]` |
| `Object.keys()` | Array methods like `map()` |
| Properties can have descriptive names | Numeric indexes are standard |

Example:

```js
let student = {
    name: "Ravi",
    age: 24
};

let marks = [80, 90, 85];
```

---

# 51. Object vs Primitive Values

Primitive examples:

```js
string
number
boolean
undefined
null
bigint
symbol
```

Object examples include:

```js
{}
[]
function() {}
```

Important:

```js
typeof {};
// "object"

typeof [];
// "object"

typeof function(){};
// "function"
```

---

# 52. Quick Revision

```text
Object
│
├── Create
│   └── {}
│
├── Access
│   ├── obj.key
│   └── obj["key"]
│
├── Modify
│   ├── Add
│   ├── Update
│   └── Delete
│
├── Inspect
│   ├── Object.keys()
│   ├── Object.values()
│   └── Object.entries()
│
├── Iterate
│   └── for...in
│
├── Nested Data
│   ├── Object inside Object
│   └── Array inside Object
│
├── Functions
│   └── Methods
│
├── Context
│   └── this
│
├── Copy
│   ├── Spread
│   └── Object.assign()
│
├── Modern Features
│   ├── Destructuring
│   ├── Optional chaining ?.
│   └── Nullish coalescing ??
│
└── Object Control
    ├── freeze()
    └── seal()
```

---

# 53. Golden Rules for Interviews

1. Object stores data in key-value pairs.
2. Properties can contain any valid JavaScript value.
3. Functions stored inside objects are commonly called methods.
4. Use `obj.key` for normal property access.
5. Use `obj[key]` when the key is dynamic.
6. `obj.key` and `obj["key"]` can access the same property.
7. `Object.keys()` returns keys.
8. `Object.values()` returns values.
9. `Object.entries()` returns `[key, value]` pairs.
10. `for...in` iterates over enumerable property keys.
11. Objects are reference values.
12. `let b = a` does not create an independent object.
13. `{ ...a }` creates a shallow copy.
14. Nested objects can still be shared after a shallow copy.
15. `delete obj.key` removes a property.
16. `this` in a regular method commonly refers to the calling object.
17. Constructor functions can be called with `new`.
18. `Object.freeze()` prevents top-level changes.
19. `Object.seal()` prevents adding/deleting but allows updating existing properties.
20. Optional chaining `?.` safely handles missing intermediate properties.
21. `??` provides a fallback for `null` and `undefined`.
22. Objects are compared by reference, not by structural content.
23. `Object.fromEntries()` converts entry pairs into an object.
24. `JSON.stringify()` converts a value to a JSON string.
25. `JSON.parse()` converts valid JSON text into a JavaScript value.

---

# 54. Final Interview Checklist

Before moving ahead, make sure you can explain and code:

- [ ] What is an Object?
- [ ] Object literal
- [ ] Properties
- [ ] Methods
- [ ] Dot notation
- [ ] Bracket notation
- [ ] Dynamic keys
- [ ] Add property
- [ ] Update property
- [ ] Delete property
- [ ] `Object.keys()`
- [ ] `Object.values()`
- [ ] `Object.entries()`
- [ ] `for...in`
- [ ] Nested objects
- [ ] Arrays inside objects
- [ ] `this`
- [ ] Constructor function
- [ ] `new`
- [ ] Object references
- [ ] Shallow copy
- [ ] Spread operator
- [ ] `Object.assign()`
- [ ] Object destructuring
- [ ] Property shorthand
- [ ] Computed property names
- [ ] Optional chaining
- [ ] Nullish coalescing
- [ ] `in`
- [ ] `hasOwnProperty()`
- [ ] `Object.freeze()`
- [ ] `Object.seal()`
- [ ] Object equality
- [ ] `Object.fromEntries()`
- [ ] JSON `parse()` / `stringify()`
- [ ] Output-based questions
- [ ] Object coding problems

---

# Conclusion

JavaScript Objects are one of the most important foundations of JavaScript.

The learning flow should be:

```text
Object
   ↓
Properties & Methods
   ↓
Access
   ↓
Add / Update / Delete
   ↓
Keys / Values / Entries
   ↓
Nested Objects
   ↓
this
   ↓
Constructor Function + new
   ↓
Reference & Shallow Copy
   ↓
Destructuring
   ↓
Modern Object Features
   ↓
Interview Problems
```

Master these concepts before moving to advanced topics such as:

```text
Prototype
Prototype Chain
Classes
Inheritance
Getters / Setters
Object-oriented JavaScript
```
