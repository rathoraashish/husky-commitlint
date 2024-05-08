# Setting up Husky and Commitlint in a Node.js project

Husky and Commitlint are powerful tools that help maintain clean and consistent commit messages in your Git repository. Follow these steps to integrate them into your Node.js project.

## Step 1: Install Dependencies

First, you need to install Husky and Commitlint as development dependencies in your Node.js project. You can do this using npm or yarn:

```bash
npm install husky @commitlint/config-conventional @commitlint/cli --save-dev
```
## Step 2: Initialize Husky

```bash
npx husky init
```

Then, create a new file in the husky folder as .husky/commit-msg, and add this code

```bash
npx --no-install commitlint --edit "$1"
```


ref: https://theodorusclarence.com/shorts/husky-commitlint-prettier