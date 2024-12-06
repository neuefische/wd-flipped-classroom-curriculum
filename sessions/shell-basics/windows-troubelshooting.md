# Collection of possible problems and solutions due to the windows setup.

## Problem: The following script would not run for a student today:

`bash <(curl -s https://raw.githubusercontent.com/wd-bootcamp/web-setup/main/setup-windows.bash)`

### Solution:

It failed silently due to the -s flag.
Turns out the issue was that the student had a vpn setup that was stopping things from working as expected. Once they disabled that everything worked out ok.
