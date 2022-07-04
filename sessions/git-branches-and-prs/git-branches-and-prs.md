# Git Branches & PRs

## Learning Objectives

In this session you will learn:

- [ ] why the following concepts are important for collaboration.
- [ ] what git branches are and how to use them.
- [ ] what Pull Requests are and how to use them.

---

## Git Branches

When working on a project, especially as a team, we need `one official version` of the project or a `single source of truth`. This is the `main` branch (in older projects it was called `master`). If we want to add new features we create a alternative version of our project or `feature branch`. Here we can create new code `without changing the official version` or `main` branch. This is an important concept for working on a project as a team. Because if we make a mistake we can easily revert to the `main` branch and don't get problems with other versions (branches). You can `switch` between branches to see what changes have been made to other version of the project.

### Git `branch` commands

| command                        | functionality                                 |
| ------------------------------ | --------------------------------------------- |
| `git branch`                   | list branches                                 |
| `git branch -a`                | list all branches (local and remote)          |
| `git branch <branchname>`      | create a new branch                           |
| `git branch -d <branchname>`   | delete the branch                             |
| `git switch -c <branchname>`   | create a new branch with the switch command   |
| `git checkout -b <branchname>` | create a new branch with the checkout command |
| `git switch <branchname>`      | switch to that branch                         |
| `git checkout <branchname>`    | another way to switch branch                  |

## Git Pull Requests

If your work on a `branch` with new code is finished, you wan't to get a `review` and bring the `feature` into the `main` branch. Therefore we use something called `pull request`. A pull request is a request to `merge` a branch into another branch. But before we `merge` we always need a `code review` from other developers to make sure that the changes are working and don't have any mistakes. With this concept we make sure that we have better code quality with less bugs.

### Basic Workflow for a Pull Request

1. Create a new branch with `git branch <branchname>`
2. Make changes to the code
3. Push the changes and the new branch with `git push -u origin <branchname>` (after you have done this once you can use `git push` for this branch)
4. Create a pull request on GitHub from the new branch into `main`
5. Share the pull request with your team
6. Review the pull request, implement changes if needed, push again to update the pull request until it gets approved
7. Merge the pull request into `main`
8. Delete the new branch on GitHub and locally
9. Don't forget to `git pull` inside the `main` branch on your local machine

# Project: Project Name

### Part 1

### Part 2

---

## Resources
