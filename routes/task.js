const fs = require('fs');

module.exports = {
    addTaskPage: (req, res) => {
        res.render('add-task.ejs', {
            title: 'Welcome To The Task App | Add A New Task',
            message: ''
        });
    },
    addTask: (req, res) => {
        // used for images which arent part of this project
        // if (!req.files) {
        //     return res.status(400).send("No files were uploaded")
        // }

        let message = '';
        let description = req.body.description;
        let category = req.body.category;
        var d = new Date();
        var n = d.getTime();
        console.log("Discription ", description)
        console.log('request ', req);
        console.log('body ', req.body);
        console.log('res ', res);

    },
    editTaskPage: () => {},
    editTask: () => {},
    deleteTask: () => {}
}