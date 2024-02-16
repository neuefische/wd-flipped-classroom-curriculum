# User Stories Workshop 🆕

> 💡 feel free to create a personal branch of this guide to add your own notes

| duration | content         |
| -------- | --------------- |
| 0:15     | Session         |
| 2:00     | Active Learning |
| 0:30     | Recap           |

## Learning objectives

- [ ] Getting practice in writing a good user story
- [ ] Understanding the main elements that need to be included in the acceptance criteria and tasks

---

## Arrival: Motivate students and prepare them for today's topic(s)

> 💡 Breathe and relax :)

### Which important problem will we solve today?

- Writing code can become convoluted very quickly. We want to learn how to plan a new feature in an agile work environment.

### Why is the content of today's block that important for the students?

- Students need to understand the importance of user stories and how to write them.
- In the capstone the students need to be fluent in creating good user stories.

### Pose a question to be answered by the end of the block!

- How can we prepare / plan a feature in an agile team without loosing flexibility?
- What makes a good user story?

---

## Activate prior knowledge of students

It is an option to start the session with these questions and follow up with the motivation of the
students:

- Remind the students about the agile workshop and what they learned about scrum, kanban, sprints and agile teams.

### Which previously learned concepts will be utilized in this session?

You can ask these questions:

- What needs to be included in a good user story?
- How can we protocol the upcoming features for all departments, not just for developers?

---

## Inform: Session Guide

### Example Project: Movie App

- [ ] Share this excalidraw file with the students or create a remote session for each group with this template:
      [user-story-workshop-start.excalidraw](assets/user-story-workshop-start.excalidraw).
- [ ] Walk the students through the planned app and the 3 user stories with the wireframes
  1. List of current movies
  2. Detailspage for movies
  3. Watchlist
- [ ] Show the students where to fill in the different user stories
- [ ] Remind the students about the most important aspects of a user story:
  - [ ] Cover all new elements that should be displayed
  - [ ] Cover all user interactions or other behavior of the new feature
  - [ ] Write a detailed task list that could be a "recipe" for creating this feature

> 💡 Optional: Share this link with the students 📽️ [Agile User Stories - How to write a good User Story?](https://www.youtube.com/watch?v=LEPLaYcdgeg) ~20min

## Challenge

- [ ] Split the students in groups of 3-5 and share the [excalidraw file](assets/user-story-workshop-start.excalidraw) with them.
  > 💡 Show the students how to import an excalidraw file in the web application and how to start a group session.
- [ ] Let the students work on the first user story
- [ ] Meet the students after ~ 30min to check the results
- [ ] Give feedback on what to improve hand out the example solution of the first user story.
- [ ] Let the students work on the remaining 2 user stories.

## Recap

- [ ] Check in with the students and make sure that they added enough details in their user stories
- [ ] Give the students the example solutions for the user stories .

## Example Solutions

### 1. List of current movies

**Value Proposition**

**As a user**,

**I want to** see a list of current movies

**so that** I can quickly discover and explore the latest films.

**Description**

![scribble-movie-list.png](assets/scribble-movie-list.png)

**Acceptance Criteria**

- [ ] On the home page, there is a list of current movies displayed
- [ ] Each movie in the list includes the following details:
  - The name of the movie
  - The poster image of the movie
  - The rating of the movie
- [ ] If there is an issue loading the movie data from the source, an error message is displayed to the user.
- [ ] The movie list is vertically scrollable.

**Tasks**

- [ ] Create the feature branch ‘movie-list’
- [ ] Fetch a list of current movies from The MovieDB API
  - [ ] Implement the error handling logic to display an error message if there's an issue loading movie data from the API
- [ ] Create the component `Movie`, which renders:
  - [ ] the name of the movie
  - [ ] the poster image of the movie
  - [ ] the rating of the movie
- [ ] Create the component `MovieList`
  - [ ] map through the fetched list of movies and render a `Movie` component for each movie
- [ ] Render the `MovieList` component in the `index.js`

---

### 2. Movie detail page

**Value Proposition**

**As a** user,

**I want to** be able to view detailed information about a specific movie,

**so that** I can more easily decide which movies to watch.

**Description**

![scribble-movie-detail-page.png](assets/scribble-movie-detail-page.png)

**Acceptance Criteria**

- [ ] When the user selects a movie from the list on the homepage, they are directed to a dedicated movie detail page.
- [ ] On the movie detail page, the user sees the following information:
- The movie's poster
- The movie's title
- The movie's release date
- A informative description of the movie, providing insights into its plot and genre
- [ ] The user can return to the homepage by clicking a dedicated "Back to Home" button located on the top of the movie detail page.

**Tasks**

- [ ] Create the feature branch ‘movie-details-page’
- [ ] Create the movie details page `pages/movies/[id].js`
  - [ ] Render the movie’s poster, title, release date and description
  - [ ] Add the `Link` component to navigate back to the homepage
- [ ] Update the `Movie` component
  - [ ] Add the `Link` component to navigate to the details page

---

### 3. Watchlist

**Value Proposition**

**As a** user,

**I want to** have the ability to add and remove movies from my watchlist,

**so that** I can keep track of the movies I'm interested in watching.

**Description**

![scribble-watchlist.png](assets/scribble-watchlist.png)

**Acceptance Criteria**

- [ ] There is a navigation bar that allows the user to switch between the homepage and the watchlist.
  - [ ] The navigation bar is fixed to the bottom of the viewport.
  - [ ] The link to the current page in the navigation bar is visually highlighted, to indicate the user's current location in the app.
- [ ] On the movie detail page:
  - [ ] There is a button labeled “Add to Watchlist” that allows the user to add the current movie to their watchlist.
  - [ ] If the movie is already on the user's watchlist, the button on the movie detail page changes to "Remove from Watchlist".
- [ ] On the watchlist page:
  - [ ] The watchlist displays all movies that the user has added, showing their titles, posters, and ratings.
  - [ ] When the user selects a movie from the watchlist, they are directed to the movie detail page.
  - [ ] If the watchlist is empty, a message is displayed on the watchlist page, indicating that there are no movies in the watchlist.
  - [ ] The watchlist is vertically scrollable.

**Tasks**

- [ ] Create the feature branch ‘watchlist’
- [ ] Create a `Navigation` component
  - [ ] add a `Link` component for the homepage and the watchlist
  - [ ] highlight the link to the current page
- [ ] Create a `Layout` component
  - [ ] add the `Navigation` component
- [ ] Render the `Layout` component in the `_app.js`
- [ ] Update the movie details page `pages/movies/[id].js`
  - [ ] Include a button labeled “Add to Watchlist”
  - [ ] Implement the logic that changes the button label if the movie is already on the watchlist
- [ ] Update the `app.js`
  - [ ] Create a `useState` for the watchlist
  - [ ] Implement a function that adds or removes movies from the user's watchlist
- [ ] Create the page `pages/watchlist.js`
  - [ ] Reuse the `MovieList` component to display the movies on the watchlist
  - [ ] Display a message on the watchlist page if it's empty, indicating that there are no movies in the watchlist.

---
