// Update with your config settings.
require("dotenv").config();

module.exports = {
    development: {
        client: "postgresql",
        connection: {
            database: process.env.DB_DATABASE,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
        },
    },
};
