# Challenges: Git CLI and Remote

## Upload Web Challenges

Until now you added folders to your web-challenges repository, but never actually committed the changes. Lets change that!

For every challenge in your web-challenges repository:

- Use `git add <challenge folder name>` to stage the changes from this challenge.
- Commit these challenge files with `git commit -m "<message>"` and add a meaningful message, e.g. "add solution for html and the web - personal website".
- Use `git push` to push the new commit to your remote repository on GitHub.
- Repeat this for every challenge folder!

## Upload the Personal Website

We already know how we can download a remote repository from GitHub (`git clone <repository address>`), but how can we upload an existing repository from our computer to GitHub? Lets find out!

- Go to your **personal website** project folder and turn the folder into a git repository with `git init`.
- Make sure that the personal website folder is **not** nested inside the web-challenges, otherwise we would create a nested git repository inside another git repository, which is tricky to handle.
- Commit everything in this folder the same way you did in the prior challenge.
- Go to Github and create a new **empty** repository called "personal-website" (no readme, no license).
- Copy the ssh repository address, e.g. `git@github.com:<your-github-name>/presonal-website.git`
- Add it as the "origin" repository to your local repository (a repository can be linked to multiple remote repositories, therefore we need to give them nicknames to distinguish them, "origin" is the standard name for the main remote repository):
  ```bash
  git remote add origin <ssh-repostory-address>
  ```
- Check if the remote repository was successfully linked with the command
  ```bash
  git remote -v
  ```
  A "fetch" and a "push" address should be printed to the terminal.
- Push your commit to the remote repository by using
  ```bash
  git push -u origin main
  ```
- Reload the GitHub repository page and check if the code of your personal website is now online.

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

### Part 1

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

From now on you are able to push your local changes to the remote repository.

1. Create new files, add new content to them, remove content, etc.
2. **Commit** your changes. (Make multiple commits)
3. **Push** your changes to the remote repository and look at the GitHub repository page to see your
   changes.

> ❗️ Commit after each step with a good commit message.

> 💡 Hint: you can see the commit history on GitHub.
