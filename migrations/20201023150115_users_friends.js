exports.up = function(knex) {
    return knex.schema.createTable("user_friend", (table) => {
        table.increments()
        table.integer("user_id").unsigned()
        table.foreign("user_id").references("users.id")
        table.string("name")
        table.string("emoji")
        table.string("wishful_city")
        table.string("favorite_memory")
        table.timestamps(false, true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("user_friend")
};