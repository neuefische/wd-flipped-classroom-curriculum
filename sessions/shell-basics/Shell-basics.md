# Shell Basics

## Learning Objectives

In this session you will learn:

- [ ] what the terminal and the shell are.
- [ ] to navigate the file system inside the shell.
- [ ] to create, rename, remove and move files and folders in the filesystem.

---

## Shell

Normally, you use your operating system via a graphical user interface (GUI), i.e. the finder in Mac, windows explorer in Windows or basically anything you see on screen when using your computer.

As developers we need to learn an additional way to interact with our computer, the so called shell, to access crucial tools and features. Instead of an graphical user interface, the shell is text based. This means, that anyting you want to do has to be executed via specific commands written in a command line. Inside the shell you can do everything and even more you can already do with the GUI of your operating system. Every functionality like displaying the files of the current directory, changing directories, creating new files, deleting files, opening any program on the computer has its own command.

The default shell installed on Mac is zsh (z shell). The program which displays the shell command line and output is the so called terminal. In Mac, the terminal programs are iterm or iterm2.

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
| `rm file name`     | delete a file permanently                                                  |
| `code .`           | open the current folder in vscode                                          |
| `open .`           | open the current folder in the finder                                      |
| `cat <file name>`  | prints the content of a specific file                                      |
| `curl <url>`       | prints the received content from the specified url. (try `curl ipinfo.io`) |

> 💡 There are a lot of commands for any sort of action you want to perform check out [this cheat cheet](https://github.com/RehanSaeed/Bash-Cheat-Sheet) to look up important commands.

# Project: Project Name
