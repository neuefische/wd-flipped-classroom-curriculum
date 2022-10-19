# Git Branches & PRs

> 💡 feel free to create a personal branch of this guide to add your own notes

| duration | content         |
| -------- | --------------- |
| 1:00     | Session         |
| 1:15     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] what git branches are and how to use them.
- [ ] what pull requests are and how to use them.
- [ ] how branches and pull requests facilitate collaboration.

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

- Working on the main branch is dangerous, since you might introduce a bug into the production
  version of your application
- A save workflow is needed where features can be developed and tested without breaking the main
  version of the application
- This workflow is git feature branches

### Why is the content of today's block that important for the students?

- using git branches full potential is mandatory if you want to work in the industry

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- [ ] git commits
- [ ] git repositories
- [ ] pushing to main branch

---

## Inform: Session Guide

### Git Feature Branch Workflow

- [ ] Explain why we need a more robust workflow
- [ ] During the session, you can create the following sketch of the git feature branch workflow,
      starting with step 1 and finishing with step 4. <br>
      <img src="assets/git-basics-branching-workflow.png" width="450">

### 1. Git Branches

- [ ] highlight, that we can create different versions of our code in git.
- [ ] sketch how git branches work <br> <img src="assets/branches.png" width="450">

- [ ] highlight, that creating a new branch does not copy the whole git history, but creates just a
      new label for the current commit
- [ ] show how to create a new branch

  - [ ] `git switch -c <branch name>`
  - [ ] `git switch <branch name>`

- [ ] create some commits on the feature branch
- [ ] show how you can now switch between different versions of the code by switching branches
- [ ] highlight, that students can always create a test branch if they want to try out ideas in a
      save environment

### 2. Git Push

- [ ] show how to push the new feature to the remote repository
- [ ] highlight, that this is needed so that others can `review` the changes
- [ ] `git push -u origin <feature branch name>`

### 3. Git pull requests

- [ ] show, how a typical review process works
- [ ] explain, what a pull request is, how to write comments and view the differences introduced by
      the PR
- [ ] explain, what `merging` means and merge the PR

### 4. Git Pull

- [ ] show, that the feature is now included in the main branch
- [ ] tell the students, that the local main branch needs to be updated
- [ ] switch to the main branch on the local machine
- [ ] `git pull` / `git pull -u origin main`
- [ ] finish the excalidraw sketch and show once more the workflow steps.

---

## Process: Project / Assignment

- [ ] Provide the [handout](git-branches-and-prs.md) to the students
- [ ] Open the handout and walk the students through the tasks
- [ ] Divide the students into groups
- [ ] Remind them of the ground rules:
  - meet again 30 min before lunch break in the class room
  - they can ask the coaches for help at any time
  - always try to help each other
  - take a break within the next 1.5 hrs
  - keep an eye on Slack
- [ ] ❗️ Make sure that the students are not lost in the workflow
- [ ] ❗️ You should perform one code review per group, so that the students learn how a good review
      looks like.

---

## Evaluate: Recap of the assignment / Discussion of the MVP / Solution

- Revisit the question that was posed in the beginning of the session and try to answer it with a
  few phrases.
- Show the excalidraw sketch once more and ask the students why we do every step.

---

## Checkout

> 💡 In case the students seem frustrated try to find some encouraging words (e.g. remind them of
> how far they have come already) :)

- [ ] Summarize the day by repeating all of the topics that were discussed
- [ ] Highlight the progress made that day
- [ ] Encourage the students to repeat what they learned with practical exercises
- [ ] Remind them to rest :)

## Keywords for Recap:

branch, git switch, git checkout, pull request, code review, git branch

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
