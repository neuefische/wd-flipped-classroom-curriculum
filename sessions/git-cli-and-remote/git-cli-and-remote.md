# Git CLI & remote

## Learning Objectives

In this session you will learn:

- [ ] to use version control locally to create repositories and commits.
- [ ] about the `different states` of files.
- [ ] to synchronize local repositories with remote repositories (on GitHub for example).

---

## Git CLI

You have installed the Git Software on your machine. That means you can create repositories and commits on your own machine. You can also synchronize your local repository with a `remote repository` which can be on GitHub for example.
We interact with git over the terminal using git commands which you will learn today.

### Creating local repositories

You can turn any folder in your file system into a `local git repository`. That means that git will track all changes to files we make in that folder. We will create a folder for each of your projects and every one of those folders / projects will be a git repository.
To turn a folder into a git repository you need your first git command:

| Git command | Git task                          |
| ----------- | --------------------------------- |
| `git init`  | create a new local git repository |

In your terminal you can navigate into any folder in your file system and use the `git init` command to turn that folder into a local repository. Git will create a hidden `.git folder` in the project folder. This hidden folder contains all the information about the repository and its commit history. Never touch or modify anything in that folder.

### States of files

If we have a repository on GitHub we can create / modify / delete files. Through a few button clicks we create a commit which contains all the changes we have made.
We can do the same thing through our terminal with local repositories. To understand how this happens we have to know about the different states a file can be in.

- Tracked files: Tracked files are files that git knows about. All tracked files were in the last snapshot.
  Tracked files can be in different states:

  - modified: A file is modified when it has changed since the last commit.
  - staged: A file is staged when we told git to include the changes in the next commit. One way to think of it is as if the files were entering a literal stage - waiting for the snapshot to be taken (waiting to be committed).
  - committed: A file is in the committed state when it has not changed since the last commit.

- Untracked files: Untracked files are files that are not in the latest snapshot and have not been staged. Git does not yet keep track of those files.

We will go through an example of different states a file can be in in the following section.

### Committing in a local repository

We will use the following git commands to go through an example of how to take a file through the different states and put it into a commit:

| Git command                      | Git task                                         |
| -------------------------------- | ------------------------------------------------ |
| `git status`                     | list all files that have changed and their state |
| `git add <filename>`             | add a file to the staging area                   |
| `git commit -m "commit message"` | create a commit including all staged files       |
| `git log --oneline`              | show a list of commits starting with the latest  |

Say we have a folder containing an empty README.md file and nothing else. We can turn that folder into a git repository using `git init`. That folder is now a git repository but it has no commits and therefore an empty commit history.

If we run the command `git status` we get a message like this:

```
No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	README.md
```

The README.md is now untracked:

<img src="assets/untracked.png" alt="untracked" width="400">

We can put untracked files into the staging area. That tells git to include them in the next commit. We can do this by typing `git add README.md`.
If we then run `git status` again we get the following message:

```
No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   README.md
```

The README.md is now staged:

<img src="assets/staged.png" alt="staged" width="400">

We can now create the first commit with a descriptive commit message by typing `git commit -m "add readme without content"`
If we run `git status` now we get the following message:

```
On branch main
nothing to commit, working tree clean
```

The README.md is now committed:

<img src="assets/committed.png" alt="committed" width="400">

## Connecting to a remote repository

We want to connect our local repository with a remote repository which can be on GitHub for example. This enables whole teams to work on the same `remote repository` and create copies or `local repositories`. The remote repository also serves as a backup in case your hard drive breaks.

### Connecting your local repository to a new remote repository

If you have a local repository and want to create a new remote repository on GitHub, the first thing you need to do is to create a new empty remote repository on GitHub.
After creating the repository on GitHub, we can see some hints and can follow the hints saying "...or push an existing repository from the command line". You can copy the commands from GitHub and execute them in your local project folder. The commands should look similar to the following:

```
git remote add origin git@github.com:GitHubUsername/repository-name.git
git branch -M main
git push -u origin main
```

The first command tells git to add a new remote repository and remember it under the name "origin".

The second command renames the branch that you are working on to "main". You don't have to understand what branches are - we will go over that in a future session. This command is only relevant if you use older versions of git.

The third command pushes your local commits to the remote repository. After executing this command you can refresh the GitHub page in your browser and you will see that the remote repository contains all the commits of your local repository.

### Cloning a remote repository

If you want to work locally on a remote repository that you don't have a local version of on your own machine, you can clone the remote repository. That means you get a copy of the repository on your local machine. You clone a repository using the `git clone` command:

| Git command       | Git task                                     |
| ----------------- | -------------------------------------------- |
| `git clone <url>` | create a working copy of a remote repository |

You can find the url of remote repositories on GitHub on the repository page under "Code". You should use the SSH url to clone repositories.
After cloning the repository you will have a folder with the repository name on your local machine. This folder contains all project files and the hidden `.git folder` which contains the commit history of the repository.

### Synchronizing local & remote repositories

Different people can work on the same remote repository. They will clone the repository and create commits on their local repositories. They have to synchronize the remote repository with the local repositories.
If you created new commits locally on your own machine, you have to use `git push` to push these new commits to the remote repository.
If the remote repository contains new commits that your local repository doesn't know anything about, you have to use `git pull` to pull the new commits from the remote repository.

| Git command | Git task                                                                    |
| ----------- | --------------------------------------------------------------------------- |
| `git push`  | send content to the remote repository                                       |
| `git pull`  | download content from the remote repository and update the local repository |

Let's look at an example: Say you want to work on a website with your friend.

1. Your friend has already started and created a Homepage for your website. He created a repository on GitHub which contains all his work (commits).
2. You cloned the repository.
3. You worked on the website on your own machine. Say you added a second page - a Contact Page for example. You made a few new commits for the new page on your local repository.
4. If you look at the repository page on GitHub, it looks just like before - no sign of your newly created Contact Page. That is because the remote repository doesn't know that you made a few new commits on your local machine.
5. You have to use `git push`. After executing this command you can refresh the GitHub repository page and you will then see the changes you made and the Contact Page you created.
6. Your friend probably has a local repository. This local repository doesn't contain your work. Your friend has to execute the `git pull` command. After executing this command his local repository will contain the new commits and he will see the Contact Page.

# Project: Project Name

### Part 1

### Part 2

---

## Resources
