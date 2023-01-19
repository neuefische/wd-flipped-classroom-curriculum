# How to use the google form automation script

## Prerequisites

If you haven't already done so, follow the [installation guide](./installation-guide.md).

There are two methods to generate the quizzes:

1. using a single markdown file
2. using a csv file for creating multiple quizzes at once.

A guide for the latter method can be found in the [csv-guide](./03_csv-guide.md).

## Starting the virtual environment

1. change into the `google-form-automation` folder
2. type the following command:
   - `source .venv/bin/activate`

## TL;DR

Use one of these templates and adapt it to your needs:

### Create single form:

`python -m formarize create --course your-cours-id-here --batch False --template 1M_TvQG7YfSMVYkxQnwvZE381OR1MLISh6UDKX44rC9M --markdown path/to/the/quiz.md --github False`

### Create multiple forms via a csv file:

`python -m formarize create --course your-cours-id-here --batch True --template 1M_TvQG7YfSMVYkxQnwvZE381OR1MLISh6UDKX44rC9M --markdown path/to/generate-quizzes.csv --github False`

## Generating a quiz

The script can be run by the following command plus multiple flags which define the desired behaviour:

- `python -m formarize create`

### Flags

- `--course course-id`:
  creates a folder called “course-id” in the [same folder](https://drive.google.com/drive/folders/124VMgoCsrFSX7spoPwePDJhFuS-j5Gkg) where the template lies on Google Drive

- `--batch {True/False}`: a switch for choosing the generating method: `True` for csv file, `False` for a single markdown file

- `--template 1M_TvQG7YfSMVYkxQnwvZE381OR1MLISh6UDKX44rC9M` : **Don't change this!**
  the “1M_Tv…C9M” is the id of the template you want to use (found inside of the URL); there you can make the settings how the Google Forms you want to create look like and how they work.

- `--markdown path/to/file :` the path (local or URL) of the markdown or csv file you want to use

- `--github {True/False}`: whether we use local or github markdown files (normally we use local files)

**Note:** Everytime, you are asked to validate via your Google Account of “neuefische”. There is currently no better solution for this.

Check in your Google Drive Folder whether the forms look right.

Do not forget to shut down the virtual environment by typing the following command into your terminal:
`deactivate`.
Congratulations, you are done!
