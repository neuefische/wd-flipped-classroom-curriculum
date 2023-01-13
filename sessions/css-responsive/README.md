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
      and go through the different units and explain their behavior.

You can find the
[final state of the demo on CodeSandbox](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/css-responsive/demo-end).

### Media Queries

- [ ] Explain that media queries are a way to target different

  - media types
  - screen sizes
  - orientations
  - color schemes
  - accessibility needs (prefers-reduced-motion, etc.)
  - pointer device types

- [ ] Come back to the
      [demo on CodeSandbox](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/sessions/css-responsive/demo-start)
  - Explain how min-width media queries work using the demo
  - Explain how to combine multiple min-width media queries using the demo (always start with the
    smallest screen size and work your way up)
  - Explain that you only need to put the properties that change in the media query
  - Explain that media queries are not only used for screen sizes, but also for other factors like
    orientation, color scheme or accessibility needs
  - Show the color scheme example in the demo and change your preferred color scheme in your
    operating system to see how it works

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
