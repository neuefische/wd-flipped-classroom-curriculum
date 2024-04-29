# This is to collect all possible problems and solutions coming with the windows setup and the fact that students will use their own windows PCs from now on.

## Problem: The following script would not run for a student today

`bash <(curl -s https://raw.githubusercontent.com/neuefische/web-setup/main/setup-windows.bash)`

### Solution:

It failed silently due to the -s flag.
Turns out the issue was that the student had a vpn setup that was stopping things from working as expected. Once they disabled that everything worked out ok.
