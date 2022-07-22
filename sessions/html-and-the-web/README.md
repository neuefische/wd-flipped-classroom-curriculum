# HTML basics and the web

> 💡 feel free to create a personal branch of this guide to add your own notes

## Learning objectives

- [ ] How to write HTML
- [ ] How HTML documents are structured
- [ ] Understanding and applying semantic HTML

---

## Arrival: Motivate students and prepare them for the topic

> 💡 Breathe and relax :)

### Why is the content of todays block so important for the students?

- You will get an understanding about the very basics / the foundation of how the web works.
- You will have a solid foundation to build upon and expand your knowledge and skills.
- You will create your first website today, a big step towards becoming a developer!

### Which important problem will we solve today?

- With semantic HTML you will learn how to write better code because
  - it's more accessible
  - it's SEO optimized
  - it's better understandable for other developers

### Raise a question to be answered by the end of the block

- Why do we **want** to write semantic HTML?

---

## Activate prior knowledge of students

### Which prior knowledge will be used for this session?

- You will use git and GitHub for your project.
- You will use a workflow that is based on best practices and done in the same way in many
  companies: You will use branches and pull request - and get reviews from coaches or other
  students.
- If you have prior knowledge of HTML, you will expand and apply it today.

---

## Inform: Sessionguide

> ❗️ Before diving into the depths of HTML, ask the students how many of them already have prior
> knowledge of HTML and how comfortable they are with it. If all of the students have some
> understanding of HTML you can skip or summarize the first part of the session.

### What is HTML?

> 💡 Hint: to visualize this quite theoretical session, use the following keywords and
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator) to generate all the
> keywords in an exalidraw and structure them according to your explanation

> `HTML = HyperText Markup Language, link a webpage to another webpage, syntax to structure and format documents, <button type="button">Click me!</button>, HTML Element, HTML Tag, </>, HTML Attribute <p>Click <strong>this</strong>!<p>), `

- [ ] HTML is short for `HyperText Markup Language`.
- [ ] It is not considered a programming language, as `you can't write logic` with it. But
      nevertheless it is an extremely important part of the internet as we know it today.
- [ ] It is giving content on websites `meaning and structure`. You can imagine HTML as the skeleton
      or the most basic building block of the Web. <br> <br> Let's analyze the word for more
      clarification:
- [ ] `Hypertext`: Refers to the ability of HTML to create links that link one webpage to another.
      (Either on a single website or in between different websites.) This is a fundamental aspect of
      the web and the idea behind the "world wide" interconnection.
- [ ] `Markup Language`: Refers to a syntax that uses specific element to structure or format a
      document. You have already learned about a markup language, which is called "Markdown". While
      Markdown has a very simple syntax and is primarily used for formatting, HTML is more complex
      and its primarily used to structure a document.

  > Your explanation in excalidraw could look like this:

<img src="./assets/HTML.png" alt="HTML Explanation" width=500>
<br>
<br>

### How to write HTML

- [ ] `HTML element`: every piece of content in a HTML document is placed inside of an HTML element
- [ ] `HTML tags`: the elements are written in form of HTML tags, meaning surrounded by `<>` and
      `</>`
- [ ] `HTML attributes`: some HTML elements need additional information in order to work properly.
      This information is given by HTML attributes
- [ ] `local attributes`: There are attributes that are specific to some HTML elements, for example
      `src', which only makes sense if a resource is supposed to be embedded into the webpage (e.g.
      images or videos)
- [ ] `global attributes`: There are also attributes that can be added to any kind of element. (e.g.
      class, id, style, hidden)

> Your explanation in excalidraw could look like this:

<img src="./assets/HTMLelement.png" alt="HTML Element Explanation" width=500>
<br>
<br>

### Nesting elements

Two more interesting things to know about HTML:

- [ ] it is possible to nest elements in other elements (e.g. `<p>click <strong>this</strong>!<p>`)
- [ ] the element inside of another element is called `child element`
- [ ] the wrapping element is called `parent element`

### Self-closing elements

- [ ] some elements are `empty elements`, which means they contain no content.
- [ ] those empty elements are always `self closing elements`, which means they don`t have a closing
      tag, as they don't need to wrap around content
- [ ] examples are images, links, inputs, meta

### The HTML document

> For this part of the session you can continue the demonstration in VS Code

Start with a short explanation of Emmet.

- [ ] `Emmet` is a tool, which is already integrated into VS Code. It autocompletes our code, which
      makes the workflow much faster.
- [ ] By starting to type the name of the element and then clicking `tab`, Emmet does it's magic.

> Then type `! tab` and walk the students through the document flow:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

- [ ] `<!DOCTYPE html>`: an almost ancient relique of the early HTML (1991/92) that ensures the
      document behaves correctly
- [ ] `<html>`: wraps around the entire content of a page (aka `root element`)
- [ ] `<head>`: wraps around every element, which is relevant for your page to function, but which
      is not content in the sense of visibly showing up on the webpage. (e.g scrips, links, keywords
      for SEO,...)
- [ ] `<meta>`: is an element which provides "metadata" about your document. Metadata is information
      about the data in your document. (e.g. charset determines the valid characters with are used
      on the webpage)
- [ ] `<title>`: sets the title of the page, which appears in the browser tab.
- [ ] `<body>`: contains all the visible content of your webpage. This is where the real magic
      happens.

### Semantic HTML

Writing semantic HTML means writing "meaningful" HTML, in the sense that the element itself provides
information about its content.

> Copy this snippet into your body element from before

```
<div>
<div>Hello World</div>
  <div>
    <div>
      I am training to becoming a Web Dev. Therefore I love coding.
      Other things i like are:
    </div>
    <div>
      <div>good food</div>
      <div>hanging out with my friends</div>
      <div>sunny days</div>
    </div>
  </div>
</div>
```

> Change the tags to semantic HTML, if you have time you can make this part interactive by asking
> the students for their ideas

```
<main>
<h1>Hello World</h1>
      <article>
            <p>I am training to becoming a Web Dev. Therefore I love coding. Other things i like are:</p>
            <ul>
                  <li>good food</li>
                  <li>hanging out with my friends</li>
                  <li>sunny days</li>
            </ul>
      </article>
</main>
```

#### The benefits of writing semantic HTMl are:

- [ ] `Accessibility`: Screenreaders can function much better with semantic HTML, which can help
      e.g. visually impaired users to navigate the webpage and have a better user experience
- [ ] `SEO`: It's relevant for search engines to evaluate the importance and the context of the
      different parts of a web page
- [ ] `Readability`: It's easier for other developers to understand your code. And also for yourself
      in the future!

---

## Process: Challenge

- [ ] Provide the [handout](html-and-the-web.md) for the students
- [ ] Open the handout and walk the students through the tasks
- [ ] Divide the students in pairings
- [ ] Remind them of the ground rules (Meet again 30min before lunchbreak in the classroom / They
      can ask the coaches for help at any time / Always help each other / Take a break when you need
      it in the next 1.5h/ Keep an eye on Slack)

---

## Evaluate: Recap of the assignment / Discussion of MVP / Solution

- Come back to the question that was raised in the beginning of the session and try and answer it in
  a few phrases.
- Why do we WANT to write semantic HTML? Click [here](#the-benefits-of-writing-semantic-html-are)
  for the answer

---

## Checkout

> 💡 In case the students seem frustrated try to find some encouraging words (e.g. remind them of
> how far they have come already) :)

- [ ] Summarize the day by repeating all the topics that were discussed
- [ ] Highlight the progress of the day
- [ ] Encourage the students to repeat what they learned with practical exercises
- [ ] Remind them to rest :)

## Keywords for Recap:

HTML = HyperText Markup Language, HTML Element, HTML Tag, HTML Attribute, Semantic HTML, `<div>`,
`<section>`, <>, </>,

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
