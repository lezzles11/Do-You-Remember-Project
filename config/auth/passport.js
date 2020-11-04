const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const knex = require("knex")({
    client: "postgresql",
    connection: {
        database: "doyouremember",
        user: "postgres",
        password: "orange",
    },
});
