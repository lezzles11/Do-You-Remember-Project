const express = require("express")

const ReadAndWriteJSON = require("../../model/ReadAndWriteJSON.js")

const directoryPath = require("path")

const friendsData = new ReadAndWriteJSON(directoryPath.join(__dirname), "../../model/friends.json")


const ordersData = new ReadAndWriteJSON(directoryPath.join(__dirname), "../../model/orders.json")

class MainRouter {
    router() {
        const router = express.Router()


        /**********************************************
         * Home page - checks user 
         * ==================================
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
         * Get And Render Data
         * ==================================
         ***********************************************/
        router.get("/question", (incoming, outgoing) => {
            outgoing.render("question")
        })
        router.get("/profile", (incoming, outgoing) => {
            outgoing.render("profile")
        })
        router.get("/categories", (incoming, outgoing) => {
            outgoing.render("categories")
        })
        router.get("/addFriend", (incoming, outgoing) => {
            outgoing.render("addFriend")
        })




        return router;
    }
}

module.exports = MainRouter