# Challenges: How to Capstone

## Code Review

We prepared a fresh repository with a feature branch for you. Your task is to review that code and find the bugs/issues. You can use the [common issues](./how-to-capstone.md#common-issues) collection as a guide. Good Luck!

1. Clone [this repository](https://github.com/neuefische/web-code-review-challenge/tree/main):
   ```shell
   git clone git@github.com:neuefische/web-code-review-challenge.git
   ```
2. Download the feature branch by switching to it:

   ```shell
   git switch feature/products-list
   ```

3. Switch back to main:

   ```shell
   git switch main
   ```

4. Create a fresh repository on Github on your account called `code-review-challenge`. Make sure to create it without a readme.
5. Copy the ssh link to your new repository and update the remote url of your local repo:
   ```shell
   git remote set-url origin <ssh-link>
   ```
6. Push your main branch and your feature branch to your new remote repository:
   ```shell
   git push origin main
   git switch feature/products-list
   git push origin feature/products-list
   ```
7. Create a new Pull Request for the feature branch.
8. Go into the `changed files` tab and start reviewing!
9. Post your review in the solutions thread.
