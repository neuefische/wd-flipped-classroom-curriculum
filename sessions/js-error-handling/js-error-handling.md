# JS Error Handling

## Learning Objectives

- knowing the **different types of exceptions**
- understanding the `try...catch` construct
- knowing how to throw **custom errors**
- understanding the errors in a `fetch` request environment

## Introduction to JavaScript Error Handling

Error handling is a **very important** aspect of programming, allowing for continuously working code even when encountering unexpected issues.

You can find an interactive look at the subjects presented below at [the end of the document](#js-error-handling-interactive-work-file).

## Different Types of Exceptions

JavaScript distinguishes between different types of exceptions, each indicating a specific kind of error in your code.

#### Syntax Errors

Occur when there are errors in the syntax of your code, preventing it from being parsed correctly.

- Misspelled keywords: `vaar x = 10;`
- Invalid assignment: `10 = x;`
- etc.

```javascript
// Missing closing parenthesis
console.log("Hello, world";

```

#### Runtime Errors

Also known as exceptions, these occur during the execution of the code due to factors such as invalid operations, type mismatches, or referencing non-existent variables.

- Accessing undefined variable: `console.log(nonExistentVariable);`
- Calling a function that does not exist: `nonExistentFunction();`
- etc.

```javascript
// Get the name of a user object
function getUserName(user) {
  return user.name
}

getUserName("Marc") // -> Error: string is not an object
```

#### Logical Errors

These errors occur when the code runs without throwing exceptions but produces incorrect results due to flawed logic or algorithmic errors. In other words: The code works but the reasoning behind it is flawed.

- Incorrect conditions
- Incorrect algorithm implementation
- etc.

```javascript
// Incorrect calculation
function calculateTotalCost(price, quantity) {
  return price * quantity + 10;
  // Incorrectly adds 10 to the total cost
}

const totalCost = calculateTotalCost(20, 5);
// Should be 20 * 5 = 100, but actual result will be 110
```

## Catching Runtime Errors: The `try...catch` statement

The [`try...catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) statement provides a fairly easy solution to handling errors. It allows you to wrap code that may lead to errors in a `try` block and specify how to handle any resulting exceptions in the `catch` block. In other words: you're writing something like an emergency protocol, or how to move from "Plan A" to "Plan B".

```javascript
try {
  // Plan A
} catch (error) {
  // Plan B
}
```

## Throwing Custom Errors

In addition to handling built-in exceptions, JavaScript allows you to throw custom errors to signal specific error conditions within your code. This is achieved using the throw statement, which interrupts the execution flow and propagates the error to be caught by an enclosing try...catch block or handled at a higher level.

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}
```

Throwing custom errors enables you to provide meaningful error messages and context to aid in debugging and troubleshooting.

## Handling Errors in a `fetch` Request Environment:

When making HTTP requests using the `fetch` API, you may encounter the following issues:

- network issues
- server errors
- unexpected responses

The `fetch` function returns a [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), allowing you to use `async/await` as part of your control flow statements.

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      // "!" => Logical NOT operator === response is NOT okay
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);

    throw error;
  }
}
```

It is usually wise not to leave errors "un-handled". Knowing when to expect and how to handle errors is a specific set of skills that should be part of every developers tool belt.

## JS Error Handling: Interactive Work File

For a more in-depth, interactive look at **JS Error Handling** please refer to [this link](https://web-active-learning.vercel.app/documents/error-handling).

## Resources

- [Control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
  > ⚠️ _This is an advanced resource discussing subjects we've not talked about before._
