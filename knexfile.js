// Update with your config settings.
require("dotenv").config();

module.exports = {
    development: {
        client: "postgresql",
        connection: {
            database: "doyouremember",
            user: "postgres",
            password: "orange",
        },
    },
};
