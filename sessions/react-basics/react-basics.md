# React Basics

## Learning Objectives

- [ ] Understanding what React is and why it is used
- [ ] Understanding JSX and differences to HTML
- [ ] Understanding the declarative approach of React
- [ ] Creating React components
- [ ] Understanding rendering with React
- [ ] Project Scaffolding with the `Vite` tool

---

## What is React and why do we use it?

React is a JavaScript **library** used for building user interfaces. It allows us to create reusable UI components without needing to work directly with the DOM API (e.g. `createElement`) in most cases. In React we write shorter, declarative code.

Compared to working with Vanilla JS, in React we now **describe what the user interface should look like** and React handles the DOM for us under the hood.

To write declarative code for React, we use **JSX**.

## JSX

Even thought JSX looks similar to HTML, it is not HTML as we know it. JSX is actually a syntax extension to JavaScript.
JSX expressions can be used anywhere a JavaScript expression can be used.
This can look as simple as this:

```jsx
const element = <p>Hello World!</p>;
```

We use JSX to create **React elements**. React elements are an intermediary format that React converts
to DOM elements during the rendering process.

This allows us to **declaratively** describe our user interface using JSX.
Up until now we have been using the DOM API in Vanilla JS to create elements **imperatively**.

### Imperative vs. Declarative Programming

To understand the difference between imperative and declarative code, let's look at an example of a simple button.

> ❗️ The main difference between imperative and declarative code is that imperative code describes _how_ something should be built, and declarative code describes _what_ needs to be built.

#### Imperative Code in Vanilla JavaScript

In imperative programming, your code performs a series of actions.

```js
const button = document.createElement("button");
button.type = "button";
button.textContent = "click me";
button.addEventListener("click", () => console.log("Hello World"));
document.body.append(button);
```

- We create the element with `document.createElement()`
- We set the button type,
- We set the text content
- We add the event listener
- We append the button to the body

#### Declarative Code in React

In declarative programming, your code describes a desired outcome.

```jsx
const element = (
  <button type="button" onClick={() => console.log("Hello World")}>
    click me
  </button>
);
```

- We describe in JSX what element we want (in this case a button element)
- React figures out how to update the DOM according to our description

> 💡 A metaphor: Image you are really hungry. You have two options:
>
> The Vanilla JavaScript way would be to cook a meal yourself. You would have to go to the grocery store, buy the ingredients, prepare them, cook them, and finally eat them.
>
> There is also the React way: You could just order food from a restaurant. You would just have to tell them what you want to eat, and they (React) would take care of the rest.

## React Components

React components are **customizable, reusable building blocks** for a React application, They serve as **independent elements of the user interface** that can be used multiple times across different parts of the app. It contains its own structure, logic, and potentially styling.

> 💡 There are hardly any limitations to how 'small' a component can be (e.g. a button), or how 'big' (e.g. an entire page).

To create a component in React, we define a **named function** (using PascalCase) and have it **return the desired elements using JSX**. We can then use the component in our code by using the function name as a tag name.

```jsx
function Button() {
  return (
    <button type="button" onClick={() => console.log("Hello World")}>
      click me
    </button>
  );
}

// Use the component by using the function name as a tag name
const element = <Button />;
```

This is a very powerful concept, because it allows us to reuse the same component in multiple places in our application.

> 💡 Components need to be named with PascalCase, otherwise React will not recognize them as components.

> 📙 Read about [**Your First Component**
> in the React Docs](https://react.dev/learn/your-first-component).

---

## Nesting Elements

JSX elements in a React component can be nested the same way we have been nesting our HTML elements.

```jsx
function Card() {
  return (
    <div>
      <p>Some Text</p>
      <p>Some more Text</p>
    </div>
  );
}
```

## Attributes

In most cases the names for attributes are the same as in HTML, but there are some exceptions. For example, the `class` attribute from HTML is called `className` in JSX.

```jsx
const element = <p className="text">Some Text</p>;
```

> 📙 Find out more about the [differences in attributes](https://legacy.reactjs.org/docs/dom-elements.html#differences-in-attributes)

---

Passing string values to attributes is done by using double quotes. To pass any JavaScript expression use curly braces.

```jsx
const myValue = "This is a string";
const input = <input type="text" value={myValue} minLength={5} />;
```

### Interpolating Expressions

We can use any JavaScript expression inside JSX by wrapping it in curly braces. This is called interpolation. It is similar to string interpolation in JavaScript template strings.

```jsx
const name = "Pawtricia";
const element = <p>My cat's name is {name}</p>;
```

```jsx
const a = 5;
const b = 10;

const element = (
  <p>
    {a} + {b} = {a + b}
  </p>
);
```

> 💡 You can only use **expressions** inside JSX. Statements like `if/else` or `for`-loops are not allowed.

> 📙 Read more about [**JavaScript in JSX with Curly Braces**
> in the React Docs](https://react.dev/learn/javascript-in-jsx-with-curly-braces).

---

## How React Renders

React needs to know where to render the elements it creates. We select the DOM element we want to
render into by using `document.querySelector()`. We then create a React root object. The root object
has a `render()` method that we can use to render React elements into the DOM.

**HTML**

```html
<div id="root"></div>
```

**JavaScript**

```js
const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);
root.render(<h1>Hello, world</h1>);
```

You'll probably never have to write this code yourself, because it is already included in all
templates and starters. In the real world it usally looks like this:

```js
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Here we have an imported `<App />` element that is wrapped in `<React.StrictMode>`.

> 💡 `StrictMode` sets up React to run in strict mode. In strict mode React points out potential
> problems in an application.

### React works smart, not hard

React only updates the DOM elements that have changed compared to the last render. This is very
efficient and provides a great user experience (focus stays consistent, inputs keep their values,
etc.) as well as a great developer experience (declaritive code is much easier to read).

## Nice to know: React, JSX, Transpilers and Bundlers

Since JSX is not a standard JavaScript syntax, we need to use a [transpiler](https://babeljs.io/) (a tool that translates one variant of a language into another) to transform it into standard JavaScript, that can be understood by the browser.

A [bundler](https://rollupjs.org/) is a tool that combines all the files of our codebase into one file, that we can include in our HTML. The bundler also takes care of running the transpiler when needed.

The bundler creates a development server when we run `npm run dev` locally.

> 💡 You might notice that in the challenges we are using an `import` statement to import `.css` files into our JavaScript files. This is not a standard JavaScript feature, but it is supported by the bundler. A css import statement is transformed into a `<link>` element in the HTML automatically.
>
> ```js
> import "./styles.css";
> ```

---

## npm

[npm](https://www.npmjs.com/) a package registry that works like an app store for your project.

It is used to install and manage packages (libraries) for a project.

It is also used to run scripts that are defined in the `package.json` file (like `npm run dev`)

---

## `package.json`

Packages that are installed into your project are called dependencies. They are kept inside a
`package.json` file in your project root. The `package.json` file also contains information about
your project.

A `package.json` may look something like this:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "A description of my app",
  "scripts": {
    "test": "npm run …"
  },
  "author": "Alex Newfish",
  "license": "UNLICENSED",
  "dependencies": {
    "my-dependency": "^10.4.1",
    "my-other-dependency": "^2.0.0"
  },
  "devDependencies": {
    "my-dev-dependency": "^8.0.105",
    "my-other-dev-dependency": "^0.1.6"
  }
}
```

- `dependencies` are packages that your application source code directly depends on, like libraries
  or frameworks.
- `devDependencies` are packages that help you while developing your application, like linters or
  build tools.

### Installing dependencies

`dependencies` and `devDependencies` inside the `package.json` can be installed by running
`npm install` (or just `npm i` for short).

> 💡 Do not forget to run `npm install` after cloning a new repository that has a `package.json`
> file.

When installing, npm creates a `node_modules` folder and a `package-lock.json` file.

- `node_modules` must always be in your `.gitignore` and must not be committed to your repository!
- `package-lock.json` should be commited to your repository.

---

## Project Scaffolding with `Vite`

Project scaffolding is the process of creating a new project. You will use the
[Vite](https://vitejs.dev/guide/) tool to create a new React project automatically.

> 💡 In principle, you could create a new React project from scratch. However, this would be a lot of work and we would have to set up a lot of things ourselves.

> 💡 Vite, by the way, works quite similar to the `ghcd` tool you have probably already used.

A new project is created by running the following command in the terminal:

```sh
npm create vite@latest my-react-app
```

- If running this command for the first time, you need to install the `create-vite` package, accept and continue.
- In the menu, choose React as the framework, afterwards pick the Javascript **without** SWC (speedy web compiler) variant.
- Run `cd my-first-react-app` to go into the project and open in VSCode with `code .`
- Run `npm i`
- Run `npm run dev`to start the dev server

A new react project will have a lot of files and folders. Here is a brief overview:

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

---

## Resources

- [What is React: A Visual Introduction For Beginners on learnreact.design](https://learnreact.design/posts/what-is-react)
- [Writing Markup with JSX in the React Docs](https://react.dev/learn/writing-markup-with-jsx)
- [JavaScript in JSX with Curly Braces in the React Docs](https://react.dev/learn/javascript-in-jsx-with-curly-braces)
- [Your First Component in the React Docs](https://react.dev/learn/your-first-component)
- [Difference between a Framework and a Library on freecodecamp](https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/)
- [Vite Getting Started](https://vitejs.dev/guide/)
