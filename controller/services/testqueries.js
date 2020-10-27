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
let getQuery = knex.from("user_table").select("email", "password");

/**********************************************
 * QUERIES REQUIRED
 * ==================================
 * - [x ] get all users 
 * - [ ] get user (id, user)
 * - [ ] add user (user)
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

let getAllFromUserTable = knex.from(user_table).select(user_table_email, user_table_password)
let getFromUser = knex.from(user_table).select("")

let getUserQuery = knex.from
    .then((rows) => {
        console.log("HERE YA GO YA IDIOT")
        console.log(rows);
        console.log("AT LEAST SOMETHING HAPPENED TODAY")
    })
    .catch((error) => {
        console.log("THE IDIOCY NEVER ENDS")
        console.log(error);
    });