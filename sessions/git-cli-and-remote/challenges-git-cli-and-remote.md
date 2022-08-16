d# Challenges: Git CLI and Remote

## Setup Visual Studio Code

Please install one of the most popular editors:
[Visual Studio Code](https://code.visualstudio.com/). This editor from Microsoft is a free, open
source and available for all platforms, even on the browser, e.g. on GitHub.

Normally you would go to the website and download the software. But as you may already know, we can
use **Homebrew** to install things we need.

```shell
brew install --cask visual-studio-code
```

You can find more details on this installation here:
[visual-studio-code — Homebrew Formulae](https://formulae.brew.sh/cask/visual-studio-code)

## Setup SSH Key

In order to communicate safely between your local machine and GitHub, we use a protocol called
**SSH** (Secure Shell). This protocol allows you to connect to GitHub and authenticate yourself
without using your username and password every time.

Therefore we generate a **SSH key** on your local machine and add it to GitHub. These steps are
necessary once on every machine you want to work with.

#### Step 1: GitHub CLI

Install the GitHub command-line tool via Homebrew:

```
brew install gh
```

#### Step 2: Git config and SSH key

We created a script for you to easily set your git config, generate a SSH key and add it to GitHub.
Follow the instructions in your Terminal.

- Pleaser enter the requested inputs
- Press **Enter** (default) when asked about which file to save the key and your passphrase (leave
  it empty).
- Choose **ssh** as your preferred connection method when asked.
- Login and authenticate with the browser. (The device code is found in the Terminal.)

```
zsh <(curl -s https://raw.githubusercontent.com/neuefische/zsh-setup/main/setup-git-and-ssh)
```

## Session Notebook part 1

In this project you will create a markdown based notebook for all your upcoming session notes. In
this part you will create the folder structure and markdown files, in a future part we will fill up
these files with actual content.

> ❗️ You may only use the terminal for these tasks!

1. Create a folder called **session-notebook**.
2. Create a README.md in this folder, we will use it later to link to the other markdown files.
3. Inside this folder, create multiple folders, e.g. **shell-and-git**, **html**, **css**,
   **javascript**.
4. Create a markdown file for each session we had so far. Make sure they are created in the correct
   folder.
5. You could also create a **git-cheatsheet.md** file, where you collect all your git commands.

## Connect the Session Notebook to GitHub

You already created a folder and file structure for your session notes. Now we want to provide the
**session-notebook** to your GitHub account as a repository. Therefore we need to connect the local
repository with a remote repository.

### Step 1

The first step is to initialize a new repository based on the folder you created for the session
notes.

1. If not already done, navigate through the shell to the folder **session-notebook** you created
   for the session notes.
2. Make sure you have at least a **README.md** and optionally more folders and files. If not, create
   them by using shell commands.
3. Run the git command to initialize a new local git repository.
4. Create your first commit.

> 💡 After initializing you should get a message like this:
>
> ```
> Initialized empty Git repository in /Users/<your-username>/<path_to_folder>/session-notebook/.git/
> ```

### Part 2

For the next step you need to create a new repository on GitHub and connect your local repository
with the remote repository.

![Create a new GitHub repository](assets/create-new-repository.png)

1.  Open GitHub and create a new repository.
2.  Make sure it's a **public repository** and uncheck "Add a README file" because we already
    created one.
3.  You should see the heading "…or push an existing repository from the command line". Follow the
    instructions.

> 💡 Hint: if the name of your branch is already **main**, you don't need to use the command
> `git branch -M main` because this command renames the branch to main.

### Part 3

For now on you are able to push your local changes to the remote repository.

1. Create new files, add new content to them, remove content, etc.
2. **Commit** your changes. (Make multiple commits)
3. **Push** your changes to the remote repository and look at the GitHub repository page to see your
   changes.

> ❗️ Commit after each step with a good commit message.

> 💡 Hint: you can see the commit history on GitHub.
