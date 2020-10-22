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
        router.get("/home", async (incoming, outgoing) => {
            //outgoing.render("home")

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