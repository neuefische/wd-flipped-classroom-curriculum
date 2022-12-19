# React Props

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] Understanding what props are
- [ ] Understanding how to use props in a component
- [ ] Understanding how to pass props to a component
- [ ] Understanding how to render conditionally

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

Props are a way to pass data to a child component. They are a way to make components reusable.

### Pose a question to be answered by the end of the block!

How can we reuse components and make them more flexible?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- React Basics
- JS Modern Syntax (Desctructuring)
- Conditionals (Ternary operator)

---

## Inform: Session Guide

### What are Props?

- [ ] Explain that as discussed before components are the main building block of React

  - components can be reused in different contexts
  - but that does not help much if every instance (element) created of a component is the same
  - we need a way to customize the component
  - we can do that by passing data to the component

### Props Demo

Use this demo on
[🔗 **CodeSandbox**](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/react-props/demo-start?file=/README.md)
or locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-props/demo-start -i
```

You can check out the final version of this demo on
[🔗 **CodeSandbox**](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/react-props/demo-end?file=/README.md)
or locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-props/demo-end -i
```

### Receiving Props

- [ ] Show that we have a `Pet` component that renders `<div>Meow 🐈</div>`.
- [ ] Show that the pet component is used in the `App` component three times.
- [ ] Explain, that we want to make the component more flexible by passing the animal sound and the animal emoji as props.
- [ ] Explain that the component function receives the props as the first parameter.

- [ ] Change the `Pet` component to receive the props as a parameter and use them in the JSX.

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

- [ ] Change the `App` component to pass the props to the `Pet` component.

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

- [ ] Explain that

  - the names of the props is arbitrary and can be chosen freely.
  - the props parameter is an object containing all the props passed to the component.
  - props are passed as arguments when creating the element in JSX.
  - props are passed from parent to child (top-down and uni-directional).
  - props can be of any type (string, number, array, object, function, ...).

### Destructuring Props

- [ ] Explain that we can use destructuring for the props parameter to make the code more readable.

  - we can destructure the props object in the function parameter.
  - we can then use the props directly in the JSX.
  - destructuring is a JavaScript feature and not specific to React.

- [ ] Change the `Pet` component to use destructuring for the props parameter.

  ```js
  function Pet({ sound, emoji }) {
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

- [ ] Note that destructuring the props parameter is the way we are going to do it throughout this course.

### Functions as Props and Event Handlers

- [ ] Explain that we want to be able to pet the pets by clicking on them.

  - we can do that by passing a function as a prop.
  - we can then call that function when the pet is clicked.

- [ ] Change the `Pet` component to receive the `onPet` prop and call it when the pet is clicked.

  ```js
  function Pet({ sound, emoji, onPet }) {
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

- [ ] Change the `App` component to pass the `onPet` prop to the `Pet` component.

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

- [ ] Explain that

  - the `onPet` prop has a custom name and takes a function.
  - `onXYZ` is a common naming convention for custom events and makes clear that the prop is a function.
  - `handleXYZ` is a common naming convention for event handler functions and makes clear that the function handles an event.
  - we can pass the function as a prop to the `Pet` component. (We don't call it, we just pass it! Notice that there is no `()` at the end of the function name.)
  - `onClick` is a special prop that is used to pass a function that is called when the element is clicked.
    - React adds an event listener to the element and calls the function when the element is clicked in the background.
    - Other special props are `onChange`, `onSubmit`, `onMouseEnter`, `onMouseLeave`, `onFocus`, `onBlur`, ...
    - They only work on build-in elements.

- [ ] Show that the function is called when the pet is clicked. (Open the console in the browser)
- [ ] Explain that passing a function as a prop is a common pattern in React.
  - It is a way for child components to communicate with their parents.

### Boolean Props and Conditional Rendering

- [ ] Explain that we want the pets to say "Feed me!" if they are hungry.

  - we can do that by passing a boolean as a prop.
  - we can then use that boolean to render the sound conditionally.

- [ ] Change the `Pet` component to receive the `isHungry` prop and render the sound string conditionally.

  ```js
  function Pet({ sound, emoji, onPet, isHungry }) {
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

- [ ] Change the `App` component to pass the `isHungry` prop to the `Pet` component.

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

- [ ] Explain that

  - the `isHungry` prop has a custom name and takes a boolean.
  - `isXYZ`, `hasXYZ` or `shouldXYZ` naming conventions are common for boolean props.
  - we can pass the boolean as a prop to the `Pet` component.
  - we can use the boolean to render the sound conditionally.
  - we can use the ternary operator to render the sound conditionally because it is a JavaScript expression.
  - we can not use an `if` statement in JSX (only expressions are allowed in JSX).

### Optional: Shorthand for Boolean Props

- [ ] Explain that there is a shorthand for boolean props.

  - if the prop is `true` we can just pass the prop name, it will be `true` within the component.
  - if the prop is `false` we can omit the prop, it then defaults to `undefined` which is falsy.

- [ ] Change the `App` component to use the shorthand for the `isHungry` prop.

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

---

## Process: Challenges

- [ ] Provide the [handout](react-props.md) and the [challenges](challenges-react-props.md) to the
      students
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

Props, Conditional Rendering, Boolean Props, Destructuring

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
