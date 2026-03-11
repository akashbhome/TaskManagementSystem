let app = require("./src/app.js");
require("dotenv").config();

let port = process.env.TM_Port;

app.listen(port, () => {
    console.log("server start"+port)
});