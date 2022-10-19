# JS Async Functions

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- Understanding how asynchronous code works
- Working with promises
- Using the `async` and `await` keywords

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

In JavaScript, some code is asynchronous and takes some time to complete. We need a method to be
notified once a long running task is complete.

### Why is the content of today's block that important for the students?

Asynchronous code is very important for making network requests (using `fetch()`) which will be the
topic of the next session.

### Pose a question to be answered by the end of the block!

How do we handle asynchronous code and long running processes?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- JS Functions
- JS Callback Functions
- CSS Animations

---

## Inform: Session Guide

There are three demos for this session:

- [Intro Blocking Demo](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/js-async-functions/blocking-demo)
- [Main Demo Start](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/js-async-functions/demo-start?file=/js/index.js)
- [Main Demo End](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/js-async-functions/demo-end?file=/js/index.js)
- [Fetch Demo](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/js-async-functions/fetch-demo)

### Introduction: JS is a single-threaded language

- [ ] Use the
      [Intro Blocking Demo](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/js-async-functions/blocking-demo):

  - [ ] Explain that some processes in programming languages take time to complete. For example,
        fetching data from a server, or doing a lot of calculations, or waiting for animations to
        complete.
  - [ ] Explain that as a simple example, we will use a function that does nothing for five seconds.
  - [ ] Show that the `blockMainThreadFor5Seconds()` function takes 5 seconds to be finished, but
        does nothing else (than blocking the main thread).
  - [ ] `blockMainThreadFor5Seconds()` is called when clicking the button; start and end of blocking
        is written into the console.
  - [ ] Note that `console.log('done blocking');` and `blockButton.removeAttribute('disabled');` are
        called after 5 seconds (when `blockMainThreadFor5Seconds()` is done executing).
  - [ ] Show that you cannot input any string during these 5 seconds after hitting the button.

> 💡 The `setTimeout()` in `blockMainThreadFor5Seconds` is only used to allow the browser to flush
> the focus and the disabled button state before the blocking starts.

- [ ] Explain the reasons for this behaviour:

  - [ ] JavaScript is a single-threaded language: only one thing can happen at a time.
  - [ ] Blocking the main thread
    - [ ] means that no other JavaScript code can be executed.
    - [ ] is bad because it prevents the user from interacting with the page.

- [ ] Mention the solution:
  - [ ] Code that takes some time to complete can be made asynchronous.
  - [ ] This means that while something that takes time is happening in the background, the main
        thread is free to execute other code.
  - [ ] Technically this is done similar to how events are handled in JavaScript: the main thread
        registers a callback function that is called when the asynchronous operation is complete.
  - [ ] Examples: network requests, file system access, animations, things that need to wait for
        user permission (think "Website XYZ wants to send Notifications") and timers.

> 💡 Some things like heavy calculations that take time to complete, but actually do stuff on the
> main thread, cannot be made asynchronous.

### Asynchronous Functions: `element.animate()`

> 💡 This session uses the Web Animation API. It can be used to animate styles just like with
> `@keyframes` and `animation` in CSS.
>
> Even though it is used as an example it is _not_ the point of this session to teach how to use the
> Web Animation API. We use it only for the reason that it is a good example for an asynchronous
> operation that intuitively takes time to complete but is much simpler than the fetch API.
>
> As a refresher on how to use the Web Animation API, see
> [Using the Web Animation API on mdn](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API).
>
> The `.animate()` method returns an object with a `finished` property that is a `Promise` that
> resolves when the animation is complete. This is the reason why it is used as an example.

#### Simultaneous Animations

- [ ] Show the students around the
      [Main Demo Start](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/js-async-functions/demo-start?file=/js/index.js):

  - [ ] It uses the
        [`Element.animate()` browser API](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate).
  - [ ] The `ballKeyframes` variable contains information necessary for the animation, similar to
        the `@keyframes` CSS at-rule.
  - [ ] The `ballAnimation` variable contains options for the timing properties of the animation.
  - [ ] There are four balls: `soccer`, `basketball`, `football` and `tennis`.
  - [ ] When clicking the `animateButton`,
    - [ ] the button is disabled
    - [ ] all four balls start their animation via `.animate(ballKeyframes, ballAnimation)`
    - [ ] the button is enabled

- [ ] Click the `Animate` button and explain the problem:
  - [ ] All balls start and finish at the same time, but we want them to start one after another.
  - [ ] Also the button is enabled before the animations are finished.

#### Staggered Animations with `promise.then()`

- [ ] To start one after another, we need to know when the animation is finished.
- [ ] `element.animate()` returns an `Animation` object:
  - [ ] store the return value in a variable and log it to the console
  - [ ] inside the console, navigate to the `finished` property and show that it is a Promise.

```js
const soccerAnimation = soccer.animate(ballKeyframes, ballAnimation);
console.log('soccerAnimation', soccerAnimation);
```

- [ ] Explain the Promise object:

  - [ ] represents the eventual completion (or failure) of an asynchronous operation, and its
        resulting value
  - [ ] has three `state`s: `"pending"` (waiting for the answer), `"resolved"` (sucess), and
        `"rejected"`(failure)
  - [ ] has a `then()` function (on the Prototype) that takes a callback function as an argument
        (Notice: we don't teach about Prototype inheritance. The students should just accept, that
        it is displayed like this in the console.)
  - [ ] while "waiting" for a Promise, other code can be executed

- [ ] Show that the `then()` function is called when the Promise is resolved:
  - [ ] call the `then()` method on the `soccerAnimation.finished` property
  - [ ] add a `console.log()` inside the `then()` callback
  - [ ] click the `Animate` button and show that the `console.log()` is called after the animation
        is finished
  - [ ] tell students to think of `then()` as a "when the Promise is resolved, then do this" event
        handler

```js
soccerAnimation.finished.then(() => {
	console.log('soccer animation finished');
});
```

- [ ] Show how you can stagger the animations by executing the next animation in the `then()`
      function:

```js
soccerAnimation.finished.then(() => {
	console.log('soccer animation finished');
	const basketballAnimation = basketball.animate(ballKeyframes, ballAnimation);
});
```

- [ ] Show that this works for all four balls (feel free to copy and paste the code as this is very
      cumbersome to write by hand):

```js
const soccerAnimation = soccer.animate(ballKeyframes, ballAnimation);
soccerAnimation.finished.then(() => {
	console.log('soccer animation finished');
	const basketballAnimation = basketball.animate(ballKeyframes, ballAnimation);
	basketballAnimation.finished.then(() => {
		console.log('basketball animation finished');
		const footballAnimation = football.animate(ballKeyframes, ballAnimation);
		footballAnimation.finished.then(() => {
			console.log('football animation finished');
			const tennisAnimation = tennis.animate(ballKeyframes, ballAnimation);
			tennisAnimation.finished.then(() => {
				console.log('tennis animation finished');
				animateButton.removeAttribute('disabled');
			});
		});
	});
});
```

- [ ] This style of writing code is called "callback hell".
- [ ] Explain that this is a very cumbersome way to write code and that there is a better way to
      handle this.

#### Staggered Animations with `async/await`

- [ ] Explain that the `async/await` syntax is a way to write asynchronous code that looks like
      synchronous code and can untangle the "callback hell".

- [ ] Explain `async` and `await` keywords:

  - [ ] `async` marks a function as asynchronous
  - [ ] `await` "waits" (without blocking) for the following Promise to be resolved before the
        execution continues
  - [ ] `await` is syntactic sugar for `.then()`
  - [ ] Note that `await` can only be used **inside** an `async` function: Whenever we use `await`
        the enclosing function must be marked with `async`.

- [ ] Adapt the code to wait for each animation to finish:
  - [ ] Add the `async` keyword before the callback function.
  - [ ] Use the `await` keyword to wait for `soccerAnimation.finished`.
  - [ ] Use `await` for the other animations as well and untangle the "callback hell".

```js
animateButton.addEventListener('click', async () => {
	animateButton.setAttribute('disabled', 'disabled');

	const soccerAnimation = soccer.animate(ballKeyframes, ballAnimation);
	await soccerAnimation.finished;
	console.log('soccer animation finished');

	const basketballAnimation = basketball.animate(ballKeyframes, ballAnimation);
	await basketballAnimation.finished;
	console.log('basketball animation finished');

	const footballAnimation = football.animate(ballKeyframes, ballAnimation);
	await footballAnimation.finished;
	console.log('football animation finished');

	const tennisAnimation = tennis.animate(ballKeyframes, ballAnimation);
	await tennisAnimation.finished;
	console.log('tennis animation finished');

	animateButton.removeAttribute('disabled');
});
```

### Promises that resolve with a value

- [ ] Explain that a Promise can resolve with a value:
  - [ ] the `finished` property of the `Animation` object resolves with no value (`undefined`)
        because it is only used to know when the animation is finished
  - [ ] other APIs can resolve with a value, for example the `fetch()` API
  - [ ] explain that the `fetch()` API is used to make HTTP requests and that we will look into it
        in detail in the next session
  - [ ] for now it is enough to know that `fetch()` resolves with a `Response` object
  - [ ] the value can be accessed via the `then()` function
  - [ ] when using the `async/await` syntax, the `await` expression resolves to the value
- [ ] Open the
      [Fetch Demo](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/js-async-functions/fetch-demo)
- [ ] Explain the code:
  - [ ] the global `fetch()` function is used to make a HTTP request
  - [ ] the `fetch()` function returns a Promise that resolves with a `Response` object
  - [ ] the `Response` object is stored in the `response` variable
  - [ ] the `response` variable is logged to the console
- [ ] Show the `response` object logged to the console after clicking the "Fetch" button

### Examples of Asynchronous APIs (Or: Why do we need this again?)

- [ ] Summarize that some code is asynchronous and we have to wait for its return value.
- [ ] Name some asynchronous APIs:
  - [ ] `element.animate().finished` — animates an element and returns a Promise that resolves when
        the animation is complete (as seen in the demo above)
  - [ ] `fetch()` — makes an HTTP request and returns a Promise that resolves to a `Response` object
        (topic of future lession)
  - [ ] `navigator.getBattery()` — gets the current battery level and returns a Promise that
        resolves with the battery level (Chrome only at the time of writing)
  - [ ] later when working outside of the browser filesystem APIs and database APIs will be
        asynchronous as well

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

Promise, async, await, single-threaded

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
