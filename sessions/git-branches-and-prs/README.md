# Git Branches & PRs

## Learning objectives

- what git branches are and how to use them.
- what pull requests are and how to use them.
- how branches and pull requests facilitate collaboration.

---

- Working on the main branch is dangerous, since you might introduce a bug into the production
  version of your application
- A save workflow is needed where features can be developed and tested without breaking the main
  version of the application
- This workflow is git feature branches

### Why is the content of today's block that important for the students?

- using git branches full potential is mandatory if you want to work in the industry

---

### Required

- git commits
- git repositories
- pushing to main branch

---

## Session Guide

### Git Feature Branch Workflow

- Explain why we need a more robust workflow
- During the session, you can create the following sketch of the git feature branch workflow,
  starting with step 1 and finishing with step 4. <br>
  <img src="assets/git-basics-branching-workflow.png" width="450">

### 1. Git Branches

- highlight, that we can create different versions of our code in git.
- sketch how git branches work <br> <img src="assets/branches.png" width="450">

- highlight, that creating a new branch does not copy the whole git history, but creates just a
  new label for the current commit
- show how to create a new branch

  - `git switch -c <branch name>`
  - `git switch <branch name>`

- create some commits on the feature branch
- show how you can now switch between different versions of the code by switching branches
- highlight, that students can always create a test branch if they want to try out ideas in a
  save environment

### 2. Git Push

- show how to push the new feature to the remote repository
- highlight, that this is needed so that others can `review` the changes
- `git push -u origin <feature branch name>`

### 3. Git pull requests

- show, how a typical review process works
- explain, what a pull request is, how to write comments and view the differences introduced by
  the PR
- explain, what `merging` means and merge the PR

### 4. Git Pull

- show, that the feature is now included in the main branch
- tell the students, that the local main branch needs to be updated
- switch to the main branch on the local machine
- `git pull` / `git pull -u origin main`
- finish the excalidraw sketch and show once more the workflow steps.

---
