# Git CLI and Remote

## Learning Objectives

- Using version control locally to create repositories and commits
- Understanding and controlling the different states of files
- Synchronizing local repositories with remote repositories (e.g., on GitHub)

## Requirements

- GitHub and Markdown

## Demo

There is no pre-built demo for this session. The demo will be built from scratch during the session to demonstrate how to work with Git on the command line.

---

## Session Guide

Today, you will learn how to use Git, one of the most essential tools in a developer’s toolkit. You’ll discover how to use version control to return to the latest version of a project or file if something goes wrong and how to share your code with the world on GitHub.

> How can version control help you manage your code more effectively and avoid losing work?

### Recap: GitHub and Markdown

- Recap what the students learned in their first session `GitHub and Markdown`.
- Ask them about:
  - Commits
  - Repositories
  - Git workflow (creating commits after each important step)
- Explain that they will learn today how to do these steps on their local machine and connect their progress to the remote version of their code on GitHub.

### Git Init

Show how to initialize a Git repository:

- `mkdir new-project` - Create a new folder.
- `cd new-project` - Go into the new folder.
- `git init` - Turn the folder into a local repository.
- Show that the folder becomes a repository through the hidden `.git` folder.
- Show that you can delete the repository by deleting the folder.
- Create a `.gitignore` file and add `.DS_Store` to the file. Explain that inside the DS_Store file are listed display configurations by macOS, that are not interesting for our remote repository. This is why we want Git to ignore it.
- Explain that everything we add to the `.gitignore` file will not be committed to our remote repository.

### Git Commit

**1. Explain the different states a file inside a repository can be in**

- Untracked - A file has never been part of a commit and therefore is not a part of the repository yet.
- Modified - A file is tracked by Git but has changed since the last commit.
- Staged - The changes in the file are prepared to become part of the next commit (it is put onto a stage with other changes to take a snapshot of everything on that stage later).
- Committed - The file / changes have become part of the commit. Untracked files become part of the repository and will be tracked from now on.

<img src="assets/untracked.png" alt="untracked" width="400">

**2. Show how to commit changes made to a file in the repository**

> 💡 Use Excalidraw to explain the Git workflow while making commits.

- `git status` - See what the current state of the files in your repository are.
- `git add <filename>` - Put the changed file on the stage.
- `git status`
- `git commit -m "add foo"` - Create a new savepoint including every change on the stage.
- `git status`
- `git log --oneline` - Show the latest git history.

**3. Show how to return to the latest version of a file if something goes wrong (why whe use Git in
the first place)**

- Create some more commits (add some more content to the file you are working on).
- Now simulate a massive error, e.g. deleting the content of a file and save it.
- `git status` - You will see the untracked changes.
- `git restore <filename>` - Reset the file to the last committed state.
- `git restore .` - Show that you can reset the whole repository to the state of the last commit if necessary.

### Git Remote Repositories

**1. Show how students can connect a remote repository to their local repository**

> 💡 Use Excalidraw to explain how commit histories differ between local and remote repository.

- Mention that the SSH connection needs to be setup, which we will do later in the session.
- For now they just need to watch and try to understand the necessary steps.

On GitHub:

- Create a new repository without a `README.md`.
- Copy the SSH link.

Inside the local repository:

- `git remote -v` - Check which remote repositories are already connected (none of course).
- `git remote add origin <ssh link>` - Add our new GitHub repository to the remote repositories under the name `origin`.
- Explain that one local repository can have multiple remote repositories, therefore they need a name to distinguish them.
- `git remote -v` - Show that our repository shows up in the remote repository list.
- `git push -u origin main` - Push all commits to the remote repository, highlight that `-u origin main` is only necessary when pushing for the first time.

**2. Show how to clone an existing repository to the local machine**

On GitHub:

- Copy the SSH key of the repository.

In the terminal, outside of any other repository:

- `git clone <ssh link>` - A new folder gets created containing the cloned repository.
- Point out that a new folder gets created when cloning a repository, and that you should not clone a repository while being in another repository.
- Note that the local repository will be named exactly like the remote repository.
