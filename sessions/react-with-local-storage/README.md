# React with Local Storage

## Active Learning

This is an Active Learning session for the students. That means that the coach assigned to the session only needs to provide a brief 5-10 minute intro. The old session guide is retained below in case it is decided to be used as a one-off.

- [ ] Intro topic for 5 - 10 mins
- [ ] Share [Challenges](challenges-react-with-local-storage.md) with the students.

---

## Active Learning Intro

At the moment, the data we've entered using forms in our apps gets lost when the page is reloaded. Our goal is to understand how to store data in the browser to make it _**persistent**_.

- We can demo this behavior with the Movie App:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-state-3/demo-end
```

- Add a few movies, and then reload the page and they will all vanish 🪄.

- To get the browser to "remember" the data we add to the page, we can use something called _**local storage**_.

- Show an example of a site that uses local storage. i.e. [wordcounter.net](https://wordcounter.net/). Add some words and then refresh the page.

- Show that they can open the dev tools, and navigate to the _**Application tab**_ (chrome) and then inspect the _**Local Storage**_ section.

- Show how these are stored in _**key value**_ pairs.

- _Optionally_ show that we can modify these values as a user. (the modified value will only be displayed on reload)

- _Optionally_ show that the saved values are local to the browser. (i.e. open a different browser (i.e. firefox) and it will have a separate local storage).

- _Optionally_ show that these values are not "saved" in incognito mode.

- Mention that in this session we will learn how to _**write to**_, and _**read from**_ local storage using "vanilla javascript".

- They will also learn how to use local storage within a React application.

---

## Session Guide

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:30     | Session         |
| 1:45     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] Understanding the concept of persistent storage in the browser
- [ ] Knowing the difference between `localStorage` and `sessionStorage`
- [ ] Using the methods `setItem()` and `getItem()`
- [ ] Using a library to handle local storage in React apps

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

All data we entered with any form in any of our apps so far is lost after a page reload. We want to learn how to persist data in the browser.

### Pose a question to be answered by the end of the block!

Which browser feature enables us to store and retrieve data?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- React State

---

## Inform: Session Guide

> 💡 This session uses the `use-local-storage-state` library. Read our [rationale as to why we are not building our own solution in this session](./rationale.md).

### Introduction to Web Storage API

- [ ] Show the [Web Storage API docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) website
- [ ] Explain that it's a mechanism available in any browser to store data
  - [ ] Point out that the data is persistent across page reloads
  - [ ] Point out this is not a React feature, but an API we can use with any JavaScript app in the browser
- [ ] Explain the storage consists of **key/value pairs**
  - [ ] `key`: the name you can choose freely to retrieve your data
  - [ ] `value`: the data to be stored
- [ ] Explain the browser offers two types of storage
  - [ ] `localStorage` stores data with no expiration date
  - [ ] `sessionStorage` stores data for one session (data is lost when the browser tab is closed)
- [ ] Point that out we are going to use `localStorage`, but everything we talk about applies to `sessionStorage` too.

- [ ] Explain the students should imagine a feature where users can define UI settings for an app

  - Like a theme or colors
  - This would be a good use case for local storage

- [ ] Open your browser's dev tools, go to the Local Storage panel (Firefox: _Web Storage_ > _Local Storage_, Chrome: _Application_ > _Local Storage_)
  - [ ] Explain this is a tool to see the data stored in the browser
  - (it might be empty or there might be data stored by MDN already)
- [ ] Open the Console panel in the dev tools and add some data

```js
localStorage.setItem("theme", "dark");
```

- [ ] Explain the syntax:
  - [ ] `localStorage` is a global in the browser that gives us access to the storage
  - [ ] `setItem` lets us add new or overwrite existing data
  - [ ] The first argument is the `key`
  - [ ] The second argument is the `value`
- [ ] Go back to the Local Storage panel and demonstrate the data is stored
  - [ ] Point out the two columns `key` and `value`
- [ ] Reload the browser tab and demonstrate the data is still there
  - Fun fact: the MDN website does actually read the `theme` key after page load and changes the UI :)
- [ ] Go back to the Console panel and read the data

```js
localStorage.getItem("theme");
```

- [ ] Explain the syntax
  - [ ] `getItem` lets us retrieve the stored data
  - [ ] We pass the `key` as argument
- [ ] Demonstrate the string stored earlier gets returned
- [ ] Highlight this `setItem` / `getItem` mechanism works not only in the dev tools. We can use it in our JavaScript or React apps the same way.

- [ ] Demonstrate we can overwrite existing data by calling `setItem` with an existing `key`

```js
localStorage.setItem("theme", "light");
```

- [ ] Go back to the Local Storage panel and demonstrate the data was overwritten
- [ ] Open the JavaScript Console panel and retrieve the data with the API

```js
localStorage.getItem("theme");
```

- [ ] Demonstrate how we **must not** store complex data

```js
localStorage.setItem("settings", { color: "red", font: "arial" });
```

- [ ] Open the Local Storage panel and demonstrate the stored value is `"[object Object]"`
- [ ] Highlight that complex data like objects and arrays need to be serialized before storing (converted to a string representation)
- [ ] Open the JavaScript Console panel and demonstrate we can use `JSON.stringify()` for this

```js
localStorage.setItem(
  "settings",
  JSON.stringify({ color: "red", font: "arial" })
);
```

- [ ] Open the Local Storage panel and demonstrate the stored value in JSON format
- [ ] Open the JavaScript Console panel and demonstrate we retrieve a string when using `getItem`

```js
localStorage.getItem("settings");
```

- [ ] Demonstrate we can use `JSON.parse()` to transform the string in an JavaScript object

```js
JSON.parse(localStorage.getItem("settings"));
```

### Local Storage in React with `use-local-storage-state` hook

Use this demo or locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-with-local-storage/demo-start
```

You can check out the final version of this demo or locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-with-local-storage/demo-end
```

- [ ] Open the demo in the browser and introduce this small Todo App
- [ ] Demonstrate you can add a todo with the input field, like
  - buy milk
  - cleanup kitchen
  - pay bills
- [ ] Demonstrate you can check todos with the checkbox
- [ ] Reload the browser to demonstrate all todos are gone
- [ ] Explain we can persist the todos data in the browser using local storage

- [ ] Open the `App` component and explain the structure:

  - [ ] There are two components: `Form` and `List`
  - [ ] There is one state: `todos`
  - [ ] There is a function to add a new todo: `handleAddTodo`
  - [ ] There is function to toggle the `isChecked` flag of a todo: `handleToggleCheckTodo`
  - [ ] (don't go into detail or show the other components)

- [ ] Explain the basic idea of using local storage in React
  - Initialize the state with data retrieved from local storage
  - When state changes, also write the changes to the local storage
- [ ] Explain that using local storage in React is tricky to get it right
- [ ] Point out that it's advisable to use a library for this

- [ ] Show the [`use-local-storage-state` hook github page](https://github.com/astoilkov/use-local-storage-state)
- [ ] Explain we want to use this library
- [ ] Explain we need to install it first

```sh
npm install use-local-storage-state
```

- [ ] Remove the import of `useState`
- [ ] Add import for `use-local-storage-state`

```jsx
import useLocalStorageState from "use-local-storage-state";
```

- [ ] Comment out the line with `useState` (keep it for comparison)
- [ ] Add a new line with `useLocalStorageState`

```jsx
// const [todos, setTodos] = useState([]);
const [todos, setTodos] = useLocalStorageState("todos", {
  defaultValue: [],
});
```

- [ ] Open the demo in the browser again
- [ ] Add some todos and check a few of them
- [ ] Reload the browser tab and demonstrate the todos are still there, no data is lost

- [ ] **Optional:** You can let the students know that `use-local-storage-state` is what is know as a `custom hook`. Custom hooks, are hooks that we can write ourselves to potentially help DRY up our code (or we can use 3rd party hooks like `use-local-storage-state`). Students interested in the topic can find a [link to plenty of examples at the end of the notes](assets/react-custom-hooks.md).

---

## Process: Challenges

- [ ] Provide the [handout](react-with-local-storage.md) and the
      [challenges](challenges-react-with-local-storage.md) to the students
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

web storage API, localStorage, sessionStorage, setItem(), getItem(), JSON.parse(), JSON.stringify(), use-local-storage-state

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
