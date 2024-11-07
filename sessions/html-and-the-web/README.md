# HTML Basics and the Web

## Learning Objectives

- An answer to "What is the web?"
- How to write HTML
- How HTML documents are structured
- Understanding and applying semantic HTML

## Requirements

none.

## Demo

There is no demo for this session.

---

## Session Guide

> This is an active learning session, this means that the session should take up to 5-10 minutes. The session is meant as an introduction into the topic, most concepts will be learned independently by the students with the help of the active learning material.

We use the web every day but seldom reflect on what happens behind the scenes. As a web developer a fundamental understanding of how the web functions and what needs to happen until the content of a website is displayed on the users screen is with no doubt mandatory.

> What happens when we visit a website?

### Active Learning Intro

Since this is the first **Active Learning** session, you may want to give the students a little overview regarding what an Active Learning session is, what the intended goals are, etc.

- Students autonomously acquire knowledge via handouts or interactive work files.
- The goal is for students to wrestle with a subject on their own to build their confidence level, for them to structure their approach to learning and to slice concepts into smaller, more easily digestible portions.
- A coach gives a quick overview of the subjects and a small intro.
- The students are encouraged to find answers to potential questions on their own.

### How the Web Works

- Describe the web as a network of interconnected computers, like connecting points in a spider's web.
- Highlight that when a user visits a website, they in fact send a request for a specific HTML document through this network and download a copy of that websites content to their own computer.
- Point out that we can change our local version of the website by changing the HTML content in the developer tools. But that when we reload the page we download a new copy of the website and the changes are lost.

### HTML Syntax

- Give a brief overview over HTML and what it is
  - The markup language used to structure websites,
  - Follows a specific syntax: Tags like `<body>` which can be nested into each other.
  - This nested list of elements gives a website its structure.
- Inform the students that - while they are learning - they need to pay special attention to proper syntax and structure.
- Give one quick example of an HTML tag and proper nesting

  ✅

  ```html
  <p>Hello, my name is XYZ!</p>
  <ul>
    <li>My first list item.</li>
    <li>My second list item.</li>
  </ul>
  ```

  ❌

  ```html
  <div>
    <p></p>Hello, my name is XYZ!
    <!-- Oops! We put the content outside of the <p> tag. -->
    <ul>
      <li>My first list item.</li>
      <li>My second list item.</ul></li>
       <!-- Oops! We accidentally included an additional </ul> and nested incorrectly. -->
    </ul>
  ```

- Remind the students to read the provided material carefully and perhaps take some notes for themselves if they like.
