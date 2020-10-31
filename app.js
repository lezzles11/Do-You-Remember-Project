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
app.use(express.static("views"));

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

// #TODO: once you add a friend, the computer will loop through the list of questions, then add all the questions into the table user_friend_all_questions

/**********************************************
 * Get all questions that has this user and this friend
 * ==================================
 ***********************************************/
app.get("/api/user_friend_all_questions/:userId/:friendId", function (
    incoming,
    outgoing,
    next
) {
    knex("user_friend_all_questions")
        .select("id", "user_id", "user_friend_id", "question_id", "answered")
        .where("user_id", incoming.params.userId)
        .where("user_friend_id", incoming.params.friendId)
        .then((eachFriend) => {
            outgoing.status(200).json(eachFriend);
        })
        .catch(next);
});

/**********************************************
 * Get all questions from this particular friend
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
 * Friend Answers Question
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
 * Get all questions from this particular category
 * ==================================
 ***********************************************/
app.get("/api/category/:categoryId", function (incoming, outgoing, next) {
    let id = incoming.params.categoryId;
    console.log("Id: ", id);
    knex.from("question")
        .select(question_col1, question_col2, question_col3, question_col4)
        .where("category_id", id)
        .then((eachQuestion) => {
            outgoing.stauts(200).send(eachQuestion);
        })
        .catch(next);
});

/**********************************************
 * Get one question
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
 * Delete Friend
 * ==================================
 ***********************************************/
app.delete("/api/friend/:friendId", function (incoming, outgoing, next) {
    console.log("Id: ", incoming.params.friendId);
    knex("user_friend")
        .where({ id: incoming.params.friendId })
        .del()
        .then((eachFriend) => {
            outgoing.status(200).json(eachFriend);
        })
        .catch(next);
});

/**********************************************
 * Edit Friend
 * ==================================
 ***********************************************/
app.put("/api/friend/:friendId", function (incoming, outgoing, next) {
    console.log("Edit friend");
    let id = incoming.params.friendId;
    knex("user_friend")
        .where({ id: incoming.params.friendId })
        .update(incoming.body)
        .then((eachFriend) => {
            console.log(eachFriend);
            outgoing.status(200).json(eachFriend);
        })
        .catch(next);
});

/**********************************************
 * Add One friend
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
app.post("/api/addfriend", function (incoming, outgoing, next) {
    let body = incoming.body;
    console.log("Body: ", incoming.body);
    knex("user_friend")
        .insert(incoming.body)
        .then((eachFriend) => {
            outgoing.status(200).json(eachFriend);
        })
        .catch(next);
});

/**********************************************
 * Get one friend
 * ==================================
 ***********************************************/
app.get("/api/friend/:friendId", function (incoming, outgoing, next) {
    let id = incoming.params.friendId;
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
            outgoing.send(eachFriend);
        })
        .catch(next);
});
app.get("/api/friend/friendPage/:friendId", function (
    incoming,
    outgoing,
    next
) {
    let id = incoming.params.friendId;
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
                id: 1,
                user_id: 2,
                name: "lesley",
                emoji: "grandma",
                wishful_city: "copenhagen",
                favorite_memory: "whatsup",
            });
        })
        .catch(next);
});

/**********************************************
 * Get all friends for this particular user
 * ==================================
 ***********************************************/
app.get("/api/user/allfriends/:userId", function (incoming, outgoing, next) {
    let id = incoming.params.userId;
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
            console.log("Each friend: ", eachFriend);
            outgoing.render("home", [
                {
                    id: 1,
                    user_id: 2,
                    name: "name1",
                    emoji: ":grandpa:",
                    wishful_city: "barcelona",
                    favorite_memory: "favorite memory",
                },
                {
                    id: 2,
                    user_id: 2,
                    name: "name1",
                    emoji: ":grandpa:",
                    wishful_city: "barcelona",
                    favorite_memory: "favorite memory",
                },
            ]);
        })
        .catch(next);
});

/**********************************************
 * Get all friends
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
 * Delete User Works
 * ==================================
 ***********************************************/

app.delete("/api/user/:userId", function (incoming, outgoing, next) {
    console.log(incoming.params.userId);
    console.log("Delete User Method");
    knex("user_table")
        .where({
            id: incoming.params.userId,
        })
        .del()
        .then((eachUser) => {
            outgoing.status(200).json(eachUser);
        })
        .catch(next);
});

/**********************************************
 * Edit User Method Works
 * ==================================
 ***********************************************/
app.put("/api/user/:userId", function (incoming, outgoing, next) {
    console.log(incoming.params.userId);
    knex("user_table")
        .where({
            id: incoming.params.userId,
        })
        .update(incoming.body)
        .then((eachRow) => {
            outgoing.status(200).json(eachRow);
        })
        .catch(next);
});
/**********************************************
 * Add Method Works
 * ==================================
 ***********************************************/
app.post("/api/adduser", function (incoming, outgoing, next) {
    console.log(incoming.body);
    knex("user_table")
        .insert(incoming.body)
        .then((eachRow) => {
            outgoing.status(200).json(eachRow);
        })
        .catch(next);
});
/**********************************************
 * Get One User Method
 * ==================================
 ***********************************************/
app.get("/api/user/:userId", function (incoming, outgoing, next) {
    console.log(incoming.params.userId);
    let getUserByIdQuery = knex
        .from("user_table")
        .select("id", "email", "password", "spotify_id", "spotify_access_token")
        .where("id", incoming.params.userId);
    getUserByIdQuery
        .then((eachRow) => {
            console.log(eachRow);
            outgoing.status(200).json(eachRow);
        })
        .catch(next);
});

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
            let email = eachRow[0].email;
            let password = eachRow[0].password;
            if (
                email == incoming.body.email &&
                password == incoming.body.password
            ) {
                outgoing.status(200).send("login successful");
            } else {
                outgoing.send("not correct user or password");
            }
        })
        .catch(next);
});

/**********************************************
 * Getting categories page
 * ==================================
 ***********************************************/
app.get("/categories", (incoming, outgoing, next) => {
    outgoing.render("categories");
});

/**********************************************
 * Getting profile page
 * ==================================
 ***********************************************/
app.get("/profile", function (incoming, outgoing, next) {
    outgoing.render("userprofile");
});
/**********************************************
 * Getting question page
 * ==================================
 ***********************************************/
app.get("/question", function (incoming, outgoing, next) {
    outgoing.render("question");
});

/**********************************************
 * Getting about page
 * ==================================
 ***********************************************/
app.get("/about", function (incoming, outgoing, next) {
    outgoing.render("about");
});

/**********************************************
 * Getting home page
 * ==================================
 * 1. Check for authorization
 * 2. If authorized, then get the
 ***********************************************/

app.get("/api/profile/:userId", function (incoming, outgoing, next) {
    console.log(incoming.params.userId);
    let getUserByIdQuery = knex
        .from("user_table")
        .select("id", "email", "password", "spotify_id", "spotify_access_token")
        .where("id", incoming.params.userId);
    getUserByIdQuery
        .then((user) => {
            console.log(user);
            outgoing.render("userProfile", {
                user: user[0],
            });
        })
        .catch(next);
});

/**********************************************
 * Checking for authentication
 * ==================================
 ***********************************************/
app.get("/", function (incoming, outgoing, next) {
    if (incoming.auth) {
        let checkUser = incoming.auth.user;
        console.log("User to authorize: ", checkUser);
        outgoing.render("home", { index: checkUser });
    } else {
        outgoing.render("index");
    }
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
