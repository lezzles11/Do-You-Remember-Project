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
let usercol1 = "email";
let usercol2 = "password";
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
var knex = require("knex")({
  client: "postgresql",
  connection: {
    user: "postgres",
    password: "orange",
    database: "doyouremember",
  },
  migrations: {
    tableName: "migrations",
  },
});

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
      .select(usercol1, usercol2);
    getAllUsersQuery.then((eachUserRow) => {
      console.log(
        "Each user: ",
        eachUserRow,
        eachUserRow.map((eachRow) => ({
          // #TODO: when it prints out the id, it only prints out id: undefined
          id: eachRow.id,
          email: eachRow.email,
          password: eachRow.password,
          spotify_id: eachRow.spotify_id,
          spotify_access_token:
            eachRow.spotify_access_token,
        }))
      );
      return eachUserRow.map((eachRow) => ({
        id: eachRow.id,
        email: eachRow.email,
        password: eachRow.password,
        spotify_id: eachRow.spotify_id,
        spotify_access_token: eachRow.spotify_access_token,
      }));
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
      .where("id", id);
    getUserByIdQuery.then((eachRow) => {
      console.log(eachRow);
      return eachRow;
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
    addUserQuery.then((eachRow) => {
      console.log("Added");
      console.log(eachRow);
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
    editUserQuery.then((eachRow) => {
      console.log("Edit: ", eachRow);
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
    deleteUserQuery.then((eachRow) => {
      console.log("Delete: ", eachRow);
    });
  }
}

let userService = new UserTableKnexService(knex);
userService.getAllUsersService();
userService.getUserService(4);
