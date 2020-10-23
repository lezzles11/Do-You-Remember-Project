exports.up = function(knex) {
    return knex.schema.createTable("users_fav_questions", (table) => {
        table.increments()
        table.integer("user_id")
        table.integer("user_id").references("user.id")
        table.integer("question_id")
        table.integer("question_id").references("question.id")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("users_fav_questions")
};