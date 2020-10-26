/**********************************************
 * Routes and Controllers 
 * ==================================
 * Routes handle the HTTP request that hits the API (in this case, it is /api/friend) and routes them to the appropriate service methods 
 * 
 * The purpose of this class is to be able to connect to the add, edit, delete and get methods from the friendTableService 
 * 
 * 1. Connect the routes 
 * 2. Grab input from frontend
 * 3. Add / edit / delete data from backend accordingly 
 * 
 * friendTableService Methods
 * 1. getAllFriendsService()
 * 2. getFriendService(id, friend)
 * 3. addFriendService(friend)
 * 4. editFriendService(id, friend)
 * 5. deleteFriendService(id, friend)
 ***********************************************/

const express = require("express");
class FriendRouter {
    constructor(friendKnexService) {
        this.friendKnexService = friendKnexService
    }
    router() {
        let router = express.Router();
        router.get("/api/friend", this.getAllFriendsRoute.bind(this));
        router.get("api/friend/:friendId", this.getfriendRoute.bind(this));
        router.post("/signup", this.addFriendRoute.bind(this));
        router.post("/api/friend", this.addFriendRoute.bind(this));
        router.put("api/friend/:friendId", this.editFriendRoute.bind(this));
        router.delete("api/friend/:friendId", this.deleteFriendRoute.bind(this));
        return router;
    }
    /**********************************************
     * Gets all friends
     * ==================================
     * Connects the route "/api/friend"
     * Incoming data: 
     * Outgoing data: 
     * Methods from service class
     * 1. getAllFriendsService()
     * 2. getFriendService(id, friend)
     * 3. addFriendService(friend)
     * 4. editFriendService(id, friend)
     * 5. deleteFriendService(id, friend)
     ***********************************************/
    getAllFriendsRoute(incoming, outgoing) {

    }
    /**********************************************
     * Gets friend
     * ==================================
     * Connects the route "/api/friend/:friendId"
     * Incoming data: 
     * Outgoing data: 
     * Methods from service class
     *  1. getAllFriendsService()
     *  2. getFriendService(id, friend)
     ***********************************************/
    getFriendRoute(incoming, outgoing) {

    }
    /**********************************************
     * Adds friend
     * ==================================
     * Connects the route "/signup" AND API/friend
     * Incoming data: 
     * Outgoing data: 
     * Methods from service class
     * 
     ***********************************************/
    addFriendRoute(incoming, outgoing) {

    }
    /**********************************************
     * Edits friend
     * ==================================
     * Connects the route "/api/friend/:friendId"
     * Incoming data: 
     * Outgoing data: 
     * Methods from service class
     * 
     ***********************************************/
    editFriendRoute(incoming, outgoing) {

    }
    /**********************************************
     * Deletes friend
     * ==================================
     * Connects the route "/api/friend/:friendId"
     * Incoming data: 
     * Outgoing data: 
     * Methods from service class
     * deleteFriendService(id, friend)
     ***********************************************/
    deleteFriendRoute(incoming, outgoing) {

    }


}