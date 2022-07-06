# Session Name

## Learning Objectives

In this session you will learn:

- [ ] how to style elements in a dynamic state like hovered or in focus
- [ ] about more complex css selectors like pseudo classes, and pseudo elements
- [ ] how to combine selectors into complex rulesets.

---

## Attribute Selectors

You can style elements depending if they hold certain attributes. This can be achieved with attribute selectors, directly added after a selector written inside `[...]` square brackets. Here are some examples:

- an input with the type=text

  ```css
  input[type="text"] {
    ...;
  }
  ```

- a button which has the attribute disabled

  ```css
  button[disabled] {
    ...;
  }
  ```

- any element with the attribute hidden

  ```css
  [hidden] {
    ...;
  }
  ```

- a element with the class 'card' and the attribute role='list'

  ```css
  .card[role="list"] {
    ...;
  }
  ```

> 💡 There are many more of these attribute selectors which can be looked up [in the MDN dev docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors).

## Pseudo Classes

Sometimes we want to style an HTML element differently when it is in a special state. This can be accomplished by `psuedo classes`. These are written directly after the normal type selector and start with a `:` colon. Here are some examples which states can be styled with pseudo classes:

- a hovered element

  ```css
  h2:hover {
    ...;
  }
  ```

- an active element like a pressed button

  ```css
  button:active {
    ...;
  }
  ```

- a focused element

  ```css
  .special-input:focus {
    ...;
  }
  ```

- the element is the first child in another element
  ```css
  div:first-child {
    ...;
  }
  ```
- the element is the nth child in another element
  ```css
  div:nth-child(n) {
    ...;
  }
  ```

> 💡 There are many more of these pseudo classes which can be looked up [in the MDN dev docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes).

## Pseudo Elements

In comparison to pseudo classes, pseudo elements are parts of an existing element like placeholder, selection, marker etc. These can be styled via pseudo element selectors. Similar to pseudo classes they are written directly after the original selector just starting with `::` double colons.

- an element which is displayed directly before the selected element

  ```css
  h2::before {
    content: "This text comes before the h2.";
  }
  ```

- an element which is displayed directly after the selected element

  ```css
  h2::after {
    content: "This text comes after the h2.";
  }
  ```

- the placeholder of an element, e.g. an input
  ```css
  input::placeholder {
    ...;
  }
  ```

> 💡 [In the MDN dev docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) you can find even more pseudo elements.

## Combinators

Sometimes it is more efficient to combine multiple selectors instead of defining yet another css class. You can chain together multiple selectors to form rather complex css selectors which apply only in specific cases. There are multiple ways to combine selectors:

- `(space)` : a specific element somewhere inside another specific element
  - `h2 span`: any span inside an h2
  - `.card button`: all buttons inside an element with the class "card"
- `>` : targeting a direct decendant of another element
  - `h2>span`: all spans which are direct children of an h2
  - `.card>button`: all buttons which are direct children of an element with the class "card"
- `~` : any later sibling element after another element
  - `h2~span`: any span which is a later sibling of an h2
- `+` : the direct sibling element after another element
  - `.card+button`: a button coming directly after an element with the class "card"

Many combinators can be chained after another. Can you figure out which element would be styled by the following selector?

```css
body section > input[type="checkbox"]:checked + div::after {
  ...;
}
```

# Challenges

## CSS Diner

Solve the puzzles from the [CSS Diner game](https://flukeout.github.io/).

> 💡 Hint: Don't worry, some puzzles are based on really special selectors, you don't have to learn all of them.

## Personal Website

Continue to build your personal website. Include some of the selectors you learned today. For example:

- create a decorator element with a ::before selector
- style a checkbox input with the :checked selector
- style the :active, :hover and :focus state of a button
- use combinators instead of classes when possible: `footer ul > li` instead of `.footer-list-item`

> 💡 Hint: Styling everything with combinators is equally as bad as styling everything with classes. Try to find a good balance between both.

---

## Resources

- [Attribute-selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)
- [Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
- [Pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
