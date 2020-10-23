exports.up = function(knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments()
        table.string("username")
        table.string("password")
        table.string("email")
        table.string("facebook_id")
        table.string("facebook_access_token")
        table.string("spotify_id")
        table.string("spotify_access_token")
        table.timestamps(false, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("users")
};