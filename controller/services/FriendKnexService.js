/**********************************************
 * Services and Controllers 
 * ==================================
 * Services handle the database - the purpose of this class is to be able to add, edit, delete and get the user from the database 
 * 
 * 1. Connect the routes 
 * 2. Grab input from frontend
 * 3. Add / edit / delete data from backend accordingly 
 ***********************************************/
class FriendControllerKnex {
    constructor(knex) {
        this.knex = knex;
    }
    /**********************************************
     * List out all friends
     * ==================================
     * 1. Grab user
     * 2. Map out all friends 
     ***********************************************/
    getAllFriendsService(user) {

    }
    /**********************************************
     * Will add data to the user_friend table
     * ==================================
     * 1. Query for user 
     * 2. Insert friend 
     ***********************************************/
    addFriendService(friend, user) {

    }
    getFriendService(friendId, user) {

    }
    /**********************************************
     * Update Friend 
     * ==================================
     * 1. Grab user
     * 2. Grab friend, then replace friend with updated friend
     ***********************************************/
    editFriendService(friendId, friend, user) {

    }
    /**********************************************
     * Remove Friend 
     * ==================================
     * 1. Grab user
     * 2. Grab the id of the friend
     * 3. Delete the friend  
     ***********************************************/
    deleteFriendService(friendId, user) {

    }
}