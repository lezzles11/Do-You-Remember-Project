/**********************************************
 * Routes and Controllers 
 * ==================================
 * Routes handle the HTTP request that hits the API and routes them to the appropriate controller 
 * 
 * The purpose of this class is to be able to add, edit, delete and get the user from the database 
 * 
 * 1. Connect  
 * 2. Grab input from frontend
 * 3. Add / edit / delete data from backend accordingly 
 ***********************************************/
class FriendControllerKnex {
    constructor(knex) {
        this.knex = knex;
    }
    /**********************************************
     * Will add friend to user 
     * ==================================
     * 1. Query for user 
     * 2. Insert friend 
     ***********************************************/
    addFriend(friend, user) {

    }
    /**********************************************
     * List out all friends
     * ==================================
     * 1. Grab user
     * 2. Map out all friends 
     ***********************************************/
    listAllFriends(user) {


    }
    /**********************************************
     * Update Friend 
     * ==================================
     * 1. Grab user
     * 2. Grab friend, then replace friend with updated friend
     ***********************************************/
    updateFriend(friendId, updatedFriend, user) {

    }
    /**********************************************
     * Remove Friend 
     * ==================================
     * 1. Grab user
     * 2. Grab the id of the friend
     * 3. Delete the friend  
     ***********************************************/
    removeFriend(friendId, user) {

    }
}