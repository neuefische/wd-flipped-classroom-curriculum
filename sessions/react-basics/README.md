# React Basics

## Learning Objectives

- Understanding what React is and why it is used
- Understanding JSX and differences to HTML
- Understanding the declarative approach of React
- Gaining a brief introduction to `npm` as a CLI tool and the `package.json` file
- Learning how to work with Vite

## Requirements

- JS DOM and Events
- JS Functions
- JS Structure

## Demo

Comparison of Vanilla JS and React

### Start

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-basics/demo-start
```

### End

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-basics/demo-end
```

> 💡 For this demo you will imitate the React `App` component in Vanilla JS. A `VanillaApp.js` file is provided in the demo to simulate the React `App` component.

---

## Session Guide

Modern apps are very complex, often containing many interactive elements that require frequent and sometimes independent updates. Writing such apps in Vanilla JavaScript can be very challenging. React is a library that addresses these challenges by helping us update different components in the UI in real time. We are going to talk about the most fundamental ideas and concepts of React in this lecture.

> What concepts in React make it easier for you to write better apps?

### Introduction to React

- In 2011 **Facebook** released React as a **library for building user interfaces**.
- In 2013 React was **open sourced**.

> Optionally, you can show a website that uses React:
>
> - [New York Times](https://www.nytimes.com/)
> - Alternatively: Facebook, Instagram, Netflix
> - Point out different components in the UI.

- React was invented to **administrate UI components**, specializing on the **updates** of components in **real time**.
- Updates are triggered only when there are changes in the respective component, there is no need to update the whole page.

- React follows a **declarative approach**:
  - We describe what we want to see like with HTML.
  - For this we use **JSX**.

#### JSX

- JSX is a **syntax extension** to JavaScript.
- JSX is a way to describe the DOM tree **declaratively**.
- It looks like HTML, but **it is not HTML**.
- Javascript files containing JSX have the `.jsx` file extension. This is needed since `Vite`, the build tool we use to create React projects, requires this file ending when the file contains JSX code.

### Comparison of Vanilla JS and React

- Open the `index.html` file in the demo and show the two `<div>` elements.
- One `<div>` we use to append our simulated **Vanilla JS "environment"**.
- The other `<div>` element is **needed by React** to render the React root element.

#### Understanding the `index.jsx` in React

- Open the `index.jsx` file and go through the code.

> ❗️ Explain that later on we will get to know a tool called **vite**, which not only helps us set up a React project quickly but also provides a fast development environment and build process.
>
> When working with a tool like this we don't need to write this code in the `index.jsx` ourselves.

- `rootElement`
  - First, the "root-`<div>`" that we saw in the `index.html` is retrieved and stored in a variable named `rootElement`.
- `createRoot()`
  - Next we call a function that is called `createRoot()` and pass the `rootElement` as an argument.
  - This function is provided by React.
  - It creates an object that is a so-called **"Virtual DOM"** that is needed to provide the updates of the components in real time.
  - This Vitual DOM is stored in a variable called `root`.
- `render()`-method
  - The `root` object has a method called `render()` that is used to render the React elements into the Virtual DOM.
  - Inside the `render()` method we get a first glimpse of **JSX**.
- `<App />`
  - Our root component.
  - The parent component to all other components in our app.
- `<StrictMode>`
  - The App component is wrapped in a `<StrictMode>` component.
  - A tool provided by React for highlighting potential problems in an application.
  - Doesn't render any visible UI.
  - Only activated in development mode.

#### Vanilla JS App Simulation

- Proceed to the simulated Vanilla JS environment in the `index.jsx` file and show the **query selector** for the Vanilla JS root element.
- Explain that for the purpose of comparing Vanilla JS with React, we created a `VanillaApp.js`.
- To render the `VanillaApp` component we need to first import it:

```js
import VanillaApp from "./VanillaApp";
```

- Then we create a new instance of the `VanillaApp` and append it to the DOM.

```js
const vanillaApp = VanillaApp();

vanillaJSRootElement.append(vanillaApp);
```

#### Vanilla JS Button: Quick Recap

For the comparison, we want to build a button in Vanilla JS as we know it.

- Start the dev server with `npm run dev`.
- Open the `VanillaApp.js` file.
- Inside the function `VanillaApp` create a container element for our button.

```js
const appContainer = document.createElement("div");
```

- Ask the students to help you create a button element, set its type and text content, and add an event listener.

```js
const button = document.createElement("button");
button.type = "button";
button.textContent = "click me";
button.addEventListener("click", () => console.log("Hello World"));
```

- Append the button to the `appContainer`.
- ❗️ Return the `appContainer` from the `VanillaApp` function.

```js
appContainer.append(button);

return appContainer;
```

- Show the button being displayed in the browser.

#### Vanilla JS Button: Building a Reusable Component

- Remind the students that React is all about creating components.
- To compare it to VanillaJS we now need to create a component for the button.
- Create a component called `Button` and copy the button related code from the `VanillaApp` function into it.
- ❗️ Add the return statement.

```js
function Button() {
  // copy from VanillaApp():
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "click with Vanilla JS";
  button.addEventListener("click", () => console.log("Hello Vanilla JS World"));
  //add to the demo:
  return button;
}
```

- Inside the `VanillaApp` function create a new instance of the `Button` component and append it to the `appContainer`

```js
export default function VanillaApp() {
  const appContainer = document.createElement("div");
  // add to the demo:
  const button = Button();
  appContainer.append(button);

  return appContainer;
}
```

- Demonstrate that, if we want to create more buttons with the same component we need to create a new instance for each button.
- Every button additionally needs to be appended to the `appContainer` like this:

```js
export default function VanillaApp() {
  const appContainer = document.createElement("div");

  const button = Button();
  // add to the demo:
  const button2 = Button();
  const button3 = Button();

  appContainer.append(button);
  // add to the demo:
  appContainer.append(button2);
  appContainer.append(button3);

  return appContainer;
}
```

#### React Button: Getting to know **JSX**

- Open the `App.jsx` file.
- Explain the function `App`:

  - Every React component needs a return statement, otherwise it will return `undefined`.
  - Everything we want to render in the browser needs to be inside of the return statement.
  - In the return statement we use **JSX**.
  - If the return statement is longer than one line, we wrap the JSX code in parentheses.

- Replace the `<div>` with a `button`.
- Add the `type="button"` attribute.
- Add the `onClick` attribute with an arrow function that logs "Hello React World".

```jsx
function App() {
  return (
    <button type="button" onClick={() => console.log("Hello React World")}>
      click me
    </button>
  );
}
```

- Clarify that even though JSX looks like HTML it is in fact a **syntax extension to JavaScript**
- The bundler in our React App (e.g. Rollup) will transform the JSX into JavaScript that the browser can understand.
- Explain (built-in) [attributes in JSX](https://reactjs.org/docs/dom-elements.html).

  - Some attributes are the same as in HTML (`id`, `type`).
  - But some are different:
    - `className` instead of `class`
    - `htmlFor` instead of `for`
    - `onClick` instead of `onclick` (or the `.addEventListener()` in Vanilla JS)

- Repeat how React code is declarative in the sense that we describe what we want to see, just like in HTML.

#### Dynamic values in JSX: Interpolation

- We need to insert **dynamic values** in JSX to build a useful app.
  - The button needs to be reusable for different purposes on the page, e.g., a "like" button that shows the real-time number of likes.
- In JSX this is done by using **curly braces**.
  - Inside curly braces you can **put a variable or any other JavaScript expression** (something that resolves to a value: e.g. ternary operator is very common).
- Create a variable `buttonText` above the return statement and assign a string to it.
- Replace the text content of the button with the variable inside curly braces.

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

React is all about creating components.

- A component is a reusable part of the UI with contained **appearance and logic**.
- **In code**: a component is a function that returns JSX.

> ##### ❓ Rules of Components:
>
> - Function name with **uppercase first letter** (convention: PascalCase).
> - Returns JSX (with **one** parent element).
> - Can be **nested**.
> - Can be **reused**.

- Create a function called `Button` and paste the code from the `App` component into it:

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

- Explain that creating a component is like creating our own HTML tags, which can represent a lot of other HTML tags.
- Components are reuseable and can be put into JSX wherever we like (inside the return statement).
- Add two more `Button` components in the render function.
- Show that we get a strange error that indicates we forgot to wrap the buttons in a parent element.
- When returning several sibling components, it is necessary to wrap them in a **parent element**.
- Add a `<div>` to wrap the buttons.

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

- Open both the `App.jsx` and `VanillaApp.js` next to each other and compare the code.

### Demo - Introduction to Vite

> Its time to create our first React app with Vite.

❗️ Good news: We do not need to manually set up a React project, as we are going to use a tool called vite, which handles the scaffolding for us. Scaffolding means it automatically generates the basic structure and setup of our project so we can get started quickly.

- Open the [Vite website](https://vitejs.dev/) and show the [Getting Started](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) section & follow the instruction on the page.
  > 💡 Highlight, that vite can be used with many different frameworks, each providing a dedicated template. We will use the React template.
- Open your Terminal and run the following command:

```sh
    npm create vite@latest my-first-react-app
```

- If running this command for the first time, you need to install the `create-vite` package, accept and continue.
- In the menu, choose React as the framework, afterwards pick the Javascript **without** SWC (speedy web compiler) variant.
- Run `cd my-first-react-app` to go into the project and open in VSCode with `code .`.
- Run `npm i`.
- Run `npm run dev`to start the dev server.

#### npm and package.json

- npm is a package registry that works like an app store for your project.
- It is used to install and manage packages (libraries) for a project.
- It is also used to run scripts that are defined in the `package.json` file (like `npm run dev`).
- The `package.json` file contains metadata about the project and a list of dependencies.

- Go through the files of the `vite-react` template:

| File / Folder        | Description                                                                       | contains                                                                           |
| -------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| README.md            | general info about project                                                        | reminder how to start the dev-server                                               |
| package.json         | project configuration                                                             | information about dependencies, scripts, metadata                                  |
| vite.config.js       | configuration for vite                                                            | Configurations for basic behavior of dev server, bundler, plugin management.       |
| node_modules folder  | dependencies                                                                      | all dependencies of the project                                                    |
| index.html           | root html file, don't mess with the `div id="root"></div>`                        | root element for React, script tag for `src/main.jsx` file                         |
| **public folder**    | static assets that are not processed by the bundler                               | vite.svg                                                                           |
| **src folder**       | all source code that will go through Rollup processing                            | all JavaScript, JSX, CSS, and other files that make up your React application.     |
| main.jsx / index.jsx | The JavaScript entry point where ReactDOM renders the App component into the DOM. | imports react-dom and the App component                                            |
| App.jsx              | The root component of the React app                                               | typically where you start writing your app's code and organizing other components. |
| App.css              | CSS file for the App component                                                    | styles for the App component                                                       |
| index.css            | CSS file for global styles                                                        | css variables, style resets, fonts                                                 |

- Show what the `main.jsx` usually looks like. Point out that it can be named `index.jsx` sometimes.
- Copy the code from the previous demo into the `App.jsx` file.

```jsx
function Button() {
  const buttonText = "click with React";

  return (
    <button type="button" onClick={() => console.log("Hello World")}>
      {buttonText}
    </button>
  );
}

function App() {
  return <Button />;
}

export default App;
```

And that's a wrap!
