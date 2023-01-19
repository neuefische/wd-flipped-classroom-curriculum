# Creating Event Slides - Guide for Students

**NOTE: filenames for videos and images need to match `your id` (`firstname_lastname`) in `src/ions/data/students.js`. Names _can_ contain diacritics (i.e. "ç", "ê" or "ö"), also you can have three names or more, as long as the files are named the same way.**

## What you need:

- Video of your app, filename: `firstname_lastname.mov`
  - Mobile: width: '375', height: '667'
  - .mov file
  - Note: Use real and good content instead of placeholders when recording your app.
  - Note: Disable autocompletion in forms
  - [find more elaborate instructions on taking recordings below](eventslides_students.md#how-to-take-screen-recordings-on-mac)
- Screenshot of the last three months of your github activity (please use a light mode), filename: `firstname_lastname.png`
  <img style="display:block" src="./img/firstname_lastname.png" alt="Example GitHub Activities" width="200px">
- Number of commits of your Capstone project
- Number of pull request of your Capstone project

## Workflow:

1. Clone this repo, change into the project folder and run `npm install`.
2. Create a new branch named after yourself.
3. Copy your video into `public/videos`.
4. Copy your github activity image into `public/images/github`.
5. Open `src/ions/data/students.js`.
6. Use the example student object (`id: "gregor_adams"`) and adjust the values with your data. Make sure that the data structure is preserved. Use the comments as hints.
7. Use `chore: my commit message` for your commit messages (otherwise, you will get an error; see the `/docs/COMMITS.md` for further information).

   - **Example:** `git commit -m "chore: update data"`

8. Run `npm run dev` and observe the console to verify you didn't break anything.
9. Push your changes to github and open a new pull request.
10. 🎉

## How to take screen recordings on Mac

1. Open your app in your browser, switch to mobile view (width: '375', height: '667', e.g. iPhone SE 2nd gen or iPhone 6/7/8)
2. Make sure NOT to record the frame (there is already a frame in our presentation).
3. On your Mac, press <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>5</kbd>, choose the part of the screen, start recording (and stop as you want).
4. For further information, see [How to take screen recordings on Mac.](https://support.apple.com/guide/mac-help/take-a-screenshot-or-screen-recording-mh26782/mac)
5. If you need to edit your movie afterwards (e.g. via [iMovie](https://apps.apple.com/de/app/imovie/id408981434) or [DaVinci Resolve 17](https://www.blackmagicdesign.com/de/products/davinciresolve/)), make sure to
   1. `set the correct mobile resolution (375x667) before you import your video`;
   2. `export your movie in the correct mobile and file format`!
6. Rename the file: `firstname_lastname.mov`
