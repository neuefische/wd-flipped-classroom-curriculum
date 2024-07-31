# Git CLI and Remote

## Learning objectives

- to use version control locally to create repositories and commits.
- understanding and controlling the `different states` of files.
- to synchronize local repositories with remote repositories (on GitHub for example).

---

- You will learn today one of the most important tools you will need in your development career.
- How return to the latest version of a project / file when something goes wrong.
- You will learn how to share your code with the world on GitHub.

### Why is the content of today's block that important for the students?

- git is an industry standard, it is a requirement for most almost all open positions as a
  developer.
- git helps the students when they accidentally mess up their code, so they can always go back to
  the last save point

---

- recap what the students learned in their first session `GitHub and Markdown`
- ask them about
  - commits
  - repositories
  - git workflow (creating commits after each important step)
- tell the students that they will learn today how to do these steps on their local machine and
  connect their progress to the remote version of their code on github

### Required

- git terminology (repository, commit)
- basic markdown syntax (later in the challenges)

---

## Session Guide

### Git init

**1. Show how to initialize a git repository.**

- `mkdir new-project` - create a new folder
- `cd new-project` - go into the new folder
- `git init` - turning the folder into a local repository
- show that the folder becomes a repository through the hidden .git folder
- show that you can delete the repository by deleting the folder
- create a `.gitignore` file and add `.DS_Store` to the file. Explain that inside the DS_Store
  file are listed display configurations by macOS, that are not interesting for our remote
  repository. This is why we want git to ignore it.
- explain that everything we add to the `.gitignore` file will not be committed to our remote
  repository

### Git commit

**1. Explain the different states a file inside a repository can be in.**

- untracked - a file has never been part of a commit and therefore is not a part of the
  repository yet.
- modified - a file is tracked by git but has changed since the last commit
- staged - the changes in the file are prepared to become part of the next commit (it is put
  onto a stage with other changes to take a snapshot of everything on that stage later).
- committed - the file / changes have become part of the commit. Untracked files become part of
  the repository and will be tracked from now on.

<img src="assets/untracked.png" alt="untracked" width="400">

**2. Show how to commit changes made to a file in the repository.**

> 💡 Use Excalidraw to explain the git workflow while making commits

- `git status` - see what the current state of the files in your repository are
- `git add <filename>` - put the changed file on the stage
- `git status`
- `git commit -m "add foo"` - create a new savepoint including every change on the stage
- `git status`
- `git log --oneline` - show the latest git history

**3. Show how to return to the latest version of a file if something goes wrong. (why whe use git in
the first place)**

- create some more commits (add some more content to the file you are working on)
- now simulate an massive error, e.g. deleting the content of a file and save it.
- `git status` - you will see the untracked changes
- `git restore <filename>` - reset the file to the last committed state.
- `git restore .` show that you can reset the whole repository to the state of the last commit
  if necessary.

### Git remote repositories

**1. Show how students can connect a remote repository to their local repository.**

> 💡 Use Excalidraw to explain how commit histories differ between local and remote repository

- mention that the ssh connection needs to be setup, which we will do later in the session.
- For now they just need to watch and try to understand the necessary steps.

on GitHub:

- on github - create a new repository without a README.md
- copy the ssh link

inside the local repository:

- `git remote -v` looking which remote repositories are already connected - none of course
- `git remote add origin <ssh link>` - adding our new GitHub repository to the remote
  repositories under the name `origin`
- explain that one local repository can have multiple remote repositories, therefore they need a
  name to distinguish them.
- `git remote -v` showing that our repository shows up in the remote repository list
- `git push -u origin main` - pushing all commits to the remote repository, highlight that -u
  origin main is only necessary when pushing for the first time

**1. Show how to clone an existing repository to the local machine.**

on GitHub:

- copy the ssh key of the repository

in the terminal, outside of any other repository:

- `git clone <ssh link>` - a new folder gets created containing the cloned repository.
- point out that a new folder gets created when cloning a repository, and that you should not
  cloning a repository while being in another repository.
- when using this command the local repository will be named exactly like the remote repository

### Git Setup and Challenge Preparation

- Provide the [handout](git-cli-and-remote.md) and the
  [challenges](challenges-git-cli-and-remote.md) to the students

Guide the students through the Setting up git and GitHub step as described in the challenges file.

---
