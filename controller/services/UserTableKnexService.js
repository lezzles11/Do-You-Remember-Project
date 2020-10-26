/**********************************************
 * Services and Controllers 
 * ==================================
 * Services handle the database - the purpose of this class is to be able to add, edit, delete and get the user from the database 
 * 
 * 1. Connect the routes 
 * 2. Grab input from frontend
 * 3. Add / edit / delete data from backend accordingly 
 ***********************************************/
class UserTableKnexService {
    constructor(knex) {
        this.knex = knex;
    }
    /**********************************************
     * This method will return a list of all users
     * from the user_table 
     * ==================================
     * 1. Grab User
     * 2. Map out all users 
     ***********************************************/
    getAllUsersService() {

    }
    /**********************************************
     * This method will return a user, given an id
     * ==================================
     * 
     ***********************************************/
    getUserService(id, user) {

    }
    /**********************************************
     * This method will be used to signup users 
     * ==================================
     * 1. Incoming data: user object
     * 2. Query for user
     *  3. If exists, return user already exists page 
     * 4. Otherwise, insert user 
     * 5. Throw new error otherwise 
     ***********************************************/
    addUserService(user) {}

    /**********************************************
     * This method will be used to edit the user, as needed
     * ==================================
     * 1. Incoming data: userId and userObject
     * 2. Grab user
     * 3. Grab user, then replace user with updated user 
     ***********************************************/
    editUserService(id, user) {

    }
    /**********************************************
     * This method will delete the user from the user_table 
     * ==================================
     * 1. Grab user 
     * 2. Grab the id of the user
     * 3. Delete the user 
     ***********************************************/
    deleteUserService(id, user) {

    }

}