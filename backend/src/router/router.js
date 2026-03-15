let express=require("express")
let router=express.Router();
let login = require("../controller/login.js")
let user=require("../controller/userCont.js");
let auth=require("../middleware/auth.js")

router.post("/login",login.login);

// --------------User--------------------------
router.post("/addUser",auth,user.addUser);
router.get("/viewUser",auth,user.viewUser);
router.get("/searchUser",auth,user.searchUser);
router.put("/updateUser",auth,user.updateUser);
router.delete("/deleteUser",auth,user.deleteUser);
// ------------------------------------------------


//--------------Task---------------------------



//---------------------------------------------


module.exports=router;  