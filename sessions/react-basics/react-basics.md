# React Basics

## Learning Objectives

- [ ] Understanding what React is and why it is used
- [ ] Understanding JSX and differences to HTML
- [ ] Understanding the declarative approach of React
- [ ] Creating React components
- [ ] Understanding rendering with React
- [ ] Knowing about the React ecosystem
- [ ] What npm is and how it is used
- [ ] What are packages and how does the npm ecosystem work
- [ ] The basic anatomy of a npm package
- [ ] How does semantic versioning work
- [ ] Project Scaffolding with the `Create React App` tool

---

## What is React and why do we use it?

React is a JavaScript library with the purpose of making the developer's life easier: you don't need to work directly
with the DOM API (e.g. `createElement`) in most cases. You just write simpler (declarative) code
describing what the user interface should look like and React handles the DOM under the hood.

To write declarative code for React, you use JSX.

## Using JSX

JSX is a syntax extension to JavaScript. JSX is neither a string, nor HTML as we know it. JSX
expressions can be used anywhere a JavaScript expression can be used.

```js
const element = <p>Some Text</p>;
```

We use JSX to create React elements. React elements are an intermediary format that React converts
to DOM elements during the rendering process. This allows us to declaratively describe our user
interface using JSX.

### Creating Elements

Just like in HTML, JSX elements are described using opening and closing tags. The opening tag
contains the tag name or the component type (see [Using Components](#using-components)) and any
attributes. The closing tag contains the same tag name or the same component type as the opening tag does and nothing else. The
children of the element are placed between the opening and closing tag. If the element has no
children, the closing tag can be omitted and the element is self-closing.

```js
// Element with children
//
//              opening tag         children
//              |  attributes       |        closing tag
//              |  |                |        |
const element = <p className="text">Some Text</p>;
//               | |         |                 |
//               | |         attribute value   |
//               | attribute name              |
//               tag name or component type ---+

// Self-closing element
//
//            self closing tag   slash denotes self closing
//            |      attributes  |
//            |      |           |
const input = <input type="text" />;
//             |     |    |
//             |     |    attribute value
//             |     attribute name
//             tag name or component type
```

> 💡 Elements that do not support closing tags in HTML like `<br>` or `<input>` must be self-closing
> in JSX (like `<br />` or `<input type="text" />`).

> 💡 Unlike HTML, which is resilient to missing closing tags, JSX is not. If you forget to close a
> tag, you will get an error.

#### Using Components

To create an element from a [component](#react-components), we can simply refer to it by the
function name in JSX and treat it just like any built-in component:

```js
const element = <MyComponent />;
```

Regarding attributes and children, creating elements from component types works just like with any
(HTML) tag name.

> 💡 JSX makes the distinction between built-in (HTML) tag names and components by looking at the
> first character inside the JSX tag. If it is lowercase it's treated as a built-in tag name, if it is
> uppercase it looks for any defined JavaScript function with that name. That is why it is important
> to use PascalCase for component names.

> 📙 Read more about [**Writing Markup with JSX**
> in the React Docs](https://react.dev/learn/writing-markup-with-jsx).

### Attributes

Attributes for built-in HTML elements use JavaScript-centric names from the DOM API. In most cases
the names are the same as in HTML, but there are some exceptions. For example, the `class` attribute
from HTML is called `className` in JSX.

Passing string values to attributes is done by using double quotes. To pass any JavaScript
expression use curly braces.

```js
const element = <p className="text">Some Text</p>;

const myValue = "This is a string";
const input = <input type="text" value={myValue} minLength={5} />;
```

### Nesting Elements

React elements can be nested the same way we have been nesting our HTML elements.

```js
const element = (
  <div>
    <p>Some Text</p>
    <p>Some more Text</p>
  </div>
);
```

> 💡 Multiline JSX expressions are wrapped in parentheses to make them easier to read. No worries:
> Prettier will take care of that for you.

### Interpolating Expressions

We can use any JavaScript expression inside JSX by wrapping it in curly braces. This is called
interpolation. It is similar to string interpolation in JavaScript template strings.

```js
const name = "Pawtricia";
const element = <p>My cat's name is {name}</p>;
```

```js
const a = 5;
const b = 10;

const element = (
  <p>
    {a} + {b} = {a + b}
  </p>
);
```

> 💡 You can only use expressions inside JSX. Statements like `if` or `for` are not allowed.

> 💡 To learn how to interpolate JavaScript expressions inside JSX attributes, refer to the [Attributes](#attributes) section.

> 📙 Read more about [**JavaScript in JSX with Curly Braces**
> in the React Docs](https://react.dev/learn/javascript-in-jsx-with-curly-braces).

## React Components

React applications are built using components. A component is an independent and reusable piece of the user interface that contains its own structure, logic, and potentially styling.

React components are JavaScript functions that
return React elements. Those elements are then turned into DOM elements by React during the
rendering process.

In order to create a React component, we write a named function (using PascalCase) and have it
return the desired elements using JSX.

```js
function MyButton() {
  return (
    <button type="button" className="default-button">
      I'm a button
    </button>
  );
}
```

This is a very powerful concept, because it allows us to reuse the same component in multiple places
in our application.

> 💡 See [Using Components](#using-components) for more information on how to use components in JSX.

> 💡 There are hardly any limitations to how 'small' a component can be (i.e. a button), or how
> 'big' (i.e. an entire page).

> 📙 Read about [**Your First Component**
> in the React Docs](https://react.dev/learn/your-first-component).
>
> **Note**: _Exporting the component_ and _Nesting and organizing components_ are out of scope for this first session.

## Imperative vs. Declarative Programming

The main difference between imperative and declarative code is that imperative code describes _how_
something should be built, and declarative code describes _what_ needs to be built.

> 💡 Imagine building a stool. Imperative "code" would describe the steps you need to take to build
> the stool. Declarative "code" would describe the stool itself.
>
> Imperative:
>
> - take 4 wooden slats
> - take 1 wooden board
> - take 4 screws
> - take a screwdriver
> - screw the slats under the board perpendicularly
> - position your work so that the board is on top
>
> Declarative:
>
> - a stool with 4 legs and a seat, standing upright

In imperative programming, your code performs a series of actions.

In declarative programming, your code describes a desired outcome.

The way we have used JavaScript during this course so far has been mostly imperative. We have
described what needs to be done to get a certain result.

```js
const p = document.createElement("p");
p.classList.add("introText");
p.textContent = "Hello World!";
rootElement.append(p);
```

Now, React allows us to use JavaScript in a declarative way. We describe to React what we want, and
React figures out how to update the DOM according to our description.

```js
root.render(<p className="introText">Hello World!</p>);
// React could interpret this to do the following:
// const p = document.createElement("p");
// p.classList.add("introText");
// p.textContent = "Hello World!";
// rootElement.append(p);
// …
```

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
etc.) as well as a great developer experience (declaritive code is much easier to reason about).

## Nice to know: React, JSX, Transpilers and Bundlers

Since JSX is not a standard JavaScript syntax, we need to use a [transpiler](https://babeljs.io/) (a tool that translates one variant of a language into another) to transform it into standard JavaScript, that can be understood by the browser.

A [bundler](https://webpack.js.org/) is a tool that combines all the files of our codebase into one file, that we can include in our HTML. The bundler also takes care of running the transpiler when needed.

The bundler creates a development server when we run `npm run start` locally. CodeSandbox does this
for us automatically.

> 💡 You might notice that in the challenges we are using an `import` statement to import `.css` files into our JavaScript files. This is not a standard JavaScript feature, but it is supported by the bundler. A css import statement is transformed into a `<link>` element in the HTML automatically.
>
> ```js
> import "./styles.css";
> ```

---

## npm

It's a package registry that works like an app store for your project.

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

## Semantic Versioning

A semantic version is updated whenever a package changes and a new version is published.

It follows this schema: **`Major.Minor.Patch`** (e.g. `1.2.3`)

- **`Major`** → major version, changes when the public api of a package changes (breaking change)
- **`Minor`** → minor version, changes when new features are added
- **`Patch`** → patch version, changes when bugs are fixed

When defining dependencies in `package.json` npm uses version ranges to define which version of
package should be installed. npm always installs the newest version of package that still matches
the range description.

- `^` (e.g. `"^10.4.1"`) → Newer minor updates and patches can be installed, but major updates
  cannot.  
  (Here version `10.5.6` would be installed but not `11.0.0`)

- `~` (e.g. `"~10.4.1"`) → Newer patches can be installed, minor and major updates cannot.  
  (Here version `10.4.8` would be installed but not `10.5.0`)

- `>` (e.g. `">10.4.1"`) → Any newer version will be installed.  
  (Here any version newer than `10.4.1` would be installed)

Version ranges described with `^` are by far the most commmon choice because they are usally safe
and won't break your application.

## Project Scaffolding with `Create React App`

Project scaffolding is the process of creating a new project. You will use the
[Create React App](https://create-react-app.dev/docs/getting-started) tool to create a new React
project automatically.

> 💡 In principle, you could create a new React project from scratch. However, this would be a lot
> of work and we would have to set up a lot of things ourselves. For example, you would have to set
> up a development server, a build process and a test runner. You would also have to configure up a
> module bundler and a transpiler. This is a lot of work and you would have to do it every time you
> want to create a new project.

> 💡 Create React App, by the way, works quite similar to the `ghcd` tool you have probably already
> used.

---

## Resources

- [What is React: A Visual Introduction For Beginners on learnreact.design](https://learnreact.design/posts/what-is-react)
- [Writing Markup with JSX in the React Docs](https://react.dev/learn/writing-markup-with-jsx)
- [JavaScript in JSX with Curly Braces in the React Docs](https://react.dev/learn/javascript-in-jsx-with-curly-braces)
- [Your First Component in the React Docs](https://react.dev/learn/your-first-component)
- [Difference between a Framework and a Library on freecodecamp](https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/)

### About npm

- [npm website](https://www.npmjs.com/)
- [package.json specification](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)
- [npm install documentation](https://docs.npmjs.com/cli/v8/commands/npm-install)
- [Semantic Versioning specification](https://semver.org/)

### `Create React App` Docs

- [Getting Started on the Create React App Docs](https://create-react-app.dev/docs/getting-started)
- [Folder Structure on the Create React App Docs](https://create-react-app.dev/docs/folder-structure)
- [Available Scripts on the Create React App Docs](https://create-react-app.dev/docs/available-scripts)
- [Adding a Stylesheet on the Create React App Docs](https://create-react-app.dev/docs/adding-a-stylesheet)
- [Adding Images, Fonts and Files on the Create React App Docs](https://create-react-app.dev/docs/adding-images-fonts-and-files)
