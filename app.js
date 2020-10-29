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
const USER_ROUTER = require("./controller/routes/UserTableRouter.js");
// 2. Declare database
const USER_SERVICE = require("./controller/services/UserTableKnexService.js");

// // 3. Pass database into router
// // const userService = new USER_SERVICE(knex);
// const userRouter = new USER_ROUTER(userService).router();

const newMainRouter = new MainRouter().router();
function makeUser(eachUserRow) {
    return eachUserRow.map((eachRow) => ({
        id: eachRow.id,
        email: eachRow.email,
        password: eachRow.password,
        spotify_id: eachRow.spotify_id,
        spotify_access_token: eachRow.spotify_access_token,
    }));
}
// 4. Explicitly connect the route to the router
app.use("/", newMainRouter);
app.put("/api/user", function (incoming, outgoing) {
    outgoing.send("Edit function got!");
});
app.post("/profile", function (req, res, next) {
    console.log(req.body);
    res.json(req.body);
});

app.post("/api/user", function (incoming, outgoing, next) {
    console.log(incoming.body);
    knex("user_table")
        .insert(incoming.body)
        .then((eachRow) => {
            outgoing.json(eachRow);
        });
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
    getUserByIdQuery.then((eachRow) => {
        console.log(eachRow);
        outgoing.json(eachRow);
    });
});

/**********************************************
 * Get All Users Method
 * ==================================
 ***********************************************/
app.use("/api/users", function (incoming, outgoing) {
    let getAllUsersQuery = knex
        .from("user_table")
        .select(
            "id",
            "email",
            "password",
            "spotify_id",
            "spotify_access_token"
        );
    getAllUsersQuery.then((eachUserRow) => {
        console.log("Each user: ", eachUserRow);
        outgoing.send(eachUserRow);
    });
});

/**********************************************
 * Start server
 ***********************************************/
// app.use("/", userRouter);
app.use(require("./config/helpers/error_middleware").all);

app.listen(3000, () => {
    console.log("Application listening to port 3000!!");
});
