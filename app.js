const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const basicAuth = require("express-basic-auth")
const FRIENDS_DATA_ROUTE = "./model/friends.json"
const USERS_DATA_ROUTE = "./model/users.json"
const QUESTIONS_DATA_ROUTE = "./model/questions.json"
const ORDERS_DATA_ROUTE = "./model/orders.json"

app.engine("handlebars", handlebars({
    defaultLayout: "main"
}))
app.set("view engine", "handlebars")
app.use(express.static("views"))


app.use(bodyParser.urlencoded({
    extended: false
}))

const usernamePasswordCheck = require("./model/usernamePasswordCheck")

app.use(
    basicAuth({
        authorizer: usernamePasswordCheck,
        challenge: true,
        authorizeAsync: true,
        realm: "My Application",
    })
);


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
const FriendController = require("./controller/apis/FriendController")
const UserController = require("./controller/apis/UserController")

// 2. Declare database 
const readAndWriteFriends = new ReadAndWriteJSON(FRIENDS_DATA_ROUTE);
const readAndWriteUsers = new ReadAndWriteJSON(USERS_DATA_ROUTE)
const ReadAndWriteJSON = require("./model/ReadAndWriteJSON")
const parsedOrderData = new ReadAndWriteJSON(ORDERS_DATA_ROUTE)

// 3. Pass database into router 
const friendController = new FriendController(readAndWriteFriends).router()
const userController = new UserController(readAndWriteUsers).router()
const newMainRouter = new MainRouter().router()

// 4. Explicitly connect the route to the router 
app.use("/", newMainRouter)
app.use("/api/friends", friendController)
app.use("/api/users", userController)


/**********************************************
 * Start server
 ***********************************************/
app.listen(3000, () => {
    console.log("Application listening to port 3000!!");
});