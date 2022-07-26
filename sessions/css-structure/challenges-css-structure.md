# Challenges: Session-Name

## Fix cascading bugs

===TODO===

## Apply BEM to your Quiz App

When writing Code for your Quiz App, you might have asked yourself how to choose classnames. The BEM
methods gives you guidance on this topic.

Bring more structure to your Quiz App code by using BEM to name all classes!

The desired result: One should be able to see which HTML elements belong together to a logical group
(a BEM "block" / a "component"), by reading the HTML code and paying attention to the classnames.

## Separate the Quiz Code CSS code into different files

You created a structure of individual components in the previous exercise.

Now let's create a separated CSS file for each component. The filename should correspond with the
component name.

In addition all styles used across multiple components should be moved into a `global.css` file.
(e.g. type selectors as `body` or the universal selector `*`)

Your main CSS file (e.g. `styles.css`) should use multiple `@import` statements.

The file structure might look something like this afterwards:

```
quiz-app
├── components
│   ├── button.css
│   ├── card.css
│   ├── header.css
│   └── navigation.css
├── global.css
├── index.html
└── styles.css
```

## Identify global values in your Quiz-App

Within the CSS code of your Quiz App are probably a lot of redundant values. Typical cases are:

- colors / background colors
- borders
- font names
- gradients
- spacing

Analyze your code and find redundant values.

The is no need to define a e.g. certain hex value for color in multiple places. You can define such
redundant values in a single place (like the `global.css` file).

Use Custom Properties (CSS Variables) to store such values at a central place und reuse them across
the code.
