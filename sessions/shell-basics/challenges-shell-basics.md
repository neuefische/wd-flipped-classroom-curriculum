# Challenges: Shell Basics

## Terminal Setup

1. open the **spotlight search**: `cmd` `space`
2. open the terminal: `terminal`
3. install [homebrew](https://brew.sh/)
4. (accept installing Xcode Command Line Tools, takes some minutes to install)
5. install [powerlevel10k](https://github.com/romkatv/powerlevel10k#homebrew) via homebrew:
   ```bash
   brew install romkatv/powerlevel10k/powerlevel10k
   echo "source $(brew --prefix)/opt/powerlevel10k/powerlevel10k.zsh-theme" >>~/.zshrc
   ```
6. restart the terminal to enter the configuration or type
   ```bash
   p10k configure
   ```
7. configure the zsh theme as you like
8. change the font size of the terminal to 18px: `Terminal` -> `preferences` -> `Profiles` -> `Font`
   -> `Change...`

## VS Code installation

1. install VS Code and explain what in IDE is:
   ```bash
   brew install --cask visual-studio-code
   ```
1. install the prettier extension **Prettier - Code formatter** and explain what a code formatter
   does
1. Go to the VS Code settings and:
   - search for "default formatter" and set to prettier
   - search for "format on save" and hit checkbox
1. install the extension `Auto Rename Tag`
1. install the extension `Live Preview`

## Treasure Hunt

In this challenge you have to find the lost diamond of the ancient king of treasure island! Open the
**treasure-hunt.zip** that you received. Navigate through treasure island only with the terminal and
find the treasure! Use the following commands:

- use `cd` to change directories
- use `cd ..` to move out of the current folder
- use `ls` to look what is in the current folder
- use `cat` to see what is inside a markdown file
- use `pwd` to see your current directory path

Good luck!
