let express=require("express")
let router=express.Router();

let login = require("../controller/login.js")               //Login controller call

let auth=require("../middleware/auth.js")                   //JWT token 

let user=require("../controller/userCont.js")               
let task=require("../controller/taskCont.js")

// -------------Login--------------------------
router.post("/login",login.login);
// -----------------------------------------------

// --------------User--------------------------
router.post("/addUser",auth,user.addUser);
router.get("/viewUser",auth,user.viewUser);
router.get("/searchUser",auth,user.searchUser);
router.put("/updateUser",auth,user.updateUser);
router.delete("/deleteUser",auth,user.deleteUser);
// ------------------------------------------------

//--------------Task---------------------------
router.post("/addTask",auth,task.addTask);
router.get("/viewTask",auth,task.viewTask);
router.get("/searchTask",auth,task.searchTask);
router.put("/updateTask",auth,task.updateTask);
router.delete("/deleteTask",auth,task.deleteTask);
//---------------------------------------------


module.exports=router;  