# JS Error Handling

## Learning Objectives

- knowing the **different types of exceptions**
- understanding the `try...catch` construct
- knowing how to throw **custom errors**
- understanding the errors in a `fetch` request environment

## Requirements

- JS DOM and Events
- JS Conditions and Booleans
- JS Fetch

## Demo

There is no demo for this session.

---

## Session Guide

> This is an active learning session, this means that the session should take up to 5-10 minutes. The session is meant as an introduction into the topic, most concepts will be learned independently by the students with the help of the active learning material.

Errors can occur in every program. To avoid catastrophic failures, we need to be able to handle those errors and resolve them gracefully. How to construct a backup plan to resolve errors programmatically is a fundamental skill for any developer.

> How can we use JavaScript to catch and handle errors to prevent our application from crashing?

### Errors and Try-Catch Blocks

- Explain that errors are an inevitable part of programming, but with the right tools and techniques, we can effectively control how our code behaves even when facing "unexpected" issues.

- Elaborate that they'll start by understanding the **different types of errors**, such as syntax errors, runtime errors, and logical errors.

> A quick and easy example for e.g. a syntax error would be intentionally entering a bad line of code such as `console.log"This doesn't work.";` into your **browser console**, which will produce the error `Uncaught SyntaxError: Unexpected string`

- Add that they'll explore the `try...catch` construct, which allows them to handle exceptions and prevent them from crashing our apps.

- Mention that they'll also learn how to throw **custom errors**, enabling them to create our own error messages and handle specific error conditions.

- Explain that they'll discuss error handling in the context of **asynchronous operations**, particularly in **fetch requests**, where errors can occur due to network issues or server errors.

- Conclude that by the end of this **Active Learning** session, they'll have a solid understanding of error handling techniques in JavaScript, empowering them to write **more robust and reliable code**.
