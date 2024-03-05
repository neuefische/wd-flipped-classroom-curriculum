# Dev for Des (web dev for designers)

Recommended schedule for this session:

| duration | content                     |
| -------- | --------------------------- |
| 0:45     | Session (intro + html demo) |
| 0:45     | Active Learning             |
| 0:15     | Break                       |
| 0:30     | Session (brief css demo)    |
| 0:45     | Active Learning             |
| 0:30     | Recap + Questions           |

## Learning objectives

- Give UX/UI students a taste of web development.
- Understand how the web works
- Get a feel for HTML, CSS (and JS)

---

## Inform: Session Guide

### Show students the presentation

Idea is that students get a (very) brief overview of the web. As well as a quick demo of some html tags in CodePen. They then break into groups to create an html card.

- Show the minimizing of CSS and JS panes
- Show the most tags need to be opened and closed (like a door). Content goes in-between the tags.
- Potentially [show mdn web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements). (Can highlight here that each element has it's own rules or best practices i.e. only 1 h1 per page).
- Get students to create a "card" about a character. e.g. [Mooncake Card](https://codepen.io/onemanwenttomow_nf/full/ZEZGRWR)

```html
<h1>Welcome to HTML</h1>
<p>
  Hello, students! This is your first HTML page. Isn't it exciting? We can make
  unordered lists
</p>

<ul>
  <li>I am a list item</li>
  <li>Some tags can be nested inside others. i.e. this li inside a ul</li>
  <li>I am another list item</li>
</ul>

<p>We can make ordered lists.</p>

<ol>
  <li>I am an ordered list item</li>
  <li>I am another ordered list item</li>
  <li>Please note the numbers</li>
</ol>

<p>
  We can link to other resources e.g. Please note that the browser adds default
  styling.
</p>

<a href="https://www.google.co.uk/">A link to Google</a>

<button>
  We can make buttons. Please note that i am inline rather than block.
</button>

<img src="https://picsum.photos/200/300" alt="a random placeholder image" />
```

---

BREAK

---

We meet back to go over (again very briefly) what css is, and how we can use it. i.e. classes. syntax etc

- Explain that to style the website we need to add CSS.
- Drag open the CSS pane on CodePen
- Show targeting elements by tag
- Show that we can target elements by class. Need to add class attribute to html element. Then need to target class in CSS with the .

```css
li {
  background-color: red;
  border: 5px solid black;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
}

.highlighted {
  background-color: hotpink;
}
```

- Show inheritance with font-family or background-color on the body tag (need to talk briefly about body tag)

```css
body {
  font-family: "Arial", sans-serif;
  background-color: lightblue;
}
```

- We can briefly show specificity (comment in and out the .highlighted declaration).

```css
p {
  background-color: blue;
}
```

- Also, order matters.

```css
p {
  background-color: blue;
}

p {
  background-color: green;
}
```

Students go back to breakout rooms to add some CSS to their cards.

Meet back again at the end of day to review and answer questions

Day 1 is only HTML and CSS (day 2 is forms (labels and inputs), and maybe some js at the end if time...)

### CodePen Demos

Yes... the are a lot of potential improvements. e.g. I decided not to talk about semantic markup. There are only 2 morning sessions available and not everything can be covered.

- [HTML only](https://codepen.io/onemanwenttomow_nf/pen/ZEZGRWR?editors=1010)

- [HTML + CSS](https://codepen.io/onemanwenttomow_nf/pen/zYXGaBM)

- [HTML + CSS + JS (final version)](https://codepen.io/onemanwenttomow_nf/pen/LYvVGbB)
