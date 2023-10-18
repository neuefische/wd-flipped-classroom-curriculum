# JS Array Methods 1

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] Understanding basic array methods
  - `.forEach` -> do something in a function called for each element in the array
  - `.map` -> create a new array based on a function called for each element in the array
  - `.filter` -> create a new array with elements that pass a test

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Why is the content of today's block that important for the students?

Most often, we have information stored in an array (of objects). There are several options to work
with this information:

- execute the same code for each object (e.g. create cards)
- filter objects for specific criteria
- create a new array with only parts of the information

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- JS Objects and Arrays
- JS Callback Functions
- (JS Loops)

---

## Inform: Session Guide

### Introduction to array methods

For this session, you can use the following codesandbox:

- [Demo Start](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/js-array-methods-1/demo-start?file=/js/index.js)
- [Demo End](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/js-array-methods-1/demo-end?file=/js/index.js)

Use the demo to show the problem:

- [ ] We have an array of objects and want to do the same code for each object (e.g. create a card
      with information about each game).
- [ ] How can we create new arrays with only on information per object?
- [ ] How can we filter the array for specific object properties?

### `forEach`

- [ ] Use `forEach` to log the names of all games to the console of the demo:
  - [ ] you provide a callback function with one parameter
    - [ ] parameter naming convention: singular of array name
  - [ ] `forEach` iterates over the array
  - [ ] callback function gets called for each element in the array
  - [ ] with each call to the function, the current array element gets passed as first argument

```js
games.forEach((game) => {
  console.log(game.name);
});
```

- [ ] Use `forEach` to create a card for each game, for example:
  - [ ] `article` as container
  - [ ] `h2` for `game.name`
  - [ ] `p` for `game.description`

### `map`

- [ ] Explain `map`:
  - [ ] can transform each element of an array
  - [ ] transformed elements are stored in a **newly created array** returned by `map`
  - [ ] the elements in the original array are not being altered
  - [ ] you define the kind of transformation in the callback function and **return** the
        transformed element
  - [ ] the created and the original array have the same length (in contrast to `.filter()`).

```js
const uppercaseNames = games.map((game) => {
  return game.name.toUpperCase();
});
```

- [ ] Show the shorthand syntax for a single return:

```js
const uppercaseNames = games.map((game) => game.name.toUpperCase());
```

### `filter`

- [ ] Explain `filter`:

  - [ ] create **a new array** with a subset of the elements of the original array
  - [ ] inside the callback function, you define a condition to be checked
  - [ ] if the condition is met, the callback function returns `true`, otherwise `false`
    - [ ] `true`: The element will be added to the new array
    - [ ] `false`: The element will be ignored
  - [ ] the elements in the original array are not being altered
  - [ ] the created array is likely to have a shorter length than the original array.

```js
const gamesBefore2000 = games.filter((game) => game.publishingYear < 2000);
```

- [ ] Recap the common features of `forEach`, `map`, and `filter`:
  - [ ] you provide a callback function with one parameter
  - [ ] the array method iterates over an array
  - [ ] the provided callback function gets called for each element in the array
  - [ ] with each call to the function, the current array element gets passed as first argument.

### Chaining array methods

- [ ] Quite often, it's not enough to only use one array method to achieve a certain result
- [ ] Array methods which return a new array can be chained.
  - [ ] There is no need to store the results in separate variables.
  - [ ] This reduces the amount of code and improves readability.

```js
const uppercaseNamesBefore2000 = games
  .filter((game) => game.publishingYear < 2000)
  .map((game) => game.name.toUpperCase());
```

---

## Process: Challenges

- [ ] Provide the [handout](js-array-methods.md) and the
      [challenges](challenges-js-array-methods.md) to the students
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

forEach, map, filter, method-chaining, callback-functions

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
