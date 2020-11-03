/**********************************************
 * App.js
 * ==================================
 * Think of this file as your main outline - should always be open
 ***********************************************/
const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const basicAuth = require("express-basic-auth");
const { json } = require("body-parser");

const knex = require("knex")({
    client: "postgresql",
    connection: {
        user: "postgres",
        password: "orange",
        database: "doyouremember",
    },
});

/**********************************************
 * Serving Static Files
 * ==================================
 * - Make sure that the static folder comes before your routes
 * - When a request comes in, the static layer takes the URL, appends it to the folder, and sees if that file exists
 * - E.g., if you request "/content/style.css" in your script tag, the middleware will look at "public/content/style.css"
 ***********************************************/
app.use(express.static("public"));

require("dotenv").config();
app.use(morgan("dev"));
app.engine(
    "handlebars",
    handlebars({
        defaultLayout: "main",
    })
);
app.set("view engine", "handlebars");

app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.use(bodyParser.json());

// app.use(
//     basicAuth({
//         authorizer: usernamePasswordCheck,
//         challenge: true,
//         authorizeAsync: true,
//         realm: "My Application",
//     })
// );

/**********************************************
 * * Controllers are used to define how the user interacts with your routes - connecting routes to database here **
 *
 * Important Things to know
 * - Order matters (express will work through them one at a time until it finds one that decides that it can handle the request)
 * ==================================
 * 1. Declare routers
 * 2. Declare the database
 * 3. Pass the database into the router
 * 4. Explicitly connect the route to the router
 ***********************************************/
// 1: Declare routers;
let user_friend = "user_friend";
let user_friend_col1 = "id";
let user_friend_col2 = "user_id";
let user_friend_col3 = "name";
let user_friend_col4 = "emoji";
let user_friend_col5 = "wishful_city";
let user_friend_col6 = "favorite_memory";
let question = "question";
let question_col1 = "id";
let question_col2 = "category_id";
let question_col3 = "question_string";
let question_col4 = "photo_url";
/**********************************************
 * ALL JSON DATA API ROUTES HERE START HERE
 * ==================================
 ***********************************************/
/**********************************************
 * TABLE OF CONTENTS
 * ==================================
 * 0: Users (post, get one, get all, edit, delete)
 * 1: Friend (post, get one, get all, edit, delete)
 * 2: Question (get all questions from this friend, get all from category, add to favorite)
 ***********************************************/
/**********************************************
 * 0: User (post, get one, get all, edit, delete)
 * ==================================
 ***********************************************/
/**********************************************
 * Get All Users Method
 * ==================================
 ***********************************************/
/**********************************************
 *
 * ==================================
 ***********************************************/
app.use("/api/user", function (incoming, outgoing, next) {
    let getAllUsersQuery = knex
        .from("user_table")
        .select(
            "id",
            "email",
            "password",
            "spotify_id",
            "spotify_access_token"
        );
    getAllUsersQuery
        .then((eachUserRow) => {
            console.log("Each user: ", eachUserRow);
            outgoing.status(200).send(eachUserRow);
        })
        .catch(next);
});
/**********************************************
 * Get One User
 * ==================================
 ***********************************************/
app.get("/api/user/:user_id", function (incoming, outgoing, next) {
    console.log(incoming.params.user_id);
    let getUserByIdQuery = knex
        .from("user_table")
        .select("id", "email", "password", "spotify_id", "spotify_access_token")
        .where("id", incoming.params.user_id);
    getUserByIdQuery
        .then((eachRow) => {
            console.log(eachRow);
            outgoing.status(200).json(eachRow);
        })
        .catch(next);
});
/**********************************************
 * Edit User
 * ==================================
 ***********************************************/
app.put("/api/user/:user_id", function (incoming, outgoing, next) {
    console.log(incoming.params.user_id);
    knex("user_table")
        .where({
            id: incoming.params.user_id,
        })
        .update(incoming.body)
        .then((eachRow) => {
            outgoing.status(200).json(eachRow);
        })
        .catch(next);
});
/**********************************************
 * Delete User
 * ==================================
 ***********************************************/

app.delete("/api/user/:user_id", function (incoming, outgoing, next) {
    console.log(incoming.params.user_id);
    console.log("Delete User Method");
    knex("user_table")
        .where({
            id: incoming.params.user_id,
        })
        .del()
        .then((eachUser) => {
            outgoing.status(200).json(eachUser);
        })
        .catch(next);
});
/**********************************************
 * 0: User End Here
 * ==================================
 ***********************************************/
/**********************************************
 * 1: Friend (post, get one, get all, edit, delete)
 * ==================================
 * A: Add Friend
 * B: Get all friends
 * C: Get all friends from this user
 * D: Get one friend
 * E: Delete Friend
 * F: Edit Friend
 ***********************************************/
/**********************************************
 * A: Add One friend
 * ==================================
 *
{
	"id": 5, 
	"user_id": 2,
	"name": "anubhav",
	"emoji": ":godmode:",
	"wishful_city": "Hawaii",
	"favorite_memory": ""
}
 ***********************************************/
app.post("/:user_id/addfriendform", function (incoming, outgoing, next) {
    console.log("Add friend method works");
    let user_id = incoming.params.user_id;

    let body = incoming.body;
    console.log("body: ", body);
    let newFriend = {
        id: 10,
        user_id: user_id,
        name: incoming.body.name,
        emoji: incoming.body.emoji,
        wishful_city: incoming.body.wishful_city,
        favorite_memory: incoming.body.favorite_memory,
    };
    console.log("Body: ", newFriend);
    knex("user_friend")
        .insert(newFriend)
        .then((eachFriend) => {
            console.log("Adding new friend: ", eachFriend);
            outgoing.redirect("/home/" + user_id);
        })
        .catch(next);
});
/**********************************************
 * B: Get all friends
 * ==================================
 ***********************************************/
app.get("/api/friend", function (incoming, outgoing, next) {
    knex.from(user_friend)
        .select(
            user_friend_col1,
            user_friend_col2,
            user_friend_col3,
            user_friend_col4,
            user_friend_col5,
            user_friend_col6
        )
        .then((eachFriend) => {
            console.log("Each friend: ", eachFriend);
            outgoing.send(eachFriend);
        })
        .catch(next);
});
/**********************************************
 * D: Get one friend
 * ==================================
 ***********************************************/
app.get("/api/friend/friendPage/:friend_id", function (
    incoming,
    outgoing,
    next
) {
    let id = incoming.params.friend_id;
    knex.from(user_friend)
        .select(
            user_friend_col1,
            user_friend_col2,
            user_friend_col3,
            user_friend_col4,
            user_friend_col5,
            user_friend_col6
        )
        .where("id", id)
        .then((eachFriend) => {
            console.log("Each friend: ", eachFriend);
            outgoing.render("getFriend", {
                user_id: user_id,
                friend: eachFriend,
            });
        })
        .catch(next);
});
/**********************************************
 * E: Edit Friend
 * ==================================
 ***********************************************/
app.put("/api/friend/:friend_id", function (incoming, outgoing, next) {
    console.log("Edit friend");
    let id = incoming.params.friend_id;
    knex("user_friend")
        .where({ id: incoming.params.friend_id })
        .update(incoming.body)
        .then((eachFriend) => {
            console.log(eachFriend);
            outgoing.status(200).json(eachFriend);
        })
        .catch(next);
});

/**********************************************
 * F: Delete Friend
 * ==================================
 ***********************************************/
app.delete("/api/friend/:friend_id", function (incoming, outgoing, next) {
    console.log("Id: ", incoming.params.friend_id);
    knex("user_friend")
        .where({ id: incoming.params.friend_id })
        .del()
        .then((eachFriend) => {
            outgoing.status(200).json(eachFriend);
        })
        .catch(next);
});

app.get("/:user_id/addfriend", function (incoming, outgoing, next) {
    console.log("User Id: ", incoming.params.user_id);
    outgoing.render("addFriend", {
        user_id: user_id,
        id: incoming.params.user_id,
    });
});
/**********************************************
 * 1: Friend Ends Here
 * ==================================
 ***********************************************/
/**********************************************
 * 2: Question (get all from category, add to favorite)
 * ==================================
 * A: Get all questions from this particular friend
 * B: Get all questions that has this user and this friend
 * C: Friend Answers Question
 * D: Get all questions from this particular category
 * E: Get One Question
 * F: Get all questions
 * G: Favorite a question
 ***********************************************/
/**********************************************
 * A: Get all questions from this particular friend
 * ==================================
 ***********************************************/
app.get("/api/user_friend_all_questions", function (incoming, outgoing, next) {
    knex("user_friend_all_questions")
        .select("id", "user_id", "user_friend_id", "question_id", "answered")
        .then((eachFriend) => {
            outgoing.status(200).json(eachFriend);
        })
        .catch(next);
});
/**********************************************
 * B: Get all questions that has this user and this friend
 * ==================================
 ***********************************************/
app.get("/api/user_friend_all_questions/:user_id/:friend_id", function (
    incoming,
    outgoing,
    next
) {
    knex("user_friend_all_questions")
        .select("id", "user_id", "user_friend_id", "question_id", "answered")
        .where("user_id", incoming.params.user_id)
        .where("user_friend_id", incoming.params.friend_id)
        .then((eachFriend) => {
            outgoing.status(200).json(eachFriend);
        })
        .catch(next);
});
/**********************************************
 * C: Friend Answers Question
 * ==================================
 {
	"id": 4, 
    "user_id": 2,
    "user_friend_id": 3, 
    "question_id": 2, 
    "answered": true
}
 ***********************************************/
app.post("/api/user_friend_all_questions/add", function (
    incoming,
    outgoing,
    next
) {
    console.log(incoming.body);
    knex("user_friend_all_questions")
        .insert(incoming.body)
        .then((eachRow) => {
            outgoing.status(200).json(eachRow);
        })
        .catch(next);
});
/**********************************************
 * D: Get all questions from this particular category
 * ==================================
 ***********************************************/
app.get("/api/category/:categoryId", function (incoming, outgoing, next) {
    let id = incoming.params.categoryId;
    console.log("Id: ", id);
    knex.from("question")
        .select(question_col1, question_col2, question_col3, question_col4)
        .where("category_id", id)
        .then((eachQuestion) => {
            outgoing.status(200).send(eachQuestion);
        })
        .catch(next);
});

/**********************************************
 * E: Get one question
 * ==================================
 ***********************************************/
app.get("/api/question/:questionId", function (incoming, outgoing, next) {
    // grab all the questions where caegory id equals category
    let id = incoming.params.questionId;
    knex.from("question")
        .select(question_col1, question_col2, question_col3, question_col4)
        .where("id", id)
        .then((eachQuestion) => {
            console.log(eachQuestion);
            outgoing.status(200).json(eachQuestion);
        })
        .catch(next);
});

/**********************************************
 * F: Get all questions
 * ==================================
 ***********************************************/
app.get("/api/question", function (incoming, outgoing, next) {
    knex("question")
        .select(question_col1, question_col2, question_col3, question_col4)
        .then((eachQuestion) => {
            outgoing.status(200).json(eachQuestion);
        })
        .catch(next);
});
/**********************************************
 * G: Favorite a question
 * ==================================
 ***********************************************/
app.post("/api/favoritequestion", function (incoming, outgoing, next) {
    console.log(incoming);
    knex("user_fav_question")
        .count("id")
        .first()
        .then(function (total) {
            let id = Number(total.count) + 1;
            console.log(id);
            console.log(incoming.body);
            let newFavQuestionObject = {
                id: id,
                user_id: incoming.body.user_id,
                question_id: incoming.body.question_id,
            };
            knex("user_fav_question")
                .insert(newFavQuestionObject)
                .then((eachRow) => {
                    console.log(eachRow);
                });
        });
});
/**********************************************
 * Get all favorite questions
 * ==================================
 ***********************************************/
app.get("/api/user_fav_question", function (incoming, outgoing, next) {
    knex("user_fav_question")
        .select("id", "user_id", "question_id")
        .then((eachQuestion) => {
            outgoing.status(200).json(eachQuestion);
        })
        .catch(next);
});

/**********************************************
 * 2: Question Ends Here
 * ==================================
 ***********************************************/

/**********************************************
 * ALL JSON DATA API ROUTES HERE END HERE
 * ==================================
 ***********************************************/

/**********************************************
 *
 * ==================================
 ***********************************************/

/**********************************************
 * ALL PAGE ROUTES BEGIN HERE
 * ==================================
 ***********************************************/
/**********************************************
 * TABLE OF CONTENTS
 * ==================================
 * 0. Signup
 *  A: Sign up get
 *  B: Sign up post
 * 1. Login
 *  A: Login get
 *  B: Login post
 * 2. Home (Logged In)
 *  A: Home get (get all friends)
 * 3. Categories
 *  A: Categories get
 * 4. Questions
 *  A:
 * 5.
 * 6.
 ***********************************************/

/**********************************************
 * Sign Up Get and Post (user_table)
 * ==================================
 ***********************************************/

app.get("/signup", function (incoming, outgoing, next) {
    outgoing.render("account/signup");
});
app.post("/signup", function (incoming, outgoing, next) {
    console.log(incoming.body);
    let totalNumber;
    knex("user_table")
        .count("id")
        .first()
        .then(function (total) {
            totalNumber = total.count;
            let user_id = Number(totalNumber) + 1;
            let newBody = {
                id: user_id,
                email: incoming.body.email,
                password: incoming.body.password,
                spotify_id: "",
                spotify_access_token: "",
            };
            console.log(newBody);
            knex("user_table")
                .insert(newBody)
                .then((eachRow) => {
                    console.log("Added user: ", eachRow);
                    outgoing.redirect("/");
                })
                .catch(next);
        })
        .catch(next);
});
/**********************************************
 * 1: Login Get And Post
 * ==================================
 ***********************************************/
app.get("/login", (incoming, outgoing, next) => {
    console.log("Login button pressed");
    console.log("Login post method: ", incoming.body);
    outgoing.render("account/login");
});
app.post("/login", (incoming, outgoing, next) => {
    console.log("Login route post: ", incoming.body);
    // Get one user method
    let getUserByEmailQuery = knex
        .from("user_table")
        .select("id", "email", "password", "spotify_id", "spotify_access_token")
        .where("email", incoming.body.email);
    getUserByEmailQuery
        .then((eachRow) => {
            console.log(eachRow[0]);
            let id = eachRow[0].id;
            let email = eachRow[0].email;
            let password = eachRow[0].password;
            if (
                email == incoming.body.email &&
                password == incoming.body.password
            ) {
                console.log(id);
                outgoing.status(200);
                outgoing.redirect(`/home/${id}`);
            } else {
                outgoing.redirect("error", {
                    message: "it's not the correct username or password",
                });
            }
        })
        .catch(next);
});

/**********************************************
 * Get and Post Home Page ("/home/user_id")
 * ==================================
 ***********************************************/
/**********************************************
 * Get: After login, users will be able to see their home page, which is a list of all their friends
 * ==================================
 ***********************************************/
app.get("/home/:user_id", (incoming, outgoing, next) => {
    let id = incoming.params.user_id;

    knex.from(user_friend)
        .select(
            user_friend_col1,
            user_friend_col2,
            user_friend_col3,
            user_friend_col4,
            user_friend_col5,
            user_friend_col6
        )
        .where("user_id", id)
        .then((eachFriend) => {
            let friend_id = user_friend_col1;

            // #TODO: Trying to render the number of questions answered between two users
            // let answered_questions;
            // knex("user_friend_all_questions")
            //     .select("id")
            //     .where({ user_id: id, user_friend_id: friend_id })
            //     .then((allAnsweredQuestions) => {
            //         answered_questions = allAnsweredQuestions;
            //     });
            // console.log("friend_id: ", friend_id);
            // console.log("Each friend: ", eachFriend);
            // for (let i = 0; i < eachFriend.length; i++) {
            //     eachFriend[i].answeredQuestions = allAnsweredQuestions;
            // }

            outgoing.render("home", {
                user_id: incoming.params.user_id,
                user_friend: eachFriend,
            });
        })
        .catch(next);
});

const emoji = {
    athletic: "https://www.dropbox.com/s/fm8vurruc9h5gtz/homie.png?raw=1",
    chillFriend:
        "https://www.dropbox.com/s/v0pxvw5bp4ffdan/newFriend.png?raw=1",
    homie: "https://www.dropbox.com/s/fm8vurruc9h5gtz/homie.png?raw=1",
    dear: "https://www.dropbox.com/s/st884b1gigvc350/dear.png?raw=1",
    family: "https://www.dropbox.com/s/o8phvvtmad1cl3p/family.png?raw=1",
    colleague: "https://www.dropbox.com/s/iydzojfzl38grdg/colleague.png?raw=1",
    bestFriend:
        "https://www.dropbox.com/s/w6e6epwzlcr7pe4/bestfriend.png?raw=1",
    dear: "https://www.dropbox.com/s/st884b1gigvc350/dear.png?raw=1",
    significantOther:
        "https://www.dropbox.com/s/9dela5ueptao89q/significantother.png?raw=1",
};

/**********************************************
 * Get add friend form page
 * ==================================
 ***********************************************/
/**********************************************
 * Add Friend
 * ==================================
 * app.post("/:user_id/addfriendform", function (incoming, outgoing, next) {
    console.log("Add friend method works");
    let user_id = incoming.params.user_id;

    let body = incoming.body;
    console.log("body: ", body);
    let newFriend = {
        id: 10,
        user_id: user_id,
        name: incoming.body.name,
        emoji: incoming.body.emoji,
        wishful_city: incoming.body.wishful_city,
        favorite_memory: incoming.body.favorite_memory,
    };
    console.log("Body: ", newFriend);
    knex("user_friend")
        .insert(newFriend)
        .then((eachFriend) => {
            console.log("Adding new friend: ", eachFriend);
            outgoing.redirect("/home/" + user_id);
        })
        .catch(next);
});
 ***********************************************/
app.get("/addfriend/:user_id", function (incoming, outgoing, next) {
    let user_id = incoming.params.user_id;
    outgoing.render("addFriend", { user_id: user_id });
});
app.post("/addfriend/:user_id", function (incoming, outgoing, next) {
    let user_id = incoming.params.user_id;
    // HANDLE THE EMOJI HERE
    // TODO: HANDLE EMOJI HERE (if they submit a specific word, you can associate it with an url here)
    knex("user_friend")
        .count("id")
        .first()
        .then(function (total) {
            let newId = Number(total.count) + 1;
            let newFriend = {
                id: newId,
                user_id: user_id,
                name: incoming.body.name,
                emoji: incoming.body.emoji,
                wishful_city: incoming.body.wishful_city,
                favorite_memory: incoming.body.favorite_memory,
            };
            console.log("New Friend: ", newFriend);
            knex("user_friend")
                .insert(newFriend)
                .then((eachRow) => {
                    console.log("Added friend: ", eachRow);
                    outgoing.redirect(`/home/${user_id}`);
                });
        })
        .catch(next);
});
/**********************************************
 * Get Form Page Route
 * ==================================
 ***********************************************/

/**********************************************
 * Post Form Page Route
 * ==================================
 ***********************************************/

/**********************************************
 * Post: On Home Page, users can click on "play button", which will lead them to the "categories/user_id/friend_id" page
 * ==================================
 ***********************************************/

/**********************************************
 * Get and Post Categories Page ("/categories/user_id/friend_id")
 * ==================================
 ***********************************************/

/**********************************************
 * Getting categories page
 * ==================================
 ***********************************************/
/**********************************************
 * Getting the categories page, which then will pass in the user_id and friend_id information - then it will lead to
 * 1: "/play/work/user_id/friend_id"
 * 2: "/play/love/user_id/friend_id"
 * 3: "/play/friends/user_id/friend_id"
 * 4: "/play/family/user_id/friend_id"
 * ==================================
 ***********************************************/
app.get("/categories/:user_id/:friend_id", (incoming, outgoing, next) => {
    let user_id = incoming.params.user_id;
    let friend_id = incoming.params.friend_id;
    console.log("User Id: ", user_id);
    console.log("Friend id: ", friend_id);

    let friend_name = knex("user_friend")
        .select("name")
        .where({ id: friend_id })
        .then((eachRow) => {
            console.log(eachRow);
            outgoing.render("question/categories", {
                friend_name: eachRow[0].name,
                user_id: user_id,
                friend_id: friend_id,
            });
        });
});
app.get("/categories", (incoming, outgoing, next) => {
    outgoing.render("categories", {
        information: { user_id: 1, friend_id: 1 },
    });
});

/**********************************************
 * Getting all questions via
 * 1: "/play/work/user_id/friend_id"
 * 2: "/play/love/user_id/friend_id"
 * 3: "/play/friends/user_id/friend_id"
 * 4: "/play/family/user_id/friend_id"
 * 5: "/favorites/user_id/friend_id"
 * ==================================
 ***********************************************/

app.get("/favorites/:user_id/:friend_id", function (incoming, outgoing, next) {
    let user_id = Number(incoming.params.user_id);
    let friend_id = Number(incoming.params.friend_id);
    console.log(user_id);
    knex.select("question.id", "question_string")
        .from("question")
        .join("user_fav_question", function () {
            this.on("question.id", "=", "user_fav_question.question_id").onIn(
                "user_fav_question.user_id",
                user_id
            );
        })
        .then((eachRow) => {
            let newObject = eachRow;
            for (let i = 0; i < newObject.length; i++) {
                newObject[i].user_id = user_id;
                newObject[i].friend_id = friend_id;
            }
            console.log(newObject);
            outgoing.render("question/question", {
                user_id: user_id,
                friend_id: friend_id,
                question: newObject,
            });
        })
        .catch(next);

    // QUERY TO SELECT ALL FAVORITE QUESTIONS
    // render questions
});

/**********************************************
 * Get all questions from this category
 * ==================================
 * user_fav_question table
 *  id
 *  user_id
 *  question_id
 ***********************************************/
app.get("/play/:categoryString/:user_id/:friend_id", function (
    incoming,
    outgoing,
    next
) {
    let categoryString = incoming.params.categoryString;
    let user_id = incoming.params.user_id;
    let friend_id = incoming.params.friend_id;
    let firstLetter = categoryString[0].toUpperCase();
    let sliced = categoryString.slice(1);
    categoryString = firstLetter.concat(sliced);
    console.log("Category String: ", categoryString);
    let categoryQuery = knex
        .from("category")
        .select("id")
        .where("name", categoryString);
    knex.from("question")
        .select(question_col1, question_col2, question_col3, question_col4)
        .where("category_id", categoryQuery)

        .then((eachQuestion) => {
            let newObject = eachQuestion;
            for (let i = 0; i < newObject.length; i++) {
                newObject[i].user_id = user_id;
                newObject[i].friend_id = friend_id;
            }
            outgoing.status(200).render("question/question", {
                question: newObject,
                categoryString: categoryString,
                user_id: user_id,
                friend_id: friend_id,
            });
        })
        .catch(next);
});

/**********************************************
 * Add this question to answered
 * ==================================
 ***********************************************/
app.post("/api/markasdone", function (incoming, outgoing, next) {
    // get data
    let body = incoming.body;
    console.log("Data: ", incoming.data);

    console.log("Body of ", body);
    knex("user_friend_all_questions")
        .count("id")
        .first()
        .then(function (total) {
            let numRows = Number(total.count) + 1;
            let newObject = {
                id: numRows,
                user_id: incoming.body.user_id,
                user_friend_id: incoming.body.friend_id,
                question_id: incoming.body.question_id,
                answered: true,
            };
            knex("user_friend_all_questions")
                .insert(newObject)
                .then((eachRow) => {
                    console.log("Added: ", eachRow);
                });
        });
    outgoing.send("good");
});

/**********************************************
 * Getting profile page
 * ==================================
 ***********************************************/
app.get("/profile", function (incoming, outgoing, next) {
    outgoing.render("userprofile", { user_id: 1 });
});
/**********************************************
 * Getting about page
 * ==================================
 ***********************************************/
app.get("/about", function (incoming, outgoing, next) {
    outgoing.render("about", { user_id: 1 });
});

app.get("/error", function (incoming, outgoing, next) {
    outgoing.render("error");
});

/**********************************************
 * Checking for authentication
 * ==================================
 ***********************************************/
app.get("/", function (incoming, outgoing, next) {
    if (incoming.auth) {
        let checkUser = incoming.auth.user;
        console.log("User to authorize: ", checkUser);
        outgoing.render("home", { index: checkUser, user_id: user_id });
    } else {
        outgoing.render("index");
    }
});
app.get("/", function (incoming, outgoing, next) {
    outgoing.render("index", { user_id: 1 });
});

/**********************************************
 * Start server
 ***********************************************/
// app.use("/", userRouter);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(require("./config/helpers/error_middleware").all);

app.listen(3001, () => {
    console.log("Application listening to port 3001!!");
});

/**********************************************
 *  Data File Structure
 * ==================================
 ***********************************************/
/**********************************************
 * user_table
 * ==================================
 ***********************************************/
/**********************************************
 * user_friend
 * ==================================
 ***********************************************/
/**********************************************
 * user_friend
 * ==================================
 ***********************************************/
/**********************************************
 * user_friend
 * ==================================
 ***********************************************/
/**********************************************
 * user_friend
 * ==================================
 ***********************************************/
/**********************************************
 * user_friend
 * ==================================
 ***********************************************/
