const { getAllJobs, addJobs, dropJobs, updateJobs } = require("../controller/user-manager.controller")

const userManagerRouter =  (app) => {
    app.get("/getalljobs",getAllJobs);
    app.post("/addjobs",addJobs);
    app.delete("/jobs/:id",dropJobs);
    app.put("/update/:id",updateJobs)
}
module.exports = {
    userManagerRouter
}