# React Custom Hooks

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 0:00     | Active Learning |
| 0:00     | Recap           |

## Learning objectives

- [ ] Understanding what a custom hook is and how to create one
- [ ] Understanding that custom hooks can abstract stateful logic (`useState`, `useEffect`)
- [ ] Understanding when to create a custom hook

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

Custom hooks are a powerful way to abstract stateful logic. Students should know about them because it helps them to make their react code more DRY and reusable. They will also encounter custom hooks in other people's code and should be able to understand them.

### Pose a question to be answered by the end of the block!

How can we abstract logic in normal JavaScript code? → Functions

How can we abstract logic in React components that might include state and effects?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- [ ] React State
- [ ] React Effects and Fetch

---

## Inform: Session Guide

### Demo

Use this demo or locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-custom-hooks/demo-start
```

You can check out the final version of this demo or locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-custom-hooks/demo-end
```

> 💡 This demo is based on the final version of the demo from the [_React Effects and Fetch_](../react-effects-and-fetch/README.md) session and picks up where it left off.

### Extracting a custom `useFetch` hook

- [ ] Remind students how the demo works and what it does.
- [ ] Explain that the code inside the `Joke` component contains a few things that have the potential to be reused in other components. We're going to break them down and abstract them.
- [ ] Reiterate that when we are abstracting things in JavaScript we usually do so by creating functions.
  - [ ] Plain JavaScript function cannot be used to abstract away `useState`, `useEffect` and other build-in hooks because React takes extra percautions to make sure that hooks are only used within a component function and only at the top level.
  - [ ] Functions that can abstract away other hooks are called _custom hooks_. They are just regular JavaScript functions but per convention they start with `use`. This helps React and developers to identify them as custom hooks.
- [ ] Explain that a first good candidate to be abstracted into a custom hook is the fetching. We will create a `useFetch` custom hook that will take care of fetching the data and updating the state. Doing so we will also make the code more generic and reusable.
- [ ] Create a new function directly inside the same file where the `Joke` component is defined in. Name it `useFetch` and give it the following signature:

  ```js
  function useFetch(url) {
    // …
  }
  ```

- [ ] Explain that the `useFetch` function will take a `url` as a parameter. This is the URL that we want to fetch data from. Using a flexible parameter makes the function more generic and reusable.

- [ ] Move the `const [joke, setJoke] = useState();` and the complete `useEffect` into the `useFetch` function.

  ```js
  function useFetch(url) {
    const [joke, setJoke] = useState();

    useEffect(() => {
      async function startFetching() {
        const response = await fetch(
          `https://example-apis.vercel.app/api/bad-jokes/${id}`
        );
        const joke = await response.json();

        setJoke(joke);
      }

      startFetching();
    }, [id]);
  }
  ```

- [ ] Replace the `` `https://example-apis.vercel.app/api/bad-jokes/${id}` `` in the `fetch` call with the `url` parameter.

- [ ] Point out that ESLint will notify us that the dependecy array of the `useEffect` is missing the `url` parameter and has an unnecessary `id` parameter. Go ahead and fix that.

  Your code should look like this at this point:

  ```js
  function useFetch(url) {
    const [joke, setJoke] = useState();

    useEffect(() => {
      async function startFetching() {
        const response = await fetch(url);
        const joke = await response.json();

        setJoke(joke);
      }
    }, [url]);
  }
  ```

- [ ] Explain that for the custom hook to be useful we need to return something from the hook function. In our case we are most interested in the data that has been fetched. Thus we will return the `joke` state variable.

  ```js
  function useFetch(url) {
    const [joke, setJoke] = useState();

    useEffect(() => {
      async function startFetching() {
        const response = await fetch(url);
        const joke = await response.json();

        setJoke(joke);
      }
    }, [url]);

    return joke;
  }
  ```

- [ ] Point out that our function is not actually about fetching jokes anymore but can handle any url. Thus we should rename our state to `data` instead of `joke` to reflect that, as well as renaming the variable inside the `startFetching` function.

  ```js
  function useFetch(url) {
    const [data, setData] = useState();

    useEffect(() => {
      async function startFetching() {
        const response = await fetch(url);
        const data = await response.json();

        setData(data);
      }
    }, [url]);

    return data;
  }
  ```

- [ ] Explain that we can now use the `useFetch` custom hook in the `Joke` component. Add the following line below the `id` state variable:

  ```js
  const joke = useFetch(`https://example-apis.vercel.app/api/bad-jokes/${id}`);
  ```

- [ ] Demonstrate that the app still works as expected but we have now extracted the fetching logic into a custom hook that could be reused in other components.

### Creating a custom `useJoke` hook

- [ ] Explain that we can now go one step further and create a custom hook that combines the `useFetch` hook with the `id` state variable and even the event handler for switching to the next id. This way we can reuse the fetching logic and the `id` state variable in other components as well.

- [ ] Create a new function directly inside the same file where the `Joke` component is defined in. Name it `useJoke` and give it the following signature:

  ```js
  function useJoke() {
    // …
  }
  ```

- [ ] Move the `const [id, setId] = useState(0);` and the `useFetch` into the `useJoke` function.

  ```js
  function useJoke() {
    const [id, setId] = useState(0);
    const joke = useFetch(
      `https://example-apis.vercel.app/api/bad-jokes/${id}`
    );
  }
  ```

- [ ] Explain that we also want to abstract the event handler for switching to the next id. Thus we will create a new function called `handleNextJoke` inside the `useJoke` function and move the `setId` call from the original anonymous handler function into it.

  ```js
  function useJoke() {
    const [id, setId] = useState(0);
    const joke = useFetch(
      `https://example-apis.vercel.app/api/bad-jokes/${id}`
    );

    function handleNextJoke() {
      setId(joke.nextId);
    }
  }
  ```

- [ ] Explain that our custom hook should now return two things: The `joke` and the `handleNextJoke` function. We can return an object with two properties to achieve that.

  ```js
  function useJoke() {
    const [id, setId] = useState(0);
    const joke = useFetch(
      `https://example-apis.vercel.app/api/bad-jokes/${id}`
    );

    function handleNextJoke() {
      setId(joke.nextId);
    }

    return { joke, handleNextJoke };
  }
  ```

  > 💡 You might want to reiterate that we are using object shorthand notation here to avoid having to write `joke: joke` and `handleNextJoke: handleNextJoke`.

- [ ] Inside the component function we can now use the `useJoke` custom hook and destructure the `joke` and `handleNextJoke` properties from the returned object.

  ```js
  function Joke() {
    const { joke, handleNextJoke } = useJoke();

    if (!joke) {
      return null;
    }

    return (
      <>
        <h1>{joke.joke}</h1>
        <button type="button" onClick={handleNextJoke}>
          Next Joke
        </button>
      </>
    );
  }
  ```

### Moving the hooks into their own file

- [ ] Explain that we can now move the `useFetch` and `useJoke` hooks into their own file. This way we can reuse them in other components as well.

- [ ] Create a new file called `fetch.js` in the `src/utils` folder (or whatever tickles your fancy). Move the `useFetch` and `useJoke` functions into this file. Add an export statement for each of them. Don't forget to also move the `useState` and `useEffect` imports.

  ```js
  export function useFetch(url) {
    // …
  }

  export function useJoke() {
    // …
  }
  ```

- [ ] Import the `useJoke` function into the `Joke` component and use it as before.

  ```js
  import { useJoke } from "../utils/fetch";
  ```

- [ ] Demonstrate that the app still works as expected. Explain that we have now extracted the fetching logic into a custom hook that could be reused in other components with ease.

### When to extract, when not to extract

- [ ] Explain that students might feel the urge to extract everything into a custom hook. This is not always a good idea. For example, if a custom hook is only used in one component it might be better to keep the build-in hooks in the component directly. This way it is easier to understand what the component does: Less abstraction = simpler code.

- [ ] Explain that in practice it is a good idea to extract logic into custom hooks when it is used in multiple places. This way we can reuse the logic and avoid code duplication.

### Custom hooks made by others

- [ ] Explain that there are many custom hooks available on npm or elsewhere that can be used in your own projects.

- [ ] Explain that the [`use-local-storage-state`](https://github.com/astoilkov/use-local-storage-state/) hook we used previously is one of them but that there are all kinds of other hooks available as well. You can also point out that the handout contains some examples.

- [ ] Explain that it is sometimes a good idea to check if someone else has already implemented the logic you need in a custom hook before you implement it yourself.

---

## Process: Challenges

- [ ] Provide the [handout](react-custom-hooks.md) and the
      [challenges](challenges-react-custom-hooks.md) to the students
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

custom hooks, useFetch

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
