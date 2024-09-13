# JS Functions

## Learning Objectives

- Understanding the purpose of functions.
- Writing custom functions with function declarations.
- Calling functions.
- Using function parameters and passing arguments to function calls.
- Returning values from functions.

---

### Why is the content of today's block that important for the students?

- We'll learn a core concept of programming.
- Functions help us avoid repetitive code, reducing workload, bugs, and maintenance issues.

### Question

- Why do you think avoiding repetitive code is crucial in programming?
- How do you think functions help achieve this goal?

---

### Required

- JavaScript Variables

---

## Session Guide

Demo Start:

```
  npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-functions/demo-start

```

Demo End:

```
  npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-functions/demo-end
```

### Functions Purpose

- Ask students: "What do you think is the purpose of a function?"
- In simple terms:
  - Functions help us reuse code. Instead of repeating the same code for actions like showing a message or calculating a total, we write it once in a function and call it whenever needed.
  - Functions are like reusable code packages.

> 💡 Feel free to use further analogies to explain the purpose of a function.

### Function Declaration

- Function declarations are a way of defining functions.
- Syntax example:

```js
function printPersonalData() {}
```

- A `function declaration` consists of:
  - The keyword `function`, which goes first.
  - A function `name`, which should describe its purpose.
  - A list of `parameters` between the parentheses (comma-separated, empty in the example above, we’ll see examples later).
  - A function `body`, which contains the JavaScript code.
- Inside the function body, we can write any JavaScript code, like declaring local variables or showing a message.

> 💡 Students can find the explanation of `local variables` and `global (or outer) variables` in the handout in the section "Variable Scope".

```js
function printPersonalData() {
  const name = Alex;
  const age = 24;
  console.log(name + " is " + age + " years old");
}
```

### Calling Functions

- Without calling the function, it will do nothing.
- Functions can be called by their names to execute their code.
- Calling a function will invoke it, making it run immediately.
- Functions can be called an arbitrary number of times.
  - This demonstrates one of the main purposes of functions: to avoid code duplication.
- If we need to change the message or how it’s shown, we only have to update the code in one place: the function..
- Fun fact: We have already called built-in browser functions (methods) like `console.log()` and `addEventListener()`.

> 💡 Students can find the explanation of `built-in browser functions` in the handout.

```js
printPersonalData();
printPersonalData();
```

### Function Parameters

- The function is not very useful with the same default message every time.
- Let's improve our function by adding `parameters`, allowing us to call it with different options.
- Functions use `parameters` like predefined variables inside the function body.
- `Parameters` can be named freely (except for reserved words and considering variable shadowing).
- When defining a function, these variables are called `parameters`
- When calling a function, the values passed are called `arguments`.
- When the function is called, the given values become local variables that the function uses.
- To put this straight:
  - A `parameter` is the variable listed inside the parentheses in the function declaration (declaration-time term).
  - An `argument` is the value that is passed to the function when it is called (call-time term).

```js
function printPersonalData(name, age) {
  console.log(name + " is " + age + " years old");
}

printPersonalData("Max", 23);
printPersonalData("Jordan", 25);
```

> 💡 Feel free to use further examples to explain function parameters.

### Returning a Value

- Some functions, like `printPersonalData` function, don't return a value, but others do.
- In simple terms:
  - A function can `return` a value back into the calling code as the result.
  - `Return values` are values that a function returns when it completes.
- To return a value from a custom function, use the `return` keyword.
- The `return` keyword can be placed anywhere in the function.
  - When execution reaches `return`, the function stops, and the value is returned to the calling code.

> 💡 Feel free to use further examples to explain `return values`.

```js
function calculateSum(a, b) {
  return a + b;
}

const result = calculateSum(5, 3);
console.log(result);
```

- There can be multiple `return statements` in a single function.

> 💡 Feel free to use further examples to explain multiple `return statements`.

```js
function checkInputLength(inputString) {
  if (inputString.length > 3) {
    return true;
  } else {
    return false;
  }
}

const isValid = checkInputLength("Hey!");
```

- It's possible to `return` without a value, which causes the function to exit immediately.

> 💡 Students can find the explanation of `early return statements` in the handout.
