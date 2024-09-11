# JS Unit Testing

## Learning Objectives

- Understanding what unit testing is and how it relates to other testing methods
- Learning how to write a unit test that checks the output of a function
- Understanding Test Driven Development (TDD) and its role in development
- Knowing how to run unit tests locally via the command line

## Requirements

- JS Basics
- JS Functions
- JS Inputs and Strings

## Demo

### Start

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-unit-testing/demo-start
```

### End

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-unit-testing/demo-end
```

> 💡 Replace the placeholder `<YOUR-NAME>` with your actual name in the demo.

---

## Session Guide

Today, we’ll tackle an important problem in modern software development: as software becomes more complex, so do the potential for bugs and issues. As developers, our goal is to ensure that our software works as intended, and reduce the chances of bugs — especially critical ones.

While manual testing through the UI can be time-consuming, tedious, and unreliable, we can use automated testing tools to help us catch issues faster and with greater accuracy.

Automated testing provides us with confidence: we can run tests automatically with every change to our code and ensure that everything that worked before still works. This is crucial for software companies, as users have increasingly high expectations for quality, and it’s important to maintain that standard.

> How can you be sure that a function works exactly as intended?

### Different Types of Tests

- Explain that there are different types of test automation.
- Show the [Testing Trophy](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications).
- Explain the `four types` of tests:
- **Static Tests:**
  - We discussed this topic already in the previous session about "Linting".
  - The code is read automatically to find typos (think of a spellchecker).
- **Unit Tests:**
  - The code is not only read, but executed.
  - Tests the actual logic that is written in code.
  - A single function
  - No dependencies
  - The focus of this lecture
- **Integration Tests:**
  - Multiple units working together.
- **End-to-End Tests:**
  - Tests a complete flow of data through all parts of the application, like clicking through the UI, but not manually by a person.

### Testability of a Function (Pure Functions)

- Open the `greet.js` file and explain the `greet` function.
- Point out that this function is easy to test because it is a `pure function`:
  - It produces the same result every time it's called with the same arguments.
  - It has a `return` statement.
  - It has no external dependencies:
    - Everything is passed via arguments (e.g., no usage of variables outside of function scope).
  - There are no side effects like writing to the DOM or fetching data.

### Introduction to Jest

- Show the [Jest website](https://jestjs.io/).
- Explain that `jest` is a testing framework for JavaScript code.
  - It loads and runs all tests.
  - It shows the test results (successful or failed).

### Writing a Unit Test

- Point out that the `greet` function is exported.
- Create the `greet.test.js` file.
  - Show that the code to be tested needs to be imported.
  - Write and explain the `test()` function:
    - 1. Argument: A description of the test in natural language.
    - 2. Argument: A callback function including the test.
  - Call the imported `greet` function.
    - Point out that the result of this call is stored in a variable.
  - Write and explain the `expect()` function:
    - Allows you to test the result against certain criteria.
    - Works by calling a `matcher` function.
  - Write and explain the `matcher` used: `toBe()`
    - Compares two values for strict equality.
    - Mention that there are various other matchers.

```js
import { greet } from "./greet.js";

test("returns 'Hello Jane!' if called greet('Jane')", () => {
  const result = greet("Jane");
  expect(result).toBe("Hello Jane!");
});
```

### Running Tests

- Open the `package.json` file.
  - Show the line with the `test` script.
  - Explain that this calls `jest`.
  - Explain that it starts `jest` in watch mode (test re-run on file change).
- Execute `npm run test` in the terminal.
  - Show that the result is `green` - a successful test.
- Change something in the implementation in `greet.js` (e.g., `"Hi"` instead of `"Hello"`).
- Run the test again: `npm run test`.
  - Show that the result is `red` - a failed test.
  - The code doesn't work as described in the test.
- Fix the implementation and run the test again.

### Test Driven Development (TDD)

- Point out that tests _specify what_ the code should do.
- Explain the mental model of "writing the test first":
  - Start your work by asking yourself: What should this code do?
  - Often this is given as "acceptance criteria".
  - Write down this criteria in form of tests.
  - Afterwards start writing the code that _provides how_ to solve this requirement.
- This approach is called Test Driven Development (TDD).

- Now show how TDD looks in practice. For that, we are going to extend the `greet` function.

- State the following acceptance criteria:
  - When the function is called without a name, it should return `"Hello stranger!"`.
  - When the function is called with `<YOUR-NAME>`, it should return `"Hello coach!"`.
- Open `greet.test.js` and write the tests for the acceptance criteria:

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

- Run `npm run test` in the terminal.
  - Point out that the two new tests fail.
  - Now we need to write the implementation.
- Open `greet.js`.
  - Implement the logic to meet the first acceptance criteria:
    ```js
    function greet(name = "stranger") {
      return `Hello ${name}!`;
    }
    ```
- Highlight that all tests were executed after saving the file.
  - Show that the second test is now successful.
  - The third test still failed.
- Implement the logic for the second acceptance criteria and show the result in the terminal.

  ```js
  function greet(name = "stranger") {
    if (name === "<YOUR NAME>") {
      return "Hello coach!";
    }

    return `Hello ${name}!`;
  }
  ```
