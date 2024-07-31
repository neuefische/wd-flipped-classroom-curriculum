# HTML Forms

## Learning objectives

- students should be able to create a html form with different types of form fields
  - input: text, number, etc.
  - select
  - textarea
  - button (submit, reset, button)
  - radio, checkbox
  - various types of inputs and buttons (definitions found in the handout document)
- [ ] form structure: fieldset, legend
- form fields have labels (connected via id)
- form semantics
- understanding client-side form validation

---

### Why is the content of today's block that important for the students?

- Forms are everywhere: we always want the user to interact with our application by submitting
  information.
- Forms need to be accessible to every user:
  - Students need to know how to build an accessible form.

### Question

---

### Required

- Accessibility

---

## Session Guide

### Simple Form

- Add the `form` tag as the main wrapper of a form.
- Start with an `input` field of type `text`.
- Explain the connection of `input` and `label`:
  - connected via `id` and `for` (do not talk about nested `input` elements)
  - user always knows what the input is for (compare: placeholder -> immediately replaced beginning
    with the first keystroke)
  - clicking on the label focusses the input field
  - accessibility aids such as a screen reader can correctly identify the purpose of the input
    element
- Add a submit button with type `submit`.

Your HTMl should look like this:

```html
<form>
  <label for="input-name">Name:</label>
  <input id="input-name" type="text" />
  <button type="submit">Submit</button>
</form>
```

### Form Validation

- We can use build in form validation without having to write any JavaScript
- Add the `required` attribute to the input field. Go to the browser and show that leaving it empty will lead to an error message when hitting the submit button.
- Explain the concept of form validation
  - Form fields can be enriched with various attributes
  - The attributes define rules for the expected input
  - The browser reads these attributes and validates the user's input
  - The validation must be successful to trigger the actual form submission

### More input types

- Show more input types: `date`, `number`, `email`
- Explain `select` element
  - needs a `label` connected via `id` and `for`
  - `option` elements as direct children with `value` attribute

```html
<form>
  <label for="input-name">Name:</label>
  <input id="input-name" type="text" required />
  <label for="input-email">Email:</label>
  <input id="input-email" type="email" required />
  <label for="input-date">Your favorite date:</label>
  <input id="input-date" type="date" />
  <label for="select-guests">How many friends will join you?</label>
  <select id="select-guests">
    <option value="">--Please choose an option--</option>
    <option value="single">I come alone.</option>
    <option value="multiple">Maybe some?</option>
    <option value="alone">I do not have friends.</option>
  </select>
  <button type="submit">Submit</button>
</form>
```

- Show that the email input is being validated → the user gets an error message when the `@` sign is missing
- Add one more attribute for client side form validation like `minlength` to an input element
- Mention that there is more attributes you can use for client side form validation and show the following link: [mdn build-in form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation)

### Form structure and a11y

- Explain the use of the `fieldset` element
  - group several elements (controls, labels, etc) inside a form element
  - a nested `legend` element can provide a caption for this `fieldset`
- Add a headline for the form via `id` and `aria-labelledby` attributes
  - provides the user with a recognizable, accessible name for an interactive element
- Add a description for the form via `id` and `aria-describedby` attributes
  - provide more verbose information than a label (e.g. via `aria-labelledby`)

```html
<h2 id="title">Private Birthday Party Picker</h2>
<p id="description">
  Let's celebrate my birthday in small groups! Please give me your name, your
  preferred party date and how many friends you will bring to my private
  birthday party.
</p>
<form aria-labelledby="title">
  <fieldset aria-describedby="description">
    <legend>Enter your information</legend>
    <label for="input-name">Name:</label>
    <input id="input-name" type="text" />
    <select>
      ...
    </select>
  </fieldset>
  <button type="submit">Submit</button>
</form>
```

---
