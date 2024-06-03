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

---

## Inform: Session Guide

### Demo

Use this demo locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-data-fetching/demo-start
```

You can check out the final version of this demo locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-data-fetching/demo-end
```

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
- [ ] Open the `page/index.js` Page and import `useSWR` from `swr`.
  ```js
  import useSWR from "swr";
  ```
- [ ] Replace the `jokes` state, the `useEffect` hook and the `startFetching` function inside the component function with `useSWR`.

  ```js
  const { data } = useSWR(
    `https://example-apis.vercel.app/api/bad-jokes/${id}`
  );
  ```

- [ ] Start the app and demonstrate it doesn't work yet. We only see `Loading...` in the UI. No request to the API is started.
- [ ] Explain to the students that it is always a good idea to check the [documentation](https://swr.vercel.app/docs/getting-started) of a library if something does not work.
- [ ] Since we are already in the 'getting started' section of the documentation, highlight the necessity of a fetcher function and its role in the SWR library.
- [ ] Copy the fetcher function directly from the SWR docs. It's just a wrapper around `fetch` but we should not think about it too much. Copy it **above** the `Joke` component function (**not inside**)
  ```js
  const fetcher = (url) => fetch(url).then((response) => response.json());
  ```
- [ ] Add the fetcher function to the `useSWR` hook.
  ```js
  const { data } = useSWR(
    `https://example-apis.vercel.app/api/bad-jokes/${id}`,
    fetcher
  );
  ```
- [ ] Show that the app now works as expected.

- [ ] Go back to the documentation and highlight that the demo uses some extra information provided by the hook: `isLoading` and `error`.
- [ ] Use these to show an initial loading state and an error state:

  ```js
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error || !joke) {
    return <h1>Error</h1>;
  }
  ```

- [ ] Encourage the students to explore the library with the help of the documentation and to make it a habit to always check out the docs of new libraries which they want to learn.

### Cached Data

- [ ] Compare the behavior of the application to before. We have flashes of no data when the `id` changes but the data is not yet fetched. Only after the data is fetched we see the new joke. This way the local `id` state and the fetched data are always in sync.
- [ ] Show (by clicking the Prev/Next buttons) that the data is **cached** and we don't see the loading state when we click through jokes we have already loaded.
- [ ] You can open the Browser DevTools and check the Network tab to see that even though the data is cached, SWR still revalidates the data in the background. This is what the "stale while revalidate" strategy is all about.

### Optional: Combine Fetched Data with Local State

> 💡 The following explanation is only one of many ways to combine fetched data with local state. This pattern will help students with the next recap project. The handout contains a detailed explanation of this pattern.
>
> If you are very short on time, or if you feel that this is too much for the students, you can consider skipping this part. It will be needed for the next recap project but the students will have the handout to refer to.

- [ ] Explain that in SWR we don't control the state containing the fetched data ourself.
- [ ] Because of this we can't modify the state directly. This is a **good thing** because modifying state that has been fetched from a server is an anti-pattern. Server data should be the single source of truth.
- [ ] Explain that if we want to enrich server data with local state (like attaching an `isFunny` property to a joke) we can use the `useSWR` hook to fetch the data and the `useState` hook to manage the local state. The local data should be matched or combined with the server data via a unique identifier (like the `id` of the joke).

- [ ] Create a new state variable `funnyJokeIds` and a setter function `setFunnyJokeIds` using `useState`. Initialize the state with an empty array.

  ```js
  const [funnyJokeIds, setFunnyJokeIds] = useState([]);
  ```

- [ ] Explain that this array will store the ids of all funny jokes. If a joke should be labelled funny, we can add its id to this array, and remove it otherwise. If we find the id of a given joke in this array, it is considered funny:
  ```js
  const isFunny = funnyJokeIds.includes(id);
  ```
- [ ] Now we can use this information in the UI to show to the user if the joke is funny or not:

  ```js
  <button type="button">{isFunny ? "😂 is Funny" : "😐 is not Funny"}</button>
  ```

- [ ] We can write the following function such that the user can toggle the funny state of the given joke:
  ```js
  function handleToggleFunnyJoke(jokeId) {
    // you can reuse the "isFunny" variable here if you like
    if (funnyJokeIds.includes(jokeId)) {
      //joke is in the list, to toggle the state we need to remove it.
      const updatedFunnyJokeIds = funnyJokeIds.filter((id) => id !== jokeId);
      setFunnyJokesIds(updatedFunnyJokeIds);
    } else {
      //joke is not the list, to toggle the state we need to add it.
      const updatedFunnyJokeIds = [...funnyJokeIds, jokeId];
      setFunnyJokesIds(updatedFunnyJokeIds);
    }
  }
  ```
- [ ] We can put this function onto the button click listener:
      `js
<button type="button" onClick={() => handleToggleFunnyJoke(id)}>{isFunny ? "😂 is Funny" : "😐 is not Funny"}</button>
`

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
