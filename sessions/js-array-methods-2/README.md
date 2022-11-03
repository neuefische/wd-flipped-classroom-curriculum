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
  - [ ] `find` and `findIndex`
  - [ ] `sort` (and `slice`)
  - [ ] `some` and `every`

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

As developers, we are often confronted with arrays which contain objects. In order to process these
arrays, we want to

- check whether a specific value exists in some of these objects
- find a specific object or its index
- sort the array
- check whether there is at least one element which passes a provided test
- check whether all elements pass a provided test.

### Pose a question to be answered by the end of the block!

- How do you check whether an array includes a specific value?
- How do you find an object or the index of an object in an array?
- How do you sort arrays?
- How do you check whether at least one element of the array passes a provided test?
- How do you check whether all elements of the array pass a provided test?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- JS Functions
- JS Objects and Arrays
- JS Callback Functions
- JS Array Methods

---

## Inform: Session Guide

You can use the following demo for this session:

- [Demo Start](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/js-array-methods-2/demo-start?file=/js/index.js)
- [Demo End](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/js-array-methods-2/demo-end?file=/js/index.js)

Note: The functions `handleList`, `handleSingleValue`, and `handleObject` are used to create the
respective browser output (it's more visual than `console.log`).

### `includes`

- [ ] Explain `includes`:
  - [ ] takes a value as an argument and checks whether an array contains this value
  - [ ] returns `true` or `false`

```js
const studentNamesIncludesHarry = studentNames.includes("Harry"); // false
```

---

### `find` and `findIndex`

- [ ] Show `find`:
  - [ ] use the callback function to define a test for each element
  - [ ] note that `find` returns **the first element matching the test**
  - [ ] show the return value of `undefined` of no element passes the test

```js
const personOverThirty = students.find((student) => student.age > 30);
```

- [ ] Show `findIndex`:
  - [ ] use the callback function to define a test for each element
  - [ ] note that `findIndex` returns the index of the **first element found** (there are two
        students with 39 points) or
  - [ ] show the return value of `-1` if no element passes the test

```js
const indexOfStudentWith39Points = students.findIndex(
  (student) => student.points === 39
);
```

---

### `sort`

#### Sorting Numbers

- [ ] Explain how to `sort` arrays:
  - [ ] you provide a callback function with two parameters `(a, b)`
  - [ ] on each iteration, `sort` takes two values as arguments for `a` and `b` and compares them
  - [ ] the comparison return values and the result are as follows:

| Return value of `a - b` | sort order                         |
| ----------------------- | ---------------------------------- |
| > 0                     | sort `a` after `b`                 |
| < 0                     | sort `a` before `b`                |
| === 0                   | keep original order of `a` and `b` |

```js
const sortedByAge = students.sort((a, b) => a.age - b.age);
```

---

#### Sorting Strings

- [ ] Show that `sorting` strings takes a little bit more effort:
  - [ ] provide a callback function with two parameters `(a, b)`
  - [ ] lowercase (or uppercase) both elements before comparing them because of `sort`'s usage of
        UTF-16 code unit values
  - [ ] specify the return values for each comparison result with if-statements

> 💡 In UTF-16, the upper- and lowercase version of the same letter do not have the same value. An
> uppercase 'H' has the UTF-16 decimal value of 72, while the lowercase 'h' has a value of 104.
>
> For example, an uppercase 'W' (87) and a lowercase 'd' (100) are sorted behind the uppercase 'H'
> (72), but before the lowercase 'h' (104); the result would look like ['H', 'W', 'd', 'h']. This is
> why it's necessary to upper- or lowercase all letters before sorting them.

```js
const sortedByName = students.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});
```

---

### `slice`

- [ ] Use the provided `handleList()` calls to explain the problem:

```js
handleList(students, "Not Original Anymore");
handleList(sortedByAge, "Not Sorted By Age Anymore");
```

Explanation:

- [ ] the original `students` array is now sorted by name (the last use of `sort` above)
- [ ] the `sortedByAge` call is not sorted by age, but by name as well
- [ ] if we now want to use the original order, it's gone
- [ ] the reason is that `sort` does not create a new array, but mutates the old one

Solution:

- [ ] use `.slice()` before each call of `.sort()` in order to create a shallow copy first:

```js
const sortedByAge = students.slice().sort((a, b) => a.age - b.age);

const sortedByName = students.slice().sort((a, b) => {...}
```

- [ ] show that `handleList(students, 'Not Original Anymore');` and
      `handleList(sortedByAge, 'Not Sorted By Age Anymore');` work now

---

### `some` and `every`

- [ ] Use `some` to test whether **at least one element** in the array passes the provided testing
      function.
- [ ] Show that `some` returns either `true` or `false`.

```js
const anyStudentHasZeroPoints = students.some(
  (student) => student.points === 0
);
```

- [ ] Use `every` to test whether **all elements** in the array passes the provided testing
      function.
- [ ] Show that `every` returns either `true` or `false`.

```js
const everyStudentIsOlderThanThirty = students.every(
  (student) => student.age > 30
);
```

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
