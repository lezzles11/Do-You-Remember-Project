const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const basicAuth = require("express-basic-auth")

// data 
const FRIENDS_DATA = "./model/friends.json"
const QUESTIONS_DATA = "./model/questions.json"
const USERS_DATA = "./model/users.json"

