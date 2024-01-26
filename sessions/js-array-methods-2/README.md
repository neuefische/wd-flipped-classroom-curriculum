# JS Array Methods 2

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] Understanding advanced array methods
  - [ ] `includes`
  - [ ] `find`

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

As developers, we are often confronted with arrays. In order to process these arrays, we want to

- check whether there is at least one element in an array
- find a specific object

### Pose a question to be answered by the end of the block!

- How do you check whether at least one element is included in an array?
- How do you find an specific object in an array?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- JS Functions
- JS Objects and Arrays
- JS Callback Functions
- JS Array Methods

---

## Inform: Session Guide

<<<<<<< HEAD
Demo Start:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-array-methods-2/demo-start
```

Demo End:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-array-methods-2/demo-end
=======
Use this demo-start locally by running this command in your Terminal:

```

npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-array-methods-2/demo-start -i

> > > > > > > main

```

You can check out the final version of this demo locally by running this command in your Terminal:

```

npx ghcd@latest neuefische/web-exercises/tree/main/sessions/js-array-methods-2/demo-end -i

````

Show the students the demo code and explain, that we often have to deal with arrays. If the array contains simple data types (like numbers or strings), we can use the `includes` method to check whether a certain value is included or not.
If the array contains complex data types (like objects) we can use other array methods for this purpose. We look at the `find` method in this session but there are more useful methods shown in the handout.

### `includes`

[Link to the mdn docs: Array.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes?retiredLocale=de)

Let's first look at the array of numbers shown in the browser preview. Copy this code snippet and show how the `includes` method works with an array of numbers.

```js
const numberToCheck = 3333;
const numberIsIncluded = numbers.includes(numberToCheck);
numberOutput.textContent = numberIsIncluded
  ? `Yes, ${numberToCheck} it is included!`
  : `No, ${numberToCheck} it's not included`;
````

- [ ] `includes` works on an array (`numbers.includes`)
- [ ] It consumes a value as an argument
- [ ] It returns `true`, if the value is found in the array (and stops execution)
- [ ] It returns `false`, if the value cannot be found
- [ ] Play along with some different numbers
- [ ] Optional you can give a number as a second argument (`fromIndex`) to define the index where to search from

`includes` works fine with strings as well. Here's an example with strings:

```js
const stringToCheck = "MongoDB";
const stringIsIncluded = strings.includes(stringToCheck);
stringOutput.textContent = stringIsIncluded
  ? `Yes, '${stringToCheck}' it is included!`
  : `No, '${stringToCheck}' it's not included`;
```

- [ ] Play along with some different strings
- [ ] You can use `fromIndex` as a second argument to start searching from a certain index.

---

### `find`

[Link to the mdn docs: Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

When working with arrays that contain objects we can use the `find` method:
This one is to get the object we are looking for. It won't return `true` or `false` but the object **itself**.

```js
const objectToFind = simpsons.find((simpson) => simpson.age === 12);
findOutput.textContent = objectToFind
  ? `Yes, it's '${objectToFind.name}'`
  : "Cannot find any!";
```

- [ ] Explain that `find` consumes a callback function that is executed for every element of the array.
- [ ] This callback function will check a specific condition and needs to return either `true` or `false`
- [ ] Once the callback function returns true, the execution is stopped and the find function returns the specific object
- [ ] When no element is found, it returns `undefined`. We have to keep this in mind to avoid an error when rendering an undefined value (we can use optional chaining for this purpose or an if-else statement)
- [ ] Play along with some different conditions
- [ ] Point out that we use an `implicit return` in this example. If your callback functions needs to execute more code (e.g. a console.log) you will have to use an `explicit return`

More useful array methods are shown in the handout. They all work in a similar way.

---

## Process: Challenges

- [ ] Provide the [handout](js-array-methods-2.md) and the
      [challenges](challenges-js-array-methods-2.md) to the students
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

- Revisit the questions that were posed in the beginning of the session and try to answer them with
  a few phrases.

---

## Checkout

> 💡 In case the students seem frustrated try to find some encouraging words (e.g. remind them of
> how far they have come already) :)

- [ ] Summarize the day by repeating all of the topics that were discussed
- [ ] Highlight the progress made that day
- [ ] Encourage the students to repeat what they learned with practical exercises
- [ ] Remind them to rest :)

## Keywords for Recap:

includes(), find(), findIndex(), sort(), slice(), some(), every()

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
