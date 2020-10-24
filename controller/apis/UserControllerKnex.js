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
class UserControllerKnex {
    constructor(knex) {
        this.knex = knex;
    }
    /**********************************************
     * Will add User to user 
     * ==================================
     * 1. Query for user 
     * 2. Insert User 
     ***********************************************/
    addUser(User, user) {

    }
    /**********************************************
     * List out all Users
     * ==================================
     * 1. Grab user
     * 2. Map out all Users 
     ***********************************************/
    listAllUsers(user) {


    }
    /**********************************************
     * Update User 
     * ==================================
     * 1. Grab user
     * 2. Grab User, then replace User with updated User
     ***********************************************/
    updateUser(UserId, updatedUser, user) {

    }
    /**********************************************
     * Remove User 
     * ==================================
     * 1. Grab user
     * 2. Grab the id of the User
     * 3. Delete the User  
     ***********************************************/
    removeUser(UserId, user) {

    }
}