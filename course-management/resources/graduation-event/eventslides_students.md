# Creating Event Slides - Guide for Students

**NOTE: filenames for videos and images need to match `your id` (`firstname_lastname`) in `src/ions/data/students.js`. Names _can_ contain diacritics (i.e. "ç", "ê" or "ö"), also you can have three names or more, as long as the files are named the same way.**

## What you need:

- Video of your app, filename: `firstname_lastname.mov`
  - Mobile: width: '375', height: '667'
  - .mov file
  - Note: Use real and good content instead of placeholders when recording your app.
  - Note: Disable autocompletion in forms
  - [find more elaborate instructions on taking recordings below](eventslides_students.md#how-to-take-screen-recordings-on-mac)

## Workflow:

1. Clone this repo, change into the project folder and run `npm install`.
2. Create a new branch named after yourself.
3. Copy your video into `public/videos`.
4. Open `src/ions/data/students.js`.
5. Use the example student object (`id: "gregor_adams"`) and adjust the values with your data. Make sure that the data structure is preserved. Use the comments as hints.
6. Use `chore: my commit message` for your commit messages (otherwise, you will get an error; see the `/docs/COMMITS.md` for further information).
   - **Example:** `git commit -m "chore: update data"`
7. Run `npm run dev` and observe the console to verify you didn't break anything.
8. Push your changes to github and open a new pull request.
9. 🎉

## How to take screen recordings on Mac

1. Open your app in your browser, switch to mobile view (width: '375', height: '667', e.g. iPhone SE 2nd gen or iPhone 6/7/8)
2. Make sure NOT to record the frame (there is already a frame in our presentation).
3. On your Mac, press <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>5</kbd>, choose the part of the screen, start recording (and stop as you want).
4. For further information, see [How to take screen recordings on Mac.](https://support.apple.com/guide/mac-help/take-a-screenshot-or-screen-recording-mh26782/mac)
5. If you need to edit your movie afterwards (e.g. via [iMovie](https://apps.apple.com/de/app/imovie/id408981434) or [DaVinci Resolve 17](https://www.blackmagicdesign.com/de/products/davinciresolve/)), make sure to
   1. `set the correct mobile resolution (375x667) before you import your video`;
   2. `export your movie in the correct mobile and file format`!
6. Rename the file: `firstname_lastname.mov`

## How to speed up the final video

- If you are in need to speed up your final video you can use the tool `ffmpeg`
- Install it via `brew` through your terminal

```sh
brew install ffmpeg
```

- After that, navigate through your terminal to the folder with your video file.
- Let's assume your video file is called `firstname_lastname.mov`
- Type or copy/paste the following command to speed up the the video to 200% (twice as fast):

```sh
ffmpeg -i firstname_lastname.mov -filter_complex "[0:v]setpts=0.500*PTS[v]" -map "[v]" firstname_lastname2.mov
```

- Important is the number `0.500` and the last argument `firstname_lastname2.mov`
- `0.500` is read like: the video is now half the length of the original file
- `firstname_lastname2.mov` is the name of the converted file
- You can change the value `0.500` to every value you want
  - `2.000` would slow down the video (2 times the length of the original video)
  - `0.750` would speed up the video to 75% of the original length
