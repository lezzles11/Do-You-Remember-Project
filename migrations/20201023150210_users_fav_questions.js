exports.up = function(knex) {
    return knex.schema.createTable("users_fav_questions", (table) => {
        table.increments()
        table.integer("user_id").unsigned()
        table.foreign("user_id").references("users.id")
        table.integer("question_id").unsigned()
        table.foreign("question_id").references("questions.id")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("users_fav_questions")
};