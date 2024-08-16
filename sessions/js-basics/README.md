# JavaScript Basics

## Learning Objectives

- Understanding what JavaScript is
- Understanding how to use `querySelector`
- Adding, removing and toggling CSS classes
- Understanding events and how to use `addEventListener`
- Getting to know the JS console, working with `console.log()` / `console.clear()`

## Requirements

- HTML Basics
- CSS Basics
- CSS Selectors

## Demo

### Start

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-basics/demo-start
```

### End

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-basics/demo-end
```

---

## Session Guide

JavaScript is a key technology that brings interactivity and dynamics to a website. It is one of the most in-demand programming languages, essential for full-stack web developers. Understanding JavaScript is fundamental, as it forms the basis of many popular development libraries and frameworks. In this session, you will get an idea of the power (and the pitfalls) of JavaScript.

> What comes to mind when you think about interactivity or dynamic actions on a website?

### Short Introduction of What JavaScript Is (5 min max)

- Explain why JavaScript is needed: **Makes web pages interactive**
- Explain **ECMAScript 6**:
  - ECMAScript is the JavaScript standard.
  - ECMAScript 6 is the second major revision to JavaScript and was published in 2015.
- Optional: Provide a brief historical background on the `naming of JavaScript` (JavaScript is not Java), for
  reference: [The history of JavaScript](https://www.springboard.com/blog/data-science/history-of-javascript/).

### Console

- Open the browser console on any page.
- Explain that the console is a CLI (Command Line Interface) in your browser.
- Show how to log into the console:

```js
console.log("Hello World!"); // logs into console
console.clear(); // clears console
console.error("Error!"); // logs as error into console
```

- Explain that we can use the console for debugging or error logging.

### QuerySelector

- Explain that we can manipulate the DOM with the help of JavaScript, e.g. change the CSS classes of HTML elements.
- Note that we want to change the styling of the `main` element.
- Show that we need to select the respective HTML element:
  - In the `index.js`, create a variable like `mainElement`.
  - We use the `document` interface provided by the browser.
  - The `querySelector` method takes a string as argument and returns **the first HTML element** which matches the search query.
  - Note that we could search for any string (like `.querySelector("main")` or `.querySelector("body")`), but we want to be as specific as possible to avoid errors.
  - This is why we've agreed upon the `data-js` attribute for our course.
- Log the element to the console and show the students what kind of object it is, which properties it has, e.g. `classList`.

```html
<body>
  <main class="main" data-js="main">...</main>
</body>
```

```js
const mainElement = document.querySelector('[data-js="main"]');
console.log(mainElement);
```

> 📙 Read more about [the custom `data-*` global attribute on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*).

### Adding, Removing, and Toggling CSS Classes with `classList`

- Show that in `css/styles.css`, there is a `dark` class we want to use to change the styling of the `main` element.

```css
.dark {
  background-color: black;
  color: #eee;
}
```

- Switch to `js/index.js` and explain how to do this:
  - The HTML element `mainElement` has the property `classList`.
  - Use `classList.add("dark")` to add the `dark` class to the `mainElement`.
  - Use `classList.remove("dark")` and show that the `dark` class is removed.

```js
mainElement.classList.add("dark");
mainElement.classList.remove("dark");
```

### Acting on Events with `addEventListener`

- Remind students that the way to manipulate the DOM with `classList.add()` and `classList.remove()` described above has one disadvantage: it cannot be utilized by users because they don't have access to the `index.js` file.
- Note some examples a user interacts with our website:
  - Clicking on a button
  - Hovering over an element
  - Pressing a key on the keyboard
  - Resizing the browser window
- Explain that all these interactions trigger a so-called `event` we can utilize to react to the user behavior.

- Show how to add an event listener to a button and react to a click:

```html
<!-- index.html -->
<button type="button" data-js="logging-button">Log into console</button>
```

```js
// js/index.js
const myLoggingButton = document.querySelector('[data-js="logging-button"]');
myLoggingButton.addEventListener("click", () => {
  console.log("You clicked a button");
});
```

- Demonstrate that the code works and explain the different parts:

  - We select the button element with the `querySelector` and "save it as a variable with the name `myLoggingButton`".
  - We use the method `addEventListener` on the button. It's something we don't have to fully understand now - we have to know that we have to write `addEventListener` with brackets and have to use the syntax in this exact way.
  - The `click` tells us that we listen to the click event.
  - The "function body" (the thing we write in the curly braces) is the JavaScript that is being executed when the event is triggered.

- Explain that we want to have three buttons: one to add, one to remove, and one to toggle the color of the `mainElement`.
- Add three buttons to your `index.html`:

```html
<button type="button" data-js="add-button">Add color</button>
<button type="button" data-js="remove-button">Remove color</button>
<button type="button" data-js="toggle-button">Toggle color</button>
```

- In `index.js`, query the three buttons and listen to the click event:

```js
const addColorButton = document.querySelector('[data-js="add-button"]');
const removeColorButton = document.querySelector('[data-js="remove-button"]');
const toggleColorButton = document.querySelector('[data-js="toggle-button"]');

addColorButton.addEventListener("click", () => {
  mainElement.classList.add("dark");
});

removeColorButton.addEventListener("click", () => {
  mainElement.classList.remove("dark");
});

toggleColorButton.addEventListener("click", () => {
  mainElement.classList.toggle("dark");
});
```

- Show that the user can now use the three buttons to change the color.
- Finish by noting that we can listen to other events like `mouseover` or `keydown`.
