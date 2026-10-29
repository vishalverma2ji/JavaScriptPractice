# JavaScript Chapter 4 — Loops & Conditions

## 1. What is a Loop?

A loop repeatedly executes a block of code while a condition is satisfied.

```js
for(let i = 1; i <= 5; i++){
    console.log(i);
}
```

Output:
```text
1
2
3
4
5
```

---

## 2. Types of Loops

JavaScript has:

1. `for`
2. `while`
3. `do...while`
4. `for...in`
5. `for...of`

---

## 3. for Loop

### Syntax

```js
for(initialization; condition; update){
    // code
}
```

### Example

```js
for(let i = 0; i < 10; i++){
    console.log(i);
}
```

Output:

```text
0
1
2
3
4
5
6
7
8
9
```

### Flow

```text
initialization
      ↓
condition
      ↓
body
      ↓
update
      ↓
condition again
```

---

## 4. while Loop

The `while` loop checks the condition before executing the body.

```js
let i = 0;

while(i < 10){
    console.log(i);
    i++;
}
```

### Important

Always update the variable when necessary.

Wrong:

```js
let i = 0;

while(i < 10){
    console.log(i);
}
```

This becomes an infinite loop because `i` never changes.

---

## 5. do...while Loop

`do...while` executes the body at least once because the condition is checked afterwards.

```js
let i = 10;

do{
    console.log(i);
}while(i < 10);
```

Output:

```text
10
```

### Interview Question

**Which loop executes at least once?**

Answer:

> `do...while`

---

## 6. for vs while vs do...while

| Loop | Condition | Minimum execution |
|---|---|---:|
| `for` | Before body | 0 |
| `while` | Before body | 0 |
| `do...while` | After body | 1 |

Easy rule:

```text
Known range → for
Condition based → while
At least one execution → do...while
```

---

# 7. break

`break` completely stops the nearest loop.

```js
for(let i = 1; i <= 10; i++){

    if(i == 5){
        break;
    }

    console.log(i);
}
```

Output:

```text
1
2
3
4
```

### Interview

> `break` terminates the loop immediately.

---

# 8. continue

`continue` skips the current iteration.

```js
for(let i = 1; i <= 5; i++){

    if(i == 3){
        continue;
    }

    console.log(i);
}
```

Output:

```text
1
2
4
5
```

### Difference

```text
break    → stop loop
continue → skip current iteration
```

---

# 9. for...in

`for...in` iterates over keys/property names.

```js
let students = {
    name: "Ram",
    age: 20,
    section: "A"
};

for(let key in students){
    console.log(key);
}
```

Output:

```text
name
age
section
```

### Get values

```js
for(let key in students){
    console.log(students[key]);
}
```

Output:

```text
Ram
20
A
```

---

# 10. for...in with Array

```js
let num = [1,2,3,4];

for(let value in num){
    console.log(value);
}
```

Output:

```text
0
1
2
3
```

For arrays, `for...in` gives indexes/keys.

---

# 11. for...of

`for...of` gives values.

```js
let num = [1,2,3,4];

for(let value of num){
    console.log(value);
}
```

Output:

```text
1
2
3
4
```

### Remember

```text
for...in → key/index
for...of → value
```

---

# 12. Loops + Conditions

Most programming questions use:

```text
Loop + if condition
```

Example:

```js
for(let i = 0; i < 50; i++){

    if(i % 2 == 0){
        console.log(i);
    }
}
```

---

# 13. Even Numbers

```js
for(let i = 0; i < 50; i++){

    if(i % 2 == 0){
        console.log(i);
    }
}
```

Rule:

```js
number % 2 == 0
```

means even.

---

# 14. Odd Numbers

```js
for(let i = 1; i <= 100; i++){

    if(i % 2 != 0){
        console.log(i);
    }
}
```

Rule:

```js
number % 2 != 0
```

means odd.

---

# 15. Multiplication Table

```js
let m = 5;

for(let i = 1; i <= 10; i++){
    console.log(m * i);
}
```

Output:

```text
5
10
15
20
25
30
35
40
45
50
```

---

# 16. Sum of Even Numbers

```js
let sum = 0;

for(let i = 1; i <= 20; i++){

    if(i % 2 == 0){
        sum += i;
    }
}

console.log(sum);
```

### Important Pattern

For a sum problem:

```js
let sum = 0;
```

Then:

```js
sum += value;
```

---

# 17. Sum of Odd Numbers

```js
let sum = 0;

for(let i = 1; i <= 20; i++){

    if(i % 2 != 0){
        sum += i;
    }
}

console.log(sum);
```

---

# 18. Divisible by 3 and 5

```js
for(let i = 1; i <= 100; i++){

    if(i % 3 == 0 && i % 5 == 0){
        console.log(i);
    }
}
```

Output:

```text
15
30
45
60
75
90
```

---

# 19. Digit Problems

Important number questions:

1. Sum of digits
2. Product of digits
3. Count digits
4. Largest digit
5. Smallest digit
6. Sum of squares of digits
7. Reverse number
8. Palindrome number

The main technique is:

```js
n % 10
```

and:

```js
Math.floor(n / 10)
```

---

# 20. Digit Extraction

Suppose:

```js
let n = 3456;
```

Get the last digit:

```js
let d = n % 10;
```

Result:

```text
6
```

Remove the last digit:

```js
n = Math.floor(n / 10);
```

Result:

```text
345
```

### Golden Pattern

```js
while(n > 0){

    let d = n % 10;

    // work with d

    n = Math.floor(n / 10);
}
```

Remember:

```text
% 10                → last digit
Math.floor(n / 10)  → remove last digit
```

---

# 21. Sum of Digits

For `3456`:

```js
let n = 3456;
let sum = 0;

while(n > 0){

    let d = n % 10;

    sum += d;

    n = Math.floor(n / 10);
}

console.log(sum);
```

Output:

```text
18
```

### Dry Run

| n | d | sum | new n |
|---:|---:|---:|---:|
| 3456 | 6 | 6 | 345 |
| 345 | 5 | 11 | 34 |
| 34 | 4 | 15 | 3 |
| 3 | 3 | 18 | 0 |

---

# 22. Sum of Squares of Digits

For `34567`:

```js
let n = 34567;
let sum = 0;

while(n > 0){

    let d = n % 10;
    let x = d * d;

    sum += x;

    n = Math.floor(n / 10);
}

console.log(sum);
```

Logic:

```text
digit → square → add → remove digit → repeat
```

---

# 23. Largest Digit

Find the largest digit in `45732`.

```js
let n = 45732;
let largest = 0;

while(n > 0){

    let d = n % 10;

    if(d > largest){
        largest = d;
    }

    n = Math.floor(n / 10);
}

console.log(largest);
```

Output:

```text
7
```

### Important

Do NOT use:

```js
while(n >= 0)
```

because `n` can remain `0`.

Use:

```js
while(n > 0)
```

for positive numbers.

---

# 24. Count Digits

```js
let n = 45732;
let count = 0;

while(n > 0){

    count++;

    n = Math.floor(n / 10);
}

console.log(count);
```

Output:

```text
5
```

Pattern:

```js
let count = 0;
count++;
```

---

# 25. Reverse a Number

Reverse `2356`:

```text
6532
```

Code:

```js
let n = 2356;
let rev = 0;

while(n > 0){

    let d = n % 10;

    rev = rev * 10 + d;

    n = Math.floor(n / 10);
}

console.log(rev);
```

### Most Important Formula

```js
rev = rev * 10 + d;
```

### Dry Run

| n | d | rev |
|---:|---:|---:|
| 2356 | 6 | 6 |
| 235 | 5 | 65 |
| 23 | 3 | 653 |
| 2 | 2 | 6532 |
| 0 | - | Stop |

---

# 26. How to Think About Loop Problems

Before writing code ask:

1. What is repeating?
2. What is the range?
3. Which loop should I use?
4. Is there a condition?
5. Do I need `sum`?
6. Do I need `count`?
7. Do I need `largest`/`smallest`?
8. Is it a digit problem?
9. When will the loop stop?

### Common Patterns

```text
sum     → let sum = 0
count   → let count = 0
largest → let largest = 0
reverse → let rev = 0
```

---

# 27. Interview Questions

### Q1. What is a loop?

> A loop is a control structure used to repeatedly execute a block of code while a condition is satisfied.

### Q2. What are JavaScript loops?

```text
for
while
do...while
for...in
for...of
```

### Q3. Which loop executes at least once?

> `do...while`

### Q4. Difference between break and continue?

```text
break    → terminates the loop
continue → skips current iteration
```

### Q5. Difference between for...in and for...of?

```text
for...in → keys/indexes
for...of → values
```

### Q6. How do you get the last digit?

```js
n % 10
```

### Q7. How do you remove the last digit?

```js
Math.floor(n / 10)
```

### Q8. How do you reverse a number?

```js
rev = rev * 10 + d;
```

---

# 28. Interviewer-Style Questions

### Question 1

> Print all even numbers from 1 to 100.

Think:

```text
Range → 1 to 100
Condition → even
Loop → for
```

### Question 2

> Find sum of odd numbers from 1 to 50.

Think:

```text
Range → 1 to 50
Condition → odd
Result → sum
```

### Question 3

> Find sum of digits of a number.

Think:

```text
Get digit → % 10
Remove digit → Math.floor(n / 10)
Repeat → while
```

### Question 4

> Reverse an integer.

Think:

```text
Get last digit
Build reverse
Remove last digit
Repeat
```

---

# 29. Output-Based Questions

## Question 1

```js
for(let i = 1; i <= 5; i++){
    console.log(i);
}
```

Output:

```text
1
2
3
4
5
```

## Question 2

```js
for(let i = 0; i < 5; i++){
    console.log(i);
}
```

Output:

```text
0
1
2
3
4
```

## Question 3

```js
for(let i = 1; i <= 5; i++){

    if(i == 3){
        continue;
    }

    console.log(i);
}
```

Output:

```text
1
2
4
5
```

## Question 4

```js
for(let i = 1; i <= 5; i++){

    if(i == 3){
        break;
    }

    console.log(i);
}
```

Output:

```text
1
2
```

## Question 5

```js
let i = 10;

do{
    console.log(i);
}while(i < 10);
```

Output:

```text
10
```

Reason: `do...while` runs once before checking the condition.

---

# 30. Common Mistakes

### Mistake 1 — Infinite while loop

Wrong:

```js
let i = 0;

while(i < 10){
    console.log(i);
}
```

Correct:

```js
let i = 0;

while(i < 10){
    console.log(i);
    i++;
}
```

### Mistake 2 — Boundary confusion

```js
i < 10
```

prints `0` to `9`.

```js
i <= 10
```

prints `0` to `10`.

### Mistake 3 — Infinite digit loop

Wrong:

```js
while(n >= 0)
```

Correct:

```js
while(n > 0)
```

### Mistake 4 — Undeclared variable

Avoid:

```js
d = n % 10;
```

Prefer:

```js
let d = n % 10;
```

### Mistake 5 — Confusing in and of

```text
in → key/index
of → value
```

---

# 31. Practice Questions

## Level 1

1. Print numbers from 1 to 100.
2. Print numbers from 100 to 1.
3. Print even numbers from 1 to 100.
4. Print odd numbers from 1 to 100.
5. Print multiples of 5 from 1 to 100.
6. Print a multiplication table.
7. Find sum from 1 to 100.
8. Find sum of even numbers from 1 to 100.
9. Find sum of odd numbers from 1 to 100.
10. Print numbers divisible by both 3 and 5.

## Level 2

11. Count digits.
12. Sum of digits.
13. Product of digits.
14. Largest digit.
15. Smallest digit.
16. Sum of squares of digits.
17. Reverse a number.
18. Check palindrome.
19. Find first digit.
20. Count occurrence of digit `5`.

## Level 3

21. Print 1 to 100 but skip multiples of 3.
22. Print 1 to 100 and stop at 50.
23. Find numbers divisible by 7.
24. Sum numbers divisible by both 3 and 5.
25. Count even and odd digits.

---

# 32. Golden Rules

```text
Something repeats
        ↓
      LOOP

Known range
        ↓
       for

Condition based repetition
        ↓
      while

At least one execution
        ↓
    do...while

Stop completely
        ↓
      break

Skip current iteration
        ↓
    continue

Array keys/indexes
        ↓
    for...in

Array values
        ↓
    for...of

Last digit
        ↓
     n % 10

Remove last digit
        ↓
Math.floor(n / 10)

Sum
        ↓
sum += value

Count
        ↓
count++

Reverse
        ↓
rev = rev * 10 + d
```

---

# 33. Final Problem-Solving Formula

```text
Question
   ↓
What is repeating?
   ↓
What is the range?
   ↓
Choose loop
   ↓
Find condition
   ↓
Choose result variable
   ↓
Write logic
   ↓
Dry Run
   ↓
Code
```

Example:

> Find the largest digit of 45732.

Think:

```text
Input → 45732
Need → largest digit
Get digit → n % 10
Remove digit → Math.floor(n / 10)
Compare → if(d > largest)
Loop → while(n > 0)
```

Code:

```js
let n = 45732;
let largest = 0;

while(n > 0){

    let d = n % 10;

    if(d > largest){
        largest = d;
    }

    n = Math.floor(n / 10);
}

console.log(largest);
```

---

# 34. Next Chapter — Functions

After loops, learn:

1. What is a function?
2. Why functions?
3. Function declaration
4. Function expression
5. Parameters
6. Arguments
7. `return`
8. `return` vs `console.log`
9. Default parameters
10. Arrow functions
11. Scope
12. Local vs global variables
13. Callback basics
14. Function interview questions
15. Output questions
16. Function practice problems

---

## 🎯 Chapter 4 Goal

Do not only memorize loop syntax.

You should be able to see an interview question and think:

> **What is repeating? What is the range? What condition do I need? What result variable do I need? When will the loop stop?**

That problem-solving approach is the real goal of this chapter.
