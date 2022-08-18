# Accessibility

> 💡 feel free to create a personal branch of this guide to add your own notes

| duration | content         |
| -------- | --------------- |
| 9:59     | Session         |
| 9:59     | Active Learning |
| 9:59     | Recap           |

## Learning objectives

- [ ] what accessibility is and why it is important for web developers
- [ ] what the benefits of semantic HTML are
- [ ] how to make code accessible

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

- You will be aware of the importance of accessibility
- You will learn how to build accessible web applications

### Why is the content of today's block that important for the students?

> Why this topic is imporant is [part of the session itself](#why-should-i-care-about-accessibility)
> :)

### Pose a question to be answered by the end of the block!

---

## Activate prior knowledge of students

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

### Which previously learned concepts will be utilized in this session?

- Semantic HTML

---

## Inform: Session Guide

### Why should I care about accessibility?

- [ ] Explain web accessibility (short [a11y](https://en.wikipedia.org/wiki/Numeronym)):
      `websites, tools and technologies that are designed and developed so that people with disabilities can use them`.
- [ ] Explain what disabilities affect interaction/access: `auditory`, `cognitive`, `neurological`,
      `physical`, `speech`, `visual`
- [ ] Explain how accessibility `benefits all people`: different screen sizes, changing abilities
      due to aging, temporary disabilities, situational limitations, slow Internet connection.
- [ ] Show
      [this chart from Microsoft](https://user-images.githubusercontent.com/5230863/180420356-992fb11b-8834-47b6-92a6-90ba59dbf93d.png)[^1]
      to explain how disabilities can be very situational.
- [ ] Explain that a11y is required by law in many situations (e.g. for
      [public sector bodies in the EU](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016L2102&from=de)).
- [ ] Access to information and communications technologies, including the Web, is defined as a
      basic human right in the United Nations Convention on the Rights of Persons with Disabilities
      ([Source](https://www.un.org/en/webaccessibility/index.shtml)).
- [ ] Explain that the web is an increasingly important resource (digital government offices, etc.).
- [ ] Explain that accessibility also improves `inclusivity`.
- [ ] Explain that it is `unethical to build inaccessible` software.
  - Sometimes features are inherently inaccessible or the decision to do something inaccessible was
    made by others: Sometimes the only accessible/ethical thing _you_ can do is `saying no`.
- [ ] Explain that it increases business potential (better job chances, better hiring chances for
  employers, SEO, etc.).
- [ ] You can ask students to watch
      [this 7 minute video about web accessibility perspectives](https://www.youtube.com/watch?v=3f31oufqFSM).

### How to: WCAG, Colors and Semantic HTML

- [ ] Show the [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) (Web Content Accessibility
      Guidelines) and give a broad overview:
  - `Color contrast` using this [contrast checker](https://webaim.org/resources/contrastchecker/)
    (important, take your time here!)
  - `Keyboard` accessibility (built-in via link, button, etc.)
  - Accessible `Pagelayout` (landmarks, headings, etc.)
  - `Alt` texts for images
  - Understandable `content` (language alà simplified english, complexity)
- [ ] Show how to create an accessible pagelayout using semantic HTML and landmarks:
  - Start with [this CodeSandbox](https://codesandbox.io/s/semantic-html-starter-hgyeig)
  - Add `h1`, `h2`, `h3`, `main`, `p`, `section`, `ul` and `li`
  - Here is the
    [final result CodeSandbox](https://codesandbox.io/s/semantic-html-final-result-df9ofo)
- [ ] Explain that [ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) (Accessible Rich
      Internet Applications) is an extension to HTML (and other web technologies), that can be used
      if the built-in HTML features are not enough to describe what something is or does
      semantically.
  - Whenever possible, use semantic HTML elements
  - `aria-label` example:
    - `<button><img src="/edit-icon.png" /><button>` Inaccessible. Will be read by a screen reader
      alà: "button with content, image"
    - `<button><img src="/edit-icon.png" alt="Edit text" /><button>` Better. Will be read by a
      screen reader alà: "button with content, image, edit text"
    - `<button aria-label="Click to edit text"><img src="/edit-icon.png" alt="" /><button>` Good.
      Will be read by a screen reader alà: "button with label, click to edit text"

### Tools

- [ ] Present these tools, that can help to identifiy accessibility issues:
  - [axe Accessibility Linter](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter)
  - [Lighthouse](https://developers.google.com/web/tools/lighthouse)
  - [axe devTools](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US)
  - [webaim wave runner](https://wave.webaim.org/waverunner)

---

## Process: Challenges

- [ ] Provide the [handout](accessibility.md) to the students
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
  few phrases: Why should we care about accessibility?: We want to include as many people as
  possible, good for business, good for SEO, improves overall user experience of our web
  applications.

---

## Checkout

> 💡 In case the students seem frustrated try to find some encouraging words (e.g. remind them of
> how far they have come already) :)

- [ ] Summarize the day by repeating all of the topics that were discussed
- [ ] Highlight the progress made that day
- [ ] Encourage the students to repeat what they learned with practical exercises
- [ ] Remind them to rest :)

## Keywords for Recap:

A11y, WCAG, ARIA, Semantic HTML, Color Contrast,

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.

[^1]:
    You can find the full pdf file on [microsoft.com/design](https://www.microsoft.com/design).
    Scroll down and download "Inclusive 101". It's a great read for preparing this session.
