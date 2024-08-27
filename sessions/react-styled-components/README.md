# React Styled Components

## Learning objectives

- Understanding what a CSS-in-JS library is and why we prefer it over normal CSS
- Knowing how to use styled components

  - create basic styled components
  - style custom components
  - use nested styles with pseudo-elements and pseudo-classes
  - write global styles

- Knowing how to use fonts from Google with Next.js

### Requirements

- React Basics
- Next.js Basics

## Demo

### Start

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-styled-components/demo-start
```

### End

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-styled-components/demo-end
```

## Session Guide

- Mention that we wrote CSS using the BEM approach in `.css` files until now
- Explain we are learning a very different new approach today: writing CSS-in-JS
  - We will generate the CSS styles with JavaScript
  - This gives us a lot of flexibility when applying styles to elements
  - We bring React components and their styles together and remove the barrier between them
- Note we use a library called `styled-component`

  - Show the [styled components website](https://styled-components.com/)
  - The library is already installed in our Next.js template but you can show students how to install it:

```bash
npm i styled-components
```

### `vscode-styled-components` plugin

- Point out we want to have syntax highlight in our IDE when writing in CSS-in-JS with styled components
- Show the [VS Code plugin](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components) and recommend to install it

### First Styled Component: Button

- open `pages/index.js`
- Import `styled from "styled-components"`
- Explain we choose the HTML tag to be rendered after `styled.`
- Explain directly after the tag name we write a template string
  - The syntax looks a bit unexpected, but it's just a template string as we know it
- Write styles for the button
- Mention we are using a CSS custom property for the color. We'll have a look into it soon

```jsx
import styled from "styled-components";

const Button = styled.button`
  all: unset;
  border: none;
  cursor: pointer;
  padding: 1rem;
  color: white;
  background-color: var(--primary-color);
`;
```

```jsx
return (
  <>
    <Button>Click me</Button>
  </>
);
```

### Nested styles

- Explain we can nest styles inside a styled component with `&`
  - Mention it is possible to use type selectors, but we should not use it: it brings potential for conflicting styles
  - Point out we should use it for `pseudo elements` or `pseudo classes`
- Give an example by adding `hover` styles to the button

```jsx
const Button = styled.button`
  /* ... */

  &:hover {
    color: black;
    background-color: var(--primary-background);
  }
`;
```

- Open the app in the browser and demonstrate the button's hover state

### Add Styles to the Link component

- Explain we can use `styled-components` to apply styles to other components
- Point out we can style the `Link` component from Next.js
- Write styles to style a link

```jsx
import Link from "next/link";

const StyledLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: var(--primary-color);

  &:hover {
    color: var(--secondary-color);
  }
`;
```

- Add a paragraph with a link to google.com

```jsx
return (
  <>
    <Button>Click me</Button>
    <p>
      This is a <StyledLink href="http://google.com">styled link</StyledLink>.
    </p>
  </>
);
```

- Open the browser and demonstrate the styled link

### Using Props: Interpolate a Value

- We want to create components that can adapt to different props, and that can be re-used throughout our application.
- We want to create buttons that will change based on props such as `danger`, `text`, `outlined` or `contained`.
- Add another Button to the page with textContent `Danger Button`.

```jsx
export default function HomePage() {
  return (
    <>
      {/* ... */}
      <Button>Click me</Button>
      <Button>Danger Button</Button>
    </>
  );
}
```

- Open the app in the browser and demonstrate the 2 buttons appear on the page but they look the same.

- To practice creating more styled components let's make a `container` for the buttons. i.e.

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

- Add a `$color` prop to the danger button.
- Note that the prop starts with a `$`. This is intentional. This means that the prop name won't be passed to the html element as an attribute (i.e. it will only be used for styling).

```jsx
<Button $color="danger">Button </Button>
```

- Highlight that we are writing a JavaScript template string and can use interpolation with `${}`
- When interpolating within a styled component, we can write a function that receives all props passed to the component
- Write the code to interpolate the `$color` prop. Replace the old declaration for `background-color` with the following.
- Explain that here we check if the `$color` prop is equal to `"danger"`. If so, set the background color to the css variable `--color-danger` and if not then use `--color-primary`.
- Show the 2 different colored buttons in the browser.

```jsx
background-color: ${(props) =>
  props.$color === "danger" ? "var(--color-danger)" :
    "var(--primary-color)"
};
```

### Using Props: `css` block / Complex Component

- Create another section of buttons.
- This time we want to create a prop with multiple options. i.e. `variant`. Where the button can appear as `text`, `outlined`, or `contained` (i.e. filled).
- Another idea might be to have a `size` prop. i.e. `small`, `medium`, `large`.
- Based on this prop, we want to change multiple CSS properties at once.

```jsx
<h2>Using Props: css block / Complex Component</h2>
<FlexContainer>
  <Button $variant="text">Button - Text </Button>
  <Button $variant="outlined">Button - Outlined</Button>
  <Button $variant="contained">Button - Contained</Button>
</FlexContainer>
```

- Point out, that we want to style multiple CSS properties for each variant: `color`, `background-color` and `border`
- Explain that using the ternary operator is fine for adapting one single CSS property value based on a prop
- Note that, if there are several CSS styles based on the same prop, the ternary operator would not be a good solution
  - You will repeat a lot of code (interpolation, arrow function, checking the prop's value)
  - This code is hard to read
- Explain that we can not only interpolate the value of a CSS property, but multiple lines of CSS code
- Explain we can use the logical AND operator (`&&`) to interpolate the following code only, if the condition is true
  - It's like conditional rendering with the ternary operator, but without an else case
- Explain we can interpolate multiple lines of CSS code with the `css` function (don't forget to import it)

```jsx
import styled, { css } from "styled-components";
```

- let's start with the `text` variant.

```jsx
${(props) =>
  props.$variant === "text" &&
  css`
    background-color: transparent;
    color: var(--primary-color);
  `};
```

- Open the app in the browser and demonstrate the change to the text button.

- Complete the steps for the `outlined` and `contained` variants.

```jsx
${(props) =>
  props.$variant === "outlined" &&
  css`
    background-color: transparent;
    color: var(--primary-color);
    border: solid 2px var(--primary-color);
  `};

${(props) =>
  props.$variant === "contained" &&
  css`
    background-color: var(--primary-color);
    color: white;
  `};

```

### Move Button to Components Folder.

- Create `components/Button/index.js`

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

- remove `Button` from `pages/index.js` and instead import it from `@/components/Button`;
- Point out that we now have a re useable button throughout our application.

```jsx
import styled from "styled-components";
import Button from "@/components/Button";

// ...
```

### Optional - Show how default arguments can help.

- Let's say we sometime want our `FlexContainer` to be `flex-direction` row and sometime column.
- Let's do it with a single prop called `column`.
- If this prop exist flex-direction should be `column` else `row`.

```jsx
const FlexContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  flex-direction: ${(props) => (props.$column ? "column" : "row")};
`;

export default function HomePage() {
  return (
    <>
      {/* ... */}
      <h2>Using Props: css block / Complex Component</h2>
      <FlexContainer $column>
        <Button $variant="text">Button - Text </Button>
        <Button $variant="outlined">Button - Outlined</Button>
        <Button $variant="contained">Button - Contained</Button>
      </FlexContainer>
    </>
  );
```

### Global Styles

- Mention we used CSS custom properties (variables) for colors in the code so far
- Point out the corresponding declarations are global styles
- Explain recently we used a `styles.css` file for global styles. Now we use the file `styles.js`
- Open `styles.js`
- Explain that `styled-components` gives us a function called `createGlobalStyle`
- Explain we can add all global styles here. Show the color declarations with the `:root` selector
- Open the `pages/_app.js` file
- Point out that code added here is available for all pages in the Next.js app
- Demonstrate that's why we import `GlobalStyles` here
- The `<GlobalStyle />` component is self closing because it renders nothing. It only provides the
  global styles to the browser.

### Using Google Fonts

- Explain with Next.js we can add fonts from the free Google Fonts library very easily
  - Point out this is not a feature of `styled-components`, but Next.js
- Show the [Google Fonts website](https://fonts.google.com/)
- Note that we can import the fonts in Next.js directly, for example in our global styles
- Open the `styles.js` file
- Import a font from `next/font`. Demonstrate autocomplete for the font name
- Explain the import gives a function we need to call
  - We should pass a configuration object to the function call to define the `subset` we need
  - A font has subsets for different letters, like: Chinese, Arabic, Cyrillic
  - The more subsets you include, the bigger the file size get's
  - We need only `latin` for our projects

```jsx
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export default createGlobalStyle`
  /* ... */
 
  body {
    margin: 0;
    font-family: ${openSans.style.fontFamily}; 
    padding: 2rem;
  }
`;
```

- Open the app in the browser and demonstrate the font has changed
