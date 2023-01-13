# Git Advanced

### What does `git switch header` do?

* [ ] Create and switch to the branch called "header".
* [x] Switch to the branch called "header".
* [ ] Create the branch called "header".
* [ ] Restore working tree files of the branch "header".

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: No, `git switch header` switches to the branch called "header".

type: multiple_choice

---

### Which git command is used to create and switch a branch at the same time?

* [ ] `git branch switch <branchname>` 
* [x] `git switch -c <branchname>` / `git checkout -b <branchname>`
* [ ] `git branch <branchname> switch`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: No, both `git switch -c <branchname>` / `git checkout -b <branchname>` can be used to create and switch a branch at the same time.

type: multiple_choice

---

### How often should you use `git reset`?

* [ ] Every morning after fetching main.
* [x] Try to avoid it.
* [ ] After each commit.

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: No, you should try to avoid it. The command removes a commit and thus creates a gap in the history, which is quite bad.

type: multiple_choice

---

### What does `git merge main` do?

* [ ] Nothing.
* [ ] Pulls and resets HEAD to the latest remote feature branch.
* [ ] Merges all feature branches into the main branch.
* [x] Merges the main branch into the current feature branch.

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: No, `git merge main` merges the main branch into current feature branch.

type: multiple_choice

---

### What does `git log --graph` do?

* [ ] It creates a graph in the README.md file.
* [x] It visualizes the merge history.
* [ ] It opens excalidraw and shows a graph of the merge history.

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: No, `git log --graph` visualizes the merge history.

type: multiple_choice

---

### How do you delete all changes since the last commit?

* [x] `git reset --hard HEAD`
* [ ] `git revert`
* [ ] `git clean -df`

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: No, `git reset --hard HEAD` deletes all changes since the last commit.

type: multiple_choice

---

### Which editor is opened when adding a merge commit message?

* [ ] VOM
* [x] VIM
* [ ] VAM

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: No, VIM is the correct answer.

type: multiple_choice

---

### How often should the main branch be merged into a feature branch?

* [ ] Never.
* [ ] Only once per feature branch.
* [x] At least every time before creating a pull request and every time a feature has been merged to main.

Points: 1

Feedback_correct: That's right.
Feedback_incorrect: No, the main branch should be merged at least every time before creating a pull request and every time a feature has been merged to main.

type: multiple_choice

---