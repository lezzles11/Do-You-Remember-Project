exports.up = function(knex) {
    return knex.schema.createTable("user_table", (table) => {
        table.increments()
        table.string("email")
        table.string("password")
        table.string("spotify_id")
        table.string("spotify_access_token")
        table.timestamps(false, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("user_table")
};