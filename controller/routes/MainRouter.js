const express = require("express")

const ReadAndWriteJSON = require("../../model/ReadAndWriteJSON.js")

const directoryPath = require("path")

const friendsData = new ReadAndWriteJSON(directoryPath.join(__dirname), "../../model/friends.json")


const ordersData = new ReadAndWriteJSON(directoryPath.join(__dirname), "../../model/orders.json")

class MainRouter {
    router() {
        const router = express.Router()
        router.get("/", (incoming, outgoing) => {
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
        return router;
    }
}

module.exports = MainRouter