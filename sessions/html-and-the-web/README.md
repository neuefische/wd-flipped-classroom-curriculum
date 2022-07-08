# HTML basics and the web

> 💡 feel free to create a personal branch of this guide to add your own notes

## Learning objectives

- [ ] Understanding client/server dynamics
- [ ] How HTML works
- [ ] Understanding and applying semantic HTML is

---

## Arrival: Motivate students and prepare them for the topic

> 💡 Breathe and relax :)

### Which important problem will we solve today?

- With semantic HTML you will learn how to write better code because
  - it's more accessible
  - it's SEO optimized
  - it's better understandable for other developers

### Why is the content of todays block so important for the students?

- You will get an understanding about the very basics / the foundation of how the web works.
- You will have a solid foundation to build upon and expand your knowledge and skills.

- You will create your first website today, a big step towards becoming a developer!

### Raise a question to be answered by the end of the block

- Why do we WANT to write semantic HTML?

---

## Activate prior knowledge of students

### Which prior knowledge will be used for this session?

- You will use git and GitHub for your project.
- You will use a workflow that is based on best practices and done in the same way in many
  companies: You will use branches and pull request - and get reviews from coaches or other
  students.

---

## Inform: Sessionguide

### How the web works

- [ ] The internet is a large network of computers that communicate with each other.
- [ ] The communication between these many computers follows specific rules, that we call
      `protocols`
- [ ] For us the `http` protocol is the most important one.

Go to [excalidraw](https://excalidraw.com/) and draw the steps of communication that happen during
the process of visiting a website via a browser. Explain step by step and draw the steps
accordingly.

Scenario: Say we have a user that uses a browser to visit a website. In that case the browser is the
client and it communicates with a server that provides all necessary files (HTML, CSS, JS, images,
fonts, etc.) to display the website. What happens there in detail, we will discuss now:

1. The user types in the URL of a website, e.g.
   [https://www.neuefische.de](https://www.neuefische.de)
2. The browser talks to the DNS - sending a domain name and receiving an `IP address`
3. The browser sends an `http GET request` to the server behind the IP address
4. The server responds to the request sending back the HTML file
5. The HTML file contains content with other resources (like images or fonts)
6. The browser sends further http GET requests to the server to fetch all needed resources.
7. The website is now fully loaded and being displayed in the browser.
8. Lets say the user interacts with the website by filling out a contact form and pressing the send
   button. That leads to a different kind of http request being sent to the server - an
   `http POST request`.

When you are done with your drawing it could look something like this:<br>
<img src="./assets/request-response.png" width=500 />

> 💡 Comment: This is a simplified example. It might very well be that the client needs to
> communicate with multiple servers if some of the static resources (like fonts or images) are being
> fetched from other domains.

If you walked through these steps quickly there is an nice "real life example" you can show:

- [ ] Open [wikipedia.de](https://www.wikipedia.de) and open the inspector.
- [ ] In the network tab you can see that the browser first receives the html file.
- [ ] By going through the html file, the browser recieves more information about required resources
      and sends more GET-requests for example for the style.css file and several .js files to the
      server

> Now would be a good time for a break :)

### HTML

- [ ] HTML is short for hyper text markup language.
- [ ] It is not considered a programming language, as you can't write logic with it. But
      nevertheless it is an extremely important part of the internet as we know it today.
- [ ] It is giving websites content and structure. You can imagine HTML as the sceleton of a
      website.

#### How to start out

- [ ] open your VS Code and create an index.html
- [ ] type ! `tab` and quickly explain what Emmet is (a tool that helps us to code faster by
      autocompletion)

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

- [ ] Go through the created HTML tags and explain briefly
- [ ] Announce that the following deep dive into HTML will be taking place in pairings

---

## Process: Project / Assignment

- [ ] Provide the [handout](html-and-the-web.md) for the students
- [ ] Open the handout and walk the students through the tasks
- [ ] Divide the students in pairings
- [ ] Remind them of the ground rules (Meet again 30min before lunchbreak in the classroom / They
      can ask the coaches for help at any time / Always help each other / Take a break when you need
      it in the next 1.5h/ Keep an eye on Slack)

---

## Evaluate: Recap of the assignment / Discussion of MVP / Solution

- Come back to the question that was raised in the beginning of the session and try and answer it in
  a few phrases.
- Why do we WANT to write semantic HTML?
- It helps other developers and ourselves in the future to understand our code
- Its more accessible
- It's SEO optimized

---

## Checkout

> 💡 In case the students seem frustrated try to find some encouraging words (e.g. remind them of
> how far they have come already) :)

- [ ] Summarize the day by repeating all the topics that were discussed
- [ ] Highlight the progress of the day
- [ ] Encourage the students to repeat what they learned with practical exercises
- [ ] Remind them to rest :)

## Keywords for Recap:

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
