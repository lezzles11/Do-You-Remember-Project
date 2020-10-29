/**********************************************
 * Services and Controllers 
 * ==================================
 * Services handle the database - the purpose of this class is to be able to add, edit, delete and get the user from the database 
 * 
 * 1. Connect the routes 
 * 2. Grab input from frontend
 * 3. Add / edit / delete data from backend accordingly 
 ***********************************************/

// #TODO: Get a question
/**********************************************
 * 
 * ==================================
 ***********************************************/
class QuestionControllerKnex {
    constructor(knex) {
        this.knex = knex;
    }
    /**********************************************
     * Favorite a question 
     * ==================================
     ***********************************************/
    favoriteQuestion(question, friend, user) {
        // GRAB QUESTION OBJECT 

    }

    /**********************************************
     * Make question answered for user 
     * ==================================
     ***********************************************/
    makeQuestionAnswered() {

    }
    /**********************************************
     * Get all questions from specific category 
     * ==================================
     ***********************************************/
    getAllQuestionsFromCategory(categoryName) {
        let categoryId = knex.select("id").from("category").where("name", categoryName)
        console.log("Category name: ", categoryName)
        console.log("Category Id: ", categoryId)

        return printQuery(knex.select("question_string", "category_id", "photo_url").from("question").where("category_id", categoryId))
    }
    /**********************************************
     * Grab all questions 
     * ==================================
     ***********************************************/
    grabAllQuestions() {
        return printQuery(knex.select("category_id", "question_string", "photo_url").from("question"))
    }
}