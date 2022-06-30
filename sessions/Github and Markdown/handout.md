# GitHub and Markdown

## Markdown

Markdown is a plain text formatting syntax. It makes writing formatted text (bold headlines, Blockquotes, lists, etc.) easier.
You don't have to learn HTML or some other more demanding language. Just write your Markdown in plain text and see your beautifully formatted results.
You can view the formatted result of your Markdown in your Code Editor. It is also used by countless Websites likes GitHub.

### Markdown Examples

| Element                         | Markdown Syntax                   |
| ------------------------------- | --------------------------------- |
| **bold text**                   | `**bold text**`                   |
| _italicized text_               | `_italicized text_`               |
| [link](https://www.example.com) | `[link](https://www.example.com)` |

See this [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for more Markdown Syntax.

---

## Git & Commits

Git is an open source version control system. It is a tremendous help in managing source code. It:

- keeps track of all changes made to the source code
- enables developers to easily collaborate on the same project and exchange updates (new files, newer versions of files)
- enables developers to "go back" to earlier versions of the source code

### Git Repositories

A Git repository is a place where a project is being saved. It keeps track of all versions of the project files. Many people can have access to (and work on) the same repository.

### Commits

A commit is a snapshot of your repository at a specific point in time. Creating a commit in your project is similar to hitting the "save" button in a video game. The process you have made so far will not be lost and you can always `go back` to the commit - so you will have all the project files as they were when you made the commit.
Each commit contains a message which should include a descriptive text, so that you and other developers will know what changes the commit includes.

### Good commit messages

Writing good commit message is an artform in itself. It is good to stick to the following rules:

- Your commit message should be short and descriptive.
- Write your commit message in the imperative (present tense): "Add shop page" instead of "Added shop page".
- Do not end your commit message with a period.

All commit messages combined should form a protocol or log of all features and changes made to the code base. Other developers should be able to understand what happened at each step of the development process only by reading the commit messages.

---

## GitHub

Now we know about git, but what exactly is GitHub? In its core, GitHub is an online platform where you can store, share and collaborate on `remote git repositories`. With GitHub, the same codebase can be shared and edited across many collaborators. Many repositories are open source, so you can create a copy of the code, modify it or use it in your own projects. Nearly `every open source project` has a repository on GitHub.

> 💡 Hint: Check out this huge [list of GitHub repositories](https://github.com/pawelborkar/awesome-repos) and see what you can find there.

At the same time GitHub is a social network for developers and companies of all kind. Your GitHub profile will be a valueable public asset for your future career. You can get in contact with many open source projects, developers and even companies via GitHub.

> 💡 Even though GitHub is the most popular online git platform, it is by far not the only one. There are several alternatives to GitHub, i.e Gitlab or Bitbucket.

---

## Project: GitHub Profile

Your Github Profile is generally the first impression that other developers and future employers will get of you. There is a simple way to enhance this profile with your individual style, namely the so called `profile readme markdown file`. So let's build our very own personal profile page!

### Part 1

First we need a [special repository](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme) containing a file called `README.md`. This markdown file will later be displayed on your profile page.

1. If not already done: create a GitHub account with a professional username (dont: superH4x0r_1337, do: mary-smith)
2. Create a new repository **with the same name as your GitHub username**. Choose to include a readme.md file.
3. Edit the readme.md file and include a `level one heading` which welcomes visitors to your page. Commit your results directly to the main branch (we will explore later what that actually means).

Our setup is done. Let's see if it worked. Go to your profile page and check if the readme is displayed there.

### Part 2

Just a simple welcome message does a poor job at describing who you are. Start to fill your profile README with information. Tell the world who you are, what your interests are or in which profession people can reach out to you for help. Include at least:

1. an interesting text / description about yourself,
2. a link to a picture / gif,
3. a list or table.

> ❗️Commit after each step with a `good commit messages`.

### Part 3

Now visitors of your profile get a good overview about you, but plain markdown looks a bit boring. Let's give your profile the final touch with some graphical elements!

1. Get some inspiration from this [List of awesome GitHub profile readmes](https://github.com/abhisheknaiidu/awesome-github-profile-readme).

   > 💡 Hint: you can see the markdown code by opening the readme.md file and clicking the button with the angle brackets "< >" ("showing the source blob")

2. Now it's your turn to implement some of these elements in your profile. Get crazy!
   > 💡 Hint: You can find a list of the tools used in these profile readmes [here](https://github.com/abhisheknaiidu/awesome-github-profile-readme#tools).

## Resources

- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [GitHub Profile Readme](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme)
- [List of awesome GitHub profile readmes](https://github.com/abhisheknaiidu/awesome-github-profile-readme)
