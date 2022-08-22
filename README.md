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
- `Challenges` are nice tasks when you feel comfortable with a topic or have experience with it.
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
      1. For this, go to the linked Pull Request and review the text. Add changes with the
         `suggest changes` function.
   2. If you are short of time, `review a challenge in web-exercises`.
      1. Go to the linked Pull Request and look for a linked PR in neuefische/web-exercises.
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

| duration | time          | content                  |
| -------- | ------------- | ------------------------ |
| 0:15     | 9:00 - 9:15   | Student Recap            |
| 0:45     | 9:15 - 10:00  | Session                  |
| 1:30     | 10:00 - 11:30 | Active Learning          |
| 0:30     | 11:30 - 12:00 | Recap                    |
| 1:00     | 12:00 - 13:00 | Break                    |
| 0:45     | 13:00 - 13:45 | Guest Lecture            |
| 0:45     | 13:45 - 14:30 | Breather                 |
| 0:45     | 14:30 - 15:15 | Session                  |
| 1:30     | 15:15 - 16:45 | Active Learning          |
| 0:30     | 16:45 - 17:15 | Recap                    |
| 2:00     | 17:15 - 19:15 | Independent project time |

## Sessions

Sessions are structured not by week - but by days. It does not matter which session is being held on
which day of the week. This is the recommended order of sessions. Morning sessions should be the
ones more challenging than afternoon sessions.

| day | morning                      | afternoon                                     | project                                               | guest lecture                                                                                           |
| --- | ---------------------------- | --------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 1   | Welcome                      | Github and Markdown                           | profile README                                        | Meet your teammates                                                                                     |
| 2   | Shell Basics & Setup         | Git CLI & remote & ssh Setup                  | Treasure hunt & Session Notes / Learnings Collection  | Our communication goals                                                                                 |
| 3   | Git branches & pull requests | HTML Basics and the Web                       | Session Notes / Learnings & Personal Website (part 1) | How to ask good questions                                                                               |
| 4   | CSS Basics                   | CSS Selectors                                 | TBD Personal Website (part 2) & ...                   | How to work in a group effectively                                                                      |
| 5   | CSS Flexbox                  | CSS Positioning                               | TBD Personal Website (part 3) & flexbox game.         | How to google fast and smart & A Dev's best friends: MDN & Stackoverflow introduction                   |
| 6   | `Repetition Project`         | A11y                                          | ...                                                   | Habits for sucess: How you can support your body and brain when learning new skills (Sleep edition)     |
| 7   | JS Basics                    | CSS Structure                                 | ...                                                   | Habits for sucess: How you can support your body and brain when learning new skills (Nutrition edition) |
| 8   | JS Variables and Numbers     | CSS Grid                                      | ...                                                   | Habits for sucess: How you can support your body and brain when learning new skills (Movement edition)  |
| 9   | JS Conditions Booleans       | CSS Responsive                                | ...                                                   | Why we love Open Source                                                                                 |
| 10  | JS Functions                 | JS Functions 2                                | ...                                                   | Design Workshop 1                                                                                       |
| 11  | HTML Forms                   | JS Inputs and Strings                         | ...                                                   | Design Workshop 2                                                                                       |
| 12  | JS Callback Functions (neu)  | JS Forms                                      | ...                                                   | Design Workshop 3                                                                                       |
| 13  | JS createElement             | JS Forms 2                                    | ...                                                   | Design Workshop 3                                                                                       |
| 14  | `Repetition Project`         | CSS Animations                                | ...                                                   |
| 15  | JS Objects and Arrays        | JS Loops (neu)                                |                                                       |
| 16  | JS Array Methods             | npm basics                                    |                                                       |
| 17  | JS Array Methods 2           | JS Structure                                  |                                                       |
| 18  | JS Fetch                     | Async Await (neu)                             |                                                       |
| 19  | Git Advanced                 | ES Next                                       |                                                       |
| 20  | `Repetition Project`         | Linting Basics & Debugging (with console.log) |                                                       |
| 21  | JS Unit Testing              | Buffer                                        |                                                       |

The following is unsorted and there for the sole purpose of showing how much time is left to be
distributed:

| day | morning                          | afternoon                      |
| --- | -------------------------------- | ------------------------------ |
| 22  | React basics                     | React props #1                 |
| 23  | React props #2                   | React useState and events #1   |
| 23  | React arrays                     | React useState and events #2   |
| 24  | React useState and events #3     | React useEffect and fetch      |
| 25  | React useEffect and localStorage | `Repetition Project`           |
| 26  | React Storybook                  | React Styled Components        |
| 27  | React Router                     | React PropTypes                |
| 28  | React Component Testing          | React custom hooks             |
| 29  | React error handling             | React helpful libraries        |
| 30  | React global state               | `Large Repetition Project`     |
| 31  | `Large Repetition Project`       | `Large Repetition Project`     |
| 32  | Node basics                      | Node CLIs                      |
| 33  | Node basics                      | MongoDB basics                 |
| 34  | Mongoose                         | MongoDB Atlas                  |
| 35  | Express #1                       | Express #2                     |
| 36  | Vercel Serverless Functions #1   | Vercel Serverless Functions #2 |
| 37  | `Repetition Project`             | Buffer                         |
| 38  | Buffer                           | Buffer                         |
| 39  | Capstone Forum / Agile week      | Capstone Forum / Agile week    |
| 40  | Capstone Forum / Agile week      | Capstone Forum / Agile week    |

## Further Reading

- [AVIVA Method](https://moodle.jku.at/jku/pluginfile.php/3829921/mod_resource/content/1/5S%C3%A4ulen%20der%20Unterrichtsvorbereitung.pdf)
- [AVIVA Method Blog Post](https://www.julia-training.com/blog/2017/10/30/optimal-lernen-mit-aviva)
- [problem based learning](https://citl.illinois.edu/citl-101/teaching-learning/resources/teaching-strategies/planning-a-class-session)
- [more problem base learning](https://teaching.cornell.edu/teaching-resources/engaging-students/problem-based-learning)
