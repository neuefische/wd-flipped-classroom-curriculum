# CSS Structure

## Learning Objectives

- Understanding the CSS cascade
- Structuring CSS to improve maintainability and readability
- Using `@import` to import different CSS stylesheets in one file
- Applying practical CSS strategies for better structure
- Utilizing CSS custom properties (CSS variables)

## Requirements

- HTML Basics
- CSS Basics

## Demo

### Start

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/css-structure/demo-start
```

### End

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/css-structure/demo-end
```

---

## Session Guide

Writing CSS code can quickly become messy and hard to manage. To create well-structured, readable, and maintainable CSS, it’s essential to understand how different CSS declarations interact and how to organize your code effectively. This session will focus on strategies for achieving these goals, which are crucial for reducing bugs and improving efficiency.

> How can we write well-structured, more readable and maintainable CSS code with fewer bugs?

As you think about structuring your CSS, consider these common questions:

- How should I name this class?
- Where should I put the code within the CSS file?
- Why is this style declaration being overwritten?
- Can I avoid changing a certain color in multiple places manually?

Understanding how different CSS declarations interact and how to structure your CSS properly is key to answering these questions.

### CSS Cascade

- Introduce the students to the concept of "cascading" styles:
- CSS includes an algorithm that defines which CSS rules are being applied when there are conflicting rules.
- Important concepts: `specificity`, `order`, `inheritance`
- Show an example for overwritten styles because of "cascading"

- _on purpose_:

  find the `.highlight` selector in the CSS file, it is **overwriting the font color** defined in the `body` selector on purpose

- _accidentally_:

  you can add the `.title` selector, the class is already added to the HTML file

```css
.title {
  color: purple;
}
```

#### CSS Specificity

- Explain CSS specificity
- The specificity of a CSS selector tells the browser which rule is most relevant for an element.
- More specific rules win over less specific ones.
- Explain common types of selectors
- Type selector
- Class selector
- ID selector
- Show an example for CSS specificity

```css
h1 {
  color: #ff4a11;
}

.title {
  color: purple;
}

/*add to the demo:*/
#headline {
  color: green;
}
```

- Explain to avoid the `!important` flag

- it will overwrite all other styles and can lead to unexpected behavior

```css
h1 {
  color: #ff4a11 !important;
}
```

> You can now delete or comment out these examples `.title` and `#headline` to explain the next concept

#### CSS Order

- Explain CSS order
- When specificity is equal the order of CSS rules is relevant
- CSS rules written further down in the document may overwrite
- Show an example for CSS order

```css
h1 {
  color: #ff4a11;
}

/*add to the demo:*/
h1 {
  color: blue;
}
```

#### Inheritance

- Explain CSS inheritance
- Some CSS properties get inherited from the parent element
- Some examples are
  - font properties (font-family, font-size, font-weight, etc.)
  - list style properties (list-style, list-style-type, etc.)
  - color
  - cursor
  - visibility
- Show a simple example for CSS inheritance

```css
/*replace in the demo:*/
body {
  color: red;
}
```

> Ask the students to later play around with inheritance during the challenges.
> You can now undo or comment out these examples to explain the next concept.

### CSS practical strategies for good structure

- Show some concrete use cases
- Show that the CSS code is doubled in the `body`and the `.card` selector
- to respect the D.R.Y. (Don't Repeat Yourself) principle we should avoid this
- The guidelines:
  - Independent blocks and CSS selectors
  - Make your code reusable and modular
  - Code is easier to read and understand
  - Easier to scale, more robust and explicit
- Cut the flexbox rules from the `.card` selector and `body` and create a new class called `.flex`. Add the rules to the new selector.

```css
/*add to the demo:*/
.flex {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
```

- Go to the `index.html` and add the `class="flex"` to the `body` element. For the section elements, add the class `flex` behind the class `card` like this:

```html
<body class="flex">
  ...
  <section class="card flex">...</section>
  <section class="card flex">...</section>
</body>
```

### CSS Structure best practices

- Explain why we need a consistent CSS structure
- Code is more readable / easier to find code for a specific element
- Important in a team of developers
- Explain concepts on how to create a structure
- Create multiple CSS files (helps to improve overview)
- Separate global and local styles
- Create multiple stylesheets for different parts of your application
- Separated, reusable components
- Mention that it's important to have a team-agreed strategy and that there are various established manifestos (e.g. BEM)
- Show an example of a possible structure
- create a `global.css` file in the `css` directory
- write the import statement in the `styles.css` file

```css
@import "global.css";
```

- copy the global styles into the file

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: system-ui;
  color: #e4e8f0;
  background-color: #282828;
}

.flex {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
```

- create a folder named `components`
- create a file named `card.css` in the `components` folder
- write the import statement in the `styles.css` file

```css
@import "../components/card.css";
```

- copy the card styles into the file

```css
.card {
  padding: 20px;
  border-radius: 5px;
  border: solid 2px #ff4a11;
  width: 350px;
}

.highlight {
  color: #ff4a11;
  font-size: 1.5rem;
}

.definition {
  max-width: 300px;
  border: dashed 2px #ff4a11;
  border-radius: 5px;
  padding: 10px;
}

.tag {
  background-color: #9ca3af;
  color: #282828;
  padding: 10px;
  border-radius: 5px;
}
```

### Custom Properties

- Discuss the concept of variables
- A value stored with a name that is reusable
- The name is a reference to the value
- Example: contacts in an address book (remember a person's name instead of the phone number)
- Complex websites have a lot of repeating values
- colors, fonts, border radius size, shadows, spacing size
- Go to the ` global.css`` file and add a  `:root` selector
- Define custom properties:

```css
:root {
  --primary-color: #ff4a11;
  --secondary-color: #e4e8f0;
  --tertiary-color: #9ca3af;
  --background-color: #282828;
}
```

- Important: custom properties must start with two dashes & naming is case sensitive
- Change the respective properties to apply custom values
- Optional: discuss inheritance and how to overwrite custom properties
