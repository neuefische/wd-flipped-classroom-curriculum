# CSS Basics

## Learning Objectives

In this session you will learn:

- [ ] what is CSS
- [ ] the meaning behind the name CSS (`Cascading Style Sheets`)
- [ ] the fundamentals of CSS, like `CSS syntax`, `selectors`, `box model`,
      `inline & block elements`
- [ ] styling fonts & working with relative units
- [ ] how to link stylesheets

---

## What is CSS?

You already learned what HTML is and how it works. Basically HTML is the skeleton of our Website.
But how can we give it a dress or in other words style our Website? Therefore we can use `CSS`
(Cascading Style Sheets). CSS is a style sheet language that allows us to change the presentation of
a document written in HTML.

![Comparison of HTML, CSS and JavaScript](assets/animated-gif-for-comparison.gif)

## Fundamentals

### CSS syntax

The structure of how to write CSS is also called `ruleset`. It consists of four parts:

![CSS syntax](assets/css-syntax.png)

- `Selector`: This defines what element(s) we want to style.
- `Declaration`: This defines what we want to change and contains pairs of `property` and
  `property value`.
- `Property`: This is the name of the element's property we want to change.
- `Property Value`: This is the value we assign to the property, e.g for the property `color` we use
  the property value `blue`.

> 💡 Hint: The property and property value are separated by a colon (`:`), each declaration is
> separated by a semicolon (`;`) and the declaration itself is wrapped in curly braces (`{ }`).

A ruleset can have `multiple declarations`:

```css
h1 {
	color: blue;
	font-size: 3rem;
	text-align: center;
}
```

You could also select multiple elements and style them with the same ruleset:

```css
h1,
h2,
h3 {
	color: red;
}
```

### Basic Selectors

There are different CSS selectors you can use to style elements. The most common ones are:

- `Universal` selector `*` selects all elements.
- `Element or Type` selector, like `h1`, selects all elements of a specific type.
- `Class` selector, like `.class-name`, selects all elements with the specified class.

> ❗️ In theory you could also use element IDs as selectors, but this is bad practice and must be
> avoided.

### CSS Properties

There are a lot of CSS proporties and you will discover new ones every day. Therefore the following
list shows only a few examples:

- `color`: Color of an element
- `font-size`: Defines the size of a font
- `text-align`: This property defines the alignment of text
- `background-color`: Background color of an element
- `border`: Defines the border of an element.
- `padding`: This property defines the padding of an element.
- `margin`: Defines the margin of an element.
- `width`: This property defines the width of an element.

You can find more properties in the
[CSS Properties Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#index) on MDN.

### Box Model

All elements of a website are wrapped in a `box model`. It's a way to define the size and position
of an element. There are four different parts: `content`, `padding`, `border` and `margin`. Beside
that there are also two different types of `box model`: `border-box` and `content-box`. This
property is called `box-sizing` and changes the way how the `width` and `height` of an element is
calculated.

- `content`: The actual content of the element.
- `padding`: Space between the content and the border of the element.
- `border`: The border of the element.
- `margin`: The space around the border and other elements.

<img src="./assets/box-model.png" width="500" alt="Box model">

### Inline and block elements

There are basically two types of elements: inline-level and block-level elements. `Inline elements`
occupy the space as required by the element itself and they don't begin from a new line. On the
other side, `block elements` occupy the full horizontal space of the parent element and do begin a
new line.

Example:

```html
// h2 is a block-level element
<h2>Coding Bootcamp</h2>
// inside the paragraph, the a tag is an inline-level element
<p>
	If you want to participate in a bootcamp, visit
	<a href="https://www.neuefische.de">neuefische.de</a>
</p>
```

You can change this behavior by using the CSS `display` property.

## Styling fonts & working with relative units

With CSS you can style the fonts of your website in many ways. Here are just some examples:

- `font-family`: Defines the font family of an element
- `font-size`: Size of a font
- `font-weight`: This property defines the weight of a font

### Relative units

There are two different types of units: `relative` and `absolute`.

- `Relative units` are relative to another length. With relative units we can scale from different
  output environments to another more easily.
- `Absolute units` are fixed and aren't relative to anything else. They should only be used when the
  output environment is known. The most common absolute unit is `px` (Pixels).

**Relative units examples**

| Unit  | Description                                         |
| ----- | --------------------------------------------------- |
| `em`  | Relative to the font size of the the parent element |
| `rem` | Relative to the font size of the root element       |
| `vw`  | Relative to the viewport width                      |
| `vh`  | Relative to the viewport height                     |

## Linking Stylesheets

To seperat your HTML and CSS code, you can create a new file, like `styles.css` and link it to your
HTML file with the `<link>` tag.

```html
<link rel="stylesheet" href="styles.css" />
```

---

# Challenges

## Part 1

## Part 2

---

## Resources

- [Common CSS Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)
- [MDN: CSS - First Steps](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)
- [Styling text](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text)
- [CSS Tricks: Box-sizing](https://css-tricks.com/box-sizing/)
- [rem/px calculator](https://nekocalc.com/de/px-zu-rem-umrechner)
