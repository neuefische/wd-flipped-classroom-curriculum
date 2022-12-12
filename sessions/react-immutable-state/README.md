# React Immutable State

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] Understanding why you should never mutate state directly
- [ ] Working with nested arrays and objects in state
- [ ] Knowing the `useImmer` hook

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

Understanding that you should never mutate state directly and knowing how to work with nested arrays and objects in state is important to create applications that do not have subtle bugs.

### Pose a question to be answered by the end of the block!

Do you know how to work with nested arrays and objects in state? What do you have to do to change a deeply nested value?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- React State 1-3

---

## Inform: Session Guide

> 💡 This session is largely a repetition of things learned in React State 1-3. It focuses on the concept of **immutable state** and how to work with it. In addition it introduces the Immer library and the `useImmer` hook.

### Immutable State Updates

- [ ] Reflect with students how to work with complex state updates
- [ ] Remind students that we must treat state variables as "frozen in time"
- [ ] Explain that the correct term for variables that are "frozen in time" is **immutable**
- [ ] Explain that this means that we must never change state variables even if we want to update them
- [ ] Explain that if we have complex values (object and arrays) stored in state we need to make a copy of the state value to pass into the setter function.
- [ ] Explain that if we want to change something that is nested (like and object in an array) we need to make sure that we create a copy of every nested object/array that we want to change.
- [ ] Explain that this can be quite cumbersome.

### Demo

Use this demo on
[🔗 **CodeSandbox**](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/react-immutable-state/demo-start?file=/README.md)
or locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-immutable-state/demo-start -i
```

You can check out the final version of this demo on
[🔗 **CodeSandbox**](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/react-immutable-state/demo-end?file=/README.md)
or locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-immutable-state/demo-end -i
```

This demo is a app that shows a list of seasons and episodes from the TV show "A Series of Unfortunate Events". The user can mark an episode as "seen" by clicking on the episode. The episode will then be crossed out.

> 💡 The Demo works with nested arrays to showcase a more complex example that might occur in a capstone project. The handout has more examples for working with less complex objects and arrays.

### Fixing Mutations

- [ ] Explain that the demo tries to update the state, but the update is broken due to the mutation.
- [ ] Show that the update does not work when clicking the toggle buttons next to the episodes.
- [ ] Here we want to update a very deeply nested value in the state:
  ```js
  const seasons = [
    {
      number: 1,
      episodes: [
        {
          number: 1,
          hasSeen: true, // ← we want to change this value
          // …
        },
        // …
      ],
      // …
    },
    // …
  ];
  ```
  The`handleToggleHasSeen` function in the `Show` component gets the season number and the episode number as arguments. It should update the `hasSeen` value of the corresponding episode.
- [ ] First we `find` the season corresponding to the `seasonNumber` argument and then we `find` the episode corresponding to the `episodeNumber` argument.
- [ ] In the found `episode` we toggle the `hasSeen` value.
- [ ] Show that the `prevSeasons` value logged to the console is fully correct, but the UI is not updated.
- [ ] Here we are mutating the state. React does not detect the change and does not re-render the component.
- [ ] Explain that we can fix the problem by not mutating the state: To do so we need to create a copy of the array **and** every nested object/array that we want to change.
- [ ] Explain that to copy an array in which we wan't to make a change to an element we can use the `map` function. (Because `map` returns a new array, instead of mutating the original array.)
- [ ] Comment out the full `setSeasons` call but do not delete it. We will need it later.
- [ ] Create a new `setSeasons` function call. This time we will use the `map` function to create a copy of the array.
  ```js
  setSeasons((prevSeasons) => {
    return prevSeasons.map((season) => {
      // …
    });
  });
  ```
- [ ] Explain that when mapping, we can return the original element as-is if we do not want to change it. Here we want to return the original `season` if it is not the season we want to change.
  ```js
  setSeasons((prevSeasons) => {
    return prevSeasons.map((season) => {
      if (season.number !== seasonNumber) {
        return season;
      }
      // …
    });
  });
  ```
- [ ] Explain that if we want to change the `season` we need to create a copy of it. We can do this by using the spread operator because it is an object.
  ```js
  setSeasons((prevSeasons) => {
    return prevSeasons.map((season) => {
      if (season.number !== seasonNumber) {
        return season;
      }
      return {
        ...season,
        // …
      };
    });
  });
  ```
- [ ] Explain that we can now use the `map` function to create a copy of the `episodes` array inside the season.
  ```js
  setSeasons((prevSeasons) => {
    return prevSeasons.map((season) => {
      if (season.number !== seasonNumber) {
        return season;
      }
      return {
        ...season,
        episodes: season.episodes.map((episode) => {
          // …
        }),
      };
    });
  });
  ```
- [ ] Explain that we can now return the original `episode` if it is not the episode we want to change.
  ```js
  setSeasons((prevSeasons) => {
    return prevSeasons.map((season) => {
      if (season.number !== seasonNumber) {
        return season;
      }
      return {
        ...season,
        episodes: season.episodes.map((episode) => {
          if (episode.number !== episodeNumber) {
            return episode;
          }
          // …
        }),
      };
    });
  });
  ```
- [ ] Explain that if we want to change the `episode` we need to create a copy of it. We can do this by using the spread operator because it is an object.
  ```js
  setSeasons((prevSeasons) => {
    return prevSeasons.map((season) => {
      if (season.number !== seasonNumber) {
        return season;
      }
      return {
        ...season,
        episodes: season.episodes.map((episode) => {
          if (episode.number !== episodeNumber) {
            return episode;
          }
          return {
            ...episode,
            // …
          };
        }),
      };
    });
  });
  ```
- [ ] Explain that we can now toggle the `hasSeen` value.
  ```js
  setSeasons((prevSeasons) => {
    return prevSeasons.map((season) => {
      if (season.number !== seasonNumber) {
        return season;
      }
      return {
        ...season,
        episodes: season.episodes.map((episode) => {
          if (episode.number !== episodeNumber) {
            return episode;
          }
          return {
            ...episode,
            hasSeen: !episode.hasSeen,
          };
        }),
      };
    });
  });
  ```
- [ ] Open the app in the browser and demonstrate the toggle works now
- [ ] Take a moment to explain what we have done here. We have created a copy of the `seasons` array and every nested object/array that we wanted to change. We have then updated the `hasSeen` value of the corresponding episode. The actual type of the operation we have done here to create immutable updates is heavily dependent on
  - [ ] the data structure we are working with (_for this example thats a boolean inside an object, inside an array, inside an object, inside an array_ 🤯)
  - [ ] and the exact operation we want to perform (_update, delete, insert, sort_).
- [ ] Remind students that the React docs have great guidance on how to create immutable updates for different data structures and operations. The React State 3 handout has examples and links regarding such operations.
- [ ] Tell students that the above update code can feel unintuitive because of the way nested objects and references work in JavaScript.

### Optional: How nested objects and references work in JavaScript

- [ ] Open and explain the [**Deep Dive: Objects are not really nested** in the React Docs](https://beta.reactjs.org/learn/updating-objects-in-state#objects-are-not-really-nested).
- [ ] You can use [PythonTutor](https://pythontutor.com/javascript.html#mode=edit) to visualize references vs. values in JavaScript. You can use [the code below as starting point](https://pythontutor.com/javascript.html#code=%20%20const%20seasons%20%3D%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20number%3A%201,%0A%20%20%20%20%20%20episodes%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%20number%3A%201,%20hasSeen%3A%20false%20%7D,%0A%20%20%20%20%20%20%20%20%7B%20number%3A%202,%20hasSeen%3A%20false%20%7D,%0A%20%20%20%20%20%20%5D,%0A%20%20%20%20%7D,%0A%20%20%5D%3B%0A%0A%20%20const%20episode%20%3D%20seasons%5B0%5D.episodes%5B0%5D%3B%0A%20%20episode.hasSeen%20%3D%20true%3B%0A%0A%20%20const%20seasonsShallowCopy%20%3D%20%5B...seasons%5D%3B&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D) or use [the example from the React docs](https://pythontutor.com/javascript.html#code=let%20obj%20%3D%20%7B%0A%20%20name%3A%20'Niki%20de%20Saint%20Phalle',%0A%20%20artwork%3A%20%7B%0A%20%20%20%20title%3A%20'Blue%20Nana',%0A%20%20%20%20city%3A%20'Hamburg',%0A%20%20%20%20image%3A%20'https%3A//i.imgur.com/Sd1AgUOm.jpg',%0A%20%20%7D%0A%7D%3B%0A%0Alet%20obj1%20%3D%20%7B%0A%20%20title%3A%20'Blue%20Nana',%0A%20%20city%3A%20'Hamburg',%0A%20%20image%3A%20'https%3A//i.imgur.com/Sd1AgUOm.jpg',%0A%7D%3B%0A%0Alet%20obj2%20%3D%20%7B%0A%20%20name%3A%20'Niki%20de%20Saint%20Phalle',%0A%20%20artwork%3A%20obj1%0A%7D%3B%0A%0Alet%20obj3%20%3D%20%7B%0A%20%20name%3A%20'Copycat',%0A%20%20artwork%3A%20obj1%0A%7D%3B&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D).

  ```js
  const seasons = [
    {
      number: 1,
      episodes: [
        { number: 1, hasSeen: false },
        { number: 2, hasSeen: false },
      ],
    },
  ];

  const episode = seasons[0].episodes[0];
  episode.hasSeen = true;

  const seasonsShallowCopy = [...seasons];
  ```

### Writing concise update logic with Immer

- [ ] Explain that we can use the [Immer](https://immerjs.github.io/immer/docs/introduction) library to write concise update logic.
- [ ] Explain that it allows us to write code that mutates a draft state, and then Immer will create an immutable update based on the mutations we have made. **Our code looks like we are mutating the state, but Immer is turning it into an immutable update under the hood.**
- [ ] Immer provides the `use-immer` package that includes Immer bindings for React state.
- [ ] Install `immer` and `use-immer` with `npm i immer use-immer`.
- [ ] Comment out the current, working `setSeasons` function (but keep it for later reference).
- [ ] Import `useImmer` from `use-immer`.
  ```js
  import { useImmer } from "use-immer";
  ```
- [ ] Explain that `useImmer` is drop-in replacement for `useState` that returns a state object and an `update` function. The `update` function takes a function that receives a draft state as an argument. We can mutate the draft state and Immer will create an immutable update based on the mutations we have made. Instead of using `setSeasons` we will now use `updateSeasons` to make it clear that this now is a Immer state.
  ```js
  const [seasons, updateSeasons] = useImmer(initialSeasons);
  ```
- [ ] Explain that we can now use `updateSeasons` to update the state. We can use the draft state to mutate the state.

  ```js
  updateSeasons((draft) => {
    // …
  });
  ```

- [ ] Copy and paste the two `find` operations and the `hasSeen`-toggle from the original, faulty `setSeasons` function you commented out in the beginning. Replace `prevSeasons` with `draft`:

  ```js
  updateSeasons((draft) => {
    const season = draft.find(({ number }) => number === seasonNumber);

    const episode = season.episodes.find(
      ({ number }) => number === episodeNumber
    );

    episode.hasSeen = !episode.hasSeen;
  });
  ```

- [ ] Explain that we mutate the `draft` object.
- [ ] Explain that we do not need to return the draft object.
- [ ] Explain that Immer magically creates an immutable update based on the mutations we have made to the draft object and/or any of its nested objects/arrays.

  > 💡 Okay it's not magic. If you want you can explain that Immer uses JavaScript proxies to track the mutations we make to the draft object. This is a very advanced topic and not necessary to understand Immer.

- [ ] Show that the app works as expected.

### When to use Immer

- [ ] Compare the different approaches to update the state.
- [ ] Explain that the question wether to use Immer or not depends on the use case and personal preference.
  - [ ] If the update logic is simple and concise, it might be easier to use the spread operator.
  - [ ] If the update logic is complex and/or nested, it might be easier to use Immer.
- [ ] Immer is also not dependent on React state. It can be used in any JavaScript project and also in combination with other (React) state management libraries like zustand.

---

## Process: Challenges

- [ ] Provide the [handout](react-immutable-state.md) and the
      [challenges](challenges-react-immutable-state.md) to the students
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

useImmer, immer, immutable, draft, update, spread operator, mutation

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
