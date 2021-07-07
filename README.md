# 14_techBlog

## Your Task

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

Your task this week is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Table of Contents

- [Links to Application](#Links)
- [Mock-Up](#Mock-Up)
- [Install](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Test](#test)
- [Questions](#questions)

## Links

Below are links to access the deployed video link and repository.

Github Repository: https://github.com/bergannation/14_techBlog

Deployed Heroku Link: https://techblogbergannation.herokuapp.com/

## Description

This app uses the Model (Data), Controller (Actions), View (Render) model to successfully run the Application. The application uses Handlebars.js as the templating language and Sequelize as the Object-Relational Mapping to handle the information using Javascript. The app uses Express-Session to create User Authentication and is deployed using Heroku.

Project was created using the MVC Paradigm consisting of:

- Sequelize
- Express
- Express Handlebars
- MySQL
- Javascript
- Node.js
- Nodemon
- dotenv
- bcrypt

## Installation

- To use the Application First Install [MySQL](https://dev.mysql.com/downloads/workbench/) and [Node.js](https://nodejs.org/en/)

- Install Your Package using:

```terminal
npm init --y
```

- Install Dependencies using:

```terminal
npm i mysql express express-session express-handlebars sequelize connect-session-sequelize dotenv bcrypt
```

- Install your Database in the WorkBench using the Schema provided in the /db.
  and create/use 'tech_blog'.

- Seed your Application with the given data using:

```terminal
npm run seed
```

- Now you are ready to run the Application using:

```terminal
node server.js
```

- Create an envelope file named `.env` inputting your Database Information in the following style:
  `DB_NAME`
  `DB_USER`
  `DB_PASSWORD`

- When the Application has been launched successfully, open the Browser to navigate to your localhost to view the site.

## Mock-Up

- Sign-up and Login can be accessed from the same page, sign-up required.
  ![Sign-Up / Login Page](./public/images/login.png)
- Dashboard Overview showing Posts
  ![Dashboard](./public/images/home.png)
- Example Comment and Post Field
  ![Comment / Post](./public/images/comment.png)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Questions

Here is a link to my github for more information: [Github]: https://github.com/BerganNation

You can reach me with any additional questions by email: BerganNation@gmail.com
