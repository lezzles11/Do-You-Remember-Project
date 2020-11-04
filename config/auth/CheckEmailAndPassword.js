const CheckEmailAndPassword = function (knex) {
    return function (email, password, cb) {
        let query = knex
            .select("email", "password")
            .from("user_table")
            .where({ email: email, password: password });

        query
            .then((rows) => {
                // console.log(rows)
                if (rows.length === 1) {
                    cb(null, true);
                    //we have found the user with this username and password.
                } else {
                    cb(null, false);
                    //no such user....
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
module.exports = CheckEmailAndPassword;
