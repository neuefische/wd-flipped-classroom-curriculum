# Challenges: Session-Name

## Fix cascading bugs

Please open
[this CodeSandbox](https://codesandbox.io/s/github/neuefische/web-exercises/sessions/css-structure/selectors-and-cascading?file=/css/styles.css)
and have a look at the `styles.css` file.

There are various CSS rule sets with `FIX_ME` as selector. Your task is to replace this placeholder
with a proper selector according to the description above the rule set.

Use regular selectors, you're not using BEM just yet. You do not need to touch the HTML file.

Try to get a sense of how you might encounter ambiguities or issues when choosing the right selectors.

The declaration using the `outline` property is a guidance to check, if you addressed the correct
elements. After you are finished with a rule set, you can remove this declaration.

## Apply BEM to your Quiz App

When writing Code for your Quiz App, you might have asked yourself how to choose classnames. The BEM
methods gives you guidance on this topic.

Bring more structure to your Quiz App code by using BEM to name all classes!

The desired result: One should be able to see which HTML elements belong together to a logical group
(a BEM "block" / a "component"), by reading the HTML code and paying attention to the classnames.

## Separate the Quiz App CSS code into different files

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

## Identify global values in your Quiz App

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
