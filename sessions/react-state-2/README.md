# React State 2

## Learning Objectives

- Understanding how to handle form fields in React: controlled components and uncontrolled components
- Understanding how to handle form submit events in React
- Knowing when sharing state between components is required
- Understanding the concept of lifting state up
- Knowing how to pass state and functions via props

## Requirements

- React Basics
- React Props
- React Nesting
- React State 1

## Demo

### Start

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-state-2/demo-start
```

### End

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/react-state-2/demo-end
```

> 💡 Have a look at `components/SearchFormControlled` to see the code for the controlled input version.

---

## Session Guide

Until now, we have handled state that was local to a single component. To create meaningful apps, it is essential to know how to manage state that affects multiple components.

> How can React components share state with each other?

### Introduction to Form Handling in React

- Explain that we are going to build a search form.

- Open the `App` component and explain that there are two components involved: `SearchForm` and `SearchResults`.

- Open the `SearchResults` component:

  - Explain there is a list of topics we discussed in previous lectures.
  - We like to search through these topics. The logic is already provided. We don't need to change anything here.

- Open the `SearchForm` component and explain:
  - There is a `let` variable `searchTerm`.
  - Below the form, there is `conditional rendering` to show different headlines based on the `searchTerm` variable.
- Change the value of `searchTerm` (e.g. `"react"`) and show the headline changes.
- Explain that we use `onSubmit` to handle the `submit` event of a form in React.
- Remind students of `form.addEventListener('submit', () =>{})` in vanilla JS.
- Point out that we need to call `event.preventDefault()` in the submit handler.
- Remind students that we need to use the prop `htmlFor` instead of `for` with `label`.

- Press the search button in the UI and show the log message in the console.
- Demonstrate that the headline text does not yet update when submitting the form - this is what we are going to implement first.
- Demonstrate that the result list will not show up - this is what we are going to implement afterwards.
- Demonstrate with a default value for the prop `searchTerm` how the search will behave later on:

```js
// SearchResults.js
export default function SearchResults({ searchTerm = "react" }) {
  //...
}
```

### Uncontrolled Input Component

- Explain that we need to use the input's value when the form is submitted.
- Optional: Implement this with the help of students.
- In `SearchForm.js`, update the `handleSubmit` to assign the value from the input field to the `searchTerm` variable.
- Update the `console.log` statement to log the `searchTerm` variable:

```js
function handleSubmit(event) {
  event.preventDefault();
  searchTerm = event.target.searchTerm.value;
  console.log("searchTerm: ", searchTerm);
}
```

- Point out that the logged value changes, but the UI does not get updated.
- Optional: Ask students how we can solve this.
- To solve this, create a state to handle the input's value:

```js
// SearchForm.js
const [searchTerm, setSearchTerm] = useState("");
```

- [ ] Update the `handleSubmit` to access the input value when the form is submitted and set the `searchTerm` state:

```js
function handleSubmit(event) {
  event.preventDefault();
  const searchTermValue = event.target.searchTerm.value;
  setSearchTerm(searchTermValue);
}
```

- Demonstrate that the `searchTerm` now gets displayed after submitting the form, but no search results are being displayed.

### Lifting State Up

- Discuss the need to make the search term available to other components like `SearchResults`.
- Explain the concept of "lifting the state up" to the `App` component because it is the common ancestor of both `SearchForm` and `SearchResults`.
- Move the `searchTerm` state to the `App` component and create a handler function that updates this state:

```js
// App.js
function handleSearch(searchTermValue) {
  setSearchTerm(searchTermValue);
}
```

- Pass the `handleSearch` as well as the `searchTerm` to the `SearchForm` component:

```js
// App.js
<SearchForm searchTerm={searchTerm} onSearch={handleSearch} />
```

- Adjust the `SearchForm` component to accept `searchTerm` and `onSearch` as props from the `App` component.
- Adjust the `SearchForm` component further: Remove its local state and adjust the `handleSubmit` to call the `onSearch` function:

```js
// SearchForm.js
function handleSubmit(event) {
  event.preventDefault();
  const searchTermValue = event.target.searchTerm.value;
  onSearch(searchTermValue);
}
```

- Demonstrate the app behaves like before our changes.
- Ensure the `SearchResults` component also receives the `searchTerm` as a prop to display results accordingly:

```js
// App.js
<SearchResults searchTerm={searchTerm} />
```

- Demonstrate the app now displays the search term and according results by submitting a value like `"react"` or `"prop"`.

### Controlled Input Component

- Transition to explaining controlled components as an alternative for handling form inputs when real-time interaction or validation is needed.
- Make the input component controlled:
  - Set the input's `value` property to a state variable to tell React that it should be a `controlled input`.
  - Explain in simple terms: A `controlled input` means that React is managing its value.
  - Explain that we need to handle the input's `onChange` event to read the new value and store it in the state variable.
  - Use the `searchTerm` state and the `onSearch` function to accomplish this:

```js
// SearchForm.js
<input
  name="searchTerm"
  id="searchTerm"
  value={searchTerm}
  onChange={(event) => {
    onSearch(event.target.value);
  }}
/>
```

- Adjust our `handleSubmit` to stop users from submitting the form accidentally when pressing enter by preventing the default behaviour:

```js
// SearchForm.js
function handleSubmit(event) {
  event.preventDefault();
}
```

- Demonstrate in the browser that we now have a live search.
