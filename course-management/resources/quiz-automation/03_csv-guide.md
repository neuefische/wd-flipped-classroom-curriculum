# Using the csv files

## Prerequisites

Use the [Google_Form_Automation Script as described here](./02_form-creation-guide.md).

## How to use a csv file

### Preparing your csv file

1. Choose the template csv file you want to create quizzes from for example [template-generate-all.csv](./csv-templates/template-generate-all.csv) from the **web-pool repository**.
2. Make a copy of this file and save it in the root of your google_form_automation folder.
3. Open your copy.
4. Press `command + f`, search for `your-course-id` and replace it with the course id of your course.
5. Each line (starting from line 2) should now start with your course_id, e.g. `muc-web-22-3,../web-pool-2022/sessions/css-basics/quiz.md` (It may be that you need to adjust the path, but usually the path in the templates should be correct.)

### Running the Script

Run the script with `python -m formarize create` in the root of your google form automation folder.

Make sure to

- Set `--course` to your course_id, e.g. `cgn-web-22-2` (it needs to equal the course_id in your csv file!)
- Set `--batch True`
- Set `--markdown ../..` equal to the path to your desired csv file
  - In this example `template-generate-all.csv`
- Set `--github False` because the markdown files are stored locally
- Leave `--template id` as it is in the documentation

### Example script call

`python -m formarize create --course test-22-1 --batch True --template 1M_TvQG7YfSMVYkxQnwvZE381OR1MLISh6UDKX44rC9M --markdown template-generate-all.csv --github False`

## Finish

Make sure that you do **not** commit your copy of the csv file to web-pool-2022 (we just don't need it anymore).
