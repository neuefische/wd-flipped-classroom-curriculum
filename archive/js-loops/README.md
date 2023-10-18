# JS Loops

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] understanding the concept of loops in general
- [ ] understanding `for` loops (do something x times)
- [ ] understanding `for…in` and `for…of` loops (we will learn about alternative ways to loop
      through arrays and objects)
- [ ] understanding `while` loops (do something until a condition is met)
- [ ] maybe small history lesson goto: https://regmedia.co.uk/2012/04/27/basic2_336x204.png

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

We currently have a lot of code that is repeated over and over again. This is not very efficient and
makes our code hard to read and maintain. We will learn how to solve this problem by using loops.

### Why is the content of today's block that important for the students?

### Pose a question to be answered by the end of the block!

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

---

## Inform: Session Guide

You can use this demo to explain the topic:

- [Start](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/js-loops/demo-start)
- [End](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/js-loops/demo-end)

### Introduction: What is a loop

- [ ] Explain loops in general:

  - [ ] offer a quick and easy way to do something repeatedly
  - [ ] at the very beginning (and NOT in JavaScript), you could only go to a specific line in order
        to repeat it
        [like in this example picture](https://regmedia.co.uk/2012/04/27/basic2_336x204.png)

- [ ] Loops in JavaScript:
  - [ ] There are many kinds of loops (we will start with the basics ones).
  - [ ] The number of iterations can be set programmatically.
  - [ ] The loop mechanisms differ in the way how to determine the start and end points of the loop.
  - [ ] Each loop has preferred use cases (e.g. for performance reasons).

### `while`

Start with the `while` loop as most fundamental loop:

- [ ] repeats a code block as long as a stated criteria is `true`
- [ ] stops when the criteria changes to `false`

```js
let string = "a";

while (string.length <= 8) {
  console.log(string);
  string = string + string;
}

// 'a'
// 'aa'
// 'aaaa'
// 'aaaaaaaa'
```

### `for`

Eplain the `for` loop:

- [ ] intended for repeating a task a certain number of times
- [ ] consists of three parts:
  - [ ] a counter which is increased / decreased every iteration
  - [ ] a criteria which checks the value of this counter; as long as the criteria is true, the loop
        is executed
  - [ ] a rule how the counter is increased / decreased

```js
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}
// 0
// 1
// 2
// 3
```

### `for...in`

Explain the `for...in` loop:

- [ ] meant to loop through all keys of an object
- [ ] the iterator variable (here: `key`) is assigned the respective key value in each iteration

```js
const user = {
  name: "Alex",
  age: 28,
  email: "alex@mail.com",
};

for (const key in user) {
  console.log(user[key]);
}

// 'Alex'
// 28
// 'alex@mail.com'
```

### `for...of`

Explain the `for...of` loop:

- [ ] is meant to loop through all items of an
      [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)
      (for our purposes thats mostly arrays)
- [ ] the iterator variable (here: `fruit`) is assigned the respective array item in each iteration.

```js
const fruits = ["apple", "banana", "melon"];

for (const fruit of fruits) {
  console.log(fruit);
}

// 'apple'
// 'banana'
// 'melon'
```

---

## Process: Challenges

- [ ] Provide the [handout](js-loops.md) and the [challenges](challenges-js-loops.md) to the
      students
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

while-loop, for-loop, for...in, for...of,

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
