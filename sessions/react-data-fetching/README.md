# React Data Fetching

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] Understanding the advantages of a fetching library in general
- [ ] Knowing how to fetch with `SWR`:
  - `fetcher` function
  - loading and validating state
  - error state
  - fetching on interval
  - `mutate()`
- [ ] Knowing how to combine local state with fetched data

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

Our custom data fetching solutions are missing quite a few very important features like error handling, refetching, loading states, caching and handling race conditions. We will learn how to use the SWR library to solve these issues.

Additionally we will learn how to connect local state to the data we fetched without duplicating state.

### Pose a question to be answered by the end of the block!

Think about the **React Effects and Fetch** session. Do you remember which flaws we talked about when we implemented our custom fetching solution?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- React Effects and State
- React Custom Hooks

---

## Inform: Session Guide

### Demo

Use this demo locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-data-fetching/demo-start -i
```

You can check out the final version of this demo locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-data-fetching/demo-end -i
```

> 💡 This demo is a continuation of the **React Effects and Fetch** and **React Custom Hooks** session demos. It aims to replace the custom `useFetch` hook with `useSWR` before adding some additional local state to enrich the app.

### Recap: Fetching Data in React

- [ ] Remind students how to fetch data in React using Effects and State.
- [ ] Open the `Joke` Component in the demo and show how it works.
- [ ] Remind students that with our naive implementation we are not handling a few core things:
  - [ ] Error handling
  - [ ] Refetching (neither manually nor on a timer)
  - [ ] Loading state
  - [ ] Caching
  - [ ] Race conditions
- [ ] Explain that while we could implement all of these things ourselves (given a large amount of time), there are libraries that help us with this.
- [ ] When clicking through the demo, point out that the `id` from state and the actually shown data are not in sync. This is because the `id` is updated before the data is fetched.

### SWR

- [ ] Open the [SWR homepage](https://swr.vercel.app/) and explain what it is.
  - [ ] It's a data fetching library that helps us with all of the things we just mentioned.
  - [ ] It's implemented using React Hooks.
  - [ ] It can work with more than just the `fetch` API (axios, GraphQL, etc.) but we will focus on `fetch` for now.
  - [ ] SWR stands for "stale while revalidate" which is a caching strategy that enables great UX: Show the cached (_stale_) data _while_ loading (_revalidating_) the new data.
  - [ ] SWR is made by Vercel (the company behind Next.js) which means that is very well integrated with Next.js. (It works with any React app though.)

### `useSWR`

- [ ] In the demo install SWR
  ```
  npm install swr
  ```
- [ ] Open the `Joke` Component and import `useSWR` from `swr`.
  ```js
  import useSWR from "swr";
  ```
- [ ] Replace the usage of our custom `useFetch` hook inside the component function with `useSWR`.
  ```js
  const { data } = useSWR(
    `https://example-apis.vercel.app/api/bad-jokes/${id}`
  );
  ```
- [ ] Delete the now unused function `useFetch`
- [ ] Start the app and demonstrate it doesn't work yet. We only see `Loading...` in the UI. No request to the API is started. This is because SWR expects us to give it a fetcher function that it can use to actually fetch the data.
- [ ] Show that we can copy the fetcher function directly from the SWR docs. It's just a wrapper around `fetch` but we should not think about it too much. Copy it **above** the `Joke` component function (**not inside**)
  ```js
  const fetcher = (url) => fetch(url).then((r) => r.json());
  ```
- [ ] Add the fetcher function to the `useSWR` hook.
  ```js
  const { data } = useSWR(
    `https://example-apis.vercel.app/api/bad-jokes/${id}`,
    fetcher
  );
  ```
- [ ] Show that the app now works as expected.
- [ ] Compare the behavior of the application to before. We have flashes of no data when the `id` changes but the data is not yet fetched. Only after the data is fetched we see the new joke. This way the local `id` state and the fetched data are always in sync.
- [ ] Show (by clicking the Prev/Next buttons) that the data is **cached** and we don't see the loading state when we click through jokes we have already loaded.
- [ ] You can open the Browser DevTools and check the Network tab to see that even though the data is cached, SWR still revalidates the data in the background. This is what the "stale while revalidate" strategy is all about.

> 💡 The hook also returns an `isLoading`, `isValidating` and `error` property. We can use these to show an initial loading state and an error state. We can also use `isValidating` to show a "loading" state while the data is being revalidated in the background. You can briefly talk about this but we will not implement it in the demo. For more information refer students to the handout.

### `SWRConfig`

- [ ] Explain that we can set the fetcher function application-wide using the `SWRConfig` component. This way it does not need to be passed to every `useSWR` hook which can be a bit tedious.
- [ ] Open the `App` component (`pages/_app.js`) and import `SWRConfig` from `swr`.
  ```js
  import { SWRConfig } from "swr";
  ```
- [ ] Add the fetcher function above the `App` component function to the `pages/_app.js` file.
  ```js
  const fetcher = (url) => fetch(url).then((r) => r.json());
  ```
- [ ] Wrap the `Component` in the `SWRConfig` component.
  ```js
  <SWRConfig value={{ fetcher }}>
    <Component {...pageProps} />
  </SWRConfig>
  ```
- [ ] Explain that this will make the fetcher available to all components that are children of the `App` component which means all pages and components on them in the Next.js application.
- [ ] Remove the fetcher function from the `useSWR` hook in the `Joke` component.
  ```js
  const { data } = useSWR(
    `https://example-apis.vercel.app/api/bad-jokes/${id}`
  );
  ```
- [ ] Show that the app still works as expected.

### Combine Fetched Data with Local State

> 💡 The following explanation is only one of many ways to combine fetched data with local state. This pattern will help students with the next recap project. The handout contains a detailed explanation of this pattern.
>
> If you are very short on time, or if you feel that this is too much for the students, you can consider skipping this part. It will be needed for the next recap project but the students will have the handout to refer to.

- [ ] Explain that in SWR we don't control the state containing the fetched data ourself.
- [ ] Because of this we can't modify the state directly. This is a **good thing** because modifying state that has been fetched from a server is an anti-pattern. Server data should be the single source of truth.

- [ ] Explain that if we want to enrich server data with local state (like attaching an `isFunny` property to a joke) we can use the `useSWR` hook to fetch the data and the `useState` hook to manage the local state. The local state should be connected to the server data via a unique identifier (like the `id` of the joke).

- [ ] Explain that to do so, we are going to create a new local state containing an array for joke extra information. We will use the `id` of the joke as the key to identify the extra information for a joke.

  > 💡 For consistency, we will call the local state array `xyzInfo` (e.g. `jokesInfo` or `moviesInfo`) and a single element from the array `info` in all our material.

- [ ] Open the `Joke` Component; create a new state variable `jokesInfo` and a setter function `setJokesInfo` using `useState`. Initialize the state with an empty array.

  ```js
  const [jokesInfo, setJokesInfo] = useState([]);
  ```

- [ ] Explain that we are going to use the `id` of the joke to identify the extra information for a joke. We will use the `find` method on the `jokesInfo` array to find the extra information for a joke. If we don't find any extra information we will return a default object (using `??`). This means that we are only creating entries in our `jokesInfo` array when we need them.
  ```js
  const info = jokesInfo.find((info) => info.id === id) ?? {
    isFunny: false,
  };
  ```
- [ ] Since in our example we are only interested in the `isFunny` property of the extra information we can destructure it from the `info` object directly.
  ```js
  const { isFunny } = info;
  ```
- [ ] Explain that we can now use the `isFunny` state to render the joke differently depending on whether it is funny or not. Change the `h1` to include a "funny" emoji and add a button to toggle the `isFunny` state below it. The full return statement should look something like this:

  ```js
  return (
    <>
      <small>ID: {id}</small>
      <h1>
        {data.joke}{" "}
        <span
          role="img"
          aria-label={isFunny ? "A laughing face" : "An unamused face"}
        >
          {isFunny ? "🤣" : "😒"}
        </span>
      </h1>
      <div>
        <button
          type="button"
          onClick={() => {
            console.log("toggle isFunny");
          }}
        >
          {isFunny ? "Stop laughing" : "Start laughing"}
        </button>
      </div>
      <div>
        <button type="button" onClick={handlePrevJoke}>
          ← Prev Joke
        </button>
        <button type="button" onClick={handleNextJoke}>
          Next Joke →
        </button>
      </div>
    </>
  );
  ```

- [ ] Explain that currently the `jokesInfo` array is always empty, thus all jokes are rendered as "not funny".
- [ ] To mark a joke as funny we need to implement a `handleToggleFunny` function that takes an `id` and updates the `jokesInfo` array. Add the function above the `return` statement.
  ```js
  function handleToggleFunny(id) {
    console.log("toggle isFunny");
  }
  ```
- [ ] Call the `handleToggleFunny` function with the current `id` when the button is clicked.
  ```js
  <button
    type="button"
    onClick={() => {
      handleToggleFunny(id);
    }}
  >
    {isFunny ? "Stop laughing" : "Start laughing"}
  </button>
  ```
- [ ] Explain that in our update function we need to perform one of two operations, depending on the context:
  1. If the joke info already exists in the `jokesInfo` array we need to update the `isFunny` property.
  2. If the joke info doesn't exist in the `jokesInfo` array we need to add it to the array with the `isFunny` property set to `true`.
- [ ] In the `handleToggleFunny` function we want to set a new value for the `jokesInfo` state, thus we call the state setter and pass it an updater function. The updater function will receive the current value of the `jokesInfo` state as an argument. The updater function should return the new value for the `jokesInfo` state.
  ```js
  function handleToggleFunny(id) {
    setJokesInfo((jokesInfo) => {
      // …
    });
  }
  ```
- [ ] Explain that to figure out if the the joke info already exists in the `jokesInfo` array we can use the `find` method. It either return the joke info or `undefined` if it doesn't exist.

  ```js
  function handleToggleFunny(id) {
    setJokesInfo((jokesInfo) => {
      const info = jokesInfo.find((info) => info.id === id);

      // …
    });
  }
  ```

- [ ] Explain that if the joke info already exists in the `jokesInfo` array we can use the `map` method to create a new array with the updated joke info (toggled `isFunny`). If the joke info doesn't exist in the `jokesInfo` array we can use the spread syntax to create a new array with the new joke info added to the end of the array.

  ```js
  function handleToggleFunny(id) {
    setJokesInfo((jokesInfo) => {
      const info = jokesInfo.find((info) => info.id === id);

      if (info) {
        return jokesInfo.map((info) =>
          info.id === id ? { ...info, isFunny: !info.isFunny } : info
        );
      }

      return [...jokesInfo, { id, isFunny: true }];
    });
  }
  ```

- [ ] Show that we can now use the button to toggle the `isFunny` state of a joke.

---

## Process: Challenges

- [ ] Provide the [handout](react-data-fetching.md) and the
      [challenges](challenges-react-data-fetching.md) to the students
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

useSWR, isLoading, isValidating, mutate, fetcher, SWRConfig, error, data, state while revalidate

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
