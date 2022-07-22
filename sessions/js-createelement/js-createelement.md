# JS createElement

## Learning Objectives

- learning how to generate HTML in JavaScript
- using HTML element object properties and methods

---

## `document.createElement`

You can generate an HTML element with Javascript by using the `document.createElement` method. It
expects the type of element as an argument.

```js
const myNewElement = document.createElement('article');
const myNewButton = document.createElement('button');
```

After generating an element, you need to place the element into the DOM. For this, you can use the
`.append` method. It places the element as the **last child** into the respective element.

```js
body.append(myNewElement); // placing myNewElement at the end of the body.
myNewElement.append(myNewButton); // placing the created button into the article
```

The result looks like this:

```html
<body>
	...
	<article>
		<button></button>
	</article>
</body>
```

---

## Element Properties and Methods

Usually, we don't want pure HTML elements on our website. We can add classes, event listeners and
more just like with queried elements.

```js
myNewElement.classList.add('card');

myNewButton.addEventListener('click', () => {
	console.log('It works!');
});
```

The text of an element can be changed by reassigning the `.textContent` property:

```js
myNewButton.textContent = 'Click me!';
```

### Common Element Properties and Methods

| Property       | Effect                                                             |
| -------------- | ------------------------------------------------------------------ |
| `classList`    | add, toggle or remove classes from element                         |
| `textContent`  | get or set text inside element                                     |
| `style`        | define inline style, e.g. `element.style.backgroundColor = "red" ` |
| `type`         | get or set the type of a button or input                           |
| `hidden`       | boolean whether element is hidden or not                           |
| `clientHeight` | the inner height of the element                                    |
| `clientWidth`  | the inner width of the element                                     |
| `focus()`      | focusses the element on the website                                |

> 💡 You can assign every HTML attribute by using the element properties. Go to the
> [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Element#properties) for a
> comprehensive list of element properties.

---

## `.innerHTML`

> ❗️ innerHTML can be unsafe when user input is passed into the template literal. Use it with
> caution. Read
> [this article](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#replacing_the_contents_of_an_element)
> for more information about it.

The `innerHTML` property can be used to create the entire html layout of an element by passing the
html code as a string. By using **template literals** the content of the html can be dynamically
created.

```js
const cityName = 'Lissabon';

myNewElement.innerHTML = `
	<h2> ${cityName} </h2>
	<p class="card__content">
		${cityName} is a very beautiful city in Portugal. 
		Go there and enjoy the stay!
	</p>
	<button type='button' class="card__booking-button"> 
		Book Trip 
	</button>
`;
```

This HTML code is rendered then **inside** the article element:

```html
<body>
	...
	<article>
		<h2>Lissabon</h2>
		<p class="card__content">
			Lissabon is a very beautiful city in Portugal. Go there and enjoy the stay!
		</p>
		<button type="button" class="card__booking-button">Book Trip</button>
	</article>
</body>
```

### Resetting Element Content

`.innterHTML` can also be used to **reset** the content of an element, e.g. a container:

HTML before:

```html
<ul data-js="cardContainer">
	<li class="card">...</li>
	<li class="card">...</li>
	<li class="card">...</li>
</ul>
```

By setting the innerHTML to an empty string, the content is deleted:

```js
const cardContainer.innerHTML = "";
```

```html
<ul data-js="cardContainer"></ul>
```

---

## Resources

### Element Properties

[MDN Docs about element Properties](https://developer.mozilla.org/en-US/docs/Web/API/Element#properties)

### innerHTML

[MDN Docs about securtiy risks with innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#replacing_the_contents_of_an_element)
