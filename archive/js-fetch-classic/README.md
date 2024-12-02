# JS Fetch

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] Understanding the fetch API
  - [ ] with async/await
  - [ ] REST API
  - [ ] JSON
  - [ ] HTTP Response Codes
  - [ ] Error Handling

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

Often, we want to get data from a public API or our own database. There are two issues with this
process, called fetching: it needs time to finish and the data have a special format (JSON).

After this session, we will know how to handle asynchronous fetching and how to make the received
data available in our application.

### Pose a question to be answered by the end of the block!

How do we fetch data from an API?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- JS Async Functions

---

## Inform: Session Guide

Demo Start:

```
  npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/js-fetch/demo-start
```

Demo End:

```
  npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/js-fetch/demo-end
```

### Introduction to APIs

- [ ] Explain the concept of an API (Application Programming Interface)
  - [ ] An _API_ provides a way one software (the _application_) can interact with another software.
  - [ ] An application can define a set of features and rules on how other software can interact
        with it. This is called an _interface_
  - [ ] Think of a contract between two softwares that explains how they can work together
- [ ] APIs can be seen from different perspectives and occur on various levels
- [ ] Example: Web APIs within a browser
  - [ ] A browser provides a lot of [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)
  - [ ] Each Web API defines a way on how a JavaScript application can use a feature given by the
        browser
  - [ ] e.g.
        [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API),
        [Battery API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API),or
        [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
  - [ ] We already used the Fetch API in the session about "async functions" and have a closer look
        now
- [ ] Example: server-side APIs
  - [ ] An application running on a server environment can provide an API
  - [ ] A common use-case is an API to read / load data
  - [ ] Other operations like writing or deleting data is also possible

### Introduction to Fetch

- [ ] Explain the [Fetch Web API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API):
  - [ ] provides an interface (= functions and rules) for fetching resources
  - [ ] is available for us in the browser
  - [ ] has a `fetch()` method we can use without further preparation
  - [ ] it's a general method provided by the browser on how to address a server in the web

### Fetching data

- [ ] Introduce the Demo

  - [ ] We want to fetch a random joke from an API, that is provided by a server.
  - [ ] The DOM is already prepared inside the `// Assemble DOM` part.
  - [ ] We need to fetch a joke and display it; to do so, we need to set `joke.textContent` equal to
        the fetched random joke.

- [ ] Write a `getJoke` function:
  - [ ] use `try...catch` and catch any errors during fetch (relevant if the server is not
        reachable)
  - [ ] clear the joke section
  - [ ] fetch a random joke from `https://example-apis.vercel.app/api/bad-jokes/random`
  - [ ] explain that `fetch()` returns a promise: use `async` and `await`
  - [ ] log the `response` to the console
  - [ ] make sure to call the `getJoke` function

```js
async function getJoke() {
  // Clear the joke section
  jokeSection.innerHTML = "";

  try {
    const response = await fetch(
      "https://example-apis.vercel.app/api/bad-jokes/random"
    );
    console.log(response);

    // Failure (Error during fetch)
  } catch (error) {
    console.error("An Error occurred.");
  }
}

getJoke();
```

- [ ] Inspect the `response` object in the console:
  - [ ] `ok: true` and `status: 200` tells us that the fetch worked
  - [ ] there is no key with a "bad jokes" array: we cannot immediately grab the data
  - [ ] the `response` object has a `json` function we will need soon

### Handling the response

#### HTTP Responses and Status Codes

Before using the received data, elaborate on HTTP responses and how to handle them:

- [ ] Shortly explain HTTP responses and their status codes:

  - [ ] `fetch()` creates a HTTP request; the server processes the request and responds to it
  - [ ] there are
        [five classes of responses](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status). Three
        classes are important for us right now:
    - [ ] `200-299` (success): has `ok: true`
    - [ ] `400-499` (client error): has `ok: false`
    - [ ] `500-599` (server error): has `ok: false`

- [ ] Draw the conclusion that we need to check the response for `response.ok`:

  - [ ] if `!response.ok`, log an error to the console
  - [ ] if `response.ok`, handle the received data

- [ ] Demonstrate an example:

  - [ ] introduce an misspelling in the pathname(!) part of the url.
  - [ ] The resulting 404 HTTP error is handled by the `if...else` block and the corresponding error
        message is logged.

> Make sure to not introduce a misspelling in the origin part of the url (protocol or hostname).
> This would result in an error where the promise returned by `fetch()` would `reject` (which would
> be handled by the `try...catch` block)

```js
// Failure (Bad response)
if (!response.ok) {
  console.error("Bad Response");
} else {
  // Success
  console.log("Great, the fetch worked!");
}
```

#### Handle the received data

- [ ] Explain that we cannot yet use the received data immediately:

  - [ ] the data is transmitted in `JSON` format
  - [ ] JavaScript Object Notation (JSON) is a standard text-based format for representing
        structured data based on JavaScript object syntax.
  - [ ] parse the `JSON` object into a JavaScript object by using `response.json()`
  - [ ] Point out the confusing fact that `.json()` does not create JSON, but converts JSON to
        JavaScript.
  - [ ] `response.json()` returns a Promise, so use `await` to wait for it being resolved

```js
// Failure (Bad response)
if (!response.ok) {
  console.error("Bad Response");
} else {
  // Success
  const jokeData = await response.json();
  console.log(jokeData);
}
```

### Display a Random Joke

To finish the demo, we still need to display a random joke in the UI.

- [ ] Use the console and show that `jokeData` is an object describing a joke.
- [ ] Create a DOM element for the joke by calling `Joke()`
- [ ] Assign `jokeData.joke` to the DOM element's `textContent` property
- [ ] Append the DOM element to the `jokeSection`

```js
if (!response.ok) {
  console.error("Bad Response");
} else {
  // Success
  const jokeData = await response.json();

  // Assemble DOM for the joke
  const joke = Joke();
  joke.textContent = jokeData.joke;
  jokeSection.append(joke);
}
```

### Optional Alternative: Get a list of all jokes from Bad Jokes API

- Depending on the classes progress, you might decide to demonstrate an alternative functionality.
- You can fetch a list of all jokes by calling a different API URL:
  `https://example-apis.vercel.app/api/bad-jokes`
- Afterwards you can render a list of all jokes to the UI.
- Receiving and rendering a list of data is a more common use-case, but might be tricky to
  understand for students when dealing with `fetch` for the first time.
- Please have a look at the alternative implementation in the Demo End

Follow these steps to finish the demo:

- [ ] Use the console and show that `jokesData` is an array of joke objects.
- [ ] Iterate over all jokes with `forEach`
- [ ] Create a DOM element for each joke by calling `Joke()`
- [ ] Assign `jokeData.joke` to the DOM element's `textContent` property
- [ ] Append the DOM element to the `jokeSection`

```js
const response = await fetch("https://example-apis.vercel.app/api/bad-jokes");

// Failure (Bad response)
if (!response.ok) {
  console.error("Bad Response");
} else {
  // Success
  const jokesData = await response.json();

  // Assemble DOM for the jokes
  jokesData.forEach((jokeData) => {
    const joke = Joke();
    joke.textContent = jokeData.joke;
    jokeSection.append(joke);
  });
}
```

---

## Process: Challenges

- [ ] Provide the [handout](js-fetch.md) and the [challenges](challenges-js-fetch.md) to the
      students
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

JSON, response codes, async-await, Promise

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag that is added to the structure needs to
> be explained in a few words by one student. We go in rounds one by one until all tags are included
> in the structure.
