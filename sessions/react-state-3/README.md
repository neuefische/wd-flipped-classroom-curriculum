# React State 3

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] Knowing how to handle arrays and objects in state
- [ ] Understanding how to add objects to an array in state
- [ ] Understanding how to delete objects from an array in state
- [ ] Understanding how to update objects in an array in state

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

We learned how state in React works. Most apps need to store a bit more complex data in state, like arrays and objects. We need to understand how to apply changes to such data structures stored in state.

### Pose a question to be answered by the end of the block!

Why do we always need to create a copy of the data in state when we like to apply changes?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- React Nesting
- React State
- React with Arrays
- React State 2
- React State 3

---

## Inform: Session Guide

Use this demo on
[🔗 **CodeSandbox**](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/react-state-3/demo-start?file=/README.md)
or locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-state-3/demo-start -i
```

You can check out the final version of this demo on
[🔗 **CodeSandbox**](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/react-state-3/demo-end?file=/README.md)
or locally by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-state-3/demo-end -i
```

### Introduce the demo app

- [ ] Show the demo app in the browser

  - [ ] Explain the app's purpose: keep track of a list of movies you like or dislike
  - [ ] Point out the two main parts of the app
    - list of movies
    - form to add a new movie

- [ ] Open then `App` component

  - [ ] Explain that we have a state with some initial movie data
  - [ ] Point out that we store not just strings, number or booleans in state, but more complex data: an array of objects
    - [ ] Explain that such data structures in state are very common
    - [ ] Explain the shape of the stored objects
    - [ ] Highlight the `id` key is important, as we will see later
  - [ ] Show the part in the JSX where movies from state are rendered with `map`
    - [ ] Highlight the `id` is used for the `key` prop
  - [ ] Point out there is a `Movie` component to display information about a movie

- [ ] Open the `Movie` component

  - [ ] Explain that it accepts the props `name` and `isLiked` and show where they are used
  - [ ] Point out there is a button to like/dislike the movie via a toggle mechanism
  - [ ] Point out there is a delete button to remove the movie
  - [ ] Open the app in the browser and demonstrate how the two buttons don't work yet

- [ ] Open the `App` component

  - [ ] Highlight the part in the JSX where the `Form` component is placed below the list

- [ ] Open the `Form` component

  - [ ] Explain the form has two fields for a movie
    - `name` as text
    - `isLiked` as checkbox
  - [ ] Explain there is already a submit handler function in place
  - [ ] Point out that it reads the form data and logs it to the console. We still have to actually add the movie to the state.
  - [ ] Open the app in the browser and showcase the log message when submitting the form

### Adding movies

- [ ] Open the `Form` component

  - [ ] Add a new prop to the function declaration: `onAddMovie`
  - [ ] Explain that the `Form` component will trigger an event when a new movie should be added
  - [ ] Replace the `console.log` with a call to `onAddMovie` and pass the `data` as argument

```js
export default function Form({ onAddMovie }) {
  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddMovie(data);
    event.target.reset();
    event.target.elements.name.focus();
  }

  // ...
}
```

- [ ] Open the `App` component

  - [ ] Explain we are going to create a function that handles the event we just wrote
  - [ ] Add a function `handleAddMovie`
  - [ ] Explain the function accepts the `newMovie` as first parameter
  - [ ] Pass `handleAddMovie` to the `Form` component with the `onAddMovie` prop

```jsx
<Form onAddMovie={handleAddMovie} />
```

- [ ] Explain that all movies are stored in state and we need to overwrite the state in order to add a movie
- [ ] Call the `setMovies` function inside of `handleAddMovie`
- [ ] Highlight that we cannot simply mutate the state variable
  - We must handle it as immutable
  - We need to create a new array as a completely new state
  - We need to call the setter function and pass the new state
- [ ] Point out we need to create a new array and copy all existing movies
  - `[...movies]`
- [ ] Explain that we like to add a new movie at the end of the list
- [ ] Point out that each movie need a unique `id`, so we need to generate one.
  - [ ] Explain that the tool `nanoid` can do this. It's already installed via `npm`
  - [ ] Import `nanoid`
    - `import { nanoid } from "nanoid";`
  - [ ] Call `nanoid()` to create `random id`
  - [ ] Explain we create a new object, spread all data of the new movie and enrich the data with an `id`

```js
function handleAddMovie(newMovie) {
  setMovies([...movies, { id: nanoid(), ...newMovie }]);
}
```

- [ ] Open the browser and demonstrate that adding movies works now

### Deleting Movies

- [ ] Open the `Movie` component

  - [ ] Add two new props to the function declaration: `id` and `onDeleteMovie`
  - [ ] Explain that we have to expose an event as a prop that will be triggered when a movie should be deleted
  - [ ] Point out we need the `id` to be able to tell which movie should be deleted
  - [ ] Add the `onClick` prop to the delete button
  - [ ] Call `onDeleteMovie` and pass `id` as argument

```jsx
onClick={() => onDeleteMovie(id)}
```

- [ ] Open the `App` component

  - [ ] Explain we are going to create a function that handles the event we just wrote
  - [ ] Add a function `handleDeleteMovie`
  - [ ] Explain the function accepts the `id` of the movie that should be deleted as first parameter
  - [ ] Pass `handleDeleteMovie` to the `Movie` component with the `onDeleteMovie` prop
  - [ ] Pass `id` prop to the `Movie` component

```jsx
<Movie
  name={movie.name}
  isLiked={movie.isLiked}
  id={movie.id}
  onDeleteMovie={handleDeleteMovie}
/>
```

- [ ] Highlight that we cannot simply mutate the state variable
  - We must handle it as immutable
  - We need to create a new array as complete new state
  - We need to call the setter function and pass the new state
- [ ] Call the `setMovies` function inside of `handleDeleteMovie`
- [ ] Explain the new state is a list of all movies, except the one we want to delete
- [ ] Point out we can use the array method `filter` for this
  - We need to iterate over all movies
  - We filter out the movie with the matching `id`
  - If the `id` doesn't match, the movie doesn't get filtered out/deleted

```js
function handleDeleteMovie(id) {
  setMovies(movies.filter((movie) => movie.id !== id));
}
```

- [ ] Open the browser and demonstrate that deleting movies works now

## (Dis-)Liking movies

- [ ] Open the `Movie` component

  - [ ] Add a new prop to the function declaration: `onToggleLike`
  - [ ] Explain that we like to expose an event as a prop that will be triggered when the toggle like button is clicked
  - [ ] Point out we need the `id` to tell which movie should be liked or disliked
  - [ ] Add the `onClick` prop to the toggle button
  - [ ] Call `onToggleLike` and pass `id` as argument

```jsx
onClick={() => onToggleLike(id)}
```

- [ ] Open the `App` component

  - [ ] Explain we are going to create a function that handles the event we just wrote
  - [ ] Add a function `handleToggleLike`
  - [ ] Explain that the function accepts the `id` of the movie that should be liked or disliked
  - [ ] Pass `handleToggleLike` to the `Movie` component with the `onToggleLike` prop

```jsx
<Movie
  name={movie.name}
  isLiked={movie.isLiked}
  id={movie.id}
  onDeleteMovie={handleDeleteMovie}
  onToggleLike={handleToggleLike}
/>
```

- [ ] Highlight that we cannot simply mutate the state variable
  - We must handle it as immutable
  - We need to create a new array as complete new state
  - We need to call the setter function and pass the new state
- [ ] Call the `setMovies` function inside of `handleToggleLike`
- [ ] Explain the new state is a list of all movies, but we want to flip the `isLiked` property in one object
- [ ] Point out we can use the array method `map` for this
  - We need to iterate over all movies
  - We have to compare `id`s
  - If the `id`s match we need to change the like value, otherwise we return the `movie` object without any changes made
  - To change the like value we create a new object and use the spread syntax to spread every `key: value` pair of the original movie object into our new object
  - We want to overwrite the `isLiked` value with the opposite of it's current value to toggle it

```js
function handleToggleLike(id) {
  setMovies(
    movies.map((movie) =>
      movie.id === id ? { ...movie, isLiked: !movie.isLiked } : movie
    )
  );
}
```

- [ ] Open the browser and show that liking movies works now

---

## Process: Challenges

- [ ] Provide the [handout](react-state-3.md) and the [challenges](challenges-react-state-3.md) to
      the students
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

state with arrays, state with objects, immutable state variable, add to array, delete from array, update in array

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
