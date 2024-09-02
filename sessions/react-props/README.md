# React Props

## Learning Objectives

- Understanding what props are
- Understanding how to use props in a component
- Understanding how to pass props to a component
- Understanding how to render conditionally

## Requirements

- React Basics
- JS Conditions and Booleans
- JS Modern Syntax

## Demo

### Start

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-props/demo-start
```

### End

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-props/demo-end
```

---

## Session Guide

Props allow us to pass data to a child component, making components reusable and more flexible. By understanding how to work with props, we can enhance the modularity and functionality of our React components.

> How can you reuse components and make them more flexible?

### What are Props?

- Explain that as discussed before components are the main building blocks of React:

  - Components can be reused in different contexts.
  - However, that does not help much if every instance (element) created of a component is the same.
  - We need a way to customize the component.
  - We can do that by passing data to the component through props.

### Receiving Props

- Show that we have a `Pet` component that renders `<div>Meow 🐈</div>`.
- Show that the `Pet` component is used in the `App` component three times.
- Explain, that we want to make the component more flexible by passing the animal sound and the animal emoji as props.
- Explain that the component function receives the props as the first parameter.

- Change the `Pet` component to receive the props as a parameter and use them in the JSX:

  ```jsx
  function Pet(props) {
    return (
      <div>
        {props.sound}{" "}
        <span role="img" aria-label={props.name}>
          {props.emoji}
        </span>
      </div>
    );
  }
  ```

- Change the `App` component to pass the props to the `Pet` component:

  ```jsx
  function App() {
    return (
      <div>
        <Pet sound="Meow" emoji="🐈" name="cat" />
        <Pet sound="Woof" emoji="🐕" name="dog" />
        <Pet sound="Squeak" emoji="🐁" name="mouse" />
      </div>
    );
  }
  ```

- Explain the following points:

  - Prop names are arbitrary and can be chosen freely.
  - The props parameter is an object containing all the props passed to the component.
  - Props are passed as arguments when creating the element in JSX.
  - Props are passed from parent to child (top-down and uni-directional).
  - Props can be of any type (string, number, array, object, function, ...).

### Destructuring Props

- Explain that we can use destructuring for the props parameter to make the code more readable:

  - We can destructure the props object in the function parameter.
  - We can then use the props directly in the JSX.
  - Destructuring is a JavaScript feature and not specific to React.

- Change the `Pet` component to use destructuring for the props parameter:

  ```js
  function Pet({ sound, emoji, name }) {
    return (
      <div>
        {sound}{" "}
        <span role="img" aria-label={name}>
          {emoji}
        </span>
      </div>
    );
  }
  ```

- Note that destructuring the props parameter is the way we are going to do it throughout this course.

### Functions as Props and Event Handlers

- Explain that we want to be able to pet the pets by clicking on them:

  - We can do that by passing a function as a prop.
  - We can then call that function when the pet is clicked.

- Change the `Pet` component to receive the `onPet` prop and call it when the pet is clicked.

  ```js
  function Pet({ sound, emoji, name, onPet }) {
    return (
      <div onClick={onPet}>
        {sound}{" "}
        <span role="img" aria-label={name}>
          {emoji}
        </span>
      </div>
    );
  }
  ```

  > 💡 `onClick` works on any element. It is bad practice to use it on a `div` though because it is not accessible. We will keep the `div` for now to keep the demo simple, but feel free to use a `button` instead.

- Change the `App` component to pass the `onPet` prop to the `Pet` component:

  ```js
  function App() {
    function handlePet() {
      console.log("Thanks for petting me!");
    }

    return (
      <div>
        <Pet sound="Meow" emoji="🐈" name="cat" onPet={handlePet} />
        <Pet sound="Woof" emoji="🐕" name="dog" onPet={handlePet} />
        <Pet sound="Squeak" emoji="🐁" name="mouse" onPet={handlePet} />
      </div>
    );
  }
  ```

- Explain that:

  - The `onPet` prop has a custom name and takes a function.
  - `onXYZ` is a common naming convention for custom events and makes clear that the prop is a function.
  - `handleXYZ` is a common naming convention for event handler functions and makes clear that the function handles an event.
  - We can pass the function as a prop to the `Pet` component. (We don't call it, we just pass it! Notice that there is no `()` at the end of the function name.)
  - `onClick` is a special prop that is used to pass a function that is called when the element is clicked.
    - React adds an event listener to the element and calls the function when the element is clicked in the background.
    - Other special props are `onChange`, `onSubmit`, `onMouseEnter`, `onMouseLeave`, `onFocus`, `onBlur`, ...
    - They only work on built-in elements.

- Show that the function is called when the pet is clicked. (Open the console in the browser.)
- Explain that passing a function as a prop is a common pattern in React.
  - It is a way for child components to communicate with their parents.

### Boolean Props and Conditional Rendering

- Explain that we want the pets to say "Feed me!" if they are hungry.

  - We can do that by passing a boolean as a prop.
  - We can then use that boolean to render the sound conditionally.

- Change the `Pet` component to receive the `isHungry` prop and render the sound string conditionally:

  ```js
  function Pet({ sound, emoji, name, onPet, isHungry }) {
    return (
      <div onClick={onPet}>
        {isHungry ? "Feed me!" : sound}{" "}
        <span role="img" aria-label={name}>
          {emoji}
        </span>
      </div>
    );
  }
  ```

- Change the `App` component to pass the `isHungry` prop to the `Pet` component:

  ```js
  function App() {
    function handlePet() {
      console.log("Thanks for petting me!");
    }

    return (
      <div>
        <Pet
          sound="Meow"
          emoji="🐈"
          name="cat"
          onPet={handlePet}
          isHungry={true}
        />
        <Pet
          sound="Woof"
          emoji="🐕"
          name="dog"
          onPet={handlePet}
          isHungry={false}
        />
        <Pet
          sound="Squeak"
          emoji="🐁"
          name="mouse"
          onPet={handlePet}
          isHungry={false}
        />
      </div>
    );
  }
  ```

- Explain that:

  - The `isHungry` prop has a custom name and takes a boolean.
  - `isXYZ`, `hasXYZ` or `shouldXYZ` naming conventions are common for boolean props.
  - We can pass the boolean as a prop to the `Pet` component.
  - We can use the boolean to render the sound conditionally.
  - We can use the ternary operator to render the sound conditionally because it is a JavaScript expression.
  - We can not use an `if` statement in JSX (only expressions are allowed in JSX).

### Optional: Shorthand for Boolean Props

- Explain that there is a shorthand for boolean props:

  - If the prop is `true` we can just pass the prop name, it will be `true` within the component.
  - If the prop is `false` we can omit the prop, it then defaults to `undefined` which is falsy.

- Change the `App` component to use the shorthand for the `isHungry` prop:

  ```js
  function App() {
    function handlePet() {
      console.log("Thanks for petting me!");
    }

    return (
      <div>
        <Pet sound="Meow" emoji="🐈" name="cat" onPet={handlePet} isHungry />
        <Pet sound="Woof" emoji="🐕" name="dog" onPet={handlePet} />
        <Pet sound="Squeak" emoji="🐁" name="mouse" onPet={handlePet} />
      </div>
    );
  }
  ```
