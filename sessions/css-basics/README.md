# CSS Basics

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | time          | content         |
| -------- | ------------- | --------------- |
| 1:00     | 9:15 - 10:15  | Session         |
| 1:30     | 10:15 - 11:45 | Active Learning |
| 0:15     | 11:45 - 12:00 | Recap           |

## Learning objectives

- [ ] What is CSS?
  - [ ] know difference between HTML/CSS
  - [ ] meaning behind the name CSS (`Cascading Style Sheets`)
- [ ] fundamentals of CSS:
  - [ ] `CSS syntax`: CSS ruleset (`selector`, `declaration`, `property`, `value`)
  - [ ] `selectors`: `universal` selector, `type` selectors, `class` selectors
  - [ ] `box model`: `border box` vs `content box` and the property `box-sizing`
  - [ ] `inline & block elements`
- [ ] how to link stylesheets

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

How can we style our HTML elements as efficiently as possible.

### Why is the content of today's block that important for the students?

We often need to change the look of our HTML elements to make them fit to a design. And we want to
be able to apply these stylings to different elements to have a common look and to avoid repetitive
code.

### Pose a question to be answered by the end of the block!

How can I make it that the same stylings apply to multiple elements?

---

## Activate prior knowledge of students

We should not assume that students already have prior knowledge for CSS. But you can go into it
knowing that we've already learned how to structure our web page with HTML and will now understand
how to style those elements.

### Which previously learned concepts will be utilized in this session?

- HTML Basics

---

## Inform: Session Guide

**Notes:**

[One challenge](./css-basics.md/#personal-website-part-3) is to apply the stylings to the personal
website. Therefore, it should be considered that the students have already created a basic HTML
structure for their project.

### What is CSS?

Explain what CSS is based on an example.
[See CSS Basics Codesandboxes as example.](https://codesandbox.io/dashboard/all/CSS%20Basics?workspace=2ad16d97-42cf-49d7-aa8d-e3587729c609)

- [ ] **Definition**: CSS means Cascading Stylesheets. While HTML defines the structure and
      semantics of your content, we use CSS for design and layout.

- [ ] **Purpose**: CSS is a declarative language that controls how web pages look in the browser.
      The basic goal of CSS is to provide elements of the page with certain features like colors,
      positioning or decorations.

- [ ] **Meaning** of the **terms** `Cascading` and `Stylesheets`:
  - `Cascading`: Cascading refers to the cascade, an algorithm that defines the order in which
    stylings are applied to elements. It is often the case that there are several competing stylings
    for an element. The cascade solves this problem. **Note:** The students will learn more about
    the cascade in following sessions.
  - `Stylesheet`: A style sheet consists of several of stylings that we declare with CSS and that
    determine the layout of the web page.

### Syntax

Explain the syntax of a CSS rule/ruleset. You don't need to declare each part in deep, but you
should cover the following terms:

- [ ] **Selector**: A CSS selector is used to specify the elements to which CSS rules apply.
- [ ] **Property**: Name for a particular property to which a value is attributed.
- [ ] **Value**: The value we assign to a property.
- [ ] **Declaration**:Each pair of property and value is a declaration.

It may help to explain the syntax with a scribble in Excalidraw:

![CSS Syntax](assets/css-syntax.png)

https://excalidraw.com/#json=6vTcgdviz8myOb-GrVCpe,zqt5qrO_mqG-hWCTMEwJRQ

### Basic selectors

Show and explain the most basic selectors based on the example with which you started the session:

- [ ] `universal` selector (may be introduced later when explaining the `box model` and
      `box-sizing`):

  - Selects all elements.
  - Syntax: `*`

- [ ] `element` or `type` selector:

  - Selects all elements of a specific type.
  - Syntax: `elementName` like `article`, `section` or `body`
  - Explain that you can create a rules for your body that will be handed down through inheritance.
    We recommend defining font rules on the body of your page.
    ```css
    body {
    	font-family: ...;
    }
    ```

- [ ] `class` selector:

  - Selects all elements that have the given class attribute.
  - Syntax: `.classname` for example `.button`, `.highlighted` or `.list`

Show useful `CSS properties` that the students may need later for the challenges. Suitable examples
could be:

- `background-color`
- `color`
- `border`
- `border-radius`
- `text-decoration`
- `text-align`

### Box model & `box-sizing`

To make good layouts with CSS and to understand how the styling with CSS works, the students should
learn to understand the **box model** and why the `property` `box-sizing` is very helpful.

- [ ] **Box model**: Every element is a rectangular box. This means that everything has a box around
      it. Every box consists of four parts. Explain via a scribble in Excalidraw:

![box model](assets/box-model.png)

- [ ] Explain the following terms:

  - `Content`: The actual content of the element.
  - `Padding`: Space between the content and the border of the element.
  - `Border`: The border of the element.
  - `Margin`: The space around the border and other elements. An empty / outermost area around the
    border area, separates the element from its neighbors.

- [ ] Explain how we can change from `content-box` to `border-box` with the `box-sizing` property:

  - Questions you should answer: How is the size of this box calculated? And why do we use
    `box-sizing: border-box`?
  - **Benefit:** Calculating sizes of elements is easier and more intuitive with `border-box`
  - With the `property` `box-sizing` we determine how the total width and height of an element is
    calculated.
  - Show an example where you can visualize the difference `box-sizing: border-box` makes in
    comparison to `box-sizing: content-box`.
    [See **CSS Basics: Box-sizing** Codesandboxes as example.](https://codesandbox.io/dashboard/all/CSS%20Basics?workspace=2ad16d97-42cf-49d7-aa8d-e3587729c609)

### Inline & block elements & `display`

Show the differences between inline and block elements (based on your starter Codesandbox):

- As every element on a web page is a rectangular box how much space do they take by default? It
  depends on whether the elements are inline or block elements.
- [ ] **Block elements**:
  - The width of a block element depends on the available space within its parent element.
  - By default, the block element always takes the full width unless you have changed the value
    yourself with CSS.
  - Each new block element also creates another paragraph: subsequent elements slide under the block
    element.
  - Common block elements: `<article></article>` `<section></section>`, `<p></p>` `<nav></nav>`, the
    headings from `h1` to `h6`
- [ ] **Inline elements**:
  - Wrapping parts of a text in inline elements does not break the flow of the text.
  - An inline element will apply margin and padding, but break to the next line.
  - Margin and padding will push elements only horizontally and not vertically.
  - An inline element will apply declaration with `width` and `height`.
  - Common inline elements: `<em></em>`, `<strong></strong>` and `<span></span>`.

### How to link stylesheets

Explain what a stylesheet is and create a separate CSS stylesheet

- [ ] Show students how to link the stylesheet to their HTML file

### **Optional:** Show [Google-Fonts](https://fonts.google.com/) and how to import a Google font

Mention that there are three possibilities:

- use `@import` in your css file
- use `link` element in the html file
- download the font and add it to the project by using `@font-face`

> ❗️ For legal reasons we only want to show the option of downloading and hosting fonts yourself.
> This is the only option we want to encourage the students to use.

- Show how to download and add a google font using the
  [google webfonts helper](https://google-webfonts-helper.herokuapp.com/fonts)

---

## Process: Challenges

- [ ] Provide the [handout](css-basics.md) to the students
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

ruleset, type selector, class selector, box model, stylesheet

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
