# React Global State

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 1:30     | Session         |
| 1:00     | Active Learning |
| 0:15     | Recap           |

## Learning objectives

- [ ] Reactivating prior knowledge regarding lifting state up and local state
- [ ] Understanding the core concepts of global state management
- [ ] Observing the process of prop drilling and understanding its disadvantages
- [ ] Getting to know alternative global state management solutions that don't require prop drilling
- [ ] Internalizing the core challenges of global state management

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

- [ ] When multiple components need to access **the same state**, we have to manage it in a **centralized location**.

### Why is the content of today's block that important for the students?

A global state solution can be useful for a number of reasons.

- [ ] It's required to preserve state between different pages and in your application.
- [ ] A global state solution can make it easier to manage complex state updates across multiple components
- [ ] Using a global state solution can help you **better manage the state of your React application** and make it easier to build **complex** and **scalable** applications.

### Pose a question to be answered by the end of the block!

How can we migrate our local states to top level components and what are the benefits of doing so?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- React Everything

## Inform: Session Guide

### Recap: Lifting up state & Local state

- [ ] Briefly activate prior knowledge regarding the concept of **"lifting state up"** in React. Remind the students, that **"lifting state up"** describes the process of moving state from a **lower-level component** to a **higher-level component**.
- [ ] Summarize how local state can be a viable option in React as well in certain cases, such as storing information that only needs to be used within a **single component**, and is not needed by any other components in the application.
  > 💡 For example, local state might be used to store a form input value, a toggle for a menu, a timer ...

### Demo: A Global State Solution

Use this demo on
[🔗 **CodeSandbox**](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/react-global-state/demo-start?file=/README.md)
or locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-global-state/demo-start -i
```

You can check out the final version of this demo on
[🔗 **CodeSandbox**](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/react-global-state/demo-end?file=/README.md)
or locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-global-state/demo-end -i
```


### How to start

- [ ] Introduce the students to the general architecture of the application.
- [ ] Show them that the count for each counter is currently declared as local state in the `<Counter />` component.
- [ ] The functions adding to and subtracting from the individual number of animals are declared in the `<Counter />` component as well.
- [ ] The content of the `<Counter />` component is informed by the `animalName` prop.
- [ ] Such as it is, the information stored in the states maintained by the `<Counter />` component is also **only available to said component**.
- [ ] If we're trying to make our information readily available at the top level of our application, we need to make sure that we find a beneficial **data structure** for the data we want to manage globally.

### Onward and Upward ...

- [ ] Open the file `_app.js`.
- [ ] Import `useState`.
- [ ] Create the variable `initialAnimals` above the `App` component function.
- [ ] Explain the shape of the data stored in state:
  - [ ] the goal is to have a single state variable for all animal counters.
  - [ ] we have multiple counters, so we decided to use an array of objects.
  - [ ] each object represents an animal with `id`, `name` and the `counter` value. 
- [ ] Create a state variable `animals` with `initialAnimals` as initial state.
- [ ] This will enable us to refactor our code in a way that makes it more dynamic, such as mapping over our data array in order to create individual components.

```js
const initialAnimals = [
  { id: 1, name: "Cats", count: 0 },
  { id: 2, name: "Dogs", count: 0 },
  { id: 3, name: "Sheep", count: 0 },
  { id: 4, name: "Dragons", count: 0 },
];
```

```js
const [animals, setAnimals] = useState(initialAnimals);
```

- [ ] Now we've got our animal data stored in `animals` and may pass it through our component structure to where we require it first.

### Prop Drilling

- [ ] Showcase the process of passing `animals` through the components of our application from `_app.js` to `CounterList.js`.

pages/_app.js

```jsx
<Component {...pageProps} animals={animals} />
```

pages/counters.js

```jsx
export default function CountersPage({ animals }) {
  return (
    <>
      {/* ... */}
      <CounterList animals={animals} />
      {/* ... */}
    </>
  );
}
```

- [ ] We want to use the array stored in `animals` to render our counters dynamically within our `<CounterList />` component.
- [ ] Pass the `animal` prop to the `<Counter />` component, so we can access the data stored in it.

components/CounterList.js

```jsx
export default function CounterList({ animals }) {
  return (
    <>
      {/* ... */}
      <List>
        {animals.map((animal) => (
          <li key={animal.id}>
            <Counter animal={animal} />
          </li>
        ))}
      </List>
      {/* ... */}
    </>
  )
}
```

- [ ] Inside our `<Counter />` component, replace the destructured `animalName` prop with our `animal` prop.
- [ ] Adjust every instance of `animalName` to be `{animal.name}` in the JSX.

```jsx
<AnimalName>{animal.name}:</AnimalName>
```

- [ ] So far, we've created data available at the top level, passed it through our components, and refactored our code to be more dynamic.
- [ ] The `count` state variable of each rendered `<Counter />` component is still handled locally.
- [ ] As such, we can't access the data required to inform our `<Header />`, `<Footer />` and `index.js`.

### Moving on up, again!

- [ ] We won't be needing our local `count` state variable as well as the `useState` import in our `<Counter />` component anymore.
- [ ] Move the `handleAdd` and `handleSubtract` function to `_app.js`.
- [ ] These functions won't be working as intended (or at all) anymore, since we now need to feed them with additional information to do their job correctly.
- [ ] Refactor the code of the functions to accept an `animalId` argument, which is used to check against the value stored in `animal.id` after mapping over our global `animals` state variable.

pages/_app.js

```js
function handleAdd(animalId) {
  setAnimals(
    animals.map((animal) =>
      animal.id === animalId ? { ...animal, count: animal.count + 1 } : animal
    )
  );
}

function handleSubtract(animalId) {
  setAnimals(
    animals.map((animal) =>
      animal.id === animalId
        ? { ...animal, count: Math.max(0, animal.count - 1) }
        : animal
    )
  );
}
```

- [ ] Now we need to pass these functions as props through our components just as before.

pages/_app.js

```jsx
<Component
  {...pageProps}
  animals={animals}
  handleAdd={handleAdd}
  handleSubtract={handleSubtract}
/>
```

pages/counters.js

```jsx
export default function CountersPage({ animals , handleAdd, handleSubtract}) {
  return (
    <>
      {/* ... */}
      <CounterList
        animals={animals}
        handleAdd={handleAdd}
        handleSubtract={handleSubtract}
      />
      {/* ... */}
    </>
  );
}
```

components/CounterList.js

```jsx
export default function CounterList({ animals, handleAdd, handleSubtract }) {
  return (
    <>
      {/* ... */}
      <Counter 
        animal={animal} 
        onAdd={handleAdd} 
        onSubtract={handleSubtract} 
      />
      {/* ... */}
    </>
  )
}
```
- [ ] Make sure to pass `handleAdd` and `handleSubtract` to the props `onAdd` and `onSubtract` of the `<Counter />`  (prefixed with `on` instead of `handle`).

> 💡 In React, the convention is to prefix the names of event handler functions with "on" to indicate that they are event handlers. For example, a function that handles a click event might be called "onClick". Similarly, a function that handles an "add" event might be called "onAdd". This convention helps to make the code easier to read and understand, because it clearly indicates the purpose of the function.

- [ ] Now we need to replace our `handleAdd` and `handleSubtract` functions with `onAdd` and `onSubtract` respectively, as well as pass the `animal.id` parameter into them.
- [ ] Replace the formerly local `count` variable with our `animal.count` value.
- [ ] Now our counters are back in working order! Amazing!

components/counter.js

```jsx
export default function Counter({ animal, onAdd, onSubtract }) {
  return (
      {/* ... */}
      <button
        onClick={() => onSubtract(animal.id)}
      >
        {/* ... subtract icon ... */}
      </button>
      <span>{animal.count}</span>
      <button
        onClick={() => onAdd(animal.id)}
      >
        {/* ... add icon ... */}
      </button>
    </Container>
  );
}
```

### Available Anywhere

- [ ] With our counter data available at the top level of our application, we can now do some calculations and pass the results to the components that are intending to display them.
- [ ] What we need:
  - [ ] the **current count value** of every animal
  - [ ] the **total count** of all animals
  - [ ] the **count average** of all animals
  - [ ] and the **amount of dragons** specifically
- [ ] Explain that we don't need a new state for these values. They are derived from data that is already stored in state.

Your solution might look something like this:

```js
const animalCounts = animals.map((animal) => animal.count);
const countSum = animalCounts.reduce((a, b) => a + b);
const countAverage = countSum / animals.length;
const dragonCount = animals.find((animal) => animal.name === "Dragons").count;
```

- [ ] Now we need to pass these variables to where we want to **display** them:
  - [ ] in our `<Header />` component
  - [ ] in our `<Footer />` component
  - [ ] ... and finally on our `index.js` page

This is what the `<Layout />` and `<Component />` portion of our `_app.js` file should approximately look like:

```jsx
<Layout dragonCount={dragonCount} countSum={countSum}>
<Component
  {...pageProps}
  animals={animals}
  handleAdd={handleAdd}
  handleSubtract={handleSubtract}
  countSum={countSum}
  countAverage={countAverage}
  dragonCount={dragonCount}
/>
```

- [ ] Once you've passed `countSum` to the `<Header />` component, you need to remove the local `countSum` variable declared as part of the component.
- [ ] The same goes for our `<Footer />` component and `dragonCount`.
- [ ] To display our calculations on our `index.js` page, we need to make sure to pass all required props to our `<CounterStats />` component, which should look like this:

pages/index.js

```jsx
export default function HomePage({countSum, dragonCount, countAverage}) {
return (
    <CounterStats
      countSum={countSum}
      dragonCount={dragonCount}
      countAverage={countAverage}
    />
     {/* ... Link component ... */}
  );
}
```

- [ ] Inside of our `CounterStats.js` file, make sure to remove the local variables just as before after destructuring.
- [ ] **Finally,** play around with the counters and switch between the pages to showcase that everything is working as intended.

### Caveat: The Dangers of Prop Drilling

- [ ] Reminder: Prop drilling is a term used to describe the process of **passing props down through multiple levels of components**
- [ ] This can be problematic because
  - [ ] it makes the code harder to read and understand
  - [ ] can make the application more difficult to maintain
  - [ ] can make it difficult to reuse components, because they may be tied to a specific data structure passed down through props


### Alternatives: State Management Solutions in React

- [ ] React state management solutions are libraries that help manage the data flow in a React application.
- [ ] These solutions make it easier to manage complex, dynamic data in a React application, and can help make the code more modular, reusable, and maintainable.

> 💡 We usually recommend [Zustand](https://github.com/pmndrs/zustand), because it is known for its simplicity and flexibility. Some of the key features that make Zustand a good choice for state management in React include its minimal API, which makes it easy to use and learn, and its ability to persist state across components, which can be useful for building complex, dynamic applications. It also isn't quite as difficult to maintain as Redux, especially for small-scale applications.

- [ ] More advantages of using a state management solution for React are
  - [ ] improve code organization
  - [ ] reduce complexity
  - [ ] make the code easier to maintain and update
  - [ ] clear, centralized way to manage application state
  - [ ] decouple the data from the components, making it easier to reuse components and change the data structure
- [ ] Additionally, many state management solutions for React provide tools for debugging and testing, which can help to identify and fix issues in the code more easily.

### In Summary: No One-Size-Fits-All Approach

- [ ] The main challenge of global state management in React involves choosing an appropriate approach for managing and sharing state between components.
- [ ] Ensuring that your application's global state is consistent and predictable is no easy feat.
- [ ] Using local state management in React can be a good starting point.
- [ ] As your application grows and becomes more complex, however, you may find that it makes sense to scale up to global state management in order to better manage and share state between different components.

## Process: Challenges

- [ ] Provide the [handout](react-global-state.md) and the
      [challenges](challenges-react-global-state.md) to the students
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

Local State, Lifting State Up, Global State Management, Prop Drilling

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
