# JavaScript Basics

## Learning Objectives

- Connect a JavaScript file with `<script>`
- Log to the console
- Select elements with `querySelector`
- Add, remove and toggle CSS classes on `click` with `addEventListener`

---

## Connect a JavaScript file

```html
<head>
	...
	<script src="./index.js" defer></script>
</head>
<body>
	...
</body>
```

The `script` tag has two attributes:

`src="./index.js"` sets the URL to our JavaScript file

`defer` tells the browser to delay the loading of the script until all HTML elements are loaded.

> 💡 Alternative: `script` tag at the end of the body element, so `defer` attribute is not
> necessary. Less modern.

```html
<head>
	...
</head>
<body>
	...
	<script src="./index.js"></script>
</body>
```

---

## Hello World: `console.log()`

In Javascript we can print text to the console of the web browser. We often use this to check if our
code is working properly.

```js
console.log('Hello World!'); // logs into console
console.clear(); // clears console
console.error('Error!'); // logs as error into console
```

---

## Selecting HTML Elements: `.querySelector()`

Before we can add interactivity, we need to select the HTML-Elements we want to apply it to:

```html
<body>
	<main class="main" id="main" data-js="main">...</main>
</body>
```

There are multiple ways to select the above main section within our JavaScript. The best practice is
to use a separate identifier for JavaScript selectors: the `data-js` attribute:

```js
const mainElement = document.querySelector('[data-js="main"]');
```

Tag, class and id identifier can be queried as well, but should _not_ be used:

```js
// tag as identifier
const mainElement = document.querySelector('main');
// class as identifier -> .
const mainElement = document.querySelector('.main');
// id as identifier -> #
const mainElement = document.querySelector('#main');
```

> 💡 We try to separate our concerns: Classes are for CSS and data-js attributes are for JavaScript

---

## Add Interaction: `.addEventListener()`

We can listen to `events` like `clicks` on an Element and execute code whenever this event is
triggered. The method `addEventListener` is defined on an element we selected with `querySelector`.

```html
<button type="button" data-js="button">Log into console</button>
```

```js
const button = document.querySelector('[data-js="button"]');
button.addEventListener('click', () => {});
```

First you specify the kind of event, e.g. `click`, secondly you define what code should be executed
whenever the event happens. You write that code between the `{}` brackets, e.g. a `console.log`.

```js
const button = document.querySelector('[data-js="button"]');
button.addEventListener('click', () => {
	console.log('Yeah');
});
```

Next to the `click` event, you can listen to a variety of events:

```js
button.addEventListener('mouseover', () => {});
```

```js
button.addEventListener('keydown', () => {});
```

> 💡 Here you can find a
> [list of event types](https://developer.mozilla.org/en-US/docs/Web/Events#event_listing).

> 💡 You don't have to understand the syntax for know, we will cover this in a later session.

---

## Add/remove & toggle classes: `.classList.`

You can add, remove and toggle classes, e.g. to change the styling of an element.

```html
<main data-js="main">
	<button type="button" data-js="button">Add a class</button>
</main>
```

Add `myClass` class to the above main section by using the `selectedElement.classList.add` method:

```js
const main = document.querySelector('[data-js="main"]');
const button = document.querySelector('[data-js="button"]');

button.addEventListener('click', () => {
	main.classList.add('myClass');
});
```

A click on the button adds the class `myClass` to the main element:

```html
<main data-js="main" class="myClass">
	<button type="button" data-js="button">Add a class</button>
</main>
```

You can also remove or toggle a class in the same way:

```js
main.classList.remove('myClass');
```

```js
main.classList.toggle('myClass');
```

---

## Resources

### Connect a JavaScript file

[The Script element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)

### Hello World

[Console](https://developer.mozilla.org/en-US/docs/Web/API/Console)

### Selecting HTML Elements

[Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)

[Using data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

[document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

### Add Interaction

[.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

[Event reference](https://developer.mozilla.org/en-US/docs/Web/Events#event_listing)

### Add/remove & toggle classes

[classList](https://developer.mozilla.org/de/docs/Web/API/Element/classList)
