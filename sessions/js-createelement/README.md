# JS createElement

## Learning Objectives

- Knowing what the DOM is
- Learning how to generate HTML in JavaScript
- Using HTML element object properties and methods
- Learning how to use `.innerHTML`

## Requirements

- JS Basics and Variables
- JS DOM and Events
- JS Forms

## Demo

### Start

```
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/js-createelement/demo-start
```

### End

```
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/js-createelement/demo-end
```

---

## Session Guide

Many modern websites dynamically generate HTML content using JavaScript, such as posts on Reddit or tweets on Twitter. This allows for automatic creation of similar elements from data, making web pages more dynamic and responsive. Learning how to generate HTML with JavaScript is essential for building modern web applications.

> How can we write JavaScript code that generates parts of our webpage for us?

### The DOM

- Explain, that JavaScript can access and change the HTML document via the **DOM**.
- **Document Object Model**: A data representation of the HTML website. Each tag is modelled as a **node** in the document tree.
- Access the DOM via the `document` object, e.g. `document.querySelector`.
- Sketch a quick DOM representation of the demo HTML ![dom and createElement](assets/DOM.png).

### `document.createElement` and `.append`

- Create a simple **li** element in the DOM:
  - `const newCard = document.createElement('li')`
  - Extend the diagram in Excalidraw to show how the element is added to the DOM tree: ![dom and createElement](assets/createElement.png)
- Explain that in addition to creating an element you have to **place it** somewhere in the DOM
  tree: `document.body.append(newCard)`
  - Show the effect in your example webpage.
  - Explain that `.append` puts the element as the **last child** in the respective element.

### Element Properties and EventListeners

- Highlight that new created elements behave the same way as queried elements.
- Show that the element doesn't have to be queried to be manipulated. It is already saved in a variable, e.g. `newCard`.
- Quickly recap how to add properties to an element.

  ```js
  newCard.classList.add("card");
  newCard.textContent = "This text is displayed in the element";
  ```

- Add this code to an event listener on the form element:
  ```js
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newCard = document.createElement("li");
    newCard.classList.add("card");
    newCard.textContent = "This text is displayed in the element";
    cardContainer.append(newCard);
  });
  ```

### `.innerHTML`

- `.innerHTML`: The given string is parsed to HTML and becomes the content of the element.
- Useful to generate many HTML elements from a single string, e.g.:
  ```js
  const cardText = textInput.value;
  newCard.innerHTML = `
  	<h2>Card</h2>
  	<p>${cardText}</p>
  `;
  ```
- Highlight that the previous content of the element is overwritten.
- Can be used to clear the content of an element: `newCard.innerHTML = ""`
- Mention, that `.innerHTML` might be dangerous and should not be used with user input.
