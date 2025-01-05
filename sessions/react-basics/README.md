# React Basics

## Learning Objectives

- Understanding what React is and why it is used
- Learn the differences between JSX and HTML
- Explore the declarative approach of React
- Learn how to set up a project using Vite

## Requirements

- JS DOM and Events
- JS Functions
- JS Structure

## Demo

Comparison of Vanilla JS and React

### Vanilla JS Start

```bash
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/react-basics/demo-vanilla-js-start
```

### React Start

```bash
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/react-basics/demo-react-start
```

### Vanilla JS End

```bash
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/react-basics/demo-vanilla-js-end
```

### React End

```bash
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/react-basics/demo-react-end
```

---

## Session Guide

React simplifies building interactive user interfaces by focusing on what the UI should look like, rather than how to build it. Let’s explore this by comparing a simple button component in Vanilla JS and React.

> How do you think focusing on what the UI should look like (instead of how to build it) can make developing components easier and more efficient?

### Introduction to React

- React, developed by Facebook in 2011, is a library for creating reusable, dynamic UI components.
- Open-sourced in 2013, allowing developers worldwide to contribute and improve it.
- React uses the Virtual DOM, a lightweight copy of the real DOM. It updates the Virtual DOM first, compares changes and updates only the necessary parts of the real DOM.
- React simplifies development by letting us focus on what the UI should look like. React then handles the "how" behind the scenes, optimizing updates as data changes.
- This approach ensures smooth performance, even for complex and interactive applications.
- Popular apps using React include Facebook, Instagram, and Netflix.

#### Vanilla JS Recap

- We’ll start by building a simple button component in Vanilla JS to compare it with React later.

- Open the Vanilla JS Demo
- In the `index.html`, we have a `div` element with a `data-js` attribute.
- This acts as the `root` container for our app – similar to how React uses a `root` element, which we’ll explore in more detail later.

```bash
<div data-js="root"></div>
```

- In `index.js`, we use `querySelector` to find this `root` element.

```bash
const rootElement = document.querySelector("[data-js='root']");
```

- This is the entry point to dynamically inject content into the DOM.

> 💡 In React, you’ll also use a root element, but React handles updates and rendering automatically, eliminating the need for manual DOM manipulation. You’ll see how this simplifies development when we move to React.

- Open `index.js` and discuss the code.
- Ask students to explain each step and guide them to identify the answer.

- What does `querySelector` do?

  - It selects the `div` with `data-js="root"`.
  - This is the entry point for the app, where we’ll inject everything.

- What is the App function doing?

  - Creates a `main` element dynamically using `document.createElement`.
  - Adds a class `app` to the `main` element for styling or identification.
  - Returns the `main` element so it can be added to the DOM.

- What happens when `App()` is called?

  - It creates the `main` container representing the app.

- What does `rootElement.append(app)` do?

  - It appends the returned `main` element to the `root`, "mounting" the app.

#### Vanilla JS Button: Turning It into a Reusable Component

- Introduce the pre-built button to the students.

```js
const button = document.createElement("button");
button.type = "button";
button.textContent = "click with Vanilla JS ";
button.addEventListener("click", () => console.log("Hello Vanilla JS Land"));

appContainer.append(button);
```

- Show the button in the browser and demonstrate its click functionality.
- React focuses on building components—small, reusable pieces of UI.
- Let’s replicate this idea in Vanilla JS by extracting the button code into a reusable function.
- Refactor the button logic into a `Button` function.

```js
function Button() {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "click with Vanilla JS";
  button.addEventListener("click", () => console.log("Hello Vanilla JS World"));

  return button;
}
```

- Inside the `App` function, create and append multiple instances of `Button`.
- Each time we call `Button()`, a new button instance is created and must be appended manually.
- Highlight the manual effort involved in reusing components in Vanilla JS

```js
export default function App() {
  // ..
  const buttonOne = Button();
  const buttonTwo = Button();
  const buttonThree = Button();

  appContainer.append(buttonOne, buttonTwo, buttonThree);

  return appContainer;
}
```

_Optional_

- If time allows, show how to move the `Button` function into its own file for better structure, mirroring how React organizes components.

---

#### Discussion and Bridge to React.

> What challenges do you see when manually creating and reusing components like this?

Guide them toward identifying:

- Manually creating and appending components is repetitive.
- Managing the DOM directly becomes complex as the app grows.

Bridge to React:

- React simplifies this process by providing reusable components and handling updates automatically.
- Let’s explore how React works.

#### Understanding the React Approach

- Open the `index.html` file in the React Demo
- Notice the `<div id="root" class="root"></div>` element.
- This is the root element, where React will render the app.

  > 💡 It's similar to the container we used in Vanilla JS.

- Open the `index.jsx`.
- How does React interact with the `root` container?
- React needs a container to render the app into, just like Vanilla JS.
- In Vanilla JS, we used `querySelector()`.
- In React, we retrieve it with the `getElementById()` – quite similar to Vanilla JS.

```js
const rootElement = document.getElementById("root");
```

- What is the purpose of `createRoot()`?
- Unlike Vanilla JS, React initializes a Virtual DOM – a lightweight copy of the real DOM.
- It efficiently tracks changes and updates only the necessary parts of the UI.

```js
const root = createRoot(rootElement);
```

- How does React render components into the DOM?
- React uses the `render()` method to insert components.
- In Vanilla JS, we manually create, update, and append elements to the DOM step by step.
- In React, rendering is declarative: we describe what the UI should look like, and React automatically handles the updates and DOM changes for us.

```js
root.render(<App />);
```

- `<App />` is the root component of the app, serving as the parent to all other components.
- The `<App />` is wrapped in `<StrictMode>`, which:
  - Highlights potential issues during development.
  - Does not affect the visible UI or production behavior.

#### React Button: Getting to know **JSX**

- JSX is a syntax extension to JavaScript that allows us to describe the DOM tree declaratively.
- It looks like HTML, but it’s actually JavaScript.
- JSX is transformed into browser-readable code by tools like Vite or Rollup.
- Files with JSX use the `.jsx` extension, required by Vite to process JSX code.

- Open the `App.jsx` file.
- Explain the `App` function:

  - Every React component must return JSX; otherwise, it returns `undefined`.
  - All elements to be rendered must be inside the return statement.

- Replace the `<div>` with a `button`.

```jsx
function App() {
  return (
    <button type="button" onClick={() => console.log("Hello React World")}>
      click with React
    </button>
  );
}
```

- While JSX looks like HTML, it’s actually JavaScript code.
- Recap (built-in) [attributes in JSX](https://reactjs.org/docs/dom-elements.html).
- JSX allows us to use attributes, but some differ from HTML:
  - `className` instead of `class`
  - `htmlFor` instead of `for`
  - `onClick` instead of `onclick` or the `.addEventListener()` in Vanilla JS
- Many other attributes, like `id` and `type`, remain the same as in HTML.

#### Dynamic Values in JSX: Interpolation

- JSX allows us to insert dynamic values into components using curly braces `{}`.
- This makes components reusable and more interactive, for example, a button that displays dynamic text.
- Inside curly braces, you can use variables or any JavaScript expression (e.g., calculations or ternary operators).
- Curly braces let you integrate JavaScript logic into JSX, making components more dynamic and reusable.

```jsx
export default function App() {
  const buttonText = "click with React";
  return (
    <button type="button" onClick={() => console.log("Hello React World")}>
      {buttonText}
    </button>
  );
}
```

### The first React Component

- React revolves around creating reusable components that combine appearance and logic.
- A component is a function that:
  - Returns JSX (React's declarative syntax).
  - Represents a reusable part of the UI.
- Key Rules for Components:
  - Function names use PascalCase (start with an uppercase letter).
  - Components must return JSX with one parent element.
  - Components can be nested and reused.

```jsx
function Button() {
  const buttonText = "click with React";

  return (
    <button type="button" onClick={() => console.log("Hello World")}>
      {buttonText}
    </button>
  );
}
```

- Add the `Button` component to the `App`:

```jsx
export default function App() {
  return <Button />;
}
```

- Add multiple `<Button />` instances.
- React requires one parent element for all components in the return statement.

```jsx
export default function App() {
  return (
    <div>
      <Button />
      <Button />
      <Button />
    </div>
  );
}
```

### Comparing React to Vanilla JS

> What differences do you notice between React and Vanilla JS when reusing components?

- Show both the Vanilla JS and React demos side by side to highlight key differences.
- Reusability:
  - Vanilla JS: Buttons are manually created and appended.
  - React: Reuse components declaratively with `<Button />`
- Readability:
  - React components are cleaner and easier to manage as the app grows.
- Parent Element:
  - React requires a single parent element for all returned components.

### Demo - Introduction to Vite

- Let's create our first React app using Vite!
- Vite is a tool that automates the setup of a React project, saving time by generating the basic structure for you.
- This process, called scaffolding, provides a ready-to-use project template.
- Open the [Vite website](https://vitejs.dev/) and show the [Getting Started](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) section & follow the instruction on the page.
- Vite works with multiple frameworks. For this demo, we’ll use the React template.
- Run the following commands in your terminal:

```sh
    npm create vite@latest my-first-react-app
```

- If it's your first time, install the create-vite package and proceed.
- Choose React and the JavaScript template (without SWC).
- Navigate into the project and start working:

```sh
    cd my-first-react-app
    npm install
    npm run dev
```

#### Understanding npm and package.json

- `npm`: A package manager for installing libraries and running scripts.
- `package.json`: Contains metadata about your project, dependencies, and available scripts (like `npm run dev` to start the server).

#### Project Structure

- Focus on the most important files.
  - `package.json`: Manages dependencies and scripts.
  - `vite.config.js`: Configures the Vite dev server and bundler.
  - `index.html`: Includes `<div id="root">` where React renders the app.
  - `src folder`:
    - `App.jsx`: Your main React component.
    - `main.jsx`: Entry point that renders React into the root element.
    - `App.css` and `index.css`: Styles for your app.

> 💡 For a more detailed overview of the project structure, refer to the handout.

#### Takeaway

- Vite provides a fast, ready-to-use project template, letting you focus on writing React code right away.
