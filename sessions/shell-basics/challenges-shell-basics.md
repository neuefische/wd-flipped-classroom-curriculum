# Challenges: Shell Basics

## Treasure Hunt

In this challenge you have to find the lost diamond of the ancient king of treasure island! Open the
`treasure-hunt.zip` that you received. Navigate through treasure island only with the terminal and
find the treasure! Use the following commands:

- use `cd` to change directories
- use `cd ..` to move out of the current folder
- use `ls` to look what is in the current folder
- use `cat` to see what is inside a markdown file
- use `pwd` to see your current directory path

Good luck!

## Enhance your terminal

Something that developers do all the time via the terminal is installing new software or tools, just
as we will in this exercise. One of the many features of our shell `zsh` is its extensibility. We
can install plugins which will improve our developer experience significantly. You can install all
necessary programs by following the installation steps on the respective websites. So let's get
started!

1. install the zsh framework [oh my zsh](https://ohmyz.sh/#install) (follow the instructions on
   their installation page). This framework helps us to manage the zsh configuration.
2. install [homebrew](https://brew.sh/), the package manager for MacOS. With homebrew we can install
   packages (e.g. programs, extensions, tools,...) via the command line.
3. install [powerlevel10k](https://github.com/romkatv/powerlevel10k#homebrew), a powerful zsh theme.
   Follow the installation instructions under `Homebrew`. Please don't forget to install the
   recommended font as described under `Getting Started`
4. run the following command to download a configuration for powerlevel10k theme: <br>
   `curl -s https://raw.githubusercontent.com/neuefische/zsh-setup/main/configs/.p10k.zsh > ~/.p10k.zsh;`
5. if you feel very confident in the terminal, you can adjust the powerlevel10k configuration with
   this command: <br> `p10k configure`
