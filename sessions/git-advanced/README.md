# Git Advanced

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] deepen understanding of git in general
  - [ ] `git fetch`
  - [ ] `git pull`
- [ ] understand why and how git conflicts happen
- [ ] know how to combine branches:
  - [ ] `git merge`
- [ ] know how to resolve git conflicts

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

### Why is the content of today's block that important for the students?

When working on a feature in a team project, your team members might have finished their feature and
merged it into main before you do.

In this situation, how do you integrate approved changes to your current feature branch? How do you
handle merge conflicts?

### Pose a question to be answered by the end of the block!

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- Shell Basics
- Git Basics
- Git CLI and Remote
- Git Branches and PRs

---

## Inform: Session Guide

> 💡 During this session you'll set up a local demo repository and connect it to GitHub. For
> illustration purposes you should create the repo on the fly using the commands described in the
> session guide.

### How do we end up with merge conflicts?

- [ ] In your web projects folder, create a new folder and initialize a new git repository
  - `mkdir git-advanced`
  - `cd git-advanced`
  - `git init`
- [ ] Then create a new file called `index.js` and add some content to it
  - `touch index.js`
  - `code .` and add the content:

```js
console.log("Hello World");
```

> 💡 It's easiest to work with the integrated terminal in VS Code from here on. You can open it with
> `command + J`.

> 💡 For this session it's best to only use the command line for git, instead of the integrated git
> UI in VS Code. This way we can see what's happening under the hood.

- [ ] Commit the changes

  - `git add index.js`
  - `git commit -m "add index.js"`

- [ ] Create a new repository on GitHub and connect it to your local repository

  - `git remote add origin <your-repo-url>`
  - `git push -u origin main`

- [ ] Create a new branch called `greet-coach`

  - `git switch -c greet-coach`

- [ ] Change the `index.js` file to greet a coach:

  - ```js
    console.log("Hello Max");
    ```

- [ ] Commit the changes and push the new branch to GitHub

  - `git add index.js`
  - `git commit -m "greet coach"`
  - `git push -u origin greet-coach`

- [ ] Switch back to the main branch, explain that someone has decided to change the greeting to
      "Hi", edit the `index.js` file accordingly and commit and push the changes

  - `git switch main`
  - ```js
    console.log("Hi World");
    ```
  - `git add index.js`
  - `git commit -m "change greeting to Hi"`
  - `git push`

- [ ] Ask students how the `main` and the `greet-coach` branch differ:

  - (maybe) run `git diff main greet-coach` to visualize the difference locally
  - open a new pull request on GitHub to merge the `greet-coach` branch into `main`
  - explain that the pull request currently can't be merged because of merge conflicts

- [ ] Explain that `greet-coach` and `main` both have changes on the same line and that git doesn't
      know how to merge them automatically. This is what git calls a merge conflict.

### How to solve conflicts using `merge`

- [ ] Explain that to resolve the merge conflict, we need to combine the to branches manually and
      that there are different strategies to do so.

- [ ] Explain that **`merge`** is the default strategy and that it creates a merge commit (at least
      when it's not fast-forwarding) that combines the changes from both branches.

- [ ] **Optional**: Explain that **`rebase`** is a different strategy and that it doesn't create a
      merge commit but instead applies the changes of the branch we are rebasing from on top of the
      branch we are rebasing to. This is like "replaying" the changes on top of the other branch.
      There is an explanation for this in the handout.

- [ ] Explain that the recommended workflow is to combine the changes on the feature branch first
      (using `merge`) and then merge the feature branch into main via a pull request.

- [ ] Explain that you're going to merge the `main` branch into the `greet-coach` branch and that
      you'll resolve the merge conflict that comes up.

- [ ] Switch to the `greet-coach` branch and merge the `main` branch into it

  - `git switch greet-coach`
  - `git merge main`

- [ ] Explain that git now shows that there is a merge conflict and that we need to resolve it
      manually.

- [ ] Open the `index.js` file and explain that git has marked the conflicting line with `<<<<<<<`,
      `>>>>>>>` and `=======` and that we need to remove the markers and decide which changes we
      want to keep. Either choosing one of the two versions or combining them.

  - VS Code has a built-in merge conflict resolver that can be used to resolve the conflict that
    shows a UI to resolve the conflict.
  - For the example combine the changes from both branches:
  - ```js
    console.log("Hi Max");
    ```

- [ ] Explain that we now need to stage, commit and push the resolved merge conflict

  - `git add index.js`
  - `git commit -m "resolve merge conflict"`
  - `git push`

- [ ] Show the pull request on GitHub again to demonstrate that it can now be merged, merge it and
      delete the branch.

---

## Process: Challenges

- [ ] Provide the [handout](git-advanced.md) and the [challenges](challenges-git-advanced.md) to the
      students
- [ ] Open the handout and walk the students through the tasks
- [ ] Divide the students into groups of 3
- [ ] Remind them of the ground rules:
  - meet again 30 min before lunch break in the class room
  - they can ask the coaches for help at any time
  - always try to help each other
  - take a break within the next 1.5 hrs
  - keep an eye on Slack

---

## Evaluate: Recap of the assignment / Discussion of the MVP / Solution

- Revisit the question that was posed in the beginning of the session and try to answer it with a
  few phrases.

---

## Checkout

> 💡 In case the students seem frustrated try to find some encouraging words (e.g. remind them of
> how far they have come already) :)

- [ ] Summarize the day by repeating all of the topics that were discussed
- [ ] Highlight the progress made that day
- [ ] Encourage the students to repeat what they learned with practical exercises
- [ ] Remind them to rest :)

## Keywords for Recap:

git fetch, git pull, git rebase, git merge, git push, git pull -r, git push --force-with-lease

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
