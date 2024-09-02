# JS Structure

## Learning Objectives

- Understanding JavaScript modules
- Using import and export statements
- Understanding how to structure a JavaScript project

## Requirements

- JS Functions
- CSS Structure

## Demo

### Start

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-structure/demo-start
```

### End

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-structure/demo-end
```

> 💡 Our approach is to create vanialla JavaScript components that are similar to React components. That's why we use uppercase function names for our components and folders.

---

## Session Guide

Modules are a way to organize JavaScript code into separate files. This practice is crucial for keeping your code manageable, especially as the size of your project grows.

> How do you structure your CSS code (`@import`), and how might a similar approach be applied to JavaScript?

### The Concept of Modules

- Start by examining the `index.js` file from the demo.
- Explain that a lot of code accumulated in the main script file and that it would be a good idea to separate it into multiple files.
- Encourage students to think about which parts of the code belong together semantically:
  - Helper Functions / Data
  - Header
  - Author Cards
- Explain the concept of separation of concerns: Its about keeping code that is part of the same thing together (in terms of content or functionality).

### Using `export` Statements to Make Code Available to Other Modules

- Show the named export syntax:
  - Identify `const authors` and `function caesarCipher13` as utilities that can be extracted from the `index.js` file.
  - Create a `utils` folder.
  - Move `authors` to `utils/authors.js` and `caesarCipher13` to `utils/cipher.js`.
  - Make sure to include the `input` and `output` variables in the `cipher.js` file.
  - Use named exports:

```js
// utils/authors.js
export const authors = [
```

```js
// utils/cipher.js
export function caesarCipher13(string) {
```

### Using `import` Statements to Import Code from Other Modules

- Show how to import functions and variables into the `index.js` file:
  - Imports must be at the top of the importing file.
  - Note the curly braces `{}` around the name.
  - Make sure that the `.js` file extension is present:

```js
import { authors } from "./utils/authors.js";
import { caesarCipher13 } from "./utils/cipher.js";
```

- Show that the app is broken right now. But why?

### Necessary Setup: `type="module"`

- Explain that the browser needs to know that you are using JS modules:
  - This is done by adding the attribute `type="module"` to the `script` tag of the `index.html` file.
  - Note that the `defer` attribute is now obsolete and can be deleted.

```html
<script src="./index.js" type="module"></script>
```

- Show that the app is working again.

### Thinking in Components

- Remind students that we always want to think in components.
- Identify the following components:
  - Header
  - Author Card (we're cheating a little by not having a CardList component…)
- Show students the already existing `components` folder that has `.css` files in it.
- Explain that the goal is to colocate the `.js` and `.css` files of a component because they are part of the same concern.

#### Header

- Explain that the `Header` component is a good candidate for a component because it is self-contained.
- Wrap all header related `createElement` calls in a function `Header` that returns the `header`
  element.
- Keep the `root.append(header)` call outside of the function.
- Call the `Header` function and assign the return value to a variable `header` before the
  `append` call.
- The code should look like this now:

```js
function Header() {
  const headlineText = "Classical Authors";

  const header = document.createElement("header");
  header.className = "header";

  const headline = document.createElement("h1");
  headline.textContent = caesarCipher13(headlineText);

  const button = document.createElement("button");
  button.textContent = "Decipher Headline";
  button.type = "button";
  button.className = "header__button";
  button.addEventListener("click", handleDecipherHeadlineButtonClick);

  header.append(headline, button);

  function handleDecipherHeadlineButtonClick() {
    headline.textContent = headlineText;
    button.setAttribute("disabled", "");
  }

  return header;
}

const header = Header();
root.append(header);
```

- Show that the code still works, but we have not won much yet.
- Move the `Header` function from `index.js` to `components/Header/Header.js`.
- Show that `Header.js` now also needs an import from `utils/cipher.js`.
- Add add an `export` statement to the `Header` function.
- Import the `Header` function into `index.js`.

#### Author Card

- Asks students how they would extract the author card into a component that can be rendered for each author in the array.
- Repeat the steps from the `Header` component to extract the author card into a component.
- Make sure to also move the cipher import. You should also be able to remove it from `index.js` now.
- Tell students that we can pass the author data to the component as an argument. → The `Card` function is called once per author! This is a good thing because we reuse the same code for all authors.

You should be left with this in `index.js`:

```js
authors.forEach((author) => {
  const cardElement = Card(author);
  root.append(cardElement);
});
```

> 💡 If you want to foreshadow React a little more you can tell students that the function argument of `Card` is called `props` and rename it as such: `function Card(props)`.

### The Result

- Go back to the `index.js` file and show students that the code is now much more clean and simple.
- Show that even the code in the modules is self-contained and simpler to understand.

### Optional: Button Component

If there is enough time and the course is interested, you can create another `Button` component, replacing both the decipher button in the `Card` as well as in the `Header` component.

- Inside the `Card.js` file, create another component called `Button`. Move the lines of code creating the decipher button inside it:
  ```js
  function Button() {
    const button = document.createElement("button");
    button.className = "card__button";
    button.textContent = "Decipher";
    button.addEventListener("click", handleDecipherButtonClick);
  }
  ```
- The component doesn't work since it has no access to the handler function. Add an `onClick` parameter and return the `button` element:
  ```js
  function Button(onClick) {
    const button = document.createElement("button");
    button.className = "card__button";
    button.textContent = "Decipher";
    button.addEventListener("click", onClick);
    return button;
  }
  ```
- Use this component inside the `Card` component and pass the handler function as an argument.
  ```js
  const button = Button(handleDecipherButtonClick);
  ```
- Move the `Button` component into its own file. Make sure to `export default` the component and `import` it in the `Card.js`.
- Import the `Button` component in the `Header.js`. Replace the decipher button inside the `Header` with this component as well:
  ```js
  const button = Button(handleDecipherHeadlineButtonClick);
  ```
- Highlight, that by making the listener function a parameter, the same component can execute different functions and create different behavior for the button.

> 💡 The callback functions can access the correct `text` variables because they are stored in the **Closure** of the function. (See [this MDN article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) for more information)
