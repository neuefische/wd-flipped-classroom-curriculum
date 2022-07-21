# Session name

> 💡 feel free to create a personal branch of this guide to add your own notes

## Learning objectives

- [ ] types of positioning
  - `static`
  - `relative`
  - `absolute`
  - `fixed`
  - `sticky`
- [ ] all positioning values
  - `top`
  - `right`
  - `bottom`
  - `left`
- [ ] the basic usage of `z-index`

---

## Arrival: Motivate students and prepare them for the topic

> 💡 Breathe and relax :)

### Why is the content of todays block so important for the students?

Elements on a web page are positioned according to the normal document flow, i.e. the order in the
HTML document. Sometimes, we want to position certain elements out of the document flow. In this
case we use positioning.

---

## Activate prior knowledge of students

### Which prior knowledge will be used for this session?

---

## Inform: Session guide

### 1. Exposition

Show examples of a `sticky` navbar (Google) or `fixed` feedback button (DuckDuckGo - enter some
search tag or use this [Fixed-example](https://davidwalsh.name/demo/css-fixed-position.php) and that
they do not fit into the document flow.

### 2. `position: static`

Explain the default value:

- [ ] the position of the element is determined by the document flow
- [ ] properties `top`, `bottom`, `right`, `left` have no effect

### 3. `position: relative`

Explain `relative` positioning:

- [ ] element's position is determined by the document flow
- [ ] element is displaced by the `top`, `bottom`, `right`, `left` properties
- [ ] used as frame for absolutely positioned child elements

### 4. `position: absolute`

Explain `absolute` positioning:

- [ ] element is removed from normal document flow
- [ ] element is positioned absolutely inside the `nearest non-static ancestor element`
- [ ] show properties `top`, `bottom`, `left`, `right`

### 5. `position: fixed`

Explain `fixed` positioning:

- [ ] element is removed from the normal document flow
- [ ] position the element on a fixed position on the screen
- [ ] not influenced by scrolling (stays at the specified position)
- [ ] `top`, `bottom` - for vertical scroll
- [ ] `left`, `right` - for horizontal scroll

### 6. `position: sticky`

Explain `sticky` positioning:

- [ ] the element is placed normally in the document flow
- [ ] keeps an offset relative to its nearest scrolling ancestor (i.e. appears like a fixed element)

### 7. Z-Index

Explain `z-index`:

- [ ] defines stacking order of HTML elements
- [ ] element with higher stacking order overlaps element with lower stacking order
- [ ] value:
  - [ ] integer number (negative numbers possible) or
  - [ ] `auto` (default): `z-index` equals parent element
- [ ] effects only `non-static elements`

---

## Process: Challenges

- [ ] Provide the [handout](css-positioning.md) for the students
- [ ] Provide the [challenges](challenges-css-positioning.md) for the students
- [ ] Open the challenges and walk the students through the tasks
- [ ] Divide the students in groups
- [ ] Remind them of the ground rules (Meet again 30min before lunch-break in the classroom / They
      can ask the coaches for help at any time / Always help each other / Take a break when you need
      it in the next 1.5h/ Keep an eye on Slack)

---

## Evaluate: Recap of the assignment / Discussion of MVP / Solution

- Come back to the question that was raised in the beginning of the session and try and answer it in
  a few phrases.

---

## Checkout

> 💡 In case the students seem frustrated try to find some encouraging words (e.g. remind them of
> how far they have come already) :)

- [ ] Summarize the day by repeating all the topics that were discussed
- [ ] Highlight the progress of the day
- [ ] Encourage the students to repeat what they learned with practical exercises
- [ ] Remind them to rest :)

## Keywords for Recap:

position, static, fixed, sticky, relative, absolute, z-index

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
