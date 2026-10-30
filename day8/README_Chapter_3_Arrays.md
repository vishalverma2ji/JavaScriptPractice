# JavaScript Chapter 3 — Arrays

## Complete Notes + Methods + Examples + Output + Interview Preparation

> Goal: Arrays को सिर्फ methods याद करके नहीं, बल्कि उनके **return value, mutation, callback, indexing, iteration और interview traps** के साथ समझना।

---

# 1. What is an Array?

An array is a data structure used to store multiple values in a single variable.

JavaScript arrays are:

- Ordered
- Zero-indexed
- Dynamic in size
- Heterogeneous in nature

Example:

```js
let arr = [1, 2, "Pradeep", 4, "invertis"];

console.log(arr);
```

Output:

```text
[1, 2, "Pradeep", 4, "invertis"]
```

JavaScript array में अलग-अलग data types भी store हो सकते हैं:

```js
let arr = [
    10,
    "Vishal",
    true,
    null,
    { name: "JavaScript" },
    [1, 2, 3]
];
```

---

# 2. Important Correction

आपके notes में:

> "Array is a huge memory block of code"

यह technically सही definition नहीं है।

Interview में बेहतर answer:

> An array is an ordered, zero-indexed collection that can store multiple values in a single variable.

और JavaScript में array:

```text
Heterogeneous → different types of values can be stored.
```

---

# 3. Characteristics of JavaScript Arrays

Important points:

```text
1. Zero-indexed
2. Ordered
3. Dynamic
4. Can store different data types
5. Can contain duplicate values
6. Mutable
7. Have a length property
8. Arrays are objects in JavaScript
```

Example:

```js
let arr = [10, 20, 30];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
```

Output:

```text
10
20
30
```

---

# 4. Zero-Based Indexing

JavaScript arrays start from index `0`.

```js
let arr = ["A", "B", "C", "D"];
```

Indexes:

```text
Value → A   B   C   D
Index → 0   1   2   3
```

Therefore:

```js
console.log(arr[0]); // A
console.log(arr[3]); // D
```

---

# 5. Array Length

The `length` property gives the number of elements.

```js
let arr = [10, 20, 30, 40];

console.log(arr.length);
```

Output:

```text
4
```

Important:

```text
Last index = length - 1
```

For example:

```text
length = 4
last index = 3
```

---

# 6. Creating an Array

There are multiple ways to create arrays.

## 1. Array Literal

Most common way:

```js
let arr = [1, 2, 3, 4];
```

## 2. Array Constructor

```js
let arr = new Array(1, 2, 3, 4);
```

## 3. Array.of()

```js
let arr = Array.of(10, 20, 40);

console.log(arr);
```

Output:

```text
[10, 20, 40]
```

---

# 7. Array Literal

Your example:

```js
let arr = [1, 2, "Pradeep", 4, "invertis"];

console.log(arr);
```

Output:

```text
[1, 2, "Pradeep", 4, "invertis"]
```

This is called:

```text
Array Literal
```

---

# 8. `Array.of()`

`Array.of()` creates an array from the values passed to it.

```js
let arr = Array.of(10, 20, 40);

console.log(arr);
```

Output:

```text
[10, 20, 40]
```

### Interview Trap

```js
Array.of(5);
```

Output:

```text
[5]
```

But:

```js
new Array(5);
```

creates an array with:

```text
length = 5
```

containing empty slots.

This difference is commonly asked in interviews.

---

# 9. `Array(5)` vs `Array.of(5)`

```js
console.log(Array(5));
console.log(Array.of(5));
```

Conceptually:

```text
Array(5)    → array with length 5
Array.of(5) → [5]
```

Important interview question.

---

# 10. Accessing Array Elements

```js
let arr = [10, 20, 30];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
```

Output:

```text
10
20
30
```

If an index does not exist:

```js
console.log(arr[10]);
```

Output:

```text
undefined
```

---

# 11. Updating an Array Element

Arrays are mutable.

```js
let arr = [10, 20, 30];

arr[1] = 200;

console.log(arr);
```

Output:

```text
[10, 200, 30]
```

---

# 12. Traversing an Array with `for` Loop

Your example:

```js
let arr = [1, 2, "Pradeep", 4, "invertis"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

Output:

```text
1
2
Pradeep
4
invertis
```

Important pattern:

```js
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

---

# 13. `push()`

`push()` adds one or more elements at the end of an array.

```js
let arr = [1, 2, 3];

arr.push(10, 20);

console.log(arr);
```

Output:

```text
[1, 2, 3, 10, 20]
```

### Important

`push()` changes the original array.

It returns the **new length** of the array.

Example:

```js
let arr = [1, 2, 3];

let result = arr.push(10, 20);

console.log(result);
console.log(arr);
```

Output:

```text
5
[1, 2, 3, 10, 20]
```

---

# 14. `pop()`

`pop()` removes the last element from an array.

```js
let arr = [1, 2, 3];

let result = arr.pop();

console.log(result);
console.log(arr);
```

Output:

```text
3
[1, 2]
```

### Important

`pop()`:

```text
Changes original array
Returns removed element
```

---

# 15. `shift()`

`shift()` removes the first element.

```js
let arr = [10, 20, 30];

let result = arr.shift();

console.log(result);
console.log(arr);
```

Output:

```text
10
[20, 30]
```

### Important

```text
shift() → removes first element
```

---

# 16. `unshift()`

`unshift()` adds one or more elements at the beginning.

```js
let arr = [10, 20, 30];

let result = arr.unshift(5);

console.log(result);
console.log(arr);
```

Output:

```text
4
[5, 10, 20, 30]
```

### Important

`unshift()` returns the new length.

---

# 17. Push vs Pop vs Shift vs Unshift

| Method | Action | Position | Return |
|---|---|---|---|
| `push()` | Add | End | New length |
| `pop()` | Remove | End | Removed element |
| `shift()` | Remove | Start | Removed element |
| `unshift()` | Add | Start | New length |

Easy memory:

```text
push    → add at end
pop     → remove from end
shift   → remove from start
unshift → add at start
```

All four mutate the original array.

---

# 18. `includes()`

`includes()` checks whether a value exists in an array.

It returns:

```text
true
OR
false
```

Example:

```js
let arr = [1, 2, 3, 4];

console.log(arr.includes(3));
console.log(arr.includes(7));
```

Output:

```text
true
false
```

---

# 19. `includes()` Example

Your example:

```js
let arr5 = [1, 2, 3, 4];

console.log(arr5.includes(7));
```

Output:

```text
false
```

Because `7` is not present.

---

# 20. `includes()` with Strings

```js
let arr = ["hello", "hi", "vishal"];

console.log(arr.includes("vishal"));
```

Output:

```text
true
```

If no argument is supplied:

```js
console.log(arr.includes());
```

It searches for `undefined`.

It will normally return:

```text
false
```

unless the array actually contains `undefined`.

---

# 21. `indexOf()`

`indexOf()` returns the index of the first matching element.

If the element is not found:
                 
```text
-1
```

Example:

```js
let arr = [10, 20, 30, 20];

console.log(arr.indexOf(20));
```

Output:

```text
1
```

Because the first `20` is at index `1`.

---

# 22. `indexOf()` with Starting Index

Syntax:

```js
array.indexOf(searchElement, fromIndex)
```

Example:

```js
let arr = [1, 2, 3, 1, 4];

console.log(arr.indexOf(1, 2));
```

Output:

```text
3
```

Why?

Search starts from index `2`:

```text
index → 0  1  2  3  4
value → 1  2  3  1  4
                  ↑
                  3
```

---

# 23. `indexOf()` vs `includes()`

| Method | Return |
|---|---|
| `indexOf()` | Index or `-1` |
| `includes()` | `true` or `false` |

Example:

```js
let arr = [10, 20, 30];

console.log(arr.indexOf(20));  // 1
console.log(arr.includes(20)); // true
```

Use:

```text
includes → existence check
indexOf  → need index
```

---

# 24. `slice()`

`slice()` extracts a portion of an array.

Syntax:

```js
array.slice(start, end)
```

Important:

```text
start → included
end   → excluded
```

Example:

```js
let arr = [10, 20, 30, 40, 60, 50];

console.log(arr.slice(2));
```

Output:

```text
[30, 40, 60, 50]
```

---

# 25. `slice(start, end)`

```js
let arr = [10, 20, 30, 40, 60, 50];

console.log(arr.slice(2, 4));
```

Output:

```text
[30, 40]
```

Indexes:

```text
index → 0   1   2   3   4   5
value → 10  20  30  40  60  50
              ↑       ↑
            start     end
```

Index `4` is excluded.

---

# 26. Important Typo in Your Example

You wrote:

```js
arr7.sclice(2, 4)
```

Correct method is:

```js
arr7.slice(2, 4)
```

`sclice()` does not exist.

It will cause:

```text
TypeError
```

---

# 27. Does `slice()` Modify the Original Array?

No.

Example:

```js
let arr = [1, 2, 3, 4];

let result = arr.slice(1, 3);

console.log(result);
console.log(arr);
```

Output:

```text
[2, 3]
[1, 2, 3, 4]
```

So:

```text
slice() → non-mutating
```

---

# 28. `splice()`

`splice()` can add, remove, or replace elements in an array.

Syntax:

```js
array.splice(startIndex, deleteCount, item1, item2, ...)
```

Example:

```js
let arr = [10, 20, 30, 40];

arr.splice(1, 2, 400, 500, 600);

console.log(arr);
```

Output:

```text
[10, 400, 500, 600, 40]
```

Explanation:

```text
startIndex = 1
deleteCount = 2
```

Removed:

```text
20, 30
```

Added:

```text
400, 500, 600
```

---

# 29. `splice()` Return Value

`splice()` returns an array containing the elements removed.

Example:

```js
let arr = [10, 20, 30, 40];

let result = arr.splice(1, 2, 400, 500, 600);

console.log(result);
console.log(arr);
```

Output:

```text
[20, 30]
[10, 400, 500, 600, 40]
```

---

# 30. `splice()` Can Only Delete

```js
let arr = [10, 20, 30, 40];

let result = arr.splice(1, 2);

console.log(result);
console.log(arr);
```

Output:

```text
[20, 30]
[10, 40]
```

---

# 31. `splice()` Can Only Add

```js
let arr = [10, 20, 30];

arr.splice(1, 0, 15, 18);

console.log(arr);
```

Output:

```text
[10, 15, 18, 20, 30]
```

Because:

```text
deleteCount = 0
```

---

# 32. `slice()` vs `splice()`

Very important interview question.

| Feature | `slice()` | `splice()` |
|---|---|---|
| Purpose | Extract/copy portion | Add/remove/replace |
| Original array | Not modified | Modified |
| End index | Excluded | Uses delete count |
| Return | New array | Removed elements |
| Mutation | No | Yes |

Easy memory:

```text
slice  → copy a piece
splice → modify original
```

---

# 33. `forEach()`

`forEach()` executes a callback once for every array element.

Example:

```js
let arr = [1, 2, 3, 4];

arr.forEach((value, index, array) => {
    console.log(value);
});
```

Output:

```text
1
2
3
4
```

---

# 34. `forEach()` Callback Parameters

The callback can receive:

```text
value
index
array
```

Example:

```js
let arr = [10, 20, 30];

arr.forEach((value, index, array) => {
    console.log(value);
    console.log(index);
    console.log(array);
});
```

For the first iteration:

```text
value → 10
index → 0
array → [10, 20, 30]
```

---

# 35. Does `forEach()` Return a New Array?

No.

Example:

```js
let arr = [1, 2, 3];

let result = arr.forEach(num => {
    return num * 2;
});

console.log(result);
```

Output:

```text
undefined
```

Important:

```text
forEach() → returns undefined
```

Use `map()` when you want a new transformed array.

---

# 36. `map()`

`map()` executes a callback for each element and returns a new array.

Example:

```js
let arr = [1, 2, 3, 4];

let result = arr.map(num => {
    return num * num;
});

console.log(result);
```

Output:

```text
[1, 4, 9, 16]
```

---

# 37. `map()` Important Rule

The callback should normally return the transformed value.

```js
let result = arr.map(num => num * 2);
```

Output:

```text
[2, 4, 6, 8]
```

---

# 38. `forEach()` vs `map()`

Very important interview question.

| Feature | `forEach()` | `map()` |
|---|---|---|
| Iterates | Yes | Yes |
| Returns new array | No | Yes |
| Return value | `undefined` | New array |
| Common use | Side effects | Transformation |
| Changes original array automatically | No | No |

Easy memory:

```text
forEach → perform something
map     → transform into new array
```

---

# 39. `filter()`

`filter()` creates a new array containing elements that satisfy a condition.

Example:

```js
let arr = [1, 9, 2, 3, 4];

let result = arr.filter(num => {
    return num > 2;
});

console.log(result);
```

Output:

```text
[9, 3, 4]
```

---

# 40. `filter()` Rule

Callback should return a truthy/falsy condition.

```js
let result = arr.filter(num => num % 2 === 0);
```

Output:

```text
[2, 4]
```

---

# 41. `map()` vs `filter()`

| `map()` | `filter()` |
|---|---|
| Transforms each element | Selects elements |
| Usually same length | Can be shorter |
| Returns new array | Returns new array |
| Callback returns transformed value | Callback returns condition |

Example:

```js
[1, 2, 3].map(x => x * 2);
```

Output:

```text
[2, 4, 6]
```

```js
[1, 2, 3].filter(x => x > 1);
```

Output:

```text
[2, 3]
```

---

# 42. `reduce()`

`reduce()` reduces an array to a single accumulated value.

It can produce:

```text
number
string
object
array
or another single value
```

Example:

```js
let arr = [1, 2, 3, 4];

let result = arr.reduce((total, num) => {
    return total + num;
}, 0);

console.log(result);
```

Output:

```text
10
```

---

# 43. How `reduce()` Works

For:

```js
[1, 2, 3, 4]
```

with initial value:

```text
0
```

Calculation:

```text
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
```

Final result:

```text
10
```

---

# 44. `reduce()` Callback Parameters

The callback commonly receives:

```text
accumulator
currentValue
currentIndex
array
```

Example:

```js
arr.reduce((acc, value, index, array) => {
    // ...
}, 0);
```

Most commonly used:

```text
accumulator
currentValue
```

---

# 45. Important Error in Your `reduce()` Example

Your original code was similar to:

```js
let res1 = arr11.reduce((num, mull) => {
    num * mull;
});
```

There are two important problems.

### Problem 1 — No `return`

This:

```js
num * mull;
```

calculates an expression but does not return it.

### Problem 2 — Accumulator logic

For multiplication, use an initial value and return the multiplication:

```js
let arr = [1, 9, 2, 3, 4];

let result = arr.reduce((acc, num) => {
    return acc * num;
}, 1);

console.log(result);
```

Output:

```text
216
```

---

# 46. `reduce()` for Maximum

```js
let arr = [10, 5, 30, 20];

let max = arr.reduce((acc, num) => {
    return num > acc ? num : acc;
}, arr[0]);

console.log(max);
```

Output:

```text
30
```

This is an important interview use case.

---

# 47. `reduce()` for Counting

Example:

```js
let arr = ["a", "b", "a", "c", "a"];

let count = arr.reduce((acc, value) => {

    acc[value] = (acc[value] || 0) + 1;

    return acc;

}, {});

console.log(count);
```

Output:

```text
{
    a: 3,
    b: 1,
    c: 1
}
```

---

# 48. `some()`

`some()` checks whether **at least one** element satisfies the condition.

It returns:

```text
true
OR
false
```

Example:

```js
let arr = [1, 2, 3, 4, 5];

let result = arr.some(num => {
    return num % 2 === 0;
});

console.log(result);
```

Output:

```text
true
```

Because `2` and `4` are even.

---

# 49. `some()` Memory Trick

```text
some → ANY
```

Question:

> Is there at least one element satisfying the condition?

If yes:

```text
true
```

Otherwise:

```text
false
```

---

# 50. `every()`

`every()` checks whether **all** elements satisfy the condition.

Example:

```js
let arr = [2, 4, 6, 8];

let result = arr.every(num => {
    return num % 2 === 0;
});

console.log(result);
```

Output:

```text
true
```

If:

```js
let arr = [2, 4, 5, 8];
```

then:

```text
false
```

because `5` is not even.

---

# 51. `some()` vs `every()`

| Method | Meaning |
|---|---|
| `some()` | At least one matches |
| `every()` | All must match |

Memory:

```text
some  → ANY
every → ALL
```

---

# 52. `find()`

`find()` returns the **first element** that satisfies the condition.

Example:

```js
let arr = [1, 2, 3, 4, 5];

let result = arr.find(num => {
    return num > 2;
});

console.log(result);
```

Output:

```text
3
```

Important:

```text
find() returns a value, not an array.
```

---

# 53. `find()` If No Element Matches

```js
let arr = [1, 2, 3];

let result = arr.find(num => num > 10);

console.log(result);
```

Output:

```text
undefined
```

---

# 54. `find()` vs `filter()`

Very important interview question.

```js
let arr = [1, 2, 3, 4, 5];
```

### find

```js
arr.find(num => num > 2);
```

Output:

```text
3
```

Only the first matching value.

### filter

```js
arr.filter(num => num > 2);
```

Output:

```text
[3, 4, 5]
```

All matching values.

Memory:

```text
find   → first matching element
filter → all matching elements
```

---

# 55. Spread Operator

Spread syntax is written as:

```js
...
```

It expands elements of an iterable.

For arrays, it is commonly used for:

- Copying
- Merging
- Passing values

Example:

```js
let arr1 = [1, 2, 3, 4];

let copy = [...arr1];

console.log(copy);
```

Output:

```text
[1, 2, 3, 4]
```

---

# 56. Merge Arrays with Spread

```js
let arr16 = [1, 2, 3, 4];

let arr17 = [6, 7, 8, 9];

let result = [...arr16, ...arr17];

console.log(result);
```

Output:

```text
[1, 2, 3, 4, 6, 7, 8, 9]
```

---

# 57. Spread Creates a Shallow Copy

```js
let arr1 = [1, 2, 3];

let arr2 = [...arr1];

arr2.push(4);

console.log(arr1);
console.log(arr2);
```

Output:

```text
[1, 2, 3]
[1, 2, 3, 4]
```

For primitive elements, changes to the copied array do not affect the original array.

But nested objects/arrays are still shared references.

---

# 58. Shallow Copy Interview Trap

```js
let arr1 = [
    { name: "Vishal" }
];

let arr2 = [...arr1];

arr2[0].name = "Rahul";

console.log(arr1[0].name);
```

Output:

```text
Rahul
```

Why?

Because spread creates a shallow copy.

The nested object is still the same reference.

---

# 59. Rest Operator

Rest syntax is also:

```js
...
```

But its purpose is different.

Rest collects multiple values into an array.

Example:

```js
function showDetails(name, ...hobbies) {
    console.log(name);
    console.log(hobbies);
}

showDetails("Vishal", "cricket", "hockey");
```

Output:

```text
Vishal
["cricket", "hockey"]
```

---

# 60. Spread vs Rest

This is a very important interview question.

### Spread

```js
let result = [...arr1, ...arr2];
```

Spread:

```text
expands values
```

### Rest

```js
function test(...values) {}
```

Rest:

```text
collects values
```

Memory:

```text
Spread → expand
Rest   → collect
```

---

# 61. `concat()`

`concat()` combines arrays and returns a new array.

```js
let arr1 = [1, 2];
let arr2 = [3, 4];

let result = arr1.concat(arr2);

console.log(result);
```

Output:

```text
[1, 2, 3, 4]
```

Unlike `push()`:

```text
concat() does not modify the original array.
```

---

# 62. Spread vs `concat()`

Both can be used to merge arrays.

```js
let result1 = arr1.concat(arr2);
```

or:

```js
let result2 = [...arr1, ...arr2];
```

Both create a new array.

---

# 63. `reverse()`

`reverse()` reverses the array in place.

```js
let arr = [1, 2, 3, 4];

arr.reverse();

console.log(arr);
```

Output:

```text
[4, 3, 2, 1]
```

Important:

```text
reverse() mutates the original array.
```

---

# 64. `sort()`

`sort()` sorts array elements in place.

Important interview trap:

By default, JavaScript sorts values as strings.

```js
let arr = [10, 2, 5, 1];

arr.sort();

console.log(arr);
```

Result:

```text
[1, 10, 2, 5]
```

Why?

String comparison:

```text
"1"
"10"
"2"
"5"
```

---

# 65. Numeric Sort

For ascending numeric sort:

```js
let arr = [10, 2, 5, 1];

arr.sort((a, b) => a - b);

console.log(arr);
```

Output:

```text
[1, 2, 5, 10]
```

Descending:

```js
arr.sort((a, b) => b - a);
```

---

# 66. `sort()` Mutates Original Array

```js
let arr = [3, 1, 2];

let result = arr.sort();

console.log(result);
console.log(arr);
```

Both refer to the sorted array because `sort()` mutates the original.

---

# 67. `join()`

`join()` converts array elements into a string.

```js
let arr = ["Hello", "Vishal"];

console.log(arr.join(" "));
```

Output:

```text
Hello Vishal
```

Another example:

```js
let arr = [1, 2, 3];

console.log(arr.join("-"));
```

Output:

```text
1-2-3
```

---

# 68. `toString()`

Arrays have a `toString()` representation.

```js
let arr = [1, 2, 3];

console.log(arr.toString());
```

Output:

```text
1,2,3
```

---

# 69. `at()`

`at()` returns an element at a given index.

```js
let arr = [10, 20, 30, 40];

console.log(arr.at(2));
```

Output:

```text
30
```

A useful feature is negative indexing:

```js
console.log(arr.at(-1));
```

Output:

```text
40
```

---

# 70. Traditional Last Element vs `at()`

Traditional:

```js
arr[arr.length - 1]
```

Modern:

```js
arr.at(-1)
```

Both get the last element.

---

# 71. `findIndex()`

`findIndex()` returns the index of the first element satisfying the condition.

```js
let arr = [10, 20, 30, 40];

let result = arr.findIndex(num => num > 25);

console.log(result);
```

Output:

```text
2
```

If no element matches:

```text
-1
```

---

# 72. `findLast()`

`findLast()` searches from the end and returns the last matching element.

```js
let arr = [1, 2, 3, 4, 5, 6];

console.log(arr.findLast(num => num % 2 === 0));
```

Output:

```text
6
```

---

# 73. `findLastIndex()`

Returns the index of the last matching element.

```js
let arr = [1, 2, 4, 6, 8];

console.log(arr.findLastIndex(num => num % 2 === 0));
```

Output:

```text
4
```

---

# 74. `flat()`

`flat()` creates a new array with nested arrays flattened.

```js
let arr = [1, [2, 3], [4, 5]];

console.log(arr.flat());
```

Output:

```text
[1, 2, 3, 4, 5]
```

---

# 75. `flat()` with Depth

```js
let arr = [1, [2, [3, 4]]];

console.log(arr.flat(2));
```

Output:

```text
[1, 2, 3, 4]
```

---

# 76. `Array.isArray()`

`Array.isArray()` checks whether a value is an array.

```js
console.log(Array.isArray([1, 2, 3]));
```

Output:

```text
true
```

```js
console.log(Array.isArray("hello"));
```

Output:

```text
false
```

Very common interview question.

---

# 77. Why `typeof []` is "object"

```js
console.log(typeof []);
```

Output:

```text
object
```

Therefore, to check specifically for an array:

```js
Array.isArray(value);
```

Use:

```js
Array.isArray([]);
```

not:

```js
typeof [] === "array"
```

because `"array"` is not the result of `typeof`.

---

# 78. Empty Array

```js
let arr = [];

console.log(arr.length);
```

Output:

```text
0
```

---

# 79. Sparse Array

An array can contain empty slots.

```js
let arr = new Array(3);

console.log(arr.length);
```

Output:

```text
3
```

But it has three empty slots rather than three explicit `undefined` values.

This is an important advanced interview concept.

---

# 80. `delete` and Arrays

You can technically use `delete` on an array element:

```js
let arr = [10, 20, 30];

delete arr[1];

console.log(arr);
console.log(arr.length);
```

The array length remains:

```text
3
```

and index `1` becomes a hole.

Usually, to remove an element properly, use:

```js
splice()
```

---

# 81. Mutating vs Non-Mutating Methods

This is one of the most important array interview topics.

## Mutating Methods

These modify the original array:

```text
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
```

Some other array operations can also mutate depending on usage, but these are the core methods to memorize.

## Non-Mutating Methods

Common examples:

```text
slice()
concat()
map()
filter()
forEach()
reduce()
some()
every()
find()
findIndex()
includes()
indexOf()
join()
flat()
```

Important:

> "Non-mutating" means the method does not modify the original array itself; it may still create and return a new value.

---

# 82. Quick Mutation Table

| Method | Mutates Original? | Return |
|---|---:|---|
| `push()` | Yes | New length |
| `pop()` | Yes | Removed element |
| `shift()` | Yes | Removed element |
| `unshift()` | Yes | New length |
| `splice()` | Yes | Removed elements |
| `sort()` | Yes | Sorted array |
| `reverse()` | Yes | Reversed array |
| `slice()` | No | New array |
| `concat()` | No | New array |
| `map()` | No | New array |
| `filter()` | No | New array |
| `reduce()` | No | Accumulated value |
| `forEach()` | No | `undefined` |
| `some()` | No | Boolean |
| `every()` | No | Boolean |
| `find()` | No | Element / `undefined` |
| `findIndex()` | No | Index / `-1` |
| `includes()` | No | Boolean |
| `indexOf()` | No | Index / `-1` |

---

# 83. Array Method Return Values

Memorize these.

```text
push()    → new length
pop()     → removed element
shift()   → removed element
unshift() → new length
splice()  → removed elements array

slice()   → new array
map()     → new array
filter()  → new array
concat()  → new array
flat()    → new array

forEach() → undefined

reduce()  → single accumulated value
some()    → true / false
every()   → true / false
includes()→ true / false

find()       → first matching element / undefined
findIndex()  → index / -1
indexOf()    → index / -1
```

---

# 84. Iteration Methods — Big Picture

Important array iteration methods:

```text
forEach()
map()
filter()
reduce()
some()
every()
find()
findIndex()
findLast()
findLastIndex()
```

Understand their purpose:

```text
forEach    → perform for each
map        → transform
filter     → select
reduce     → accumulate
some       → any?
every      → all?
find       → first matching value
findIndex  → first matching index
findLast   → last matching value
findLastIndex → last matching index
```

---

# 85. Callback Parameters in Array Methods

Most array callback methods can receive:

```text
value
index
array
```

Example:

```js
let arr = [10, 20, 30];

arr.map((value, index, array) => {
    console.log(value);
    console.log(index);
    console.log(array);
});
```

Important:

```text
value → current element
index → current index
array → original array being processed
```

---

# 86. `for...of` for Arrays

`for...of` gives values.

```js
let arr = [10, 20, 30];

for (let value of arr) {
    console.log(value);
}
```

Output:

```text
10
20
30
```

---

# 87. `for...in` for Arrays

`for...in` gives keys/indexes.

```js
let arr = ["a", "b", "c"];

for (let index in arr) {
    console.log(index);
}
```

Output:

```text
0
1
2
```

For arrays, `for...of` is generally preferred when you want values.

---

# 88. `for...in` vs `for...of`

| Loop | Gives |
|---|---|
| `for...in` | Keys/indexes |
| `for...of` | Values |

Example:

```js
for (let index in arr) {
    console.log(index);
}
```

```text
0
1
2
```

```js
for (let value of arr) {
    console.log(value);
}
```

```text
a
b
c
```

---

# 89. Destructuring Arrays

Array destructuring allows us to extract values into variables.

```js
let arr = [10, 20, 30];

let [a, b, c] = arr;

console.log(a);
console.log(b);
console.log(c);
```

Output:

```text
10
20
30
```

---

# 90. Skipping Values with Destructuring

```js
let arr = [10, 20, 30];

let [a, , c] = arr;

console.log(a);
console.log(c);
```

Output:

```text
10
30
```

---

# 91. Rest with Array Destructuring

```js
let arr = [10, 20, 30, 40];

let [first, ...remaining] = arr;

console.log(first);
console.log(remaining);
```

Output:

```text
10
[20, 30, 40]
```

---

# 92. Spread vs Destructuring Rest

Both use `...`, but their roles differ.

```js
let [first, ...rest] = arr;
```

Here `rest` collects remaining values.

```js
let newArr = [...arr];
```

Here spread expands the values.

Memory:

```text
... on RHS → usually spread
... in parameter/destructuring position → rest
```

---

# 93. Copying an Array

### Spread

```js
let arr1 = [1, 2, 3];

let arr2 = [...arr1];
```

### Slice

```js
let arr2 = arr1.slice();
```

### `Array.from()`

```js
let arr2 = Array.from(arr1);
```

All can create a shallow copy.

---

# 94. `Array.from()`

`Array.from()` creates an array from an iterable or array-like value.

Example:

```js
let str = "hello";

let arr = Array.from(str);

console.log(arr);
```

Output:

```text
["h", "e", "l", "l", "o"]
```

---

# 95. `Array.from()` with Mapping

```js
let arr = Array.from([1, 2, 3], num => num * 2);

console.log(arr);
```

Output:

```text
[2, 4, 6]
```

---

# 96. `Array.of()` vs `Array.from()`

| Method | Purpose |
|---|---|
| `Array.of()` | Creates array from arguments |
| `Array.from()` | Creates array from iterable/array-like |

Example:

```js
Array.of(3);
```

```text
[3]
```

```js
Array.from("abc");
```

```text
["a", "b", "c"]
```

---

# 97. Checking Equality of Arrays

Important interview trap:

```js
console.log([1, 2] === [1, 2]);
```

Output:

```text
false
```

Why?

Arrays are objects, and each array literal creates a different object reference.

```js
let a = [1, 2];
let b = a;

console.log(a === b);
```

Output:

```text
true
```

Both variables reference the same array.

---

# 98. Reference Example

```js
let arr1 = [1, 2, 3];

let arr2 = arr1;

arr2.push(4);

console.log(arr1);
```

Output:

```text
[1, 2, 3, 4]
```

Why?

Both variables point to the same array.

---

# 99. Copy vs Reference

```js
let arr1 = [1, 2, 3];

let arr2 = arr1;
```

This does NOT create a new array.

It creates another reference.

For a shallow copy:

```js
let arr2 = [...arr1];
```

---

# 100. Nested Array Reference

```js
let arr1 = [[1, 2], [3, 4]];

let arr2 = [...arr1];

arr2[0].push(10);

console.log(arr1);
```

Output:

```text
[[1, 2, 10], [3, 4]]
```

Because the outer array was copied, but nested arrays were still shared references.

---

# 101. Common Mistake — `map()` Without Return

Wrong:

```js
let result = [1, 2, 3].map(num => {
    num * 2;
});

console.log(result);
```

Output:

```text
[undefined, undefined, undefined]
```

Correct:

```js
let result = [1, 2, 3].map(num => {
    return num * 2;
});
```

Or:

```js
let result = [1, 2, 3].map(num => num * 2);
```

---

# 102. Common Mistake — `filter()` Without Condition

Wrong:

```js
let result = [1, 2, 3].filter(num => {
    num > 1;
});
```

There is no `return`.

Correct:

```js
let result = [1, 2, 3].filter(num => {
    return num > 1;
});
```

Or:

```js
let result = [1, 2, 3].filter(num => num > 1);
```

---

# 103. Common Mistake — `forEach()` Expecting New Array

Wrong assumption:

```js
let result = arr.forEach(num => num * 2);
```

`result` is:

```text
undefined
```

Use:

```js
let result = arr.map(num => num * 2);
```

if you need a new array.

---

# 104. Common Mistake — `push()` Return Value

Many beginners think:

```js
let result = arr.push(10);
```

means `result` contains the new array.

Wrong.

It contains:

```text
new length
```

Example:

```js
let arr = [1, 2, 3];

let result = arr.push(10);

console.log(result);
```

Output:

```text
4
```

---

# 105. Common Mistake — `pop()` Return Value

```js
let arr = [1, 2, 3];

let result = arr.pop();

console.log(result);
```

Output:

```text
3
```

It returns the removed element, not the modified array.

---

# 106. Common Mistake — `slice()` End Index

```js
let arr = [10, 20, 30, 40];

console.log(arr.slice(1, 3));
```

Output:

```text
[20, 30]
```

Index `3` is excluded.

Memory:

```text
slice(start, end)
end → excluded
```

---

# 107. Common Mistake — `splice()` Uses Delete Count

```js
arr.splice(1, 2);
```

This means:

```text
start at index 1
delete 2 elements
```

It does NOT mean:

```text
delete until index 2
```

---

# 108. Interview Question — What is a Heterogeneous Array?

### Answer

A heterogeneous array can contain values of different data types.

Example:

```js
let arr = [10, "hello", true, null];
```

JavaScript arrays can store different types.

---

# 109. Interview Question — Are Arrays Objects?

### Answer

Yes.

```js
typeof [];
```

returns:

```text
"object"
```

To specifically check whether something is an array:

```js
Array.isArray(value);
```

---

# 110. Interview Question — Are Arrays Mutable?

### Answer

Yes. JavaScript arrays are mutable.

Example:

```js
let arr = [1, 2, 3];

arr[0] = 100;
```

Now:

```text
[100, 2, 3]
```

---

# 111. Interview Question — What is Array Mutation?

Mutation means changing the original array.

Example:

```js
let arr = [1, 2, 3];

arr.push(4);
```

The original array becomes:

```text
[1, 2, 3, 4]
```

---

# 112. Interview Question — Which Array Methods Mutate?

Common mutating methods:

```text
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
```

---

# 113. Interview Question — Which Methods Return New Arrays?

Common methods:

```text
map()
filter()
slice()
concat()
flat()
```

---

# 114. Interview Question — What Does `reduce()` Return?

`reduce()` returns one accumulated result.

It can be:

```text
number
string
object
array
etc.
```

Example:

```js
[1, 2, 3].reduce((sum, num) => sum + num, 0);
```

Output:

```text
6
```

---

# 115. Interview Question — `some()` vs `every()`

```text
some()  → true if at least one element matches
every() → true only if all elements match
```

Example:

```js
[1, 2, 3].some(x => x > 2);
```

```text
true
```

```js
[1, 2, 3].every(x => x > 0);
```

```text
true
```

---

# 116. Interview Question — `find()` vs `filter()`

```text
find()   → first matching element
filter() → all matching elements
```

Example:

```js
[1, 2, 3, 4].find(x => x > 2);
```

```text
3
```

```js
[1, 2, 3, 4].filter(x => x > 2);
```

```text
[3, 4]
```

---

# 117. Interview Question — `map()` vs `forEach()`

### `map()`

Returns a new array.

```js
let result = arr.map(x => x * 2);
```

### `forEach()`

Returns `undefined`.

```js
arr.forEach(x => console.log(x));
```

Memory:

```text
Need transformed array → map
Just execute something → forEach
```

---

# 118. Interview Question — `slice()` vs `splice()`

### slice

```text
Does not mutate
Returns copied portion
End index excluded
```

### splice

```text
Mutates original
Can add/remove/replace
Uses deleteCount
Returns removed elements
```

---

# 119. Interview Question — Spread vs Rest

### Spread

```js
let result = [...arr];
```

Expands values.

### Rest

```js
function test(...values) {}
```

Collects values.

---

# 120. Interview Question — What is a Shallow Copy?

A shallow copy creates a new outer array, but nested objects/arrays can still share references.

Example:

```js
let a = [[1, 2]];

let b = [...a];
```

`a` and `b` are different outer arrays, but:

```js
a[0] === b[0]
```

is:

```text
true
```

---

# 121. Output-Based Interview Questions

## Question 1

```js
let arr = [1, 2, 3];

console.log(arr.push(4));
console.log(arr);
```

Answer:

```text
4
[1, 2, 3, 4]
```

---

## Question 2

```js
let arr = [1, 2, 3];

console.log(arr.pop());
console.log(arr);
```

Answer:

```text
3
[1, 2]
```

---

## Question 3

```js
let arr = [10, 20, 30];

console.log(arr.shift());
console.log(arr);
```

Answer:

```text
10
[20, 30]
```

---

## Question 4

```js
let arr = [10, 20, 30];

console.log(arr.unshift(5));
console.log(arr);
```

Answer:

```text
4
[5, 10, 20, 30]
```

---

## Question 5

```js
let arr = [10, 20, 30, 40];

console.log(arr.slice(1, 3));
console.log(arr);
```

Answer:

```text
[20, 30]
[10, 20, 30, 40]
```

---

## Question 6

```js
let arr = [10, 20, 30, 40];

console.log(arr.splice(1, 2));
console.log(arr);
```

Answer:

```text
[20, 30]
[10, 40]
```

---

## Question 7

```js
let arr = [1, 2, 3];

let result = arr.map(x => x * 2);

console.log(result);
console.log(arr);
```

Answer:

```text
[2, 4, 6]
[1, 2, 3]
```

---

## Question 8

```js
let arr = [1, 2, 3];

let result = arr.forEach(x => x * 2);

console.log(result);
```

Answer:

```text
undefined
```

---

## Question 9

```js
let arr = [1, 2, 3, 4];

console.log(arr.filter(x => x % 2 === 0));
```

Answer:

```text
[2, 4]
```

---

## Question 10

```js
let arr = [1, 2, 3, 4];

console.log(
    arr.reduce((sum, x) => sum + x, 0)
);
```

Answer:

```text
10
```

---

## Question 11

```js
let arr = [1, 2, 3, 4];

console.log(arr.some(x => x > 3));
```

Answer:

```text
true
```

---

## Question 12

```js
let arr = [2, 4, 6];

console.log(arr.every(x => x % 2 === 0));
```

Answer:

```text
true
```

---

## Question 13

```js
let arr = [1, 2, 3, 4];

console.log(arr.find(x => x > 2));
```

Answer:

```text
3
```

---

## Question 14

```js
let arr = [1, 2, 3, 4];

console.log(arr.find(x => x > 10));
```

Answer:

```text
undefined
```

---

## Question 15

```js
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1);
```

Answer:

```text
[1, 2, 3, 4]
```

---

## Question 16

```js
let arr1 = [1, 2, 3];
let arr2 = [...arr1];

arr2.push(4);

console.log(arr1);
console.log(arr2);
```

Answer:

```text
[1, 2, 3]
[1, 2, 3, 4]
```

---

## Question 17

```js
console.log([1, 2] === [1, 2]);
```

Answer:

```text
false
```

---

## Question 18

```js
let arr = [10, 2, 5, 1];

arr.sort();

console.log(arr);
```

Answer:

```text
[1, 10, 2, 5]
```

Reason:

```text
Default sort is lexicographical/string-based.
```

---

## Question 19

```js
let arr = [10, 2, 5, 1];

arr.sort((a, b) => a - b);

console.log(arr);
```

Answer:

```text
[1, 2, 5, 10]
```

---

## Question 20

```js
let arr = [1, [2, 3], [4, 5]];

console.log(arr.flat());
```

Answer:

```text
[1, 2, 3, 4, 5]
```

---

# 122. Coding Interview Questions — Beginner

Try solving these without looking at the solution.

### Q1. Find the sum of all array elements.

Input:

```js
[1, 2, 3, 4, 5]
```

Expected:

```text
15
```

---

### Q2. Find the maximum number.

Input:

```js
[10, 5, 30, 20]
```

Expected:

```text
30
```

---

### Q3. Find the minimum number.

Input:

```js
[10, 5, 30, 20]
```

Expected:

```text
5
```

---

### Q4. Count even numbers.

Input:

```js
[1, 2, 3, 4, 5, 6]
```

Expected:

```text
3
```

---

### Q5. Create a new array containing squares.

Input:

```js
[1, 2, 3, 4]
```

Expected:

```text
[1, 4, 9, 16]
```

---

### Q6. Filter numbers greater than 10.

Input:

```js
[5, 12, 8, 20, 3]
```

Expected:

```text
[12, 20]
```

---

### Q7. Find the first even number.

Input:

```js
[1, 3, 5, 8, 10]
```

Expected:

```text
8
```

---

### Q8. Check whether an array contains an even number.

Input:

```js
[1, 3, 5, 8]
```

Expected:

```text
true
```

---

### Q9. Check whether all numbers are positive.

Input:

```js
[1, 2, 3, 4]
```

Expected:

```text
true
```

---

### Q10. Reverse an array.

Input:

```js
[1, 2, 3, 4]
```

Expected:

```text
[4, 3, 2, 1]
```

---

# 123. Coding Interview Questions — Intermediate

### Q11. Remove duplicate values.

Input:

```js
[1, 2, 2, 3, 4, 4, 5]
```

Expected:

```text
[1, 2, 3, 4, 5]
```

Hint:

```js
[...new Set(arr)]
```

---

### Q12. Find the second largest number.

Input:

```js
[10, 5, 30, 20]
```

Expected:

```text
20
```

---

### Q13. Count frequency of each element.

Input:

```js
["a", "b", "a", "c", "b", "a"]
```

Expected:

```text
{
    a: 3,
    b: 2,
    c: 1
}
```

---

### Q14. Find duplicate elements.

Input:

```js
[1, 2, 3, 2, 4, 1]
```

Expected:

```text
[1, 2]
```

---

### Q15. Find the missing number.

Input:

```js
[1, 2, 3, 5]
```

Expected:

```text
4
```

---

# 124. Array Interview Cheat Sheet

```text
push()
→ add at end
→ returns new length
→ mutates

pop()
→ remove from end
→ returns removed element
→ mutates

shift()
→ remove from start
→ returns removed element
→ mutates

unshift()
→ add at start
→ returns new length
→ mutates

includes()
→ existence check
→ boolean

indexOf()
→ first index
→ -1 if absent

slice()
→ extracts/copies
→ end excluded
→ does not mutate

splice()
→ add/remove/replace
→ mutates
→ returns removed elements

forEach()
→ iterate
→ undefined

map()
→ transform
→ new array

filter()
→ select
→ new array

reduce()
→ accumulate
→ single result

some()
→ ANY
→ boolean

every()
→ ALL
→ boolean

find()
→ first matching element

findIndex()
→ first matching index

findLast()
→ last matching element

sort()
→ mutates
→ default string sorting

reverse()
→ mutates
→ reverses array

concat()
→ combines
→ new array

flat()
→ flattens
→ new array

Array.isArray()
→ checks array
```

---

# 125. Most Important Interview Comparisons

## `push()` vs `unshift()`

```text
push    → end
unshift → start
```

## `pop()` vs `shift()`

```text
pop   → remove end
shift → remove start
```

## `slice()` vs `splice()`

```text
slice  → no mutation
splice → mutation
```

## `map()` vs `filter()`

```text
map    → transform
filter → select
```

## `map()` vs `forEach()`

```text
map      → new array
forEach  → undefined
```

## `some()` vs `every()`

```text
some  → any
every → all
```

## `find()` vs `filter()`

```text
find   → first element
filter → all matching elements
```

## `indexOf()` vs `includes()`

```text
indexOf  → index / -1
includes → true / false
```

## Spread vs Rest

```text
spread → expand
rest   → collect
```

## `Array.of()` vs `Array.from()`

```text
Array.of()   → values into array
Array.from() → iterable/array-like into array
```

---

# 126. Common Interview Traps

### Trap 1

```js
[1, 2, 3].map(x => {
    x * 2;
});
```

Result:

```text
[undefined, undefined, undefined]
```

Because there is no `return`.

---

### Trap 2

```js
[1, 2, 3].forEach(x => x * 2);
```

Does not return a new array.

---

### Trap 3

```js
[10, 2, 5].sort();
```

Not numeric sorting.

Result:

```text
[10, 2, 5]
```

because string comparison can place `"10"` before `"2"`.

Use:

```js
.sort((a, b) => a - b)
```

---

### Trap 4

```js
arr.slice(1, 3);
```

Index `3` is excluded.

---

### Trap 5

```js
arr.splice(1, 2);
```

`2` is delete count, not ending index.

---

### Trap 6

```js
let result = arr.push(10);
```

`result` is the new length, not the array.

---

### Trap 7

```js
console.log([] === []);
```

Output:

```text
false
```

---

### Trap 8

```js
typeof [];
```

Output:

```text
"object"
```

Use:

```js
Array.isArray([]);
```

---

### Trap 9

```js
let a = [1, 2];
let b = a;

b.push(3);
```

`a` also becomes:

```text
[1, 2, 3]
```

because both reference the same array.

---

### Trap 10

```js
let a = [[1]];
let b = [...a];

b[0].push(2);
```

`a` also becomes:

```text
[[1, 2]]
```

because spread is shallow.

---

# 127. Final Interview Checklist

Before moving to the next chapter, you should be able to explain:

- [ ] What is an array?
- [ ] Why are JavaScript arrays heterogeneous?
- [ ] Array literal
- [ ] Array constructor
- [ ] `Array.of()`
- [ ] `Array.from()`
- [ ] `Array.isArray()`
- [ ] Zero-based indexing
- [ ] `length`
- [ ] Array mutation
- [ ] `push()`
- [ ] `pop()`
- [ ] `shift()`
- [ ] `unshift()`
- [ ] `includes()`
- [ ] `indexOf()`
- [ ] `slice()`
- [ ] `splice()`
- [ ] `forEach()`
- [ ] `map()`
- [ ] `filter()`
- [ ] `reduce()`
- [ ] `some()`
- [ ] `every()`
- [ ] `find()`
- [ ] `findIndex()`
- [ ] `findLast()`
- [ ] `findLastIndex()`
- [ ] `sort()`
- [ ] Numeric sorting
- [ ] `reverse()`
- [ ] `concat()`
- [ ] `join()`
- [ ] `flat()`
- [ ] `at()`
- [ ] Spread operator
- [ ] Rest operator
- [ ] Array destructuring
- [ ] Shallow copy
- [ ] Reference vs copy
- [ ] `for...of`
- [ ] `for...in`
- [ ] Mutating vs non-mutating methods
- [ ] Output-based questions
- [ ] Array coding problems

---

# 128. Chapter 3 Golden Rules

```text
1. JavaScript arrays are ordered and zero-indexed.

2. The first index is 0.

3. Last index = length - 1.

4. JavaScript arrays can store different data types.

5. Arrays are mutable.

6. push() adds at the end and returns new length.

7. pop() removes from the end and returns removed value.

8. shift() removes from the beginning.

9. unshift() adds at the beginning and returns new length.

10. includes() returns true/false.

11. indexOf() returns index or -1.

12. slice() does not mutate the original array.

13. slice() excludes the end index.

14. splice() modifies the original array.

15. splice() uses deleteCount.

16. forEach() returns undefined.

17. map() returns a new array.

18. filter() returns matching elements in a new array.

19. reduce() returns an accumulated result.

20. some() means ANY.

21. every() means ALL.

22. find() returns the first matching element.

23. find() returns undefined when nothing matches.

24. sort() mutates the array.

25. Default sort is string-based, so use (a, b) => a - b for numbers.

26. reverse() mutates the array.

27. Spread expands values.

28. Rest collects values.

29. Spread creates a shallow copy, not a deep copy.

30. typeof [] returns "object".

31. Array.isArray([]) returns true.

32. Arrays are objects and are reference values.

33. arr2 = arr1 does not copy an array.

34. [...arr1] creates a shallow copy.

35. Nested objects/arrays can still share references after a shallow copy.
```

---

# 129. Practice Rule

For every array method, practice these five questions:

```text
1. Does it mutate the original array?

2. What does it return?

3. Does it take a callback?

4. What arguments does the callback receive?

5. What happens if no element matches?
```

Especially practice:

```text
push()
pop()
shift()
unshift()
slice()
splice()
map()
filter()
reduce()
forEach()
some()
every()
find()
findIndex()
sort()
```

---

# 130. Final Revision Map

```text
                         ARRAYS
                            |
       ------------------------------------------------
       |                    |                         |
    CREATE                MODIFY                  ITERATE
       |                    |                         |
 literal               push()                    forEach()
 new Array()            pop()                    map()
 Array.of()             shift()                  filter()
 Array.from()           unshift()                reduce()
                        splice()                 some()
                        sort()                   every()
                        reverse()                find()
                                                 findIndex()
       |
       ------------------------------------------------
                            |
                         SEARCH
                            |
                 includes()
                 indexOf()
                 find()
                 findIndex()

                            |
                         COPY
                            |
                 spread (...)
                 slice()
                 concat()
                 Array.from()

                            |
                     TRANSFORM/COMBINE
                            |
                 map()
                 filter()
                 reduce()
                 flat()
                 join()
```

---

# Chapter 3 — Interview Ready

If you can explain all of the following without looking at the notes:

```text
Array
Index
Length
Mutation
push
pop
shift
unshift
slice
splice
forEach
map
filter
reduce
some
every
find
findIndex
sort
reverse
includes
indexOf
spread
rest
shallow copy
reference
Array.of
Array.from
Array.isArray
destructuring
```

and can solve the output questions above, then your JavaScript Array foundation is ready for the next level.
