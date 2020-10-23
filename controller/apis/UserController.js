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
const express = require("express");

class UserController {
    constructor(readAndWriteJSONService) {
        this.readAndWriteJSONService = readAndWriteJSONService;
    }
    router() {
        let router = express.Router()
        router.post("/adduser", this.addUser.bind(this))
        return router;
    }
    addUser(input, output) {
        let {
            username,
            password,
            email
        } = input.body;
        let getAllUsers = this.readAndWriteJSONService.read()
        console.log("GEtting all friends", getAllFriends)
        let totalLength = this.readAndWriteJSONService.length()
        console.log("LENGTH", totalLength)
        getAllUsers.then((user) => {
            let parsedUserData = JSON.parse(user);
            let userObject = {
                id: parsedUserData.users.length + 1,
                username: username,
                password: password,
                email: email
            }
            console.log("New User: ", userObject);
            parsedUserData.users.push(userObject)
            console.log("After adding friend: ", userObject)
            console.log(userObject.users.length)
            this.readAndWriteJSONService.write(JSON.stringify(userObject)).then(() => {
                console.log("Finished writing data")
                console.log("Added new user: ", userObject)
            })
        })
        output.end("done!")
    }
}

module.exports = UserController