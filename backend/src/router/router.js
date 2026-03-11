let express=require("express")
let router=express.Router();

let user=require("../controller/user.js");

router.get("/addUser",user.addUser);

module.exports=router;  