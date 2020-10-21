const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const basicAuth = require("express-basic-auth")
const FRIENDS_DATA_ROUTE = "./model/friends.json"
const USERS_DATA_ROUTE = "./model/users.json"
const QUESTIONS_DATA_ROUTE = "./model/questions.json"
const ORDERS_DATA_ROUTE = "./model/orders.json"

const usernamePasswordCheck = require("./model/usernamePasswordCheck")
const ReadAndWriteJSON = require("./model/ReadAndWriteJSON")
const parsedOrderData = new ReadAndWriteJSON(ORDERS_DATA_ROUTE)
const MainRouter = require("./controller/routes/MainRouter")
/**********************************************
 * Controllers are used to define how the user interacts with your routes
 ***********************************************/
const FriendController = require("./controller/apis/FriendController")
const newMainRouter = new MainRouter().router()

const readAndWriteFriends = new ReadAndWriteJSON(FRIENDS_DATA_ROUTE);

const friendController = new FriendController(readAndWriteFriends)

app.engine("handlebars", handlebars({
    defaultLayout: "main"
}))
app.set("view engine", "handlebars")
app.use(express.static("views"))


app.use(bodyParser.urlencoded({
    extended: false
}))


app.use(
    basicAuth({
        authorizer: usernamePasswordCheck,
        challenge: true,
        authorizeAsync: true,
        realm: "My Application",
    })
);

/**********************************************
 *  Connecting the route to the router class 
 * ==================================
 ***********************************************/
app.use("/", newMainRouter)

app.use("/api/friends", friendController.router())

app.listen(3000, () => {
    console.log("Application listening to port 3000!!");
});