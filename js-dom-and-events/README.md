# JS DOM and Events

## Learning Objectives

- Understanding how to use `querySelector`
- Adding, removing and toggling CSS classes
- Understanding events and how to use `addEventListener`

## Requirements

- JS Basics and Variables

## Demo

### Start

```bash
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/js-dom-and-events/demo-start
```

### End

```bash
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/js-dom-and-events/demo-end
```

---

## Session Guide

JavaScript is mainly used to make websites interactive. With the DOM, a JS script can access the contents of a page and change it programmatically. By listening to user events, these changes can bound to actions like pressing a button or submitting a form. How to effectively manipulate the content of webpages is the most fundamental skill of a frontend developer.

> How can we use JavaScript to make websites dynamic / interactive?

### Code in the Browser

- Recap that until now we only executed JavaScript in an environment called `node.js`.
- Point out that JS was initially designed to be executed alongside HTML in the browser.
- Open and execute `js/index.js` with node and highlight the console log in the terminal.

```bash
node js/index.js
```

- Point out that now we want to execute this code in the browser by adding the script to our HTML file.
- Open the `index.html` and add a `script` tag to the head:

```html
<script src="js/index.js" defer></script>
```

- Explain the elements of this tag:
  - `src`: The JS file that should be executed.
  - `defer`: Instructs the browser to execute the JS after the page has completely loaded.
- Ask the students where we can find the console log, then open the devtools and navigate to the browser console.
- Highlight that the browser console behaves similar to the terminal and that all logs can be found here when we run JavaScript in the browser.

### DOM

- Point out that we want to access elements from the HTML document in order to manipulate them.
- Briefly explain that we can use the `DOM` for that. It is a representation of the entire HTML document as a single very large JavaScript object:

```js
console.log(document);
```

- Browse through the object in the dev console and show that next to a lot of extra information we find the `head` and `body` of the document. Inside the `body` we see the `children`: our three buttons!
- Highlight that inside this one object all information about every element on the website is stored.
- The appearance of the document object in the console varies between browsers. Be sure to point this out and, if possible, demonstrate the difference to avoid confusion.

### QuerySelector

- Manually going through the entire DOM would be very tedious and error prone, therefore we will use a functionality of the DOM to help us find the elements we are looking for: `querySelector`.
- Write a simple query statement and log the found value:

```js
const button = document.querySelector("button");
console.log(button);
```

- Highlight that the DOM found the button element for us and that now we could change properties of it.
- Mention that any valid CSS selector could be used with `querySelector`.
- In order to find exactly the right elements, we will give the elements we want to find a special `data-js` attribute.

```html
<body data-js="root">
  <button type="button" data-js="add-button">Enable Darkmode</button>
  <button type="button">Remove Darkmode</button>
  <button type="button">Toggle Darkmode</button>
</body>
```

- We can then find these elements:

```js
const bodyElement = document.querySelector('[data-js="root"]');
const addButton = document.querySelector('[data-js="add-button"]');
```

- Show that we found the requested elements by logging the variables.

> 📙 Read more about [the custom `data-*` global attribute on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*).

### Adding, Removing, and Toggling CSS Classes with `classList`

- Show that in `css/styles.css`, there is a `dark` class we want to use to change the styling of the `body` element.

```css
.dark {
  background-color: #333;
  color: #eee;
}
```

- Switch to `js/index.js` and explain how to do this:
  - The HTML element `bodyElement` has the property `classList`.
  - Use `classList.add("dark")` to add the `dark` class to the `bodyElement`.
  - Use `classList.remove("dark")` and show that the `dark` class is removed.

```js
bodyElement.classList.add("dark");
bodyElement.classList.remove("dark");
```

- Highlight that we can change a lot more attributes of an element, but for now we will only use `classList`.

### Reacting on Events with `addEventListener`

- With the DOM we can find and manipulate HTML elements, but we want to execute these actions only after a user interacted with our website in certain way.
- Note some examples a user interacts with our website:
  - Clicking on a button
  - Hovering over an element
  - Pressing a key on the keyboard
  - Resizing the browser window
- Explain that these user interactions trigger so called `events` and that we can instruct the browser to wait or `listen` for specific events to occur and to react to them in a predefined way.

- Show how to add an event listener to a button and react to a click:

```js
// js/index.js
addButton.addEventListener("click", () => {
  console.log("You clicked a button");
});
```

- Demonstrate that the code works and explain the different parts:

  - We use the previously defined variable `addButton`.
  - We use the method `addEventListener` on the button. It's something we don't have to fully understand now - we have to know that we have to write `addEventListener` with brackets and have to use the syntax in this exact way.
  - The `click` tells us that we listen to the click event.
  - The "function body" (the thing we write in the curly braces) is the JavaScript that is being executed when the event is triggered.

- Explain that we can write any JavaScript statement inside these curly braces and that this code is stored as an "answer" to the given event. The browser will execute this code every time the respective event occurs.
- Instead of logging text to the console, we now want to add the `dark` class to our `bodyElement`:

```js
addButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});
```

- Show that the button now changes the theme of the website!
- Repeat this process together with the students for both the remove and toggle button. Let them try to remember the necessary steps and help them if they are stuck.
- In the end your code should look like this:

```html
<body data-js="root">
  <button type="button" data-js="add-button">Enable Darkmode</button>
  <button type="button" data-js="remove-button">Remove Darkmode</button>
  <button type="button" data-js="toggle-button">Toggle Darkmode</button>
</body>
```

```js
const bodyElement = document.querySelector('[data-js="root"]');
const addButton = document.querySelector('[data-js="add-button"]');
const removeButton = document.querySelector('[data-js="remove-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

addButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

removeButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
```

- Show that the user can now use the three buttons to change the theme of the website.
