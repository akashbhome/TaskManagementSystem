let express = require("express")

let app = express()
let db=require("./config/db.js")

let router =require("./router/router.js")

app.use("/",router)

module.exports = app;