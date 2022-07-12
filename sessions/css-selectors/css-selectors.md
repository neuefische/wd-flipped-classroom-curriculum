# CSS Selectors

## Learning Objectives

In this session you will learn:

- [ ] how to style elements dynamically, e.g. when hovering over them or setting focus on them
- [ ] about more complex css selectors like pseudo classes and pseudo elements
- [ ] how to combine selectors into complex rulesets

---

## Id Selectors

Select one element based on its id. We recommend not using id selectors but class selectors instead.
Id selectors aren't resuable like class selectors and they are hard to overwrite.

```css
#title {
	color: blue;
}
```

## Attribute Selectors

You can style elements depending on whether they have certain attributes. This can be achieved with
attribute selectors written inside `[...]` square brackets. Here are some examples:

- any element with the attribute hidden

  ```css
  [hidden] {
  	...;
  }
  ```

- all inputs with the attribute type="text"

  ```css
  [target='_blank'] {
  	...;
  }
  ```

- all elements with the class "card" and the attribute role="list"

  ```css
  .card[role='list'] {
  	...;
  }
  ```

> 💡 There are many more of these attribute selectors which can be looked up
> [in the MDN dev docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors).

## Pseudo Classes

Sometimes we want to style an HTML element differently when it is in a specific state. This can be
accomplished by `pseudo classes`. These are added to a selector and start with a `:` colon. Here are
some examples of states that can be styled with pseudo classes:

- hovered elements

  ```css
  h2:hover {
  	...;
  }
  ```

- active elements like a pressed button

  ```css
  button:active {
  	...;
  }
  ```

- focused elements

  ```css
  a:visited {
  	...;
  }
  ```

- elements which are the first child in another element

  ```css
  li:first-child {
  	...;
  }
  ```

- elements which are the nth child in another element. `n` is the argument that you can replace for
  example with a number or the words `even` and `odd`.

  ```css
  li:nth-child(n) {
  	...;
  }
  ```

> 💡 There are many more of these pseudo classes which can be looked up
> [in the MDN dev docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes).

## Pseudo Elements

In comparison to pseudo classes, pseudo elements let you style a specific part of the selected
elements like the first line of a paragraph, the first-letter, the selection etc. Similar to pseudo
classes they are written with `::` double colons directly after the original selector.

- this selects the first line of paragraphs

  ```css
  p::first-line {
  	...;
  }
  ```

- this creates pseudo elements as the first child of the selected elements

  ```css
  a[href^='https']::before {
  	content: '🌍';
  	margin-right: 5px;
  }
  ```

- this creates pseudo elements as the last child of the selected elements

  ```css
  a:hover::after {
  	content: '📎';
  	margin-left: 5px;
  }
  ```

> 💡 [In the MDN dev docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) you can
> find even more pseudo elements.

## Combinators

Sometimes it is more efficient to combine multiple selectors instead of defining yet another css
class. You can chain together multiple selectors to form rather complex css selectors which apply
only in specific cases. In the example above we already combined three selectors: `a`, `:hover` and
`::after`. But there are also other ways to combine selectors:

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

Many combinators can be chained. Can you figure out which element would be styled by the following
selector?

```css
body section > ul[role='list'] > li::before {
	...;
}
```

# Challenges

## CSS Diner

Solve the puzzles from the [CSS Diner game](https://flukeout.github.io/).

**Important:** It is currently not possible to select the `table` in the game.

> 💡 Hint: Don't worry, some puzzles are based on really special selectors, you don't have to learn
> all of them.

## Personal Website

Continue to build your personal website. Include some of the selectors you learned today. For
example:

- create a decorator element with a ::before selector
- style the `:link`, `:visited`, `:active`, `:hover` state of your links
- use combinators instead of classes if possible: `footer ul > li` instead of `.footer-list-item`

> ❗️ Remember to work with branches and pull requests!

> 💡 Hint: Styling everything with combinators is equally as bad as styling everything with classes.
> Try to find a good balance between both.

---

## Resources

- [Attribute-selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)
- [Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
- [Pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
