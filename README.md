# Welcome to the new curriculum!

This is the work in progress of the new curriculum of the bootcamp Web Development. <br> This update
is aiming to improve the way our students learn. <br>

## How to contribute

There are two things to consider when assigning yourself to a ticket in the project:

- How much time do you have?
- How comfortable are you with your chosen topic?

---

Even with limited time, you can support us very well in this way:

- `Accompany a team` during a session and e.g. work on individual exercises.
- `Conduct reviews`
  - either entire sessions or parts, e.g. only the session guide
  - new challenges in neuefische/web-exercises

---

### Explanation of Tasks

- `Reviews` are usually the "quickest" task, when you have an hour in between.
- `Handouts` are usually the most time intensive, because we want them to be as complete as
  possible.
- `Challenges` are nice tasks when you feel comfortable with a topic or have experience with it. You
  can start by using one of the following templates on codesandbox:
  - [static HTML + CSS](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/templates/static-html-css)
  - [static HTML + CSS + JS](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/templates/static-html-css-js)
  - [pure JS](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/templates/javascript)
  - [React](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/templates/react)
  - [React + Styled Components](https://codesandbox.io/s/github/neuefische/web-exercises/tree/main/templates/styled-components)
- `Session guides` can in many cases take advantage of existing session material.
  - **Remember:** According to the new format, we want the students to spend more time with active
    learning than with listening to us, so think about which topics can be learned by reading the
    handout and doing the exercises instead of discussing them during the session (of course both
    still need to be feasible).
- `quiz.md` files need to be copied from our old curriculum. You can find them in the session folder
  in the `web-pool-2022` repository. Make sure that the questions still fit the content of the
  session. If there is no quiz.md, or you work on a new session, just create a new quiz.md and add
  new questions.

### Formatting

#### In Session Guides

- (mis-)use `code`-blocks to highlight important words
- use the schedule at the beginning of the file to describe the course of the session, e.g.
  - 45 min session / 90 min active learning / 30 min recap
  - 30 min object session / 45 min object exercises / 30 min array session / 45 min array exercises
    / 15 min recap
  - ...

#### In all material which is handed out to students

Use proper markdown semantics:

- hightlight words using **bold** text `**bold**`
- use code block only for code
- do not highlight written-out abbreviations (keep them as plain text): HTML (Hypertext Markup
  Language)

## To-Do's

There is a current [To-Do list](https://github.com/neuefische/web-curriculum-new-format/issues/41)
to keep an eye on.

## Our workflow

1. Go into the project
   [Curriculum Roadmap](https://github.com/neuefische/web-curriculum-new-format/projects/1).
2. Choose a ticket which has **no assignee** yet. (Try to get tickets done before you start a new
   one from the "Ready for Work" column). <br /> You have three options here:
   1. `Review a session` (session guide, handout, and challenges).
      1. For this, go to the linked pull request and review the text. Add changes with the
         `suggest changes` function.
   2. If you are short of time, `review a challenge in web-exercises`.
      1. Go to the linked pull request and look for a linked PR in neuefische/web-exercises.
      2. If necessary, plesae link both PRs via a comment.
      3. As soon as you are done and left a solution in web-exercises, comment on the new-format-PR
         to let us know how you've supported us.
   3. `Write a part yourself`.
      1. Ask the team how you can support.
      2. Go into the respective branch of the session, e.g. css-basics, and work on the topic that
         needs to be done next.
      3. When you are finished, commit and push your changes.
3. Assign yourself to the ticket.
4. Once you are done with the task, unassign yourself and put the ticket into the next column to the
   right. We always write the challenges first, then create the session guide and finally create the
   handout.

> A ticket undergoes the following stages:
>
> 1. In Progress: <br /> a) Challenges <br /> b) Session Guide <br /> c) Handout
> 2. Review
> 3. Done 🎉

With this workflow we stay on one feature branch per session, it will be merged into main after the
final review and adjustments.

### Making tickets "Ready to work"

1. Find a new topic from the Backlog.
2. Discuss with a group of coaches how we want to teach the topic.

> 💡 There is an
> [issue in web-exercises that has unmerged but already prepared exercises](https://github.com/neuefische/web-exercises/issues/102).
> Always check there if we can use an of those challenges.

3. Create a new branch for the session:

```
git switch -c my-awesome-session
```

4. Create a new session folder based on the session template. Use this script to do this:

```
npm run create-session
```

5. Add the results of the meeting to the README.md in bullet form.
6. Push the new branch to GitHub
7. Move the ticket to "Read to work" in the board.
8. Repeat this for each topic you want to prepare.

<br>

## Our goals are:

> 💡 **Self-sufficient learning**  
> to prepare the students for their learning path and entry into their professional life

> 💡 **Active and problem-based learning**  
> to offer a practical approach of learning according to
> [research](https://teaching.cornell.edu/teaching-resources/engaging-students/problem-based-learning)

> 💡 **Integration of a "safety net"/"backup"**  
> to make sure the students are following along with the content of the course

> 💡 **Balanced coders**  
> to actively make time to process the content, this is to increase motivation, productivity and
> focus for the students

> 💡 **Guest lectures for a broad skill-set**  
> to teach a broad collection of soft- and hard-skills that teach methodological approaches useful
> for the daily professional life

> 💡 **Balanced coaches**  
> to give more space for coaches to advance their personal development or contribute to in-house
> projects

## Daily routine

We have a target of 540 teaching minutes (= 9 hours or 12 teaching units (45 min)) per day.

| duration | teaching minutes | time          | content                  |
| -------- | ---------------- | ------------- | ------------------------ |
| 0:30     | 30               | 9:00 - 9:30   | Student Recap            |
| 0:45     | 45               | 9:30 - 10:15  | Session                  |
| 1:30     | 90               | 10:15 - 11:45 | Active Learning          |
| 0:30     | 30               | 11:45 - 12:15 | Recap                    |
| 0:45     | 45               | 12:15 - 13:00 | Guest Lecture / Breather |
| 1:00     | –                | 13:00 - 14:00 | Break                    |
| 0:30     | 30               | 14:00 - 14:30 | Recap / Q&A              |
| 0:45     | 45               | 14:30 - 15:15 | Session                  |
| 1:30     | 90               | 15:15 - 16:45 | Active Learning          |
| 0:30     | 30               | 16:45 - 17:15 | Recap                    |
| 1:45     | 105              | 17:15 - 19:00 | Independent project time |

## Sessions

Sessions are structured not by week - but by days. It does not matter which session is being held on
which day of the week. This is the recommended order of sessions. Morning sessions should be the
ones more challenging than afternoon sessions.

| day | morning                         | afternoon                      |
| --- | ------------------------------- | ------------------------------ |
| 1   | Welcome ✅                      | Github and Markdown ✅         |
| 2   | Shell Basics ✅                 | Git CLI & Remote ✅            |
| 3   | Git Branches and PRs ✅         | HTML and the Web ✅            |
| 4   | CSS Basics ✅                   | CSS Selectors ✅               |
| 5   | CSS Flexbox ✅                  | CSS Positioning ✅             |
| 6   | **Recap Project 1** ✅          | Accessibility ✅               |
| 7   | JS Basics ✅                    | CSS Structure ✅               |
| 8   | JS Variables and Numbers ✅     | CSS Grid ✅                    |
| 9   | JS Conditions and Booleans ✅   | CSS Responsive ✅              |
| 10  | JS Functions ✅                 | JS Functions 2 ✅              |
| 11  | HTML Forms ✅                   | JS Inputs and Strings ✅       |
| 12  | JS Objects and Arrays ✅        | JS Forms ✅                    |
| 13  | JS createElement ✅             | JS Forms 2 ✅                  |
| 14  | **Recap Project 2** ✅          | CSS Animations ✅              |
| 15  | JS Loops ✅                     | JS Callback Functions ✅       |
| 16  | JS Array Methods ✅             | npm and Linting Basics ✅      |
| 17  | JS Structure ✅                 | JS Array Methods 2 ✅          |
| 18  | JS Async Functions ✅           | JS Fetch ✅                    |
| 19  | Git Advanced ✅                 | JS Modern Syntax ✅            |
| 20  | JS Unit Testing                 | _Buffer_                       |
| 21  | **Recap Project 3**             | **Recap Project 3**            |
| 22  | React Basics                    | React Props                    |
| 23  | React Nesting                   | React Project Setup            |
| 24  | React State                     | React with Arrays              |
| 25  | React State 2                   | React State 3                  |
| 26  | React Effects and Fetch         | React Effects and localStorage |
| 27  | React Custom Hooks              | **Recap Project 4**            |
| 28  | Next.js Basics and Routing      | Next.js Dynamic Routes         |
| 29  | React Styled Components         | Storybook                      |
| 30  | React Component Testing         | React Global State             |
| 31  | React Immutable State           | React Data Fetching            |
| 32  | **Recap Project 5**             | **Recap Project 5**            |
| 33  | **Recap Project 5**             | **Recap Project 5**            |
| 34  | MongoDB Basics                  | Node Server                    |
| 35  | Next.js API Routes              | Mongoose                       |
| 36  | Next.js Rest API                | React Data Fetching 2          |
| 37  | MongoDB Atlas                   | **Recap Project 6**            |
| 38  | _Design Workshop_               | _Design Workshop_              |
| 39  | Agile Workflow and User Stories | _Agile Workshop_               |
| 40  | _Capstone Forum_                | _Capstone Forum_               |

## Further Reading

- [AVIVA Method](https://moodle.jku.at/jku/pluginfile.php/3829921/mod_resource/content/1/5S%C3%A4ulen%20der%20Unterrichtsvorbereitung.pdf)
- [AVIVA Method Blog Post](https://www.julia-training.com/blog/2017/10/30/optimal-lernen-mit-aviva)
- [problem based learning](https://citl.illinois.edu/citl-101/teaching-learning/resources/teaching-strategies/planning-a-class-session)
- [more problem base learning](https://teaching.cornell.edu/teaching-resources/engaging-students/problem-based-learning)
