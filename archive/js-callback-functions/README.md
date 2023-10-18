# JS Callback Functions

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] Understanding the concept of callback functions
- [ ] Using an anonymous callback function
- [ ] Using a named function as a callback function
- [ ] Knowing what a higher order function is

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

- A big part of JavaScript is event-driven (like click event for buttons)
- We need to write code which reacts to such events
  - This can be achieved by passing callback functions
- Events are only an example use case for callback functions
  - Callback functions are used in various other scenarios

### Why is the content of today's block that important for the students?

- Callback functions are a central concept of JavaScript
- The students need to understand the usage of callback functions
  - It enables them to be more proficient when dealing with events
  - It enables the students to write more flexible code

### Pose a question to be answered by the end of the block!

How can we react to events in JavaScript and receive details about the occurred event?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- [ ] JS Basics
- [ ] JS Functions
- [ ] JS Functions 2

---

## Inform: Session Guide

You can use this demo to explain the topic:

- [Start](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/js-callback-functions/demo-start)
- [End](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/js-callback-functions/demo-end)

### Section 1: Callback functions and button click events

- [ ] Explain the concept of callback functions
  - A function that is passed `as an argument` into another function
- [ ] Show callback functions in a known context: event handlers
  - We have seen that many times already
- [ ] Show an anonymous function as callback
- [ ] Show a named function as callback

### Section 2: Higher Order functions

- [ ] Explain that we don't call the callback function ourself
  - The higher order function calls the callback
  - The higher order function defines
    - When the callback is called
    - How often the callback is called
    - Which arguments are passed into the callback function
- [ ] Explain this behavior with the button example
  - We define the callback function for the "click" event
  - We don't call this function ourself
  - The event listener system within JavaScript calls the callback function
- [ ] Make sure the students understand that they don't need to write higher order functions
      themselves

### Section 3: Event parameter in callback function

- [ ] Explain the event parameter
  - The event listener system within JavaScript calls our callback function
  - This system always passes information about the occurred event as first argument
  - We can accept a parameter in our callback function to retrieve this event information
- [ ] Show the event parameter with an anonymous function as callback
- [ ] Show the event parameter with a named function as callbacks

### Section 4: Callbacks as a general concept

- [ ] Explain that callbacks are a general concept in JavaScript
  - It is not tied to event listeners
  - The students will encounter different use cases in the future (example: working with arrays)
- [ ] Introduce the concept of a Component: A reusable function that creates UI elements like buttons, cards, sections, etc.
- [ ] Write a simple Button Component:
  ```js
  function Button(text) {
    const buttonElement = document.createElement("button");
    buttonElement.textContent = text;
    buttonElement.addEventListener("click", () => {
      console.log("Button clicked");
    });
    return buttonElement;
  }
  ```
- [ ] Explain, that this function returns a button component, which has a dynamic display text.
- [ ] create a button with this function and append it to the `buttonContainer`

  ```js
  const myCustomButton = Button("Some awesome text!");
  buttonContainer.append(myCustomButton);
  ```

- [ ] Show that the behavior of the created button is static. We can create buttons with different text but they all perform the same action, which is not really useful
- [ ] Turn the button component into a higher order function, which accepts an `onClick` callback function:

  ```js
  function Button(text, onClick) {
    const buttonElement = document.createElement("button");
    buttonElement.textContent = text;
    buttonElement.addEventListener("click", onClick);
    return buttonElement;
  }
  ```

- [ ] Create now two buttons with this better component and show that both buttons now execute different commands 🤯

  ```js
  const alertButton = Button("show alert message", () => {
    alert("Hello world!");
  });
  buttonContainer.append(alertButton);

  function handleSubmit() {
    console.log("Form was submitted!");
  }

  const submitButton = Button("submit", handleSubmit);
  buttonContainer.append(submitButton);
  ```

- [ ] Explain, that the Button Component takes a function as a parameter and uses it internally.
- [ ] Every call of `Button` creates a new button element which receives its own `onClick` function.

---

## Process: Challenges

- [ ] Provide the [handout](js-callback-functions.md) and
      [challenges](challenges-js-callback-functions.md) to the students
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

Callback, Higher Order Function

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
