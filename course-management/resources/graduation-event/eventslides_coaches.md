# Creating Event Slides - Coaches

This repository is intended to be used as a presentation tool for the first part of a graduation event. A welcome message or introduction, laudation and then the students' pitches. Any Partner related presentations or organisation of Breakout Rooms should be presented in a separate presentation.

## Create a Repository

[Use this template](https://github.com/neuefische/event-slides) to create a new repository for the graduation event of the course under the neuefische organization. Using your course id, name it like the following example: `web-event-slides-hh-web-21-3`.

### Inside of the `src/ions/data` folder, you need to adjust the following files:

- in `/coaches.js`, replace the head and other coaches according to your course team. If there is a new coach, add his/her image to `public/images/team`
- in `/course.js`, adjust your course details
- in `/stats.js`, adjust the values for "messages", "hours", "onOnOnes", and "standUps"
- (optional) in `/students.js`, prepare all student objects in advance _(Highly recommended to avoid merge conflicts!)_
- in `/team.js`, replace student service and parter management responsibles according to your course team
- in `/time-table.js`, change the timetable in consultation with your partner management.

### Inside of the `public/images`, you need to adjust the following files:

- replace `/students.jpg` with one of your daily screenshots that the students made as their attendence picture. Be sure to use the same file name.
- in `/team`, make sure that you add new coaches if necessary.

## Students' action

Add your students as collaborators to the repository. You may use their GitHub-Team you created at the beginning of the course.

**Important:** They need the role `write`.

Students can then create pull requests to add their information.

- [Give this guide to the students](eventslides_students_ghstats.md) [(or the version without GitHub stats)](eventslides_students.md) to inform them how to shoot their video and to add their information to the repository.
- You should also give them examples on what should be included in their tech stack. **Example:**

  Die **Highlights** sollen in eurem **Tech Stack** präsentiert werden:

  - **Basic Stack:**
    "React", "React Router", "React Testing Library", "Jest", "Styled Components", "Storybook",
  - **Backend:**
    "Node.js", "Express", "MongoDB Atlas", "Mongoose",
  - **Weitere Libraries & APIs:**
    "Cloudinary", "<Name> API", "React Hook Form"
  - **Nicht dazu gehören:**
    "HTML", "CSS", "JavaScript", "localStorage", "Custom Hooks"

- Decide if students should merge their pull requests themselves or if you will do it. (Note: It may be easier if you've prepared the `src/ions/data/students.js` in advanced with all students objects).
- Student slides will be automatically generated.
- Students can check the slides locally and train their pitch.

## Deployment

After everything is done, you can decide if you want to deploy the event slides.
_This needs to be done through the terminal, not through the vercel interface!_

- Open your terminal, change to your event slides directory.
- Choose the branch you want to deploy (you `don't need to use main`, you can also switch to the branch with the students data).
- Run `npx vercel`. You are prompted with some questions, the correct answers are shown below as well:

```
Need to install the following packages:
vercel
Ok to proceed? (y) y
```

```
> Log in to Vercel github
```

```
> Please visit the following URL in your web browser:
> Success! GitHub authentication complete for [your GitHub email here]
```

```
? Set up and deploy “~/neuefische/courses/hh-web-22-1/web-event-slides-hh-web-22
-1”? [Y/n] y
```

```
? Which scope do you want to deploy to? [yourGitHubUsername]
? Link to existing project? [y/N] n
? What’s your project’s name? web-event-slides-hh-web-22-1
? In which directory is your code located? ./
```

```
> Upload [================----] 82% 7.7sAuto-detected Project Settings (Next.js):
- Build Command: next build
- Output Directory: Next.js default
- Development Command: next dev --port $PORT
? Want to override the settings? [y/N] n
```

```
🔗  Linked to [yourGitHubUsername]/[yourEventSlidesRepositoryName] (created .vercel)
🔍  Inspect: https://vercel.com/[yourGitHubUsername]/[yourEventSlidesRepositoryName]/[someRandomCharacters] [2s]
```

- Wait for the deployment to be done and check the link.

## Updating your Deployment on Vercel

You can make changes after you have deployed the event slides on Vercel.

To do so, open your terminal, change to the directory of your event slides repository and the associated branch, and run `npx vercel` in your project terminal. You will be prompted with a link to watch the building process on vercel.com.

## After the Graduation Event

Delete the deployment after the event to make sure that no sensible data is out there in the world wide web for too long.
