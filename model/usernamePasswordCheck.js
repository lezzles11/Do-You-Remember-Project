const fs = require("fs");
const path = require("path");

/**********************************************
 * The purpose of this function is to check if the username, password are in the file 
 * ==================================
 ***********************************************/
function usernamePasswordCheck(username, password, callback) {
    const users = fs.readFileSync(
        path.join(__dirname, "./users.json"),
        "utf-8",
        async (err, data) => {
            if (err) {
                throw new Error(err);
            }
            return await data;
        }
    );

    let parsed = JSON.parse(users);
    console.log(parsed)
    let user = parsed.users.filter((user) => user.username == username);
    console.log(user)
    if (user[0].username === username && user[0].password === password) {
        return callback(null, true);
    } else {
        return callback(null, false);
    }
}

module.exports = usernamePasswordCheck;