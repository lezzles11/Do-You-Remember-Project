/**********************************************
 * Services and Controllers
 * ==================================
 * Services handle the database - the purpose of this class is to be able to add, edit, delete and get the user from the database
 *
 * 1. Connect the routes
 * 2. Grab input from frontend
 * 3. Add / edit / delete data from backend accordingly
 ***********************************************/

let user_table = "user_table";
let col1 = "id";
let col2 = "email";
let col3 = "password";
let col4 = "spotify_id";
let col5 = "spotify_access_token";

let insertUserObject = {
    id: 4,
    email: "test@bu.edu",
    password: "cheung",
    spotify_id: "",
    spotify_access_token: "",
};
let replaceUserObject = {
    id: 4,
    email: "replaceTest@bu.edu",
    password: "cheung",
    spotify_id: "",
    spotify_access_token: "",
};
function makeUser(eachUserRow) {
    return eachUserRow.map((eachRow) => ({
        id: eachRow.id,
        email: eachRow.email,
        password: eachRow.password,
        spotify_id: eachRow.spotify_id,
        spotify_access_token: eachRow.spotify_access_token,
    }));
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
     * 3. Run and it console.logs everything
     * 4. Returns object:
     * [ { id: undefined, email: 'ryan@bu.edu', password: 'cheung'}]
     ***********************************************/
    getAllUsersService() {
        let getAllUsersQuery = this.knex
            .from(user_table)
            .select(col1, col2, col3, col4, col5);
        return getAllUsersQuery.then((eachUserRow) => {
            console.log("Each user: ", eachUserRow);
            console.log("return?");
            return makeUser(eachUserRow);
        });
    }
    /**********************************************
     * This method will return a user, given an id
     * ==================================
     *
     ***********************************************/
    getUserService(id) {
        let getUserByIdQuery = this.knex
            .from(user_table)
            .select(col1, col2, col3, col4, col5)
            .where("id", id);
        return getUserByIdQuery.then((eachRow) => {
            console.log(eachRow);
            return makeUser(eachRow);
        });
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
        let addUserQuery = this.knex(user_table).insert(user);
        return addUserQuery.then((eachRow) => {
            console.log(makeFriend(eachRow));
            return makeFriend(eachRow);
        });
    }

    /**********************************************
     * This method will be used to edit the user, as needed
     * ==================================
     * 1. Incoming data: userId and userObject
     * 2. Grab user
     * 3. Grab user, then replace user with updated user
     ***********************************************/
    editUserService(id, user) {
        let editUserQuery = this.knex(user_table)
            .where({
                id: id,
            })
            .update(user);
        return editUserQuery.then((eachRow) => {
            console.log("Edit: ", makeFriend(eachRow));
            return makeFriend(eachRow);
        });
    }
    /**********************************************
     * This method will delete the user from the user_table
     * ==================================
     * 1. Grab user
     * 2. Grab the id of the user
     * 3. Delete the user
     ***********************************************/
    deleteUserService(id) {
        let deleteUserQuery = this.knex(user_table)
            .where({
                id: id,
            })
            .del();
        return deleteUserQuery.then((eachRow) => {
            console.log("Delete: ", makeFriend(eachRow));
            return makeFriend(eachRow);
        });
    }
}

module.exports = UserTableKnexService;
