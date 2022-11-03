# CSS Selectors

> 💡 feel free to create a personal branch of this guide to add your own notes

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

_The "Active Learning" portion of the session may require less time._

## Learning objectives

- [ ] how to style elements dynamically, e.g. when hovering over them or setting focus on them
- [ ] learn about more complex css selectors like pseudo classes and pseudo elements
- [ ] how to combine selectors into complex rulesets
- [ ] students should learn to prefer class selectors

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

- You will be able to be more specific in what you select.

### Why is the content of today's block that important for the students?

- to understand why a style is chosen over another competing style => fewer problems with competing
  styles

### Pose a question to be answered by the end of the block!

- How can we style elements when they are in a specific state? For example:
  - styling a button when the user hovers over it.
  - styling an input element when the focus is set on it.

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- You already used the `Universal selector`, `Type selectors`, and `Class selectors`. We will build
  upon that knowledge and learn useful new selectors.

---

## Inform: Session Guide

This is likely a short session. It is a topic that is supposedly best learned by doing exercises.
Give a short overview of the different kind of selectors with one or two examples here.

You can use the following CodeSandbox to demonstrate the different kinds of selectors:

- [demo start](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/css-selectors/demo-start)
- [demo end](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/css-selectors/demo-end)

### Recap

- The universal selector matches elements of any kind:

```css
* {
  box-sizing: border-box;
}
```

- Type selectors match all elements of the specified type:

```css
h1,
h2 {
  background-color: midnightblue;
  color: white;
  padding: 5px;
}
```

- Class selectors match all elements with the specified css class:

```css
.question-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
```

### Id Selectors

Select one element based on its id. We recommend not using id selectors but class selectors instead.
Id selectors aren't resuable like class selectors and they are hard to overwrite.

```css
#submit {
  color: blue;
}
```

### Attribute Selectors

Select elements based on the presence of an attribute. If a value is specified in the selector only
elements with the attribute and the specified values are selected:

```css
[role="list"] {
  list-style: none;
}
```

```css
a[href^="/"] {
  color: hotpink;
  text-transform: uppercase;
  font-weight: bold;
}
```

### Pseudo Classes

With pseudo classes you can select elements based on their state. You add them to a selector to only
select elements which also match the state condition:

```css
a:hover {
  background-color: indigo;
  color: white;
  font-size: 1.4rem;
}
```

```css
button:active {
  background-color: blue;
}
```

## Pseudo Elements

With pseudo elements you can select parts of an element or add content before or after an element:

```css
p::first-line {
  font-size: 2em;
}
```

> 💡 With the above example you can show that the first line of a paragraph is being selected
> dynamically while you change the viewport size (change the browser window size).

```css
a[href^="https"]::before {
  content: "🌍";
  margin-right: 5px;
}
```

---

## Process: Challenges

- [ ] Provide the [handout](css-selectors.md) and the [challenges](challenges-css-selectors.md) to
      the students
- [ ] Open the challenges and walk the students through the tasks
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

Attribute selector, Pseudo class, Id selector, Pseudo element, Combinator

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
