# CSS Structure

## Learning Objectives

- how the browser decides which CSS property to use when there are conflicting rules (CSS cascade &
  specificity)
- how to structure your CSS
- BEM naming convention
- Custom CSS properties (CSS variabless)

---

## CSS Cascade

The cascade is the algorithm that defines which css rules are being applied when there are
conflicting rules.

When styling an element the browser:

1. Searches for all rules with matching selectors
2. Sorts the rules by their importance taking into account:
   - Whether the rule is followed by **!important**
   - The rules origin (Browser stylesheet, User stylesheet, Author stylesheet)
3. If there are multiple rules with the same importance according to no. 2 the browser sorts rules
   by their [specificity](#specificity).
4. If there are multiple rules with the same importance and the same specificity, the browser
   chooses the last declaration over previous ones.

You can read about the details in the
[CSS Cascade mdn docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade).

> ❗️ We recommend never using !important unless you absolutely have to. It is almost impossible to
> overwrite a css rule with !important.

---

## Specificity

The specificity of a css selector tells the browser which rule is most relevant for an element. The
more specific rules win over less specific ones.

You can find a list of the specificity of different selectors on
[specifishity.com](https://specifishity.com/).

The **universal selector** is the lease specific one. It is overwritten by any other css rule with
any other matching css selector.

**type selectors** like `div` have a low specificity and can easily be overwritten.

**class selectors** like `.bright` and **attribute selectors** like `[type=checkbox]` have a higher
specificity.

---

## CSS Structure best practices

- keep your css consistent throughout a project (are there coding style guidelines for the project?)
- separate global and local styles into different files (or sections of files)
- create multiple stylesheets for different parts of your application
  - We recommend structuring your code and thinking in reusable **components**. You can write your
    css for every component in its own css file.

### How to import style sheets into another style sheet

You can import one style sheet into another style sheet using **@import**:

```css
@import 'customer-card.css';
```

---

## BEM

BEM is short for a "Block, Element, Modifier". It is a methodology that allows you to craft reusable
components through css class naming conventions.

```css
.block {
	...;
}

.block__element {
	...;
}

.block--modifier {
	...;
}
```

A **block** is a standalone entity or component.

An **element** is a part of your block (or component) that has no standalone meaning.

A **modifier** is a flag on your block (or component) that is used to change its appearance or
behavior. E.g. disabled, checked, bright, etc. .

You can find an [introduction to BEM here](http://getbem.com/introduction/).

---

## Custom properties (CSS variables)

You can store values in custom properties, so you can use them again multiple times without having
to write the value.

A common practice is to define variables in the `:root` pseudo class selector as follows:

```css
:root {
	--primary-color: #ff00ff;
	--secondary-color: #f00f0f;
}
```

> ❗️ Custom properties have to be prefixed with `--`

You can use the custom properties as follows:

```css
.customer-card {
	color: var(--primary-color);
	background-color: var(--secondary-color);
}
```

---

## Resources

- [MDN docs: CSS Cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)
- [specifishity.com](https://specifishity.com/)
- [Introduction to BEM](http://getbem.com/introduction/)
