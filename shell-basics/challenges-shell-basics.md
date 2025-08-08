# Challenges: Shell Basics

## Computer Setup

Go into the bootcamp docs and follow the [computer setup](../../docs/computer-setup.md).

## Bootcamp Folders

(difficulty: 🔥)

To keep everything needed for the bootcamp in one place, let’s create a general folder structure that we will use over the upcoming months!

- Open your **iTerm/Git Bash** and navigate to your home directory (named `~`, it should be your default location when you open a new terminal window).
- Create a new folder called `web-bootcamp`.
- Change into that folder and create two additional folders called `web-challenges` and `session-notebook`.

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

The `web-bootcamp` folder will be the home for all projects you create during the bootcamp. `web-challenges` will contain all the challenges you work on during sessions. In `session-notebook`, you can collect your notes related to specific sessions. Now you are ready to tackle the first challenges. 💪

## Treasure Hunt

(difficulty: 🔥🔥)

Open your terminal and navigate to the `web-challenges` folder. Use the following command to download the challenge files:

> 💡 This command will ask you for permission to download ghcd. This is a tool that we use to
> download challenges from GitHub to your computer. Press <kbd>Enter</kbd> to confirm the download.

```
npx ghcd@latest wd-bootcamp/web-exercises/tree/main/sessions/shell-basics/treasure-hunt
```

Once the download is complete, navigate into the `shell-basics_treasure-hunt` folder using the `cd` command. Now
the real challenge begins.

**Find the lost diamond of the ancient monarch of Treasure Island!** Navigate through Treasure
Island using only the terminal and find the treasure.

Use the following commands:

- `cd` to change directories
- `cd ..` to move up one folder
- `ls` to list files in the current folder
- `cat <filename>` to see contents of a file
- `pwd` to see your current directory path

Good luck! 💎

## Notes Project

(difficulty: 🔥🔥)

Create the following file structure in a new folder inside your `web-challenges` folder (using `mkdir`,
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

> 💡 (Mac users only): You can use the `tree` command to view the file structure in the terminal. The `tree` command-line tool was installed with the `web-setup` script.
