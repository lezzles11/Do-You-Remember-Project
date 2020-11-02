const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const basicAuth = require("express-basic-auth");
const knex = require("knex")({
    client: "postgresql",
    connection: {
        user: "postgres",
        password: "orange",
        database: "doyouremember",
    },
});

require("dotenv").config();

app.engine(
    "handlebars",
    handlebars({
        defaultLayout: "main",
    })
);
app.set("view engine", "handlebars");
app.use(express.static("public"));

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
 * Get all questions
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
 * 2: Question Ends Here
 * ==================================
 ***********************************************/
/**********************************************
 *
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
                    outgoing.redirect("/", { user_id: user_id });
                })
                .catch(next);
        })
        .catch(next);
    /**********************************************
     * The submit method works, but only if I pass in an id
     * ==================================
     * How do I just get it to increment by one?
     ***********************************************/
});

app.get("/signup", function (incoming, outgoing, next) {
    outgoing.render("signup");
});
/**********************************************
 * 0:
 * ==================================
 ***********************************************/
/**********************************************
 * After login, users will be able to see their home page, which is a list of all their friends
 * ==================================
 ***********************************************/

/**********************************************
 * See Friend's Page
 * ==================================
 * # TODO: Link the game
 ***********************************************/
app.get("/api/friend/:friend_id", function (incoming, outgoing, next) {
    let friend_id = incoming.params.friend_id;
    knex.from(user_friend)
        .select(
            user_friend_col1,
            user_friend_col2,
            user_friend_col3,
            user_friend_col4,
            user_friend_col5,
            user_friend_col6
        )
        .where("id", friend_id)
        .then((eachFriend) => {
            console.log("Each friend: ", eachFriend);
            outgoing.render("getFriend", { friend: eachFriend[0] });
        })
        .catch(next);
});

/**********************************************
 * Get all friends for this particular user
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
            console.log("friend_id: ", friend_id);
            console.log("Each friend: ", eachFriend);
            outgoing.render("home", {
                user_id: incoming.params.user_id,
                user_friend: eachFriend,
            });
        })
        .catch(next);
});
/**********************************************
 * Login page
 * ==================================
 ***********************************************/
app.get("/login", (incoming, outgoing, next) => {
    console.log("Login button pressed");
    console.log("Login post method: ", incoming.body);
    outgoing.render("login");
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
 * Add this question to answered
 * ==================================
 ***********************************************/
app.post("/play/:categoryString/:user_id/:friend_id", function (
    incoming,
    outgoing,
    next
) {
    // get data
    let user_id = incoming.params.user_id;
    let questionId = incoming.params.questionId;
    console.log("User Id: ", user_id);
    console.log("Question Id: ", questionId);
    let newFavQuestion = {
        id: 6,
        user_id: user_id,
        question_id: questionId,
    };
    knex("user_fav_question")
        .insert(newFavQuestion)
        .then(console.log("inserted"));
});
/**********************************************
 * Get all questions from this category
 * ==================================
 * Current Category and Id's:
 * Friends: 1
 * Work: 2
 * Family: 3
 * Love: 4
 * All: 5
 * Favorites: 6
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
            }
            outgoing.status(200).render("question", {
                question: newObject,
                categoryString: categoryString,
                user_id: user_id,
                friend_id: friend_id,
            });
        })
        .catch(next);
});

/**********************************************
 * Getting categories page
 * ==================================
 ***********************************************/

app.get("/categories/:user_id/:friend_id", (incoming, outgoing, next) => {
    let user_id = incoming.params.user_id;
    let friend_id = incoming.params.friend_id;
    console.log("User Id: ", user_id);
    console.log("Friend id: ", friend_id);
    outgoing.render("categories", {
        information: {
            user_id: user_id,
            friend_id: friend_id,
        },
    });
});
app.get("/categories", (incoming, outgoing, next) => {
    outgoing.render("categories", { user_id: 1 });
});

/**********************************************
 * Getting profile page
 * ==================================
 ***********************************************/
app.get("/profile", function (incoming, outgoing, next) {
    outgoing.render("userprofile", { user_id: 1 });
});
/**********************************************
 * Getting question page
 * ==================================
 ***********************************************/
app.get("/question", function (incoming, outgoing, next) {
    outgoing.render("question", {
        user_id: 1,
        question: [
            {
                id: 1,
                category_id: 4,
                question_string:
                    "What do you want more of in this relationship?",
                photo_url:
                    "https://www.cerclemagazine.com/wp-content/uploads/2017/10/316_N-Atlantic-Ocean-Cliffs-of-Moher-1989.jpg",
            },
            {
                id: 2,
                category_id: 4,
                question_string:
                    "What do you less pressure of in this relationship?",
                photo_url:
                    "https://www.cerclemagazine.com/wp-content/uploads/2017/10/316_N-Atlantic-Ocean-Cliffs-of-Moher-1989.jpg",
            },
        ],
    });
});
/**********************************************
 * Getting about page
 * ==================================
 ***********************************************/
app.get("/about", function (incoming, outgoing, next) {
    outgoing.render("about", { user_id: 1 });
});

/**********************************************
 * Getting home page
 * ==================================
 * 1. Check for authorization
 * 2. If authorized, then get the
 ***********************************************/

app.get("/api/profile/:user_id", function (incoming, outgoing, next) {
    console.log(incoming.params.user_id);
    let getUserByIdQuery = knex
        .from("user_table")
        .select("id", "email", "password", "spotify_id", "spotify_access_token")
        .where("id", incoming.params.user_id);
    getUserByIdQuery
        .then((user) => {
            console.log(user);
            outgoing.render("userProfile", {
                user: user[0],
                user_id: incoming.params.user_id,
            });
        })
        .catch(next);
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
        outgoing.render("index", { user_id: 1 });
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
