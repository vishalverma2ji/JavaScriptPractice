# JavaScript Chapter — DOM Manipulation & Selecting HTML Elements

> Complete beginner-friendly notes: definitions, syntax, examples, dry runs, interview questions, output questions, common mistakes, and practice.

## Chapter contents
1. DOM meaning and purpose
2. `document` and `document.body`
3. `getElementById()`
4. `getElementsByClassName()`
5. `getElementsByTagName()`
6. `querySelector()`
7. `querySelectorAll()`
8. `NodeList` vs `HTMLCollection`
9. Changing CSS with JavaScript
10. `innerHTML`, `innerText`, `textContent`
11. IDs vs classes
12. `null` and script loading
13. Common mistakes
14. Interview Q&A
15. Output-based questions
16. Practice questions
17. Quick revision

---

## 1. What is the DOM?

DOM stands for **Document Object Model**. When the browser loads HTML, it creates a tree-like representation of the document. JavaScript can use this representation to read and change the page.

### Interview definition
> The DOM is a programming interface that represents an HTML document as a tree of objects, allowing JavaScript to access and modify its structure, content, and styles.

Example HTML:

```html
<body>
  <h1 id="title">Hello</h1>
  <p>Welcome</p>
</body>
```

Conceptual tree:

```text
document
└── html
    ├── head
    └── body
        ├── h1
        └── p
```

DOM manipulation can change text, styles, attributes, elements, and page behavior.

## 2. `document` and `document.body`

`document` represents the current HTML document.

```javascript
console.log(document);
document.body.style.backgroundColor = "pink";
```

- `document`: current page's document object
- `body`: the HTML body element
- `style`: inline style object
- `backgroundColor`: JavaScript camelCase version of CSS `background-color`

## 3. `getElementById()`

Selects the element with the specified ID.

HTML:

```html
<h1 id="title">Vishal Verma</h1>
```

JavaScript:

```javascript
let heading = document.getElementById("title");
heading.style.color = "red";
```

Syntax:

```javascript
document.getElementById("idName");
```

Important:
- Pass the ID as a string.
- Do **not** include `#`.
- Returns the element or `null` if not found.
- IDs should be unique in a document.

Correct: `document.getElementById("title")`  
Incorrect: `document.getElementById("#title")`

## 4. Duplicate IDs

Avoid:

```html
<h1 id="title">First</h1>
<h1 id="title">Second</h1>
```

An ID should identify one unique element. Use a class for multiple elements:

```html
<h1 class="title">First</h1>
<h1 class="title">Second</h1>
```

## 5. `getElementsByClassName()`

Returns a **live `HTMLCollection`** of elements with the given class.

```html
<h1 class="heading">First</h1>
<h1 class="heading">Second</h1>
```

```javascript
let headings = document.getElementsByClassName("heading");

for (let i = 0; i < headings.length; i++) {
  headings[i].style.color = "green";
}
```

Do not add a dot to the class name:

```javascript
document.getElementsByClassName("heading");  // correct
document.getElementsByClassName(".heading"); // incorrect
```

## 6. `getElementsByTagName()`

Returns a **live `HTMLCollection`** of elements with the specified tag.

```html
<h1>First</h1>
<p>Paragraph</p>
<h1>Second</h1>
```

```javascript
let headings = document.getElementsByTagName("h1");

for (let i = 0; i < headings.length; i++) {
  headings[i].style.color = "purple";
}
```

The tag name must be a string:

```javascript
document.getElementsByTagName("h1"); // correct
document.getElementsByTagName(h1);   // incorrect unless h1 is a variable
```

## 7. `querySelector()`

Selects the **first element** matching a CSS selector.

```javascript
document.querySelector("#title");   // ID
document.querySelector(".heading"); // class
document.querySelector("h1");       // tag
```

Syntax:

```javascript
document.querySelector("CSS selector");
```

Returns the first matching element or `null`.

## 8. `querySelectorAll()`

Returns a **static `NodeList`** containing all elements matching a CSS selector.

```javascript
let headings = document.querySelectorAll("h1");

headings.forEach(function(element) {
  element.style.color = "green";
});
```

You can also use a `for` loop:

```javascript
let headings = document.querySelectorAll("h1");

for (let i = 0; i < headings.length; i++) {
  headings[i].style.color = "green";
}
```

### Why this is wrong

```javascript
let f = document.querySelectorAll("h1");
f.style.color = "green";
```

`f` is a NodeList, not one HTML element. Apply the style to each item.

## 9. Selector comparison

| Method | Selects | Result |
|---|---|---|
| `getElementById("title")` | ID | One element or `null` |
| `getElementsByClassName("heading")` | Class | Live `HTMLCollection` |
| `getElementsByTagName("h1")` | Tag | Live `HTMLCollection` |
| `querySelector("#title")` | First CSS match | One element or `null` |
| `querySelectorAll(".heading")` | All CSS matches | Static `NodeList` |

Quick rule:

```text
One element by ID     → getElementById()
First CSS match       → querySelector()
All CSS matches       → querySelectorAll()
Elements by class     → getElementsByClassName()
Elements by tag       → getElementsByTagName()
```

## 10. `NodeList` vs `HTMLCollection`

- `querySelectorAll()` returns a **static NodeList**.
- `getElementsByClassName()` and `getElementsByTagName()` return **live HTMLCollections**.
- A live collection updates when matching elements are added to or removed from the document.
- A static NodeList from `querySelectorAll()` does not automatically update after later DOM changes.
- A NodeList returned by `querySelectorAll()` supports `forEach()` in modern browsers.

### Interview answer
> A NodeList from `querySelectorAll()` is static, while an HTMLCollection from methods such as `getElementsByClassName()` is live.

## 11. Changing CSS

```html
<h1 id="title">Hello World</h1>
```

```javascript
let heading = document.getElementById("title");

heading.style.color = "red";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "40px";
```

CSS uses kebab-case (`background-color`, `font-size`), while JavaScript style properties use camelCase (`backgroundColor`, `fontSize`).

Other examples:

```javascript
element.style.display = "none";
element.style.display = "block";
```

`display = "none"` hides the element from layout. Setting it to `"block"` makes it block-level; it may not restore the element's original display type.

`element.style` primarily accesses inline styles. To read a computed style:

```javascript
getComputedStyle(element).color;
```

## 12. `innerHTML`, `innerText`, and `textContent`

Given:

```html
<div id="box">Hello <b>Vishal</b></div>
```

### `innerHTML`
Reads or sets the markup inside the element:

```javascript
let box = document.getElementById("box");
console.log(box.innerHTML); // includes the <b> markup
box.innerHTML = "Hello <b>Vishal</b>";
```

**Security:** Do not insert untrusted user input into `innerHTML`, because it can create cross-site scripting (XSS) vulnerabilities.

### `textContent`
Reads or sets text without interpreting assigned text as HTML:

```javascript
box.textContent = "Hello Vishal";
```

### `innerText`
Reads or sets rendered text and takes CSS visibility/layout into account more closely than `textContent`.

| Property | Main purpose |
|---|---|
| `innerHTML` | Reads/writes HTML markup |
| `textContent` | Reads/writes text content |
| `innerText` | Reads/writes rendered text |

Use `textContent` when you want to insert plain text.

## 13. Complete example based on your HTML

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Practice</title>
</head>
<body>
  <h1 class="name">Vishal Verma</h1>
  <h1 class="name">Visa</h1>
  <h1 id="heading1">Vishal Verma</h1>
  <h1>Welcome</h1>

  <div id="main">
    Hey, this is Vishal Verma from
    <p>Hey</p>
    <h1>Welcome</h1>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

### `script.js`

```javascript
console.log("DOM practice");

// Select one element by ID
let heading = document.getElementById("heading1");
heading.style.color = "red";

// Change page background
document.body.style.backgroundColor = "pink";

// Select the main div
let main = document.getElementById("main");
main.style.backgroundColor = "blue";
main.style.color = "white";

// Select all h1 elements
let allHeadings = document.querySelectorAll("h1");

allHeadings.forEach(function(element) {
  element.style.fontFamily = "Arial";
});

// Select elements with a shared class
let names = document.getElementsByClassName("name");

for (let i = 0; i < names.length; i++) {
  names[i].style.color = "green";
}
```

If multiple lines set the same inline CSS property on the same element, the last executed assignment wins for that property.

## 14. Avoiding `null` errors

This can fail if no element has the ID `"missing"`:

```javascript
let heading = document.getElementById("missing");
heading.style.color = "red";
```

The selector returns `null`; accessing `.style` on `null` throws a `TypeError`.

Safe check:

```javascript
let heading = document.getElementById("missing");

if (heading !== null) {
  heading.style.color = "red";
}
```

### Make sure the HTML is available

Place the script near the end of the body:

```html
<body>
  <h1 id="title">Hello</h1>
  <script src="script.js"></script>
</body>
```

Or use `defer` in the head:

```html
<head>
  <script src="script.js" defer></script>
</head>
```

`defer` lets the browser download the script while parsing HTML and execute it after parsing is complete.

## 15. IDs, classes, and selectors

| Target | HTML | JavaScript |
|---|---|---|
| ID | `id="title"` | `getElementById("title")` |
| Class | `class="heading"` | `getElementsByClassName("heading")` |
| Tag | `<h1>` | `getElementsByTagName("h1")` |
| CSS ID selector | `id="title"` | `querySelector("#title")` |
| CSS class selector | `class="heading"` | `querySelector(".heading")` |

For `querySelector()` and `querySelectorAll()`:

```text
# means ID
. means class
h1 means tag
```

For `getElementById()` and `getElementsByClassName()`, do not add `#` or `.`.

## 16. Common mistakes

### Mistake 1: Missing quotes around a tag name

```javascript
document.getElementsByTagName("h1"); // correct
```

### Mistake 2: Wrong ID selector syntax

```javascript
document.getElementById("title"); // correct; no #
```

### Mistake 3: Applying `.style` to a NodeList

Wrong:

```javascript
let items = document.querySelectorAll("h1");
items.style.color = "green";
```

Correct:

```javascript
items.forEach(function(item) {
  item.style.color = "green";
});
```

### Mistake 4: Reusing an ID
Use unique IDs and classes for groups of elements.

### Mistake 5: Not checking for `null`
A missing element can cause a `TypeError` when you access `.style`.

### Mistake 6: Using CSS kebab-case in JavaScript style properties
Use `backgroundColor`, not `background-color`.

### Mistake 7: Using `innerHTML` for untrusted text
Prefer `textContent` for plain text.

---

# 17. Important Interview Questions and Answers

### Q1. What is the DOM?
The DOM represents an HTML document as a tree of objects that JavaScript can access and manipulate.

### Q2. What is DOM manipulation?
Using JavaScript to read or change an HTML page's elements, text, structure, or styles.

### Q3. What does `getElementById()` return?
The matching element or `null` if no matching ID exists.

### Q4. Can multiple elements have the same ID?
IDs should be unique in an HTML document. Use a class for multiple elements.

### Q5. Difference between `querySelector()` and `querySelectorAll()`?
`querySelector()` returns the first match or `null`; `querySelectorAll()` returns a static NodeList of all matches.

### Q6. Difference between `getElementsByClassName()` and `querySelectorAll()`?
The first returns a live HTMLCollection; the second returns a static NodeList.

### Q7. What does `getElementsByTagName("h1")` return?
A live HTMLCollection of matching `h1` elements.

### Q8. Why does `querySelectorAll("h1").style.color` not work?
Because `querySelectorAll()` returns a NodeList, not an individual element. Loop through the results.

### Q9. Difference between `innerHTML` and `textContent`?
`innerHTML` reads/writes markup; `textContent` reads/writes text without parsing assigned text as HTML.

### Q10. Difference between `innerText` and `textContent`?
`innerText` reflects rendered text more closely; `textContent` includes descendant text regardless of rendered visibility.

### Q11. Why use `backgroundColor` instead of `background-color`?
JavaScript style property names use camelCase.

### Q12. What does `null` mean in DOM selection?
No matching element was found by that selector.

### Q13. What is `defer`?
It downloads a script while HTML is parsed and runs it after parsing finishes.

### Q14. Is the NodeList from `querySelectorAll()` live?
No, it is static.

### Q15. How do you change all `h1` colors to green?
```javascript
document.querySelectorAll("h1").forEach(function(element) {
  element.style.color = "green";
});
```

### Q16. How do you select a class with `querySelector()`?
Use a dot, for example `document.querySelector(".card")`.

### Q17. How do you select an ID with `querySelector()`?
Use a hash, for example `document.querySelector("#title")`.

### Q18. How can you avoid an error if an element is missing?
Check that the returned element is not `null` before using it.

---

# 18. Output-based interview questions

Try to predict the output first.

### Question 1

HTML:

```html
<h1 id="title">Hello</h1>
```

JavaScript:

```javascript
let x = document.getElementById("title");
console.log(x.textContent);
```

Output:

```text
Hello
```

### Question 2

HTML:

```html
<h1>One</h1>
<h1>Two</h1>
```

JavaScript:

```javascript
let x = document.querySelector("h1");
console.log(x.textContent);
```

Output:

```text
One
```

Reason: `querySelector()` returns the first matching element.

### Question 3

HTML:

```html
<h1>One</h1>
<h1>Two</h1>
```

JavaScript:

```javascript
let x = document.querySelectorAll("h1");
console.log(x.length);
```

Output:

```text
2
```

### Question 4

```javascript
let x = document.getElementById("notThere");
console.log(x);
```

If no such element exists, output:

```text
null
```

### Question 5

HTML:

```html
<div id="box"><b>Hello</b></div>
```

JavaScript:

```javascript
let box = document.getElementById("box");
console.log(box.innerHTML);
console.log(box.textContent);
```

The first output includes the `<b>` markup and `Hello`; the second outputs the text `Hello`. Whitespace depends on HTML formatting.

---

# 19. How interviewers phrase DOM questions

### Task 1
"Select the element with ID `title` and make its text red."

```javascript
let element = document.getElementById("title");
element.style.color = "red";
```

### Task 2
"Change every `h1` to green."

```javascript
document.querySelectorAll("h1").forEach(function(heading) {
  heading.style.color = "green";
});
```

### Task 3
"Select all elements sharing the class `card` and change their background."

```javascript
document.querySelectorAll(".card").forEach(function(element) {
  element.style.backgroundColor = "yellow";
});
```

### Task 4
"Why is this code incorrect?"

```javascript
let headings = document.querySelectorAll("h1");
headings.style.color = "green";
```

Answer: `headings` is a NodeList, so the style must be set on each individual element.

### Task 5
"What happens if a selector finds no element?"

Answer: `getElementById()` and `querySelector()` return `null`; accessing `.style` on `null` throws a `TypeError`.

---

# 20. Practice questions

## Beginner
1. Select an element by ID and change its text color.
2. Change the body background to light blue.
3. Select the first `h1` using `querySelector()`.
4. Select all `p` elements using `querySelectorAll()`.
5. Select all elements with class `card`.
6. Change every `h2` font size to `30px`.
7. Count the number of `li` elements.
8. Change a paragraph's text using `textContent`.

## Intermediate
9. Give every `.highlight` element a yellow background.
10. Make all `h1` elements blue using one loop.
11. Print the text of every element with class `item`.
12. Compare `innerHTML` and `textContent`.
13. Handle a missing ID without causing an error.
14. Explain why duplicate IDs are a problem.
15. Explain why `querySelectorAll()` returns a collection.

## Interview challenge
16. Create three headings and change all of them to green.
17. Select a `div` by ID and change its background and text colors.
18. Solve the same task using `querySelectorAll()` and `getElementsByTagName()`.
19. Predict the result when `querySelector()` finds several matches.
20. Explain live `HTMLCollection` vs static `NodeList`.

---

# 21. Quick revision sheet

```text
DOM
→ Browser representation of HTML as a tree of objects

document
→ Current HTML document

getElementById("title")
→ One element by ID, or null

getElementsByClassName("card")
→ Live HTMLCollection

getElementsByTagName("h1")
→ Live HTMLCollection

querySelector("h1")
→ First matching element, or null

querySelectorAll("h1")
→ Static NodeList of all matches

#title
→ CSS ID selector

.card
→ CSS class selector

element.style.color = "red"
→ Set inline text color

element.style.backgroundColor = "pink"
→ Set inline background color

element.textContent
→ Read/write text

element.innerHTML
→ Read/write HTML markup

NodeList
→ querySelectorAll() result; static

HTMLCollection
→ getElementsByClassName()/getElementsByTagName() result; live

null
→ No matching element found
```

## Golden rules

1. IDs should be unique.
2. Use classes when several elements share a style or behavior.
3. `getElementById("title")` takes the ID without `#`.
4. `getElementsByClassName("card")` takes the class without `.`.
5. CSS selectors use `#` for IDs and `.` for classes.
6. `querySelector()` returns only the first match.
7. `querySelectorAll()` returns all matches.
8. A NodeList is not an individual element.
9. Use camelCase style properties such as `backgroundColor`.
10. Check for `null` before accessing an element's properties.
11. Prefer `textContent` for plain text.
12. Do not insert untrusted input into `innerHTML`.
13. Make sure the target HTML exists before the script runs, or use `defer`.

## Chapter goal

After this chapter, you should be able to explain the DOM, select elements using IDs/classes/tags/CSS selectors, change content and styles, understand collections, avoid `null` errors, and solve common DOM interview tasks independently.

**Next topic:** DOM Events — `addEventListener()`, click events, input events, and event handling.
