const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")




/**********************************************
 * Start server
 ***********************************************/
app.listen(3000, () => {
    console.log("Application listening to port 3000!!");
});