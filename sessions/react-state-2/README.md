# React State 2

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] Handling form fields in React: controlled components, uncontrolled components
- [ ] Handling form submit events in React
- [ ] Knowing when sharing state between components is required
- [ ] Understanding the concept of lifting state up
- [ ] Knowing how to pass state and functions via props

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

Until now we handled state that was local to a single component. To create meaningful apps we need
to know how we can deal with state that affects multiple components.

### Pose a question to be answered by the end of the block!

How can React components share state with each other?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- React Basics
- React Nesting
- React State

---

## Inform: Session Guide

Use this demo by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-state-2/demo-start
```

You can check out the final version of this demo by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-state-2/demo-end
```

Have a look at `components/SearchFormControlled` to see the code for the controlled input version.

### Introduction: Demo and form handling in React

- [ ] Explain that we are going to build a search form

- [ ] Open the `App` component and explain

  - There is a `SearchForm` and a `SearchResults` component

- [ ] Open the `SearchResults` component and explain

  - [ ] Explain there is a list of topics we discussed in previous lectures
  - [ ] We like to search through these topics. The logic is already provided. We don't need to
        change anything here

- [ ] Open the `SearchForm` component and explain
  - There is a constant variable `searchTerm`
  - Below the form, there is a `conditional rendering` to show different headlines based on the `searchTerm`
    variable
- [ ] Change the value of `searchTerm` (e.g. `"react"`) and show the headline changes
- [ ] Explain that we use `onSubmit` to handle the `submit` event of a form in React
- [ ] Remind students of `form.addEventListener('submit', () =>{})` in vanilla JS
- [ ] Point out that we need to call `event.preventDefault()` in the submit handler
- [ ] Remind students that we need to use the prop `htmlFor` instead of `for` with `label`

- [ ] Press the search button in the UI and show the log message in the console
- [ ] Demonstrate that the headline text does not yet update when submitting the form - this is what we
      are going to implement first
- [ ] Demonstrate that the result list will not show up - this is what we are going to implement
      afterwards

### Controlled input component

- [ ] Explain that we like to use the input's value when the form was submitted
- [ ] Point out that there are two ways to handle inputs: controlled and uncontrolled components - first
      we are going to have a look at controlled components

- [ ] Create a state in the `SearchForm` component to handle the input's value (don't forget to
      import `useState`)

```js
// SearchForm.js
const [searchFieldValue, setSearchFieldValue] = useState("");
```

- [ ] Make the input component controlled
- [ ] Explain that we need to set the input's `value` prop to the state
- [ ] Explain that we need to handle the input's `onChange` event to read the changed value and
      store it in the state

```js
// SearchForm.js
<input
  name="searchTerm"
  id="searchTerm"
  value={searchFieldValue}
  onChange={(event) => {
    setSearchFieldValue(event.target.value);
  }}
/>
```

- [ ] Add a log above the `return` statement to demonstrate that `searchFieldValue` reflects what is
      written in the input field

```js
// SearchForm.js
console.log(`field value`, searchFieldValue);

return <>{/* ... */}</>;
```

- [ ] Explain that we want to change the value of the `searchTerm` variable when submitting the form
- [ ] Replace the constant variable `searchTerm` with a state
- [ ] Call the state's setter function in the `handleSubmit` function and pass `searchFieldValue` as
      next state

```js
// SearchForm.js
const [searchTerm, setSearchTerm] = useState("");

function handleSubmit(event) {
  event.preventDefault();

  setSearchTerm(searchFieldValue);
}
```

- [ ] Demonstrate in the browser, that the headline now changes based on the input's submitted value

## Lifting state up

- [ ] Point out, that the search results are not yet showing up
- [ ] Explain that the state is currently local to the `SearchForm` component
- [ ] Point out that the `SearchResults` component needs to know about the state to show the results
- [ ] Point out we have multiple components, that need to share the state
  - Therefore we need to "lift the state up"
- [ ] Explain that the `App` component is the common ancestor of `SearchForm` and `SearchResults` -
      we need to place the state here

- [ ] Mark the line with the `searchTerm` state, cut it and paste it to the `App` component
- [ ] Import `useState` in the `App` component
- [ ] Point out that the state now lives in a component higher up in the hierarchy
- [ ] Explain that the `SearchForm` component need to inform the `App` component when the search
      term changes via an event we establish ourselves
- [ ] Point out that we need to add a new prop for this. We are going to pass a function as value
      for this prop
- [ ] Point out that we need to accept the `searchTerm` state via prop, since we want to display it
      in the headline

```js
// SearchForm.js
export default function SearchForm({ searchTerm, onSearch }) {
  // ...
}
```

- [ ] Call this function in the `handleSubmit` function and pass the input's value

```js
// SearchForm.js
function handleSubmit(event) {
  event.preventDefault();

  onSearch(searchFieldValue);
}
```

- [ ] Explain that we need to create a function in the `App` component that handles this event

```js
// App.js
function handleSearch(term) {
  setSearchTerm(term);
}
```

- [ ] Pass this function to the `onSubmit` prop

```js
// App.js
<SearchForm searchTerm={searchTerm} onSearch={handleSearch} />
```

- [ ] Demonstrate in the browser that everything works like before
- [ ] Mention that the search results will still not show up
- [ ] Explain that we can solve this now
- [ ] Pass the `searchTerm` prop to the `SearchResults` component

```js
// App.js
<SearchResults searchTerm={searchTerm} />
```

- [ ] Demonstrate the results are display by submitting a value like `"react"` or `"prop"`

## Uncontrolled input component

- [ ] Point out working with `controlled input component` is a bit tedious
  - Especially if there are multiple input fields in a form
  - We always need to create a state per input field
- [ ] Explain that there is an easier way to work with input fields: `uncontrolled components`
- [ ] Point out that a `controlled component` is required when you need to handle every changed
      character in the input. Give an example:
  - e.g. Showing search results while the user is typing
  - e.g. Autocomplete the user's input
  - e.g. Validating the user's input
- [ ] Point out that we can use `uncontrolled components` otherwise

- [ ] Open the `SearchForm` component
- [ ] Remove the line with `useState`
- [ ] Remove the input's `value` prop
- [ ] Remove the input's `onChange` prop
- [ ] Remove the `useState` import
- [ ] Remind student we can use the submit event to read the input's value (we have done this with
      vanilla JS)
- [ ] Update the `handleSubmit` function

```js
// SearchForm.js
function handleSubmit(event) {
  event.preventDefault();

  const formElements = event.target.elements;
  onSearch(formElements.searchTerm.value);
}

return (
  <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchTerm">Search term:</label>
      <input name="searchTerm" id="searchTerm" />
      <button>
        <span role="img" aria-label="search icon">
          🔍
        </span>{" "}
        Search
      </button>
    </form>
    {/* ... */}
  </>
);
```

- [ ] Point out this is a much simpler solution
- [ ] Demonstrate in the browser, that the App works like before

---

## Process: Challenges

- [ ] Provide the [handout](react-state-2.md) and the [challenges](challenges-react-state-2.md) to
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

Components can share state from a common ancestor component. We pass the state as a prop to a component where we need this state.

We don't pass setter functions to components directly, but write a `handle` function which calls the setter function. We then pass the wrapper function like `onSearch={handleSearch}`.

---

## Checkout

> 💡 In case the students seem frustrated try to find some encouraging words (e.g. remind them of
> how far they have come already) :)

- [ ] Summarize the day by repeating all of the topics that were discussed
- [ ] Highlight the progress made that day
- [ ] Encourage the students to repeat what they learned with practical exercises
- [ ] Remind them to rest :)

## Keywords for Recap:

state, useState, lifting state up, controlled components, uncontrolled components, onSubmit,
onChange

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
