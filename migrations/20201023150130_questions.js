exports.up = function(knex) {
    return knex.schema.createTable("questions", (table) => {
        table.increments()
        table.integer("question_id")
        table.string("question")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("questions")
};