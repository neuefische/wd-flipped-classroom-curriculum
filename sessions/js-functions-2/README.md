# JS Functions 2

## Learning objectives

- What a return statement of a function is and how to use it in your JavaScript functions
- What an `early return` is
- How to write functions with the `fat arrow notation`

---

### Why is the content of today's block that important for the students?

- You will learn how a function returns a value back to the place where it was called.
- You will know how to early return from a function.
- You will learn how to write functions with the fat arrow syntax.

- We will learn how to use a value outside of a function by which it has been computed.

---

### Required

- We will use our knowledge about JavaScript functions and further deepen our understanding.

---

## Session Guide

### Recap Functions

Remind the students of their knowledge about functions:

- the function keyword
- the function name
- the function body
- parameters
- console.log()
- calling a function

```js
function add3Numbers(first, second, third) {
  const sum = first + second + third;
  console.log(sum);
}

add3Numbers(1, 2, 3);
```

Point out that `console.log()` immediately uses the computed `sum` inside of the function.

### Return Statement

Explain its use and advantage:

- we don't have to use a value inside of a function as in the case of `console.log()`
- the function can return this value and make it available elsewhere
- we outsource computations and continue using the returned value in the program

```js
function add3Numbers(first, second, third) {
  const sum = first + second + third;
  return sum;
}

const firstSum = add3Numbers(1, 2, 3);
```

Explain that a function can only return one expression value, but can have multiple return
statements:

```js
function checkInputLength(inputString) {
  if (inputString.length > 3) {
    return true;
  } else {
    return false;
  }
}
```

#### Early Return Statement

Point out that the execution of a function ends as soon as a `return` statement is reached:

```js
function checkInputLength(inputString) {
  if (inputString.length > 3) {
    return true;
    console.log("I am never logged in the console.");
  } else {
    return false;
    console.log("Me neither.");
  }
}
```

### Arrow Function Expressions

In contrast to the classic `function declaration`, explain the `arrow function expression`:

- saved like a variable with the keyword `const`
- parameters written normally with round brackets
- the fat arrow `=>` points to the start of the function body in curly braces `{}`

```js
const addNumbers = (first, second) => {
  return first + second;
};
```

Explain the critera for a short notation with arrow syntax:

1. omit round brackets `()` if it is only one parameter

```js
const addOne = (number) => {
  return number + 1;
};
```

2. omit curly braces `{}` and `return` keyword if there is only one return statement

- Note: In this case, the expression after `=>` becomes the implicit return value.
- Note: Use this implicit return only if there really is a value to return, and not for a void
  function.

```js
const addNumbers = (first, second) => first + second;
```

---
