# CSS Positioning

## Learning Objectives

- Understanding different types of positioning:
  - `static`
  - `relative`
  - `absolute`
  - `fixed`
  - `sticky`
- Knowing all positioning values:
  - `top`
  - `right`
  - `bottom`
  - `left`
- Learning the basic usage of `z-index`

## Requirements

- CSS Basics
- CSS Selectors

## Demo

### Start

```
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/css-positioning/demo-start
```

### End

```
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/css-positioning/demo-end
```

---

> Hint: In case you prefer the Sweeties Demo for this session, it is located in the archive folder. You can install it using this command:

```
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/archive/css-positioning/sweeties-demo-start
```

> The corresponding session guide can be found [here](../../archive/css-positioning/sweeties-README.md).

---

## Session Guide

Elements on a web page are positioned according to the normal document flow, which follows the order of elements in the HTML document. However, there are times when we need to position elements outside of this normal flow. One way to accomplish this is to use the `position` property.

> How can we position elements outside of the normal document flow? In what scenarios would you need to move an element outside of the normal document flow?

### Recap: Document Normal Flow

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
- The position of the element is determined by the document normal flow.
- Properties `top`, `bottom`, `right`, `left` have no effect.
- Demonstrate the latter by trying to move the `.infobox__bookmark`.

### `position: fixed`

- Explain that this declaration "pins" the element to a fixed position.
- Explain that we want our header to be fixed in its position and always visible, even when scrolling.
- Navigate to the `.header` selector in your `styles.css` and add the following to the rule:

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

- Next, we want our "Back to top" link to be always visible.
- Now add the following to the `.to-top` rule:

```css
.to-top {
  position: fixed;
  bottom: 20px;
  left: 5px;
  /* ... */
}
```

- The link element is now pinned to that exact position and we can use it to navigate back to the top not just from the bottom of the page, but also around the midway point, and so on.
- Demonstrate the behavior of `top`, `right`, `bottom` and `left` by adjusting e.g. the width of the browser window.

### `position: relative`

- Explain that this declaration is only effective when paired with `position: absolute`.
- Point out that the element is still displayed according to its position in the normal flow of the document, although you can displace it with the `top`, `bottom`, `right` and `left` properties.
- Add the following to the `.infobox` rule:

```css
.infobox {
  position: relative;
  /* ... */
}
```

- Explain that we have now created a "pin board" for its child elements that we want to position with `position: absolute` that has the exact dimensions of our `infobox` element, which is a `<section>` block element.
- Notice that all elements with the class `.infobox` now overlap our header, we will fix this at the end of the demo.

> 💡 Note: If the students have questions regarding what's allowed to nest into e.g. a `<section>` element, here's a [website](https://caninclude.glitch.me/) to help you out with that question.

### `position: absolute`

- Explain that this declaration moves the element outside of the document normal flow.
- The element is positioned "absolutely" inside the "nearest non-static ancestor element".
- Note: Oftentimes, students will use `position: absolute` without declaring `position: relative` on an ancestor element, which will pin the element to the next best `relative` ancestor, which is oftentimes the `<body>` element. It seems to work at first, but it usually creates unexpected behavior.
- Add the following to the `.infobox__bookmark` rule:

```css
.infobox__bookmark {
  position: absolute;
  top: 20px;
  right: 20px;
  /* ... */
}
```

- The bookmark is now positioned to the right of the title.
- Feel free to demonstrate the relation between `position: relative` and `position: absolute` by playing with the values for `top`, `right`, `bottom`, `left`, such as `top: 0`.

### `position: sticky`

- This property displays some interesting behavior: it appears to be part of the normal document flow, until it reaches a certain point.
- Once it reaches a value (that you need to determine) it becomes "sticky" and scrolls along with the user.
- Or, in other words: it keeps an offset relative to its nearest scrolling ancestor (i.e. appears like a fixed element).
- Navigate to the `.cta-box` selector and add the following code to the rule:

```css
.cta-box {
  position: sticky;
  top: 48px;
  /* ... */
}
```

- Now the call to action box "sticks" to its intended goal: the header!
- Demonstrate the behavior of `position: sticky` by playing with the value of `top`.

### `z-index`

Point out that some of our infobox elements currently unintentionally overlap the header as well as the call to action box.

- This is due to the stacking context.
- To fix this, we need the `z-index` property.

- Add the following to the `.header` rule:

```css
.header {
  z-index: 10;
  /* ... */
}
```

- Now the info boxes scroll below the header.

- Repeat the step for the `.cta-box` rule:

```css
.cta-box {
  z-index: 10;
  /* ... */
}
```

- Further explain the "under the hood" behavior of the `z-index` property:

  - it defines the stacking order of HTML elements, and
  - elements with a higher stacking order sit over elements with a lower stacking order,
  - the `z-index` value can be an integer number (negative numbers possible), or
  - `auto` (default): `z-index` equals parent element, and
  - `z-index` affects only `non-static elements`.

- ... and you're done! 🚀
