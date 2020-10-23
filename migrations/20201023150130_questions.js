exports.up = function(knex) {
    return knex.schema.createTable("questions", (table) => {
        table.increments()
        table.integer("category_id").unsigned()
        table.foreign("category_id").references("categories.id")
        table.string("question")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("questions")
};