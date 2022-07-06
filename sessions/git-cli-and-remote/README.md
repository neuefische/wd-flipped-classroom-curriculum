# Session name

> 💡 feel free to create a personal branch of this guide to add your own notes

## Learning objectives

- [ ] to use version control locally to create repositories and commits.
- [ ] about the `different states` of files.
- [ ] to synchronize local repositories with remote repositories (on GitHub for example).

---

## Arrival: Motivate students and prepare them for the topic

> 💡 Breathe and relax :)

### Which important problem will we solve today?

- You will learn today one of the most important tools you will ever need in your development career.
- How return to the latest version of a project / file when something goes wrong.
- You will learn how to share your code with the world on GitHub.

### Why is the content of todays block so important for the students?

- git is an industry standard, they need to learn it in order to become a developer
- git helps the students when they accidentally mess up their code, so they can always go back to the last save point

---

## Activate prior knowledge of students

- recap what the students learned in their first session `GitHub and Markdown`
- ask them about
  - commits
  - repositories
  - git workflow (creating commits after each important step)
- tell the students that they will learn today how to do these steps on their local machine

### Which prior knowledge will be used for this session?

- git terminology (repository, commit)
- basic markdown syntax (later in the challenges)

---

## Inform: Sessionguide

### git init

**1. Show how to initialize a git repository.**

- [ ] `git init` - turning a folder into a local repository
- [ ] show that the folder becomes a repository through the hidden .git folder
- [ ] show that you can delete the repository by deleting the folder

### git commit

**1. Explain the different states a file inside a repository can be in and how to commit changes.**

- [ ] mention the following states (you can use the sketch below to illustrate the process):
  - [ ] untracked - a file has never been part of a commit and therefore is not a part of the repository yet.
  - [ ] modified - a file is tracked by git but has changed since the last commit
  - [ ] staged - the changes in the file are prepared to become part of the next commit (it is put onto a stage with other changes to take a snapshot of everything on that stage later).
  - [ ] committed - the file / changes have become part of the commit. Untracked files become part of the repository and will be tracked from now on.

**2. Show how to commit changes made to a file in the repository.**

- [ ] `git status` - see what the current state of the files in your repository are
- [ ] `git add file` - put the changed file on the stage
- [ ] `git status`
- [ ] `git commit -m 'Commit message'` - create a new savepoint including every change on the stage
- [ ] `git status`
- [ ] `git log --oneline` - show the latest git history

**3. Show how to return to the latest version of a file if something goes wrong. (why whe use git in the first place)**

- [ ] create some more commits (add some more content to the file you are working on)
- [ ] now simulate an massive error, e.g. deleting the content of a file and save it.
- [ ] `git status` - you will see the untracked changes
- [ ] `git restore <file name>` - reset the file to the last committed state.
- [ ] `git restore .` show that you can reset the whole repository to the state of the last commit if necessary.

### git remote repositories

---

## Process: Challenges

- [ ] Provide the [handout](session-name.md) for the students
- [ ] Open the handout and walk the students through the tasks
- [ ] Divide the students in groups
- [ ] Remind them of the ground rules (Meet again 30min before lunchbreak in the classroom / They can ask the coaches for help at any time / Always help each other / Take a break when you need it in the next 1.5h/ Keep an eye on Slack)

---

## Evaluate: Recap of the assignment / Discussion of MVP / Solution

- Come back to the question that was raised in the beginning of the session and try and answer it in a few phrases.

---

## Checkout

> 💡 In case the students seem frustrated try to find some encouraging words (e.g. remind them of how far they have come already) :)

- [ ] Summarize the day by repeating all the topics that were discussed
- [ ] Highlight the progress of the day
- [ ] Encourage the students to repeat what they learned with practical exercises
- [ ] Remind them to rest :)

## Keywords for Recap:

> These keywords are for the weekly summary on Fridays.
> We use the keywords to automatically generate excalidraw tags with the help of [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator).
> The students structure the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs to be explained in a few words by one student. We go in rounds one by one until all tags are included in the structure.
