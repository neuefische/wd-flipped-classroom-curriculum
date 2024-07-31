# React State 1

## Learning objectives

- Knowing how to attach events ins React
- Understanding the concept of "state"
- Using `useState()` to handle state in React
- Understanding the React Lifecycle

---

Until now our React apps are static. To create useful apps, we are going to learn how to add
interaction.

### Question

How does React handle events and changes to the UI?

---

### Required

- JS Basics
- React Basics

Demo Start:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-state-1/demo-counter-start
```

Demo End:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-state-1/demo-counter-end
```

---

## Session Guide

### A Naive Approach to State

- Explain that our goal is for the number on the button to increase by one every time we click
  it.

- Ask students to think about what they would need to do to achieve this goal. Collect some of
  the ideas. Possible answers:

  - a variable that stores the current count
  - a function that increases the count
  - an event handler that calls the function when the button is clicked
  - the variable needs to be displayed on the button

  > 💡 If someone mentions State (or `useState`, etc.) at this point, tell them that this is exactly
  > what we will learn today, but we will take a quick detour before we get there.

- Add a variable `let count = 0;` to the `Counter` component and use it to display the current
  count on the button.

  - we use `let` because we want to change the value of `count` later

  ```js
  function Counter() {
    let count = 0;
    return <button>You have clicked the button {count} times</button>;
  }
  ```

- Demonstrate the variable is actually shown on the button by changing the value of
  `let count = 0;` to `let count = 1337;` and see that the button text changes.

- Explain that we want to increase the count by one every time we click the button, for which we
  need a function that is called when the button is clicked. We can use the `onClick` prop for
  that:

- Explain that using the `onClick` prop is the React equivalent of using
  `addEventListener("click", ()=>{})` in vanilla JS. In React we add all event listeners with an
  `on*` prop.

  ```js
  function Counter() {
    let count = 0;
    return (
      <button
        onClick={() => {
          console.log("button click");
        }}
      >
        You have clicked the button {count} times
      </button>
    );
  }
  ```

  > 💡 You can also use a separate `handleClick` function for the `onClick` handler if you prefer.

- Show that the 'button click' message is printed to the console when we click the button.

- We now want to actually increment the counter. Let's try incrementing the count variable
  directly:

  ```js
  function Counter() {
    let count = 0;
    return (
      <button
        onClick={() => {
          count = count + 1;
        }}
      >
        You have clicked the button {count} times
      </button>
    );
  }
  ```

- Show that this is not working as expected. Let students ponder for a moment before explaining
  that this does not work because React does not know that the count has changed and therefore
  does not update the button text.

### React Lifecycle

- Explain that React itself controls when the UI is updated. Everytime React thinks that any
  part of the UI needs to be updated, it calls the corresponding component function.
- Until now we were fine with every component function being only called once per element
  (component instance) because our App was static: it never changed.
- Now that we want to update the UI (when the button is clicked), we need to tell React that it
  needs to call the component function again, so we can see the updated _state_.
- Using a special _setter_ function that we will see in a moment, we can tell React that the
  state has changed. (In our case that will be that changed `count` value.)
- Each time the component function is called, all of its variables (props and state) are
  conceptually frozen in time. We can think of them as being read-only.

> 🎞️ Here is an analogy you might find useful:
>
> Imagine the app as a movie. Movies consist of a series of frames. Each frame is a snapshot of the
> movie at a certain point in time. It's contents are frozen in time.
>
> Each time the component function is called it is like a frame of the movie. The props and state
> are like the contents of the frame. They are frozen in time.

### React State

- Explain that React handles state using special state variables. Each state variable has a
  value and a setter function. The value is the current state and the setter function is used to
  update the state. Once we call the setter function, React knows that the state has changed.

- Import and implement `useState`. Explain that `useState` is the way React defines state
  variables: "We want to use state, so we need to `useState`"

- Do **not** go into depth about the destructuring syntax

  ```js
  import { useState } from "react";

  function Counter() {
    const [count, setCount] = useState(0);
    return (
      <button
        onClick={() => {
          count = count + 1;
        }}
      >
        You have clicked the button {count} times
      </button>
    );
  }
  ```

  > 💡 Do not worry about the exact syntax of the `useState` hook for now. If you want you can talk
  > about it being a hook, but that's not really important for now.

- Explain that `xyz` and `setXyz` are the preferred naming convention for the state variable and
  the setter function.

- Explain that the `useState` function takes the initial value of the state variable as an
  argument. In our case we want the initial value to be `0`.

- Show that this code is still not working. In fact, we have changed `count` to be a _constant_
  (using `const` instead of `let`) and get an error when we try to change it.

- Explain that this is actually a good thing because it means that we are not accidentally
  changing the state variable. Remember: The state variable is frozen in time.

- Fix the error by changing `count =` to `setCount()` in the `onClick` handler:

  ```js
  import { useState } from "react";

  function Counter() {
    const [count, setCount] = useState(0);
    return (
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        You have clicked the button {count} times
      </button>
    );
  }
  ```

- Explain that we pass the new value of the state variable to the setter function. In our case
  we want to increase the count by one, so we pass `count + 1`.

- Show that the button text is now updated when we click it. Success! 🎉

- Repeat the points from the [React Lifecycle](#react-lifecycle) section to explain what is
  happening now that we have the actual code.

> 💡 A point you might already want to bring up is that setter function should only be called
> as a reaction to an event (like a click, submit or finished network requests). It's bad practice to
> call a setter function directly inside the component function. ([There are some rare exceptions to this when resseting part of the state.](https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes))

### State is local to component instance

- Mention that we can place a component multiple times in our app

- Explain that state is local to each individual instance of a component. Changing a state will
  only effect this specific component instance

- Demonstrate this placing three instances of the `Counter` in the `App` component and click the
  buttons

```js
export default function App() {
  return (
    <>
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}
```

### Components can have multiple state with different data types

Use this second demo or locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-state-1/demo-food-order-start
```

You can check out the final version of this demo by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-state-1/demo-food-order-end
```

- Explain that component can have multiple states (multiple calls of `useState`)

- Explain that we can store all kinds of data in state (like booleans, numbers, strings, objects
  or arrays).

- Demonstrate both aspects by adding state to the `FoodOrder` component (don't forget to import
  `useState`)

```js
const [food, setFood] = useState("❓");
const [vegan, setVegan] = useState(true);
```

- Call the `set` function on button click

```jsx
<button onClick={() => setFood("🍔")}>
	<span role="img" aria-label="A hamburger">🍔</span>
</button>
<button onClick={() => setFood("🍕")}>
	<span role="img" aria-label="A pizza">🍕</span>
</button>
<button onClick={() => setFood("🌮")}>
	<span role="img" aria-label="A taco">🌮</span>
</button>
```

```js
<button onClick={() => setVegan(!vegan)}> ... </button>
```

---
