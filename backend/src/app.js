let express = require("express")

let app = express()
let db=require("./config/db.js")

let router =require("./router/router.js")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/",router)

module.exports = app;