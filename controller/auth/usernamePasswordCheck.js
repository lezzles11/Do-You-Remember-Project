const fs = require("fs");
const path = require("path");

/**********************************************
 * The purpose of this function is to check if the username, password are in the file 
 * ==================================
 ***********************************************/
function usernamePasswordCheck(username, password, callback) {
    const users = fs.readFileSync(
        path.join(__dirname, "../../model/users.json"),
        "utf-8",
        async (err, data) => {
            if (err) {
                throw new Error(err);
            }
            return await data;
        }
    );

    // It first parses the data, then filters for the 
    // 
    let parsed = JSON.parse(users);
    let user = parsed.users.filter((user) => user.username == username);
    if (user[0].username === username && user[0].password === password) {
        return callback(null, true);
    } else {
        return callback(null, false);
    }
}

module.exports = usernamePasswordCheck;