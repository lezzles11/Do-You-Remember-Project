exports.up = function(knex) {
    return knex.schema.createTable("users_friends", (table) => {
        table.increments()
        table.integer("user_id").unsigned()
        table.foreign("user_id").references("users.id")
        table.string("name")
        table.string("relation")
        table.string("description")
        table.timestamps(false, true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("users_friends")
};