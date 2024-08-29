# JS Loops

## Learning objectives

- Understanding the concept of loops in general
- Understanding `for` loops (do something x times)
- Understanding `for…in` and `for…of` loops (we will learn about alternative ways to loop
  through arrays and objects)
- Understanding `while` loops (do something until a condition is met)

## Requirements

- JS Objects and Arrays

## Demo

### Start

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-loops/demo-start
```

### End

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-loops/demo-end
```

## Session Guide

### Introduction: What is a loop

- Explain loops in general:

- offer a quick and easy way to do something repeatedly
- at the very beginning (and NOT in JavaScript), you could only go to a specific line in order
  to repeat it
  [like in this example picture](https://regmedia.co.uk/2012/04/27/basic2_336x204.png)

- Loops in JavaScript:
- There are many kinds of loops (we will start with the basics ones).
- The number of iterations can be set programmatically.
- The loop mechanisms differ in the way how to determine the start and end points of the loop.
- Each loop has preferred use cases (e.g. for performance reasons).

### `while`

Start with the `while` loop as most fundamental loop:

- repeats a code block as long as a stated criteria is `true`
- stops when the criteria changes to `false`

```js
let string = "a";

while (string.length <= 8) {
  console.log(string);
  string = string + string;
}

// 'a'
// 'aa'
// 'aaaa'
// 'aaaaaaaa'
```

### `for`

Explain the `for` loop:

- intended for repeating a task as long as a certain condition is fullfilled
- consists of four parts:
  - the initialization expression: The expression (if any) is executed. It usually initializes one or more loop counters, but it can execute any degree of expression, even variable declarations.
  - the condition expression: As long as the condition evaluates to `true`, the loop statement executes, otherwise the loop terminates. If there is no condition expression specified, the condition is assumed to be `true`
  - the loop statement: Is executed as long as the value of the condition is `true`.
  - the afterthought expression: If present, the afterthought expression is executed after the loop statement.

```js
for (initialization; condition; afterthought) {
  statement;
  statement;
}
```

```js
for (let i = 0; i <= 3; i++) {
  console.log(i);
}

// 0
// 1
// 2
// 3
```

### `for...in`

Explain the `for...in` loop:

- meant to loop through all keys of an object
- the iterator variable (here: `key`) is assigned the respective key value in each iteration

```js
const user = {
  name: "Alex",
  age: 28,
  email: "alex@mail.com",
};

for (const key in user) {
  console.log(user[key]);
}

// 'Alex'
// 28
// 'alex@mail.com'
```

### `for...of`

Explain the `for...of` loop:

- is meant to loop through all items of an
  [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)
  (for our purposes thats mostly arrays)
- the iterator variable (here: `fruit`) is assigned the respective array item in each iteration.

```js
const fruits = ["apple", "banana", "melon"];

for (const fruit of fruits) {
  console.log(fruit);
}

// 'apple'
// 'banana'
// 'melon'
```

---
