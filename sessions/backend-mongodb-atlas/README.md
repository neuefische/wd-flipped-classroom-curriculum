# Backend MongoDB Atlas

> 💡 feel free to create a personal branch of this guide to add your own notes

Recommended schedule for this session:

| duration | content         |
| -------- | --------------- |
| 0:30     | Session         |
| 1:45     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] what MongoDB Atlas is
- [ ] creating an account for Mongodb Atlas
- [ ] Create a cluster and database
- [ ] Setup database user and security settings
- [ ] Connect with local app
- [ ] Set up vercel with MongoDB Atlas

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

For our capstone project we cannot access any local database, so we need a database that is also accessible from outside. To connect our database with our projekt we need to create a `.env` file.

### Pose a question to be answered by the end of the block!

Do you know how to register and setup a database on MongoDB Atlas.
Do you know how to connect the database from MongoDB Atlas with our project.

---

## Activate prior knowledge of students

### Which previously learned concepts will be utilized in this session?

- Backend Basics
- MongoDB

---

## Inform: Session Guide

You can use [this template repository](https://github.com/neuefische/web-backend-mongodb-atlas-demo-template) to setup an example conection with mongodb atlas.

### Intro MongoDB Atlas

- [ ] Tell the students that we have only worked with a local database so far
- [ ] and we cannot use our local database for external projects such as the capstone project.
- [ ] Further explain that on some web servers like vercel we cannot install a local database,
- [ ] therefore we depend on providers like MongoDB Atlas.
- [ ] Finally: Explain that MongoDB Atlas is a cloud provider for mongo databases.

### Setup MongoDB Atlas

- [ ] Let student create an [account for the MongoDB Atlas](https://www.mongodb.com/atlas/database).
- [ ] `Create a database` following these steps in the browser:
  1. `Choose Try Free` and fill out the form with your data.
  2. Verify Your MongoDB Email Address
  3. 'Tell us a few things about yourself and your project.' (Some students might not see this.)
- [ ] `Create a cluster`: choose `M0 FREE`, `aws` and `Frankfurt`
- [ ] `Security Quickstart: Generate an user: Username ('admin') and password`
  - Make sure to write down your generated password!
- [ ] 'Where would you like to connect from?' - 'My Local Environment' --> current IP adress
- [ ] Under 'Network Access' --> 'EDIT' `allow access from anywhere` as well
- [ ] 'Database' --> 'Connect' --> 'Connect your application' --> copy url

### Using MongoDB Atlas in your App

- [ ] `Create an environment variable (.env file)`
  1. Create a `.env file` [(have an example here)](assets/.env)
  2. Add `.env` to `.gitignore`
- [ ] In api connection file [(see example db.js here)](assets/db.js):
  1. Get url via `const { MONGODB_URL } = process.env;`
  2. Use url via `mongoose.connect(MONGODB_URL)`
- [ ] If students face problems here:
  1. Make sure to use the correct password.
  2. When replacing the `<password>` part in the `MONGODB_URL` in the `.env` file, make sure to delete the angle brackets as well.
  3. Make sure that the password is URL encoded, special characters like '@' or '/' in the password need to be escaped (see https://en.wikipedia.org/wiki/URL_encoding).

### Set up vercel with MongoDB Atlas

- [ ] Setting up vercel [account for vercel](https://vercel.com/signup)
  1. If you haven't already done so: First create an account on vercel.
  2. Link vercel to your application's repo on github.
- [ ] Store the environment variables
  1. Navigate to 'Environment Variables' inside your 'Project Settings' on vercel.
  2. In the form that is now displayed, you can enter the key on the left side and the value on the right side. In our example, this would be `MONGODB_URL` for the key and `'mongo+srv://<user>:<pass>@<host>:<port>/<database>?<connection options>'` (replace the key with your connection string) for the value.
- [ ] Finally: Don't forget to redeploy!

---

## Process: Challenges

- [ ] Provide the [handout](backend-mongodb-atlas.md) and the
      [challenges](challenges-backend-mongodb-atlas.md) to the students
- [ ] Open the handout and walk the students through the tasks
- [ ] Divide the students into groups of \_\_\_
- [ ] Remind them of the ground rules:
  - meet again 30 min before lunch break in the class room
  - they can ask the coaches for help at any time
  - always try to help each other
  - take a break within the next 1.5 hrs
  - keep an eye on Slack

---

## Evaluate: Recap of the assignment / Discussion of the MVP / Solution

- Revisit the question that was posed in the beginning of the session and try to answer it with a
  few phrases.

---

## Checkout

> 💡 In case the students seem frustrated try to find some encouraging words (e.g. remind them of
> how far they have come already) :)

- [ ] Summarize the day by repeating all of the topics that were discussed
- [ ] Highlight the progress made that day
- [ ] Encourage the students to repeat what they learned with practical exercises
- [ ] Remind them to rest :)

## Keywords for Recap:

MongoDB, MongoDB-Atlas, MongoDB Compass, term: database, term: collection, term: document, term: field, .env, vercel, environment variables

> These keywords are for the weekly summary on Fridays. We use the keywords to automatically
> generate excalidraw tags with the help of
> [this amazing tool](https://github.com/F-Kirchhoff/tag-cloud-generator). The students structure
> the cards in a pattern that makes sense for them. Each tag, that is added to the structure needs
> to be explained in a few words by one student. We go in rounds one by one until all tags are
> included in the structure.
