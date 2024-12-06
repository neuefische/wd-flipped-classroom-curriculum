# How to Capstone

## Learning Objectives

- Understanding the Capstone process
- Getting hints how to work efficiently in a group
- Learning how to give effective code reviews

## Requirements

- Agile Workflow and User Stories
- Capstone Grouping and Setup
- Capstone Prep

## Demo

You can use the [How to Capstone](../../workshops/how-to-capstone/index.md) marp slides ([english version](../../workshops/how-to-capstone_EN/index.md)) by running `npm run start` from the root of the `web-curriculum` project.
Alternatively, you can use the [excalidraw template](./assets/how-to-capstone.excalidraw) to visualize the journey of one user story through the project board.

---

## Session Guide

In this session, we’ll cover the essential steps for successfully navigating the Capstone project. This includes understanding the Capstone workflow and mastering the art of code reviews. By the end of this session, you’ll have a clear understanding of the Capstone process and be prepared to give constructive code reviews to improve both your own and your peers’ code quality.

> Why do you think code reviews are important in a team project, and how can both giving and receiving code reviews help us improve our skills as developers?

### Capstone Procedure

- Explain the general Capstone workflow, including:
  - Sprint timeline
  - Daily schedule
  - User story workflow with code review and quality assurance
  - Sprint planning
  - How to use the discussions board

### How to Code Review

- Highlight that giving code reviews has many benefits for the students:
  - They learn how to read code and understand code faster.
  - They get in contact with new patterns and ways of how to write code.
  - Code reviews should encourage discussions about code.
- Clone the [practice repository](https://github.com/wd-bootcamp/web-code-review-challenge). It has everything set up to create a PR with lots of problems 😈.
  ```shell
  git clone git@github.com:wd-bootcamp/web-code-review-challenge.git
  ```
- In order to persist the git history but also to practice in a separate repository, the students need to create a new remote repository and connect it to the cloned one.
- Show [the steps](./challenges-how-to-capstone.md#code-review) necessary to achieve this. Make sure that the students push the `main` branch first to the new repository. Otherwise it will not be recognized as the default branch.
- After creating the PR in the new remote repository, show the students the user interface for pull requests and explain the most important elements:
  - **Conversation Tab:** A timeline of the discussion about this PR, also includes the commit history.
  - **Changed Files Tab:** A place where all changes are displayed on a file by file basis.
  - **Commenting Changes:** Show how to comment on one and multiple lines of code in the "Changed Files" tab.
  - **Review changes:** Show how to submit a review and explain the 3 different categories: "Approve", "Comment" and "Request Changes".
- Explain that this PR has quite a lot of errors and bad practices. The challenge for this session is to find and comment on these. Highlight that they can find a list of bad practices in the [handout](./how-to-capstone.md#how-to-review-code) of this session and the [Capstone Docs](https://web-capstone-docs.neuefische.de/guides/code-reviews).
