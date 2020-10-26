exports.up = function(knex) {
    return knex.schema.createTable("question", (table) => {
        table.increments()
        table.integer("category_id").unsigned()
        table.foreign("category_id").references("categories.id")
        table.string("question_string")
        table.string("photo_url")
        table.timestamps(false, true);

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("question")
};