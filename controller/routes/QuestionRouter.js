/**********************************************
 * Routes and Controllers
 * ==================================
 * Routes handle the HTTP request that hits the API (in this case, it is /api/Question) and routes them to the appropriate service methods
 *
 * The purpose of this class is to be able to connect to the add, edit, delete and get methods from the QuestionTableService
 *
 * 1. Connect the routes
 * 2. Grab input from frontend
 * 3. Add / edit / delete data from backend accordingly
 *
 * QuestionTableService Methods
 * 1. getAllQuestionsService()
 * 2. getQuestionService(id, Question)
 * 3. addQuestionService(Question)
 * 4. editQuestionService(id, Question)
 * 5. deleteQuestionService(id, Question)
 ***********************************************/

const express = require("express");
class QuestionRouter {
    constructor(QuestionKnexService) {
        this.QuestionKnexService = QuestionKnexService;
    }
    router() {
        let router = express.Router();
        router.get(
            "api/category/:categoryId",
            this.getAllQuestionsFromCategoryRoute.bind(this)
        );
        router.get(
            "api/category/:categoryId/:questionId",
            this.getQuestionFromCategoryRoute.bind(this)
        );
        router.get(
            "api/category/:categoryId/:questionId",
            this.userFavoritesQuestionRoute.bind(this)
        );
        router.get(
            "api/category/:categoryId/:questionId",
            this.friendAnswersQuestionRoute.bind(this)
        );
        router.get("api/question", this.getAllQuestionsRoute.bind(this));
        router.get(
            "api/question/:questionId",
            this.getQuestionRoute.bind(this)
        );
        router.post("api/question", this.addQuestionRoute.bind(this));
        router.put(
            "api/question/:questionId",
            this.editQuestionRoute.bind(this)
        );
        router.delete(
            "api/question/:questionId",
            this.deleteQuestionRoute.bind(this)
        );
        return router;
    }
    /**********************************************
     * Favorite a question
     * ==================================
     ***********************************************/
    userFavoritesQuestionRoute(incoming, outgoing) {}

    /**********************************************
     * Make question answered for user
     * ==================================
     ***********************************************/
    friendAnswersQuestionRoute(incoming, outgoing) {}
    /**********************************************
     * Gets all questions from a specific category
     * ==================================
     * Route: api / category /: categoryId
     * Incoming: category and question is params
     * Outgoing data:
     * Calls the following service methods
     ***********************************************/
    getAllQuestionsFromCategoryRoute(incoming, outgoing) {}
    /**********************************************
     * Get question from category
     * ==================================
     * Route: api / category /: categoryId /: questionId
     * Incoming:
     * Outgoing:
     * Calls the following service methods:
     *  -
     ***********************************************/
    getQuestionFromCategoryRoute(incoming, outgoing) {}
    /**********************************************
     * Gets all Questions
     * ==================================
     * Connects the route: api/question
     * Incoming data:
     * Outgoing data:
     * Methods from service class
     * 1. getAllQuestionsService()
     * 2. getQuestionService(id, Question)
     * 3. addQuestionService(Question)
     * 4. editQuestionService(id, Question)
     * 5. deleteQuestionService(id, Question)
     ***********************************************/
    getAllQuestionsRoute(incoming, outgoing) {}
    /**********************************************
     * Gets Question
     * ==================================
     * Connects the route "/api/Question/:QuestionId"
     * Incoming data:
     * Outgoing data:
     * Methods from service class
     *  1. getAllQuestionsService()
     *  2. getQuestionService(id, Question)
     ***********************************************/
    getQuestionRoute(incoming, outgoing) {}
    /**********************************************
     * Adds Question
     * ==================================
     * Connects the route "/api/question" AND API/Question
     * Incoming data:
     * Outgoing data:
     * Methods from service class
     *
     ***********************************************/
    addQuestionRoute(incoming, outgoing) {}
    /**********************************************
     * Edits Question
     * ==================================
     * Connects the route "/api/question/:questionId"
     * Incoming data:
     * Outgoing data:
     * Methods from service class
     *
     ***********************************************/
    editQuestionRoute(incoming, outgoing) {}
    /**********************************************
     * Deletes Question
     * ==================================
     * Connects the route "/api/question/:questionId"
     * Incoming data:
     * Outgoing data:
     * Methods from service class
     * deleteQuestionService(id, Question)
     ***********************************************/
    deleteQuestionRoute(incoming, outgoing) {}
}
module.exports = QuestionRouter;
