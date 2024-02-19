# React Basics

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 1:15     | Session         |
| 1:30     | Active Learning |
| 0:15     | Recap           |

## Learning objectives

- [ ] Understanding what React is and why it is used
- [ ] Understanding JSX and differences to HTML
- [ ] Understanding the declarative approach of React
- [ ] Briefly introduce `npm` as CLI tool and the `package.json` file
- [ ] Learning how to work with Create React App

---

## Arrival: Motivate students and prepare them for today's topic(s)

### Which important problem will we solve today?

- [ ] Modern apps are very complex
  - [ ] many interactive elements
  - [ ] frequent and sometimes independent updates of these elements
- [ ] Writing such complex apps in Vanilla JavaScript can be very difficult
- [ ] React is a library that solves many basic challenges
  - [ ] helps us to update different components in the UI in real time

### Why is the content of today's block that important for the students?

- [ ] We are going to talk about the most fundamental ideas and concepts of React in this lecture

### Pose a question to be answered by the end of the block!

What concepts in React make it easier for us to write better apps?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- [ ] JS Basics
- [ ] JS Functions
- [ ] JS Structure

---

## Inform: Session Guide

### Intro

- [ ] In 2011 **Facebook** released React as a **library for building user interfaces**
- [ ] In 2013 React was **open sourced**

> Optionally you can show a website that uses React
>
> - [New York Times](https://www.nytimes.com/)
> - alternatively: Facebook, Instagram, Netflix
> - point out different components in the UI

- [ ] was invented to **administrate UI components**
- [ ] specialiced on the **updates** of components in **real time**
- [ ] updates are triggered only when there are changes in the respective component, there is no need to update the whole page

- [ ] React follows a **declarative approach**
  - [ ] we describe what we want to see like with HTML
  - [ ] for this we use **JSX**

#### JSX

- [ ] JSX is a **syntax extension** to JavaScript
- [ ] JSX is a way to describe the DOM tree **declaratively**
- [ ] It looks like HTML, but **it is not HTML**

---

### Demo - Comparison of Vanilla JS and React

Use this demo locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-basics/demo-start -i
```

You can check out the final version of this demo locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-basics/demo-start
```

> For this demo you will imitate the React "App component" in Vanilla JS.
> A "VanillaApp.js" file is provided in the demo to simulate the React App component.

- [ ] Open the `index.html` file and show the two `<div>` elements
- [ ] One `<div>` we use to append our simulated **Vanilla JS "environment"**
- [ ] The other `<div>` element is **needed by React** to render the React root element.

#### Understanding the `index.js` in React

- [ ] Open the `index.js` file and go through the code

> ❗️ Explain that later on we will get to know a framework called **Create React App** that will help us to set up a React project
>
> When working with a framework like this we don't need to write this code in the index.js ourselves.

- [ ] `rootElement`
  - First, the "root-`<div>`" that we saw in the `index.html` is retrieved and stored in a variable named `rootElement`
- [ ] `createRoot()`
  - Next we call a function that is called `createRoot()` and pass the `rootElement` as an argument
  - This function is provided by React
  - It creates an Object that is a so-called **"Virtual DOM"** that is needed to provide the updates of the components in real time
  - This Vitual DOM is stored in a variable called `root`
- [ ] `render()`-method
  - The `root` object has a method called `render()` that is used to render the React elements into the Virtual DOM
  - Inside the `render()` method we get a first glimpse of **JSX**.
- [ ] `<App />`
  - our root component
  - the parent component to all other components in our app
- [ ] `<StrictMode>`
  - The App component is wrapped in a `<StrictMode>` component.
  - a tool provided by React for highlighting potential problems in an application
  - doesn't render any visible UI
  - only activated in development mode

#### Vanilla JS App Simulation

- [ ] Proceed to the simulated Vanilla JS environment in the `index.js` file and show the **query selector** for the Vanilla JS root element
- [ ] Explain that for the purpose of comparing Vanilla JS with React, we created a VanillaApp.js
- [ ] To render the VanillaApp component we need to first import it

```js
import VanillaApp from "./VanillaApp";
```

- [ ] Then we create a new instance of the VanillaApp and append it to the DOM

```js
const vanillaApp = VanillaApp();

vanillaJSRootElement.append(vanillaApp);
```

#### Vanilla JS Button: Quick Recap

For the comparison, we want to build a button in Vanilla JS as we know it.

- [ ] Start the dev server with `npm start`
- [ ] Open the `VanillaApp.js` file
- [ ] Inside the function `VanillaApp` create a container element for our Button

```js
const appContainer = document.createElement("div");
```

- [ ] Ask the students to help you create a button element, set its type and text content, and add an event listener.

```js
const button = document.createElement("button");
button.type = "button";
button.textContent = "click me";
button.addEventListener("click", () => console.log("Hello World"));
```

- [ ] Append the button to the `appContainer`
- [ ] ❗️ Return the `appContainer` from the `VanillaApp` function

```js
appContainer.append(button);

return appContainer;
```

- [ ] show the button being displayed in the browser

#### Vanilla JS Button: Building a reusable component

- [ ] Remind the students that React is all about creating components
- [ ] To compare it to VanillaJS we now need to create a component for the button
- [ ] Create a component called `Button` and copy the button related code from the `VanillaApp` function into it
- [ ] ❗️ add the return statement

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

- [ ] Inside the `VanillaApp` function create a new instance of the `Button` component and append it to the `appContainer`

```js
export default function VanillaApp() {
  const appContainer = document.createElement("div");
  // add to the demo:
  const button = Button();
  appContainer.append(button);

  return appContainer;
}
```

- [ ] Desmonstrate that, if we want to create more Buttons with the same component we need to create a new instance for each Button.
- [ ] Every Button additionally needs to be appended to the `appContainer` like this:

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

---

#### React Button: Getting to know **JSX**

- [ ] Open the `App.js` file
- [ ] Explain the function `App`

  - every React component needs a return statement, otherwise it will return `undefined`
  - everything we want to render in the Browser needs to be inside of the return statement
  - In the return statement we use **JSX**
  - If the return statement is longer than one line, we wrap the JSX code in parentheses

- [ ] Replace the `<div>` with a `button`
- [ ] Add the `type="button"` attribute
- [ ] Add the `onClick` attribute with an arrow function that logs "Hello React World"

```jsx
function App() {
  return (
    <button type="button" onClick={() => console.log("Hello React World")}>
      click me
    </button>
  );
}
```

- [ ] Clarify that even though JSX looks like HTML it is in fact a **syntax extension to JavaScript**
- [ ] The bundler in our React App (e.g. Webpack) will transform the JSX into JavaScript that the browser can understand
- [ ] Explain (built-in) [attributes in JSX](https://reactjs.org/docs/dom-elements.html)

  - some attributes are the same as in HTML (`id`, `type`)
  - but some are different:
    - `className` instead of `class`
    - `htmlFor` instead of `for`
    - `onClick` instead of `onclick` (or the `.addEventListener()` in Vanilla JS)

- [ ] Repeat how React code is declarative in the sense that we describe what we want to see, just like in HTML

#### Dynamic values in JSX: Interpolation

- [ ] We need to insert **dynamic values** in JSX to build a useful app.
  - the button needs to be reusable for different purposes on the page
  - e.g. a "like" button that shows the real-time number of likes
- [ ] In JSX this is done by using **curly braces**.
  - Inside curly braces you can **put a variable or any other JavaScript expression** (something that resolves to a value: e.g. ternary operator is very common)
- [ ] Create a variable `buttonText` above the return statement and assign a string to it
- [ ] Replace the text content of the button with the variable inside curly braces

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

---

#### The first React Component

React is all about creating components

- [ ] A component is a reusable part of the UI with contained **appearance and logic**.
- [ ] **In code**: a component is a function that returns JSX.

> ##### ❓ Rules of components:
>
> - Function name with **uppercase first letter** (convention: PascalCase)
> - Returns JSX (with **one** parent element)
> - Can be **nested**
> - Can be **reused**

- [ ] Create a function called `Button` and paste the code from the `App` component into it

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

- [ ] Add the `Button` component to the `App`

```jsx
export default function App() {
  return <Button />;
}
```

- [ ] Explain that creating a component is like creating our own HTML tags, which can represent a lot of other HTML tags
- [ ] Components are reuseable and can be put into JSX wherever we like (inside the return statement)
- [ ] Add two more `Button` components in the render function
- [ ] Show that we get a strange error that indicates we forgot to wrap the Buttons in a parent Element
- [ ] When returning several sibling components, it is necessary to wrap them in a **parent element**
- [ ] Add a `<div>` to wrap the Buttons

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

- [ ] Open both the `App.js` and `VanillaApp.js` next to each other and compare the code

---

### Demo - Introduction to Create React App

> Its time to create our first React app with Create React App

:exclamation: Good news: we do not need to setup a react project manually and that we are going to use a package for that, called **`create-react-app`**

- Open the [Create React App website](https://create-react-app.dev/) and show the "Getting Started" section & follow the instruction on the page
- Open your Terminal and run the following command:

```sh
npx create-react-app my-first-react-app
```

- Run `cd my-first-react-app` to go into the project and open in VSCode with `code .`
- Run `npm i`
- Run `npm start`to start the dev server

> #### npm and package.json
>
> - npm is a package registry that works like an app store for your project
> - it is used to install and manage packages (libraries) for a project
> - it is also used to run scripts that are defined in the `package.json` file (like `npm start`)
> - the `package.json` file contains metadata about the project and a list of dependencies

- Go through the files of the `create-react-app`

| File / Folder           | Description                                                                                                              | contains                                                                           |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| README.md               | general info about project                                                                                               | reminder how to start the dev-server                                               |
| package.json            | project configuration                                                                                                    | information about dependencies, scripts, metadata                                  |
| node_modules folder     | dependencies                                                                                                             | all dependencies of the project                                                    |
| **public folder**       | static assets that are not processed by the bundler                                                                      | e.g. index.html, favicon.ico, manifest.json, robot.txt                             |
| index.html              | root html file, don't mess with the `div id="root"></div>`                                                               | root element for React                                                             |
| favicon.ico             | icon that is shown in the browser tab                                                                                    | image                                                                              |
| robots.txt              | instructions for web robots how to crawl the site                                                                        | text                                                                               |
| manifest.json           | configuration for Progressive Web Apps, it defines how your app appears and behaves when 'installed' on a mobile device. | metadata                                                                           |
| images and other assets | static assets that you want to be served directly without processing.                                                    | images, fonts, etc.                                                                |
| **src folder**          | all source code that will go through webpack processing                                                                  | all JavaScript, JSX, CSS, and other files that make up your React application.     |
| index.js                | The JavaScript entry point where ReactDOM renders the App component into the DOM.                                        | imports react-dom and the App component                                            |
| App.js                  | The root component of the React app                                                                                      | typically where you start writing your app's code and organizing other components. |
| App.css                 | CSS file for the App component                                                                                           | styles for the App component                                                       |
| App.test.js             | Test file for the App component                                                                                          |                                                                                    |
| reportWebVitals.js      | Report performance metrics to Google Analytics                                                                           |                                                                                    |
| setupTests.js           | Setup file for Jest                                                                                                      |

- [ ] Delete all the files you don't need for the demo
- [ ] show what the `index.js` usually looks like
- [ ] Copy the code from the previous demo into the `App.js` file

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

---

## Process: Challenges

- [ ] Provide the [handout](react-basics.md) and the [challenges](challenges-react-basics.md) to the
      students
- [ ] Open the handout and walk the students through the tasks
- [ ] Divide the students into groups of \_\_\_
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

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.

```

```
