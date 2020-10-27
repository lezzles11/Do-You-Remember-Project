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
 * - [ ] get all questions from this category
 * - [ ] get all questions
 * - [ ] get all favorited questions
 * - [ ] get all answered questions
 * - [ ] make questions answered 
 ***********************************************/

// get all from table 
let user_friend_all_questions = "user_friend_all_questions"

// Question Table and Column
let question_table = "question"
let question_foreignCategoryId = "question.category_id"

let question_col1 = "category_id"
let question_col2 = "question_string"
let question_col3 = "photo_url"

// Category Table and Column
let category_table = "category"
let category_id = "category.id"
let category_col1 = "name"
let categoryObject = {
    id: 5,
    name: "covid"
}
let insertQuestionObject = {
    id: 201,
    category_id: 5,
    question_string: "What seems much less important now, after covid?",
    photo_url: ""
}

let replaceQuestionObject = {
    id: 201,
    category_id: 5,
    question_string: "What is it you understand better, after covid?",
    photo_url: ""
}
// let user question table 
let user_friend_all_questions = "user_friend_all_questions"

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
let getAllObjectsQuery = knex.from(question_table).select(question_col1, question_col2, question_col3)

// printQuery(getAllObjectsQuery)

/**********************************************
 * Query: get object by id
 * ==================================
 ***********************************************/

function getObjectByIdQuery(table, id) {
    return printQuery(knex.from(table).where("id", id))
}


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

function insertObjectQuery(table, object) {
    return printQuery(knex(table).insert(object))
}

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

function editQuery(table, id, objectReplacement) {
    return printQuery(knex(table).where({
        id: id
    }).update(objectReplacement))
}
/**********************************************
 * Delete object based on id 
 * ==================================
 ***********************************************/
let deleteQueryCommand = knex(question_table).where({
    id: 200
}).del()
// delete query is run by friend id and user id 

function deleteQuery(table, id) {
    return printQuery(knex(table).where({
        id: id
    }).del())
}


// deleteQuery(question_table, 200)
// console.log("After deleting")
// getObjectByIdQuery(question_table, 200)

/**********************************************
 * Favorite a question 
 * ==================================
 ***********************************************/

// probaby like the update function 
function favoriteQuestion(question, friend, user) {
    // grab the id from all the questions 
    // increment the id by one and assign to this object 
    let newFriendQuestionObject = {
        id: "", // create new id, 
        user_id: user.id,
        user_friend_id: friend.id,
        question_id: question.id,
        answered: true
    }
    knex(user_friend_all_questions).insert(newFriendQuestionObject)



}
/**********************************************
 * Make question answered for user 
 * ==================================
 ***********************************************/

function makeQuestionAnswered(user, question) {

}

/**********************************************
 * Get all questions from specific category 
 * ==================================
 ***********************************************/
function getQuestionFromCategoryName(categoryName) {
    // get category id, given category name
    let categoryId = knex.select("id").from("category").where("name", categoryName)
    console.log("Category name: ", categoryName)
    console.log("Category Id: ", categoryId)

    return printQuery(knex.select("question_string", "category_id", "photo_url").from("question").where("category_id", categoryId))
}
/**********************************************
 * Grab all questions 
 * ==================================
 ***********************************************/
function grabAllQuestions() {
    return printQuery(knex.select("category_id", "question_string", "photo_url").from("question"))
}


getQuestionFromCategoryName("Love")
grabAllQuestions()
// console.log("BEFORE EDITING")
// insertObjectQuery(question_table, insertQuestionObject)
// getObjectByIdQuery(question_table, 201)
// EDIT WORKS 
// editQuery(question_table, 201, replaceQuestionObject)
// getObjectByIdQuery(question_table, 201)
// console.log("AFTER UPDATING")
// getObjectByIdQuery(question_table, 201)
// printQuery(editQuery)
// insertObjectQuery(category_table, categoryObject)
// getObjectByIdQuery(question_table, 200)
// console.log("Before deleting")
// getObjectByIdQuery(question_table, 200)