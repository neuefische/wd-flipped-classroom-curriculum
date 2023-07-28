# Challenges: Shell Basics

## Treasure Hunt

Go to the [Shell Basics repository](https://github.com/neuefische/web-shell-basics-challenge) and use this repository as a template repository to create a new repository in your own GitHub account.

Once Your repository is created, open it in a **Codespace**, wait for the Codespace setup to finish and the real challenge begins! :tada:

**Find the lost diamond of the ancient monarch of treasure island!** Navigate through treasure
island only with the terminal inside the codespace and find the treasure.

Use the following commands:

- `cd` to change directories
- `cd ..` to move up one folder
- `ls` to list files the current folder
- `cat <filename>` to see contents of a file
- `pwd` to see your current directory path

Good luck! 💎

## Notes Project

:notebook:

Create the following file structure in a new folder `notes` inside the root folder of this codespace.
(using `mkdir`,
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

> 💡 You can use the `tree` command to see the file structure in the codespace terminal.
