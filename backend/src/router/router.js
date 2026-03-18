let express=require("express")
let router=express.Router();
let login = require("../controller/login.js")
let auth=require("../middleware/auth.js")
let user=require("../controller/userCont.js")
let task=require("../controller/taskCont.js")

router.post("/login",login.login);

// --------------User--------------------------
router.post("/addUser",auth,user.addUser);
router.get("/viewUser",auth,user.viewUser);
router.get("/searchUser",auth,user.searchUser);
router.put("/updateUser",auth,user.updateUser);
router.delete("/deleteUser",auth,user.deleteUser);
// ------------------------------------------------


//--------------Task---------------------------
router.post("/addTask",task.addTask);
router.get("/viewTask",task.viewTask);
router.get("/searchTask",task.searchTask);
router.put("/updateTask",task.updateTask);
router.delete("/deleteTask",task.deleteTask);


//---------------------------------------------


module.exports=router;  