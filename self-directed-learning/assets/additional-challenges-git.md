# Additional Challenge: Git

## Git Workflow Workout

> Required Sessions:
>
> - Shell Basics
> - Git CLI and Remote

Follow these steps to practice creating and managing git repositories:

1. Go to your GitHub profile and create a new repository (name it as you like).
2. Copy the SSH URL for the repository.
3. Create a new folder using the terminal: `mkdir <foldername>`
4. **Important**: Ensure you are _not_ inside an existing git repository!
5. Navigate into your folder: `cd <foldername>`
6. Initialize your local git repository: `git init`
7. Connect your local repository to the remote one: `git remote add origin <SSH URL>`
8. Add a `.gitignore` file and include `.DS_Store` on the first line.
9. Create a README file: `touch README.md`
10. Open the folder in VS Code to edit the README: `code .`
11. Stage all changes: `git add .`
12. Commit your changes with a message: `git commit -m "Initial commit"`
13. Sync your work to GitHub: `git push -u origin main`
14. Refresh your repository on GitHub to confirm the README file is there.

Done? Great!

- Delete the repository from GitHub (`Settings` > `Danger Zone` > `Delete`).
- Delete the local folder and repeat the steps. Challenge yourself to recall the commands without looking at the instructions.

**Practice until you feel confident!**
