# Challenges: Shell Basics

## Terminal Setup

1. Open the **spotlight search**: <kbd>command</kbd><kbd>space</kbd>
2. Type "terminal" into the search bar and press <kbd>Enter</kbd> to open the terminal
3. Install [Homebrew](https://brew.sh/)
   - Accept installing Xcode Command Line Tools. It takes some minutes to install.
4. Install [powerlevel10k](https://github.com/romkatv/powerlevel10k#homebrew) via Homebrew:
   ```bash
   brew install romkatv/powerlevel10k/powerlevel10k
   echo "source $(brew --prefix)/opt/powerlevel10k/powerlevel10k.zsh-theme" >>~/.zshrc
   ```
5. Restart the terminal to enter the configuration or type
   ```bash
   p10k configure
   ```
6. Configure the zsh theme as you like
7. Change the font size of the terminal to 18px: `Terminal` -> `Preferences` -> `Profiles` -> `Font`
   -> `Change...`

## VS Code Installation

1. Install VS Code:
   ```bash
   brew install --cask visual-studio-code
   ```
2. Install the extension **Prettier - Code formatter**
3. Go to the VS Code settings and:
   - search for "default formatter" and set to prettier
   - search for "format on save" and hit checkbox
4. Install the extension **Auto Rename Tag**
5. Install the extension **Live Preview**

To be able to launch VS Code directly from the command line, do the following:

1. In VS Code open the command palette by pressing <kbd>command</kbd><kbd>shift</kbd><kbd>p</kbd>.
2. This will open a prompt near the top of the code window. Type "shell command" into the prompt.
3. Select _"Shell Command: Install 'code' command in PATH"_ and confirm the installation by pressing
   <kbd>Enter</kbd>.

You now have the `code` command line command installed. To open VS Code directly from the terminal,
navigate to your project folder and type `code .` .

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
