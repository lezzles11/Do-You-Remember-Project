var knex = require('knex')({
    client: 'postgresql',
    connection: {
        user: 'postgres',
        password: 'orange',
        database: 'doyouremember'
    },
    migrations: {
        tableName: 'migrations'
    }
});

function printQuery(query) {
    query.then((eachRowInQuery) => {
        console.log("Each Row in Query: ", eachRowInQuery);
    }).catch((error) => {
        console.log("Error: ", error);
    });
}


/**********************************************
 * QUERIES REQUIRED
 * ==================================
 * - [x ] get all users 
 * - [ x] get user (id, user)
 * - [ x] add user (user)
 * - [ ] edit user service (id, user) 
 * - [ ] delete user service (id, user)
 * - [ ] get all user friends
 * - [ ] add friend
 * - [ ] edit friend
 * - [ ] delete friend
 * - [ ] get all questions from this category
 * - [ ] get all questions
 * - [ ] get all favorited questions
 * - [ ] get all answered questions
 * - [ ] make questions answered 
 * 
 ***********************************************/

// get all from table 

let user_table = "user_table"
let user_table_email = "email"
let user_table_password = "password"
let category = "category"
let category_name = "name"
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

/**********************************************
 * Get all users    
 * ==================================
 * input:  
 * output: 
 ***********************************************/
let getAllFromUserTable = knex.from(user_table).select(user_table_email, user_table_password)

/**********************************************
 * Get user by id
 * ==================================
 * input: user id 
 * output: user object {
 *  id 
 *  email
 *  spotify_id
 *  spotify_access_token
 *  created_at
 *  updated_at
 * }
 ***********************************************/
let getUserById = knex.from(user_table).where("id", 1)

/**********************************************
 * Add User
 * ==================================
 let insertUserObject = {
     id: 4,
     email: "test@bu.edu",
     password: "cheung",
     spotify_id: "",
     spotify_access_token: "",
 }
 ***********************************************/
let addUser = knex(user_table).insert(insertUserObject)

/**********************************************
 * Edit User 
 * ==================================
 let replaceUserObject = {
     id: 4,
     email: "replaceTest@bu.edu",
     password: "cheung",
     spotify_id: "",
     spotify_access_token: "",
 }
 ***********************************************/
let editUser = knex(user_table).where({
    id: 4
}).update(replaceUserObject)


printQuery(getAllFromUserTable)