/**********************************************
 * Routes and Controllers 
 * ==================================
 * Routes handle the HTTP request that hits the API and routes them to the appropriate controller 
 * 
 * The purpose of this class is to be able to add, edit, delete and get the user from the database 
 * 
 * 1. Connect the routes 
 * 2. Grab input from frontend
 * 3. Add / edit / delete data from backend accordingly 
 ***********************************************/
const express = require("express")

const ReadAndWriteJSON = require("../../model/ReadAndWriteJSON.js")

const directoryPath = require("path")

const friendsData = new ReadAndWriteJSON(
    directoryPath.join(__dirname, "../../model/friends.json")
);

class MainRouter {
    router() {
        const router = express.Router()
        /**********************************************
         * Home page - checks user 
         ***********************************************/
        router.get("/", (incoming, outgoing) => {
            console.log("GETTING INDEX PAGE")
            if (incoming.auth) {
                let checkUser = incoming.auth.user
                console.log("User to authorize: ", checkUser)
                outgoing.render("index", {
                    user: checkUser
                })
            } else {
                outgoing.render("index")
            }
        })

        /**********************************************
         * About Page
         * ==================================
         ***********************************************/
        router.get("/about", (incoming, outgoing) => {
            outgoing.render("about")
        })

        /**********************************************
         * Question Page
         ***********************************************/
        router.get("/question", (incoming, outgoing) => {
            outgoing.render("question")
        })
        /**********************************************
         * Profile Page
         ***********************************************/
        router.get("/profile", (incoming, outgoing) => {
            outgoing.render("profile")
        })
        /**********************************************
         * Categories 
         ***********************************************/
        router.get("/categories", (incoming, outgoing) => {
            outgoing.render("categories")
        })
        /**********************************************
         * Add Friend Route
         ***********************************************/
        router.get("/addFriend", (incoming, outgoing) => {
            outgoing.render("addFriend")
        })
        /**********************************************
         * Sign Up Route
         ***********************************************/
        router.get("/signup", (incoming, outgoing) => {
            outgoing.render("signup")
        })
        /**********************************************
         * Login Route
         ***********************************************/
        router.get("/login", (incoming, outgoing) => {
            outgoing.render("login")
        })
        /**********************************************
         * Getting the home page, then rendering the friends data onto the page 
         ***********************************************/
        router.get("/home", async (incoming, outgoing) => {
            let getFriendsData = friendsData.read();
            let outgoingData;
            getFriendsData.then(async (friendList) => {
                try {
                    outgoingData = await JSON.parse(friendList);
                    console.log(friendList);
                    outgoing.render("home", outgoingData);
                } catch (error) {
                    console.log("error", error)
                }
            });
        });



        return router;
    }
}

module.exports = MainRouter