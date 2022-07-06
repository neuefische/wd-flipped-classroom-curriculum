# Shell Basics

## Learning Objectives

In this session you will learn:

- [ ] what the terminal and the shell are.
- [ ] to navigate the file system inside the shell.
- [ ] to create, rename, remove and move files and folders in the filesystem.

---

## Shell

You are probably used to using graphical user interfaces (GUI) to interact with computers, for example:

- Windows Explorer to search for files / rename / delete them
- Your operating systems UI for changing the time zone via mouse clicks
- Using "installation wizards" to install software via mouse clicks

Often times developers interact with computers over CLIs (Command line interfaces) which are text based user interfaces.
That means that developers type commands to interact with the computer (create / move / delete / edit files, install software, change system settings...).

This has the following reasons / advantages:

- Many tools don't have GUI (graphical user interfaces) and can only be run over a CLI
- You can write scripts (which consist of a number of commands) to automize processes and repetitive tasks and ensure they are being run exactly the same way every time they are executed.

We are using the shell and in particular the zsh (z shell) - which is the default shell on macOS - to run commands.
The shell is the application that runs and executes commands on your computer and outputs results.
A terminal is a text input and output environment. It sends commands to the shell and displays its output.

### Basic Shell commands

| command            | functionality                                                              |
| ------------------ | -------------------------------------------------------------------------- |
| `ls`               | list the content of the current directory                                  |
| `cd <folder name>` | change directory into a folder                                             |
| `cd ..`            | change into the parent folder                                              |
| `cd ~`             | change into your home directory                                            |
| `pwd`              | print the current directory path                                           |
| `touch example.md` | create a file called example.md                                            |
| `mkdir newFolder`  | create a folder called newFolder                                           |
| `rm <file name>`   | delete a file permanently                                                  |
| `open .`           | open the current folder in the finder                                      |
| `cat <file name>`  | prints the content of a specific file                                      |
| `curl <url>`       | prints the received content from the specified url. (try `curl ipinfo.io`) |

> 💡 There are a lot of commands for any sort of action you want to perform check out [this cheat cheet](https://github.com/RehanSaeed/Bash-Cheat-Sheet) to look up important commands.

# Challenges

## Treasure Hunt

In this challenge you have to find the lost diamond of the ancient king of treasure island!
Open the `treasure-hunt.zip` that you received. Navigate through treasure island only with the terminal and find the treasure! Use the following commands:

- use `cd` to change directories
- use `cd ..` to move out of the current folder
- use `ls` to look what is in the current folder
- use `cat` to see what is inside a markdown file
- use `pwd` to see your current directory path

Good luck!

## Enhance your terminal

Something that developers do all the time via the terminal is installing new software or tools, just as we will in this exercise. One of the many features of our shell zsh is its extensibility. We can install plugins which will improve our developer experience significantly. You can install all necessary programs by following the installation steps on the respective websites. So let's get started!

1. install the zsh framework [oh my zsh](https://ohmyz.sh/#install) (follow the instructions on their installation page). This framework helps us to manage the zsh configuration.
2. install [homebrew](https://brew.sh/), the package manager for MacOS. With homebrew we can install packages (e.g. programs, extensions, tools,...) via the command line.
3. install [powerlevel10k](https://github.com/romkatv/powerlevel10k#homebrew), a powerful zsh theme. Follow the installation instructions under `Homebrew`.
4. run the following command to configure your the powerlevel10k theme: `p10k configure`

## Resources

- [terminal basics](https://mrkaluzny.com/blog/terminal-101-getting-started-with-terminal/)
- [command line cheat sheet](https://github.com/0nn0/terminal-mac-cheatsheet#english-version)
