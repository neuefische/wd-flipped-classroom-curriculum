# Challenges: Shell Basics

Go into the bootcamp docs and follow the [shell setup](../../docs/shell-setup.md).

## Bootcamp Folders

In order to have everything we need for the bootcamp in one place, lets create a general folder structure that we will use in the upcoming months!

- open your terminal or git-bash and navigate into your home directory (named ~, it should be your default location when you open a new terminal window).
- Create a new folder called `web-bootcamp`.
- Change into that folder and create another 2 folders called `web-challenges` and `session-notebook`.

The folders should now look something like this:

```
~
|- Downloads
|- Pictures
|- web-bootcamp
   |- web-challenges
   |- session-notebook
|- ...
```

The web-bootcamp folder will be the home for all your projects you create during the bootcamp. Web Challenges will contain all challenges that you work on during sessions. In the session notebook you can collect your notes to specific sessions. Now you are ready to tackle the first challenges 💪.

## Treasure Hunt

Open **iTerm/git-bash** and navigate to web-challenges folder. Use the following command to download the challenge files:

> 💡 This command will ask you for permission to download ghcd. This is a tool that we use to
> download challenges from GitHub to your computer. Press <kbd>Enter</kbd> to confirm the download.

```
npx ghcd@latest neuefische/web-exercises/tree/main/sessions/shell-basics/treasure-hunt
```

Once the download is complete, navigate into the `shell-basics_treasure-hunt` folder using the `cd` command. Now
the real challenge begins.

**Find the lost diamond of the ancient monarch of treasure island!** Navigate through treasure
island only with the terminal and find the treasure.

Use the following commands:

- `cd` to change directories
- `cd ..` to move up one folder
- `ls` to list files the current folder
- `cat <filename>` to see contents of a file
- `pwd` to see your current directory path

Good luck! 💎

## Notes Project

Create the following file structure in a new folder inside your web-challenges folder (using `mkdir`,
`touch` and `cd`):

```
notes
├── released
│   └── public
│   │   └── trash.txt
│   ├── announcement1.txt
│   └── announcement2.txt
└── unreleased
    ├── announcement3.txt
    └── private
        ├── notes1.txt
        └── notes2.txt
```

Update the structure to the following (using `mv`, `rm` and `cd`):

```
notes
├── private
│   ├── notes1.txt
│   └── notes2.txt
└── public
    ├── released
    │   ├── announcement1.txt
    │   └── announcement2.txt
    └── unreleased
        └── announcement3.txt
```

> 💡 (Mac users only): You can use the `tree` command to see the file structure in the terminal. The `tree` command line tool was installed with the `web-setup` script.
