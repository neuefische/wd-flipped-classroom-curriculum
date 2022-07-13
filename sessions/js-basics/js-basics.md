# JavaScript Basics

## Learning Objectives

In this session you will learn:

- [ ] what JavaScript is and does in comparison to HTML and CSS
- [ ] how to integrate JavaScript with `<script>`
- [ ] how you select an element wih `querySelector`
- [ ] how to add, remove and toggle CSS classes on `click` with `addEventListener`
- [ ] what the console is and how to work with `console.log()` and `console.clear()`

---

## Introduction

[Some introduction goes here].

## Connect a JavaScript file

Let us bring some interaction to our website! In order to do this, we create an `index.js` file at
the root of our project. Now, we need to link it with the `index.html` by adding a `script` tag to
the head of the `index.html`:

```
<head>
	...
	<script src="./index.js" defer></script>
</head>
```

The `script` tag has two attributes: `src="./index.js"` contains the relative path to the `index.js`
file. The `defer` attribute tells the browser to delay the loading of the script until all HTML
elements are loaded. Otherwise, the JavaScript we write would not work.

> 💡 Alternative: You can also put the `script` tag after the body element; if doing so, the `defer`
> attribute is not necessary.

## Grabbing HTML Elements: `.querySelector()`

In order to add some interaction to our website, we first need to make the relevant HTML element
available for JavaScript. Have a look at the following example:

```
<body>
	<h1>My color changes sometimes!</h1>
	<button>Change color</button>
</body>
```

We want the color of the `h1` to change if we click on the button. The first step is to grab the
`h1` and the `button` element inside of our `index.js`:

```
const heading = document.querySelector('h1');
const button = document.querySelector('button');
```

To put it short: We create two constants (`const`) with the name `heading` and `button`. Their
content is the entire HTML element, i.e. the `h1` and the `button`, respectively.

Let's have a closer look and start on the right side of the equals sign:

We use the global `document` object which represents the entire web page and its content. This
object provides us with a method called `querySelector`. Note that we make use of this method by
adding it with a `.` after `document`. Within the brackets `()` after `querySelector`, we hand over
a search term in quotation marks. This search term equals the HTML element's name used in the
`index.html` above.

> 💡 Quotation marks represent the type string. We will cover strings in a later session.

So, `document.querySelector('h1')` finds the entire `h1` element (we will further explore what this
means in the next chapter [Check your JavaScript](#check-your-javascript-consolelog)). On the left
side of the equals sign, we save this `h1` element in a constant with the name `heading`. By doing
so, the `h1` element becomes available in our JavaScript file.

### More specific queries are better

To do: class and data-attribute

## Check your JavaScript: `.console.log()`

To do: `console.log(heading)` to see the entire HTML element in the console. `console.clear()`

## Add Interaction: `.addEventListener()`

- Define `events`
- Explain `addEventListener`
- Show in Codepen an example where you use a `click event` with `addEventListener`:
  - Start with `console.log('click')`
  - Introduce `classList` with `add()`, `remove()` and `toggle()`

---

# Challenges

## Part 1

## Part 2

---

## Resources
