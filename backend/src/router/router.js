let express=require("express")
let router=express.Router();

let user=require("../controller/userCont.js");

// --------------User--------------------------
router.post("/addUser",user.addUser);
router.get("/viewUser",user.viewUser);
router.get("/searchUser",user.searchUser);
router.put("/updateUser",user.updateUser);
router.delete("/deleteUser",user.deleteUser);
// ------------------------------------------------


module.exports=router;  