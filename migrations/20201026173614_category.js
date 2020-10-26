exports.up = function(knex) {
    return knex.schema.createTable("category", (table) => {
        table.increments()
        table.string("name")
        table.timestamps(false, true);
    })
};
exports.down = function(knex) {
    return knex.schema.dropTable("category")
};