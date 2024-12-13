# HTML Forms

## Learning Objectives

- Creating an HTML form with different types of form fields
  - Input: text, number, etc.
  - Select
  - Textarea
  - Button (submit, reset, button)
  - Radio, checkbox
- Understanding form structure: fieldset, legend
- Connecting form fields with labels via id
- Understanding form semantics
- Understanding client-side form validation

## Requirements

- Accessibility

## Demo

### Start

```
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/html-forms/demo-start
```

### End:

```
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/html-forms/demo-end
```

---

## Session Guide

Forms are a fundamental part of web development as they enable user interaction with your application. It is essential to create accessible forms that all users can interact with effectively.

> How can you ensure that the forms you create are both user-friendly and accessible to everyone?

### Simple Form

- Add the `form` tag as the main wrapper of a form.
- Start with an `input` field of type `text`.
- Explain the connection of `input` and `label`:
  - Connected via `id` and `for` (do not talk about nested `input` elements).
  - The user always knows what the input is for (compare: placeholder -> immediately replaced beginning with the first keystroke).
  - Clicking on the label focuses the input field.
  - Accessibility aids, such as a screen readers, can correctly identify the purpose of the input element.
- Add a submit button with type `submit`.

Your HTMl should look like this:

```html
<form>
  <label for="input-name">Name:</label>
  <input id="input-name" type="text" />
  <button type="submit">Submit</button>
</form>
```

### More Input Types

- Show more input types: `date`, `number`, `email`.
- Explain the `select` element:
  - Needs a `label` connected via `id` and `for`.
  - `option` elements as direct children with `value` attribute.

```html
<form>
  <label for="input-name">Name:</label>
  <input id="input-name" type="text" />
  <label for="input-email">Email:</label>
  <input id="input-email" type="email" />
  <label for="input-date">Your favorite date:</label>
  <input id="input-date" type="date" />
  <label for="select-guests">How many friends will join you?</label>
  <select id="select-guests">
    <option value="">--Please choose an option--</option>
    <option value="none">I will come alone.</option>
    <option value="one">I will bring one friend.</option>
    <option value="few">I will bring a few friends.</option>
  </select>
  <button type="submit">Submit</button>
</form>
```

### Form Validation

- We can use built-in form validation without having to write any JavaScript.
- Some input fields, like `type="email"` or `type="number"`, are automatically validated by the browser.

  - Show that the email input is being validated → the user gets an error message when the `@` sign is missing.

- Explain that we can customise and extend validation using attributes like:
  - `required`: Makes the field mandatory.
  - `minlength`/`maxlength`: Sets minimum or maximum input length.
- Add some attributes for validation to the input fields. Go to the browser and show the error messages when hitting the submit button.
- Explain the general concept of form validation:

  - Form fields can be enriched with various attributes.
  - These attributes define rules for the expected input.
  - The browser reads these attributes and validates the user's input.
  - The validation must be successful to trigger the actual form submission.

- Mention that there are many other attributes you can use for form validation and show the following link: [MDN built-in form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation).

### Form Structure and Accessibility (A11y)

- Explain the use of the `fieldset` element:
  - Groups several elements (controls, labels, etc) inside a form element.
  - A nested `legend` element can provide a caption for this `fieldset`.
- Add a headline for the form via `id` and `aria-labelledby` attributes:
  - Provides the user with a recognizable, accessible name for an interactive element.
- Add a description for the form via `id` and `aria-describedby` attributes:
  - Provides more verbose information than a headline (e.g., via `aria-labelledby`).

```html
<h2 id="title">Private Birthday Party Picker</h2>
<p id="description">
  Let's celebrate my birthday in small groups! Please give me your name, your
  preferred party date and how many friends you will bring to my private
  birthday party.
</p>
<form aria-labelledby="title" aria-describedby="description">
  <fieldset>
    <legend>Personal Information</legend>
    <label for="input-name">Name:</label>
    <input id="input-name" type="text" required />
    <label for="input-email">Email:</label>
    <input id="input-email" type="email" minlength="4" required />
  </fieldset>
  ...
  <button type="submit">Submit</button>
</form>
```
