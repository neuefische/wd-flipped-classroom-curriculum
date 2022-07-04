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
On macOS we use iterm or iterm2 as a terminal to write our shell commands.

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

# Project: Project Name
