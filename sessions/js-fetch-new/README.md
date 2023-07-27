# JS Fetch

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] Understanding how asynchronous code works
- [ ] Understanding the fetch API
  - [ ] JSON
  - [ ] with async/await

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

Often, we want to get data from a public API or our own database. There are two issues with this
process, called fetching: it needs time to finish and we need to convert the sent data packages into JavaScript objects.

After this session, we will know how to "wait" for the fetched data to be received and how to make the received data available in our application.

### Pose a question to be answered by the end of the block!

How do we fetch data from an API?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- JS Functions
- JS Callback Functions
- CSS Animations

---

## Inform: Session Guide

- [Demo Start](https://codesandbox.io/s/github/neuefische/web-exercises/tree/combine/js-fetch-js-async-functions/sessions/js-fetch-new/demo-start?file=/js/index.js)
- [Demo End](https://codesandbox.io/s/github/neuefische/web-exercises/tree/combine/js-fetch-js-async-functions/sessions/js-fetch-new/demo-end?file=/js/index.js)

### Introduction to APIs

- [ ] Explain the concept of an API (Application Programming Interface)
  - [ ] An _API_ provides a way one software (the _application_) can interact with another software.
  - [ ] An application can define a set of features and rules on how other software can interact
        with it. This is called an _interface_
  - [ ] Think of a contract between two softwares that explains how they can work together
- [ ] Example: server-side APIs (it is ok if the students don't know exactly what a server is at this point)
  - [ ] An application running on a server environment can provide an API
  - [ ] A common use-case is an API to read / load data
  - [ ] Other operations like writing or deleting data is also possible

### Introduction to Fetch

- [ ] Explain the [Fetch Web API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API):
  - [ ] provides an interface (= functions and rules) for fetching resources
  - [ ] is available for us in the browser
  - [ ] has a `fetch()` method we can use without further preparation
  - [ ] it's a general method provided by the browser on how to address a server in the web

### The random joke API

- [ ] Introduce the API: `https://example-apis.vercel.app/api/bad-jokes/random`
  - [ ] Enter the above url into the browser, open the network tab, show the response and explain that the api returns data in `JSON` format. The response data looks like a joke object in JavaScript.
  - [ ] JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax.
  - [ ] We want to fetch a random joke inside of our JavaScript code using `fetch()` and then parse the received JSON into a JavaScript object.

### Synchronous JavaScript and blocking code

- [ ] Explain that JavaScript is single-threaded: only one thing can happen at a time.
- [ ] If the execution of some code (a function or statement) takes time - like fetching data from an API - we don't want to block the main thread while waiting for the execution to finish.
- [ ] Blocking the main thread means:
  - [ ] that no other JavaScript code can be executed.
  - [ ] the user is prevented from interacting with the page.
- [ ] Optional: Show what can happen if we block the main thread: [Intro Blocking Demo](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/js-async-functions/blocking-demo)

### Joke App introduction

- [ ] Introduce the
      [Demo Start](https://codesandbox.io/s/github/neuefische/web-exercises/tree/combine/js-fetch-js-async-functions/sessions/js-fetch-new/demo-start?file=/js/index.js):

  - [ ] The DOM is already prepared and we find a function `setJoke(joke)` that we just have to call to set the Joke for the joke section.
  - Uncomment the following line with the function call:

  ```js
  renderJoke("Thanks for explaining the word “many” to me, it means a lot.");
  ```

### Fetching data & asynchronous JavaScript

- [ ] Use the Fetch Web API

- [ ] Write the following statement and show in the console that the fetch call does not return data directly, but instead we get a Promise object:

  ```js
  console.log(fetch("https://example-apis.vercel.app/api/bad-jokes/random"));
  ```

- [ ] We can only "get the data out of the promise", once a promise has resolved. In the case of fetching this will take some time, since it takes time for the request to be sent to the server, for the server to respond and for the response to be sent back to us.
- [ ] The reason why fetch returns a promise is that it is an asynchronous function, which means that it does not block - so the following lines of code get executed immediately instead of waiting for the promise to resolve first.
- [ ] We still need a way to "wait and block" so that we can receive the fetched data after the server response has arrived.
- [ ] Explain that we can use the `await` keyword to block the execution of our JavaScript and wait for the promise to be resolved before the next line of code is executed. Show the following code:

  ```js
  async function getJoke() {
    const response = await fetch(
      "https://example-apis.vercel.app/api/bad-jokes/random"
    );
    console.log(response);
  }

  getJoke();
  ```

- [ ] Explain that the `await` keyword really does two things for us here: It "waits" for the promise to resolve and it "unwraps" the promise so that we get the actual value / data out of it.
- [ ] Show in the browser console that we receive a response object with a lot of meta-information about the network request, like the URL, an HTTP Status Code, etc.

- [ ] Explain that we need to declare an `async` function in order to be able to use the `await` keyword.
- [ ] Explain that the execution of that `async` function is not blocking and we do not run in danger of blocking the main thread. The students can think of everything happening in the getJoke function as happening in the background. You can demonstrate that using the following logs:

  ```js
  console.log("A");
  getJoke();
  console.log("B");
  ```

- [ ] We still need to "get the actual data" out of our response object. For that we have to call the `response.json` method which is an async function and returns a promise. So we need to use the `await` keyword once again:

  ```js
  async function getJoke() {
    const response = await fetch(
      "https://example-apis.vercel.app/api/bad-jokes/random"
    );
    const data = await response.json();
    setJoke(data.joke);
  }

  getJoke();
  ```

- [ ] Reload the page and show that the app works.

---

## Process: Challenges

- [ ] Provide the [handout](js-async-functions.md) and the
      [challenges](challenges-js-async-functions.md) to the students
- [ ] Open the handout and walk the students through the tasks
- [ ] Divide the students into groups
- [ ] Remind them of the ground rules:
  - meet again 30 min before lunch break in the class room
  - they can ask the coaches for help at any time
  - always try to help each other
  - take a break within the next 1.5 hrs
  - keep an eye on Slack

---

## Evaluate: Recap of the assignment / Discussion of the MVP / Solution

- Revisit the question that was posed in the beginning of the session and try to answer it with a
  few phrases.

---

## Checkout

> 💡 In case the students seem frustrated try to find some encouraging words (e.g. remind them of
> how far they have come already) :)

- [ ] Summarize the day by repeating all of the topics that were discussed
- [ ] Highlight the progress made that day
- [ ] Encourage the students to repeat what they learned with practical exercises
- [ ] Remind them to rest :)

## Keywords for Recap:

API, JSON, Promise, async, await, single-threaded

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
