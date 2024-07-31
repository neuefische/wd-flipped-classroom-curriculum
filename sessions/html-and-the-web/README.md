# HTML Basics and the Web

## Active Learning

This is an Active Learning session for the students. That means that the coach assigned to the session only needs to provide a brief 5-10 minute intro. The old session guide is retained below in case it is decided to be used as a one-off.

- [Introduce](#active-learning-intro) the topic for 5 - 10 minutes
- Share [challenges](challenges-html-and-the-web.md) and [learning document](html-and-the-web.md) with the students

## Session Guide

## Learning objectives

- An answer to "What is the web?"
- How to write HTML
- How HTML documents are structured
- Understanding and applying semantic HTML

---

### Why is the content of today's block that important for the students?

- You will get an understanding about the very basics / the foundation of how the web works.
- You will have a solid foundation to build upon and expand your knowledge and skills.
- You will create your first website today, a big step towards becoming a developer!

- With semantic HTML you will learn how to write better code because
  - it's more accessible
  - it's SEO optimized
  - it's better understandable for other developers

### Question

- Why do we **want** to write semantic HTML?

---

### Required

- Optional: Prior knowledge of HTML

---

## Session Guide

> ❗️ Before diving into the depths of HTML, ask the students how many of them already have prior
> knowledge of HTML and how comfortable they are with it. Let them know that any prior understanding of HTML is not a prerequisite to this session.

## Active Learning Intro

> ⚠️ Since this is the first **Active Learning** session, you may want to give the students a little overview regarding what an Active Learning session is, what the intended goals are, etc.
>
> **What is an Active Learning session?**
>
> - Students autonomously acquire knowledge via handouts or interactive work files
> - Every AL sessions comes with a handout and challenges; frequently also with additional content
> - Students reinforce new concepts via challenges
> - The goal is for students to wrestle with a subject on their own to build their confidence level, for them to structure their approach to learning and to slice concepts into smaller, more easily digestible portions
>
> **What is the structure of an Active Learning session?**
>
> - A coach gives a quick overview of the subjects and a small intro
> - The coach hands out any material that comes with the session
> - The students are separated into groups and work through the material
> - To wrap up the session there is a brief recap unit
> - The students are encouraged to find answers to potential questions on their own

- Outline the objectives of this particular AL session

  - getting an initial feeling for how the web works
  - understanding client/server communication (a bit)
  - developing a concept of what URLs, DNS resolution, and the request-response cycle is
  - writing HTML
  - the importance of _semantic_ HTML

- Describe the web as a network of interconnected computers, like connecting points in a spider's web
- _Optional: Mention how the web was invented_
  > Tim Berners-Lee invented the World Wide Web while working at CERN in 1989. He proposed a "universal linked information system" using several concepts and technologies, the most fundamental of which was the connections that existed between information. He developed the first web server, the first web browser, and a document formatting protocol, called Hypertext Markup Language. [Source](https://en.wikipedia.org/wiki/History_of_the_World_Wide_Web)
- Give a brief overview over HTML and what it is
  - the markup language used to structure websites
  - follows a specific syntax
- Inform the students that - while they are learning - they need to pay special attention to proper syntax and structure
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

- Remind the students to read the provided material carefully and perhaps take some notes for themselves if they like

---
