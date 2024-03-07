# Dev for Des (web dev for designers)

Recommended schedule for this session:

| duration | content                     |
| -------- | --------------------------- |
| 0:45     | Session (intro + form demo) |
| 1:00     | Active Learning             |
| 0:15     | Break                       |
| 0:30     | Session (brief js demo)     |
| 0:45     | Active Learning             |
| 0:30     | Recap + Questions           |

## Learning objectives

- Students understand basics for forms
- Understand accessibility regarding labels
- Understand input types and required

---

## Inform: Session Guide

### Potentially show students the presentation (just schedule for today)

- Share this brief snippet of code. Explain if interest. (this will prevent the page breaking in CodePen when the form gets submitted)

```js
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  alert(JSON.stringify(data, null, 4));
});
```

- Show very basic form (but console log shows null for username)

```html
<form>
  <input type="text" />
  <button type="submit">Submit form</button>
</form>
```

- fix with name attribute

```html
<form>
  <input type="text" />
  <button type="submit">Submit form</button>
</form>
```

---

- show placeholder
- talk about accessibility and then bring in label
- potentially talk about type = reset

```html
<h1>My Form</h1>

<form>
  <div>
    <label for="username">Username:</label>
    <input
      type="text"
      id="username"
      name="username"
      placeholder="username e.g. bob231"
    />
  </div>
  <div>
    <label for="email">Email:</label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="email e.g. pete@shop.com"
    />
  </div>

  <button type="submit">Submit</button>
  <button type="reset">Reset</button>
</form>
```

- Potential challenge for the students: Create a form for a holiday booking. e.g. [CodePen demo](https://codepen.io/onemanwenttomow_nf/pen/GRLpepW). Bonus feature would be to look into the select element.
- This worked OK. In the future i would prefer a more inspiring challenge. Compared to the day before the students were not nearly as engaged.

---

BREAK

---

Provide a very short demo into CSS variables. This is useful for UX/UI students has they create something similar in figma.

- Potentially explain new css (i.e. \*, and comma separated declarations).
- Show the repetitive code (i.e. the primary color and the 20px padding.)
- Show that if we were asked to changed the colors of the site, we need to go and find every mention of blue and change it. (i show this site to get some random color themes -> [colorhunt](https://colorhunt.co/palettes/popular))

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}

body {
  font-family: "Arial", sans-serif;
  background-color: #f8f9fa;
  color: #1b3c73;
}

h1 {
  color: blue;
}

header,
footer {
  background-color: blue;
  color: white;
  text-align: center;
  padding: 20px;
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}

footer p {
  color: inherit; /* Explicitly inherit the color from the footer */
}

.content {
  padding: 20px;
}
```

- Refactor to use CSS variables

```css
:root {
  --primary-color: #007bff; /* Blue */
  --secondary-color: #6c757d; /* Gray */
  --padding: 20px;
}

* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  font-family: "Arial", sans-serif;
  background-color: #f8f9fa;
  color: #333; /* Dark gray */
  margin: 0;
  padding: 0;
}

header,
footer {
  background-color: var(--primary-color);
  color: white;
  text-align: center;
  padding: var(--padding);
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}

h1 {
  color: var(--primary-color);
}

p {
  color: var(--secondary-color);
}

footer p {
  color: inherit; /* Explicitly inherit the color from the footer */
}

.content {
  padding: var(--padding);
}
```

### CodePen Demos

- [CSS Variables - Start](https://codepen.io/onemanwenttomow_nf/pen/abxvPxY)

- [CSS Variables - Final](https://codepen.io/onemanwenttomow_nf/pen/LYvpMqB)
