Javascript Basics

> 💡 feel free to create a personal branch of this guide to add your own notes

## Learning objectives

- [ ] understand what JavaScript is
- [ ] understand how to use `querySelector`
- [ ] add, remove and toggle CSS classes
- [ ] understand events and how to use `addEventListener`
- [ ] get to know the JS console, work with `console.log()` / `console.clear()`

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Get dynamic... ;)

- What is your idea of interactivity or dynamic actions on a website?

### Which important problem will we solve today?

- Bringing action and dynamics to a website
- get an idea of the power (and the pitfalls) of Javascript
- get an insight on its importance as a fundamental development skill

### Why is the content of today's block that important for the students?

- Javascript is among the first three most in-demand programming languages, knowledge is mandatory
  for fullstack web developers
- The most used development libraries and frameworks are based on Javascript, from backend to
  frontend

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- HTML Basics
- CSS Basics
- CSS Selectors

---

## Inform: Session Guide

### Short introduction of what Javascript is (5 min max)

- Explain why JavaScript is needed: **Makes web pages interactive**
- Explain **ECMAScript 6**:
  - ECMAScript is the Javascript standard
  - ECMAScript 6 is the second major revision to JavaScript and was published in 2015
- Optional: Historical background to the `naming of JavaScript` (JavaScript is not Java), for
  reference:
  [The history of Javascript](https://www.springboard.com/blog/data-science/history-of-javascript/)

### Console

- Explain that the console is a CLI in your browser. Show how to log into the console:

```js
console.log('Hello World!'); // logs into console
console.clear(); // clears console
console.error('Error!'); // logs as error into console
```

- Explain that we can use the console for debugging or error logging

### QuerySelector

- Explain that you can manipulate the DOM in JavaScript, e.g.: Change the CSS classes on HTML
  elements.
- Explain that you need to select the respective HTML element.
- Show how this works with an example:

```html
<body>
	<main class="main" id="main" data-js="main">...</main>
</body>
```

```js
const mainElement = document.querySelector('[data-js="main"]');
```

- Explain that you can use ordinary CSS selectors with querySelector
- Explain that querySelector only selects the first element matching the selector

- Optional: Log the element to the console and show the students what kind of Object it is, which
  properties it has, e.g. classList

### Adding, removing, and toggling CSS classes with classList

- Explain with examples that you can add, remove, and toggle css classes:

```css
.dark {
	background-color: black;
}
```

```js
const mainElement = document.querySelector('[data-js="main"]');
mainElement.classList.add('dark');
// mainElement.classList.remove('dark');
// mainElement.classList.toggle('dark');
```

### Acting on events with addEventListener

- Explain that events are actions or occurrences, for example:
  - a click on a button
  - hovering over an element
  - pressing a key on the keyboard
  - resizing the browser window

Show how to add an event listener to a button and react to a click:

```html
<button type="button" data-js="logging-button">Log into console</button>
```

```js
const button = document.querySelector('[data-js="logging-button"]');
button.addEventListener('click', () => {
	console.log('You clicked a button');
});
```

Demonstrate that the code works. Explain the different parts of the code:

- we select the button element with the querySelector and "save it under the name button"
- we use the method addEventListener on the button. It's something we don't have to fully understand
  now - we have to know that we have to write addEventListener with brackets and have to use the
  syntax in this exact way.
- the `click` tells us that we listen to the click event
- the "function body" (the thing we write in the curly braces) is the Javascript that is being
  executed when the event is triggered.

Explain that we can listen to other events like `mouseover` or `keydown`.

---

## Process: Challenges

- [ ] Provide the [handout](session-name.md) to the students
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

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
