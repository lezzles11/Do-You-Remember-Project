/**********************************************
 * Routes and Controllers
 * ==================================
 * Routes handle the HTTP request that hits the API (in this case, it is /api/user) and routes them to the appropriate service methods
 *
 * The purpose of this class is to be able to connect to the add, edit, delete and get methods from the UserTableService
 *
 * 1. Connect the routes
 * 2. Grab input from frontend
 * 3. Add / edit / delete data from backend accordingly
 *
 * UserTableService Methods
 * 1. getAllUsersService()
 * 2. getUserService(id, user)
 * 3. addUserService(user)
 * 4. editUserService(id, user)
 * 5. deleteUserService(id, user)
 ***********************************************/

let newUser = {
    id: 6,
    email: "maria@mazen.com",
    password: "cheung",
    spotify_id: "",
    spotify_access_token: "",
};
const express = require("express");
class UserTableRouter {
    constructor(userTableService) {
        this.userTableService = userTableService;
    }
    router() {
        let router = express.Router();
        router.get("/api/user", this.getAllUsersRoute.bind(this));
        router.get("/api/user/:userId", this.getUserRoute.bind(this));
        // router.post("/signup", this.addUserRoute.bind(this));
        router.post("/api/adduser", this.addUserRoute.bind(this));
        router.put("/api/user/:userId", this.editUserRoute.bind(this));
        // router.delete("/api/user/:userId", this.deleteUserRoute.bind(this));
        return router;
    }
    /**********************ç************************
     * Gets all users
     * ==================================
     * Connects the route "/api/user"
     * Incoming data:
     * Outgoing data:
     * Methods from service class
     * 1. getAllUsersService()
     * __ Run route and returns data accordingly
     ***********************************************/
    getAllUsersRoute(incoming, outgoing, next) {
        console.log("Getting all users route");
        console.log("Incoming: ", incoming.body);
        console.log("Incoming: ", incoming.params);

        this.userTableService
            .getAllUsersService()
            .then((eachUser) => {
                console.log(eachUser);
                outgoing.json(eachUser);
            })
            .catch(next);
    }
    /**********************************************
     * Gets user
     * ==================================
     * Connects the route "/api/user/:userId"
     * Incoming data:
     * Outgoing data:
     * Methods from service class
     * 1. getAllUsersService()
     * 2. getUserService(id, user)
     ***********************************************/
    getUserRoute(incoming, outgoing, next) {
        console.log("Getting all users route");
        let id = incoming.params.userId;
        console.log("Incoming: ", incoming.params.userId);
        this.userTableService
            .getUserService(id)
            .then((user) => {
                outgoing.json(user);
            })
            .catch(next);
    }
    /**********************************************
     * Adds user
     * ==================================
     * Connects the route "/signup" AND API/USER
     * Incoming data:
     * Outgoing data:
     * Methods from service class
     ***********************************************/
    // #TODO: Need to finish this add user route
    // #TODO: not adding the incoming data well
    addUserRoute(incoming, outgoing, next) {
        // #TODO: incoming string cannot be console.logged
        // #TODO: Why doesn't the post method work if I already have added get to it?
        let object = incoming.body;
        console.log(object);
        console.log("1. Adding user route!");
        return this.userTableService
            .addUserService(object)
            .then((object2) => {
                outgoing.json(object2);
                outgoing.json("Added");
            })
            .catch(next);
    }
    /**********************************************
     * Edits user
     * ==================================
     * Connects the route "/api/user/:userId"
     * Incoming data:
     * Outgoing data:
     * Methods from service class
     *
     ***********************************************/
    editUserRoute2(incoming, outgoing, next) {
        console.log("Editing User Route ");
        let userId = incoming.params.userId;
        console.log(incoming.body.user);
        this.userTableService
            .editUserService(userId, incoming.body.user)
            .then(() => {
                outgoing.json("Added");
            })
            .catch(next);
    }
    editUserRoute(incoming, outgoing, next) {
        console.log("Edit User Route Received");
        outgoing.send("Edit User Route Received");
    }
    /**********************************************
     * Deletes user
     * ==================================
     * Connects the route "/api/user/:userId"
     * Incoming data:
     * Outgoing data:
     * Methods from service class
     * deleteUserService(id, user)
     ***********************************************/
    deleteUserRoute(incoming, outgoing) {}
}

module.exports = UserTableRouter;
