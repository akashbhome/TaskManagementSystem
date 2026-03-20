let task = require("../model/taskModel.js");

// -----------Add Task-------------------------------------------------
exports.addTask = (req, res) => {
    let { name } = req.body;

    task.addTask(name)
        .then((r) => {
            if (r.affectedRows >= 1) {
                res.status(200).json({
                    message: "Task Added Successfully"
                });
            } else {
                res.json({
                    message: "Task Not Added"
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                message: "Server Error",
                error: err.message
            });
        });
};


// -------------View Task------------------------------------------------
exports.viewTask = (req, res) => {
    task.viewTask()
        .then((r) => {
            res.json(r);
        })
        .catch((err) => {
            res.status(500).json({
                message: "Server Error",
                error: err.message
            });
        });
};


// -------------Search Task---------------------------------------------
exports.searchTask = (req, res) => {
    let { search } = req.query;

    task.searchTask(search)
        .then((r) => {
            if (r.length === 0) {
                res.json({
                    message: "Task not found"
                });
            } else {
                res.json({
                    data: r
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                message: "Server Error",
                error: err.message
            });
        });
};


//-------------Update Task------------------------------------------------
exports.updateTask = (req, res) => {
    let { id, name } = req.body;

    task.updateTask(id, name)
        .then((r) => {
            if (r.affectedRows >= 1) {
                res.status(200).json({
                    message: "Task Updated Successfully"
                });
            } else {
                res.json({
                    message: "Task Not Updated"
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                message: "Server Error",
                error: err.message
            });
        });
};


// --------------Delete Task--------------------------------------------
exports.deleteTask = (req, res) => {
    let { id } = req.query;

    task.deleteTask(id)
        .then((r) => {
            if (r.affectedRows >= 1) {
                res.json({
                    message: "Task Deleted Successfully"
                });
            } else {
                res.json({
                    message: "Task Not Deleted"
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                message: "Server Error",
                error: err.message
            });
        });
};