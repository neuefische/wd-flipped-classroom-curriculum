# React Custom Hooks

## Learning Objectives

- how to abstract functionality into a custom hook
- how to effectively use these hooks
- how inputs / return values work with custom hooks

## Requirements

- React Basics
- React useEffect and Fetch

## Demo

### Start

```
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/react-custom-hooks/demo-start
```

### End

```
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/react-custom-hooks/demo-end
```

---

## Session Guide

Sometimes the usage of hooks can become quite complex. It is favorable in these situations to abstract the logic into its own module or custom hook to enhance code readability and reusability.

> How can we create custom hooks for our own logic and use cases?

### Extracting a Custom `useFetch` Hook

- Introduce the Demo to the students.
- Highlight that the `joke` state and `useEffect` hook are part of a single logical unit.
- Point out that it would be great to have a single `useFetch` hook that encapsulates the logical unit so that not every dev has to read and parse these lines of code whenever this component is touched.
- Reveal that we can indeed group this logic together by writing a special function called a `custom hook`.

### Rules of Custom Hooks

- Explain that custom hooks follow the same rules as regular hooks:
  1. They can only be used on the top function level of a component.
  2. They must be called with every component call (can't come after an early return statement for example)
  3. Function name must begin with the word "use".
- Begin by creating a function called `useFetch` above the `App` component.
- Move the `joke` state into this function and return the state value as a single item.

  ```jsx
  function useFetch() {
    const [joke, setJoke] = useState();

    return joke;
  }
  ```

- Inside the `App` component, use the new hook instead of the old state:

  ```jsx
  const joke = useFetch();
  ```

- Show that the value of the state can be used as before in the App, but we don't have access to the setter function any longer.
- Explain that we want to hide the fetching logic in this hook, therefore we will move the entire `useEffect` call into our new hook:

  ```jsx
  function useFetch() {
    const [joke, setJoke] = useState();

    useEffect(() => {
      async function startFetching() {
        const response = await fetch(
          `https://example-apis.vercel.app/api/bad-jokes/0`
        );
        const joke = await response.json();

        setJoke(joke);
      }

      startFetching();
    }, []);

    return joke;
  }
  ```

- Make sure to replace the `id` with a hard coded id for now and to remove it from the dependency array.
- Open the App and show that the hook already works as intended.

### Handling Hook Parameters

- Point out that our custom Hook is not flexible enough for our purposes, i.e. that we can only fetch a specific resource.
- Explain that we need to introduce an input parameter to our hook in order to pass in the desired url:
  ```jsx
  function useFetch(url) {
    //...
    useEffect(() => {
      //...
      const response = await fetch(url);
      //...
    }, [url]);
    //...
  }
  ```
- We need to add the url to our dependency array so that the effect runs again whenever we call the hook with different value.
- Update the Hook Call in our `App` component:
  ```jsx
  const joke = useFetch(`https://example-apis.vercel.app/api/bad-jokes/0`);
  ```
- Now we can pass in different urls on different occasions and still get the benefit from our custom hook.
- replace our hard coded id with the `id` state and showcase that the hook fetches the desired joke when incrementing the `id`:
  ```jsx
  const joke = useFetch(`https://example-apis.vercel.app/api/bad-jokes/${id}`);
  ```

### Possible Use Cases

- Mention that Custom Hooks are useful whenever we want to group state logic and hide complexity that is not relevant to be aware of when using this logic.
- Suggest to check out the handout for a list of additional examples.
- Point out that its not always a good idea to wrap your logic with a custom hook. Every new hook introduces extra complexity to the project and one needs to check carefully if a custom hook is really the best solution for a given situation.
