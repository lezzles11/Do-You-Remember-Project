exports.up = function(knex) {
    return knex.schema.createTable("user_friend_all_questions", (table) => {
        table.increments()
        table.integer("user_id").unsigned()
        table.foreign("user_id").references("users.id")
        table.integer("user_friend_id").unsigned()
        table.foreign("user_friend_id").references("user_friend.id")
        table.integer("question_id").unsigned()
        table.foreign("question_id").references("questions.id")
        table.boolean("answered")
        table.timestamps(false, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("user_friend_all_questions")
};