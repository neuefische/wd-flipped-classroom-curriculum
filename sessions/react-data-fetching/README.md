# React Data Fetching

## Learning Objectives

- Understanding the advantages of using a fetching library
- Knowing how to fetch data with `SWR`:
  - `fetcher` function
  - Loading and validating state
  - `error` state
  - Fetching on interval
  - `mutate()`
- Knowing how to combine local state with fetched data

## Requirements

- React State 1-3
- React Effects and Fetch

## Demo

### Start

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-data-fetching/demo-start
```

### End

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-data-fetching/demo-end
```

---

## Session Guide

When fetching data in React using custom solutions, we often miss important features such as error handling, refetching, loading states, caching, and handling race conditions. In this session, we will learn how to use the SWR library to solve these issues.
Additionally we will learn how to connect local state to the data we fetched without duplicating state.

> Think about the **React Effects and Fetch** session. Do you remember which flaws we discussed when implementing our custom fetching solution?

### Recap: Fetching Data in React

- Remind students how to fetch data in React using effects.
- Open the `Joke` Component in the demo and show how it works.
- Remind students that with our naive implementation we are not handling a few core things:
  - Error handling
  - Refetching (neither manually nor on a timer)
  - Loading state
  - Caching
  - Race conditions
- Explain that while we could implement all of these things ourselves (given a large amount of time), there are libraries that help us with this.
- When clicking through the demo, point out that the `id` from state and the actually shown data are not in sync. This is because the `id` is updated before the data is fetched.

### Introducing SWR

- Open the [SWR homepage](https://swr.vercel.app/) and explain:
  - SWR is a data fetching library that helps us with all of the things we just mentioned.
  - It is implemented using React Hooks.
  - It can work with more than just the `fetch` API (axios, GraphQL, etc.) but we will focus on `fetch` for now.
  - SWR stands for "stale while revalidate" which is a caching strategy that enables great UX: Show the cached (_stale_) data _while_ loading (_revalidating_) the new data.
  - SWR is made by Vercel (the company behind Next.js) which means that it is very well integrated with Next.js. (It works with any React app though.)

### Using `useSWR`

- In the demo install SWR:
  ```
  npm install swr
  ```
- Open the `page/index.js` page and import `useSWR` from `swr`:
  ```js
  import useSWR from "swr";
  ```
- Replace the `jokes` state, the `useEffect` hook and the `startFetching` function inside the component function with `useSWR`:

  ```js
  const { data } = useSWR(
    `https://example-apis.vercel.app/api/bad-jokes/${id}`
  );
  ```

- Start the app and demonstrate it doesn't work yet. We only see `Loading...` in the UI. No request to the API is started.
- Explain to the students that it is always a good idea to check the [documentation](https://swr.vercel.app/docs/getting-started) of a library if something does not work.
- Since we are already in the 'getting started' section of the documentation, highlight the necessity of a fetcher function and its role in the SWR library.
- Copy the fetcher function directly from the SWR docs. It's just a wrapper around `fetch` but we should not think about it too much. Copy it **above** the `Joke` component function (**not inside**):
  ```js
  const fetcher = (url) => fetch(url).then((response) => response.json());
  ```
- Add the fetcher function to the `useSWR` hook.
  ```js
  const { data } = useSWR(
    `https://example-apis.vercel.app/api/bad-jokes/${id}`,
    fetcher
  );
  ```
- Show that the app now works as expected.

- Go back to the documentation and highlight that the demo uses some extra information provided by the hook: `isLoading` and `error`.
- Use these to show an initial loading state and an error state:

  ```js
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error || !joke) {
    return <h1>Error</h1>;
  }
  ```

- Encourage the students to explore the library with the help of the documentation and to make it a habit to always check out the docs of new libraries which they want to learn.

### Cached Data

- Compare the behavior of the application to before. We have flashes of no data when the `id` changes but the data is not yet fetched. Only after the data is fetched we see the new joke. This way the local `id` state and the fetched data are always in sync.
- Show (by clicking the Prev/Next buttons) that the data is **cached** and we don't see the loading state when we click through jokes we have already loaded.
- You can open the browser dev tools and check the network tab to see that even though the data is cached, SWR still revalidates the data in the background. This is what the "stale while revalidate" strategy is all about.

### Optional: Combining Fetched Data with Local State

> 💡 The following explanation is only one of many ways to combine fetched data with local state. This pattern will help students with the next recap project. The handout contains a detailed explanation of this pattern.
>
> If you are very short on time, or if you feel that this is too much for the students, you can consider skipping this part. It will be needed for the next recap project but the students will have the handout to refer to.

- Explain that in SWR we don't control the state containing the fetched data ourself.
- Because of this we can't modify the state directly. This is a **good thing** because modifying state that has been fetched from a server is an anti-pattern. Server data should be the single source of truth.
- Explain that if we want to enrich server data with local state (like attaching an `isFunny` property to a joke) we can use the `useSWR` hook to fetch the data and the `useState` hook to manage the local state. The local data should be matched or combined with the server data via a unique identifier (like the `id` of the joke).

- Create a new state variable `funnyJokeIds` and a setter function `setFunnyJokeIds` using `useState`. Initialize the state with an empty array.

  ```js
  const [funnyJokeIds, setFunnyJokeIds] = useState([]);
  ```

- Explain that this array will store the ids of all funny jokes. If a joke should be labelled funny, we can add its id to this array, and remove it otherwise. If we find the id of a given joke in this array, it is considered funny:
  ```js
  const isFunny = funnyJokeIds.includes(id);
  ```
- Now we can use this information in the UI to show to the user if the joke is funny or not:

  ```js
  <button type="button">{isFunny ? "😂 is Funny" : "😐 is not Funny"}</button>
  ```

- We can write the following function such that the user can toggle the funny state of the given joke:
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
- We can attach this function to the `onClick` of the button:

  ```js
  <button type="button" onClick={() => handleToggleFunnyJoke(id)}>
    {isFunny ? "😂 is Funny" : "😐 is not Funny"}
  </button>
  ```
