exports.up = function(knex) {
    return knex.schema.createTable("friends_questions", (table) => {
        table.increments()
        table.integer("users_friends_id").unsigned()
        table.foreign("users_friends_id").references("users_friends.id")
        table.integer("question_id").unsigned()
        table.foreign("question_id").references("questions.id")
        table.boolean("answered")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("friends_questions")
};