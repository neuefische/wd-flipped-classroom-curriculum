# HTML and the web

## Learning Objectives

After this session you should be able to:

- [ ] understand client/server dynamics
- [ ] how html works
- [ ] what semantic html is

---

## How the web works

The world wide web is a network of computers who can communicate and exchange information with each other. There are many different ways how and what is communicated:

- requesting and displaying html files via the `http` protocol (e.g. opening websites with your browser)
- accessing the shell of another computer via `ssh` (e.g. cloning repositories from GitHub via a ssh connection)
- sending and receiving e-mails via `TLS/SSL`
- Accessing files on a server via `FTP` (file transfer protocol)

For now we are focusing on the most commonly used feature of the web: displaying and interacting with websites. Commonly, websites are stored in big clusters of comupters called servers. In order to view a specific website you have to:

- get the `specific address` of the computer where the html files are stored on, i.e. the `IP address` (internet protocol address).
- send a `GET request` to that address
- `rendering` the received html content (e.g. via a browser)

Each computer connected to the internet has a unique `IPv4` address which consists of 4 numbers in a range from 0 to 255 separated by a dot.

> 💡 Enter this ip address in the address bar of your browser and see what happens: `76.76.21.22`.

> 💡 Execute following command in your terminal to get the current ip address of your computer: `curl ipinfo.io`.

Just like remembering all the phone numbers of your friends is impractical, remembering the ip addresses of all the websites is not very user friendly. To solve this problem, websites can be reached via a `url` like `www.neuefische.de`. The browser then looks up the ip address of this website in a huge list similar to a phone book stored on a `DNS` (domain name server).

Then the browser fetches all necessary content for the website like the html file, css style sheets, javascript files, images, fonts, etc. As soon as all files have been stored on the local computer, the browser displays the html content, styles it as specified in the style sheet and executes javascript code. We can now interact with the content of the website and send new requests to receive other websites.

# Project: Project Name

### Part 1

### Part 2

---

## Resources
