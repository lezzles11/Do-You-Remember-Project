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
        let getAllFriends = this.readAndWriteJSONService.read()
        console.log("GEtting all friends", getAllFriends)
        let totalLength = this.readAndWriteJSONService.length()
        console.log("LENGTH", totalLength)
        getAllFriends.then((friend) => {
            let beforeAddingFriend = JSON.parse(friend);
            let friendObject = {
                id: beforeAddingFriend.friends.length + 1,
                name: name,
                emoji: emoji,
                wishfulCity: wishfulCity,
                favoriteMemory: favoriteMemory,
                questions: []
            }
            console.log("Friend: ", friendObject);
            beforeAddingFriend.friends.push(friendObject)
            console.log("After adding friend: ", beforeAddingFriend)
            console.log(beforeAddingFriend.friends.length)
            this.readAndWriteJSONService.write(JSON.stringify(beforeAddingFriend)).then(() => {
                console.log("Finished writing data")
            })
        })
        output.end("done!")
    }
}

module.exports = FriendController