# JavaScript Strings — Complete Notes & Interview Guide

## 1. What is a String?

A **String** is a sequence of characters used to represent text in JavaScript.

```js
let name = "Vishal";
let city = 'Meerut';

console.log(name);
console.log(city);
```

JavaScript strings can be written using:

```js
"double quotes"
'single quotes'
`backticks`
```

Example:

```js
let a = "Hello";
let b = 'Hello';
let c = `Hello`;

console.log(a, b, c);
```

---

# 2. String Immutability

One of the most important interview concepts:

> **Strings are immutable in JavaScript.**

This means an existing string cannot be changed directly.

```js
let str = "hello";

str[0] = "H";

console.log(str);
// hello
```

Instead, string methods return a **new string**.

```js
let str = "hello";

str = str.toUpperCase();

console.log(str);
// HELLO
```

### Interview Question

**Q. Are JavaScript strings mutable?**

**Answer:** No. Strings are immutable. String operations create and return new strings instead of modifying the original string.

---

# 3. String Length

The `length` property returns the number of UTF-16 code units in a string.

```js
let str = "Vishal";

console.log(str.length);
// 6
```

Spaces are also counted.

```js
let str = "Vishal Verma";

console.log(str.length);
// 12
```

---

# 4. Accessing Characters

## `charAt()`

Returns the character at a given index.

```js
let str = "Vishal";

console.log(str.charAt(0));
// V

console.log(str.charAt(3));
// h
```

Index starts from `0`.

```text
V i s h a l
0 1 2 3 4 5
```

If the index is outside the range:

```js
console.log(str.charAt(20));
// ""
```

---

# 5. `charCodeAt()`

Returns the UTF-16 code unit of the character at a specified index.

```js
let str = "Vishal";

console.log(str.charCodeAt(1));
// 105
```

Here:

```text
i -> 105
```

Another example:

```js
console.log("A".charCodeAt(0));
// 65
```

```js
console.log("a".charCodeAt(0));
// 97
```

### Interview Question

**Q. What is the difference between `charAt()` and `charCodeAt()`?**

```js
let str = "Hello";

console.log(str.charAt(0));
// H

console.log(str.charCodeAt(0));
// 72
```

- `charAt()` → returns character
- `charCodeAt()` → returns numeric UTF-16 code unit

---

# 6. `toUpperCase()`

Converts a string to uppercase.

```js
let str = "vishal verma";

console.log(str.toUpperCase());
// VISHAL VERMA
```

Original string is not modified.

```js
let str = "hello";

let result = str.toUpperCase();

console.log(str);
// hello

console.log(result);
// HELLO
```

---

# 7. `toLowerCase()`

Converts a string to lowercase.

```js
let str = "VISHAL VERMA";

console.log(str.toLowerCase());
// vishal verma
```

---

# 8. `trim()`

Removes whitespace from the **beginning and end** of a string.

```js
let str = "   vishal   ";

console.log(str.trim());
// "vishal"
```

Important:

`trim()` does NOT remove spaces from the middle.

```js
let str = "   Vishal Verma   ";

console.log(str.trim());
// "Vishal Verma"
```

---

# 9. `trimStart()` / `trimLeft()`

Removes whitespace from the beginning.

```js
let str = "   Vishal";

console.log(str.trimStart());
// "Vishal"
```

`trimLeft()` is an alias of `trimStart()`.

---

# 10. `trimEnd()` / `trimRight()`

Removes whitespace from the end.

```js
let str = "Vishal   ";

console.log(str.trimEnd());
// "Vishal"
```

`trimRight()` is an alias of `trimEnd()`.

---

# 11. `startsWith()`

Checks whether a string starts with a particular value.

Returns `true` or `false`.

```js
let str = "uttar pradesh";

console.log(str.startsWith("u"));
// true
```

Example:

```js
console.log(str.startsWith("uttar"));
// true

console.log(str.startsWith("pradesh"));
// false
```

It is case-sensitive:

```js
console.log(str.startsWith("U"));
// false
```

---

# 12. `endsWith()`

Checks whether a string ends with a particular value.

```js
let str = "uttar pradesh";

console.log(str.endsWith("h"));
// true

console.log(str.endsWith("r"));
// false
```

It is also case-sensitive.

---

# 13. `includes()`

Checks whether a string contains a particular value.

```js
let str = "uttar pradesh";

console.log(str.includes("pradesh"));
// true

console.log(str.includes("delhi"));
// false
```

Returns a boolean.

```js
console.log("JavaScript".includes("Script"));
// true
```

### Interview Trap

```js
console.log("Hello".includes("hello"));
// false
```

Because string comparisons here are case-sensitive.

---

# 14. `indexOf()`

Returns the index of the first occurrence of a value.

```js
let str = "javascript";

console.log(str.indexOf("a"));
// 1
```

If the value is not found:

```js
console.log(str.indexOf("z"));
// -1
```

Example:

```js
let str = "hello";

console.log(str.indexOf("l"));
// 2
```

It returns the **first matching index**.

---

# 15. `lastIndexOf()`

Returns the index of the last occurrence.

```js
let str = "hello";

console.log(str.lastIndexOf("l"));
// 3
```

Difference:

```js
str.indexOf("l");      // 2
str.lastIndexOf("l");  // 3
```

---

# 16. `slice()`

Extracts a part of a string.

Syntax:

```js
string.slice(start, end)
```

The `end` index is **excluded**.

```js
let str = "JavaScript";

console.log(str.slice(0, 4));
// Java
```

Index:

```text
J a v a S c r i p t
0 1 2 3 4 5 6 7 8 9
```

`slice(0, 4)` gives indexes `0` to `3`.

---

## Negative Index with `slice()`

```js
let str = "JavaScript";

console.log(str.slice(-6));
// Script
```

Another example:

```js
console.log(str.slice(-6, -1));
// Scrip
```

---

# 17. `substring()`

Extracts characters between two indexes.

```js
let str = "sonamsadhana";

console.log(str.substring(0, 5));
// sonam
```

The ending index is excluded.

```js
console.log(str.substring(2, 6));
// nams
```

### Important Difference: `slice()` vs `substring()`

```text
slice()
- supports negative indexes
- end index excluded

substring()
- negative values are treated as 0
- end index excluded
```

Example:

```js
let str = "JavaScript";

console.log(str.slice(-6));
// Script

console.log(str.substring(-6));
// JavaScript
```

---

# 18. `substr()` — Legacy Method

`substr()` uses:

```js
substr(start, length)
```

Example:

```js
let str = "JavaScript";

console.log(str.substr(0, 4));
// Java
```

**Interview note:** `substr()` is a legacy/deprecated method and should generally not be used in new code. Prefer `slice()` or `substring()`.

---

# 19. `replace()`

Replaces the first matching occurrence.

```js
let str = "uttar pradesh";

console.log(str.replace("uttar", "UP"));
// UP pradesh
```

If a number is provided as replacement, it is converted to a string.

```js
let str = "uttar pradesh";

console.log(str.replace("uttar", 4));
// 4 pradesh
```

---

# 20. `replace()` with Repeated Values

`replace()` normally replaces only the **first** matching occurrence when using a string search value.

```js
let str = "apple apple apple";

console.log(str.replace("apple", "mango"));
// mango apple apple
```

---

# 21. `replaceAll()`

Replaces all occurrences of a string.

```js
let str = "apple apple apple";

console.log(str.replaceAll("apple", "mango"));
// mango mango mango
```

Example:

```js
let str = "vehalv";

console.log(str.replaceAll("v", "i"));
// iehali
```

---

# 22. `repeat()`

Repeats a string a specified number of times.

```js
let str = "uttar pradesh";

console.log(str.repeat(3));
// uttar pradeshuttar pradeshuttar pradesh
```

Another example:

```js
console.log("Hi ".repeat(3));
// Hi Hi Hi
```

---

# 23. `concat()`

Combines strings.

```js
let first = "Vishal";
let last = "Verma";

console.log(first.concat(" ", last));
// Vishal Verma
```

Usually, the `+` operator or template literals are more convenient:

```js
console.log(first + " " + last);
```

```js
console.log(`${first} ${last}`);
```

---

# 24. `split()`

Converts a string into an array.

```js
let str = "Vishal Verma";

console.log(str.split(" "));
// ["Vishal", "Verma"]
```

Split by every character:

```js
let str = "hello";

console.log(str.split(""));
// ["h", "e", "l", "l", "o"]
```

Split by comma:

```js
let str = "apple,banana,mango";

console.log(str.split(","));
// ["apple", "banana", "mango"]
```

### Important

`split()` belongs to **String**, while `join()` belongs to **Array**.

---

# 25. `join()`

`join()` is an **Array method**, not a String method.

It converts array elements into a string.

```js
let arr = ["Vishal", "Verma"];

console.log(arr.join(" "));
// Vishal Verma
```

Another example:

```js
let arr = ["JavaScript", "Java", "Python"];

console.log(arr.join(", "));
// JavaScript, Java, Python
```

### Interview Question

**Q. Difference between `split()` and `join()`?**

```js
"Vishal Verma".split(" ");
// ["Vishal", "Verma"]

["Vishal", "Verma"].join(" ");
// "Vishal Verma"
```

**split:** String → Array

**join:** Array → String

---

# 26. `at()`

Returns the character at a specified index.

```js
let str = "JavaScript";

console.log(str.at(0));
// J
```

One useful feature is negative indexing:

```js
console.log(str.at(-1));
// t

console.log(str.at(-2));
// p
```

This is convenient for getting the last character.

---

# 27. String Indexing

Strings can be accessed using bracket notation.

```js
let str = "Vishal";

console.log(str[0]);
// V

console.log(str[3]);
// h
```

Compare:

```js
str[0];
str.charAt(0);
```

Both can retrieve the first character.

---

# 28. Template Literals

Template literals use backticks.

```js
let name = "Vishal";
let age = 25;

console.log(`My name is ${name} and my age is ${age}.`);
```

Output:

```text
My name is Vishal and my age is 25.
```

They are useful for:

- String interpolation
- Multi-line strings
- Embedding expressions

Example:

```js
let a = 10;
let b = 20;

console.log(`Sum = ${a + b}`);
// Sum = 30
```

---

# 29. Escape Characters

Special characters can be represented using escape sequences.

```js
let str = "Vishal said \"Hello\"";

console.log(str);
```

Common escape sequences:

```text
\n  New line
\t  Tab
\"  Double quote
\'  Single quote
\\  Backslash
```

Example:

```js
console.log("Hello\nWorld");
```

Output:

```text
Hello
World
```

---

# 30. String Comparison

Strings are compared lexicographically using Unicode/UTF-16 values.

```js
console.log("apple" === "apple");
// true

console.log("apple" === "Apple");
// false
```

String comparison is case-sensitive.

---

# 31. Converting Other Values to String

## `String()`

```js
let num = 100;

let str = String(num);

console.log(str);
console.log(typeof str);
// string
```

Other examples:

```js
String(123);       // "123"
String(true);      // "true"
String(null);      // "null"
String(undefined); // "undefined"
```

---

# 32. `toString()`

Many values have a `toString()` method.

```js
let num = 100;

console.log(num.toString());
// "100"
```

But be careful with `null` and `undefined`:

```js
String(null);
// "null"

String(undefined);
// "undefined"
```

Calling:

```js
null.toString();
```

throws an error.

---

# 33. String Constructor vs Primitive String

```js
let a = "hello";
let b = new String("hello");

console.log(typeof a);
// string

console.log(typeof b);
// object
```

### Interview Trap

Avoid using:

```js
new String("hello");
```

for normal string creation.

Prefer:

```js
let str = "hello";
```

---

# 34. String Methods Do Not Modify Original String

```js
let str = "hello";

str.toUpperCase();

console.log(str);
// hello
```

Correct:

```js
str = str.toUpperCase();

console.log(str);
// HELLO
```

This is because strings are immutable.

---

# 35. Important String Methods — Quick Table

| Method / Property | Purpose | Returns |
|---|---|---|
| `length` | String length | Number |
| `charAt()` | Character at index | String |
| `charCodeAt()` | UTF-16 code unit | Number |
| `at()` | Character at index | String |
| `toUpperCase()` | Uppercase | String |
| `toLowerCase()` | Lowercase | String |
| `trim()` | Remove outer whitespace | String |
| `trimStart()` | Remove beginning whitespace | String |
| `trimEnd()` | Remove ending whitespace | String |
| `startsWith()` | Check beginning | Boolean |
| `endsWith()` | Check ending | Boolean |
| `includes()` | Check existence | Boolean |
| `indexOf()` | First matching index | Number |
| `lastIndexOf()` | Last matching index | Number |
| `slice()` | Extract part | String |
| `substring()` | Extract part | String |
| `replace()` | Replace first match | String |
| `replaceAll()` | Replace all matches | String |
| `repeat()` | Repeat string | String |
| `concat()` | Combine strings | String |
| `split()` | String → Array | Array |

---

# 36. Most Important Interview Differences

## `slice()` vs `substring()`

| `slice()` | `substring()` |
|---|---|
| Supports negative indexes | Negative indexes become 0 |
| End index excluded | End index excluded |
| Can be used with negative positions | Better for non-negative indexes |

---

## `replace()` vs `replaceAll()`

```js
"aaa".replace("a", "b");
// "baa"

"aaa".replaceAll("a", "b");
// "bbb"
```

---

## `charAt()` vs Bracket Notation

```js
let str = "Hello";

str.charAt(0);
// "H"

str[0];
// "H"
```

For an out-of-range index:

```js
str.charAt(100);
// ""

str[100];
// undefined
```

---

## `split()` vs `join()`

```js
"abc".split("");
// ["a", "b", "c"]

["a", "b", "c"].join("");
// "abc"
```

---

# 37. Common Interview Questions

### Q1. Are strings mutable in JavaScript?

No. JavaScript strings are immutable.

---

### Q2. What does `length` return?

The number of UTF-16 code units in the string.

---

### Q3. What is the difference between `slice()` and `substring()`?

`slice()` supports negative indexes, while `substring()` treats negative values as `0`.

---

### Q4. What is the difference between `replace()` and `replaceAll()`?

`replace()` with a string search value replaces the first matching occurrence. `replaceAll()` replaces all matching occurrences.

---

### Q5. What does `indexOf()` return if a value is not found?

```js
-1
```

---

### Q6. What does `includes()` return?

A boolean:

```js
true
```

or

```js
false
```

---

### Q7. Is `split()` an array method?

No.

`split()` is a **String method** that creates an array.

---

### Q8. Is `join()` a string method?

No.

`join()` is an **Array method** that creates a string.

---

### Q9. Why doesn't this change the string?

```js
let str = "hello";

str.toUpperCase();

console.log(str);
```

Output:

```text
hello
```

Because strings are immutable and `toUpperCase()` returns a new string.

---

### Q10. What is the difference between primitive string and String object?

```js
typeof "hello";
// "string"

typeof new String("hello");
// "object"
```

Prefer primitive strings.

---

# 38. Output-Based Interview Questions

## Question 1

```js
let str = "JavaScript";

console.log(str.slice(0, 4));
```

### Answer

```text
Java
```

---

## Question 2

```js
let str = "Hello";

console.log(str.charAt(1));
console.log(str.charCodeAt(1));
```

### Answer

```text
e
101
```

---

## Question 3

```js
let str = "hello";

console.log(str.includes("ell"));
console.log(str.includes("Ell"));
```

### Answer

```text
true
false
```

Because it is case-sensitive.

---

## Question 4

```js
let str = "banana";

console.log(str.indexOf("a"));
console.log(str.lastIndexOf("a"));
```

### Answer

```text
1
5
```

---

## Question 5

```js
let str = "hello";

console.log(str.replace("l", "x"));
```

### Answer

```text
hexlo
```

Only the first matching `l` is replaced.

---

## Question 6

```js
let str = "hello";

console.log(str.replaceAll("l", "x"));
```

### Answer

```text
hexxo
```

---

## Question 7

```js
let str = "   hello   ";

console.log(str.trim());
```

### Answer

```text
hello
```

---

## Question 8

```js
let str = "JavaScript";

console.log(str.at(-1));
```

### Answer

```text
t
```

---

# 39. Coding Interview Practice

### Problem 1 — Reverse a String

Input:

```text
hello
```

Expected output:

```text
olleh
```

Hint:

```js
split("")
reverse()
join("")
```

---

### Problem 2 — Count Characters

Input:

```text
hello
```

Output:

```text
5
```

---

### Problem 3 — Check Palindrome

Input:

```text
madam
```

Output:

```text
true
```

---

### Problem 4 — Count Vowels

Input:

```text
javascript
```

Count:

```text
3
```

---

### Problem 5 — Remove Spaces

Input:

```text
"hello world"
```

Expected:

```text
"helloworld"
```

---

### Problem 6 — Find First Character

Input:

```text
"javascript"
```

Expected:

```text
"j"
```

---

### Problem 7 — Convert First Letter to Uppercase

Input:

```text
"vishal"
```

Expected:

```text
"Vishal"
```

---

# 40. Common Mistakes

### Mistake 1 — Expecting string methods to modify the original

Wrong:

```js
let str = "hello";

str.toUpperCase();

console.log(str);
// hello
```

Correct:

```js
str = str.toUpperCase();
```

---

### Mistake 2 — Forgetting that indexes start at 0

```js
let str = "Vishal";

console.log(str.charAt(0));
// V
```

Not `i`.

---

### Mistake 3 — Confusing `split()` and `join()`

Remember:

```text
String → Array = split()
Array → String = join()
```

---

### Mistake 4 — Forgetting case sensitivity

```js
"JavaScript".includes("javascript");
// false
```

---

### Mistake 5 — Confusing `replace()` and `replaceAll()`

```js
"aaa".replace("a", "b");
// baa

"aaa".replaceAll("a", "b");
// bbb
```

---

# 41. Important Interview Traps

## Trap 1

```js
console.log("Hello".length);
```

Answer:

```text
5
```

---

## Trap 2

```js
console.log("Hello".charAt(10));
```

Answer:

```text
""
```

---

## Trap 3

```js
console.log("Hello"[10]);
```

Answer:

```text
undefined
```

---

## Trap 4

```js
console.log("hello".indexOf("z"));
```

Answer:

```text
-1
```

---

## Trap 5

```js
console.log("hello".includes("H"));
```

Answer:

```text
false
```

---

## Trap 6

```js
let str = "hello";

str[0] = "H";

console.log(str);
```

Answer:

```text
hello
```

Because strings are immutable.

---

# 42. Quick Revision

```text
String
│
├── length
│
├── Character
│   ├── charAt()
│   ├── charCodeAt()
│   └── at()
│
├── Case
│   ├── toUpperCase()
│   └── toLowerCase()
│
├── Whitespace
│   ├── trim()
│   ├── trimStart()
│   └── trimEnd()
│
├── Search
│   ├── includes()
│   ├── startsWith()
│   ├── endsWith()
│   ├── indexOf()
│   └── lastIndexOf()
│
├── Extract
│   ├── slice()
│   └── substring()
│
├── Replace
│   ├── replace()
│   └── replaceAll()
│
├── Combine
│   └── concat()
│
├── Convert
│   └── split()
│
└── Repeat
    └── repeat()
```

---

# 43. Golden Rules for Interviews

1. **Strings are immutable.**
2. Indexing starts from `0`.
3. `length` is a property, not a method.
4. `slice(start, end)` → end is excluded.
5. `substring(start, end)` → end is excluded.
6. `slice()` supports negative indexes.
7. `substring()` treats negative values as `0`.
8. `replace()` normally replaces the first string match.
9. `replaceAll()` replaces all string matches.
10. `indexOf()` returns `-1` when not found.
11. `includes()` returns `true/false`.
12. `startsWith()` checks the beginning.
13. `endsWith()` checks the end.
14. `split()` converts String → Array.
15. `join()` converts Array → String.
16. `charAt()` returns a character.
17. `charCodeAt()` returns a UTF-16 code unit.
18. `at()` supports negative indexes.
19. `trim()` removes whitespace from both ends.
20. Prefer primitive strings over `new String()`.

---

# 44. Final Interview Checklist

Before moving to the next topic, make sure you can explain and code:

- [ ] What is a String?
- [ ] String immutability
- [ ] `length`
- [ ] String indexing
- [ ] `charAt()`
- [ ] `charCodeAt()`
- [ ] `at()`
- [ ] `toUpperCase()`
- [ ] `toLowerCase()`
- [ ] `trim()`
- [ ] `trimStart()`
- [ ] `trimEnd()`
- [ ] `startsWith()`
- [ ] `endsWith()`
- [ ] `includes()`
- [ ] `indexOf()`
- [ ] `lastIndexOf()`
- [ ] `slice()`
- [ ] `substring()`
- [ ] `replace()`
- [ ] `replaceAll()`
- [ ] `repeat()`
- [ ] `concat()`
- [ ] `split()`
- [ ] `join()`
- [ ] Template literals
- [ ] Escape characters
- [ ] Primitive string vs String object
- [ ] Reverse a string
- [ ] Palindrome
- [ ] Count vowels
- [ ] Character frequency

---

# Conclusion

JavaScript String methods are frequently used in real projects and interviews.

The most important concepts to master are:

```text
Immutable String
       ↓
Indexing
       ↓
Search
       ↓
Extract
       ↓
Replace
       ↓
Convert
       ↓
Interview Problems
```

**Practice the methods by writing code yourself instead of only memorizing the table.**
