# Shell Basics

## Learning Objectives

- Understanding what the terminal and the shell are and why they are used
- Understanding the difference between the shell, the terminal and CLI
- Navigating the file system inside the shell
- Creating, renaming, removing and moving files and folders in the filesystem

## Requirements

- None

## Demo

There is no pre-built demo for this session.

---

## Session Guide

Many developer tools don’t have a graphical user interface, but are still incredibly useful (e.g., Git, npm, Node.js). Learning how to interact with these tools through the command line interface (CLI) is essential for any developer. This skill allows you to access powerful tools and write more efficient code. Being able to navigate in the shell and interact with programs via CLI is an essential skill for every developer and is required for any job in the field. Plus, mastering the shell is the first step to truly feeling like a hacker!

> What is the shell or terminal and why is it useful?

### Terminal

- Start the session by introducing the concept of the terminal to the students.
- Open the terminal and ask the students:
  - Did any of you ever use the terminal before? Was it easy or difficult to use?
  - Did any of you ever open the terminal by accident and wonder what it is used for?

**Explain what the terminal is and what it's used for:**

- The terminal is a command line interface (CLI) that allows us to interact with the operating system of our computer.
- It's used to run programs and perform actions. As a developer we use the terminal for a lot of tasks, like creating files installing programs, start or stop a server and many more.
- It's the program to have access to the shell and interact with it.
- The terminal is the text-based input/output environment. It accepts keystrokes as input and paints pixels on the screen as visual output.
- On macOS we can use the integrated program Terminal.

### Shell

**Explain what the shell is and what it's used for:**

- The shell is a program that runs in a terminal.
- It's used to actually execute the commands that we type and returns the results.
- Oftentimes the words "shell" and "terminal" are used interchangeably, even though they are not exactly the same thing.

#### Basic Shell Commands

- `cd <foldername>` / `cd ..` / `cd`: change directory
- `ls`: list files
- `pwd`: print working directory
- `mkdir <foldername>`: create a directory
- `touch <filename>`: create a file
- `rm <filename>`: remove a file
- `mv <oldname> <newname>`: move or rename a file
- `open .`: open the current folder in Finder
- `cat <filename>`: print the contents of a file to the terminal

### Why Do Developers Need to Complicate Everything And Use the Terminal Instead of a Graphical User Interface (GUI)?

- The terminal is also a user interface, it just not graphical, meaning no pretty buttons or hamburger menus. It's a text-based user interface.
- With a text-based user interface you can **send/receive information much faster**, because there is no additional (beautiful) layer that needs to process the information.
- It takes a lot of time to code a GUI, therefore **some programs don't use one**.
- Most of the people that ever get into the position to use a terminal, are technical and do have the skills needed to use it.
- You can **easily automate processes** in a shell, because you can write computer programs that execute the commands for you, this wouldn't be possible with a GUI.
- Different programs in the shell can be combined to interact with each other (e.g., the output of one program can be passed as input to another program).

> **It's much faster, you can copy and paste the commands you need, and you will probably make less mistakes.**

But with great power comes great responsibility. You can do almost anything in the terminal, also delete things irreversibly or other things that you didn't intend to so. So be cautious!
