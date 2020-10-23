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
        router.post("/addUser", this.addUser.bind(this))
        return router;
    }
    addUser(input, output) {
        let {
            username,
            password,
        } = input.body;
        let getAllUsers = this.readAndWriteJSONService.read()
        console.log("Getting all users", getAllUsers)
        getAllUsers.then((user) => {
            let parsedUserData = JSON.parse(user);
            let userObject = {
                id: parsedUserData.users.length + 1,
                username: username,
                password: password,
            }
            // Adding the new object to the parsed json file 
            parsedUserData.users.push(userObject)
            this.readAndWriteJSONService.write(JSON.stringify(parsedUserData)).then(() => {
                console.log("New data: ", parsedUserData)
            })
        })
        output.end("done!")
    }
}

module.exports = UserController