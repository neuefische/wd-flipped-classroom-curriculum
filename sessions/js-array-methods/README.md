# JS Array Methods

## Learning Objectives

- Understanding basic array methods:
  - `.includes`
  - `.forEach`
  - `.map`
  - `.find`
  - `.filter`

## Requirements

- JS Functions
- JS Objects and Arrays
- (JS Loops)

## Demo

### Start

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-array-methods/demo-start
```

### End:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-array-methods/demo-end
```

---

## Session Guide

In this session, we will explore different ways to manipulate and access data stored in arrays, often arrays of objects. These methods help make your code cleaner, more efficient, and more readable. Here are some key operations we can perform with array methods:

- Repeating the same action for each object, such as creating a card for every item.
- Filtering objects based on specific criteria to narrow down results.
- Generating a new array that contains only selected pieces of information.
- Checking if an array contains a certain element.
- Finding a specific object within an array.

> Why is it helpful to use array methods when working with data? How do these methods make your code cleaner and easier to understand?

### What are Array Methods?

- Show the students that arrays not only store data, but also provide methods to work with the data.
- Explain `.includes` and use it as an example to show how to use methods on an array:
  ```js
  strings.includes("React"); // true
  ```
- Highlight that there are a lot of different methods on arrays, each with its own use case.

### `forEach`

- Explain, that some array methods require a so called callback function as an argument.
- Point out, that these functions are called automatically for each element in the array.
- Write a simple `forEach` loop for the `strings` array:
  ```js
  strings.forEach(function (firstParameter) {
    console.log(firstParameter);
  });
  ```
  > 💡 Using the classic function syntax might confuse students at first, but it highlights, that we write a function "declaration" which is important for understanding callback functions.
- Highlight, that the callback function is "anonymous", since it has no name.
- Show that the first parameter of the callback function is always a single element of the array.
- Explain, that it is more common to use the arrow notation for the callback function.
- As a second example, use `forEach` to log the names of all games to the console of the demo:

  ```js
  games.forEach((game) => {
    console.log(game.name);
  });
  ```

- Show how `forEach` can be used meaningfully on a web page. Use `forEach` to create a card for each game:

  ```js
  games.forEach((game) => {
    const articleElement = document.createElement("article");
    const titleElement = document.createElement("h2");
    const descriptionElement = document.createElement("p");

    titleElement.textContent = game.name;
    descriptionElement.textContent = game.description;

    articleElement.append(titleElement);
    articleElement.append(descriptionElement);

    gamesContainer.append(articleElement);
  });
  ```

- Highlight, that we will now get to know some more array methods that utilize callback functions.

### `map`

- Explain `map`:

  - Can transform each element of an array.
  - Transformed elements are stored in a **newly created array** returned by `map`.
  - The elements in the original array are not being altered.
  - You define the kind of transformation in the callback function and `return` the transformed element.

  ```js
  const upperCaseStrings = strings.map((string) => {
    return string.toUpperCase();
  });
  ```

- Show the shorthand syntax for a single return:

  ```js
  const upperCaseStrings = strings.map((string) => string.toUpperCase());
  ```

- Highlight, that the returned value does not have to be the same type as the original array:
  ```js
  const gameNames = games.map((game) => game.name);
  ```

### `find`

- Explain `find`:

  - Show, that we can use the `find` method to get a single element from the array that satisfies a certain condition.
  - Explain that `find` consumes a callback function that is executed for every element of the array.
  - This callback function will check a specific condition and needs to return either `true` or `false`.
  - Once the callback function returns `true`, the execution is stopped and the `find` function returns the respective object.
  - When no element is found, it returns `undefined`. We have to keep this in mind to avoid an error when rendering an `undefined` value (we can use optional chaining for this purpose or an if-else statement).

```js
const searchResult = games.find((game) => {
  if (game.name === "Attack of the Mutant Camels") {
    return true; // this "game" becomes the searchResult
  } else {
    return false;
  }
});
console.log(searchResult);
```

```js
const searchResult = games.find(
  (game) => game.name === "Attack of the Mutant Camels"
);
console.log(searchResult);
```

### `filter`

- Explain `filter`:
  - Like `find`, but it returns every element of the array that satisfies a certain condition as a **new array**.
  - Similar to `find`, you provide a callback function for checking a condition.
  - If the condition is met, the callback function should return `true`, otherwise `false`.
    - `true`: The element will be added to the new array.
    - `false`: The element will be ignored.
  - The elements in the original array are not being altered.
  - The created array is likely to have a shorter length than the original array.
  ```js
  const gamesBefore2000 = games.filter((game) => game.publishingYear < 2000);
  console.log(gamesBefore2000);
  ```
