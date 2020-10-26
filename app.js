const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const basicAuth = require("express-basic-auth")
const ReadAndWriteJSON = require("./model/ReadAndWriteJSON")
const usernamePasswordCheck = require("./model/usernamePasswordCheck")
const FRIENDS_DATA_ROUTE = "./model/friends.json"
const USERS_DATA_ROUTE = "./model/users.json"
const QUESTIONS_DATA_ROUTE = "./model/questions.json"
const ORDERS_DATA_ROUTE = "./model/orders.json"
require('dotenv').config()
app.engine("handlebars", handlebars({
    defaultLayout: "main"
}))
app.set("view engine", "handlebars")
app.use(express.static("views"))


app.use(bodyParser.urlencoded({
    extended: false
}))


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
const MainRouter = require("./controller/routes/MainRouter")
const FriendControllerJSON = require("./controller/services/JSON/FriendControllerJSON")
const UserControllerJSON = require("./controller/services/JSON/UserControllerJSON")

// 2. Declare database 
const readAndWriteFriends = new ReadAndWriteJSON(FRIENDS_DATA_ROUTE);
const readAndWriteUsers = new ReadAndWriteJSON(USERS_DATA_ROUTE)
const parsedOrderData = new ReadAndWriteJSON(ORDERS_DATA_ROUTE)

// 3. Pass database into router 
const friendControllerJSON = new FriendControllerJSON(readAndWriteFriends).router()
const userControllerJSON = new UserControllerJSON(readAndWriteUsers).router()
const newMainRouter = new MainRouter().router()

// 4. Explicitly connect the route to the router 
app.use("/", newMainRouter)
app.use("/api/friends", friendControllerJSON)
app.use("/api/users", userControllerJSON)


/**********************************************
 * Start server
 ***********************************************/
app.listen(3000, () => {
    console.log("Application listening to port 3000!!");
});