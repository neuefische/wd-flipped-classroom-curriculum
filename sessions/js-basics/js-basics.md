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

There are multiple ways to select the above main section within our JavaScript

```js
// Use this:
// data-js attribute as identifier -> '[data-js=""]'
const mainDataAttribute = document.querySelector('[data-js="main"]');

// Don't use the following:
// tag as identifier
const mainTag = document.querySelector('main');
// class as identifier -> .
const mainClass = document.querySelector('.main');
// id as identifier -> #
const mainId = document.querySelector('#main');
```

> 💡 We try to separate our concerns: Classes are for CSS and data-js attributes are for JavaScript

---

## Add Interaction: `.addEventListener()`

We can listen to `events` like `clicks` on an Element

```html
<button type="button" data-js="button">Log into console</button>
```

Select button and add an `event listener`.

```js
const button = document.querySelector('[data-js="button"]');
button.addEventListener('click', () => {});
```

Perform a `console.log()` on click

```js
const button = document.querySelector('[data-js="button"]');
button.addEventListener('click', () => {
	console.log('Yeah');
});
```

### Also see:

```js
something.addEventListener('mouseover', () => {});
```

```js
something.addEventListener('mouseout', () => {});
```

---

## Add/remove & toggle classes: `.classList.`

You can add, remove and toggle classes

```html
<main data-js="main">
	<button type="button" data-js="button">toggle a class</button>
</main>
```

Toggle `myClass` class to the above main section

```js
const main = document.querySelector('[data-js="main"]');
const button = document.querySelector('[data-js="button"]');
button.addEventListener('click', () => {
	main.classList.toggle('myClass');
});
```

On click `button` toggles a class to main section:

```html
<main data-js="main" class="myClass">
	<button type="button" data-js="button">toggle a class</button>
</main>
```

### Also try:

```js
main.classList.add('myClass');
```

```js
main.classList.remove('myClass');
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

[Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)

### Add/remove & toggle classes

[classList](https://developer.mozilla.org/de/docs/Web/API/Element/classList)
