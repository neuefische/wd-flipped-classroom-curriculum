# CSS Flexbox

> 💡 feel free to create a personal branch of this guide to add your own notes

| duration | content         |
| -------- | --------------- |
| 9:59     | Session         |
| 9:59     | Active Learning |
| 9:59     | Recap           |

## Learning objectives

- [ ] Understanding the purpose of flexbox:
  - Let items fill out the possible space in their container
  - Distributing elements for different screen sizes
  - Make the website more responsive with flexbox
- [ ] Understanding the most important flexbox properties
  - `justify-content`
  - `align-items`
  - `flex-direction`
  - `flex-wrap`
  - `gap`
- [ ] Knowing the difference between `main-axis` and `cross-axis`

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

- In a normal document flow block-level elements are displayed below each other.
- Altering this behavior is important to realize an appealing layout with a well-defined visual
  structure that can be consumed easier by users.
- In addition elements should be distributed on the page based on the viewport size to make use of
  the available space.

### Why is the content of today's block that important for the students?

- It is possible to distribute elements on the page with traditional ways of styling (e.g. float,
  position, margin).
- However, modern layouts consist of many reuseable parts and need to respond to different viewport
  sizes.
- This would be hard to implement with such tools and leads to very complex and inflexible code.

### Pose a question to be answered by the end of the block!

How can we create a horizontal navigation bar that adjusts to the viewport's width by increasing the
space between the navigation links?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- [ ] HTML Basics
- [ ] CSS Basics
- [ ] CSS box model

You can ask these questions:

- Have you ever tried to align elements besides each other?
- Have you ever tried to center an element horizontally and vertically within a parent element?

---

## Inform: Session Guide

### Document Normal Flow

Show an example with default layouts.

- [ ] You can use [this example](https://codepen.io/neuefische/pen/KKQZRMo?editors=1100)
- [ ] In the CSS remove/add `display: flex` to toggle between normal flow and the desired result

### Understanding the purpose of flexbox

- [ ] Explain the purpose of flexbox regarding the motivation described above.
- [ ] Apply flexbox to a given structure of elements.

See these examples for inspiration:

- [Example 1](https://codepen.io/neuefische/pen/YzeaKvx)
- [Example 2](https://codepen.io/neuefische/pen/rNJOBwK)
- [Example 3](https://codepen.io/neuefische/pen/VwQyxze)

If you want to, you can
[use this Codepen starter demo](https://codepen.io/neuefische/pen/xxYWBXr?editors=1010)

- [ ] Explain that `display: flex` is assigned to the `container` element
- [ ] Explain that all `direct child` elements are the flexbox items

### Axis and direction

- [ ] Introduce the `flex-direction` property and explain that it switches the axis.
- [ ] `row` (default)
- [ ] `column`

Show and explain this image:

- [ ] The `flex-direction` property defines the `main-axis`
- [ ] The `cross-axis` is perpendicular

![flex-direction-row](./assets/flex-direction.png)

### Important CSS properties for flexbox

Introduce the following flexbox properties and show the effect of different values:

- [ ] `justify-content`: Alignment on the `main-axis`
  - [ ] `flex-start` (default)
  - [ ] `center`
  - [ ] `space-between`
  - [ ] `space-evenly`
- [ ] `align-items`: Alignment on the `cross-axis`
  - [ ] ❗️ Make sure to set the `height` property on the flex container to show behavior
  - [ ] `stretch` (default)
  - [ ] `flex-start`
  - [ ] `flex-end`
  - [ ] `center`
- [ ] `gap`: Creates visual space between flex items
- [ ] `flex-wrap`: Flex items can wrap into another row instead of being squashed into one row
  - [ ] `nowrap` (default)
  - [ ] `wrap`

---

## Process: Challenges

- [ ] Provide the [handout](css-flexbox.md) and the [challenges](challenges-css-flexbox.md) to the
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

flex, flex-direction, justify-content, align-items, flex-wrap, space-between, space-evenly

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
