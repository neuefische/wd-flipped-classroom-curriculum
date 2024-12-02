# JS Loops

## Learning Objectives

- Understanding the concept of loops
- Understanding how `while` loops work to repeat actions until a condition is met
- Learning how to use `for` loops to repeat actions a set number of times
- Using `for…in` and `for…of` loops to iterate through arrays and objects

## Requirements

- JS Basics and Variables
- JS Objects and Arrays

## Demo

### Start

```
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/js-loops/demo-start
```

### End

```
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/js-loops/demo-end
```

---

## Session Guide

In this session, we’ll explore different types of loops in JavaScript. Loops allow us to run the same block of code multiple times, which helps avoid repetition and makes our code more efficient.

> Why do you think loops are important in programming? How might using loops improve the structure of your code?

### What is a Loop?

- Explain the concept of loops in general:

  - Loops offer a quick and easy way to do something repeatedly.
  - In early programming (and NOT in JavaScript), repeating a task required manually jumping to specific lines of code, as in this [example picture](https://regmedia.co.uk/2012/04/27/basic2_336x204.png).

- Loops in JavaScript:
  - There are many kinds of loops, and we will start with the basics ones.
  - The number of iterations can be set programmatically.
  - The loop mechanisms differ in the way how to determine the start and end points of the loop.
  - Each loop has preferred use cases (e.g. for performance reasons).

### `while` Loop

Start with the `while` loop as the most fundamental loop:

- Repeats a code block as long as a given condition is `true`.
- Stops when the condition becomes `false`.

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

### `for` Loop

Explain the `for` loop:

- Intended for repeating a task as long as a certain condition is fullfilled.
- Consists of four parts:
  - The initialization expression: The expression (if any) is executed. It usually initializes one or more loop counters, but it can execute any degree of expression, even variable declarations.
  - The condition expression: As long as the condition evaluates to `true`, the loop statement executes, otherwise the loop terminates. If there is no condition expression specified, the condition is assumed to be `true`.
  - The loop statement: Is executed as long as the value of the condition is `true`.
  - The afterthought expression: If present, the afterthought expression is executed after the loop statement.

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

### `for...in` Loop

Explain the `for...in` loop:

- Used to loop through all properties of an object.
- The iterator variable (here: `key`) is assigned the respective property name in each iteration.

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

### `for...of` Loop

Explain the `for...of` loop:

- Used to loop through all items of an [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) (for our purposes thats mostly arrays).
- The iterator variable (here: `fruit`) is assigned the respective array item in each iteration.

```js
const fruits = ["apple", "banana", "melon"];

for (const fruit of fruits) {
  console.log(fruit);
}

// 'apple'
// 'banana'
// 'melon'
```
