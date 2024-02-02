# React Effects and Fetch

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] Knowing that `fetch` is side effect
- [ ] Knowing how to use the `useEffect` hook
- [ ] Understanding the callback function of `useEffect`
- [ ] Understanding the dependency array of `useEffect`

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

We want to connect our React apps to APIs and load data with `fetch`.

### Pose a question to be answered by the end of the block!

Why is `fetch` a side effect and how can we use it in React?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- JS Fetch
- React State

---

## Inform: Session Guide

Use this demo by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-effects-and-fetch/demo-start
```

You can check out the final version of this demo by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-effects-and-fetch/demo-end
```

### Introduce the Bad Jokes API

- [ ] Open the following API URL in the browser
- [ ] Mention this an example API that returns bad jokes
- [ ] Explain this API returns one joke at a time, based on the `id` given at the end of the URL
- [ ] Change the `id` to demonstrate the API returns a different joke (id: 0, 1, 2, ... 14)

```
https://example-apis.vercel.app/api/bad-jokes/0
```

- [ ] Explain that we like to write a React app that does exactly this: load and display different jokes

### Effects in React

- [ ] Explain that we already learned how to load data from an API in JavaScript: `fetch`
- [ ] Point out that the data fetching itself works the same in React as in vanilla JavaScript
- [ ] Highlight that we need to call `fetch` in React in a special way because it's a `side effect` - because it connects our app with an external system outside of React.
- [ ] Point out that React components are required to be `pure functions`
  - A React component receives data (state or props) and returns JSX
  - It always returns the same result with the same input
  - Like in math: `2 + 3` always equals `5`
- [ ] Explain that pure functions - per definition - `cannot have side effects`
  - Connecting to a server that might not be reachable or returns changed data is `not pure`
  - The result would differ based on an external system outside of the component
  - Therefore, it is a side effect
- [ ] Explain a side effect can't happen during rendering of a component (the executed code on the top level of your component).
  - It would lead to unexpected behavior: like executing the side effect to often (with every render) or causing to many state updates, even infinite rendering loops.
- [ ] Explain that React offers some `"escape hatches"`. They allow you to `"step outside"` of React and connect to an external system.
  - [ ] Explain that the `useEffect` hook is one them
  - [ ] Explain that `useEffect` lets you write an effect (a function) that runs some code after React has rendered a component on the screen.
  - [ ] Highlight we can control precisely when this effect should run again
  - [ ] Point out we can use `useEffect` to call `fetch`

### Fetching a joke

- [ ] Open the `Joke` component
- [ ] Create a state to store the result of the fetch (don't forget to import `useState`)

```jsx
const [joke, setJoke] = useState();
```

- [ ] Explain we are going to use `fetch` as we have used it before.
- [ ] Point out there is nothing special about using fetch in React
- [ ] Mention we don't care about error handling right now to keep the example simple
- [ ] Write an `async` function `startFetching` with the `fetch` logic inside
- [ ] Update the state using `setJoke` with the data
- [ ] Call `startFetching`

```jsx
async function startFetching() {
  const response = await fetch(
    "https://example-apis.vercel.app/api/bad-jokes/0"
  );
  const joke = await response.json();

  setJoke(joke);
}
startFetching();
```

- [ ] Explain that this is a side effect. To handle this side effect, we need to use the `useEffect` hook
- [ ] Point out we need `useEffect` to control when this effect should run. Without `useEffect` it would fetch data again with every re-render of the component.
- [ ] Wrap the `useEffect` hook around the code before **without** using a dependency array (don't forget to import `useEffect`)
- [ ] Explain that the first argument of `useEffect` is a callback function. We can write the side effect in this function.
- [ ] Point out the idea is to simply wrap the `useEffect` hook around our side effect

```jsx
useEffect(() => {
  async function startFetching() {
    // ...
  }
  startFetching();
});
```

- [ ] Mention that loading data via the network takes some time. We don't want the component to render anything when the data is not loaded yet.
  - [ ] Add the following code **below** the `useEffect`:

```jsx
if (!joke) {
  return null;
}
```

- [ ] Replace the static text in the headline with a value from the state.

```jsx
<h1>{joke.joke}</h1>
```

- [ ] Open the browser and demonstrate that the joke is displayed

### Dependency array

- [ ] Open the dev tools network panel and demonstrate that the browser is constantly loading data
- [ ] (maybe close the tab to not kill the browser)
- [ ] Highlight that we forgot a very important step: We need to control when the effect should be executed.
- [ ] Explain that `useEffect` accepts a dependency array for this purpose
- [ ] Point out, that a dependency array should always be defined. Without a dependency array the effect runs every time `any` state in the component changes.
- [ ] Explain that this is what happens right now
  - React displays the component on the screen for the first time
  - This initial render will always trigger the effect to run
  - The data is fetched
  - We `update the state` by calling `setJoke`
  - This will trigger a re-render
  - After the re-render the effect is executed again because a state changed
  - The effect will load data and update the state again
  - This will trigger a re-render and the effect execution again
  - And so on ... it's an endless loop
- Point out we can and should always control when a effect is executed by using the dependency array
- Explain an `empty dependency array` tells React to run this effect only once: when the component appears on the screen for the first time.
- Add an empty dependency array to the effect

```jsx
useEffect(() => {
  // ...
}, []);
```

- Open the browser and show that the joke is displayed
- Open the dev tools panel and demonstrate we don't fetch endlessly anymore

> 💡 You might want to mention that we see the request two times. This is due to React StrictMode, which renders the App twice.

### Fetching different jokes

- [ ] Explain we can use the dependency array to control that the effect should be executed when specific data changes: like state or props
- [ ] Mention this is what we want to do next
- [ ] Show the `button` in the JSX and point out there is no event attached yet. We want to use this button to change the displayed joke
- [ ] Create a new state for the `id` of the joke with `0` as initial value

```jsx
const [id, setId] = useState(0);
```

- [ ] Change the URL for `fetch`: use a template literal and interpolate the `id` at the end

```jsx
const response = await fetch(
  `https://example-apis.vercel.app/api/bad-jokes/${id}`
);
```

- [ ] Explain now we want the effect to run when the `id` changes
- [ ] Add the `id` as dependency to the effect

```jsx
useEffect(() => {
  // ...
}, [id]);
```

- [ ] Add an `onClick` event listener to the `button`
  > 💡 The API returns a `nextId` property that you can use to set the next id.

```jsx
<button type="button" onClick={() => setId(joke.nextId)}>
  Next Joke
</button>
```

- Open the browser and demonstrate that clicking on the button will change the joke
- Open the dev tools panel and demonstrate there is a network request when we click on the button

---

## Process: Challenges

- [ ] Provide the [handout](react-effects-and-fetch.md) and the
      [challenges](challenges-react-effects-and-fetch.md) to the students
- [ ] Open the handout and walk the students through the tasks
- [ ] Divide the students into groups
- [ ] Remind them of the ground rules:
  - meet again 30 min before lunch break in the class room
  - they can ask the coaches for help at any time
  - always try to help each other
  - take a break within the next 1.5 hrs
  - keep an eye on Slack

### Solutions for the challenges as a video playlist

> 💡 There is a video playlist with solutions for the challenges which you can share with the students after the session:

[🎬 Solutions Videos Playlist](https://www.youtube.com/playlist?list=PLSizAuhe-ZaN0ciOHgjDNpm6i6ESSovIF)

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

fetch, side effect, useEffect, dependency array, cleanup function

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
