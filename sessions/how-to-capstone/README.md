# How to Capstone

## Learning objectives

- Understand the capstone process
- Get hints how to work efficiently in a group
- learn how to give code reviews

---

## Session Guide

### Capstone Procedure

- Explain the general capstone workflow. This includes
  - sprint timeline
  - daily schedule
  - user story workflow with code review and quality assurance
  - sprint planning
  - how to use the discussions board
- You can use the [how to capstone](../../workshops/how-to-capstone/index.md) marp slides ([english version](../../workshops/how-to-capstone_EN/index.md)) by running `npm run start` from the root of the web-curriculum project.
- Alternatively, you can use the [excalidraw template](./assets/how-to-capstone.excalidraw) to visualize the journey of one user story through the project board.

### How to Code Review

- Highlight that giving code reviews has many benefits for the students:
  - they learn how to read code and understand code faster
  - they get in contact with new patterns and ways of how to write code
  - code reviews should encourage discussions about code.
- Clone the [practice repository](https://github.com/neuefische/web-code-review-challenge). It has everything set up to create a PR with lots of problems 😈.
  ```shell
  git clone git@github.com:neuefische/web-code-review-challenge.git
  ```
- In Order to persist the git history but also to practice in a separate repository, the students need to create a new remote repository and connect it to the cloned one.
- Show [the steps](./challenges-how-to-capstone.md#code-review) necessary to achieve this. Make sure that the students push the `main` branch first to the new repository. Otherwise it will not be recognized as the default branch.
- After creating the PR in the new remote repository, show the students the user interface for pull requests and explain the most important elements:
  - conversation tab: a timeline of the discussion about this PR, also includes the commit history.
  - changed files tab: a place where all changes are displayed on a file by file basis.
  - commenting changes: show how to comment on one and multiple lines of code in the "changed files" tab.
  - review changes: show how to submit a review and explain the 3 different categories "approve", "comment" and "request changes".
- Explain that this PR has quite a lot of errors and bad practices. The challenge for this session is to find and comment on these. Highlight that they can find a list of bad practices in the [handout](./how-to-capstone.md#how-to-review-code) of this session.

---
