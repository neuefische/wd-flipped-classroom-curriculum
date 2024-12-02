# JS Fetch

## Learning Objectives

- Understanding how asynchronous code works
- Understanding the Fetch API
  - JSON
  - with async/await

## Requirements

- JS Functions

## Demo

### Start

```
  npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/js-fetch/demo-start
```

### End

```
  npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/js-fetch/demo-end
```

---

## Session Guide

Often, we want to get data from a public API or our own database. This process, called fetching, involves two main challenges: it takes time to complete, and we need to convert the transmitted data packages into JavaScript objects.
After this session, you’ll know how to “wait” for the data to be fetched and how to make it available in your application.

> How do you fetch data from an API, and how can you handle the delay and data conversion?

### Introduction to APIs

- Explain the concept of an API (Application Programming Interface):
  - An _API_ provides a way one software (the _application_) can interact with another software.
  - An application can define a set of features and rules on how other software can interact with it. This is called an _interface_.
  - Think of a contract between two softwares that explains how they can work together.
  - Example: Server-side APIs (it is ok if the students don't know exactly what a server is at this point)
  - An application running on a server environment can provide an API.
  - A common use-case is an API to read / load data.
  - Other operations like writing or deleting data is also possible.

### Introduction to Fetch

- Explain the [Fetch Web API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API):
  - Provides an interface (= functions and rules) for fetching resources.
  - Is available for us in the browser.
  - Has a `fetch()` method we can use without further preparation.
  - It's a general method provided by the browser on how to address a server in the web.

### The Random Joke API

- Introduce the API: `https://example-apis.vercel.app/api/bad-jokes/random`
  - Enter the above URL into the browser, open the network tab, show the response and explain that the API returns data in `JSON` format. The response data looks like a joke object in JavaScript.
  - JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax.
  - We want to fetch a random joke inside of our JavaScript code using `fetch()` and then parse the received JSON into a JavaScript object.

### Synchronous JavaScript and Blocking Code

- Explain that JavaScript is single-threaded: only one thing can happen at a time.
- If the execution of some code (a function or statement) takes time - like fetching data from an API - we don't want to block the main thread while waiting for the execution to finish.
- Blocking the main thread means:
  - No other JavaScript code can be executed.
  - The user is prevented from interacting with the page.
- Optional: Show what can happen if we block the main thread:

**Blocking Demo**

```
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/js-fetch/blocking-demo
```

### Joke App Introduction

- Introduce the demo

  - The DOM is already prepared and we find a function `renderJoke(joke)` that we just have to call to set the Joke for the joke section.
  - Uncomment the following line with the function call:

  ```js
  renderJoke("Thanks for explaining the word “many” to me, it means a lot.");
  ```

### Fetching Data & Asynchronous JavaScript

- Use the Fetch Web API.

- Write the following statement and show in the console that the fetch call does not return data directly, but instead we get a Promise object:

  ```js
  console.log(fetch("https://example-apis.vercel.app/api/bad-jokes/random"));
  ```

- We can only "get the data out of the promise", once a promise has resolved. In the case of fetching this will take some time, since it takes time for the request to be sent to the server, for the server to respond and for the response to be sent back to us.
- The reason why fetch returns a promise is that it is an asynchronous function, which means that it does not block - so the following lines of code get executed immediately instead of waiting for the promise to resolve first.
- We still need a way to "wait and block" so that we can receive the fetched data after the server response has arrived.
- Explain that we can use the `await` keyword to block the execution of our JavaScript and wait for the promise to be resolved before the next line of code is executed. Show the following code:

  ```js
  async function getJoke() {
    const response = await fetch(
      "https://example-apis.vercel.app/api/bad-jokes/random"
    );
    console.log(response);
  }

  getJoke();
  ```

- Explain that the `await` keyword really does two things for us here: It "waits" for the promise to resolve and it "unwraps" the promise so that we get the actual value / data out of it.
- Show in the browser console that we receive a response object with a lot of meta-information about the network request, like the URL, an HTTP Status Code, etc.

- Explain that we need to declare an `async` function in order to be able to use the `await` keyword.
- Explain that the execution of that `async` function is not blocking and we do not run in danger of blocking the main thread. The students can think of everything happening in the `getJoke` function as happening in the background. You can demonstrate that using the following logs:

  ```js
  console.log("A");
  getJoke();
  console.log("B");
  ```

- We still need to "get the actual data" out of our response object. For that we have to call the `response.json` method which is an `async` function and returns a promise. So we need to use the `await` keyword once again:

  ```js
  async function getJoke() {
    const response = await fetch(
      "https://example-apis.vercel.app/api/bad-jokes/random"
    );
    const data = await response.json();
    renderJoke(data.joke);
  }

  getJoke();
  ```

- Reload the page and show that the app works.
