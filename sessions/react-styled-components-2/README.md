# React Styled Components - 2

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 1:00     | Session         |
| 1:30     | Active Learning |
| 0:15     | Recap           |

## Learning objectives

- [ ] Recap styled components.
- [ ] Adapt styling based on props
- [ ] Learn how to create reusable components with styled components

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

We often want to alter the look and feel of a component based on props. Also it is common that we want to re use certain elements throughout of application (i.e. a button style)

### Pose a question to be answered by the end of the block!

How can we create re useable components for our application with`styled-components`?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- React Basics
- Next.js Basics
- Styled Components 1

---

## Inform: Session Guide

Use this demo locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-styled-components-2/demo-start -i
```

You can check out the final version of this demo locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-styled-components-2/demo-end -i
```

### Introduction

- [ ] Today we want to create components that can adapt to different props, and that can be re-used throughout our application.
- [ ] We want to create buttons that will change based on props such as `danger`, `text`, `outlined` or `contained`.

> ❗️ Styled components recently (in v6) updated the way to use props. In the new version ALL props are forwarded to the underlying DOM node (in v5 only valid HTML attributes were forwarded). This means that the prop `direction="column"` would result in a `direction` attribute on the DOM node (`<div direction="column">`). To prevent that you need to use transient props which are prefixed with `$`. So instead of `direction` you would use `$direction`. Transient props are not forwarded to the underlying DOM node or styled component.

### First add some CSS variables.

- [ ] Before we create any `styled components` let's add some css variables to make it easier to keep our styling consistent and maintainable.

- [ ] Open the `styles.js` file

- [ ] Add the following to `styles.js` (feel free to pick other colors).

```js
  :root {
    --color-primary: #364F6B;
    --color-secondary: #3FC1C9;
    --color-danger: #FF0000;
  }
```

### Create 2 styled buttons

- [ ] Open the `pages/index.js` file
- [ ] Add the 2 styled button to the page. One with danger in the text.

```jsx
import styled from "styled-components";

const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 1rem;
  color: white;
  border-radius: 4px;
  background-color: var(--color-primary);

  &:hover {
    color: var(--color-primary);
    background-color: var(--color-secondary);
  }
`;

export default function HomePage() {
  return (
    <div>
      <h1>Styled Components with Props</h1>
      <h2>Props using the ternary</h2>
      <Button>Button </Button>
      <Button>Button Danger</Button>
    </div>
  );
}
```

- [ ] 🚨 vscode currently auto completes the import to `import { styled } from "styled-components"`. This appears to work but will lead to issues further down the line. Please point out to students it is a default import. i.e. `import styled form "styled-components"`.🚨s

- [ ] Open the app in the browser and demonstrate the 2 buttons appear on the page but they look the same.

- [ ] To practice creating more styled components let's make a `container` for the buttons. i.e.

```jsx
const FlexContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export default function HomePage() {
  return (
    <div>
      <h1>Styled Components with Props</h1>
      <h2>Props using the ternary</h2>
      <FlexContainer>
        <Button>Button </Button>
        <Button>Button Danger</Button>
      </FlexContainer>
    </div>
  );
}
```

### Using Props: Interpolate a Value

- [ ] Add a `$color` prop to the danger button.
- [ ] Note that the prop starts with a $. This is intentional. This means that the prop name won't be passed to the html element as an attribute (i.e. it will only be used for styling).

```jsx
<Button $color="danger">Button </Button>
```

- [ ] Highlight that we are writing a JavaScript template string and can use interpolation with `${}`
- [ ] When interpolating within a styled component, we can write a function that receives all props passed to the component
- [ ] Write the code to interpolate the `$color` prop. Replace the old declaration for `background-color` with the following.
- [ ] Explain that here we check if the `$color` prop is equal to `"danger"`. If so, set the background color to the css variable `--color-danger` and if not then use `--color-primary`.
- [ ] Show the 2 different colored buttons in the browser.

```jsx
background-color: ${(props) =>
  props.$color === "danger" ?
    "var(--color-danger)" :
    "var(--color-primary)"
};
```

### Using Props: `css` block / Complex Component

- [ ] Create another section of buttons.
- [ ] This time we want to create a prop with multiple options. i.e. `variant`. Where the button can appear as `text`, `outlined`, or `contained` (i.e. filled).
- [ ] Another idea might be to have a `size` prop. i.e. `small`, `medium`, `large`.
- [ ] Based on this prop, we want to change multiple CSS properties at once.

```jsx
<h2>Using Props: css block / Complex Component</h2>
<FlexContainer>
  <Button $variant="text">Button - Text </Button>
  <Button $variant="outlined">Button - Outlined</Button>
  <Button $variant="contained">Button - Contained</Button>
</FlexContainer>
```

- [ ] Point out, that we want to style multiple CSS properties for each variant: `color`, `background-color` and `border`
- [ ] Explain that using the ternary operator is fine for adapting single CSS property value based on a prop
- [ ] Note that, if there are several CSS styles based on the same prop, the ternary operator would not be a good solution
  - [ ] You will repeat a lot of code (interpolation, arrow function, checking the prop's value)
  - [ ] This code is hard to read
- [ ] Explain that we can not only interpolate the value of a CSS property, but multiple lines of CSS code
- [ ] Explain we can use the logical AND operator (`&&`) to interpolate the following code only, if the condition is true
  - [ ] It's like conditional rendering with the ternary operator, but without an else case
- [ ] Explain we can interpolate multiple lines of CSS code with the `css` function (don't forget to import it)

```jsx
import styled, { css } from "styled-components";
```

- [ ] let's start with the `text` variant.

```jsx
${(props) =>
  props.$variant === "text" &&
  css`
    background-color: transparent;
    color: var(--color-primary);
  `};
```

- [ ] Open the app in the browser and demonstrate the change to the text button.

- [ ] Complete the steps for the `outlined` and `contained` variants.

```jsx
${(props) =>
  props.$variant === "outlined" &&
  css`
    background-color: transparent;
    color: var(--color-primary);
    border: solid 2px var(--color-primary);
  `};

${(props) =>
  props.$variant === "contained" &&
  css`
    background-color: var(--color-primary);
    color: white;
  `};

```

### Move Button to components folder.

- [ ] Create `components/Button/index.js`

```jsx
import styled, { css } from "styled-components";

export default styled.button`
  border: none;
  cursor: pointer;
  padding: 1rem;
  color: white;
  border-radius: 4px;
  background-color: ${(props) =>
    props.$color === "danger" ? "var(--color-danger)" : "var(--color-primary)"};

  ${(props) =>
    props.$variant === "text" &&
    css`
      background-color: transparent;
      color: var(--color-primary);
    `};

  ${(props) =>
    props.$variant === "outlined" &&
    css`
      background-color: transparent;
      color: var(--color-primary);
      border: solid 2px var(--color-primary);
    `};

  ${(props) =>
    props.$variant === "contained" &&
    css`
      background-color: var(--color-primary);
      color: white;
    `};

  &:hover {
    color: var(--color-primary);
    background-color: var(--color-secondary);
  }
`;
```

- [ ] remove `Button` from `pages/index.js` and instead import it from `@/components/Button`;
- [ ] Point out that we now have a re useable button throughout our application.

```jsx
import styled from "styled-components";
import Button from "@/components/Button";

const FlexContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export default function HomePage() {
  return (
    <div>
      <h1>Styled Components with Props</h1>
      <h2>Props with the ternary</h2>
      <FlexContainer>
        <Button $color="danger">Button </Button>
        <Button>Button Danger</Button>
      </FlexContainer>
      <h2>Using Props: css block / Complex Component</h2>
      <FlexContainer>
        <Button $variant="text">Button - Text </Button>
        <Button $variant="outlined">Button - Outlined</Button>
        <Button $variant="contained">Button - Contained</Button>
      </FlexContainer>
    </div>
  );
}
```

### Optional - Show how default arguments can help.

- [ ] Let's say we sometime want our `FlexContainer` to be `flex-direction` row and sometime column.
- [ ] Let's do it with props.

```jsx
const FlexContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: flex-start;
  flex-direction: ${({ $direction }) =>
    $direction === "row" ? "row" : "column"};
`;

export default function HomePage() {
  return (
    <div>
      <h1>Styled Components with Props</h1>
      <h2>Props with the ternary</h2>
      <FlexContainer>
        <Button $color="danger">Button </Button>
        <Button>Button Danger</Button>
      </FlexContainer>
      <h2>Using Props: css block / Complex Component</h2>
      <FlexContainer $direction="column">
        <Button $variant="text">Button - Text </Button>
        <Button $variant="outlined">Button - Outlined</Button>
        <Button $variant="contained">Button - Contained</Button>
      </FlexContainer>
    </div>
  );
```

- [ ] Point out that at the moment, both container have flex-direction row. That is because at the moment we are not passing a prop to the first container, so the value of `$direction` will be `undefined`.
- [ ] A nice fix is to add a default argument to the function. i.e.

```jsx
flex-direction: ${({ $direction = "row" }) =>
    $direction === "row" ?
      "row" :
      "column"
};
```

## Process: Challenges

- [ ] Provide the [handout](react-styled-components.md) and the
      [challenges](challenges-react-styled-components.md) to the students
- [ ] Open the handout and walk the students through the tasks
- [ ] Divide the students into groups
- [ ] Remind them of the ground rules:
  - meet again 30 min before lunch break in the class room
  - they can ask the coaches for help at any time
  - always try to help each other
  - take a break within the next 1.5 hrs
  - keep an eye on Slack

---

## Evaluate: Recap of the assignment / Discussion of the MVP / Solution

- Revisit the question that was posed in the beginning of the session and try to answer it with a
  few phrases.

---

## Checkout

> 💡 In case the students seem frustrated try to find some encouraging words (e.g. remind them of
> how far they have come already) :)

- [ ] Summarize the day by repeating all of the topics that were discussed
- [ ] Highlight the progress made that day
- [ ] Encourage the students to repeat what they learned with practical exercises
- [ ] Remind them to rest :)

## Keywords for Recap:

CSS-in-JS, styled components, createGlobalStyle, Next.js font

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
