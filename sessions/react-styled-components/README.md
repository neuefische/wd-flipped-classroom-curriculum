# React Styled Components

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:45     | Active Learning |
| 0:15     | Recap           |

## Learning objectives

- [ ] Understanding what a CSS-in-JS library is and why we prefer it over normal CSS
- [ ] Knowing how to use styled components

  - [ ] create basic styled components
  - [ ] style custom components
  - [ ] use nested styles with pseudo-elements and pseudo-classes
  - [ ] write global styles

- [ ] Knowing how to use fonts from Google with Next.js

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

BEM is a good approach to give structure to CSS code. With React we have other approaches that offer more flexibility and built-in optimizations.

### Pose a question to be answered by the end of the block!

Why do we have more flexibility writing styles when using a library like `styled-components`.

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- React Basics
- Next.js Basics

---

## Inform: Session Guide

- [Demo Start](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/react-styled-components/demo-start)
- [Demo End](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/react-styled-components/demo-end)

### Introduction

- [ ] Mention that we wrote CSS using the BEM approach in `.css` files until now
- [ ] Explain we are learning a very different new approach today: writing CSS-in-JS
  - [ ] We will generate the CSS styles with JavaScript
  - [ ] This gives us a lot of flexibility when applying styles to elements
  - [ ] We bring React components and their styles together and remove the barrier between them
- [ ] Note we use a library called `styled-component`
  - [ ] Show the [styled components website](https://styled-components.com/)
  - [ ] The library is already installed in our Next.js template

### First Styled Component: Button

- [ ] Create a new file: `components/Button.js`
- [ ] Import `styled`
- [ ] Explain we choose the HTML tag to be rendered after `styled.`
- [ ] Explain directly after the tag name we write a template string
  - [ ] The syntax looks a bit unexpected, but it's just a template string as we know it
- [ ] Write styles for the button
- [ ] Mention we are using a CSS custom property for the color. We'll have a look into it soon

```jsx
import styled from "styled-components";

export default styled.button`
  all: unset;
  border: none;
  cursor: pointer;
  padding: 1rem;
  color: white;
  background-color: var(--primary-color);
`;
```

- [ ] Open the `pages/index.js` file
- [ ] Add the styled button to the page

```jsx
return <Button>Click me</Button>;
```

- [ ] Start the dev server
- [ ] Open the app in the browser and demonstrate the button is displayed with the styles we applied

```sh
npm run dev
```

### Nested styles

- [ ] Explain we can nest styles inside a styled component with `&`
  - [ ] Mention it is possible to use type selectors, but we should not use it: it brings potential for conflicting styles
  - [ ] Point out we should use it for `pseudo elements` or `pseudo classes`
- [ ] Open the `components/Button.js` file
- [ ] Give an example by adding `hover` styles to the button

```jsx
export default styled.button`
  /* ... */

  &:hover {
    color: black;
    background-color: var(--primary-background);
  }
`;
```

- [ ] Open the app in the browser and demonstrate the button's hover state

### Global Styles

- [ ] Mention we used CSS custom properties (variables) for colors in the code so far
- [ ] Point out the corresponding declarations are global styles
- [ ] Explain recently we used a `styles.css` file for global styles. Now we use the file `styles.js`
- [ ] Open `styles.js`
- [ ] Explain that `styled-components` gives us a function called `createGlobalStyle`
- [ ] Explain we can add all global styles here. Show the color declarations with the `:root` selector
- [ ] Open the `pages/_app.js` file
- [ ] Point out that code added here is available for all pages in the Next.js app
- [ ] Demonstrate that's why we import `GlobalStyles` here

### Add Styles to the Link component

- [ ] Explain we can use `styled-components` to apply styles to other components
- [ ] Point out we can style the `Link` component from Next.js
- [ ] Create a new file: `components/Link.js`
- [ ] Write styles to style a link

```jsx
import Link from "next/link";
import styled from "styled-components";

export default styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: var(--primary-color);

  &:hover {
    color: var(--secondary-color);
  }
`;
```

- [ ] Open the `pages/index.js` file
- [ ] Add a paragraph with a link to the page

```jsx
return (
  <>
    <Button>Click me</Button>
    <p>
      This is a <Link href="/">styled link</Link>.
    </p>
  </>
);
```

- [ ] Open the browser and demonstrate the styled link

### Using Google Fonts

- [ ] Explain with Next.js we can add fonts from the free Google Fonts library very easily
  - [ ] Point out this is not a feature of `styled-components`, but Next.js
- [ ] Show the [Google Fonts website](https://fonts.google.com/)
- [ ] Note that we can import the fonts in Next.js directly, for example in our global styles
- [ ] Open the `styles.js` file
- [ ] Import a font from `next/font`. Demonstrate autocomplete for the font name
- [ ] Explain the import gives a function we need to call
  - [ ] We should pass a configuration object to the function call to define the `subset` we need
  - [ ] A font has subsets for different letters, like: Chinese, Arabic, Cyrillic
  - [ ] The more subsets you include, the bigger the file size get's
  - [ ] We need only `latin` for our projects

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

- [ ] Open the app in the browser and demonstrate the font has changed

### `vscode-styled-components` plugin

- [ ] Point out we want to have syntax highlight in our IDE when writing in CSS-in-JS with styled components
- [ ] Show the [VS Code plugin](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components) and recommend to install it

---

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

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically generate excalidraw tags with the help of [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs to be explained in a few words by one student. We go in rounds one by one until all tags are included in the structure.
