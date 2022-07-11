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

## CSS syntax

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

## Basic Selectors

There are different CSS selectors you can use to style elements. The most common ones are:

- `Universal` selector `*` selects all elements.
- `Element or Type` selector, like `article`, selects all elements of a specific type.
  ```css
  article {
  	color: red;
  }
  ```
- `Class` selector, like `.class-name`, selects all elements with the specified class.
  ```css
  .my-cool-class {
  	color: hotpink;
  }
  ```
  ```html
  <aside class="my-cool-class">...</aside>
  ```

> ❗️ In theory you could also use element IDs as selectors, but this is bad practice and must be
> avoided.

## CSS Properties

There are a lot of CSS proporties and you will discover new ones every day. Therefore the following
list shows only a few examples:

| Property           | Effect                                           |
| ------------------ | ------------------------------------------------ |
| `color`            | Color of an element                              |
| `font-size`        | Defines the size of a font                       |
| `text-align`       | This property defines the alignment of text      |
| `background-color` | Background color of an element                   |
| `border`           | Defines the border of an element.                |
| `padding`          | This property defines the padding of an element. |
| `margin`           | Defines the margin of an element.                |
| `width`            | This property defines the width of an element.   |

> 💡 You can find more properties in the
> [CSS Properties Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#index) on
> MDN.

## Box Model

All elements of a website are wrapped in a `box model`. It's a way to define the size and position
of an element. There are four different parts: `content`, `padding`, `border` and `margin`.

| box model part | Function                                                 |
| -------------- | -------------------------------------------------------- |
| `content`      | The actual content of the element.                       |
| `padding`      | Space between the content and the border of the element. |
| `border`       | The border of the element.                               |
| `margin`       | The space around the border and other elements.          |

The property `box-sizing` changes the way how the `width` and `height` of an element is calculated.
The default value is `content-box`. The values of `width` and `height` set the size of the content
box; padding, border-with and margin are then added on top. This can lead to unintended effects
where an element becomes larger than originally planned and overflows the screen. To avoid this, the
`box-sizing` of all elements is often set to `border-box`.

```css
* {
	box-sizing: border-box;
}
```

Now, the `width` property defines the size of the border box, padding and border width are
subtracted to calculate the available space for the content.

<img src="./assets/box-model.png" width="500" alt="Box model">

## Inline and block elements

There are basically two types of elements: inline-level and block-level elements. `Inline elements`
occupy the space as required by the element itself and are placed inside the text lines.
`Block elements` occupy the full horizontal space of the parent element and begin a new line.

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

## Styling fonts

With CSS you can style the fonts of your website in many ways. Here are just some examples:

- `font-family`: Defines the font family of an element
- `font-size`: Size of a font
- `font-weight`: This property defines the weight of a font

You can include custom fonts in two ways:

- find a font on [google fonts](fonts.google.com) and use the `@import` snippet and paste it to the
  top of your css file:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300;			400;500;700&display=swap');
  ```
- download any font and include it as a `font-family`

  ```css
  @font-face {
  	font-family: 'Name of the font';
  	src: url('path/to-the/font.woff');
  }
  ```

## Relative units

There are two different types of units: `relative` and `absolute`.

- `Relative units` are relative to another length. With relative units we can scale from different
  output environments to another more easily.
- `Absolute units` are fixed and aren't relative to anything else. The most common absolute unit is
  `px` (Pixels).

**Relative units examples**

| Unit  | Description                                         |
| ----- | --------------------------------------------------- |
| `em`  | Relative to the font size of the the parent element |
| `rem` | Relative to the font size of the root element       |
| `vw`  | Relative to the viewport width                      |
| `vh`  | Relative to the viewport height                     |

## Linking Stylesheets

To separate your HTML and CSS code, you can create a new file, like `styles.css` and link it to your
HTML file by placing a `<link>` tag in the `<head>` of your HTML document.

```html
<head>
	...
	<link rel="stylesheet" href="styles.css" />
</head>
```

---

# Challenges

## Social Card

Open
[this codesandbox](https://githubbox.com/neuefische/web-exercises/tree/feature/css-basics/sessions/css-basics/social-card).
You find there an unstyled html page. Your task is to recreate the following social card.
![social card example](./assets/social-card.png)

- [ ] [Add the link](#linking-stylesheets) to the styles.css stylesheet in the head of the
      index.html file.
- [ ] Style all elements on the page to recreate these social card styles.
- [ ] Use type selectors as well as classes to target the correct elements.
- [ ] Find a fitting font on fonts.google.com and [import it into your project](#styling-fonts).

## Personal Website Part 3

Start styling your personal website and make it absolutely fabulous. ✨

- [ ] Add a style.css file to your project and [link it correctly](#linking-stylesheets) in your
      index.html file.
- [ ] Get creative and find your very own style for your personal website.
- [ ] [Include a font](#styling-fonts) into your website.

---

## Resources

- [Common CSS Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)
- [MDN: CSS - First Steps](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)
- [Styling text](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text)
- [CSS Tricks: Box-sizing](https://css-tricks.com/box-sizing/)
- [rem/px calculator](https://nekocalc.com/de/px-zu-rem-umrechner)
