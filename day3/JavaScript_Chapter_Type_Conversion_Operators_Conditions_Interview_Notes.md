# JavaScript Chapter — Type Conversion, Truthy/Falsy, Operators & Conditions

## Goal
By the end of this chapter you should be able to explain type conversion, truthy/falsy, `==` vs `===`, operators, `if/else`, and template literals in an interview.

---

## 1. Type Conversion

Type conversion means converting a value from one datatype to another.

Two types:
1. Implicit conversion — JavaScript does it automatically.
2. Explicit conversion — programmer does it manually.

---

## 2. Implicit Type Conversion

JavaScript automatically converts values when an operation requires it.

### `+` with a String

```js
console.log(10 + "10"); // "1010"
```

`+` can perform String concatenation.

Conceptually:
```text
10 + "10"
→ "10" + "10"
→ "1010"
```

### `-`, `*`, `/`, `%`

These normally perform numeric conversion.

```js
console.log(10 - "10"); // 0
console.log(10 * "10"); // 100
console.log(10 / "10"); // 1
console.log(10 % "10"); // 0
```

Golden rule:
```text
+  → addition OR String concatenation
-  → numeric operation
*  → numeric operation
/  → numeric operation
%  → numeric operation
```

---

## 3. Important Output Questions

### Example 1

```js
console.log(2 + 2 + "100");
```

Dry run:
```text
2 + 2 = 4
4 + "100" = "4100"
```

Output:
```text
"4100"
```

### Example 2

```js
console.log(2 + "100" + 2);
```

Dry run:
```text
2 + "100" → "2100"
"2100" + 2 → "21002"
```

Output:
```text
"21002"
```

### Example 3

```js
console.log(2 + "100" + 2 - 1);
```

Dry run:
```text
2 + "100" → "2100"
"2100" + 2 → "21002"
"21002" - 1 → 21001
```

Final output:
```text
21001
```

Final type is Number.

### Example 4

```js
console.log(2 + "100" + 2 - 1 + "1");
```

Dry run:
```text
2 + "100" → "2100"
"2100" + 2 → "21002"
"21002" - 1 → 21001
21001 + "1" → "210011"
```

Final output:
```text
"210011"
```

---

## 4. Operator Precedence

```js
console.log(20 * 2 + 100);
```

Multiplication happens first:
```text
20 * 2 = 40
40 + 100 = 140
```

Output:
```text
140
```

Use parentheses when you want to make the order clear:

```js
console.log((20 + 2) * 100); // 2200
```

---

# 5. Explicit Type Conversion

Explicit conversion means manually converting a value.

Main functions:
```js
Number()
String()
Boolean()
```

### Number()

```js
console.log(Number("10")); // 10
```

```js
let x = Number("10");
console.log(typeof x); // number
```

### String()

```js
console.log(String(10)); // "10"
```

```js
let x = String(10);
console.log(typeof x); // string
```

### Boolean()

```js
console.log(Boolean("10")); // true
console.log(Boolean(""));   // false
```

---

## 6. Combining Explicit Conversion

```js
console.log(10 + Number("10")); // 20
```

Because:
```text
Number("10") → 10
10 + 10 → 20
```

```js
console.log(10 + String(10)); // "1010"
```

Because:
```text
String(10) → "10"
10 + "10" → "1010"
```

```js
console.log(10 + Boolean("10")); // 11
```

Because:
```text
Boolean("10") → true
true in numeric addition → 1
10 + 1 → 11
```

---

# 7. Truthy and Falsy Values

When JavaScript expects a Boolean, values are treated as truthy or falsy.

## Falsy values

Memorize these:

```text
false
0
-0
0n
""
null
undefined
NaN
```

## Truthy examples

```text
"hi"
"0"
" "
1
-1
[]
{}
```

Important:
```text
"0" → truthy
0   → falsy
```

Because `"0"` is a non-empty String.

---

## 8. Truthy/Falsy Examples

```js
if ("") {
    console.log("This is true");
} else {
    console.log("This is false");
}
```

Output:
```text
This is false
```

```js
if (" hi") {
    console.log("This is true");
} else {
    console.log("This is false");
}
```

Output:
```text
This is true
```

```js
let value = null;

if (value) {
    console.log("hello invertis");
} else {
    console.log("university");
}
```

Output:
```text
university
```

Because `null` is falsy.

### Test with Boolean()

```js
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));
```

Output:
```text
false
true
false
true
false
true
true
```

---

# 9. Ternary Operator

Ternary is a compact form of a simple `if...else`.

Syntax:
```js
condition ? valueIfTrue : valueIfFalse;
```

Example:

```js
let value = null;

let result = value ? "hello invertis" : "university";

console.log(result); // "university"
```

---

# 10. Equality Operators

There are two important equality operators:

```text
==
===
```

## `==` — Loose Equality

It compares values and may perform type conversion.

```js
let a = 10;
let b = "10";

console.log(a == b); // true
```

Conceptually, `"10"` is converted to Number 10 for this comparison.

## `===` — Strict Equality

It checks both value and datatype.

```js
let a = 10;
let b = "10";

console.log(a === b); // false
```

Because:
```text
a → number
b → string
```

### Correct interview table

| Operator | Meaning |
|---|---|
| `==` | Loose equality; type coercion may occur |
| `===` | Strict equality; value AND datatype must match |

> Your original note had `"==" check datatype and value`; the correct operator for that statement is `===`.

---

# 11. Relational Operators

These compare values and return a Boolean.

```text
>
<
>=
<=
```

Examples:

```js
console.log(10 > 5);    // true
console.log(10 < 5);    // false
console.log(10 >= 10);  // true
console.log(10 <= 5);   // false
```

---

# 12. Logical Operators

Three main logical operators:

```text
&& → AND
|| → OR
!  → NOT
```

### AND

Both conditions must be truthy.

```js
console.log(true && true);   // true
console.log(true && false);  // false
```

Example:
```js
let age = 20;
let hasId = true;

if (age >= 18 && hasId) {
    console.log("Allowed");
}
```

### OR

At least one condition must be truthy.

```js
console.log(true || false);  // true
console.log(false || false); // false
```

### NOT

Reverses Boolean meaning.

```js
console.log(!true);  // false
console.log(!false); // true
```

---

# 13. Arithmetic Operators

```text
+  Addition
-  Subtraction
*  Multiplication
/  Division
%  Remainder/Modulus
```

Example:

```js
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
```

### Modulus

```js
console.log(10 % 3); // 1
```

It gives the remainder.

Common even/odd check:

```js
if (number % 2 === 0) {
    console.log("Even");
}
```

---

# 14. Assignment Operators

Basic assignment:
```js
=
```

Other common operators:
```text
+=
-=
*=
/=
%=
```

Example:

```js
let a = 10;

a += 5;
```

Equivalent to:
```js
a = a + 5;
```

Final value:
```text
15
```

---

# 15. if Statement

```js
let age = 20;

if (age >= 18) {
    console.log("Adult");
}
```

Output:
```text
Adult
```

---

# 16. if...else

```js
let age = 16;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

Output:
```text
Minor
```

---

# 17. if...else if...else

```js
let marks = 75;

if (marks >= 90) {
    console.log("A");
} else if (marks >= 60) {
    console.log("B");
} else {
    console.log("C");
}
```

Output:
```text
B
```

Dry run:
```text
75 >= 90 → false
75 >= 60 → true
print B
```

---

# 18. Your Example — Corrected Dry Run

```js
let a = 10;
let b = 100;
let c = 20;

if (a == b) {
    console.log(true);
}
else if (a == c) {
    console.log(true);
}
else {
    console.log(false);
}
```

Check:
```text
10 == 100 → false
10 == 20  → false
```

Therefore output:
```text
false
```

The comments in the original code saying the first/second condition outputs `true` were incorrect.

---

# 19. Template Literals

Template literals use backticks:

```js
let name = "Vishal";
let age = 20;

console.log(`My name is ${name} and I am ${age} years old.`);
```

Output:
```text
My name is Vishal and I am 20 years old.
```

`${...}` lets you insert a value/expression inside the String.

Example:

```js
let price = 500;
let quantity = 2;

console.log(`Total price is ${price * quantity}`);
```

Output:
```text
Total price is 1000
```

---

# 20. JavaScript — Interview Definition

## What is JavaScript?

A strong beginner-friendly answer:

> JavaScript is a high-level, dynamically typed programming language used to add behavior and interactivity to web applications. It is widely used on the frontend and can also run outside the browser using environments such as Node.js.

## What does dynamically typed mean?

A variable does not have a permanently fixed datatype.

```js
let value = 10;
value = "Hello";
```

Initially:
```text
value → number
```

Later:
```text
value → string
```

---

# 21. Interview Questions

### Q1. What is type conversion?

> Type conversion is converting a value from one datatype to another.

### Q2. What is implicit conversion?

> JavaScript automatically converts values during an operation.

Example:
```js
"5" - 2 // 3
```

### Q3. What is explicit conversion?

> The programmer manually converts a value.

```js
Number("10")
String(10)
Boolean("hello")
```

### Q4. Why does `10 + "10"` give `"1010"`?

> Because `+` can perform String concatenation, so the number is converted to a String.

### Q5. Why does `10 - "10"` give `0`?

> `-` is a numeric operator, so `"10"` is converted to Number 10.

### Q6. What are truthy and falsy values?

> Truthy values behave like true in a Boolean context; falsy values behave like false.

### Q7. Difference between `==` and `===`?

> `==` is loose equality and may perform type coercion. `===` is strict equality and requires both value and datatype to match.

### Q8. What is a ternary operator?

> It is a compact expression for a simple conditional choice: `condition ? trueValue : falseValue`.

### Q9. What are logical operators?

```text
&& AND
|| OR
! NOT
```

### Q10. What is dynamic typing?

> A variable can hold values of different datatypes at different times.

---

# 22. Output-Based Interview Questions

### Q1
```js
console.log(10 + "5");
```
Answer:
```text
"105"
```

### Q2
```js
console.log(10 - "5");
```
Answer:
```text
5
```

### Q3
```js
console.log("10" * 2);
```
Answer:
```text

20
```

### Q4
```js
console.log("10" / 2);
```
Answer:
```text
5
```

### Q5
```js
console.log(Boolean(0));
```
Answer:
```text
false
```

### Q6
```js
console.log(Boolean("0"));
```
Answer:
```text
true
```

### Q7
```js
console.log(10 == "10");
```
Answer:
```text
true
```

### Q8
```js
console.log(10 === "10");
```
Answer:
```text
false
```

### Q9
```js
console.log(1 + 2 + "3");
```
Answer:
```text
"33"
```

### Q10
```js
console.log(1 + "2" + 3);
```
Answer:
```text
"123"
```

### Q11
```js
console.log(1 + "2" + 3 - 1);
```
Answer:
```text
122
```

### Q12
```js
console.log(1 + "2" + 3 - 1 + "4");
```
Answer:
```text
"1224"
```

---

# 23. Common Mistakes

### Mistake 1
Thinking all operators behave like `+`.

Wrong:
```text
10 - "10" → "010"
```

Correct:
```text
10 - "10" → 0
```

### Mistake 2
Thinking `"0"` is falsy.

Correct:
```js
Boolean("0") // true
Boolean(0)   // false
```

### Mistake 3
Saying `==` checks datatype and value.

Correct:
```text
=== → strict equality
```

### Mistake 4
Thinking arrays and objects are falsy.

Correct:
```js
Boolean([]) // true
Boolean({}) // true
```

---

# 24. Quick Revision

```text
Implicit → automatic conversion
Explicit → manual conversion

Number("10") → 10
String(10)   → "10"
Boolean("")  → false

+  → addition / concatenation
-  → subtraction
*  → multiplication
/  → division
%  → remainder

==  → loose equality
=== → strict equality

&& → AND
|| → OR
!  → NOT

if → first condition
else if → next condition
else → when all previous conditions fail

? : → ternary

`Hello ${name}` → template literal
```

---

# 25. Golden Rules

```text
1. "10" is String; 10 is Number.
2. + can concatenate Strings.
3. -, *, / and % normally convert numeric Strings to Numbers.
4. "10" - 2 → 8
5. "10" + 2 → "102"
6. Boolean("") → false
7. Boolean("0") → true
8. Boolean(0) → false
9. Boolean([]) → true
10. Boolean({}) → true
11. null is falsy.
12. undefined is falsy.
13. NaN is falsy.
14. == may perform type coercion.
15. === requires matching value and datatype.
16. JavaScript is dynamically typed.
17. Template literals use backticks.
18. Always dry-run confusing expressions one operation at a time.
```

---

# 26. Practice — Solve Without Looking at the Answer

## Level 1

```js
// Q1
console.log(10 + "5");

// Q2
console.log(10 - "5");

// Q3
console.log("10" * 2);

// Q4
console.log("10" / 2);

// Q5
console.log(Boolean(0));

// Q6
console.log(Boolean("0"));

// Q7
console.log(10 == "10");

// Q8
console.log(10 === "10");
```

## Level 2

```js
// Q9
console.log(1 + 2 + "3");

// Q10
console.log(1 + "2" + 3);

// Q11
console.log(1 + "2" + 3 - 1);

// Q12
console.log(1 + "2" + 3 - 1 + "4");

// Q13
let x = null;
if (x) {
    console.log("A");
} else {
    console.log("B");
}

// Q14
let x = "0";
if (x) {
    console.log("A");
} else {
    console.log("B");
}

// Q15
let age = 17;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);
```

---

# 27. Study Method

For every output question:

```text
1. Identify datatypes.
2. Identify the operator.
3. Check whether conversion occurs.
4. Evaluate one operation at a time.
5. Determine final value.
6. Determine final datatype if asked.
```

Do not memorize only answers. Understand the rule that produced the answer.

---

# Chapter 2 Final Checklist

- [ ] Type conversion
- [ ] Implicit conversion
- [ ] Explicit conversion
- [ ] Number()
- [ ] String()
- [ ] Boolean()
- [ ] `+` with String
- [ ] `-`, `*`, `/`, `%` with String
- [ ] Truthy values
- [ ] Falsy values
- [ ] `Boolean()`
- [ ] `==`
- [ ] `===`
- [ ] Arithmetic operators
- [ ] Relational operators
- [ ] Logical operators
- [ ] Assignment operators
- [ ] Ternary operator
- [ ] if
- [ ] else if
- [ ] else
- [ ] Template literals
- [ ] Dynamic typing
- [ ] Output-based interview questions

## Final Mental Model

When you see:

```js
10 + "20"
```

ask:

```text
Is String involved? → Yes
Is operator +? → Yes
Therefore → concatenation
Result → "1020"
```

When you see:

```js
10 - "20"
```

ask:

```text
Operator is - → numeric operation
"20" → 20
10 - 20 → -10
```

This thinking pattern is more important than memorizing individual outputs.
