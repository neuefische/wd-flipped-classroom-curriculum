# Dev for Des (web dev for designers)

Recommended schedule for this session:

| duration | content                              |
| -------- | ------------------------------------ |
| 0:45     | Session (intro + css variables demo) |
| 1:00     | Active Learning                      |
| 0:15     | Break                                |
| 0:30     | Session (brief forms demo)           |
| 0:45     | Active Learning                      |
| 0:30     | Recap + Questions                    |

## Learning objectives

- Students understand basics for forms
- Understand accessibility regarding labels
- Understand input types and required

---

## Inform: Session Guide

### Potentially show students the presentation (just schedule for today)

- [CSS Variables - Start](https://codepen.io/onemanwenttomow_nf/pen/NWmeZdN?editors=1100)

- [CSS Variables - Final](https://codepen.io/onemanwenttomow_nf/pen/LYvpMqB)

Provide a very short demo into CSS variables. This is useful for UX/UI students has they create something similar in figma.

- Potentially explain new css (i.e. \*, and comma separated declarations).
- Show the repetitive code (i.e. the primary color and the 2rem padding.)
- Show that if we were asked to changed the colors of the site, we need to go and find every mention of blue and change it.

```css
:root {
  --primary: #377cfb; /*  blue  */
  --secondary: #66cc8a; /*  green  */
  --bc: #ffffff; /*  white  */
  --color: #333c4d; /*  dark grey  */

  --padding: 2rem;
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
  background-color: var(--bc);
  color: var(--color);
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

header,
footer {
  color: var(--primary);
  text-align: center;
  padding: var(--padding);
}

header {
  border-bottom: 4px solid var(--secondary);
}

footer {
  border-top: 4px solid var(--secondary);
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  width: 24rem;
  border: solid 2px var(--secondary);
}

.card-body {
  display: flex;
  flex-direction: column;
  padding: var(--padding);
  gap: 0.5rem;
}

.btn-primary {
  background-color: var(--primary);
}
```

- Talk about wanting to build a dark mode button. For that we will need some dark css variables.

```css
:root {
  --primary: #377cfb; /*  blue  */
  --secondary: #66cc8a; /*  green  */
  --primary-dark: #ff79c6; /*  pink  */
  --secondary-dark: #bd93f9; /*  purple  */
  --bc: #ffffff; /*  white  */
  --bc-dark: #282a36; /*  dark grey  */
  --color: #333c4d; /*  dark grey  */
  --color-dark: #f8f8f2; /*  beige  */

  --padding: 2rem;
}
```

- We will also need to add a checkbox to our html.
- You can point out the label for accessibility.

```html
<label for="theme">Dark Mode </label>

<input id="theme" type="checkbox" />
```

- We then need some css to check if the checkbox is checked or not. We can use a pretty new feature called has.

```css
body:has(#theme:checked) {
  --primary: var(--primary-dark);
  --secondary: var(--secondary-dark);
  --bc: var(--bc-dark);
  --color: var(--color-dark);
}
```

### CodePen Demos

- [CSS Variables - Start](https://codepen.io/onemanwenttomow_nf/pen/abxvPxY)

- [CSS Variables - Final](https://codepen.io/onemanwenttomow_nf/pen/LYvpMqB)

---

BREAK

---

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
