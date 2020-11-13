# Do You Remember :rocket:

## Purpose :dark_sunglasses:

The purpose of this application is to help build better conversations between people. 

### User Stories

- [ x ] As a user, I can create a new friend, which will include an emoji and a favorite memory. 
- [ x ] As a user, I can access a list of questions for each person, and keep track of answered questions. 
- [ x ] As a user, I will be able to favorite specific questions. 
- [ x ] As a user, I will be able to choose from a list of categories - in which I can eventually choose questions to answer from. 
- [ x ] As a user, I will be able to see a list of rules / norms after clicking on a specific category.
- [ x ] As a user, I will be able to see a list of questions answered with that person. 
- [ x ] Users will be able to signup and login
- [ x ] Users will be able to edit their information
- [ x ] Users will be able to delete their account
- [ x ] Users will be able to add a new friend
- [ x ] Users will be able to edit a friend
- [ x ] Users will be able to delete a friend
- [ x ] Users will be able to get a friend's profile
- [ x ] Users will be able to click on play, upon landing on friend profile page.
- [ x ] Users will be able to choose a category after clicking play.
- [ x ] Users will first land on rules page, then commence with the question of that category.
- [ x ] Users will be able to favorite a particular question.

### Screenshots

<img src="https://www.dropbox.com/s/s2weeld6z3y1g5h/cover.png?raw=1" width="45%"></img> 
<img src="https://www.dropbox.com/s/4l08d0yttz8atwn/addfriend.png?raw=1" width="45%"></img> 
<img src="https://www.dropbox.com/s/nev5oyor7d5zbs0/about1.png?raw=1" width="45%"></img> 
<img src="https://www.dropbox.com/s/5uwizse3bhbs5e1/home1.png?raw=1" width="45%"></img> 
<img src="https://www.dropbox.com/s/d4en28gwngvw73z/categories.png?raw=1" width="45%"></img> 
<img src="https://www.dropbox.com/s/5iuy2va3g6ndqya/home2.png?raw=1" width="45%"></img> 

### Where it fits :paperclip:

-   [ x ] ![SQL Diagram](./sql.png)
```
user {
    id
    email
    password
    spotify_id
    spotify_access_token
    timestamp
}
```

category table

```
category {
    id
    name
    timestamp
}
```

```
user_friend {
    id
    user_id (foreign)
    name
    emoji
    wishful_city
    fav_memory
    timestamp
}
```

```
question {
    id
    category_id
    question_string
    photo_url
    timestamp
}
```

```
user_friend_all_questions {
    id
    user_id
    user_friend_id
    question_id
    answered
    timestamp
}
```

#### Common Errors

##### Testing Routes

-   [ ] When testing routes, make sure you type in http instead of https, as https has the certificate (and has a layer of additional security that HTTP does not have)

### How to run this package

```
npm install
```

```
node app.js
```

### How it works :open_book:

-   [ x ] Handlebars
    -   [ x ] Categories
    -   [ x ] Profile
    -   [ x ] Question
    -   [ x ]  About

-   [ ] Model
    -   [x ] friends.json
    -   [ x] orders.json
    -   [ x] questions_family.json
    -   [x ] questions_friends.json
    -   [x ] questions_love.json
    -   [ x] questions_work.json
        -   The question
        -   [x ] Grab modal from the MDBootstrap
        -   [x ] See if you can have an arrow that just clicks through a bunch of data points, like a modal sort of thing?
        -   [ x] You also want to add a button to see if you can favorite the question
        -   [ x] Create that for every page
    -   [x ] categories.json
        -   [ ] Will be linked to the modal, so technically there might not be a question page
    -   [ ] users.json
        -   This will contain the list of authorized users

-   [ ] Postgres

## Backend

| Done? | Method | Table                     |                       Route                        |                     How it works                      | How it fits                                            |
| ----- | ------ | ------------------------- | :------------------------------------------------: | :---------------------------------------------------: | ------------------------------------------------------ |
| x     | GET    | user_table                |                     /api/user                      |                     get all users                     | Admin purposes                                         |
| x     | GET    | user_table                |                 /api/user/:user_id                 |                     get one user                      | See the profile of a user                              |
| x     | POST   | user_table                |                    /api/adduser                    |                       add user                        | Signing up                                             |
| x     | PUT    | user_table                |                 /api/user/:user_id                 |                       edit user                       | Editing user profile                                   |
| x     | DELETE | user_table                |                 /api/user/:user_id                 |                      delete user                      | Deleting user                                          |
| x     | GET    | user_friend               |                    /api/friend                     |                    get all friends                    | For profile page                                       |
| x     | GET    | user_friend               |               /api/friend/:friend_id               |                    get one friend                     | See friend's page                                      |
| x     | POST   | user_friend               |                    /api/friend                     |                     add a friend                      | Adding a new friend on home page                       |
| x     | PUT    | user_friend               |               /api/friend/:friend_id               |                     edit a friend                     | Editing friend profile                                 |
| x     | DELETE | user_friend               |               /api/friend/:friend_id               |                    delete a friend                    | Deleting friend profile page                           |
| x     | GET    | question                  |                   /api/question                    |                   get all questions                   | Get all questions                                      |
| x     | GET    | question                  |             /api/category/:categoryId              |       get all questions from specific category        | Get all questions from this category id                |
| x     | GET    | question                  |             /api/question/:questionId              |                Get a specific question                | Grabbing a specific question                           |
| x     | POST   | user_friend_all_questions |         /api/user_friend_all_questions/add         | Incoming has id, user_id, user_friend_id, question_id | Marking a question as answered                         |
| x     | GET    | user_friend_all_questions |           /api/user_friend_all_questions           |   Getting all the data regarding answered questions   | Reference                                              |
| x     | GET    | user_friend_all_questions | /api/user_friend_all_questions/:user_id/:friend_id |    Get all the questions between a user and friend    | See all the answered questions between user and friend |
| x     |        | user_friend_all_questions |           /api/user_friend_all_questions           |                                                       |                                                        |
|       |        | user_friend_all_questions |                                                    |                                                       |                                                        |

### User Stories :telescope:

1. Users will be able to look through the various examples and understand how to develop a web application well.
2. Users will be able to follow along the checklist and accurately complete the web application.

## Sprint :athletic_shoe:

| Done? | Component                                 | Priority | Estimated Time | Actual Time |
| ----- | ----------------------------------------- | :------: | :------------: | :---------: |
| x     | Complete JSON Files (Data)                |    H     |                |             |
| x     | Create backend and ensure all routes work |    M     |     3 days     |   3 days    |
|       |                                           |          |                |             |
|       |                                           |          |                |             |

Documentation:

## Issues and Resolutions :flashlight:

**ERROR**: :gear:
**RESOLUTION**: :key:

| Issue                | Where it occurs | Possible solution | Actual solution |
| -------------------- | :-------------: | :---------------: | :-------------: |
| Creating a checklist |        H        |       2hrs        |     2.5hrs      |

#### What is one thing that I learned from doing this project? :books:

#### Credits :recycle:

[Jest](https://jestjs.io/)

Element:
PSEUDO CODE

To Do:

-   Finished most routers and services
-   Finished layouts
-   Finished data backend
-   Finished the routes
-   [ x] Open postgres
-   [x ] Create migration files
-   [ x] Create seed files
-   [ ] Render the data onto index.handlebars
-   [ x] Create and verify user table
-   [ x] Create and verify user_friend table
-   [ x] Create and verify category table
-   [ x] Create and verify question table
-   [ x] Create and verify user_fav_question table
-   [ x] Create and verify user_friend_all_questions table


Current To Dos:

-   [ x ] Getting access to javascript files

    -   Sam: /assets instead of ./assets

-   [ x ] Can't press more than one button at a time (on question page)

    -   Potential Solution:
        -   Check JQuery book
        -   sean: make sure that you add and remove class, rather than id

-   [ x ] Associate emoji with picture on the home page

    -   Solution: Pass in via option / select

-   [ x ] See how many questions you have answered with that user

    -   [ ] Write out the SQL query first
    -   [ ] get the total count of the ids in user_answered
    -   [ ] get the total count of all the questions
    -   [ ] Did a complex forloop - just try things and move slow
    -   [ ] render that on the page

-   [ ] Add log out page

Hard To Dos:

-   [ x ] Implement authorization for the application

    -   Check the previous example on github
    -   Github download it, play with it, then try to implement authorization on your application
    -   Initial error: not sure how to redirect after login (needed to access /home/id) - turns out just needed to read documentation

-   [ ] Implement spotify passport.js

    -   Check out an example on github
    -   Github download it, play with it, then try to implement authorization on your application

-   [ ] Write route tests

    -   Check out supertest application

-   [ ] Write data tests
    -   Check out an example on github
    -   Github download it
    -   Play with it
    -   Try to implement it

Soft To Dos:

-   [ ] Home page, change the sign up / login button to match the blue on the picture
-   [ ] Login button on home page - change to yellow or red outline
-   [ ] Spotify png

-   [ x ] Change the navbar to white on the question page and the category page

-   [ ] Write the about description
-   [ ] Write the add friend description
-   [ ] Write the rules description

-   [ ] Images of each picture

    -   Put each picture on dropbox, giving it an id
    -   Then copy all of urls and put it in the seed data accordingly

-   [ ] Ripples when you press favorite

    -   [ ] Check out the ripples example on code pen / the previous jquery example with anubhav was asking you about it
    -   [ ] Implement the ripple

-   [ ] Ripples when you press done
-   [ ] Thickness of friend reflects the

Versioning Upgrades:

-   [ ] Be able to edit friend

    -   Create form page to edit friend - the user id and friend id should be in the params
    -   Upon submission, collect the params, and then update the friend accordingly

-   [ ] Be able to see profile page

    -   Make sure profile page can render the data well first
    -   Reroute the play button to profile/userid/friendid
    -   Be able to see picture

-   [ ] Create theme table -> can change theme

    -   Create different outlines for the different themes that you have
    -   Theme would encompass:
        -   Question page
        -   Category page
        -   Profile page

-   [ ] Create spotify_friend table -> can associate spotify account

    -   Create spotify_playlist table
        -   Id
        -   User Id
        -   Create spotify playlist with that friend

-   [ ] Be able to create a story together with the friend
    -   Create a story table
    -   That could replace the current user_friend table

#### Starting a Project

-   How can you start a project?
-   How to use github
    -   How to push / pull
    -   Merge
    -   Making a backup 
-   Working with a group
    -   How to assign tasks
    -   How to work together with other developers
    -   Setting expectations for code
    -   What it looks like
    -   Roles
    -   
