/**********************************************
 * Services and Controllers 
 * ==================================
 * Services handle the database - the purpose of this class is to be able to add, edit, delete and get the user from the database 
 * 
 * 1. Connect the routes 
 * 2. Grab input from frontend
 * 3. Add / edit / delete data from backend accordingly 
 ***********************************************/

let user_table = "user_table"
let insertUserObject = {
    id: 4,
    email: "test@bu.edu",
    password: "cheung",
    spotify_id: "",
    spotify_access_token: "",
}
let replaceUserObject = {
    id: 4,
    email: "replaceTest@bu.edu",
    password: "cheung",
    spotify_id: "",
    spotify_access_token: "",
}
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
        let getAllUsersQuery = knex.from(user_table).select(user_table_email, user_table_password)
    }
    /**********************************************
     * This method will return a user, given an id
     * ==================================
     * 
     ***********************************************/
    getUserService(id, user) {
        let getUserByIdQuery = knex.from(user_table).where("id", id)
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
    addUserService(user) {
        let addUserQuery = knex(user_table).insert(user)
    }

    /**********************************************
     * This method will be used to edit the user, as needed
     * ==================================
     * 1. Incoming data: userId and userObject
     * 2. Grab user
     * 3. Grab user, then replace user with updated user 
     ***********************************************/
    editUserService(id, user) {
        let editUserQuery = knex(user_table).where({
            id: id
        }).update(user)
    }
    /**********************************************
     * This method will delete the user from the user_table 
     * ==================================
     * 1. Grab user 
     * 2. Grab the id of the user
     * 3. Delete the user 
     ***********************************************/
    deleteUserService(id, user) {
        let deleteUserQuery = knex(user_table).where({
            id: id
        }).del()
    }

}