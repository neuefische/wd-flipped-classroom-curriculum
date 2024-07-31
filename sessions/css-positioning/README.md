# CSS Positioning

## Learning objectives

- types of positioning
  - `static`
  - `relative`
  - `absolute`
  - `fixed`
  - `sticky`
- all positioning values
  - `top`
  - `right`
  - `bottom`
  - `left`
- the basic usage of `z-index`

---

### Why is the content of today's block that important for the students?

Elements on a web page are positioned according to the normal document flow, i.e. the order in the HTML document. Sometimes, we want to position certain elements outside of the normal document flow. One way to accomplish this is to use the `position` property.

---

### Required

CSS Basics, CSS Selectors

---

## Session Guide

Use the [Demo Start](https://github.com/neuefische/web-exercises/tree/main/sessions/css-positioning/demo-start) to guide through the session and demonstrate the behavior of the `position` property.

You can use this demo by running this command in your terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/css-positioning/demo-start
```

See [Demo End](https://github.com/neuefische/web-exercises/tree/main/sessions/css-positioning/demo-end) for the finalized version of the Demo.

You can check the final version by running this command in your terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/css-positioning/demo-end
```

### Intro

- Remind the students of what the normal document flow is.
- Normal flow describes the layout of any inline and block elements part of the document before any changes are made.
- Elements are usually positioned top to bottom (block elements) and left to right (inline elements).
- Optional: Show the students the [MDN front page](https://developer.mozilla.org/en-US/), and
  - open the dev tools,
  - inspect the "MDN Plus" banner for an example of `position: absolute`, and
  - inspect the header containing the navigation for an example of `position: sticky`

### `position: static`

- Explain that `position: static` is the default declaration for all elements.
- Mention that this doesn't have to be defined.
- The position of the element is determined by the document normal flow
- Properties `top`, `bottom`, `right`, `left` have no effect.
- Demonstrate the latter by trying to move the `.plate`.

### `position: fixed`

- Explain that this declaration "pins" the element to a fixed position.
- Navigate to the `.header` selector in your `styles.css` and add the following to the rule

```css
.header {
  position: fixed;
  top: 0;
  /* ...*/
}
```

- Demonstrate that the header element is now fixed in place and the content scrolls past below it.
- The content scrolls past below it due to `position: fixed`.
- The element is lifted out of the normal flow of the document.
- And not just that: `top`, `right`, `bottom` and `left` refer to the viewport - the browser window.

- Now add the following to the `.button` rule:

```css
.button {
  position: fixed;
  left: 20px;
  bottom: 40px;
  /* ... */
}
```

- The button element is now pinned to that exact position and we can use it to navigate back to the top not just from the bottom of the page, but also around the midway point, and so on.
- Demonstrate the behavior of `top`, `right`, `bottom` and `left` by adjusting e.g. the width of the browser window.
- The button stays put no matter what, which may lead to undesirable outcomes such as the button getting stuck far off to the left, but we'll choose to ignore this for now. At a later point we'll learn how to adjust such behaviors.

### `position: relative`

- Explain that this declaration is only effective when paired with `position: absolute`.
- Point out that the element still presents according to its position in the normal flow of the document, although you can displace it with the `top`, `bottom`, `right` and `left` properties.
- Add the following to the `.header__headline` rule:

```css
.header__headline {
  position: relative;
  /* ... */
}
```

- Explain that we have now created a "pin board" for its child elements that we want to position with `position: absolute` that has the exact dimensions of our `header__headline` element, which is an `<h1>` block element.

> 💡 Note: If the students have questions regarding what's allowed to nest into e.g. a `<h1>` element, here's a [website](https://caninclude.glitch.me/) to help you out with that question.

### `position: absolute`

- Explain that this declaration moves the element outside of the document normal flow.
- The element is positioned "absolutely" inside the "nearest non-static ancestor element".
- Note: Oftentimes, students will use `position: absolute` without declaring `position: relative` on an ancestor element, which will pin the element to the next best `relative` ancestor, which is oftentimes the `<body>` element. It seems to work at first, but it usually creates unexpected behavior.
- Add the following to the `.plate` rule:

```css
.plate {
  position: absolute;
  top: 20px;
  left: 20px;
  /* ... */
}
```

- The plate is now positioned to the left of the title.
- Feel free to demonstrate the relation between `position: relative` and `position: absolute` by playing with the values for `top`, `right`, `bottom`, `left`, such as `top: 0`.

### `position: sticky`

- This property displays some interesting behavior: it appears to be part of the normal document flow, until it reaches a certain point.
- Once it reaches a value (that you need to determine) it becomes "sticky" and scrolls along with the user.
- Or, in other words: it keeps an offset relative to its nearest scrolling ancestor (i.e. appears like a fixed element).
- Navigate to the `.donut` selector and add the following code to the rule:

```css
.donut {
  position: sticky;
  top: 30px;
  /* ... */
}
```

- Now the donut "sticks" to its intended goal: the plate!
- Demonstrate the behavior of `position: sticky` by playing with the value of `top`.

### `z-index`

To explain the `z-index`, prepare the following:

- Take a look at the purple info boxes.
- They contain a little lollipop that we want to position absolutely.

- Add the following to the rule of the `.content__text--info` selector:

```css
.content__text--info {
  position: relative;
  /* ... */
}
```

- Now add the following to the `.content__accent` rule:

```css
.content__accent {
  position: absolute;
  top: -15px;
  left: -10px;
  /* ... */
}
```

- The accents are positioned correctly, but when we start to scroll, suddenly the info boxes are scrolling across the header.
- This is due to the stacking context.
- To fix this, we need the `z-index` property.

- Add the following to the `.header` rule:

```css
.header {
  z-index: 1;
  /* ... */
}
```

- Now the info boxes scroll below the header, but so does the donut.
- We need to "lift" the donut to a `z-index` value that corresponds with the value defined as part of the `.header` rule.
- This value can be equivalent or below `1`, seeing as how we want the donut to be on the plate.

- Add the following to the `.donut` rule:

```css
.donut {
  z-index: 1;
  /* ... */
}
```

- Now the donut sticks to the plate again!

- Further explain the "under the hood" behavior of the `z-index` property:

  - it defines the stacking order of HTML elements, and
  - elements with a higher stacking order sit over elements with a lower stacking order,
  - the `z-index` value can be an integer number (negative numbers possible), or
  - `auto` (default): `z-index` equals parent element, and
  - `z-index` affects only `non-static elements`.

- ... and you're done! 🚀

---
