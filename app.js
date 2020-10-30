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
// 1: Declare routers
const MainRouter = require("./controller/routes/MainRouter");
let user_friend = "user_friend";
let user_friend_col1 = "id";
let user_friend_col2 = "user_id";
let user_friend_col3 = "name";
let user_friend_col4 = "emoji";
let user_friend_col5 = "wishful_city";
let user_friend_col6 = "favorite_memory";

// // 3. Pass database into router
// // const userService = new USER_SERVICE(knex);
// const userRouter = new USER_ROUTER(userService).router();

const newMainRouter = new MainRouter().router();
// 4. Explicitly connect the route to the router
app.use("/", newMainRouter);

/**********************************************
 * Get
 * ==================================
 ***********************************************/
/**********************************************
 * Get questions from this category
 * ==================================
 ***********************************************/

/**********************************************
 * Make Question Answered for Friend
 * ==================================
 ***********************************************/

/**********************************************
 * Get all questions from this particular friend
 * ==================================
 ***********************************************/

/**********************************************
 * Delete Friend
 * ==================================
 ***********************************************/

 

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
            outgoing.json(eachFriend);
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
            outgoing.json(eachFriend);
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
            outgoing.json(eachUser);
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
            outgoing.json(eachRow);
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
            outgoing.json(eachRow);
        })
        .catch(next);
});
/**********************************************
 * Get One Method
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
            outgoing.json(eachRow);
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
            outgoing.send(eachUserRow);
        })
        .catch(next);
});

/**********************************************
 * Start server
 ***********************************************/
// app.use("/", userRouter);
app.use(require("./config/helpers/error_middleware").all);

app.listen(3000, () => {
    console.log("Application listening to port 3000!!");
});
