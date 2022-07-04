# Git CLI & remote

## Learning Objectives

In this session you will learn:

- [ ] to use version control locally to create repositories and commits.
- [ ] about the `three states` of files.
- [ ] to synchronize local repositories with remote repositories (on GitHub for example).

---

## Git CLI

You have installed the Git Software on your machine. That means you can create repositories and commits on your own hard drive. You can also synchronize your local repository with a `remote repository` which can be on GitHub for example.
This way you have your project saved on GitHub which enables whole teams to work on the same `remote repository`. The remote repository also serves as a backup in case your hard drive breaks.
We interact with git over the terminal using git commands which you will learn today.

### Creating local repositories

You can turn any folder on your hard drive into a `local git repository`. That means that git will track all changes to files we make in that folder. We will create a folder for each of your projects and every one of those folders / projects will be a git repository.
To turn a folder into a git repository you need your first git command:

| Git command | Git task                          |
| ----------- | --------------------------------- |
| `git init`  | create a new local git repository |

In your terminal you can navigate into any folder in your file system and use the `git init` command to turn that folder into a local repository. Git will create a hidden `.git folder` in your local repository. This folder contains all the information about the repository and its commit history. Never touch or modify anything in that folder.

### States of files

If we have a repository on GitHub we can create / modify / delete files, and through a few button clicks create a commit which entails all the changes we have made and creates a new "snapshot" of our repository.
We can do the same thing through our terminal with local repositories. To understand how this happens we have to know about the different states a file can be in in our local repository.

Tracked files:
Tracked files are files that Git knows about. All tracked files were in the last snapshot.
Tracked files can be in different states:

- modified: A file is modified when it has changed since the last commit
- staged: A file is staged when we told git to include the changes in the next commit. One way to think of it is as if the file is sitting in the waiting room - waiting to be committed.
- committed: A file is in the committed state when it has not changed since the last commit.

Untracked files:
Untracked files are files that are not in the latest snapshot and have not been staged. Git does not yet keep track of those files.

We will go through an example of all different states a file can be in in the following section.

### Committing in a local repository

We will use the following git commands to go through an example of how to take a file through the different states and put it into a commit:

| Git command                      | Git task                                         |
| -------------------------------- | ------------------------------------------------ |
| `git status`                     | list all files that have changed and their state |
| `git add <filename>`             | add a file to the staging area                   |
| `git commit -m "commit message"` | create a commit                                  |

Say we have a folder containing an empty README.md file and nothing else. We can turn that folder into a git repository using `git init`. That folder is now a git repository but it has no commits and therefore an empty commit history.

If we run the command `git status` we should get a message like this:

```
No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	README.md
```

The README.md is now untracked:

![untracked](assets/untracked.png)

We can put untracked files into the staging area. That tells git to include it in the next commit. We can do this by typing `git add README.md`.
If we then run `git status` again we get the following message:

```
No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   README.md
```

The README.md is now staged:

![staged](assets/staged.png)

We can now create the first commit with a descriptive commit message by typing `git commit -m "add readme without content"`
If we run `git status` now we get the following message:

```
On branch main
nothing to commit, working tree clean
```

The README.md is now committed:

![committed](assets/committed.png)

<br>
<br>

# Project: Project Name

### Part 1

### Part 2

---

## Resources
