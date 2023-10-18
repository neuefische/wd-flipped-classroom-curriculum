# React Basics

> 💡 feel free to create a personal branch of this guide to add your own notes

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
- [ ] Learning how to work with Create React App
- [ ] Understanding rendering with React
- [ ] Briefly introduce `npm` as CLI tool

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

- Modern apps are very complex
- Writing such complex apps in vanilla JavaScript can be very difficult
- React is a library that solves many basic challenges and helps us creating more complex apps more
  easily

### Why is the content of today's block that important for the students?

- We are going to talk about the most fundamental ideas and concepts of React in this lecture

### Pose a question to be answered by the end of the block!

What concepts in React make it easier for us to write better apps?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- JS Basics
- JS Functions
- JS Structure

---

## Inform: Session Guide

### Render Demo

Use this demo on
[🔗 **CodeSandbox**](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/react-basics/demo-render?file=/README.md)
or locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-basics/demo-render -i
```

- [ ] Show that react renders the `<h1>Hello World</h1>` into the `#root` div.
- [ ] Explain that we are not using a template literal in the `render` function, but a JSX
      expression.
  - [ ] JSX is a syntax extension to JavaScript.
- [ ] Explain that it is a way to describe the DOM tree declaratively.
  > 💡 Additional information : A JavaScript compiler (like [babel](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=DwEwlgbgfAEgpgGwQe2AenNIA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.20.6&externalPlugins=&assumptions=%7B%7D)) will compile our JSX into valid JavaScript, then the React library creates or updates DOM nodes.
  - [ ] If what we want to show changes, we give a new description (new JSX) to the render function.
  - [ ] React will then efficiently update the DOM
- [ ] Point out, that we focus on the syntax of JSX for now.
  - [ ] Explain that we can use HTML tags in JSX and nest them as we would do in HTML.

### Demonstrate JSX

- [ ] Change the JSX in the render function to something like:

```jsx
root.render(
  <div>
    <h1>Hello World</h1>
    <p>
      I am rendered by <strong>React</strong>
    </p>
  </div>
);
```

- [ ] Explain (built-in) attributes in JSX
  - [ ] In HTML we can use attributes to add additional information to an element.
  - [ ] In JSX we can use attributes as well.
  - [ ] For example, we can add an `id` attribute to the `<h1>` element and a `className` attribute
        to the `<p>` element.

```jsx
root.render(
  <div>
    <h1 id="greeting">Hello World</h1>
    <p className="intro">
      I am rendered by <strong>React</strong>
    </p>
  </div>
);
```

- [ ] Explain that the `className` attribute is used instead of the `class` attribute.

> 💡 There is a popular myth that `class` is a reserved keyword in JavaScript. **This is not
> true.**  
> [`className` is just the property name the DOM API uses to set the class of an element](https://developer.mozilla.org/en-US/docs/Web/API/Element/className).
> The
> [convention for using the JavaScript-centric DOM API name for properties](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)
> is true for all HTML properties, not just for `class` (use `className` instead) and `for` (use `htmlFor` instead).
>
> This also means that properties need to be camel cased in JSX (e.g. `tabIndex` instead of
> `tabindex` and `readOnly` instead of `readonly`).

## Use values in JSX

- [ ] Explain that we need to insert dynamic values in JSX to build useful app.
  - [ ] Otherwise there would be only static content.
- [ ] In JSX this is done by using curly braces.
  - [ ] Inside curly braces you can put a variable
  - [ ] or any other JavaScript expression (something that resolves to a value: e.g. ternary
        operator is very common)
- [ ] Demonstrate an example like this:

```jsx
const name = "Jane";

root.render(
  <div>
    <h1 id="greeting">Hello {name}</h1>
    <p className="intro">
      I am rendered by <strong>React</strong>
    </p>
  </div>
);
```

## How to create your own components

Open the [Render Demo](#render-demo) again and continue your demonstration.

- [ ] Explain that working with React is all about creating components.
  - [ ] Idea: a component is a part of the UI with encapsulated appearance and logic.
  - [ ] In code: a component is a function that returns JSX.
- [ ] Explain that components can be nested.
  - [ ] A component can be used inside of another component by putting them within the JSX.
  - [ ] It's like creating our own HTML tags, which represent a lot of other HTML tags.
  - [ ] Components are reuseable an can be put into JSX wherever we like.
- [ ] Explain the rules of components.
  - [ ] Function name with uppercase first letter (convention: PascalCase)
  - [ ] Returns JSX (with one root element)

```jsx
function Greeting() {
  const name = "Jane";

  return <h1 id="greeting">Hello {name}</h1>;
}

root.render(
  <div>
    <Greeting />
    <p className="intro">
      I am rendered by <strong>React</strong>
    </p>
  </div>
);
```

:exclamation: Before creating the `App` component inside an `App.js` file, explain that the Render demo does not contain all common react project files as it was reduced on purpose to focus on rendering.

- [ ] point out that students do not need to setup a react project manually and that we are going to use a package for that called create-react-app

### Introduction to Create React App

- [ ] Open the [Create React App website](https://create-react-app.dev/) and show the "Getting
      Started" section
- [ ] explain that there is a simple terminal command which does all the project setup (scaffolding) for us
- [ ] **briefly** explain npx and npm as CLI tools
  - [ ] `npm`: node package manager, comes with `Node.js` (is part of the students mac setups at the beginning of the bootcamp), used to install & manage packages used by an application (e.g. react library itself is a package getting installed via `npm`)
  - [ ] `npx`: node package executor, executes / runs packages once (suitable for packages which you do not need permanently installed)
  - [ ] refer to the handout for more details on npm
  - [ ] Show your terminal, navigate to a suitable folder (or create a new one) and run

```sh
npx create-react-app my-first-react-app
```

- [ ] Go through the output shown by `create-react-app`
- [ ] Start the dev server and demonstrate the working React app in the browser
- [ ] Open the project in VS Code and go through the files, focus on `index.js` and `App.js`
  - [ ] point out that there are some slight differences to the demo before
    - Tests (`App.test.js`, `setUpTests.js`, `reportWebVitals.js`)
    - `App` component being imported and used in `index.js`
- [ ] explain that now that we have an `App.js` file we can adapt it to the render demo before:

  - [ ] remove the boilerplate code in `App` component in `App.js`
  - [ ] copy the `Greeting` component function from the demo before and place it in `App.js`:

```js
function Greeting() {
  const name = "Jane";

  return <h1 id="greeting">Hello {name}</h1>;
}
```

- [ ] adjust the `App` component to:

```js
export default function App() {
  return (
    <div>
      <Greeting />
      <p className="intro">
        I am rendered by <strong>React</strong>
      </p>
    </div>
  );
}
```

---

## React Render vs. innerHTML

Use this demo on
[🔗 **CodeSandbox**](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/react-basics/demo-inner-html-vs-render?file=/README.md)
or locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-basics/demo-inner-html-vs-render -i
```

> 💡 Decide on your experience with the class and if there is enough time left if you want to explain the demo in detail:

- [ ] Show the HTML and the `index.js` file.
  - [ ] We have the same demo implemented twice.
  - [ ] Explain that we have two `div`s.
  - [ ] The first has content created using `innerHTML` and the second has content created using
        React.
  - [ ] Every second (using `setInterval`) we increment a count variable, set `innerHTML` and call
        `render`.
- [ ] Demonstrate that template strings with HTML and JSX look a lot alike.
- [ ] Explain two main differences between JSX and `innerHTML`

  - [ ] No `$` sign in JSX
    - [ ] With template string we used the `$` sign to insert values with string interpolation.
    - [ ] JSX is not a string, so there is no interpolation.
    - [ ] The JSX syntax doesn't use the `$` sign.
  - [ ] Safe insert of dynamic data
    - [ ] With `innerHTML` we need to be cautious with string interpolation.
    - [ ] Dynamic data based on user content could include HTML tags and
          [be unsafe to use](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#replacing_the_contents_of_an_element).
    - [ ] JSX is not a string, so there is no interpolation.
    - [ ] This potential problem doesn't exist in React.
    - [ ] React handles a safe insertion for us in the background.

## Optional deeper comparison: React Render vs. innerHTML

- [ ] Explain that calling `render` with the same JSX will not change the DOM completely.
  - [ ] In that regard it is very different from `innerHTML` which would replace the entire DOM
        tree.
- [ ] Show the full DOM is replaced every second in the `innerHTML` case. (Show the DOM tree in the
      inspector.)
  - [ ] You can make this point clearer by typing into the rendered `<textarea>`.
- [ ] Compare this to the React render case.
  - [ ] Only the count text is updated and the rest of the DOM stays the same.
  - [ ] This means that you can change the text in the `<textarea>` and it will not be replaced.
  - [ ] React is smart enough to only update the parts of the DOM that need to be updated.
  - [ ] In other words, it takes our declarative description of the DOM and efficiently updates the
        actual DOM using imperative DOM manipulation like (`element.classList.add()`,
        `element.append()`, `element.textContent =`, etc.).
  - [ ] Even though both methods are (arguably) declarative. The user experience is very different.

> 💡 You may also point out that the React render case is more efficient. The browser does not need
> to re-parse the HTML and re-create the full DOM tree every second. It only needs to update the
> text. This is not very relevant given the size of the Demo, but can be good to know.

---

Otherwise just run the demo in the browser, inspect and point out the following:

- [ ] the demo visualizes a comparison of DOM manipulation with Vanilla JS (innerHTML) and react rendering
- [ ] for both examples, the DOM is updated every second (by using a timer function)
- [ ] the `textarea` in the `innerHTML` part is blocked, gets cleared because DOM is fully re-parsed every second
- [ ] the `textarea` in the react render case is fully functional, entered text persists
- [ ] expand the DOM tree in inspector and show that react only updates changing parts of the DOM (indicated by a blinking `<p>`-Tag holding the `count` value)

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
