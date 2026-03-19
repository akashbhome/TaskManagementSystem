let express = require("express")
const cors = require("cors");

let app = express()
let db=require("./config/db.js")

let router =require("./router/router.js")

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/",router)



module.exports = app;