/**********************************************
 * Routes and Controllers 
 * ==================================
 * Routes handle the HTTP request that hits the API and routes them to the appropriate controller 
 ***********************************************/
const express = require("express");

class FriendController {
    constructor(readAndWriteJSONService) {
        this.readAndWriteJSONService = readAndWriteJSONService;
    }
    router() {
        let router = express.Router()
        router.post("/addfriend", this.addFriend.bind(this))
        return router;
    }
    addFriend(input, output) {
        let {
            name,
            emoji,
            wishfulCity,
            favoriteMemory
        } = input.body;
        let friendObject = {
            name: name,
            emoji: emoji,
            wishfulCity: wishfulCity,
            favoriteMemory: favoriteMemory
        }
        let getAllFriends = this.readAndWriteJSONService.read()
        getAllFriends.then((friend) => {
            console.log("Friend: ", friendObject);
            let beforeAddingFriend = JSON.parse(friend);
            beforeAddingFriend.friends.push(friendObject)
            console.log("After adding friend: ", beforeAddingFriend)

            this.readAndWriteJSONService.write(JSON.stringify(beforeAddingFriend)).then(() => {
                console.log("Finished writing data")
            })


        })
        output.end("done!")
    }
}

module.exports = FriendController