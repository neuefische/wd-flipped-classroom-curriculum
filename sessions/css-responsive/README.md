# CSS Responsive

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] Understanding the concept of responsive design
- [ ] Understanding why we work mobile first (in design and CSS)
- [ ] Understanding relative units
- [ ] Understanding media queries

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

Websites need to work for a wide variety of devices, from mobile phones to desktop computers. We
need to make sure that our websites are responsive to the size of the screen they are being viewed
on. There are also accessibility features that can affect how a website should be displayed, like
high contrast mode, or reducing animations.

Media queries and relative units help to accomplish this.

### Why is the content of today's block that important for the students?

Responsive design is important for all websites, because it allows them to be viewed on a wide
variety of devices. It also helps to make sure that websites are accessible to all users.

### Pose a question to be answered by the end of the block!

How can we use CSS to react to different features of the medium that our website is being viewed on?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- HTML
- CSS Basics
- (fixed) CSS Units (px)
- CSS Variables

---

## Inform: Session Guide

### Responsive Design

- [ ] Open this [static example](https://iujmks.csb.app/)
      ([source](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/css-responsive/demo-example-static))
      and show how it behaves on different screen sizes
- [ ] Explain that this site does not respond to different screen sizes
- [ ] Open this [responsive example](https://r4djc5.csb.app/)
      ([source](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/css-responsive/demo-example-responsive))
      and compare how _it_ behaves on different screen sizes
- [ ] Explain that responsive design is a design that adapts to the screen size of the device it is
      being viewed on
- [ ] It can also mean adapting to other factors like orientation, color scheme, or accessibility
      needs
- [ ] Explain that it is a design principle that is very important as most people use mobile devices
      to access the web

### Responsive Units

- [ ] Explain that relative units are units that are relative to the size of the screen, the font
      size, or the size of the parent element
- [ ] Explain that the most common relative units are `vh`, `vw`, `em`, `rem`, and `%`. The `calc()`
      function can help combine multiple units and do math
- [ ] Open the
      [demo on CodeSandbox](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/css-responsive/demo-start)
      and walk students through the current state of the demo.
- [ ] Explain the relative units step by step.

You can find the
[final state of the demo on CodeSandbox](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/css-responsive/demo-end).

#### Percentage: `%`

- [ ] Explain that the percentage unit indicates how large an element is in relation to its parent element.
- [ ] Show that the `.box--percent` currently does not change when adjusting the screen because of its `width: 100px`.
- [ ] Set the `width` to `50%` and explain the behavior:
  - [ ] The blue box takes up 50% of the width of the parent element (the grey box).
  - [ ] Adapting the screen size will change the blue box, but it always has 50% width of the parent container.

```css
.box--percent {
  ...
	width: 50%;
	height: 100px;
}
```

#### Viewport Width: `vw`

- [ ] Explain that the `vw` unit is relative to the width of the screen (and not the parent element as `%`).
- [ ] Note that we set the exact value by an integer between 1 and 100:
  - [ ] `25vw` mean 25% of the entire screen width.
- [ ] Set the `width` of the `.box--vw` to `50vw` and show the difference to the `.box--percent`.

```css
.box--vw {
  ...
	width: 50vw;
	height: 100px;
}
```

#### Viewport Height: `vh`

- [ ] Explain that `vh` behaves the same as `vw`, but according to the `height`:
  - [ ] it takes an integer between 1 and 100
  - [ ] the value indicates what percentage of the screen height the element occupies
- [ ] Adapt the `width` property of `.box--vh` to occupy 50% of the screen height.
- [ ] Show that changing the height of the screen (i.e. the CodeSandbox Browser) will change the `width`

```css
.box--vh {
  ...
	width: 50vh;
	height: 100px;
}
```

#### Measuring according to font size: `em`

- [ ] Explain that `1em` corresponds to the font size of
  - [ ] the parent element in case of typographical properties like `font-size` or
  - [ ] the current element itself in case of other properties like `width`.
- [ ] Note that this allows for flexible and scalable typography or you want the padding of something stays always the same according to the size of the font.
- [ ] Explain that you want the `width` and `height` of `.box--em` to be 5 times as the font size (`32px`), 160px in total.
- [ ] Show that changing the font-size will change the measures of the box as well.

```css
.box--em {
  font-size: 32px;
  width: 5em;
  height: 5em;
}
```

#### Using the font size of the root element: `rem`

- [ ] Note that there is a quite similar relative unit called `rem`.
- [ ] Explain the difference to `em`: it takes the `font-size` of the root element of the document.
- [ ] This font-size is either declared in the `html` tag or uses the default browser font size (in Firefox it is 16px).
- Show how to set the `width` and `height` of the `box--rem` element to 80px using `rem`:

```css
.box--rem {
  font-size: 32px;
  width: 5rem;
  height: 5rem;
}
```

- [ ] Show that changing the `font-size` for this element does not affect its size.
- [ ] Now change the `font-size` of the root `html` element to `20px` and show the difference (the pink box should now have 100px):

```css
html {
  font-size: 20px;
}
```

#### Calculating values with `calc()`

- [ ] Explain that the `calc()` function lets us do math and use the learned relative units to create the value we need for width or/and height.
- [ ] Show how to calculate the `width` to be half as wide as the parent element minus two times the current font size:

```css
.box--calc {
  font-size: 32px;
  width: calc(50% - 2em);
  height: 100px;
}
```

### Media Queries

- [ ] Explain that media queries are a way to target different

  - media types
  - screen sizes
  - orientations
  - color schemes
  - accessibility needs (prefers-reduced-motion, etc.)
  - pointer device types.

- [ ] Explain that you want to meet the requirements of the `.box--min-width`:
  - [ ] We need to distinguish between `200px` and `400px` depending on a condition (`min-width` of `768px`).
  - [ ] Explain that we can use the `@media` at-rule to check for this condition and specify the CSS rules which should be applied.
  - [ ] Note that we only need to put the properties that change in the media query.

```css
.box--min-width {
  background-color: lightgrey;
  width: 200px;
  height: 100px;
}

@media (min-width: 768px) {
  .box--min-width {
    width: 400px;
  }
}
```

- [ ] Show how to combine multiple min-width media queries
  - [ ] Explain the requirements of the `.box--min-width-2`.
  - [ ] Note that it's easier to start with the smallest screen size and work your way up:

```css
.box--min-width-2 {
  background-color: lightcoral;
  width: 100%;
  height: 100px;
}

@media (min-width: 768px) {
  .box--min-width-2 {
    width: 75%;
  }
}

@media (min-width: 1024px) {
  .box--min-width-2 {
    width: 300px;
    background-color: lightgreen;
  }
}
```

- [ ] Explain that media queries are not only used for screen sizes, but also for other factors like
      orientation, color scheme or accessibility needs.
- [ ] Add the code to meet the requirements of the `.box--color-scheme`.
- [ ] Change your preferred color scheme in your operating system to see how it works.

```css
@media (prefers-color-scheme: dark) {
  .box--color-scheme {
    background-color: black;
    color: white;
  }
}
```

### Mobile First Design

- [ ] Since most people use mobile devices to access the web, it is a good idea to design for mobile
      first
- [ ] By starting small and then adding more complex layouts as the screen size increases, you can
      ensure that the most important content is always visible first

### Mobile First CSS

- [ ] Explain that mobile first CSS is a convention that is used to make it easier to reason about
      the CSS structure
- [ ] You can start with the smallest screen size and then add more complex CSS as the screen size
      increases

### Responsive Images

- [ ] Explain that the handout contains a section about changing images based on media queries
      (using the `picture` element) and that this will be part of a bonus challenge.

---

## Process: Challenges

- [ ] Provide the [handout](css-responsive.md) and the [challenges](challenges-css-responsive.md) to
      the students
- [ ] Open the handout and walk the students through the tasks
- [ ] Divide the students into groups of ~4
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

@media, responsive design, mobile first, vh, vw, em, rem, %, calc(), media queries, min-width

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
