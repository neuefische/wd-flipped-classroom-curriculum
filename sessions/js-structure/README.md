# JS Structure

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] Understanding JavaScript modules
- [ ] Using import and export statements
- [ ] Understanding how to structure a JavaScript project

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

Modules are a way to organize JavaScript code into separate files. Doing so is very important to
keep your code managable. Especially when the size of your code grows.

### Pose a question to be answered by the end of the block!

How do you structure your CSS code? (`@import`)

Transferring the knowledge from CSS: How might something similar be done in JavaScript now?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- JS Functions
- CSS Structure

---

## Inform: Session Guide

You can use the following demo for this session:

- [Start](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/js-structure/demo-start?file=/index.js)
- [End](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/js-structure/demo-end?file=/index.js)

> 💡 Our approach is to create vanialla JavaScript components that are similar to React components.
> That's why we use uppercase function names for our components and folders.

### The Concept of Modules

- [ ] Have a look at the
      [Start Demo's index.js file](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/js-structure/demo-start?file=/index.js):
  - [ ] Explain that a lot of code accumulated in the main script file and that it would be a good
        idea to separate it into multiple files
  - [ ] Encourage students to think about which parts of the code belong together semantically
    - [ ] Helper Functions / Data
    - [ ] Header
    - [ ] Author Cards
- [ ] Explain the concept of separation of concerns: Its about keeping code that is part of the same
      thing together (in terms of content or functionality).

### Using `export` Statements to Make Code Available to Other Modules

- [ ] Show the named export syntax:
  - [ ] Identify `const authors` and `function caeserCipher13` as utilities that can be extracted
        from the `index.js` file.
  - [ ] Create a `utils` folder.
  - [ ] Move `authors` to `utils/authors.js` and `caeserCipher13` to `utils/cipher.js`.
  - [ ] Use named exports:

```js
// utils/authors.js
export const authors = [
```

```js
// utils/cipher.js
export function caeserCipher13(string) {
```

### Using `import` Statements to Import Code from Other Modules

- [ ] Show how to import functions and variables into the `index.js` file:
  - [ ] Imports must be at the top of the importing file.
  - [ ] Note the curly braces `{}` around the name.
  - [ ] Make sure that the `.js` file extension is present:

```js
import { authors } from "./utils/authors.js";
import { caeserCipher13 } from "./utils/cipher.js";
```

- [ ] Show that the app is broken right now. But why?

### Necessary Setup: `type="module"`

- [ ] Explain that the browser needs to know that you are using JS modules:
  - [ ] This is done by adding the attribute `type="module"` to the `script` tag of the `index.html`
        file.
  - [ ] Note that the `defer` attribute is now obsolete and can be deleted.

```html
<script src="./index.js" type="module"></script>
```

- [ ] Show that the app is working again.

### Thinking in Components

- [ ] Remind students that we always want to think in components.
- [ ] Identify the following components:
  - [ ] Header
  - [ ] Author Card (we're cheating a little by not having a CardList component…)
- [ ] Show students the already existing `components` folder that has `.css` files in it.
- [ ] Explain that the goal is to colocate the `.js` and `.css` files of a component because they
      are part of the same concern.

#### Header

- [ ] Explain that the `Header` component is a good candidate for a component because it is
      self-contained.
- [ ] Wrap all header related `createElement` calls in a function `Header` that returns the `header`
      element.
- [ ] Keep the `root.append(header)` call outside of the function.
- [ ] Call the `Header` function and assign the return value to a variable `header` before the
      `append` call.
- [ ] The code should look like this now:

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

- [ ] Show that the code still works, but we have not won much yet.
- [ ] Move the `Header` function from `index.js` to `components/Header/Header.js`.
- [ ] Show that `Header.js` now also needs an import from `utils/cipher.js`.
- [ ] Add add an `export` statement to the `Header` function.
- [ ] Import the `Header` function into `index.js`.

> 💡 You can show students how to use a default export/import for the Component here. It is
> suggested to use named exports/imports though.

#### Author Card

- [ ] Asks students how they would extract the author card into a component that can be rendered for
      each author in the array.
- [ ] Repeat the steps from the `Header` component to extract the author card into a component.
- [ ] Make sure to also move the cipher import. You should also be able to remove it from `index.js`
      now.
- [ ] Tell students that we can pass the author data to the component as an argument. → The `Card`
      function is called once per author! This is a good thing because we reuse the same code for
      all authors.

You should be left with this in `index.js`:

```js
authors.forEach((author) => {
  const cardElement = Card(author);
  root.append(cardElement);
});
```

> 💡 If you want to foreshadow React a little more you can tell students that the function argument
> of `Card` is called `props` and rename it as such: `function Card(props)`.

### The Result

- [ ] Go back to the `index.js` file and show students that the code is now much more clean and
      simple.
- [ ] Show that even the code in the modules is self-contained and simpler to understand.

## Process: Challenges

- [ ] Provide the [handout](js-structure.md) and the [challenges](challenges-js-structure.md) to the
      students
- [ ] Open the handout and walk the students through the tasks
- [ ] Divide the students into groups
- [ ] Remind them of the ground rules:
  - meet again 30 min before lunch break in the class room
  - they can ask the coaches for help at any time
  - always try to help each other
  - take a break within the next 1.5 hrs
  - keep an eye on Slack

---

## Evaluate: Recap of the assignment / Discussion of the MVP / Solution

- Revisit the question that was posed in the beginning of the session and try to answer it with a
  few phrases.

---

## Checkout

> 💡 In case the students seem frustrated try to find some encouraging words (e.g. remind them of
> how far they have come already) :)

- [ ] Summarize the day by repeating all of the topics that were discussed
- [ ] Highlight the progress made that day
- [ ] Encourage the students to repeat what they learned with practical exercises
- [ ] Remind them to rest :)

## Keywords for Recap:

import, export, named-import, default-import, named-export, default-export, type="module"

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
