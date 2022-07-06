# HTML basics and the web

> 💡 feel free to create a personal branch of this guide to add your own notes

## Learning objectives

understand:

- [ ] client/server dynamics
- [ ] how HTML works
- [ ] what semantic HTML is

---

## Arrival: Motivate students and prepare them for the topic

> 💡 Breathe and relax :)

### Which important problem will we solve today?

- You will create your first website today.

### Why is the content of todays block so important for the students?

- You will get an understanding about the very basics / the foundation of how the web works.
- You will have a solid foundation to build upon and expand your knowledge and skills. It's the starting point of your technical expertise.

---

## Activate prior knowledge of students

### Which prior knowledge will be used for this session?

- You will use git and GitHub for your project.
- You will use a workflow that is based on best practices and done in the same way in many companies: You will use branches and pull request - and get reviews from coaches or other students.

---

## Inform: Sessionguide

### How the web works

The internet is a large network of computers that communicate with each other. There are many different protocols that define the rules on how two machines communicate with each other. For us the `http` protocol is most important. Let us look at an example of how a client and a server communicate with each other:

Say we have a user that uses a browser to visit a website. In that case the browser is the client and it communicates with a server that provides all necessary files (HTML, CSS, JS, images, fonts, etc.) to display the website.

> 💡 Comment: This is a simplified example. It might very well be that the client needs to communicate with multiple servers if some of the static resources (like fonts or images) are being fetched from other domains.

1. The user types in the URL of a website, e.g. [https://www.neuefische.de](https://www.neuefische.de)
2. The browser talks to the DNS - sending a domain name and receiving an `IP address`
3. The browser sends an `http GET request` to the server behind the IP address
4. The server responds to the request sending back the HTML file
5. The HTML file contains content with other resources (like images or fonts)
6. The browser sends further http GET requests to the server to fetch all needed resources.
7. The website is now fully loaded and being displayed in the browser.
8. Lets say the user interacts with the website by filling out a contact form and pressing the send button. That leads to a different kind of http request being sent to the server - an `http POST request`.

<img src="./assets/request-response.png" width=600 />

> 💡 You can show this by visiting wikipedia.de and opening the inspector. In the network tab you can see that the browser first receives the html file. The html file contains links to other resources like the style.css. In the network tab you can see another request for the style.css file.

### HTML

HTML is short for hyper text markup language. It is the markup language that is giving websites content and structure.

### Section 2

- [ ]
- [ ]

---

## Process: Project / Assignment

- [ ] Provide the [handout](session-name.md) for the students
- [ ] Open the handout and walk the students through the tasks
- [ ] Divide the students in groups
- [ ] Remind them of the ground rules (Meet again 30min before lunchbreak in the classroom / They can ask the coaches for help at any time / Always help each other / Take a break when you need it in the next 1.5h/ Keep an eye on Slack)

---

## Evaluate: Recap of the assignment / Discussion of MVP / Solution

- Come back to the question that was raised in the beginning of the session and try and answer it in a few phrases.

---

## Checkout

> 💡 In case the students seem frustrated try to find some encouraging words (e.g. remind them of how far they have come already) :)

- [ ] Summarize the day by repeating all the topics that were discussed
- [ ] Highlight the progress of the day
- [ ] Encourage the students to repeat what they learned with practical exercises
- [ ] Remind them to rest :)

## Keywords for Recap:

> These keywords are for the weekly summary on Fridays.
> We use the keywords to automatically generate excalidraw tags with the help of [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator).
> The students structure the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs to be explained in a few words by one student. We go in rounds one by one until all tags are included in the structure.
