# JS Unit Testing

## Learning objectives

- Understand what unit testing is and how it relates to other testing methods
- Know how to write a unit test that checks the output of a function
- Understand what Test Driven Development is and how it is used
- Know how to run unit tests locally (via the command line)

---

### Which important problem will we solve today?

- Modern software is often very complex and complexity increases over time
- We as software developers want to ensure that our software works as it should be
  - We want to reduce the amount of bugs (especially the big/critical bugs)
- In order to find bugs, we need to test our software
  - Manual testing by clicking buttons in the UI can be a very time consuming, tedious and
    unreliable process
- Therefore, we are well advised to use tools that allow to test automatically

### Why is the content of today's block that important for the students?

- Automated testing provides confidence
  - We can run all tests automatically with every change to the code (e.g. before merging a pull
    request)
  - Everything that worked before the change, still works
- This is very important for software companies
  - Users have rising expectations regarding the quality of a software
  - Software companies need to ensure a certain level of quality

### Question

How can we be sure that a function works exactly as intended?

---

### Requirements

- JS Basics
- JS Functions
- JS Inputs and Strings

---

## Demo

Start

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-unit-testing/demo-start
```

End

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-unit-testing/demo-end
```

> Note: replace the placeholder `<YOUR-NAME>` with your actual name in the demo

---

## Session Guide

### Different types of tests

- Explain that there are different types of test automation
- Show the
  [Testing Trophy](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications)
- Explain the `four types` of tests
- `Static` Tests
- We discussed this topic already in the previous session about `Linting`
- The code is read automatically to find typos (think of a spellchecker)
- `Unit` Tests
- The code is not only read, but executed
- Tests the actual logic that is written in code
- A single function
- No dependencies
- The focus of this lecture
- `Integration` Tests
- Multiple units working together
- `End to End` Tests
- Tests a complete flow of data through all parts of the application
- Like clicking through the UI, but not manually by a person

### Testability of a function (pure functions)

- Open the `greet.js` file
  - Explain the `greet` function
- Point out that this function is easy to test because it is a `pure function`
  - It produces the same result every time it's called with the same arguments
  - It has a `return` statement
  - It has `no external dependencies`
    - Everything is passed via arguments (e.g. no usage of variables outside of function scope)
  - There are `no side effects`
    - Like writing to the DOM or fetching data

### Introduction to jest

- Show the [jest website](https://jestjs.io/)
- Explain that `jest` is a testing framework for JavaScript code
  - it loads and runs all tests
  - it shows the test results (successful or failed)

### Writing a unit test

- Point out that the `greet` function is `exported`
- Create the `greet.test.js` file
  - Show that the code to be tested needs to be `imported`
  - Write and explain the `test()` function
    - 1. Argument: a description of the test in natural language
    - 2. Argument: a callback function including the test
  - Call the imported `greet` function
    - Point out that the result of this call is stored in a variable
  - Write and explain the `expect()` function
    - Allows you to test the result against certain criteria
    - Work by calling a `matcher` function
  - Write and explain the `matcher` used: `toBe()`
    - Compares two values for strict equality
    - Mention that there are various other matchers

```js
import { greet } from "./greet.js";

test("returns 'Hello Jane!' if called greet('Jane')", () => {
  const result = greet("Jane");
  expect(result).toBe("Hello Jane!");
});
```

### Running tests

- Open the `package.json` file
  - Show the line with the `test` script
  - Explain that this calls `jest`
  - Explain that it starts `jest` in watch mode (test re-run on file change)
- Execute `npm run test` in the terminal
  - Show that the result is `green` - a successful test
- Change something in the implementation in `greet.js` (e.g. `"Hi"` instead of `"Hello"`)
- Run the test again: `npm run test`
  - Show that the result is `red` - a failed test
  - The code doesn't work as described in the test
- Fix the implementation and run the test again

### Test Driven Development (TDD)

- Point out that tests _specify what_ the code should do
- Explain the mental model of `writing the test first`
  - Start your work by asking yourself: What should this code do?
  - Often this is given as `acceptance criteria`
  - Write down this criteria in form of tests
  - Afterwards start writing the code that _provides how_ to solve this requirement
- This approach is called `Test Driven Development (TDD)`

Now show how TDD looks in practice. For that, we are going to extend the greet function.

- State the following acceptance criteria
  - When the function is called without a name, it should return `"Hello stranger!"`
  - When the function is called with `<YOUR-NAME>`, it should return `"Hello coach!"`
- Open `greet.test.js` and write the tests for the acceptance criteria

  ```js
  test("returns 'Hello stranger!' if called greet()", () => {
    const result = greet();
    expect(result).toBe("Hello stranger!");
  });

  test("returns 'Hello coach!' if called greet('<YOUR-NAME>')", () => {
    const result = greet("<YOUR-NAME>");
    expect(result).toBe("Hello coach!");
  });
  ```

- Run `npm run test` in the terminal
  - Point out that the two new tests fail
  - Now we need to write the implementation
- Open `greet.js`
  - Implement the logic to meet the first acceptance criteria
    ```js
    function greet(name = "stranger") {
      return `Hello ${name}!`;
    }
    ```
- Highlight that all tests were executed after saving the file
  - Show that the second test is now successful
  - The third test still failed
- Implement the logic for the second acceptance criteria and show the result in the terminal

  ```js
  function greet(name = "stranger") {
    if (name === "<YOUR NAME>") {
      return "Hello coach!";
    }

    return `Hello ${name}!`;
  }
  ```

---
