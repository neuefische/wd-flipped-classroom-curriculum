# JS Forms

## Learning Objectives

- Knowing the default behavior of form submission and how to prevent it with `.preventDefault()`
- Listening to submit events
  - Understanding what `event` and `event.target` are
  - Reading input values via their names:
    - `.elements`
    - `FormData` / `Object.fromEntries()`
    - the `name` attribute of a form field
- Understanding the input event
- Knowing how to focus inputs programmatically
- Knowing how to reset the form programmatically

## Requirements

- HTML Forms
- JS Functions

## Demo

### Start

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-forms/demo-start
```

### End

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-forms/demo-end
```

---

## Session Guide

After building a form with accessible HTML, our job is not done - we want to access the user input
after submission as well! This is where JavaScript comes into play.

> How do you access the data after form submission to use it in your application?

### Default Behavior of Form Submit

- Fill in a first name and submit the form to show the default behavior in the network tab:

- The form tries to send a GET request with names and their values as prop inside a URL like
  `/?firstName=value1`.
- The page is reloaded → the data is lost for us.

- Note that we want to prevent this default behavior (no GET request, no page reload).

### Listening to the Submit Event / Preventing Default Form Submit Behavior

- Remind the students that we need to query the form first in order to add some interactivity with JavaScript:

```js
const form = document.querySelector('[data-js="form"]');
```

- Add an event listener for the submit event:

- It is called on form submission.
- Triggers a submit event which provides us with an `event` object.
- The `event` object has a method called `preventDefault()`.

- Use `console.log(event)` to show its methods and properties (especially `preventDefault()` and `.target`).

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(event);
});
```

- Use the network tab again to show that there is no GET request anymore.

### The Event Object and `event.target`

- Explain the event object:

- It is created when an event is triggered.
- We can access it as an argument of our callback function.
- Important method: `event.preventDefault()`
- Important property: `event.target`

- Show that `event.target` is a reference to the entire form:

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(event.target);
});
// Output:
// <form data-js="form">
//		<fieldset>...</fieldset>
//		...
//		<button type="submit">Submit</button>
//	</form>
```

### Accessing Interactive Fields: `event.target.elements` and the `name` Attribute

- Explain the `name` attribute:

  - It is the key to identify the submitted information.
  - It needs to be unique for each form field.

- Explain the `.elements` property of `event.target`:

- It represents a collection of all form controls.
- Form controls are accessible via dot notation and the `name` key:
  - `elements.firstName` returns the form field with the attribute `name="firstName"`.
  - `elements.firstName.value` returns only the value of the form field with the attribute
    `name="firstName"`.
- The `name` attribute is crucial at this point.
- For readability, it's useful to save `event.target.elements` in a variable.

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;

  console.log(formElements.firstName);
  console.log(formElements.firstName.value);
});
```

### Using Input Values

- Show how to access all input values with the `FormData`.

- Explain the `FormData` interface:

- `new FormData(event.target)` creates a `FormData` object using the entire form via `event.target`.
- `Object.fromEntries()` transforms the `FormData` object into a usable object.

```js
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
});
```

### Resetting a Form

- Explain that it is a good idea to reset a form to allow for new data to be entered.
- Show an example of a form reset in the demo:
  - Add `event.target.reset()` to the end of the submit handler function.
- Explain that it is a good idea to focus an input field after submitting the form to further improve user experience (hands can stay on the keyboard and the user can input new data immediately).
- Give a common example: e.g., message input for a chat app.
- Show an example in the demo app:
  - Use `event.target.elements.firstName.focus()` to focus the first input.

### Input Event

- Explain that we have to listen to the `input` event if we want to react to every user input the user makes on an input field.
- Show an example for the `input` event in the demo.
- Demonstrate with `console.log()` that the event is triggered with every keystroke.

```js
const messageInput = document.querySelector('[data-js="personal-message"]');

messageInput.addEventListener("input", (event) => {
  console.log(event.target.value);
});
```

- Make the characters left on the page show the correct value using the `input` event:

```js
const messageInput = document.querySelector('[data-js="personal-message"]');
const charactersLeftElement = document.querySelector(
  '[data-js="remaining-characters"]'
);

messageInput.addEventListener("input", (event) => {
  charactersLeftElement.textContent = 150 - event.target.value.length;
});
```
