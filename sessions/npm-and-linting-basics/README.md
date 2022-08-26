# npm and Linting Basics

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:45     | Session         |
| 1:30     | Active Learning |
| 0:30     | Recap           |

## Learning Objectives

- [ ] What npm is and how it is used
- [ ] What are packages and how does the npm ecosystem work
- [ ] The basic anatomy of a npm package
- [ ] How does semantic versioning work
- [ ] What are linters and how can we use them
- [ ] Error messages are your friend

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

Errors in code are difficult for humans to detect. Computers are very good at analyzing code,
identifying problems and giving advice on how to fix them.

### Why is the content of today's block that important for the students?

Manually searching for errors is hard to impossible. We need tools to automate the process and
improve our code quality.

It's also important to know about npm packages, as they are the basis for future projects that will
use libraries.

### Pose a question to be answered by the end of the block!

Ask students who has had these problems when coding:

- typos
- missing parenthesis, comma or similar
- wrongly formatted → time consuming to format by hand
- unstructured code

Ask them if dealing with these issues was frustrating or overwhelming.

How can we solve this?

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

Students will be able to test their HTML and JavaScript skills when fixing bugs pointed out by
linters.

---

## Inform: Session Guide

### npm is an "App Store"

Go to [the npm website](https://www.npmjs.com/) and explain that

- npm formerly stood for `node package manager`, nowadays it is just npm.
- npm is a `package registry`
- that means that it's an `app store for your app`
- npm mainly holds open source projects
- most of them are JavaScript-related
- there are three aspects to npm:
  1. the website (for browsing, reading documentation)
  2. the registry (where the actual software / source code is)
  3. the command line interface
- npm installs
  - packages that you put into a `package.json` file
  - and puts them into a `node_modules` folder

Explain that there are two important categories of packages:

1. packages that help you while developing your project (`devDependencies`)
2. packages that are used as a dependency of your project (`dependencies`)

Explain that in this session we will only work with `devDependencies`.

### npm `package.json`

Open the template project [from the challenges](./challenges-npm-and-linting-basics.md) and show
students the `package.json` file.

Show that there is a list of packages in the `devDependencies` object.

Briefly explain what the version numbers in `semantic versioning` mean (**`Major.Minor.Patch`**):

- **`Major`** = major version, changes when the public api of a package changes (= breaking change)
- **`Minor`** = minor version, changes when new features are added
- **`Patch`** = patch version, changes when bugs are fixed

> This means that we have to be careful when the major version changes because our code might not
> work after an update.

Install all dependencies from the `package.json` by running `npm install`. Then show the
`node_modules` folder. Explain that `package-lock.json` is just an internal file used by npm.

Explain that `package.json` **and** `package-lock.json` shoud always be commited to the git
repository. The `node_modules` folder **must** be in the `.gitignore` and should **never** be
committed!

### Linters

Explain that linters analyze the code and show syntax errors, oversights like undeclared variables,
bugs and stylistic errors. They (mostly) have great editor integrations to make developer experience
smoother.

Some important tools are:

- Prettier (Code Formatting)
- HTMLHint (HTML)
- ESLint (JavaScript)

Show that linters are configured via small files in the project root.

Explain that all linters and tools are already correctly set up. Junior developers do not need to
know how to do the setup but they do need to know how to use these tools.

### npm Scripts

Explain that more complex command line commands can be stored in the package.json as so-called
"scripts", which can then be executed with a simpler command in the shell.

Show the scripts in the `package.json`.

Briefly explain what they are doing:

- `htmlhint` checks all HTML files for correctness and outputs errors
- `prettier:check` finds formatting issues in all files
- `prettier:write` automatically fixes formatting issues in all files
- `eslint` checks all JavaScript files for correctness and outputs errors

Run the scripts with `npm run` and show what they output.

Show that there are scripts that combine other scripts like `npm run test` which runs all tools one
after another.

> 💡 The `&&` between the commands means that the next script will only be run if the one before
> exited without errors! Students need to be careful because JavaScript errors won't be shown until
> formatting and HTML issues are fixed.

Explain that the scripts are code editor independent: Even someone using TextEdit can benefit from
them.

### Editor Integration

Show the VS Code extensions that integrate the linters.

- [HTMLHint](https://marketplace.visualstudio.com/items?itemName=ctf0.htmlhint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Example Bughunt

Show an example of identifying and fixing a bug:

- run `npm run htmlhint`
- **carefully** read the first error
- locate and open the file
- investigate and fix the error
- showing that `npm run htmlhint` displays one less error

> 💡 Do this for one example only. Let the students do the rest themselves.

### Error messages are friends

Explain that error messages are a good thing! They help us figure out what needs to be done next.
Because `they are here to help us` we do have to `read them very carefully`.

**Students should not be afraid of the red wall.**

### Reminder

Before starting the challange, remind students to run `npm install` after they have cloned the
template.

---

## Process: Challenges

- [ ] Provide the [handout](npm-and-linting-basics.md) and the
      [challenges](challenges-npm-and-linting-basics.md) to the students
- [ ] Open the handout and walk the students through the tasks
- [ ] Divide the students into groups of 2
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

HTMLHint, ESLint, Prettier, Linting, npm, Package Registry, package.json, semantic versioning

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
