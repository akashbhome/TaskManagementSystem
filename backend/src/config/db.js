let mysql = require("mysql2")
require("dotenv").config();

let db = mysql.createConnection({
            host: process.env.TM_Host,
            user: process.env.TM_User,
            password: process.env.TM_Password,
            database: process.env.TM_Database
            
        })

        db.connect((err)=>{
            if(err){
                console.log("Database Not Connected 🚫"+err)
            }
            else{
                console.log("Database Connected 🔄️")
            }
        })

module.exports = db;