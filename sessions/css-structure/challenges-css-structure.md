# Challenges: CSS Structure

## Taco Truck

Solve the _Tacko Truck_ challenge by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/css-structure/taco-truck
```

Tommy from Tommy's Taco Truck needs your help!

This challenge will help you further develop your component-driven CSS thinking.
You will find any further guidelines in the project's `README.md`.

Have fun!

## Custom Properties

Solve this challenge by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/css-structure/custom-properties
```

## Separate the Quiz App CSS code into different files

It's time to bring more structure to your Quiz App code!

This will involve thinking of your Quiz App in terms of reusable components and then organizing your CSS accordingly.

Begin by examining your Quiz App and mentally breaking it down into distinct, reusable components.

Now create a separate CSS file for each component. The file name should match the name of the component. For example, if you identified a button as a component, you might have a `button.css` for all styles related to buttons.

> 💡 You can use the BEM naming pattern as described [in the handout](./css-structure.md/#BEM).

Move all styles that are used across multiple components to a `global.css` file. (e.g. type
selectors like `body` or the universal selector `*`)

Your main CSS file (e.g. `styles.css`) should have several `@import` statements.

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

There are probably a lot of redundant values in the CSS code of your Quiz App. Typical cases are:

- colors / background colors
- borders
- font names
- gradients
- spacing

Analyze your code and find redundant values.

It is not necessary, for example, to define a specific hex value for a color in several places. You
can define these kinds of redundant values in a single place (like the `global.css` or even a
`variables.css` file).

Use custom properties (CSS variables) to store such values in a central location and reuse them
throughout the code.
