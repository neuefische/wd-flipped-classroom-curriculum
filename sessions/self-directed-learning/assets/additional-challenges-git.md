# Git Workflow Workout

> Required Sessions:
>
> - Shell Basics
> - Git CLI and Remote

1. Create a new repo from your Github profile (name it like you want);
2. Copy the git url (the SSH one, important!);
3. Create a new folder from your Terminal (via `mkdir`);
4. **extremely important**: you should _not_ be inside an existing git repo!
5. Enter the folder (`cd <dirname>`);
6. Init the repo (`git init`);
7. Link your local repo to the remote one - `git remote add origin git@github.com...`;
8. Add a `.gitignore` with `.DS_Store` on the first line;
9. Create a README file (`touch README.md`);
10. Edit its contents (`code .` will open the whole folder in VSCode);
11. Add your work to the stage - `git add .`;
12. Commit your work - `git commit -m 'First commit'`;
13. Sync your work over to github - `git push -u origin main`.
14. Refresh your repository on github, you should see your README file!

Done? Great!

- Delete the repo from github (Settings - Danger Zone - Delete);
- Delete the local folder;
- Rinse and repeat, this time trying to remember the operations without looking at the instructions above. Do it a bunch of times and you'll be fine!
