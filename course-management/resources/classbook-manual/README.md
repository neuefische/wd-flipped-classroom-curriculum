# How to: Classbook?

> todo: where do we store class books in the future? The Web-Pool-2022 is outdated.

✨ It is finally happening, we can ditch Coda and generate the classbook through a python script!
Thanks to the wonderful data scientists. ✨

## Important links

- [How to classbook from Katja](https://drive.google.com/file/d/1Ujq8cC09U-QAoZlNxfnaDzXraELjeeMl/view)
- [Classbook data template](https://docs.google.com/spreadsheets/d/1A-t60mItMKTA6JX1unLZ-hzSn37PcdcMCeXhbnT0R2c/edit#gid=0)
- [Classbook automation script](https://github.com/neuefische/classbook-automation)
- [Classbook example folder](../classbook-manual/classbook-example/)



## Step by step

Instead of Coda, we will work with Google Sheets and a GitHub repository. For each course there
needs to be a separate Google Sheet with the actual classbook data. A template can be found in the
drive folder
[(team/06_web-course/\_Course-Template/Documents-Organization)](https://docs.google.com/spreadsheets/d/1A-t60mItMKTA6JX1unLZ-hzSn37PcdcMCeXhbnT0R2c/edit#gid=0).
To actually get the data as a classbook PDF we need to export the data as CSV and use the
[classbook automation script](https://github.com/neuefische/classbook-automation).

**Google Drive:**

1. Make a copy of the classbook data template and move it to the course folder
2. Change the dates according to the course dates
3. Use daily as classbook
4. When bootcamp is finished, export data as CSV
   1. German: `Datei -> Herunterladen -> Kommagetrennte Werte (CSV)`

**Web-Pool-2022 Repo:**

_Examples with `hh-web-22-1` as course_

1. Within the course folder create a new folder called _classbook_
   1. For example: `courses/hh-web-22-1/classbook/`
2. Move the generated CSV file to this folder and rename it to: `hh-web-22-1-schedule.csv`
3. Copy the `.yml` and `participants.csv` file from the template classbook example folder
   1. Rename the yml file to: `hh-web-22-1-course.yml` and change the meta of the course accordingly
   2. Rename participants csv file to: `hh-web-22-1-participants.csv` and change the participants
      list
4. A classbook needs at least two signatures, one from a head coach and one from a coach/manager
   coach
   1. Needs to be a specific width: `120px`
   2. Needs to be named according to the role:
      1. Head Coach: `hh-web-22-1-head-coach-signature.png`
      2. Manager Coach: `hh-web-22-1-manager-coach-signature.png`

**Classbook Automation Script:**

1. Clone the [classbook automation script](https://github.com/neuefische/classbook-automation)
   repository
2. Follow the setup guide for
   [**web** developers](https://github.com/neuefische/classbook-automation/blob/main/web-setup-guide.md)
3. After the setup, start the script by running `python generate_pdf_web.py`
   1. A new prompt will open: `What is the ID of the course? [hh-web-22-1]:`
   2. Enter your course id. The default is `hh-web-22-1`
   3. A second prompt will open: `Where are the data files [example]:`
   4. Enter the path to your classbook folder withing the `web-pool-2022` repo:

Path example:

```
neuefische
│
├── web-pool-2022
│   ├── courses
│       ├── hh-web-21-1
│           └── classbook
│
└── classbook-automation
```

The data of the classbook is within the web-pool-2022 repository. The automation script is run
within the classbook-automation repository. The path to enter in this case would be:

`../web-pool-2022/courses/hh-web-21-1/classbook`

The newly generated classbook will automatically be saved to the classbook folder.

✨ And that's a wrap! ✨
