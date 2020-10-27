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
 * - [ x] get user (id, user)
 * - [ x] add user (user)
 * - [ x] edit user service (id, user) 
 * - [x ] delete user service (id, user)
 * - [x ] get all user friends
 * - [ x] add friend
 * - [x ] edit friend
 * - [ x] delete friend
 * - [ ] get all questions from this category
 * - [ ] get all questions
 * - [ ] get all favorited questions
 * - [ ] get all answered questions
 * - [ ] make questions answered 
 * 
 ***********************************************/

// get all from table 

let table = "user_friend"
let col1 = "name"
let col2 = "emoji"
let col3 = "wishful_city"
let col4 = "favorite_memory"
let insertFriendObject = {
    id: 4,
    user_id: 1,
    name: "Janice",
    emoji: "yoga",
    wishful_city: "Barcelona",
    favorite_memory: "Going to yoga together"
}
let replaceFriendObject = {
    id: 4,
    user_id: 2,
    name: "Genny",
    emoji: "cousin",
    wishful_city: "denmark",
    favorite_memory: "hanging out as kids writing weird stories"
}

function printQuery(query) {
    query.then((eachRowInQuery) => {
        console.log("Each Row in Query: ", eachRowInQuery);
    }).catch((error) => {
        console.log("Error: ", error);
    });
}


/**********************************************
 * Query: get all objects    
 * ==================================
 * input:  
 * output: 
 ***********************************************/
let getAllObjectsQuery = knex.from(table).select(col1, col2, col3, col4)

// printQuery(getAllObjectsQuery)

/**********************************************
 * Query: get object by id
 * ==================================
 ***********************************************/
let getObjectByIdQuery = knex.from(table).where("id", 1)
// printQuery(getObjectByIdQuery)

/**********************************************
 * Query: add friend object 
 * ==================================
let insertFriendObject = {
    id: 4,
    user_id: 1,
    name: "Janice",
    emoji: "yoga",
    wishful_city: "Barcelona",
    favorite_memory: "Going to yoga together"
}
 ***********************************************/
let insertObjectQuery = knex(table).insert(insertFriendObject)
// printQuery(getAllObjectsQuery)


/**********************************************
 * Query: edit object 
 * ==================================
let replaceFriendObject = {
    id: 5,
    user_id: 2,
    name: "Genny",
    emoji: "cousin",
    wishful_city: "denmark",
    favorite_memory: "hanging out as kids writing weird stories"
}
 ***********************************************/
let editQuery = knex(table).where({
    id: 4
}).update(replaceFriendObject)

// printQuery(editQuery)
// printQuery(getAllObjectsQuery)

/**********************************************
 * Delete object based on id 
 * ==================================
 ***********************************************/
let deleteQuery = knex(table).where({
    id: 4
}).del()
// delete query is run by friend id and user id 

printQuery(insertObjectQuery)
// printQuery(getAllObjectsQuery)
printQuery(deleteQuery)
// printQuery(getAllObjectsQuery)