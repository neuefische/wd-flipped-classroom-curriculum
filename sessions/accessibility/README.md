# Accessibility

## Active Learning

This is an Active Learning session for the students. That means that the coach assigned to the session only needs to provide a brief 5-10 minute intro. The old session guide is retained below in case it is decided to be used as a one-off.

- Intro topic for 5 - 10 mins
- Share [Challenges](challenges-accessibility.md) with the students.

---

## Active Learning Intro

> You can use the intro from the old session guide to explain [why we should care about accessibility](#why-should-i-care-about-accessibility).

---

## Session Guide

## Learning objectives

- what accessibility is and why it is important for web developers
- what the benefits of semantic HTML are
- how to make code accessible

---

- You will be aware of the importance of accessibility
- You will learn how to build accessible web applications

### Why is the content of today's block that important for the students?

> Why this topic is important is [part of the session itself](#why-should-i-care-about-accessibility)
> :)

---

- Ask students: "Do you know of any examples of accessibility outside the digital world?"

  - Answers could include (you might give hints):
    - orientation systems for blind people using tactile pavement
    - wheelchair ramps
    - audible signals or countdowns for traffic lights
    - high contrast road signs

- Ask students: "Did you (or your parents/grandparents) ever have any problems to use websites or
  apps?"

  - Discuss and explore some stories. Maybe have your own a11y horror story prepared.

- Ask students: "Why should **you** care about accessibility?"
  - Just collect some answers and tell them that's what you'll discuss now.

### Required

- Semantic HTML

---

## Session Guide

### Why should I care about accessibility?

- Explain web accessibility (short [a11y](https://en.wikipedia.org/wiki/Numeronym)):
  `websites, tools and technologies that are designed and developed so that people with disabilities can use them`.
- Explain what disabilities affect interaction/access: `auditory`, `cognitive`, `neurological`,
  `physical`, `speech`, `visual`
- Explain how accessibility `benefits all people`: different screen sizes, changing abilities
  due to aging, temporary disabilities, situational limitations, slow Internet connection.
- Show
  [this chart from Microsoft](https://user-images.githubusercontent.com/5230863/180420356-992fb11b-8834-47b6-92a6-90ba59dbf93d.png)[^1]
  to explain how disabilities can be very situational.
- Explain that a11y is required by law in many situations (e.g. for
  [public sector bodies in the EU](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016L2102&from=de)).
- Access to information and communications technologies, including the Web, is defined as a
  basic human right in the United Nations Convention on the Rights of Persons with Disabilities
  ([Source](https://www.un.org/en/webaccessibility/index.shtml)).
- Explain that the web is an increasingly important resource (digital government offices, etc.).
- Explain that accessibility also improves `inclusivity`.
- Explain that it is `unethical to build inaccessible` software.
- Sometimes features are inherently inaccessible or the decision to do something inaccessible was made by others: Sometimes the only accessible/ethical thing _you_ can do is `saying no`.
- Explain that it increases business potential (better job chances, better hiring chances for employers, SEO, etc.).
- You can ask students to watch [this 7 minute video about web accessibility perspectives](https://www.youtube.com/watch?v=3f31oufqFSM).

### How to WCAG

#### Colors

- Show the [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) (Web Content Accessibility
  Guidelines) and give a broad overview:
  - `Color contrast` using this [contrast checker](https://webaim.org/resources/contrastchecker/)
    (important, take your time here!)
  - `Keyboard` accessibility (built-in via link, button, etc.)
  - Accessible `Pagelayout` (landmarks, headings, etc.)
  - `Alt` texts for images
  - Understandable `content` (language alà simplified english, complexity)

#### Semantic HTML

Use this demo by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/accessibility/demo-start
```

You can check out the final version of this demo by running this command in your Terminal:

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/accessibility/demo-end
```

- Show how to create an accessible pagelayout using semantic HTML and landmarks
  - Add `h1`, `h2`, `h3`, `main`, `p`, `section`, `ul` and `li`
- Explain that [ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) (Accessible Rich
  Internet Applications) is an extension to HTML (and other web technologies), that can be used
  if the built-in HTML features are not enough to describe what something is or does
  semantically.
- Use the VoiceOver feature from Mac to demo how a website is read for folks who can't see.
  - Whenever possible, use semantic HTML elements
  - `aria-label` example:
    - `<button><img src="/edit-icon.png" /></button>` Inaccessible. Will be read by a screen reader
      alà: "button with content, image"
    - `<button><img src="/edit-icon.png" alt="Edit text" /></button>` Good. Will be read by a
      screen reader alà: "Edit text - button with content"
    - `<button aria-label="Click to edit text"><img src="/edit-icon.png" alt="" /></button>` Good.
      Will be read by a screen reader alà: "Edit text - button with content"

### Tools

- Present these tools, that can help to identifiy accessibility issues:
  - [axe Accessibility Linter](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter)
  - [Lighthouse](https://developers.google.com/web/tools/lighthouse)
  - [axe devTools](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US)
  - [webaim wave runner](https://wave.webaim.org/waverunner)

---
